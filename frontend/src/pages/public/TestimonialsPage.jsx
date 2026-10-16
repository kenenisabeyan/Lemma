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
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Client Trust & Professional Endorsements
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-6">
            Client <span className="text-[#D4AF37]">Testimonials.</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-3xl leading-relaxed">
            Read reviews and endorsements from leading architects, general contractors, developers, and civic infrastructure authorities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#1E2125] border border-[#333] p-8 relative flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
              <div>
                <div className="flex gap-1 text-[#D4AF37] mb-6">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" />
                  ))}
                </div>

                <p className="text-[#EAEAEA] text-sm leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-[#333] pt-6">
                {t.avatarUrl ? (
                  <img src={t.avatarUrl} alt={t.clientName} className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#121417] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold">
                    {t.clientName.substring(0, 2)}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-[#EAEAEA]">{t.clientName}</h4>
                  <p className="text-xs text-[#9CA3AF]">{t.clientRole}</p>
                  <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">{t.clientCompany}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
