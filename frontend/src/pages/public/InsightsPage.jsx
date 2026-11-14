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
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const InsightsPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch('/insights');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultArticles = [
    {
      id: '1',
      title: 'EBCS EN 1998 Seismic Design Provisions for Multi-Story RC Frames in Great Rift Valley',
      slug: 'ebcs-en-1998-seismic-design-rift-valley',
      category: 'Seismic & Structural',
      excerpt: 'Evaluating dynamic response spectrum calculations, inter-story drift limits, and ductility detailing for reinforced concrete buildings in Ethiopia Seismic Zone 4.',
      readTime: '7 min read',
      publishedAt: 'Oct 12, 2026',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'Expansive Black Cotton Soil Stabilization with Hydrated Lime in Adama Subgrades',
      slug: 'expansive-black-cotton-soil-stabilization-adama',
      category: 'Geotechnical Engineering',
      excerpt: 'Experimental laboratory investigation of Atterberg limits, swell pressure reduction, and CBR improvement using 4% to 6% lime admixtures in East Shoa soils.',
      readTime: '6 min read',
      publishedAt: 'Sep 28, 2026',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      title: 'AutoCAD Civil 3D Highway Route Alignment & Mass-Haul Optimization per ERA Manuals',
      slug: 'autocad-civil-3d-highway-alignment-era',
      category: 'Highway & Transportation',
      excerpt: 'Balancing cut and fill earthwork volumes while enforcing minimum stopping sight distances and transition curves on Ethiopian trunk corridors.',
      readTime: '8 min read',
      publishedAt: 'Aug 15, 2026',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80'
    }
  ];

  const articles = data?.insights?.length ? data.insights : defaultArticles;
  const categories = ['All', 'Seismic & Structural', 'Geotechnical Engineering', 'Highway & Transportation', 'Technical Note'];

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
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D3AE36] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC INSIGHTS & WHITEPAPERS HERO SECTION                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8F9FA] dark:bg-[#12151C] transition-colors">
        
        {/* Ambient Glow */}
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#D3AE36]/[0.02] dark:bg-[#D3AE36]/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D3AE36]/[0.02] dark:bg-[#D3AE36]/10 blur-[120px] pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F9FA] dark:from-[#12151C] to-transparent pointer-events-none"></div>
        </div>

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
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · 5th Year Technical Research Papers
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
                  Applied Research.{' '}
                  <span className="text-[#D3AE36] drop-shadow-[0_4px_20px_rgba(211,174,54,0.3)]">
                    Rigorous
                  </span>
                  <br />
                  <span className="text-[#D3AE36] opacity-95 inline-block">
                    Civil & Structural Analysis.
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
                <div className="p-4 sm:p-5 rounded-3xl bg-white/80 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm backdrop-blur-xs space-y-3.5 max-w-xl">
                  <div className="flex items-center justify-between border-b border-[#31394D]/15 dark:border-[#31394D]/50 pb-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1E2025]/70 dark:text-[#F8F9FA]/70 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36]"></span>
                      ASTU SoCEA Student Technical Archive
                    </span>
                    <span className="text-[10px] font-mono text-[#D3AE36] font-bold bg-[#D3AE36]/10 border border-[#D3AE36]/30 px-2.5 py-0.5 rounded-full">
                      Open Access
                    </span>
                  </div>

                  <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-xs sm:text-sm leading-relaxed text-left font-medium">
                    Applied engineering research, laboratory soil testing notes, and code evaluations authored by <strong className="text-[#D3AE36] font-bold">ASTU 5th-Year Civil Engineering Brothers</strong>.
                  </p>

                  {/* Micro-Bullet Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5 font-mono text-xs">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50/90 dark:bg-[#12151C]/70 border border-zinc-200/80 dark:border-[#31394D]/60 shadow-xs">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-[11px] truncate">
                        <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-bold">Seismic:</strong> EBCS EN 1998 Zone 4
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50/90 dark:bg-[#12151C]/70 border border-zinc-200/80 dark:border-[#31394D]/60 shadow-xs">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-[11px] truncate">
                        <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-bold">Soils:</strong> Lime Stabilization (CBR)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Authority Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#1E2025]/80 dark:text-[#F8F9FA]/80">
                    <BookOpen size={15} className="text-[#D3AE36] shrink-0" />
                    <span className="font-semibold">ASTU SoCEA Capstones</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1E2025]/80 dark:text-[#F8F9FA]/80">
                    <ShieldCheck size={15} className="text-[#D3AE36] shrink-0" />
                    <span className="font-semibold">EBCS &amp; ERA Commentary</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1E2025]/80 dark:text-[#F8F9FA]/80">
                    <Layers size={15} className="text-[#D3AE36] shrink-0" />
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
                  className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(211,174,54,0.35)] hover:shadow-[0_14px_32px_rgba(211,174,54,0.5)] border border-[#D3AE36] flex items-center gap-2 cursor-pointer font-mono"
                >
                  <span>Explore Research</span>
                  <ArrowRight size={15} />
                </a>
                <button
                  onClick={() => navigate('/resources')}
                  className="rounded-full text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer font-mono border border-transparent hover:border-[#31394D]/30"
                >
                  <span>Engineering Tools</span>
                  <Sparkles size={14} className="text-[#D3AE36]" />
                </button>
              </motion.div>

              {/* Quick KPI Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg"
              >
                <div className="p-3 rounded-2xl bg-white/80 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D] text-left shadow-xs">
                  <span className="block text-xl sm:text-2xl font-black text-[#1E2025] dark:text-[#F8F9FA] font-mono">12+</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">Research Papers</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/80 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D] text-left shadow-xs">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">3</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">Focus Disciplines</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/80 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D] text-left shadow-xs">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">Free</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">Open Access</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Featured Research Spotlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="relative w-full overflow-hidden group rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] p-5 shadow-xl">
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#31394D]/25 dark:border-[#31394D] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                    <span className="font-bold text-[#1E2025] dark:text-[#F8F9FA] uppercase tracking-wider">Featured Whitepaper</span>
                  </div>
                  <span className="text-[10px] text-[#D3AE36] font-bold uppercase">
                    {featuredArticle.readTime}
                  </span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#12151C] shadow-inner border border-[#31394D]/30 dark:border-[#31394D] mb-4">
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  <span className="absolute top-3 left-3 bg-black/65 backdrop-blur-md text-[#D3AE36] border border-[#D3AE36]/30 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase shadow-xs">
                    {featuredArticle.category}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-[#F8F9FA]">
                    <span className="text-[10px] font-mono text-zinc-300 flex items-center gap-1 mb-1">
                      <Calendar size={11} className="text-[#D3AE36]" /> {featuredArticle.publishedAt}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg leading-tight line-clamp-2">
                      {featuredArticle.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/75 leading-relaxed mb-4 line-clamp-2">
                  {featuredArticle.excerpt}
                </p>

                <Link
                  to={`/insights/${featuredArticle.slug || 'innovations-high-strength-c80-concrete'}`}
                  className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Read Complete Paper</span>
                  <ArrowRight size={13} className="text-[#12151C]" />
                </Link>

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
      <div id="articles-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-30">
        <div className="py-4 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 border-b border-[#31394D]/25 dark:border-[#31394D]">
          
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
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 rounded-full cursor-pointer ${
                    isSelected
                      ? 'bg-[#D3AE36] text-[#12151C] shadow-sm font-extrabold'
                      : 'text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] hover:bg-[#12151C]/5 dark:hover:bg-[#232936]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected 
                      ? 'bg-[#12151C] text-[#F8F9FA] font-black' 
                      : 'bg-[#12151C]/10 dark:bg-[#12151C] text-[#1E2025]/70 dark:text-[#F8F9FA]/70'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Reset */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D3AE36] w-4 h-4" />
            <input
              type="text"
              placeholder="Search research papers, EBCS codes, ERA manuals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-[#232936] rounded-full border border-[#31394D]/30 dark:border-[#31394D] pl-10 pr-9 py-2.5 text-xs text-[#1E2025] dark:text-[#F8F9FA] placeholder:text-[#1E2025]/50 dark:placeholder:text-[#F8F9FA]/50 focus:border-[#D3AE36] focus:outline-none transition-colors shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1E2025]/60 dark:text-[#F8F9FA]/60 hover:text-[#D3AE36] cursor-pointer"
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
          <div className="py-24 text-center mb-16">
            <BookOpen className="mx-auto w-12 h-12 text-[#D3AE36] mb-3 opacity-75" />
            <p className="text-[#1E2025] dark:text-[#F8F9FA] text-base font-bold mb-1">No technical publications match your query.</p>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-4">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="rounded-full bg-[#D3AE36] text-[#12151C] px-5 py-2 text-xs font-mono uppercase font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredArticles.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Link
                  key={item.id}
                  to={`/insights/${item.slug || 'ebcs-en-1998-seismic-design-rift-valley'}`}
                  className={`rounded-3xl ${
                    isEven ? 'bg-[#F8F9FA] dark:bg-[#232936]' : 'bg-[#DFE2EB] dark:bg-[#1E2025]'
                  } border border-[#31394D]/25 dark:border-[#31394D] p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden`}
                >
                <div>
                  <div className="aspect-[16/10] bg-[#12151C] overflow-hidden relative rounded-2xl mb-4 border border-[#31394D]/30 dark:border-[#31394D]">
                    {item.imageUrl && (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 rounded-full bg-black/65 backdrop-blur-md text-[#D3AE36] border border-[#D3AE36]/30 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-[#1E2025]/60 dark:text-[#F8F9FA]/60 mb-2 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Calendar size={12} className="text-[#D3AE36]" /> {item.publishedAt}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={12} className="text-[#D3AE36]" /> {item.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] dark:group-hover:text-[#D3AE36] transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/75 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] group-hover:text-[#C29F2F] transition-colors flex items-center gap-1.5">
                    Read Paper <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <span className="text-[10px] font-mono text-[#1E2025]/50 dark:text-[#F8F9FA]/50">
                    ASTU SoCEA
                  </span>
                </div>
              </Link>
            ); })}
          </div>
        )}

        {/* ======================================================================= */}
        {/* 4. BOTTOM CONSULTATION BANNER ARCHITECTURAL DIV CARD                    */}
        {/* ======================================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row justify-between items-center gap-8 mt-12">
          <div className="text-left max-w-2xl space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#D3AE36] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Technical Research &amp; Advisory</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1E2025] dark:text-[#F8F9FA] tracking-tight leading-snug">
              Applying <span className="text-[#D3AE36]">Advanced Engineering Research</span> to Real Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed">
              Need finite element analysis, EBCS seismic checks, ERA road alignments, or soil stabilization advice from our ASTU 5th-year student cohort?
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] text-[#12151C] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer active:scale-95 border border-[#D3AE36]"
          >
            <span>Connect With Our Team</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};
