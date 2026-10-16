import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Trash2, 
  Edit, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  FolderOpen
} from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageResources = () => {
  const { data, refetch } = useFetch('/resources');
  const [isEditing, setIsEditing] = useState(false);
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

  const resources = data?.resources || [];

  const handleEdit = (res) => {
    setEditId(res.id);
    setFormData({
      title: res.title,
      category: res.category,
      format: res.format,
      fileSize: res.fileSize,
      fileUrl: res.fileUrl,
      description: res.description,
      isPublic: res.isPublic !== false
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      setIsEditing(false);
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
      refetch();
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Error saving resource document.' });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-[#333]">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-wider text-[#EAEAEA]">Manage Engineering Resources</h1>
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Add & publish downloadable guides, calculation sheets & CAD details</p>
          </div>

          {!isEditing && (
            <button
              onClick={() => {
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
                setIsEditing(true);
              }}
              className="bg-[#D4AF37] text-[#121417] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1.5"
            >
              <Plus size={16} /> Add Resource
            </button>
          )}
        </div>

        {statusMessage && (
          <div className={`mb-6 p-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
            statusMessage.type === 'success' ? 'bg-emerald-950/40 border border-emerald-500/50 text-emerald-300' : 'bg-red-950/40 border border-red-500/50 text-red-300'
          }`}>
            {statusMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            {statusMessage.text}
          </div>
        )}

        {/* Edit / Create Form */}
        {isEditing && (
          <div className="bg-[#181A1E] border border-[#333] p-6 mb-10">
            <h3 className="text-sm font-bold uppercase text-[#D4AF37] tracking-wider mb-6 flex items-center gap-2">
              <FolderOpen size={16} /> {editId ? 'Edit Resource Document' : 'Publish New Resource Document'}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">Document Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. High-Rise Lateral Drift Calculation Sheet"
                    className="w-full bg-[#121417] border border-[#333] p-2.5 text-xs text-[#EAEAEA] focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#121417] border border-[#333] p-2.5 text-xs text-[#EAEAEA] focus:border-[#D4AF37] outline-none"
                  >
                    <option value="Design Guides">Design Guides</option>
                    <option value="Technical Specifications">Technical Specifications</option>
                    <option value="CAD / BIM Templates">CAD / BIM Templates</option>
                    <option value="Engineering Calculations">Engineering Calculations</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">File Format</label>
                  <input
                    type="text"
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    placeholder="e.g. PDF, PDF / DWG, XLS"
                    className="w-full bg-[#121417] border border-[#333] p-2.5 text-xs text-[#EAEAEA] focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">File Size</label>
                  <input
                    type="text"
                    value={formData.fileSize}
                    onChange={(e) => setFormData({ ...formData, fileSize: e.target.value })}
                    placeholder="e.g. 2.4 MB"
                    className="w-full bg-[#121417] border border-[#333] p-2.5 text-xs text-[#EAEAEA] focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">File URL / Download Path</label>
                  <input
                    type="text"
                    value={formData.fileUrl}
                    onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
                    placeholder="/uploads/sample-guide.pdf"
                    className="w-full bg-[#121417] border border-[#333] p-2.5 text-xs text-[#EAEAEA] focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">Document Description & Scope</label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Summarize the calculations, code citations, and application of this document..."
                  className="w-full bg-[#121417] border border-[#333] p-2.5 text-xs text-[#EAEAEA] focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-[#121417] text-[#9CA3AF] border border-[#333] px-5 py-2 text-xs font-bold uppercase tracking-wider hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#D4AF37] text-[#121417] px-6 py-2 text-xs font-extrabold uppercase tracking-wider hover:bg-white"
                >
                  {editId ? 'Save Changes' : 'Publish Resource'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Resources Table */}
        <div className="bg-[#181A1E] border border-[#333] overflow-hidden">
          <div className="p-4 border-b border-[#333] text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
            Published Reference Documents ({resources.length})
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#121417] border-b border-[#333] text-[#9CA3AF] uppercase font-mono text-[10px]">
                <tr>
                  <th className="p-4">Document Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Format</th>
                  <th className="p-4">Size</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D3137]">
                {resources.map((item) => (
                  <tr key={item.id} className="hover:bg-[#121417]/50">
                    <td className="p-4 font-bold text-[#EAEAEA] max-w-xs">{item.title}</td>
                    <td className="p-4">
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-[#121417] px-2 py-0.5 border border-[#333]">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-[#9CA3AF]">{item.format}</td>
                    <td className="p-4 font-mono text-[#9CA3AF]">{item.fileSize}</td>
                    <td className="p-4 text-right">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-1.5 bg-[#121417] text-[#9CA3AF] hover:text-[#D4AF37] border border-[#333]"
                          title="Edit"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 bg-[#121417] text-red-400 hover:text-red-300 border border-[#333]"
                          title="Delete"
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
        </div>

      </main>
    </div>
  );
};
