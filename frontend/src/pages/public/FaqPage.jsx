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
      question: 'What does the 5th-Year Civil Engineering Capstone at ASTU entail?',
      answer: 'At Adama Science and Technology University (ASTU) School of Civil Engineering & Architecture (SoCEA), 5th-year students undertake comprehensive capstone engineering theses spanning multi-story reinforced concrete structural analysis, seismic resistance under Rift Valley geology, highway alignment per ERA standards, and geotechnical soil stabilization.',
      category: 'Capstone & Academics'
    },
    {
      id: '2',
      question: 'How do Lemma Techane and the 5th-year student brothers collaborate?',
      answer: 'Our cohort works as an integrated engineering design team. We combine specialized strengths across ETABS structural modeling, AutoCAD Civil 3D corridor geometry, SAP2000 finite element bridge analysis, and ASTU geotechnical soil mechanics lab testing.',
      category: 'Student Cohort'
    },
    {
      id: '3',
      question: 'What building codes and highway standards govern your ASTU engineering designs?',
      answer: 'Our engineering work strictly adheres to the Ethiopian Building Code Standards (EBCS EN 1990 to 1998, harmonized with Eurocodes) and Ethiopian Roads Administration (ERA 2013/2024) Geometric, Pavement, and Drainage Design Manuals.',
      category: 'EBCS & Standards'
    },
    {
      id: '4',
      question: 'Are the ASTU 5th-year candidates available for post-graduation recruitment and project roles?',
      answer: 'Yes. Our graduating civil engineering cohort (Class of 2026) is completing final thesis defenses and actively seeking structural engineering, highway infrastructure, and construction management roles with engineering consultancies and contractors across Ethiopia.',
      category: 'Recruitment'
    },
    {
      id: '5',
      question: 'How do you tackle expansive black cotton soil prevalent in the Adama / Rift Valley region?',
      answer: 'Through ASTU materials and soil laboratory investigations, we analyze Atterberg limits and free swell index, specifying lime/cement chemical stabilization, moisture barrier membranes, and isolated pad footings tied with stiffened grade/strap beams.',
      category: 'Technical Lab'
    }
  ];

  const faqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : defaultFaqs;
  const categories = ['All', 'Capstone & Academics', 'Student Cohort', 'EBCS & Standards', 'Recruitment', 'Technical Lab'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC FAQ & CLIENT ADVISORY HERO SECTION                           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B0C0E] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Ambient Sheen & Radiant Studio Lights */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-[#0B0C0E] dark:via-[#0B0C0E] dark:to-[#0B0C0E] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/[0.02] dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/[0.02] dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-[#0B0C0E] dark:via-[#0B0C0E]/90 to-transparent pointer-events-none"></div>
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
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · 5th Year Capstone &amp; Academic Inquiry FAQ
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
                  Demystifying Physics.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    Clarity
                  </span>
                  <br />
                  on Codes &amp; <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">ASTU Civil.</span>
                </h1>
              </motion.div>

              {/* Narrative Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full space-y-4"
              >
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base leading-relaxed">
                  Clear answers about our 5th-year Civil Engineering capstone, our student brotherhood at ASTU, the codes we design by, and future opportunities.
                </p>

                {/* Key Guidance Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">ASTU SoCEA Class of 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">EBCS EN &amp; ERA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Final Defense Readiness</span>
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
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] border border-[#D4AF37] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Questions</span>
                  <HelpCircle size={15} />
                </a>
                <a
                  href="#glossary"
                  className="rounded-full text-zinc-800 dark:text-zinc-200 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Engineering Glossary</span>
                  <BookOpen size={14} className="text-[#D4AF37]" />
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
                  <span className="block text-xl sm:text-2xl font-black text-[#801834] dark:text-[#E84855] font-mono">5</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Focus Areas</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D4AF37] font-mono">ASTU</span>
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
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
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
                      className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] transition-all text-left group"
                    >
                      <span className="text-[10px] font-mono text-[#801834] dark:text-[#E84855] uppercase tracking-wider block mb-1 font-bold">
                        {f.category} Discipline
                      </span>
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#D4AF37] transition-colors line-clamp-1 mb-1">
                        {f.question}
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
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
        <div className="py-4 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 border-b border-zinc-200/60 dark:border-zinc-800">
          
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
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'text-[#801834] dark:text-[#E84855]'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 rounded-full font-mono ${
                    isSelected 
                      ? 'bg-[#D4AF37] text-zinc-950 font-black' 
                      : 'text-zinc-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Reset */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search questions, codes, fees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pl-9 pr-9 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
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
        <div className="flex flex-col divide-y divide-zinc-200/60 dark:divide-zinc-800 mb-24">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id || index} 
                className="py-6 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left font-black text-base sm:text-lg text-zinc-900 dark:text-zinc-100 hover:text-[#801834] dark:hover:text-[#E84855] flex justify-between items-center gap-4 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="text-[#801834] dark:text-[#E84855]">
                      <HelpCircle size={18} />
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown size={20} className={`text-[#D4AF37] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="pt-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed animate-in fade-in duration-200">
                    <p className="mb-3 leading-relaxed sm:text-base">{faq.answer}</p>
                    <span className="text-[10px] font-mono uppercase text-[#D4AF37] font-bold">
                      Discipline: {faq.category}
                    </span>
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
        <div className="py-10 flex flex-col sm:flex-row justify-between items-center gap-8 border-t border-zinc-200/60 dark:border-zinc-800">
          <div className="text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
              Have a Question for Our ASTU Civil Engineering Cohort?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Whether inquiring about our capstone structural calculation models, highway route designs, or career recruitment opportunities, reach out directly to Lemma and the brothers.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(128,24,52,0.3)] shrink-0 flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
          >
            Connect With Brothers <ArrowUpRight size={15} className="text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </div>
  );
};
