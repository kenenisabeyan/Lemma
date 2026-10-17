import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Clock, ArrowUpRight, Calendar, Search, Sparkles, BookOpen } from 'lucide-react';
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
      excerpt: 'Examining long-term elastic modulus development, shrinkage dynamics, and hydration heat dissipation in high-rise core walls.',
      readTime: '6 min read',
      publishedAt: '2026-10-12',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'Seismic Retrofitting Strategies for Pre-1980 Commercial Frame Buildings',
      slug: 'seismic-retrofitting-pre-1980-steel-frames',
      category: 'Seismic Resilience',
      excerpt: 'Comparing post-tensioned shear walls vs dynamic fluid viscous dampers under ASCE 41-17 retrofitting standards.',
      readTime: '8 min read',
      publishedAt: '2026-09-28',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      title: 'Optimizing Steel Frameworks for Reduced Carbon Footprint',
      slug: 'optimizing-wind-damping-outrigger-systems',
      category: 'Sustainable Engineering',
      excerpt: 'Quantifying embodied carbon reduction through high-yield ASTM A992 structural steel optimization and cellular beam design.',
      readTime: '5 min read',
      publishedAt: '2026-08-15',
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

  return (
    <div className="relative min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24 selection:bg-[#D4AF37] selection:text-[#121417] overflow-hidden">
      {/* Alazar Signature Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#D4AF37]/15 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/10 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 border-b border-[#333] pb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Technical Knowledge & Publications
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Insights.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base lg:text-lg max-w-3xl leading-relaxed">
            Technical papers, industry notes, code analysis, and design methodology articles published for structural engineering professionals and project developers.
          </p>
        </div>

        {/* Filter Controls Bar (Signature Alazar pill bar) */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-12 bg-[#181A1E] p-3 rounded-2xl border border-[#333]/80 shadow-xl">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#121417] shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-105'
                    : 'bg-[#121417] text-[#9CA3AF] border border-[#333] hover:text-[#EAEAEA] hover:border-[#D4AF37]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
            <input
              type="text"
              placeholder="Search papers, ASCE codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121417] rounded-full border border-[#333] pl-10 pr-4 py-2 text-xs text-[#EAEAEA] placeholder:text-[#666] focus:border-[#D4AF37] focus:outline-none transition-colors font-mono"
            />
          </div>

        </div>

        {/* Articles Grid (Bento 3-Col Grid) */}
        {filteredArticles.length === 0 ? (
          <div className="py-20 text-center bg-[#181A1E] rounded-2xl border border-[#333] mb-16">
            <BookOpen className="mx-auto w-12 h-12 text-[#9CA3AF]/40 mb-3" />
            <p className="text-[#9CA3AF] text-sm font-mono uppercase tracking-wider">
              No technical publications match the selected criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredArticles.map((item) => (
              <Link
                key={item.id}
                to={`/insights/${item.slug || 'innovations-high-strength-c80-concrete'}`}
                className="rounded-2xl bg-[#181A1E] border border-[#333]/80 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)]"
              >
                <div>
                  <div className="aspect-[16/10] bg-[#141619] overflow-hidden border-b border-[#2D3137] relative">
                    {item.imageUrl && (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/80 via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 rounded-full bg-[#121417]/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-[#9CA3AF] mb-3 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Calendar size={12} className="text-[#D4AF37]" /> {item.publishedAt}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={12} className="text-[#D4AF37]" /> {item.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#2D3137]/60 mt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors flex items-center gap-1 pt-4">
                    Read Technical Paper <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom Banner (Alazar Bento Callout) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#181A1E] via-[#14161A] to-[#181A1E] border border-[#333]/80 p-8 sm:p-12 text-center flex flex-col sm:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#EAEAEA] mb-1.5">Applying Advanced Structural Research to Real Builds</h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF]">Need an expert finite element analysis or code-compliance technical audit for your project?</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] shrink-0 flex items-center gap-2"
          >
            Request Consultation <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
