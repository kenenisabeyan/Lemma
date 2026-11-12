import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  HardHat, 
  Search, 
  MessageSquare, 
  ArrowUpRight, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  X,
  Compass,
  FileCheck2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { EngineeringGlossary } from '../../components/engineering/EngineeringGlossary';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const FaqPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const { data } = useFetch('/faqs');

  const defaultFaqs = [
    {
      id: '1',
      question: 'What engineering disciplines and commissions does Amensisa & Partners execute?',
      answer: 'Headquartered through Adama Science and Technology University (ASTU) School of Civil Engineering & Architecture (SoCEA), Amensisa & Partners undertakes multidisciplinary infrastructure commissions spanning multi-story reinforced concrete structural FEA, seismic shear wall resistance under Great Rift Valley Zone 4, highway corridor alignment per ERA 2024 standards, and expansive black cotton soil geotechnical stabilization.',
      category: 'Practice & Governance'
    },
    {
      id: '2',
      question: 'How does Amensisa & Partners organize leadership and multidisciplinary practice divisions?',
      answer: 'Our practice operates as an integrated corporate engineering firm led by Managing Principal Eng. Lemma Amensisa alongside specialized Practice Leads across Computational Structural FEA, Highway Corridor Infrastructure, Geotechnical & Foundation Works, and Field QA/QC Operations.',
      category: 'Practice Leadership'
    },
    {
      id: '3',
      question: 'What building codes and highway standards govern your engineering designs?',
      answer: 'Our engineering work strictly adheres to the Ethiopian Building Code Standards (EBCS EN 1990 to 1998, harmonized with Eurocodes) and Ethiopian Roads Administration (ERA 2013/2024) Geometric, Pavement, and Drainage Design Manuals.',
      category: 'EBCS & Standards'
    },
    {
      id: '4',
      question: 'Is Amensisa & Partners available for commercial engineering commissions and technical audits?',
      answer: 'Yes. Our practice accepts commercial engineering commissions, municipal highway design packages, structural safety audits, and resident engineering supervision across all regions of Ethiopia.',
      category: 'Commissions & Advisory'
    },
    {
      id: '5',
      question: 'How do you tackle expansive black cotton soil prevalent in the Adama / Rift Valley region?',
      answer: 'Through ASTU materials and soil laboratory investigations, we analyze Atterberg limits and free swell index, specifying lime/cement chemical stabilization, moisture barrier membranes, and isolated pad footings tied with stiffened grade/strap beams.',
      category: 'Technical Lab'
    }
  ];

  const faqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : defaultFaqs;
  const categories = ['All', 'Practice & Governance', 'Practice Leadership', 'EBCS & Standards', 'Commissions & Advisory', 'Technical Lab'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D3AE36] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC FAQ & CLIENT ADVISORY HERO SECTION                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#12151C] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Ambient Sheen & Radiant Studio Lights */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-[#12151C] dark:via-[#12151C] dark:to-[#12151C] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#D3AE36]/[0.02] dark:bg-[#D3AE36]/10 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D3AE36]/[0.02] dark:bg-[#D3AE36]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-[#12151C] dark:via-[#12151C]/90 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scope, Headline, Transparency */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  Amensisa &amp; Partners · Practice FAQ &amp; Technical Governance
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1.5"
              >
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-[2.2rem] xl:text-[2.45rem] tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
                  Technical Precision.{' '}
                  <span className="text-[#D3AE36] drop-shadow-[0_4px_20px_rgba(211,174,54,0.3)]">
                    Clarity
                  </span>
                  <br />
                  on Codes &amp; <span className="text-[#D3AE36] opacity-95 inline-block">Practice Governance.</span>
                </h1>
              </motion.div>

              {/* Narrative Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full space-y-4"
              >
                <div className="space-y-2 max-w-xl">
                  <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-sm sm:text-base leading-relaxed text-left">
                    Comprehensive technical advisory and governance guide by <strong className="text-[#D3AE36] font-bold">Amensisa &amp; Partners · ASTU SoCEA Engineering Division</strong>. Unpacking Ethiopian building code standards, finite element methodologies, and commercial commission scopes.
                  </p>

                  {/* Micro-Bullet Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D]/50 shadow-xs">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px] truncate">
                        <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-semibold">Leadership:</strong> Managing Principal &amp; Practice Leads
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D]/50 shadow-xs">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px] truncate">
                        <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-semibold">EBCS &amp; ERA:</strong> Full Code Verification
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="#faq-accordion"
                  className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(211,174,54,0.35)] hover:shadow-[0_14px_32px_rgba(211,174,54,0.5)] border border-[#D3AE36] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Questions</span>
                  <HelpCircle size={15} />
                </a>
                <a
                  href="#glossary"
                  className="rounded-full text-zinc-800 dark:text-zinc-200 hover:text-[#D3AE36] dark:hover:text-[#D3AE36] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Engineering Glossary</span>
                  <BookOpen size={14} className="text-[#D3AE36]" />
                </a>
              </motion.div>

              {/* Quick KPI Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg"
              >
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-zinc-900 dark:text-white font-mono">5th</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">5</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Focus Areas</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">ASTU</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">SoCEA Brotherhood</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Quick FAQ Topic Selector Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <div className="w-full">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Top Consultation Inquiries</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Quick Answer</span>
                </div>

                <div className="flex flex-col gap-3">
                  {defaultFaqs.slice(0, 3).map((f, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(f.category);
                        setOpenIndex(idx);
                        const el = document.getElementById('faq-accordion');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-[#31394D] bg-white/70 dark:bg-[#232936]/80 hover:border-[#D3AE36] transition-all text-left group shadow-xs cursor-pointer"
                    >
                      <span className="text-[10px] font-mono text-[#D3AE36] uppercase tracking-wider block mb-1 font-bold">
                        {f.category} Discipline
                      </span>
                      <h4 className="text-xs font-bold text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] transition-colors line-clamp-1 mb-1">
                        {f.question}
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-[#F8F9FA]/70 line-clamp-1">
                        {f.answer}
                      </p>
                    </button>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 2. FILTER & SEARCH TELEMETRY DOCK                                         */}
      {/* ========================================================================= */}
      <div id="faq-accordion" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-30 scroll-mt-24">
        <div className="py-4 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 border-b border-zinc-200/60 dark:border-[#31394D] pb-6">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none items-center">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? faqs.length
                : faqs.filter(f => f.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D3AE36] text-[#12151C] shadow-[0_4px_14px_rgba(211,174,54,0.3)] font-extrabold'
                      : 'bg-zinc-100 dark:bg-[#232936] text-zinc-600 dark:text-[#F8F9FA]/70 border border-zinc-200/60 dark:border-[#31394D] hover:border-[#D3AE36]/50'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected 
                      ? 'bg-[#12151C] text-[#D3AE36] font-black' 
                      : 'bg-zinc-200 dark:bg-[#12151C] text-zinc-600 dark:text-[#F8F9FA]/60 font-bold'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Reset */}
          <div className="relative min-w-[280px] sm:min-w-[340px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search questions, codes, fees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-[#232936] border border-[#31394D]/30 rounded-full pl-10 pr-9 py-2.5 text-xs text-[#1E2025] dark:text-[#F8F9FA] placeholder:text-zinc-400 dark:placeholder:text-[#F8F9FA]/40 focus:border-[#D3AE36] focus:ring-1 focus:ring-[#D3AE36] focus:outline-none transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-[#F8F9FA]"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. ACCORDION LIST                                                         */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-4 mb-24">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id || index} 
                className={`rounded-3xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white dark:bg-[#232936] border-[#D3AE36]/60 shadow-lg'
                    : 'bg-white/80 dark:bg-[#232936]/70 border-[#31394D]/25 dark:border-[#31394D]/60 hover:border-[#D3AE36]/40 shadow-xs'
                } p-6 sm:p-7 group`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left font-black text-base sm:text-lg text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] dark:group-hover:text-[#D3AE36] flex justify-between items-center gap-4 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="p-2 rounded-xl bg-zinc-100 dark:bg-[#12151C] text-[#D3AE36] border border-zinc-200/60 dark:border-[#31394D] shrink-0">
                      <HelpCircle size={18} />
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <div className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${isOpen ? 'bg-[#D3AE36] text-[#12151C] rotate-180' : 'bg-zinc-100 dark:bg-[#12151C] text-zinc-500 dark:text-zinc-400'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-5 pt-5 border-t border-zinc-100 dark:border-[#31394D]/50 animate-in fade-in duration-300">
                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/80 dark:bg-[#12151C]/60 border border-zinc-200/60 dark:border-[#31394D]/40 mb-3">
                      <p className="text-sm sm:text-base text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed font-sans">
                        <strong className="text-[#D3AE36] font-semibold">✦ Technical Clarification: </strong>
                        {faq.answer}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-zinc-500 dark:text-[#F8F9FA]/60">
                      <span className="flex items-center gap-1.5 text-[#D3AE36]">
                        <CheckCircle2 size={13} /> Code &amp; Academic Verified
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#12151C] uppercase tracking-wider">
                        Discipline: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ======================================================================= */}
        {/* 4. STRUCTURAL ENGINEERING GLOSSARY                                      */}
        {/* ======================================================================= */}
        <div id="glossary" className="mb-24 scroll-mt-24">
          <EngineeringGlossary />
        </div>

        {/* ======================================================================= */}
        {/* 5. BOTTOM CONSULTATION BANNER                                           */}
        {/* ======================================================================= */}
        <div className="my-16 rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/30 p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-left max-w-2xl">
            <span className="text-[10px] font-mono uppercase text-[#D3AE36] tracking-wider block mb-1 font-bold">Amensisa &amp; Partners · Advisory Desk</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1E2025] dark:text-[#F8F9FA] mb-2">
              Have a Technical Question for Amensisa &amp; Partners?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#F8F9FA]/70 leading-relaxed">
              Whether inquiring about our structural dynamic calculation models, highway route designs, or commercial commission RFPs, reach out directly to our engineering desk.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] text-[#12151C] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(211,174,54,0.3)] shrink-0 flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
          >
            Initiate Commission RFP <ArrowUpRight size={15} className="text-[#12151C]" />
          </button>
        </div>

      </div>
    </div>
  );
};
