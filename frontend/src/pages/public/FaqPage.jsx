import React, { useState } from 'react';
import { ChevronDown, HelpCircle, HardHat, Search, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const FaqPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const { data } = useFetch('/faqs');

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

  const faqs = data?.faqs || defaultFaqs;
  const categories = ['All', 'General', 'Consultation', 'Technical', 'Process', 'Cost & Value'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24 selection:bg-[#D4AF37] selection:text-[#121417]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 border-b border-[#333] pb-10 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Client Education & FAQs
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
            Understanding Structural <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Engineering.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto leading-relaxed">
            Essential questions answered in clear, plain language to clarify engineering processes, building safety standards, and project timelines for clients and developers.
          </p>
        </div>

        {/* Filter & Search Bar (Alazar rounded pill bar) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 bg-[#181A1E] p-3 rounded-2xl border border-[#333]/80 shadow-xl">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto items-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#121417] shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-105'
                    : 'bg-[#121417] text-[#9CA3AF] border border-[#333] hover:text-[#EAEAEA] hover:border-[#D4AF37]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={15} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121417] rounded-full border border-[#333] focus:border-[#D4AF37] text-xs text-[#EAEAEA] placeholder:text-[#666] pl-9 pr-4 py-2 outline-none font-mono transition-colors"
            />
          </div>
        </div>

        {/* Accordion List (Alazar Bento Cards) */}
        <div className="flex flex-col gap-4 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id || index} 
                className="rounded-2xl bg-[#181A1E] border border-[#333]/80 overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/50 shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left font-bold text-base text-[#EAEAEA] hover:text-[#D4AF37] flex justify-between items-center gap-4 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#121417] border border-[#D4AF37]/30 text-[#D4AF37]">
                      <HelpCircle size={18} />
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown size={20} className={`text-[#D4AF37] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#9CA3AF] leading-relaxed border-t border-[#2D3137] bg-[#121417]/40 animate-in fade-in duration-200">
                    <p className="mb-4 leading-relaxed">{faq.answer}</p>
                    <span className="rounded-full text-[10px] font-mono uppercase text-[#D4AF37] bg-[#181A1E] border border-[#D4AF37]/30 px-3 py-1">
                      Discipline: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#181A1E] via-[#14161A] to-[#181A1E] border border-[#333]/80 p-8 text-center shadow-2xl">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#121417] border border-[#D4AF37]/40 text-[#D4AF37] mx-auto mb-4 shadow-md">
            <MessageSquare size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">Have a Question About Your Specific Structural Plan?</h3>
          <p className="text-xs text-[#9CA3AF] max-w-lg mx-auto mb-6 leading-relaxed">
            Every building geometry and soil condition presents unique physics. Reach out directly for preliminary structural feasibility review.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-3 text-xs font-extrabold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] inline-flex items-center gap-2"
          >
            Inquire About Your Project <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
