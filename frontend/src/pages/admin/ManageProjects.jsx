import React, { useState } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  CheckCircle2, 
  Upload, 
  Search, 
  X, 
  FolderKanban, 
  Sparkles, 
  Layers, 
  LayoutGrid, 
  Table as TableIcon,
  MapPin
} from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import { createProject, updateProject, deleteProject } from '../../services/projectApi';

export const ManageProjects = () => {
  const { data, setData, loading } = useFetch('/projects');
  const projects = data?.projects || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'

  const [formData, setFormData] = useState({
    title: '',
    category: 'Commercial High-Rise',
    location: '',
    year: new Date().getFullYear().toString(),
    client: '',
    role: 'Lead Structural Engineer',
    structuralSystem: '',
    materials: '',
    description: '',
    challenge: '',
    engineeringApproach: '',
    solution: '',
    result: '',
    imageUrl: '',
    softwareUsed: 'ETABS, SAP2000, REVIT Structure',
    isFeatured: false
  });

  const categories = ['All', 'Commercial High-Rise', 'Infrastructure & Bridges', 'Special Structures', 'Seismic Rehabilitation', 'Residential & Mixed-Use'];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.structuralSystem?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredCount = projects.filter(p => p.isFeatured).length;

  const handleOpenAdd = () => {
    setEditingId(null);
    setImageFile(null);
    setFormData({
      title: '',
      category: 'Commercial High-Rise',
      location: '',
      year: new Date().getFullYear().toString(),
      client: '',
      role: 'Lead Structural Engineer',
      structuralSystem: '',
      materials: '',
      description: '',
      challenge: '',
      engineeringApproach: '',
      solution: '',
      result: '',
      imageUrl: '',
      softwareUsed: 'ETABS, SAP2000, REVIT Structure',
      isFeatured: false
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (proj) => {
    setEditingId(proj.id);
    setImageFile(null);

    let softStr = proj.softwareUsed;
    if (typeof softStr === 'string' && softStr.startsWith('[')) {
      try {
        softStr = JSON.parse(softStr).join(', ');
      } catch (e) {
        // Keep string
      }
    }

    setFormData({
      title: proj.title || '',
      category: proj.category || 'Commercial High-Rise',
      location: proj.location || '',
      year: proj.year || '',
      client: proj.client || '',
      role: proj.role || 'Lead Structural Engineer',
      structuralSystem: proj.structuralSystem || '',
      materials: proj.materials || '',
      description: proj.description || '',
      challenge: proj.challenge || '',
      engineeringApproach: proj.engineeringApproach || '',
      solution: proj.solution || '',
      result: proj.result || '',
      imageUrl: proj.imageUrl || '',
      softwareUsed: softStr || '',
      isFeatured: proj.isFeatured || false
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const softArray = formData.softwareUsed.split(',').map(s => s.trim()).filter(Boolean);

    const payload = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'softwareUsed') {
        payload.append('softwareUsed', JSON.stringify(softArray));
      } else {
        payload.append(key, formData[key]);
      }
    });

    if (imageFile) {
      payload.append('image', imageFile);
    }

    try {
      let savedProject;
      if (editingId) {
        const res = await updateProject(editingId, payload);
        savedProject = res.project;
        setData({
          ...data,
          projects: projects.map(p => p.id === editingId ? savedProject : p)
        });
      } else {
        const res = await createProject(payload);
        savedProject = res.project;
        setData({
          ...data,
          projects: [savedProject, ...projects]
        });
      }
      setIsModalOpen(false);
    } catch (err) {
      alert('Error saving project: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this structural case study?')) return;
    try {
      await deleteProject(id);
      setData({ ...data, projects: projects.filter(p => p.id !== id) });
    } catch (err) {
      alert('Failed to delete project.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 pt-16 lg:pt-8 p-4 sm:p-8 overflow-y-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-[#26282D]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Engineering Portfolio CMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Projects & Case Studies
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Publish and configure structural case studies with FEA parameters & code results
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* View Mode Toggle */}
            <div className="flex bg-[#181A1E] p-1 rounded-xl border border-[#333]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-[#D4AF37] text-[#121417]' : 'text-[#9CA3AF] hover:text-[#EAEAEA]'}`}
                title="Grid Card View"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'table' ? 'bg-[#D4AF37] text-[#121417]' : 'text-[#9CA3AF] hover:text-[#EAEAEA]'}`}
                title="Table View"
              >
                <TableIcon size={16} />
              </button>
            </div>

            <button
              onClick={handleOpenAdd}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2"
            >
              <Plus size={16} /> New Case Study
            </button>
          </div>
        </div>

        {/* Quick Metric Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Total Case Studies</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">{projects.length}</span>
              <FolderKanban size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Featured on Home</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">{featuredCount}</span>
              <Sparkles size={18} className="text-emerald-400" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">High-Rise Towers</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">
                {projects.filter(p => p.category?.includes('High-Rise')).length}
              </span>
              <Layers size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Infrastructure</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">
                {projects.filter(p => p.category?.includes('Bridges') || p.category?.includes('Infrastructure')).length}
              </span>
              <span className="text-xs font-mono text-[#D4AF37] px-2 py-0.5 rounded-full bg-[#121417] border border-[#D4AF37]/30">Active</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8 bg-[#181A1E] p-3 rounded-2xl border border-[#333]/80 shadow-xl">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#121417] shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                    : 'bg-[#121417] text-[#9CA3AF] border border-[#333] hover:text-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
            <input
              type="text"
              placeholder="Filter by title, system, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121417] rounded-full border border-[#333] pl-10 pr-4 py-2 text-xs text-[#EAEAEA] placeholder:text-[#666] focus:border-[#D4AF37] focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* Content View: Grid or Table */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl bg-[#181A1E] border border-[#333] p-12 text-center">
            <FolderKanban className="mx-auto w-12 h-12 text-[#9CA3AF]/40 mb-3" />
            <h4 className="text-sm font-mono font-bold uppercase text-[#EAEAEA]">No projects found</h4>
            <p className="text-xs text-[#9CA3AF] mt-1 max-w-sm mx-auto">
              No structural case studies match the selected criteria. Try resetting filters or add a new project.
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          /* Bento Cards Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id}
                className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-44 bg-[#121417] overflow-hidden">
                    {proj.imageUrl ? (
                      <img 
                        src={proj.imageUrl} 
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#666] font-mono text-xs uppercase">
                        No Image Assigned
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181A1E] via-transparent to-transparent"></div>

                    {/* Featured Badge */}
                    <div className="absolute top-3 right-3">
                      {proj.isFeatured ? (
                        <span className="rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[10px] font-mono font-bold px-2.5 py-1 backdrop-blur-md flex items-center gap-1 shadow-md">
                          <Sparkles size={10} /> Featured
                        </span>
                      ) : (
                        <span className="rounded-full bg-black/60 border border-[#333] text-[#9CA3AF] text-[10px] font-mono px-2.5 py-1 backdrop-blur-md">
                          Standard
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-full bg-black/75 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono font-bold px-3 py-1 uppercase backdrop-blur-md">
                        {proj.category}
                      </span>
                      {proj.year && (
                        <span className="text-[11px] font-mono text-[#EAEAEA] bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                          {proj.year}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors leading-snug mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] font-mono mb-3 line-clamp-1">
                      {proj.structuralSystem || 'Engineered Structural Framework'}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-[#9CA3AF] font-mono border-t border-[#26282D] pt-3">
                      <span className="flex items-center gap-1 truncate">
                        <MapPin size={12} className="text-[#D4AF37] shrink-0" /> {proj.location || 'Site Location'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-4 bg-[#14161A] border-t border-[#26282D] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#666] uppercase">
                    ID: #{proj.id?.toString().substring(0, 6)}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenEdit(proj)}
                      className="rounded-xl p-2 bg-[#181A1E] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-sm"
                      title="Edit Case Study"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(proj.id)}
                      className="rounded-xl p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                      title="Delete Case Study"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 overflow-x-auto shadow-xl mb-12">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#121417] border-b border-[#333] uppercase text-[#9CA3AF]">
                <tr>
                  <th className="p-4">Project Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Year</th>
                  <th className="p-4">Featured</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#26282D]">
                {filteredProjects.map((proj) => (
                  <tr key={proj.id} className="hover:bg-[#121417]/50 transition-colors">
                    <td className="p-4 text-[#EAEAEA]">
                      <div className="flex items-center gap-3">
                        {proj.imageUrl && (
                          <img src={proj.imageUrl} alt="" className="w-11 h-9 rounded-lg object-cover border border-[#333]" />
                        )}
                        <div>
                          <span className="font-bold block text-sm font-sans">{proj.title}</span>
                          <span className="text-[10px] text-[#9CA3AF] font-normal block truncate max-w-xs">{proj.structuralSystem}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-[#D4AF37] whitespace-nowrap">{proj.category}</td>
                    <td className="p-4 text-[#9CA3AF] whitespace-nowrap">{proj.location}</td>
                    <td className="p-4 text-[#9CA3AF]">{proj.year || '—'}</td>
                    <td className="p-4">
                      {proj.isFeatured ? (
                        <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold uppercase text-[9px] inline-flex items-center gap-1">
                          <Sparkles size={10} /> Featured
                        </span>
                      ) : (
                        <span className="text-[#666] text-[9px] uppercase">Standard</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleOpenEdit(proj)}
                          className="rounded-xl p-2 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37] transition-all"
                          title="Edit Project"
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => handleDelete(proj.id)}
                          className="rounded-xl p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white transition-all"
                          title="Delete Project"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </main>

      {/* CRUD MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingId ? 'Edit Structural Project' : 'Create New Structural Project'}
        maxWidth="max-w-4xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-xs font-mono">
          
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Project Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Apex High-Rise Tower"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="Commercial High-Rise">Commercial High-Rise</option>
                <option value="Infrastructure & Bridges">Infrastructure & Bridges</option>
                <option value="Special Structures">Special Structures</option>
                <option value="Seismic Rehabilitation">Seismic Rehabilitation</option>
                <option value="Residential & Mixed-Use">Residential & Mixed-Use</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Location *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Metropolis, NY"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Year Completed
              </label>
              <input
                type="text"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                placeholder="2025"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Client / Developer
              </label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="Apex Global Group"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Structural System *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dual Core Shear Wall & Outrigger Truss"
                value={formData.structuralSystem}
                onChange={(e) => setFormData({ ...formData, structuralSystem: e.target.value })}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Key Materials
              </label>
              <input
                type="text"
                placeholder="e.g. C80 High-Strength Concrete, Grade 65 Steel"
                value={formData.materials}
                onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Case Study Narrative Fields */}
          <div className="rounded-2xl bg-[#121417] border border-[#2D3137] p-5 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase text-[#D4AF37] tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              Detailed Engineering Narrative (Case Study)
            </h4>

            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] mb-1">1. Scope Overview</label>
              <textarea
                rows="2"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Summary of architectural program and structural volume..."
                className="w-full bg-[#181A1E] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-xs"
              ></textarea>
            </div>

            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] mb-1">2. Structural Challenge</label>
              <textarea
                rows="2"
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                placeholder="Geotechnical soil strata, wind shear or seismic acceleration hurdles..."
                className="w-full bg-[#181A1E] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-xs"
              ></textarea>
            </div>

            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] mb-1">3. Engineering Approach & FEA Modeling</label>
              <textarea
                rows="2"
                value={formData.engineeringApproach}
                onChange={(e) => setFormData({ ...formData, engineeringApproach: e.target.value })}
                placeholder="Finite element dynamic simulations, damper tuning, wind tunnel tests..."
                className="w-full bg-[#181A1E] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-xs"
              ></textarea>
            </div>

            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] mb-1">4. Implemented Solution</label>
              <textarea
                rows="2"
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                placeholder="Specific structural details deployed on site..."
                className="w-full bg-[#181A1E] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-xs"
              ></textarea>
            </div>

            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] mb-1">5. Quantified Result</label>
              <textarea
                rows="2"
                value={formData.result}
                onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                placeholder="Reduced steel weight by 18%, saved 3 months schedule, LEED Platinum..."
                className="w-full bg-[#181A1E] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-xs"
              ></textarea>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Software Stack (comma-separated)
              </label>
              <input
                type="text"
                placeholder="ETABS, SAP2000, REVIT Structure"
                value={formData.softwareUsed}
                onChange={(e) => setFormData({ ...formData, softwareUsed: e.target.value })}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold">
                Upload New Image File
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-2.5 text-[#9CA3AF] text-xs file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-[#181A1E] file:text-[#D4AF37]"
              />
            </div>
          </div>

          {/* Featured Toggle Switch */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#121417] border border-[#2D3137]">
            <input
              type="checkbox"
              id="isFeatured"
              checked={formData.isFeatured}
              onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
              className="w-4 h-4 accent-[#D4AF37] rounded"
            />
            <label htmlFor="isFeatured" className="text-xs uppercase font-bold text-[#EAEAEA] cursor-pointer">
              Feature this project on public Homepage Showcase
            </label>
          </div>

          <button
            type="submit"
            className="rounded-full bg-[#D4AF37] text-[#121417] py-3.5 text-xs font-mono font-extrabold uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            {editingId ? 'Update Structural Case Study' : 'Publish Structural Case Study'}
          </button>
        </form>
      </Modal>

    </div>
  );
};
