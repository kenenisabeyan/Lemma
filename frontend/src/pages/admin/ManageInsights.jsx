import React, { useState } from 'react';
import { Plus, Edit2, Trash2, FileText, Search, Clock, Sparkles, BookOpen } from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageInsights = () => {
  const { data, setData } = useFetch('/insights');
  const insights = data?.insights || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [formData, setFormData] = useState({
    title: '',
    category: 'Technical Note',
    excerpt: '',
    content: '',
    readTime: '5 min read'
  });

  const categories = ['All', 'Technical Note', 'Code Compliance', 'Seismic Analysis', 'High-Rise Design'];

  const filteredInsights = insights.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      title: '',
      category: 'Technical Note',
      excerpt: '',
      content: '',
      readTime: '5 min read'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (article) => {
    setEditingId(article.id);
    setFormData({
      title: article.title || '',
      category: article.category || 'Technical Note',
      excerpt: article.excerpt || '',
      content: article.content || '',
      readTime: article.readTime || '5 min read'
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/insights/${editingId}`, formData);
      } else {
        await api.post('/insights', formData);
      }
      setIsModalOpen(false);
      const res = await api.get('/insights');
      if (res.data.success) setData(res.data);
    } catch (err) {
      alert('Error saving article: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this technical article?')) return;
    try {
      await api.delete(`/insights/${id}`);
      setData({ ...data, insights: insights.filter(i => i.id !== id) });
    } catch (err) {
      alert('Failed to delete article.');
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
              Publications & Engineering Notes CMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Technical Insights
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Publish engineering updates, code changes, and peer-reviewed design whitepapers
            </p>
          </div>

          <button
            onClick={handleOpenAdd}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2 shrink-0"
          >
            <Plus size={16} /> Publish Article
          </button>
        </div>

        {/* Metric Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Total Publications</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">{insights.length}</span>
              <BookOpen size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Technical Notes</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D4AF37]">
                {insights.filter(i => i.category === 'Technical Note').length || insights.length}
              </span>
              <FileText size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Status</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">Live</span>
              <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30">Indexed</span>
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
              placeholder="Search articles by title or excerpt..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121417] rounded-full border border-[#333] pl-10 pr-4 py-2 text-xs text-[#EAEAEA] placeholder:text-[#666] focus:border-[#D4AF37] focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* Articles List / Bento Cards */}
        {filteredInsights.length === 0 ? (
          <div className="rounded-2xl bg-[#181A1E] border border-[#333] p-12 text-center">
            <FileText className="mx-auto w-12 h-12 text-[#9CA3AF]/40 mb-3" />
            <h4 className="text-sm font-mono font-bold uppercase text-[#EAEAEA]">No publications found</h4>
            <p className="text-xs text-[#9CA3AF] mt-1">Try another search filter or publish a new article.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mb-12">
            {filteredInsights.map((item) => (
              <div 
                key={item.id} 
                className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-[#121417] border border-[#D4AF37]/40 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#9CA3AF] flex items-center gap-1">
                      <Clock size={11} className="text-[#D4AF37]" /> {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9CA3AF] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="rounded-xl p-2.5 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-sm"
                    title="Edit Article"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-xl p-2.5 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                    title="Delete Article"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingId ? 'Edit Engineering Insight' : 'Publish Engineering Insight'}
        maxWidth="max-w-3xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs font-mono">
          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
              Article Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Non-Linear Pushover Analysis under ASCE 7-22 Seismic Provisions"
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="Technical Note">Technical Note</option>
                <option value="Code Compliance">Code Compliance</option>
                <option value="Seismic Analysis">Seismic Analysis</option>
                <option value="High-Rise Design">High-Rise Design</option>
              </select>
            </div>
            <div>
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                Estimated Read Time
              </label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                placeholder="e.g. 6 min read"
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
              Executive Summary / Excerpt *
            </label>
            <textarea
              rows="2"
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Brief summary displayed on article cards..."
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
            ></textarea>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
              Full Technical Content Body
            </label>
            <textarea
              rows="7"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="In-depth equations, engineering methodologies, and code references..."
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans leading-relaxed"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="rounded-full bg-[#D4AF37] text-[#121417] py-3.5 font-mono font-extrabold uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            {editingId ? 'Update Technical Article' : 'Publish Technical Article'}
          </button>
        </form>
      </Modal>
    </div>
  );
};
