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
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Scope of Engineering Practice
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-6">
            Structural <span className="text-[#D4AF37]">Services.</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-3xl leading-relaxed">
            Delivering high-performance structural engineering across all phases of development, from initial feasibility and FEA numerical modeling to site quality assurance.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-12 mb-20">
          {servicesList.map((srv, index) => {
            const features = typeof srv.features === 'string'
              ? JSON.parse(srv.features || '[]')
              : (srv.features || []);

            return (
              <div key={srv.id || index} className="bg-[#1E2125] border border-[#333] p-8 lg:p-12 hover:border-[#D4AF37]/40 transition-colors">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#121417] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0">
                      <Building2 size={28} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
                        Service Module 0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-[#EAEAEA]">{srv.title}</h3>
                    </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <p className="text-[#9CA3AF] text-base leading-relaxed">{srv.description || srv.summary}</p>

                    <div className="grid sm:grid-cols-2 gap-4 bg-[#121417] p-6 border border-[#2D3137]">
                      {features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#EAEAEA] leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => navigate('/contact')}
                        className="bg-[#D4AF37] text-[#121417] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all inline-flex items-center gap-2"
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

      </div>
    </div>
  );
};
