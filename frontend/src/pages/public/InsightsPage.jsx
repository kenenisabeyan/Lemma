import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Clock, 
  ArrowUpRight, 
  Calendar, 
  Search, 
  Sparkles, 
  BookOpen, 
  X, 
  Layers, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

export const InsightsPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch('/insights');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultArticles = [
    {
      id: '1',
      title: 'Innovations in High-Strength C80 Concrete Formulations & Creep Mechanics',
      slug: 'innovations-high-strength-c80-concrete',
      category: 'Materials Engineering',
      excerpt: 'Examining long-term elastic modulus development, shrinkage dynamics, and hydration heat dissipation in 50+ story high-rise core walls.',
      readTime: '6 min read',
      publishedAt: 'Oct 12, 2026',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'Seismic Retrofitting Strategies for Pre-1980 Commercial Frame Buildings',
      slug: 'seismic-retrofitting-pre-1980-steel-frames',
      category: 'Seismic Resilience',
      excerpt: 'Comparing post-tensioned shear walls vs dynamic fluid viscous dampers under ASCE 41-17 retrofitting standards.',
      readTime: '8 min read',
      publishedAt: 'Sep 28, 2026',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      title: 'Optimizing Steel Frameworks for Reduced Carbon Footprint',
      slug: 'optimizing-wind-damping-outrigger-systems',
      category: 'Sustainable Engineering',
      excerpt: 'Quantifying embodied carbon reduction through high-yield ASTM A992 structural steel optimization and cellular beam design.',
      readTime: '5 min read',
      publishedAt: 'Aug 15, 2026',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80'
    }
  ];

  const articles = data?.insights?.length ? data.insights : defaultArticles;
  const categories = ['All', 'Materials Engineering', 'Seismic Resilience', 'Sustainable Engineering', 'Technical Note'];

  const filteredArticles = articles.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredArticle = articles[0] || defaultArticles[0];

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC INSIGHTS & WHITEPAPERS HERO SECTION                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/80 dark:border-white/10 bg-white/75 dark:bg-[#0B0C0E]/85 backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Ambient Glow & Radiant Light Dome */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white/85 dark:from-[#0B0C0E]/80 dark:via-[#0B0C0E]/50 dark:to-[#0B0C0E]/85 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white/70 dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/5 dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/6 dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scope, Headline, Philosophy */}
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
                  Applied Mechanics & Technical Research Papers
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1.5"
              >
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                  Applied Research.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    Rigorous
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Structural Analysis.
                  </span>
                </h1>
              </motion.div>

              {/* Narrative Frosted Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 sm:p-7"
              >
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base leading-relaxed">
                  Translating advanced structural physics, non-linear finite element mechanics, and concrete chemistry into practical, code-compliant methodologies for practicing engineers and visionary architects.
                </p>

                {/* Authority Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-zinc-200/80 dark:border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <BookOpen size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Peer-Reviewed Papers</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <ShieldCheck size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">ASCE 7 & IBC Commentary</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <Layers size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Free Open Access</span>
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
                  href="#articles-feed"
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] border border-[#D4AF37] flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Research</span>
                  <ArrowRight size={15} />
                </a>
                <button
                  onClick={() => navigate('/resources')}
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Engineering Tools</span>
                  <Sparkles size={14} className="text-[#D4AF37]" />
                </button>
              </motion.div>

            </div>

            {/* Right Column: Featured Research Spotlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="relative rounded-3xl bg-white/85 dark:bg-zinc-900/70 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 overflow-hidden group">
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Featured Whitepaper</span>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase">
                    {featuredArticle.readTime}
                  </span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 shadow-inner mb-4">
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  <span className="absolute top-3 left-3 bg-white/90 dark:bg-zinc-900/90 text-[#801834] dark:text-[#E84855] border border-white/30 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase shadow-xs">
                    {featuredArticle.category}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono text-zinc-300 flex items-center gap-1 mb-1">
                      <Calendar size={11} className="text-[#D4AF37]" /> {featuredArticle.publishedAt}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg leading-tight line-clamp-2">
                      {featuredArticle.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4 line-clamp-2">
                  {featuredArticle.excerpt}
                </p>

                <Link
                  to={`/insights/${featuredArticle.slug || 'innovations-high-strength-c80-concrete'}`}
                  className="rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-[#801834] dark:hover:bg-[#E84855] hover:text-white px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Read Complete Paper <ArrowRight size={13} />
                </Link>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTER & SEARCH TELEMETRY DOCK                                         */}
      {/* ========================================================================= */}
      <div id="articles-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-30">
        <div className="bg-white/95 dark:bg-zinc-900/90 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl border border-white/90 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none items-center">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? articles.length
                : articles.filter(a => a.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-2xl px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#801834] to-[#601227] text-white shadow-md shadow-[#801834]/25 scale-[1.02]'
                      : 'bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/5 hover:border-[#D4AF37]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected 
                      ? 'bg-[#D4AF37] text-zinc-950 font-black' 
                      : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Reset */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search research papers, ASCE codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 pl-10 pr-9 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-[#D4AF37] focus:outline-none transition-colors"
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
      {/* 3. ARTICLES GRID                                                          */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredArticles.length === 0 ? (
          <div className="py-24 text-center bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-zinc-200/80 dark:border-white/10 mb-16 shadow-xs">
            <BookOpen className="mx-auto w-12 h-12 text-[#D4AF37] mb-3 opacity-75" />
            <p className="text-zinc-900 dark:text-zinc-100 text-base font-bold mb-1">No technical publications match your query.</p>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-4">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 text-xs font-mono uppercase font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredArticles.map((item) => (
              <Link
                key={item.id}
                to={`/insights/${item.slug || 'innovations-high-strength-c80-concrete'}`}
                className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="aspect-[16/10] bg-zinc-900 overflow-hidden relative">
                    {item.imageUrl && (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[#801834] dark:text-[#E84855] border border-white/30 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Calendar size={12} className="text-[#D4AF37]" /> {item.publishedAt}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={12} className="text-[#D4AF37]" /> {item.readTime}</span>
                    </div>

                    <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 group-hover:text-[#801834] dark:group-hover:text-[#E84855] transition-colors mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-zinc-200/80 dark:border-white/10 mt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] group-hover:text-[#801834] dark:group-hover:text-[#E84855] transition-colors flex items-center gap-1.5 pt-4">
                    Read Technical Paper <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ======================================================================= */}
        {/* 4. BOTTOM CONSULTATION BANNER                                           */}
        {/* ======================================================================= */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-gradient-to-br from-white/90 via-white/80 to-amber-50/40 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-950/90 backdrop-blur-2xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
              Applying <span className="text-[#801834] dark:text-[#E84855]">Advanced Structural Research</span> to Real Builds
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Need an expert finite element analysis, ASCE 41 seismic evaluation, or code-compliance technical audit for your upcoming project?
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(128,24,52,0.3)] shrink-0 flex items-center gap-2 hover:scale-[1.02]"
          >
            Request Consultation <ArrowUpRight size={15} className="text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </div>
  );
};
