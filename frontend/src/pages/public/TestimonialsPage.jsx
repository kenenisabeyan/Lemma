import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Quote, Star, Building, ShieldCheck, ArrowUpRight, Search, Sparkles, MessageSquareQuote } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

export const TestimonialsPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch('/testimonials');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultTestimonials = [
    {
      id: '1',
      clientName: 'Sarah Jenkins, AIA',
      clientRole: 'Principal Architect',
      clientCompany: 'ArchiTech Global Design',
      category: 'Architects',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content: 'Alexandre’s approach to the foundation redesign on the Nexus Tower saved us 4 months of schedule time while exceeding safety margins. A true master of structural elegance.',
      rating: 5
    },
    {
      id: '2',
      clientName: 'Marcus Vance',
      clientRole: 'VP of Development',
      clientCompany: 'Apex Commercial Properties',
      category: 'Developers',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      content: 'Unmatched technical depth and clear communication. He translates complex structural mechanics into actionable insights that non-engineers can confidently execute.',
      rating: 5
    },
    {
      id: '3',
      clientName: 'David Sterling, P.E.',
      clientRole: 'Chief Infrastructure Officer',
      clientCompany: 'State Transit Authority',
      category: 'Civic Infrastructure',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'His non-linear seismic pushover analysis on the Avalon Suspension Bridge retrofitting plan saved millions in unnecessary material replacement while guaranteeing 120-year structural durability.',
      rating: 5
    }
  ];

  const testimonials = data?.testimonials?.length ? data.testimonials : defaultTestimonials;
  const categories = ['All', 'Architects', 'Developers', 'Civic Infrastructure'];

  const filteredTestimonials = testimonials.filter(t => {
    const roleMatches = selectedCategory === 'All' || 
      t.category === selectedCategory ||
      (selectedCategory === 'Architects' && (t.clientRole?.toLowerCase().includes('architect') || t.clientCompany?.toLowerCase().includes('design'))) ||
      (selectedCategory === 'Developers' && (t.clientRole?.toLowerCase().includes('development') || t.clientCompany?.toLowerCase().includes('properties'))) ||
      (selectedCategory === 'Civic Infrastructure' && (t.clientRole?.toLowerCase().includes('infrastructure') || t.clientCompany?.toLowerCase().includes('transit')));

    const textMatches = searchQuery === '' ||
      t.clientName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.clientRole?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.clientCompany?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.content?.toLowerCase().includes(searchQuery.toLowerCase());

    return roleMatches && textMatches;
  });

  return (
    <div className="relative min-h-screen bg-transparent text-inherit pt-28 pb-24 selection:bg-[#801834] selection:text-white overflow-hidden">
      {/* Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#801834]/10 dark:bg-[#801834]/15 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#801834]/8 dark:bg-[#801834]/12 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 border-b border-zinc-200/80 dark:border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#801834] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#801834]"></span>
            </span>
            Client Trust & Professional Endorsements
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.08] mb-5">
            Client <span className="text-[#801834] dark:text-[#E84855]">Testimonials.</span>
          </h1>
          <div className="rounded-2xl bg-white/75 dark:bg-[#181A1E]/80 backdrop-blur-md border border-white/80 dark:border-zinc-800 p-6 shadow-sm max-w-3xl">
            <p className="text-zinc-700 dark:text-zinc-300 text-base lg:text-lg leading-relaxed">
              Read reviews and endorsements from leading architects, general contractors, developers, and civic infrastructure authorities.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-12 bg-white dark:bg-[#181A1E] p-3 rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 shadow-sm dark:shadow-xl">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] shadow-sm scale-105'
                    : 'bg-zinc-100 dark:bg-[#121417] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-[#9CA3AF] w-4 h-4" />
            <input
              type="text"
              placeholder="Search by client, firm, or quote..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-[#121417] rounded-full border border-zinc-200 dark:border-[#333] pl-10 pr-4 py-2 text-xs text-zinc-900 dark:text-[#EAEAEA] placeholder:text-zinc-400 dark:placeholder:text-[#666] focus:border-[#801834] dark:focus:border-[#D4AF37] focus:outline-none transition-colors font-mono shadow-sm"
            />
          </div>

        </div>

        {/* Testimonials Bento Grid */}
        {filteredTestimonials.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-[#181A1E] rounded-2xl border border-zinc-200 dark:border-[#333] mb-16 shadow-sm">
            <MessageSquareQuote className="mx-auto w-12 h-12 text-zinc-400 dark:text-[#9CA3AF]/40 mb-3" />
            <p className="text-zinc-500 dark:text-[#9CA3AF] text-sm font-mono uppercase tracking-wider">
              No client endorsements match the selected criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredTestimonials.map((t) => (
              <div 
                key={t.id} 
                className="group rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 relative flex flex-col justify-between hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1 text-[#D4AF37]">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} size={15} fill="#D4AF37" className="text-[#D4AF37]" />
                      ))}
                    </div>
                    <Quote size={20} className="text-[#801834]/30 dark:text-[#D4AF37]/40 group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  <p className="text-zinc-700 dark:text-[#EAEAEA] text-sm leading-relaxed mb-8 italic font-light">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 border-t border-zinc-200 dark:border-[#2D3137] pt-5">
                  {t.avatarUrl ? (
                    <img src={t.avatarUrl} alt={t.clientName} className="w-11 h-11 rounded-full object-cover border-2 border-[#801834]/40 dark:border-[#D4AF37]/60 shadow-sm" />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-[#121417] border-2 border-[#801834]/40 dark:border-[#D4AF37]/60 flex items-center justify-center text-[#801834] dark:text-[#D4AF37] font-bold text-xs">
                      {t.clientName ? t.clientName.substring(0, 2).toUpperCase() : 'CL'}
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-[#EAEAEA] truncate">{t.clientName}</h4>
                    <p className="text-xs text-zinc-500 dark:text-[#9CA3AF] truncate">{t.clientRole}</p>
                    <span className="inline-block rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-2 py-0.5 text-[9px] font-mono text-[#801834] dark:text-[#D4AF37] uppercase tracking-wider mt-1 font-bold">
                      {t.clientCompany}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-white dark:bg-gradient-to-r dark:from-[#181A1E] dark:via-[#14161A] dark:to-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 sm:p-12 text-center flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl dark:shadow-2xl">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-1.5">Deliver Your Vision with Confirmed Structural Excellence</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#9CA3AF]">Join reputable developers, architects, and institutions who trust our engineering precision.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] px-8 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-zinc-900 dark:hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            Start Project Consultation <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
