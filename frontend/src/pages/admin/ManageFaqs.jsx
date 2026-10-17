import React, { useState } from 'react';
import { 
  HelpCircle, 
  Plus, 
  Trash2, 
  Edit2, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare,
  Search,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageFaqs = () => {
  const { data, refetch } = useFetch('/faqs');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: 'General',
    order: 0
  });
  const [editId, setEditId] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const defaultFaqs = [
    {
      id: '1',
      question: 'What is the role of a Structural Engineer vs an Architect?',
      answer: 'While architects design the visual aesthetics, interior layouts, spatial functionality, and exterior envelope of a building, structural engineers are responsible for calculating force vectors, gravity loads, wind shear, and seismic mechanics to ensure the building remains safe, rigid, and standing under extreme conditions.',
      category: 'General'
    },
    {
      id: '2',
      question: 'When do I need to hire a licensed Structural Engineer (PE/SE)?',
      answer: 'You require a licensed structural engineer whenever you build new high-rise or commercial structures, modify load-bearing walls, add additional stories to an existing building, perform seismic retrofitting, repair foundation cracks, or design bridge/infrastructure systems requiring city building permit approval.',
      category: 'Consultation'
    },
    {
      id: '3',
      question: 'What is non-linear dynamic seismic analysis?',
      answer: 'Non-linear dynamic analysis is a sophisticated computerized finite element simulation (FEA) that models how a structural framework deforms and absorbs energy during a real earthquake ground motion recording. It allows us to optimize damper placement and save structural material.',
      category: 'Technical'
    },
    {
      id: '4',
      question: 'How long does a typical structural peer review or evaluation take?',
      answer: 'A standard peer review or structural assessment takes between 1 to 3 weeks depending on the complexity of the building drawings, finite element calculations, and whether non-destructive site testing (NDT) is required.',
      category: 'Process'
    },
    {
      id: '5',
      question: 'Can structural engineering lower construction material costs?',
      answer: 'Yes. Through value engineering, advanced post-tensioning, and optimized steel member sizing, high-performance structural engineering frequently reduces concrete volume and structural steel weight by 15% to 30%, saving developers substantial capital.',
      category: 'Cost & Value'
    }
  ];

  const faqs = data?.faqs?.length ? data.faqs : defaultFaqs;
  const categories = ['All', 'General', 'Consultation', 'Technical', 'Process', 'Cost & Value'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenAdd = () => {
    setEditId(null);
    setFormData({
      question: '',
      answer: '',
      category: 'General',
      order: 0
    });
    setIsModalOpen(true);
  };

  const handleEdit = (faq) => {
    setEditId(faq.id);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category || 'General',
      order: faq.order || 0
    });
    setIsModalOpen(true);
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
      setIsModalOpen(false);
      setEditId(null);
      refetch();
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Error saving FAQ entry.' });
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
              Client Education & Knowledge Base CMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Client FAQs
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Curate frequently asked questions regarding structural peer review, permitting, and engineering rates
            </p>
          </div>

          <button
            onClick={handleOpenAdd}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2 shrink-0"
          >
            <Plus size={16} /> Add FAQ Item
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
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Total FAQ Items</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">{faqs.length}</span>
              <HelpCircle size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Topic Categories</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D4AF37]">
                {categories.length - 1}
              </span>
              <Sparkles size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Live Status</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">Active</span>
              <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30">Public Accordion</span>
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
              placeholder="Search questions or answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121417] rounded-full border border-[#333] pl-10 pr-4 py-2 text-xs text-[#EAEAEA] placeholder:text-[#666] focus:border-[#D4AF37] focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-4 mb-12">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="rounded-full bg-[#121417] border border-[#D4AF37]/40 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                    {faq.category || 'General'}
                  </span>
                  <span className="text-[10px] font-mono text-[#666]">
                    #{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-2.5 leading-snug">
                  {faq.question}
                </h3>

                <p className="text-xs text-[#9CA3AF] leading-relaxed bg-[#121417] p-4 rounded-xl border border-[#2D3137]">
                  {faq.answer}
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-[#26282D] pt-4 mt-4">
                <button
                  onClick={() => handleEdit(faq)}
                  className="rounded-xl p-2 bg-[#121417] text-[#D4AF37] border border-[#333] hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-sm"
                  title="Edit FAQ"
                >
                  <Edit2 size={13} />
                </button>
                <button
                  onClick={() => handleDelete(faq.id)}
                  className="rounded-xl p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                  title="Delete FAQ"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* FAQ Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editId ? 'Edit FAQ Item' : 'Add FAQ Item'}
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs font-mono">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold block">
                Question *
              </label>
              <input
                type="text"
                required
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                placeholder="e.g. When do I require a stamped PE/SE structural calculation package?"
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
                <option value="General">General</option>
                <option value="Consultation">Consultation</option>
                <option value="Technical">Technical</option>
                <option value="Process">Process</option>
                <option value="Cost & Value">Cost & Value</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase text-[#9CA3AF] tracking-wider mb-1.5 font-bold block">
              Clear Structural Engineering Answer *
            </label>
            <textarea
              rows="5"
              required
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              placeholder="Provide a concise, professional answer addressing permitting, calculations, code references, or safety requirements..."
              className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans leading-relaxed"
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-full bg-[#D4AF37] text-[#121417] py-3.5 font-mono font-extrabold uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            {editId ? 'Update FAQ Item' : 'Publish FAQ Item'}
          </button>
        </form>
      </Modal>

    </div>
  );
};
