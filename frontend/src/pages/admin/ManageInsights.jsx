import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageInsights = () => {
  const { data, setData } = useFetch('/insights');
  const insights = data?.insights || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Technical Note',
    excerpt: '',
    content: '',
    readTime: '5 min read'
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
    if (!window.confirm('Delete this article?')) return;
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

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-[#333]">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-wider">Manage Technical Insights & Articles</h1>
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Publish engineering updates, notes, and publications</p>
          </div>
          <button
            onClick={handleOpenAdd}
            className="bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
          >
            <Plus size={16} /> Publish Article
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {insights.map((item) => (
            <div key={item.id} className="bg-[#1E2125] border border-[#333] p-6 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase">{item.category} • {item.readTime}</span>
                <h3 className="text-base font-bold text-[#EAEAEA] mt-1">{item.title}</h3>
                <p className="text-xs text-[#9CA3AF] mt-1 line-clamp-1">{item.excerpt}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-2 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37]"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingId ? 'Edit Article' : 'Publish Article'}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Article Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
              />
            </div>
            <div>
              <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Read Time</label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
              />
            </div>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Short Excerpt *</label>
            <textarea
              rows="2"
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            ></textarea>
          </div>

          <div>
            <label className="block uppercase text-[#9CA3AF] font-mono text-[10px] mb-1">Full Content Body</label>
            <textarea
              rows="5"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
            ></textarea>
          </div>

          <button type="submit" className="bg-[#D4AF37] text-[#121417] py-3 font-bold uppercase tracking-widest hover:bg-white">
            Publish Article
          </button>
        </form>
      </Modal>
    </div>
  );
};
