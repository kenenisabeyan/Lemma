import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Clock, ArrowUpRight, Calendar } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

export const InsightsPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch('/insights');

  const articles = data?.insights || [
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

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24 selection:bg-[#D4AF37] selection:text-[#121417]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
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

        {/* Articles Grid (Alazar Bento 3-Col Grid) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
            <Link
              key={item.id}
              to={`/insights/${item.slug || 'innovations-high-strength-c80-concrete'}`}
              className="rounded-2xl bg-[#181A1E] border border-[#333]/80 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)]"
            >
              <div>
                <div className="aspect-[16/10] bg-[#141619] overflow-hidden border-b border-[#2D3137] relative">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
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

        {/* Bottom Banner (Alazar Bento Callout) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#181A1E] via-[#14161A] to-[#181A1E] border border-[#333]/80 p-8 sm:p-12 text-center flex flex-col sm:flex-row justify-between items-center gap-6 shadow-2xl mt-16">
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
