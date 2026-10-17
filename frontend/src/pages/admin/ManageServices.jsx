import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Building2, Layers, ShieldCheck, Ruler, CheckCircle2, Wrench, Sparkles } from 'lucide-react';
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
    features: 'Wind and seismic dynamic response analysis, Gravity load system optimization, 3D BIM modeling'
  });

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers size={22} className="text-[#D4AF37]" />;
      case 'ShieldCheck': return <ShieldCheck size={22} className="text-[#D4AF37]" />;
      case 'Ruler': return <Ruler size={22} className="text-[#D4AF37]" />;
      default: return <Building2 size={22} className="text-[#D4AF37]" />;
    }
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      title: '',
      icon: 'Building2',
      summary: '',
      description: '',
      features: 'Wind and seismic dynamic response analysis, Gravity load system optimization, 3D BIM modeling'
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
    if (!window.confirm('Delete this structural service module?')) return;
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

      <main className="flex-1 pt-16 lg:pt-8 p-4 sm:p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#26282D]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Engineering Capabilities CMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Engineering Services
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Configure consulting capabilities and technical service modules offered to clients
            </p>
          </div>

          <button
            onClick={handleOpenAdd}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2 shrink-0"
          >
            <Plus size={16} /> Add Service Module
          </button>
        </div>

        {/* Metric Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Total Service Modules</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">{services.length}</span>
              <Wrench size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Publicly Published</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">{services.length}</span>
              <Sparkles size={18} className="text-emerald-400" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Scope of Practice</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">Full Phase</span>
              <span className="text-xs font-mono text-[#D4AF37] px-2 py-0.5 rounded-full bg-[#121417] border border-[#D4AF37]/30">Design-to-Site</span>
            </div>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((srv, index) => {
            const features = typeof srv.features === 'string'
              ? (srv.features.startsWith('[') ? JSON.parse(srv.features) : srv.features.split(',').map(s => s.trim()))
              : (srv.features || []);

            return (
              <div 
                key={srv.id} 
                className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#121417] border border-[#D4AF37]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        {getServiceIcon(srv.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block">
                          Module 0{index + 1}
                        </span>
                        <h3 className="text-base font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {srv.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                    {srv.summary || srv.description}
                  </p>

                  {/* Bulleted feature chips */}
                  {features.length > 0 && (
                    <div className="flex flex-col gap-1.5 bg-[#121417] p-3 rounded-xl border border-[#2D3137] mb-4">
                      {features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-[#EAEAEA]">
                          <CheckCircle2 size={12} className="text-[#D4AF37] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center border-t border-[#26282D] pt-4 mt-2">
                  <span className="text-[10px] font-mono text-[#666] uppercase">
                    Icon: {srv.icon || 'Building2'}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenEdit(srv)}
                      className="rounded-xl p-2 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-sm"
                      title="Edit Service"
                    >
                      <Edit2 size={13} />
                    </button>
                    <button
                      onClick={() => handleDelete(srv.id)}
                      className="rounded-xl p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                      title="Delete Service"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingId ? 'Edit Service Module' : 'Add Service Module'}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs font-mono">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                Service Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Seismic Retrofitting & Structural Assessment"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
              />
            </div>

            <div>
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                Icon Identifier
              </label>
              <select
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="Building2">Building2 (High-Rise)</option>
                <option value="Layers">Layers (Concrete / Steel)</option>
                <option value="ShieldCheck">ShieldCheck (Seismic / Safety)</option>
                <option value="Ruler">Ruler (Peer Review & Advisory)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
              Short Summary *
            </label>
            <textarea
              rows="2"
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="High-level engineering overview displayed on cards..."
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
            ></textarea>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
              Detailed Description
            </label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Full engineering scope, methods, and deliverables..."
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
            ></textarea>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
              Key Capabilities & Features (comma-separated)
            </label>
            <input
              type="text"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="FEA pushover analysis, Gravity load optimization, Code compliance"
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
            />
          </div>

          <button 
            type="submit" 
            className="rounded-full bg-[#D4AF37] text-[#121417] py-3.5 font-mono font-extrabold uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            {editingId ? 'Update Service Module' : 'Publish Service Module'}
          </button>
        </form>
      </Modal>
    </div>
  );
};
