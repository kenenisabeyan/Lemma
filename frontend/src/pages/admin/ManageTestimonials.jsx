import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Star } from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageTestimonials = () => {
  const { data, setData } = useFetch('/testimonials');
  const testimonials = data?.testimonials || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    clientName: '',
    clientRole: '',
    clientCompany: '',
    content: '',
    rating: 5
  });

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({ clientName: '', clientRole: '', clientCompany: '', content: '', rating: 5 });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (t) => {
    setEditingId(t.id);
    setFormData({
      clientName: t.clientName || '',
      clientRole: t.clientRole || '',
      clientCompany: t.clientCompany || '',
      content: t.content || '',
      rating: t.rating || 5
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/testimonials/${editingId}`, formData);
      } else {
        await api.post('/testimonials', formData);
      }
      setIsModalOpen(false);
      const res = await api.get('/testimonials');
      if (res.data.success) setData(res.data);
    } catch (err) {
      alert('Error saving testimonial: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this testimonial?')) return;
    try {
      await api.delete(`/testimonials/${id}`);
      setData({ ...data, testimonials: testimonials.filter(t => t.id !== id) });
    } catch (err) {
      alert('Failed to delete testimonial.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-[#333]">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-wider">Manage Client Testimonials</h1>
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Manage architect and developer reviews</p>
          </div>
          <button
            onClick={handleOpenAdd}
            className="bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
          >
            <Plus size={16} /> Add Testimonial
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#1E2125] border border-[#333] p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#D4AF37] mb-3">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" />
                  ))}
                </div>
                <p className="text-xs text-[#EAEAEA] italic mb-4">"{t.content}"</p>
                <h4 className="text-sm font-bold text-[#EAEAEA]">{t.clientName}</h4>
                <p className="text-[10px] text-[#9CA3AF]">{t.clientRole} • {t.clientCompany}</p>
              </div>

              <div className="flex justify-end gap-2 border-t border-[#333] pt-4 mt-4">
                <button
                  onClick={() => handleOpenEdit(t)}
                  className="p-1.5 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37]"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="p-1.5 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingId ? 'Edit Testimonial' : 'Add Testimonial'}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Client Name *</label>
              <input
                type="text"
                required
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
              />
            </div>
            <div>
              <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Client Role</label>
              <input
                type="text"
                placeholder="e.g. Principal Architect"
                value={formData.clientRole}
                onChange={(e) => setFormData({ ...formData, clientRole: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
              />
            </div>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Company / Organization</label>
            <input
              type="text"
              placeholder="e.g. ArchiTech Global"
              value={formData.clientCompany}
              onChange={(e) => setFormData({ ...formData, clientCompany: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            />
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Testimonial Content *</label>
            <textarea
              rows="4"
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            ></textarea>
          </div>

          <button type="submit" className="bg-[#D4AF37] text-[#121417] py-3 font-bold uppercase tracking-widest hover:bg-white">
            Save Testimonial
          </button>
        </form>
      </Modal>
    </div>
  );
};
