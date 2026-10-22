import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, 
  Award, 
  Building2, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  GraduationCap, 
  Download, 
  ArrowUpRight, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  CheckSquare
} from 'lucide-react';
import { CAREER_TIMELINE, CERTIFICATIONS } from '../../utils/constants';
import { SeismicShakeTable } from '../../components/engineering/SeismicShakeTable';

export const Experience = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('milestones');

  const engineeringMilestones = [
    {
      year: '2024 - 2025',
      title: '52-Story Dual Core Outrigger Tower (Nexus Tower)',
      category: 'Commercial High-Rise',
      value: '$340M Construction Value',
      role: 'Lead Structural Engineer',
      location: 'Metropolis Financial District, NY',
      achievement: 'Pioneered an aerodynamic outrigger belt truss coupled with viscoelastic dampers that lowered peak wind drift acceleration by 38% under 140mph hurricane wind tunnel simulations.',
      highlights: [
        'Integrated C80 ultra-high strength concrete core shear walls with reduced carbon footprint mix design',
        'Maximized column-free interior floor plates by 35% using unbonded post-tensioned slabs',
        'Achieved LEED Platinum structural rating and zero vibration comfort complaints'
      ]
    },
    {
      year: '2023 - 2024',
      title: '450m Cable-Stayed River Suspension Bridge',
      category: 'Civil Infrastructure',
      value: '$220M Construction Value',
      role: 'Principal Bridge Engineer',
      location: 'West River Transit Corridor',
      achievement: 'Supervised full incremental launching analysis for lightweight orthotropic steel deck plates across an active navigation channel without interrupting shipping commerce.',
      highlights: [
        'Executed 3D non-linear dynamic seismic response history modeling in SAP2000 and Midas Civil',
        'Integrated lead-rubber seismic bearings (LRB) at pylon abutments for 1,000-year return period resilience',
        'Extended projected infrastructure design lifespan to 120 years'
      ]
    },
    {
      year: '2022 - 2023',
      title: 'Solaria Geodesic 80m Cultural Dome',
      category: 'Special Structures',
      value: '$95M Construction Value',
      role: 'Senior Structural Designer',
      location: 'San Francisco, CA',
      achievement: 'Designed column-free spherical space frame dome using Rhino Grasshopper parametric algorithms and ANSYS finite element stress concentration simulations.',
      highlights: [
        'Engineered custom spherical node pin joints with energy-dissipating metallic yield dampers',
        'Validated against asymmetric snow drift and severe seismic near-fault ground motions',
        'Received Structural Engineering Excellence Award (SEAoNY)'
      ]
    },
    {
      year: '2020 - 2022',
      title: 'Historic 12-Story Mid-Century Steel Frame Seismic Retrofit',
      category: 'Seismic Rehabilitation',
      value: '$65M Construction Value',
      role: 'Lead Forensic & Retrofit Specialist',
      location: 'Downtown Commercial Core',
      achievement: 'Preserved architectural heritage while bringing pre-1980 brittle welded flange moment connections up to contemporary ASCE 41-17 seismic rehabilitation standards.',
      highlights: [
        'Installed exterior buckling-restrained braced frames (BRBF) to minimize tenant disruption',
        'Applied non-destructive ultrasonic testing and carbon fiber composite wraps (CFRP) on critical floor beams',
        'Saved client an estimated $18M versus structural demolition and rebuild'
      ]
    }
  ];

  const structuralCompetencies = [
    {
      title: 'High-Rise Lateral Stability Systems',
      desc: 'Expertise in dual core shear walls, perimeter framed tubes, outrigger belt trusses, and tuned mass dampers (TMD) for ultra-slender architectural towers.'
    },
    {
      title: 'Performance-Based Seismic Engineering',
      desc: 'Non-linear pushover simulations, dynamic response spectrum analyses, and FEMA P-58 probabilistic seismic damage and economic loss estimations.'
    },
    {
      title: 'Post-Tensioned & High-Performance Concrete',
      desc: 'Optimization of unbonded and bonded post-tensioned flat plates, transfer girders, and C80/C90 silica fume high-strength concrete mixes (ACI 318).'
    },
    {
      title: 'Heavy Structural Steel & Connection Detailing',
      desc: 'Rigorous calculation of moment connections, column splices, base plates, and braced frame gussets compliant with AISC 360 and AISC 341 seismic provisions.'
    },
    {
      title: 'Forensic Engineering & Structural Health Audits',
      desc: 'Non-destructive testing (NDT), ultrasonic pulse velocity, vibration monitoring, crack propagation mapping, and root-cause failure investigations.'
    },
    {
      title: 'Value Engineering & Material Quantity Reduction',
      desc: 'Systematic calculation refinements that safely eliminate structural redundancies, achieving an average of 18% to 25% material cost savings.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#54595F] pt-28 pb-24 overflow-hidden selection:bg-[#D4AF37] selection:text-[#121417]">
      {/* Ambient subtle glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#D4AF37]/5 blur-[130px]"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/5 blur-[110px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-14 border-b border-zinc-200 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Professional History & Engineering Record
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tight leading-[1.08] mb-5">
            Structural <span className="text-[#D4AF37]">Experience.</span>
          </h1>
          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 sm:p-7 shadow-sm max-w-3xl">
            <p className="text-[#54595F] text-base lg:text-lg leading-relaxed">
              A comprehensive record of 14+ years in structural analysis, high-rise wind engineering, bridge infrastructure, and seismic disaster-resilience consulting.
            </p>
          </div>
        </div>

        {/* Quantified Metrics Highlight Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all">
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 tracking-wider block mb-1 font-semibold">Supervised Project Scale</span>
            <div className="text-3xl lg:text-4xl font-extrabold text-[#D4AF37] font-mono">$850M+</div>
            <p className="text-xs text-[#54595F] mt-1">Total structural construction value</p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all">
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 tracking-wider block mb-1 font-semibold">Completed Deliverables</span>
            <div className="text-3xl lg:text-4xl font-extrabold text-zinc-900 font-mono">180+</div>
            <p className="text-xs text-[#54595F] mt-1">High-rise, bridge & civic projects</p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all">
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 tracking-wider block mb-1 font-semibold">Professional Practice</span>
            <div className="text-3xl lg:text-4xl font-extrabold text-zinc-900 font-mono">14+ Yrs</div>
            <p className="text-xs text-[#54595F] mt-1">Licensed PE & SE engineer</p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-all">
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 tracking-wider block mb-1 font-semibold">Structural Safety Record</span>
            <div className="text-3xl lg:text-4xl font-extrabold text-emerald-600 font-mono">100%</div>
            <p className="text-xs text-[#54595F] mt-1">Zero audit failures or deficiencies</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 bg-[#FFFFFF] p-2 rounded-2xl border border-zinc-200 w-max shadow-sm">
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'milestones'
                ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105'
                : 'text-[#54595F] hover:bg-zinc-100'
            }`}
          >
            Major Project Milestones
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'timeline'
                ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105'
                : 'text-[#54595F] hover:bg-zinc-100'
            }`}
          >
            Career Timeline & Roles
          </button>

          <button
            onClick={() => setActiveTab('competencies')}
            className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'competencies'
                ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105'
                : 'text-[#54595F] hover:bg-zinc-100'
            }`}
          >
            Core Competencies
          </button>
        </div>

        {/* Tab 1: Major Milestones */}
        {activeTab === 'milestones' && (
          <div className="flex flex-col gap-8 mb-20">
            {engineeringMilestones.map((item, index) => (
              <div key={index} className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-8 lg:p-10 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6 pb-6 border-b border-zinc-200">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase">
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider bg-[#FFFFFF] text-[#54595F] border border-zinc-200 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#54595F]">{item.title}</h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono bg-[#FFFFFF] text-[#D4AF37] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full font-bold">
                      {item.value}
                    </span>
                    <span className="text-xs font-mono text-[#54595F] border border-zinc-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#D4AF37]" /> {item.location}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase font-mono font-bold text-[#D4AF37] tracking-wider mb-2">
                    Structural Achievement & Technical Innovation
                  </h4>
                  <p className="text-sm text-[#54595F] leading-relaxed">
                    {item.achievement}
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-6 rounded-xl border border-zinc-200 shadow-xs">
                  <h5 className="text-[11px] font-mono uppercase text-[#54595F]/80 tracking-wider mb-3 font-bold">Key Technical Scope:</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#54595F]">
                        <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Career Timeline */}
        {activeTab === 'timeline' && (
          <div className="mb-20">
            <div className="flex flex-col gap-8 relative border-l-2 border-zinc-200 pl-8 ml-4">
              {CAREER_TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#D4AF37] group-hover:scale-125 transition-transform"></div>
                  <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-8 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-xl">
                    <span className="inline-block rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 px-3 py-1 text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-[#54595F] mb-1">{item.role}</h3>
                    <p className="text-xs font-semibold text-[#54595F]/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Building2 size={13} className="text-[#D4AF37]" /> {item.company}
                    </p>
                    <p className="text-sm text-[#54595F] max-w-3xl leading-relaxed mb-5">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#54595F] font-bold">
                      <span className="rounded-full bg-[#FFFFFF] border border-zinc-200 px-3 py-1">Direct Client Coordination</span>
                      <span className="rounded-full bg-[#FFFFFF] border border-zinc-200 px-3 py-1">Code Authority Submissions</span>
                      <span className="rounded-full bg-[#FFFFFF] border border-zinc-200 px-3 py-1">Multi-Disciplinary BIM</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Core Competencies */}
        {activeTab === 'competencies' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {structuralCompetencies.map((comp, index) => (
              <div 
                key={index} 
                className="group rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-8 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm mb-6 group-hover:scale-110 transition-transform">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-[#54595F] mb-3 group-hover:text-[#D4AF37] transition-colors">{comp.title}</h4>
                  <p className="text-xs text-[#54595F] leading-relaxed">{comp.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-2 text-[10px] uppercase font-mono text-[#D4AF37] font-bold">
                  <ShieldCheck size={12} /> Rigorous Engineering Verified
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Seismic Shake Table & NLRHA Dissipation Section */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Physics & Non-Linear Dynamics
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#54595F] tracking-tight mb-4">
              <span className="text-[#D4AF37]">Dynamic</span> Seismic Shake Table Laboratory.
            </h2>
            <p className="text-[#54595F] text-sm md:text-base leading-relaxed">
              Experience how high-performance structural systems withstand historical earthquake accelerograms through advanced base isolation, viscous fluid dampers, and tuned mass dampers.
            </p>
          </div>

          <SeismicShakeTable />
        </div>

        {/* Credentials & Call to Action Banner */}
        <div className="rounded-3xl bg-[#FFFFFF] border border-zinc-200 p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-widest block mb-2 font-bold">Ready to Collaborate</span>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-[#54595F] mb-2"><span className="text-[#D4AF37]">Need</span> an Expert Structural Engineer for Your Project?</h3>
            <p className="text-sm text-[#54595F] max-w-xl leading-relaxed">
              Available for high-rise peer reviews, dynamic seismic analysis, value engineering audits, and complete construction documentation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10">
            <a
              href="/resources"
              className="rounded-full bg-[#FFFFFF] text-[#54595F] border border-[#D4AF37] px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#121417] transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              Download Full CV (PDF) <Download size={14} />
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest hover:bg-[#c49f2c] transition-all shadow-md flex items-center justify-center gap-2"
            >
              Request Consultation <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
