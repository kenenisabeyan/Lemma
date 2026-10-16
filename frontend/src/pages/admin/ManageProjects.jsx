import React, { useState } from 'react';
import { Plus, Edit2, Trash2, CheckCircle2, Upload, Search, X } from 'lucide-react';
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
      if (editingId) {
        await updateProject(editingId, payload);
      } else {
        await createProject(payload);
      }
      setIsModalOpen(false);

      // Refresh list
      const res = await fetch('/api/projects').then(r => r.json());
      if (res.success) setData(res);
    } catch (err) {
      alert('Error saving project: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
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

      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#333]">
          <div>
            <h1 className="text-2xl font-bold text-[#EAEAEA] uppercase tracking-wider">Manage Projects & Case Studies</h1>
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Create, edit, and publish structural portfolio case studies</p>
          </div>

          <button
            onClick={handleOpenAdd}
            className="bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2"
          >
            <Plus size={16} /> Add New Project
          </button>
        </div>

        {/* Project Table */}
        <div className="bg-[#1E2125] border border-[#333] overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#121417] border-b border-[#333] uppercase text-[#9CA3AF] font-mono">
              <tr>
                <th className="p-4">Project Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Location</th>
                <th className="p-4">Featured</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333]">
              {projects.map((proj) => (
                <tr key={proj.id} className="hover:bg-[#121417]/50 transition-colors">
                  <td className="p-4 font-bold text-[#EAEAEA]">
                    <div className="flex items-center gap-3">
                      {proj.imageUrl && (
                        <img src={proj.imageUrl} alt="" className="w-10 h-8 object-cover border border-[#333]" />
                      )}
                      <div>
                        {proj.title}
                        <span className="text-[10px] text-[#9CA3AF] font-normal block">{proj.structuralSystem}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-[#D4AF37]">{proj.category}</td>
                  <td className="p-4 text-[#9CA3AF]">{proj.location}</td>
                  <td className="p-4">
                    {proj.isFeatured ? (
                      <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 font-bold uppercase text-[9px]">
                        Featured
                      </span>
                    ) : (
                      <span className="text-[#9CA3AF] text-[9px]">Standard</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleOpenEdit(proj)}
                        className="p-1.5 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37]"
                        title="Edit Project"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id)}
                        className="p-1.5 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white"
                        title="Delete Project"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>

      {/* CRUD MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingId ? 'Edit Structural Project' : 'Create New Structural Project'}
        maxWidth="max-w-4xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-xs">
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Project Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="Commercial High-Rise">Commercial High-Rise</option>
                <option value="Infrastructure & Bridges">Infrastructure & Bridges</option>
                <option value="Special Structures">Special Structures</option>
                <option value="Seismic Rehabilitation">Seismic Rehabilitation</option>
                <option value="Residential & Mixed-Use">Residential & Mixed-Use</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Location *</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Year Completed</label>
              <input
                type="text"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Client Name</label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Structural System *</label>
              <input
                type="text"
                required
                placeholder="e.g. Dual Core Shear Wall & Outrigger Truss"
                value={formData.structuralSystem}
                onChange={(e) => setFormData({ ...formData, structuralSystem: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Key Materials</label>
              <input
                type="text"
                placeholder="e.g. C80 High-Strength Concrete, Structural Steel"
                value={formData.materials}
                onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          {/* Case Study Narrative Fields */}
          <div className="border-t border-[#333] pt-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase text-[#D4AF37]">Case Study Narrative Fields</h4>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">1. Scope Overview</label>
              <textarea
                rows="2"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">2. Structural Challenge</label>
              <textarea
                rows="2"
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">3. Engineering Approach & FEA</label>
              <textarea
                rows="2"
                value={formData.engineeringApproach}
                onChange={(e) => setFormData({ ...formData, engineeringApproach: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">4. Implemented Solution</label>
              <textarea
                rows="2"
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">5. Quantified Result</label>
              <textarea
                rows="2"
                value={formData.result}
                onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              ></textarea>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 border-t border-[#333] pt-4">
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Software Stack (comma-separated)</label>
              <input
                type="text"
                placeholder="ETABS, SAP2000, REVIT"
                value={formData.softwareUsed}
                onChange={(e) => setFormData({ ...formData, softwareUsed: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] mb-1">Upload Image File</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full bg-[#121417] border border-[#333] p-2 text-[#9CA3AF]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isFeatured"
              checked={formData.isFeatured}
              onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
              className="accent-[#D4AF37]"
            />
            <label htmlFor="isFeatured" className="text-xs uppercase font-mono text-[#EAEAEA]">
              Show on Homepage Featured Section
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#D4AF37] text-[#121417] py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            {editingId ? 'Update Project' : 'Publish New Project'}
          </button>
        </form>
      </Modal>

    </div>
  );
};
