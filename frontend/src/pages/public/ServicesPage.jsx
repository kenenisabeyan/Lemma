import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Layers, ShieldCheck, Ruler, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { CodeComplianceMatrix } from '../../components/engineering/CodeComplianceMatrix';
import { WindTunnelSimulator } from '../../components/engineering/WindTunnelSimulator';

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
    <div className="relative min-h-screen bg-transparent text-inherit pt-28 pb-24 selection:bg-[#D4AF37] selection:text-[#121417] overflow-hidden">
      {/* Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/5 dark:bg-[#D4AF37]/8 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-zinc-200/80 dark:border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 dark:border-[#D4AF37]/30 bg-white/80 dark:bg-[#181A1E]/80 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-[#EAEAEA] shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Scope of Engineering Practice
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.08] mb-5">
            Structural <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Services.</span>
          </h1>
          <div className="rounded-2xl bg-white/75 dark:bg-[#181A1E]/80 backdrop-blur-md border border-white/80 dark:border-zinc-800 p-6 shadow-sm max-w-3xl">
            <p className="text-zinc-700 dark:text-zinc-300 text-base lg:text-lg leading-relaxed">
              Delivering high-performance structural engineering across all phases of development, from initial feasibility and FEA numerical modeling to site quality assurance.
            </p>
          </div>
        </div>

        {/* Services List (Bento Card modules) */}
        <div className="flex flex-col gap-8 mb-20">
          {servicesList.map((srv, index) => {
            const features = typeof srv.features === 'string'
              ? JSON.parse(srv.features || '[]')
              : (srv.features || []);

            return (
              <div 
                key={srv.id || index} 
                className="group rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 lg:p-10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Building2 size={28} />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/30 px-2.5 py-0.5 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-2 font-bold">
                        Module 0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors">{srv.title}</h3>
                    </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm lg:text-base leading-relaxed">{srv.description || srv.summary}</p>

                    <div className="grid sm:grid-cols-2 gap-3.5 bg-zinc-50 dark:bg-[#121417] p-5 rounded-xl border border-zinc-200/80 dark:border-[#2D3137]">
                      {features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="text-xs text-zinc-800 dark:text-[#EAEAEA] leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => navigate('/contact')}
                        className="rounded-full bg-[#D4AF37] text-[#121417] px-6 py-3 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-[0_4px_15px_rgba(212,175,55,0.25)] dark:shadow-[0_0_20px_rgba(212,175,55,0.2)] inline-flex items-center gap-2 font-mono"
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

        {/* Code Compliance & Municipal Standards Matrix */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-white dark:bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Regulatory & Code Compliance Auditor
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Municipal Code & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Provisions Matrix.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Every design calculation and structural drawing package adheres strictly to the latest edition of American and international structural codes.
            </p>
          </div>

          <CodeComplianceMatrix />
        </div>

        {/* Boundary Layer Wind Tunnel & Aerodynamics Section */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-white dark:bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse"></span>
              Wind Engineering & Boundary Layer Modeling
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Wind Tunnel Aerodynamics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Vortex Shedding Simulator.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Test skyscraper geometries against ASCE 7-22 wind tunnel criteria. Assess corner chamfering, through-aperture venting, and ISO 10137 occupant acceleration thresholds under hurricane winds.
            </p>
          </div>

          <WindTunnelSimulator />
        </div>

        {/* Bottom Consultation Banner */}
        <div className="rounded-3xl bg-white dark:bg-gradient-to-r dark:from-[#181A1E] dark:via-[#14161A] dark:to-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 sm:p-12 text-center flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl dark:shadow-2xl">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-1.5">Require Specialized Structural Analysis?</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#9CA3AF]">Let's discuss FEA dynamic modeling, IBC code certifications, or third-party peer reviews for your project.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            Schedule Consultation <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>

      </div>
    </div>
  );
};
