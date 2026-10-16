import React from 'react';
import { Quote, Star, Building, ShieldCheck } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

export const TestimonialsPage = () => {
  const { data } = useFetch('/testimonials');

  const testimonials = data?.testimonials || [
    {
      id: '1',
      clientName: 'Sarah Jenkins, AIA',
      clientRole: 'Principal Architect',
      clientCompany: 'ArchiTech Global Design',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content: 'Alexandre’s approach to the foundation redesign on the Nexus Tower saved us 4 months of schedule time while exceeding safety margins. A true master of structural elegance.',
      rating: 5
    },
    {
      id: '2',
      clientName: 'Marcus Vance',
      clientRole: 'VP of Development',
      clientCompany: 'Apex Commercial Properties',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      content: 'Unmatched technical depth and clear communication. He translates complex structural mechanics into actionable insights that non-engineers can confidently execute.',
      rating: 5
    },
    {
      id: '3',
      clientName: 'David Sterling, PE',
      clientRole: 'Chief Infrastructure Officer',
      clientCompany: 'State Transit Authority',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'His non-linear seismic pushover analysis on the Avalon Suspension Bridge retrofitting plan saved millions in unnecessary material replacement while guaranteeing 120-year structural durability.',
      rating: 5
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
            Client Trust & Professional Endorsements
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Testimonials.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base lg:text-lg max-w-3xl leading-relaxed">
            Read reviews and endorsements from leading architects, general contractors, developers, and civic infrastructure authorities.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-8 relative flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)]"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1 text-[#D4AF37]">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} size={15} fill="#D4AF37" className="text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote size={20} className="text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                </div>

                <p className="text-[#EAEAEA] text-sm leading-relaxed mb-8 italic font-light">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 border-t border-[#2D3137] pt-5">
                {t.avatarUrl ? (
                  <img src={t.avatarUrl} alt={t.clientName} className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37]/60 shadow-md" />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#121417] border-2 border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                    {t.clientName.substring(0, 2)}
                  </div>
                )}
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-[#EAEAEA] truncate">{t.clientName}</h4>
                  <p className="text-xs text-[#9CA3AF] truncate">{t.clientRole}</p>
                  <span className="inline-block rounded-full bg-[#121417] border border-[#333] px-2 py-0.5 text-[9px] font-mono text-[#D4AF37] uppercase tracking-wider mt-1">
                    {t.clientCompany}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
