import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Star, Quote, Search, Sparkles, MessageSquareQuote } from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageTestimonials = () => {
  const { data, setData } = useFetch('/testimonials');
  const testimonials = data?.testimonials || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    clientName: '',
    clientRole: '',
    clientCompany: '',
    content: '',
    rating: 5
  });

  const filteredTestimonials = testimonials.filter(t => {
    return searchQuery === '' ||
      t.clientName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.clientCompany?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.content?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const fiveStarCount = testimonials.filter(t => (t.rating || 5) >= 5).length;

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
    if (!window.confirm('Delete this client testimonial endorsement?')) return;
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

      <main className="flex-1 pt-16 lg:pt-8 p-4 sm:p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#26282D]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Client Trust & Reviews CMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Client Testimonials
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Curate architect and developer endorsements displayed on public pages
            </p>
          </div>

          <button
            onClick={handleOpenAdd}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2 shrink-0"
          >
            <Plus size={16} /> Add Endorsement
          </button>
        </div>

        {/* Metric Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Total Testimonials</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">{testimonials.length}</span>
              <MessageSquareQuote size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">5-Star Endorsements</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D4AF37]">{fiveStarCount}</span>
              <Sparkles size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Client Satisfaction</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">100%</span>
              <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30">Verified</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4 mb-8 bg-[#181A1E] p-3 rounded-2xl border border-[#333]/80 shadow-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
            <input
              type="text"
              placeholder="Search by client name, firm or testimonial text..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121417] rounded-full border border-[#333] pl-10 pr-4 py-2 text-xs text-[#EAEAEA] placeholder:text-[#666] focus:border-[#D4AF37] focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* Testimonials Bento Cards */}
        {filteredTestimonials.length === 0 ? (
          <div className="rounded-2xl bg-[#181A1E] border border-[#333] p-12 text-center">
            <MessageSquareQuote className="mx-auto w-12 h-12 text-[#9CA3AF]/40 mb-3" />
            <h4 className="text-sm font-mono font-bold uppercase text-[#EAEAEA]">No endorsements found</h4>
            <p className="text-xs text-[#9CA3AF] mt-1">Try another search or add a new client endorsement.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filteredTestimonials.map((t) => (
              <div 
                key={t.id} 
                className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1 text-[#D4AF37]">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} size={14} fill="#D4AF37" className="text-[#D4AF37]" />
                      ))}
                    </div>
                    <Quote size={18} className="text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  <p className="text-xs text-[#EAEAEA] italic mb-6 leading-relaxed bg-[#121417] p-4 rounded-xl border border-[#2D3137]">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#26282D] pt-4 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#121417] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-mono font-bold text-xs shadow-sm">
                      {t.clientName ? t.clientName.substring(0, 2).toUpperCase() : 'CL'}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#EAEAEA] font-mono">{t.clientName}</h4>
                      <p className="text-[10px] text-[#9CA3AF] font-mono mt-0.5">
                        {t.clientRole} • <span className="text-[#D4AF37]">{t.clientCompany}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenEdit(t)}
                      className="rounded-xl p-2 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-sm"
                      title="Edit Testimonial"
                    >
                      <Edit2 size={13} />
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="rounded-xl p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                      title="Delete Testimonial"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingId ? 'Edit Client Testimonial' : 'Add Client Testimonial'}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs font-mono">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">Client Name *</label>
              <input
                type="text"
                required
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                placeholder="e.g. Sarah Jenkins, AIA"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
              />
            </div>
            <div>
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">Client Professional Role</label>
              <input
                type="text"
                placeholder="e.g. Principal Architect / VP Development"
                value={formData.clientRole}
                onChange={(e) => setFormData({ ...formData, clientRole: e.target.value })}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">Company / Architecture Firm</label>
            <input
              type="text"
              placeholder="e.g. ArchiTech Global Design"
              value={formData.clientCompany}
              onChange={(e) => setFormData({ ...formData, clientCompany: e.target.value })}
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
            />
          </div>

          {/* Interactive Star Rating Selector */}
          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">Rating Score</label>
            <div className="flex items-center gap-2 bg-[#121417] p-3 rounded-xl border border-[#333] w-max">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="p-1 hover:scale-125 transition-transform"
                >
                  <Star
                    size={20}
                    fill={star <= formData.rating ? "#D4AF37" : "none"}
                    className={star <= formData.rating ? "text-[#D4AF37]" : "text-[#444]"}
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-[#D4AF37] ml-2 font-mono">
                {formData.rating} of 5 Stars
              </span>
            </div>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">Endorsement Content *</label>
            <textarea
              rows="4"
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Enter the client review praising engineering precision, schedule delivery, or FEA capabilities..."
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-xs"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="rounded-full bg-[#D4AF37] text-[#121417] py-3.5 font-mono font-extrabold uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            {editingId ? 'Update Client Testimonial' : 'Publish Client Testimonial'}
          </button>
        </form>
      </Modal>
    </div>
  );
};
