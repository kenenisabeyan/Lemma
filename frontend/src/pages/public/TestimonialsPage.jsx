import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Quote, 
  Star, 
  Building, 
  ShieldCheck, 
  ArrowUpRight, 
  Search, 
  Sparkles, 
  MessageSquareQuote,
  X,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const TestimonialsPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch('/testimonials');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultTestimonials = [
    {
      id: '1',
      clientName: 'Dr. Dawit Mengistu, PhD',
      clientRole: 'Associate Professor & Capstone Advisor',
      clientCompany: 'ASTU School of Civil Engineering & Architecture (SoCEA)',
      category: 'Academic Faculty',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      content: 'Lemma Techane and his 5th-year brothers demonstrated exemplary structural rigor on their B+G+10 RC tower capstone. Their mastery of ETABS seismic modeling per EBCS EN 1998 sets a benchmark for graduating engineers.',
      rating: 5
    },
    {
      id: '2',
      clientName: 'Eng. Tigist Bekele, PE',
      clientRole: 'Senior Highway Design Engineer',
      clientCompany: 'Oromia Construction Corporation (OCC)',
      category: 'Industry Mentors',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content: 'During their university internship, Lemma and his team performed highway corridor alignments using AutoCAD Civil 3D and verified earthwork balancing with exceptional attention to ERA standards.',
      rating: 5
    },
    {
      id: '3',
      clientName: 'Yonas Tadesse',
      clientRole: '5th Year Civil Engineering Colleague',
      clientCompany: 'ASTU SoCEA Brotherhood · Class of 2026',
      category: 'Student Cohort',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'Collaborating with Lemma across 5 years of rigorous structural mechanics, surveying field camps, and late-night capstone modeling built an unbreakable brotherhood of engineering excellence.',
      rating: 5
    }
  ];

  const testimonials = data?.testimonials?.length ? data.testimonials : defaultTestimonials;
  const categories = ['All', 'Academic Faculty', 'Industry Mentors', 'Student Cohort'];

  const filteredTestimonials = testimonials.filter(t => {
    const roleMatches = selectedCategory === 'All' || 
      t.category === selectedCategory ||
      (selectedCategory === 'Academic Faculty' && (t.category === 'Academic Faculty' || t.clientRole?.toLowerCase().includes('professor') || t.clientCompany?.toLowerCase().includes('astu'))) ||
      (selectedCategory === 'Industry Mentors' && (t.category === 'Industry Mentors' || t.clientRole?.toLowerCase().includes('engineer') || t.clientCompany?.toLowerCase().includes('oromia') || t.clientCompany?.toLowerCase().includes('corporation'))) ||
      (selectedCategory === 'Student Cohort' && (t.category === 'Student Cohort' || t.clientRole?.toLowerCase().includes('colleague') || t.clientCompany?.toLowerCase().includes('brotherhood')));

    const textMatches = searchQuery === '' ||
      t.clientName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.clientRole?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.clientCompany?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.content?.toLowerCase().includes(searchQuery.toLowerCase());

    return roleMatches && textMatches;
  });

  const featuredTestimonial = testimonials[0] || defaultTestimonials[0];

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC TESTIMONIALS HERO SECTION                                    */}
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
            
            {/* Left Column: Scope, Headline, Trust Metrics */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <div className="flex gap-0.5 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  5.0 ★ Rating · ASTU Faculty &amp; Industry Endorsements
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
                  Validated by{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    ASTU Faculty
                  </span>
                  <br />
                  &amp; <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Infrastructure Leaders.
                  </span>
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
                  Academic endorsements, internship supervisor evaluations, and peer testimonials from university professors and industry engineers who have witnessed the dedication and technical capability of our graduating brotherhood.
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">ASTU SoCEA Verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">100% Defense Readiness</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">OCC Internship Honors</span>
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
                  href="#testimonials-grid"
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] border border-[#D4AF37] flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Endorsements</span>
                  <MessageSquareQuote size={15} />
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-full text-zinc-800 dark:text-zinc-200 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Connect With Us</span>
                  <Building2 size={14} className="text-[#D4AF37]" />
                </button>
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
                  <span className="block text-xl sm:text-2xl font-black text-[#D4AF37] font-mono">5.0★</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Faculty Score</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#801834] dark:text-[#E84855] font-mono">ASTU</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">SoCEA Brotherhood</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Featured Architectural Endorsement Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="relative w-full overflow-hidden group">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Spotlight Endorsement</span>
                  </div>
                  <Quote size={18} className="text-[#801834] dark:text-[#E84855]" />
                </div>

                <div className="flex gap-1 text-[#D4AF37] mb-4">
                  {[...Array(featuredTestimonial.rating || 5)].map((_, i) => (
                    <Star key={i} size={15} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base leading-relaxed mb-6 italic font-light">
                  "{featuredTestimonial.content}"
                </p>

                <div className="flex items-center gap-3.5 border-t border-zinc-200/80 dark:border-white/10 pt-4">
                  {featuredTestimonial.avatarUrl ? (
                    <img
                      src={featuredTestimonial.avatarUrl}
                      alt={featuredTestimonial.clientName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/60 shadow-sm"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                      CL
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">{featuredTestimonial.clientName}</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{featuredTestimonial.clientRole}</p>
                    <span className="inline-block rounded-full bg-amber-500/10 border border-[#D4AF37]/40 px-2.5 py-0.5 text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider mt-1 font-bold">
                      {featuredTestimonial.clientCompany}
                    </span>
                  </div>
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
      <div id="testimonials-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-30">
        <div className="py-4 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 border-b border-zinc-200/60 dark:border-zinc-800">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none items-center">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? testimonials.length
                : testimonials.filter(t => {
                    if (t.category === cat) return true;
                    if (cat === 'Architects' && (t.clientRole?.toLowerCase().includes('architect') || t.clientCompany?.toLowerCase().includes('design'))) return true;
                    if (cat === 'Developers' && (t.clientRole?.toLowerCase().includes('development') || t.clientCompany?.toLowerCase().includes('properties'))) return true;
                    if (cat === 'Civic Infrastructure' && (t.clientRole?.toLowerCase().includes('infrastructure') || t.clientCompany?.toLowerCase().includes('transit'))) return true;
                    return false;
                  }).length;
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
              placeholder="Search by client, firm, or quote..."
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
      {/* 3. TESTIMONIALS CARDS GRID                                                */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredTestimonials.length === 0 ? (
          <div className="py-24 text-center mb-16">
            <MessageSquareQuote className="mx-auto w-12 h-12 text-[#D4AF37] mb-3 opacity-75" />
            <p className="text-zinc-900 dark:text-zinc-100 text-base font-bold mb-1">No client endorsements match the selected criteria.</p>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-4">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 text-xs font-mono uppercase font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {filteredTestimonials.map((t) => (
              <div 
                key={t.id} 
                className="group py-6 relative flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1 text-[#D4AF37]">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} size={15} fill="#D4AF37" className="text-[#D4AF37]" />
                      ))}
                    </div>
                    <Quote size={20} className="text-[#801834]/40 dark:text-[#E84855]/40 group-hover:text-[#801834] dark:group-hover:text-[#E84855] transition-colors" />
                  </div>

                  <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-6 italic font-light">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 border-t border-zinc-200/60 dark:border-zinc-800 pt-4">
                  {t.avatarUrl ? (
                    <img src={t.avatarUrl} alt={t.clientName} className="w-11 h-11 rounded-full object-cover" />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                      {t.clientName ? t.clientName.substring(0, 2).toUpperCase() : 'CL'}
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">{t.clientName}</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{t.clientRole}</p>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block font-bold">
                      {t.clientCompany}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ======================================================================= */}
        {/* 4. BOTTOM CONSULTATION BANNER                                           */}
        {/* ======================================================================= */}
        <div className="py-12 border-t border-zinc-200/80 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
              Collaborate with Our <span className="text-[#801834] dark:text-[#E84855]">ASTU Civil Engineering Cohort</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Whether you represent an engineering consultancy seeking top graduating talent or a project team needing capstone modeling, Lemma and the brothers are ready to contribute.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(128,24,52,0.3)] shrink-0 flex items-center gap-2 hover:scale-[1.02]"
          >
            Connect With Brothers <ArrowUpRight size={15} className="text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </div>
  );
};
