import React, { useState } from 'react';
import { 
  HelpCircle, 
  Plus, 
  Trash2, 
  Edit, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageFaqs = () => {
  const { data, refetch } = useFetch('/faqs');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: 'General',
    order: 0
  });
  const [editId, setEditId] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const faqs = data?.faqs || [];

  const handleEdit = (faq) => {
    setEditId(faq.id);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      order: faq.order || 0
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this client FAQ question?')) return;
    try {
      await api.delete(`/faqs/${id}`);
      setStatusMessage({ type: 'success', text: 'FAQ deleted successfully.' });
      refetch();
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Failed to delete FAQ.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/faqs/${editId}`, formData);
        setStatusMessage({ type: 'success', text: 'FAQ updated successfully!' });
      } else {
        await api.post('/faqs', formData);
        setStatusMessage({ type: 'success', text: 'New FAQ added successfully!' });
      }
      setIsEditing(false);
      setEditId(null);
      setFormData({
        question: '',
        answer: '',
        category: 'General',
        order: 0
      });
      refetch();
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Error saving FAQ.' });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-[#333]">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-wider text-[#EAEAEA]">Manage Client FAQs</h1>
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Configure client education questions, process guides & engineering answers</p>
          </div>

          {!isEditing && (
            <button
              onClick={() => {
                setEditId(null);
                setFormData({
                  question: '',
                  answer: '',
                  category: 'General',
                  order: 0
                });
                setIsEditing(true);
              }}
              className="bg-[#D4AF37] text-[#121417] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1.5"
            >
              <Plus size={16} /> Add FAQ
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
              <MessageSquare size={16} /> {editId ? 'Edit FAQ Item' : 'Add New FAQ Item'}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">Question</label>
                  <input
                    type="text"
                    required
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    placeholder="e.g. When do I legally need a licensed Structural Engineer?"
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
                    <option value="General">General</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Technical">Technical</option>
                    <option value="Process">Process</option>
                    <option value="Cost & Value">Cost & Value</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-1">Answer (Plain, Clear Language)</label>
                <textarea
                  rows={4}
                  required
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  placeholder="Explain clearly so non-engineers can easily understand..."
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
                  {editId ? 'Save Changes' : 'Publish FAQ'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* FAQs Table */}
        <div className="bg-[#181A1E] border border-[#333] overflow-hidden">
          <div className="p-4 border-b border-[#333] text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
            All FAQ Items ({faqs.length})
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#121417] border-b border-[#333] text-[#9CA3AF] uppercase font-mono text-[10px]">
                <tr>
                  <th className="p-4">Question</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Answer Preview</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D3137]">
                {faqs.map((faq) => (
                  <tr key={faq.id} className="hover:bg-[#121417]/50">
                    <td className="p-4 font-bold text-[#EAEAEA] max-w-xs">{faq.question}</td>
                    <td className="p-4">
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-[#121417] px-2 py-0.5 border border-[#333]">
                        {faq.category}
                      </span>
                    </td>
                    <td className="p-4 text-[#9CA3AF] line-clamp-2 max-w-md">{faq.answer}</td>
                    <td className="p-4 text-right">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => handleEdit(faq)}
                          className="p-1.5 bg-[#121417] text-[#9CA3AF] hover:text-[#D4AF37] border border-[#333]"
                          title="Edit"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(faq.id)}
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
