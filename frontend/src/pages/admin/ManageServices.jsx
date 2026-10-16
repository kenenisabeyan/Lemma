import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageServices = () => {
  const { data, setData } = useFetch('/services');
  const services = data?.services || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    icon: 'Building2',
    summary: '',
    description: '',
    features: 'Wind and seismic analysis, Gravity load optimization'
  });

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      title: '',
      icon: 'Building2',
      summary: '',
      description: '',
      features: 'Wind and seismic analysis, Gravity load optimization'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (srv) => {
    setEditingId(srv.id);
    let featStr = srv.features;
    if (typeof featStr === 'string' && featStr.startsWith('[')) {
      try {
        featStr = JSON.parse(featStr).join(', ');
      } catch (e) {}
    }
    setFormData({
      title: srv.title || '',
      icon: srv.icon || 'Building2',
      summary: srv.summary || '',
      description: srv.description || '',
      features: featStr || ''
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const featArray = formData.features.split(',').map(s => s.trim()).filter(Boolean);
    const payload = { ...formData, features: featArray };

    try {
      if (editingId) {
        await api.put(`/services/${editingId}`, payload);
      } else {
        await api.post('/services', payload);
      }
      setIsModalOpen(false);
      const res = await api.get('/services');
      if (res.data.success) setData(res.data);
    } catch (err) {
      alert('Error saving service: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this service module?')) return;
    try {
      await api.delete(`/services/${id}`);
      setData({ ...data, services: services.filter(s => s.id !== id) });
    } catch (err) {
      alert('Failed to delete service.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-[#333]">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-wider">Manage Engineering Services</h1>
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Configure offered services and capabilities</p>
          </div>
          <button
            onClick={handleOpenAdd}
            className="bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
          >
            <Plus size={16} /> Add Service
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((srv) => (
            <div key={srv.id} className="bg-[#1E2125] border border-[#333] p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#EAEAEA] mb-2">{srv.title}</h3>
                <p className="text-xs text-[#9CA3AF] mb-4 leading-relaxed">{srv.summary || srv.description}</p>
              </div>
              <div className="flex justify-end gap-2 border-t border-[#333] pt-4">
                <button
                  onClick={() => handleOpenEdit(srv)}
                  className="p-1.5 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37]"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => handleDelete(srv.id)}
                  className="p-1.5 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingId ? 'Edit Service' : 'Add Service'}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Service Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            />
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Short Summary *</label>
            <textarea
              rows="2"
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            ></textarea>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Detailed Description</label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            ></textarea>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Key Features (comma-separated)</label>
            <input
              type="text"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            />
          </div>

          <button type="submit" className="bg-[#D4AF37] text-[#121417] py-3 font-bold uppercase tracking-widest hover:bg-white">
            Save Service
          </button>
        </form>
      </Modal>
    </div>
  );
};
