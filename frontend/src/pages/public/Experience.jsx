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
    <div className="relative min-h-screen bg-transparent text-inherit pt-28 pb-24 overflow-hidden selection:bg-[#801834] selection:text-white">
      {/* Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#801834]/10 dark:bg-[#801834]/15 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#801834]/8 dark:bg-[#801834]/12 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-14 border-b border-zinc-200/80 dark:border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#801834] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#801834]"></span>
            </span>
            Professional History & Engineering Record
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.08] mb-5">
            Structural <span className="text-[#801834] dark:text-[#E84855]">Experience.</span>
          </h1>
          <div className="rounded-2xl bg-white dark:bg-[#181A1E] backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-w-3xl">
            <p className="text-zinc-700 dark:text-zinc-300 text-base lg:text-lg leading-relaxed">
              A comprehensive record of 14+ years in structural analysis, high-rise wind engineering, bridge infrastructure, and seismic disaster-resilience consulting.
            </p>
          </div>
        </div>

        {/* Quantified Metrics Highlight Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          <div className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 shadow-sm hover:shadow-md transition-all">
            <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-[#9CA3AF] tracking-wider block mb-1">Supervised Project Scale</span>
            <div className="text-3xl lg:text-4xl font-extrabold text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:to-[#F3E5AB] font-mono">$850M+</div>
            <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] mt-1">Total structural construction value</p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 shadow-sm hover:shadow-md transition-all">
            <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-[#9CA3AF] tracking-wider block mb-1">Completed Deliverables</span>
            <div className="text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] font-mono">180+</div>
            <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] mt-1">High-rise, bridge & civic projects</p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 shadow-sm hover:shadow-md transition-all">
            <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-[#9CA3AF] tracking-wider block mb-1">Professional Practice</span>
            <div className="text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] font-mono">14+ Yrs</div>
            <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] mt-1">Licensed PE & SE engineer</p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 shadow-sm hover:shadow-md transition-all">
            <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-[#9CA3AF] tracking-wider block mb-1">Structural Safety Record</span>
            <div className="text-3xl lg:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">100%</div>
            <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] mt-1">Zero audit failures or deficiencies</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 bg-white dark:bg-[#181A1E] p-2 rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 w-max shadow-sm dark:shadow-lg">
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'milestones'
                ? 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] shadow-sm scale-105'
                : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA] hover:bg-zinc-100 dark:hover:bg-[#121417]'
            }`}
          >
            Major Project Milestones
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'timeline'
                ? 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] shadow-sm scale-105'
                : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA] hover:bg-zinc-100 dark:hover:bg-[#121417]'
            }`}
          >
            Career Timeline & Roles
          </button>

          <button
            onClick={() => setActiveTab('competencies')}
            className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'competencies'
                ? 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] shadow-sm scale-105'
                : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA] hover:bg-zinc-100 dark:hover:bg-[#121417]'
            }`}
          >
            Core Competencies
          </button>
        </div>

        {/* Tab 1: Major Milestones */}
        {activeTab === 'milestones' && (
          <div className="flex flex-col gap-8 mb-20">
            {engineeringMilestones.map((item, index) => (
              <div key={index} className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 lg:p-10 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6 pb-6 border-b border-zinc-200 dark:border-[#2D3137]">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-[#801834] dark:text-[#D4AF37] font-bold tracking-widest uppercase">
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider bg-zinc-100 dark:bg-[#121417] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333] px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-[#EAEAEA]">{item.title}</h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono bg-zinc-100 dark:bg-[#121417] text-[#801834] dark:text-[#D4AF37] border border-zinc-200 dark:border-[#D4AF37]/40 px-3.5 py-1 rounded-full font-bold">
                      {item.value}
                    </span>
                    <span className="text-xs font-mono text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333] px-3 py-1 rounded-full flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#801834] dark:text-[#D4AF37]" /> {item.location}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase font-mono font-bold text-[#801834] dark:text-[#D4AF37] tracking-wider mb-2">
                    Structural Achievement & Technical Innovation
                  </h4>
                  <p className="text-sm text-zinc-700 dark:text-[#EAEAEA] leading-relaxed">
                    {item.achievement}
                  </p>
                </div>

                <div className="bg-zinc-50 dark:bg-[#121417] p-6 rounded-xl border border-zinc-200/80 dark:border-[#2D3137] shadow-inner">
                  <h5 className="text-[11px] font-mono uppercase text-zinc-500 dark:text-[#9CA3AF] tracking-wider mb-3 font-bold">Key Technical Scope:</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-[#9CA3AF]">
                        <CheckCircle2 size={14} className="text-[#801834] dark:text-[#D4AF37] shrink-0 mt-0.5" />
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
            <div className="flex flex-col gap-8 relative border-l-2 border-zinc-200 dark:border-[#333] pl-8 ml-4">
              {CAREER_TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#121417] border-2 border-[#801834] dark:border-[#D4AF37] group-hover:scale-125 transition-transform"></div>
                  <div className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                    <span className="inline-block rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/40 px-3 py-1 text-xs font-mono text-[#801834] dark:text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">{item.role}</h3>
                    <p className="text-xs font-semibold text-zinc-500 dark:text-[#9CA3AF] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Building2 size={13} className="text-[#801834] dark:text-[#D4AF37]" /> {item.company}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-[#9CA3AF] max-w-3xl leading-relaxed mb-5">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] font-bold">
                      <span className="rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-3 py-1">Direct Client Coordination</span>
                      <span className="rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-3 py-1">Code Authority Submissions</span>
                      <span className="rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-3 py-1">Multi-Disciplinary BIM</span>
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
                className="group rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/40 text-[#801834] dark:text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm mb-6 group-hover:scale-110 transition-transform">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-[#EAEAEA] mb-3 group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">{comp.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">{comp.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-[#2D3137] flex items-center gap-2 text-[10px] uppercase font-mono text-[#801834] dark:text-[#D4AF37] font-bold">
                  <ShieldCheck size={12} /> Rigorous Engineering Verified
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Seismic Shake Table & NLRHA Dissipation Section */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-white dark:bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-sm mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Live Physics & Non-Linear Dynamics
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Dynamic Seismic <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">Shake Table Laboratory.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Experience how high-performance structural systems withstand historical earthquake accelerograms through advanced base isolation, viscous fluid dampers, and tuned mass dampers.
            </p>
          </div>

          <SeismicShakeTable />
        </div>

        {/* Credentials & Call to Action Banner */}
        <div className="rounded-2xl bg-white dark:bg-gradient-to-r dark:from-[#181A1E] dark:via-[#14161A] dark:to-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl dark:shadow-2xl">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#801834] dark:text-[#D4AF37] tracking-widest block mb-2 font-bold">Ready to Collaborate</span>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-2">Need an Expert Structural Engineer for Your Project?</h3>
            <p className="text-sm text-zinc-600 dark:text-[#9CA3AF] max-w-xl leading-relaxed">
              Available for high-rise peer reviews, dynamic seismic analysis, value engineering audits, and complete construction documentation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="/resources"
              className="rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-[#121417] text-zinc-900 dark:text-[#D4AF37] border border-zinc-200 dark:border-[#D4AF37]/40 px-6 py-3.5 text-xs font-bold uppercase tracking-widest dark:hover:bg-[#D4AF37] dark:hover:text-[#121417] transition-all flex items-center justify-center gap-2"
            >
              Download Full CV (PDF) <Download size={14} />
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest hover:bg-zinc-900 dark:hover:bg-white transition-all shadow-md flex items-center justify-center gap-2"
            >
              Request Consultation <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
