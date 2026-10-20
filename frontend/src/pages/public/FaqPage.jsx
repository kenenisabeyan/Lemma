import React, { useState } from 'react';
import { ChevronDown, HelpCircle, HardHat, Search, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { EngineeringGlossary } from '../../components/engineering/EngineeringGlossary';

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

  const faqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : defaultFaqs;
  const categories = ['All', 'General', 'Consultation', 'Technical', 'Process', 'Cost & Value'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-transparent text-inherit pt-28 pb-24 selection:bg-[#801834] selection:text-white overflow-hidden">
      {/* Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#801834]/10 dark:bg-[#801834]/15 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#801834]/8 dark:bg-[#801834]/12 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 border-b border-zinc-200/80 dark:border-zinc-800 pb-10 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#801834] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#801834]"></span>
            </span>
            Client Education & FAQs
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.08] mb-5">
            Understanding Structural <span className="text-[#801834] dark:text-[#E84855]">Engineering.</span>
          </h1>
          <div className="rounded-2xl bg-white dark:bg-[#181A1E] backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-w-2xl mx-auto">
            <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
              Essential questions answered in clear, plain language to clarify engineering processes, building safety standards, and project timelines for clients and developers.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 bg-white dark:bg-[#181A1E] p-3 rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 shadow-sm dark:shadow-xl">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto items-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] shadow-sm scale-105'
                    : 'bg-zinc-100 dark:bg-[#121417] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-[#9CA3AF]" size={15} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-[#121417] rounded-full border border-zinc-200 dark:border-[#333] focus:border-[#801834] dark:focus:border-[#D4AF37] text-xs text-zinc-900 dark:text-[#EAEAEA] placeholder:text-zinc-400 dark:placeholder:text-[#666] pl-9 pr-4 py-2 outline-none font-mono transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id || index} 
                className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 overflow-hidden transition-all duration-300 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left font-bold text-base text-zinc-900 dark:text-[#EAEAEA] hover:text-[#801834] dark:hover:text-[#D4AF37] flex justify-between items-center gap-4 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/30 text-[#801834] dark:text-[#D4AF37]">
                      <HelpCircle size={18} />
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown size={20} className={`text-[#801834] dark:text-[#D4AF37] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-zinc-600 dark:text-[#9CA3AF] leading-relaxed border-t border-zinc-200 dark:border-[#2D3137] bg-zinc-50/60 dark:bg-[#121417]/40 animate-in fade-in duration-200">
                    <p className="mb-4 leading-relaxed">{faq.answer}</p>
                    <span className="rounded-full text-[10px] font-mono uppercase text-[#801834] dark:text-[#D4AF37] bg-zinc-100 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#D4AF37]/30 px-3 py-1 font-bold">
                      Discipline: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Structural Engineering Glossary & Code Formula Reference */}
        <div className="mb-20">
          <EngineeringGlossary />
        </div>

        {/* Still have questions banner */}
        <div className="rounded-2xl bg-white dark:bg-gradient-to-r dark:from-[#181A1E] dark:via-[#14161A] dark:to-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 text-center shadow-xl dark:shadow-2xl">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/40 text-[#801834] dark:text-[#D4AF37] mx-auto mb-4 shadow-sm">
            <MessageSquare size={24} />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-2">Have a Question About Your Specific Structural Plan?</h3>
          <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] max-w-lg mx-auto mb-6 leading-relaxed">
            Every building geometry and soil condition presents unique physics. Reach out directly for preliminary structural feasibility review.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] px-8 py-3 text-xs font-extrabold uppercase tracking-widest hover:bg-zinc-900 dark:hover:bg-white transition-all shadow-md inline-flex items-center gap-2"
          >
            Inquire About Your Project <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
