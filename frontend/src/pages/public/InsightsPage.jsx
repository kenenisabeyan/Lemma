import React from 'react';
import { FileText, Clock, ArrowUpRight, Calendar } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

export const InsightsPage = () => {
  const { data } = useFetch('/insights');

  const articles = data?.insights || [
    {
      id: '1',
      title: 'Innovations in High-Strength C80 Concrete Formulations & Creep Mechanics',
      category: 'Materials Engineering',
      excerpt: 'Examining long-term elastic modulus development, shrinkage dynamics, and hydration heat dissipation in high-rise core walls.',
      readTime: '6 min read',
      publishedAt: '2026-10-12',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'Seismic Retrofitting Strategies for Pre-1980 Commercial Frame Buildings',
      category: 'Seismic Resilience',
      excerpt: 'Comparing post-tensioned shear walls vs dynamic fluid viscous dampers under ASCE 41-17 retrofitting standards.',
      readTime: '8 min read',
      publishedAt: '2026-09-28',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      title: 'Optimizing Steel Frameworks for Reduced Carbon Footprint',
      category: 'Sustainable Engineering',
      excerpt: 'Quantifying embodied carbon reduction through high-yield ASTM A992 structural steel optimization and cellular beam design.',
      readTime: '5 min read',
      publishedAt: '2026-08-15',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Technical Knowledge & Publications
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-6">
            Engineering <span className="text-[#D4AF37]">Insights.</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-3xl leading-relaxed">
            Technical papers, industry notes, code analysis, and design methodology articles published for structural engineering professionals and project developers.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article key={item.id} className="bg-[#1E2125] border border-[#333] hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] bg-[#121417] overflow-hidden border-b border-[#333] relative">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  )}
                  <span className="absolute top-4 left-4 bg-[#121417] text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-[#9CA3AF] mb-3 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-[#D4AF37]" /> {item.publishedAt}</span>
                    <span className="flex items-center gap-1"><Clock size={12} className="text-[#D4AF37]" /> {item.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors flex items-center gap-1">
                  Read Technical Paper <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
