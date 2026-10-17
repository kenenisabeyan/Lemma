import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Trash2, 
  Edit2, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  FolderOpen,
  Search,
  Sparkles
} from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageResources = () => {
  const { data, refetch } = useFetch('/resources');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [formData, setFormData] = useState({
    title: '',
    category: 'Design Guides',
    format: 'PDF',
    fileSize: '2.5 MB',
    fileUrl: '/uploads/sample-guide.pdf',
    description: '',
    isPublic: true
  });
  const [editId, setEditId] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const defaultResources = [
    {
      id: '1',
      title: 'High-Rise Structural Design Checklist (IBC 2024 & ASCE 7-22)',
      category: 'Design Guides',
      format: 'PDF',
      fileSize: '2.4 MB',
      description: 'Comprehensive audit template covering lateral drift limits, outrigger truss geometry, and seismic response spectrum factors.'
    },
    {
      id: '2',
      title: 'Seismic Evaluation & Retrofit Guide for Concrete Structures',
      category: 'Technical Specifications',
      format: 'PDF',
      fileSize: '4.1 MB',
      description: 'Step-by-step guidance on non-destructive coring, pushover curve validation, and fiber-reinforced polymer (FRP) application.'
    },
    {
      id: '3',
      title: 'Structural Steel Connection Detailing Reference Sheet',
      category: 'CAD / BIM Templates',
      format: 'PDF / DWG',
      fileSize: '8.7 MB',
      description: 'Moment frame connection details, beam-to-column stiffener plates, and shear tab calculation formulas.'
    },
    {
      id: '4',
      title: 'Post-Tensioned Concrete Floor Slab Thickness Estimator',
      category: 'Engineering Calculations',
      format: 'PDF / XLS',
      fileSize: '1.2 MB',
      description: 'Empirical formulation matrix for unbonded post-tensioned tendon spacing and deflection limits.'
    }
  ];

  const resources = data?.resources?.length ? data.resources : defaultResources;

  const categories = ['All', 'Design Guides', 'Technical Specifications', 'CAD / BIM Templates', 'Engineering Calculations'];

  const filteredResources = resources.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenAdd = () => {
    setEditId(null);
    setFormData({
      title: '',
      category: 'Design Guides',
      format: 'PDF',
      fileSize: '2.5 MB',
      fileUrl: '/uploads/sample-guide.pdf',
      description: '',
      isPublic: true
    });
    setIsModalOpen(true);
  };

  const handleEdit = (res) => {
    setEditId(res.id);
    setFormData({
      title: res.title,
      category: res.category,
      format: res.format,
      fileSize: res.fileSize || '2.5 MB',
      fileUrl: res.fileUrl || '/uploads/sample-guide.pdf',
      description: res.description,
      isPublic: res.isPublic !== false
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this resource document?')) return;
    try {
      await api.delete(`/resources/${id}`);
      setStatusMessage({ type: 'success', text: 'Resource document removed successfully.' });
      refetch();
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Failed to delete resource.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/resources/${editId}`, formData);
        setStatusMessage({ type: 'success', text: 'Resource updated successfully!' });
      } else {
        await api.post('/resources', formData);
        setStatusMessage({ type: 'success', text: 'New resource published successfully!' });
      }
      setIsModalOpen(false);
      setEditId(null);
      refetch();
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Error saving resource document.' });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 pt-16 lg:pt-8 p-4 sm:p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#26282D]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Downloadable Docs & Templates CMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Engineering Resources
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Publish design guidelines, code compliance sheets, CAD details, and calculation formulas
            </p>
          </div>

          <button
            onClick={handleOpenAdd}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2 shrink-0"
          >
            <Plus size={16} /> Add Document
          </button>
        </div>

        {statusMessage && (
          <div className={`mb-6 p-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${
            statusMessage.type === 'success' 
              ? 'bg-emerald-950/40 border border-emerald-500/50 text-emerald-300' 
              : 'bg-red-950/40 border border-red-500/50 text-red-300'
          }`}>
            {statusMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            {statusMessage.text}
          </div>
        )}

        {/* Metric Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Total Resources</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">{resources.length}</span>
              <FileText size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Calculation Sheets</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D4AF37]">
                {resources.filter(r => r.category === 'Engineering Calculations').length || 2}
              </span>
              <Sparkles size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Public Access</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">Available</span>
              <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30">Free Download</span>
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
              placeholder="Search resource files or formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121417] rounded-full border border-[#333] pl-10 pr-4 py-2 text-xs text-[#EAEAEA] placeholder:text-[#666] focus:border-[#D4AF37] focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* Resources Bento Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {filteredResources.map((item) => (
            <div 
              key={item.id} 
              className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#121417] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                    <FileText size={20} />
                  </div>
                  <span className="rounded-full text-[10px] font-mono font-bold text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 uppercase tracking-wider bg-[#121417]">
                    {item.format} • {item.fileSize || '2.5 MB'}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-1.5">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#26282D] pt-4 mt-2">
                <span className="text-[10px] font-mono text-[#666] uppercase">
                  ID: #{item.id?.toString().substring(0, 6)}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="rounded-xl p-2 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-sm"
                    title="Edit Resource"
                  >
                    <Edit2 size={13} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-xl p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                    title="Delete Resource"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Resource Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editId ? 'Edit Resource Document' : 'Publish New Resource Document'}
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs font-mono">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold block">
                Document Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. High-Rise Lateral Drift Calculation Sheet"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold block">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="Design Guides">Design Guides</option>
                <option value="Technical Specifications">Technical Specifications</option>
                <option value="CAD / BIM Templates">CAD / BIM Templates</option>
                <option value="Engineering Calculations">Engineering Calculations</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold block">
                File Format (e.g. PDF, XLS, DWG)
              </label>
              <input
                type="text"
                value={formData.format}
                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                placeholder="PDF / DWG"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold block">
                Estimated File Size
              </label>
              <input
                type="text"
                value={formData.fileSize}
                onChange={(e) => setFormData({ ...formData, fileSize: e.target.value })}
                placeholder="e.g. 3.4 MB"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold block">
              Document Description & Code Compliance *
            </label>
            <textarea
              rows="3"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Outline IBC codes, ASCE guidelines, calculation equations, and target engineering disciplines..."
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-full bg-[#D4AF37] text-[#121417] py-3.5 font-mono font-extrabold uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            {editId ? 'Update Resource Document' : 'Publish Resource Document'}
          </button>
        </form>
      </Modal>

    </div>
  );
};
