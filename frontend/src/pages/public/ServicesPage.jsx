import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Layers, ShieldCheck, Ruler, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

export const ServicesPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch('/services');

  const servicesList = data?.services || [
    {
      id: '1',
      title: 'Structural Analysis & Engineering Design',
      icon: 'Building2',
      summary: 'Advanced 3D linear and non-linear structural modeling for high-rise, commercial, and industrial facilities.',
      description: 'Comprehensive analysis from concept schematic phase through detailed construction documentation, ensuring structural safety, efficiency, and full building code compliance.',
      features: '["Wind and seismic dynamic response analysis","Gravity load system optimization & foundation design","3D BIM modeling and Tekla structural detailing","Code compliance auditing (IBC, ACI 318, AISC 360, ASCE 7)"]'
    },
    {
      id: '2',
      title: 'Reinforced Concrete & Steel Systems',
      icon: 'Layers',
      summary: 'Specialized member detailing and steel connection specification for heavy structural frameworks.',
      description: 'Tailored structural design for reinforced concrete cores, post-tensioned floor systems, composite steel beams, and complex truss geometries.',
      features: '["Post-tensioned slab & beam calculations","Precast concrete structural system design","High-capacity structural steel connection detailing","Material optimization for reduced carbon footprint"]'
    },
    {
      id: '3',
      title: 'Seismic Retrofitting & Structural Assessment',
      icon: 'ShieldCheck',
      summary: 'Rigorous structural health evaluations, failure analysis, and earthquake resilience retrofits.',
      description: 'Protecting legacy buildings and heritage structures through non-destructive testing, pushover analysis, and state-of-the-art seismic isolation upgrades.',
      features: '["Non-destructive testing (NDT) & concrete coring analysis","FEMA P-58 seismic performance estimation","Base isolation and fluid viscous damper integration","Structural repair after seismic or blast events"]'
    },
    {
      id: '4',
      title: 'Technical Advisory & Peer Review',
      icon: 'Ruler',
      summary: 'Independent third-party peer review and structural cost-optimization consulting for developers.',
      description: 'Providing strategic technical guidance for architects, general contractors, and project owners to eliminate design redundancies and prevent construction delays.',
      features: '["Third-party structural calculation verification","Value engineering and material quantity optimization","Expert witness & forensic structural investigation","Constructability reviews and site quality control"]'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24 selection:bg-[#D4AF37] selection:text-[#121417] overflow-hidden">
      {/* Alazar Signature Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#D4AF37]/15 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/10 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Scope of Engineering Practice
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
            Structural <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Services.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base lg:text-lg max-w-3xl leading-relaxed">
            Delivering high-performance structural engineering across all phases of development, from initial feasibility and FEA numerical modeling to site quality assurance.
          </p>
        </div>

        {/* Services List (Alazar Bento Card modules) */}
        <div className="flex flex-col gap-8 mb-20">
          {servicesList.map((srv, index) => {
            const features = typeof srv.features === 'string'
              ? JSON.parse(srv.features || '[]')
              : (srv.features || []);

            return (
              <div 
                key={srv.id || index} 
                className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-8 lg:p-10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.08)]"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#121417] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Building2 size={28} />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-[#121417] border border-[#D4AF37]/30 px-2.5 py-0.5 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-2">
                        Module 0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors">{srv.title}</h3>
                    </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <p className="text-[#9CA3AF] text-sm lg:text-base leading-relaxed">{srv.description || srv.summary}</p>

                    <div className="grid sm:grid-cols-2 gap-3.5 bg-[#121417] p-5 rounded-xl border border-[#2D3137]">
                      {features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#EAEAEA] leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => navigate('/contact')}
                        className="rounded-full bg-[#D4AF37] text-[#121417] px-6 py-3 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] inline-flex items-center gap-2"
                      >
                        Request Service Consultation <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner (Alazar Bento Callout) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#181A1E] via-[#14161A] to-[#181A1E] border border-[#333]/80 p-8 sm:p-12 text-center flex flex-col sm:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#EAEAEA] mb-1.5">Require Specialized Structural Analysis?</h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF]">Let's discuss FEA dynamic modeling, IBC code certifications, or third-party peer reviews for your project.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] shrink-0 flex items-center gap-2"
          >
            Schedule Consultation <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
