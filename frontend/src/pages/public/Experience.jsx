import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowRight,
  CheckCircle2, 
  Calendar, 
  MapPin, 
  CheckSquare,
  Activity,
  Sparkles
} from 'lucide-react';
import { CAREER_TIMELINE, CERTIFICATIONS } from '../../utils/constants';
import { SeismicShakeTable } from '../../components/engineering/SeismicShakeTable';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const Experience = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('milestones');
  const [selectedMilestoneIdx, setSelectedMilestoneIdx] = useState(0);

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

  const activeMilestone = engineeringMilestones[selectedMilestoneIdx];

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D4AF37] selection:text-[#121417] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC EXPERIENCE & TRACK RECORD HERO SECTION                       */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-gray-100 bg-white dark:bg-white backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Luminous White Glass Frosted Sheen & Center Light Dome (Exact Match to Home) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-white dark:via-white dark:to-white pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle Ambient Studio Lights */}
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/[0.02] dark:bg-[#801834]/[0.02] blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/[0.02] dark:bg-[#D4AF37]/[0.02] blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-white dark:via-white/90 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scope, Headline, Bio, Authority Badges */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 sm:gap-5">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  Career Trajectory & Milestone Records · 2012 – Present
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1 sm:space-y-2"
              >
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                  A Proven Legacy of{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    Structural
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Innovation & Scale.
                  </span>
                </h1>
              </motion.div>

              {/* Frosted Glass Narrative Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full rounded-3xl bg-white/85 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/90 dark:border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] px-6 sm:px-8 py-4 sm:py-5"
              >
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm sm:text-base leading-relaxed text-left drop-shadow-xs">
                  Over 14 years of verified principal engineering practice leading the analysis, wind tunnel design, seismic protection, and stamped execution of over $850M+ in constructed civil and commercial infrastructure.
                </p>

                {/* 4 Quantified Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 mt-4 border-t border-zinc-200/80 dark:border-white/10 font-mono">
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                    <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono">$850M+</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Valuation</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                    <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono">180+</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Deliverables</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                    <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono">14+ Yrs</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Practice</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                    <span className="block text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">100%</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Safety Audit</span>
                  </div>
                </div>
              </motion.div>

              {/* Signature Action Buttons (Exact Match to Home) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-start gap-4 pt-1"
              >
                {/* Primary Filled Pill Button */}
                <a
                  href="#experience-tabs"
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] flex items-center gap-2 group cursor-pointer border border-[#D4AF37]"
                >
                  <Briefcase size={15} />
                  <span>INSPECT MILESTONES</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Frosted Glass Pill Button */}
                <a
                  href="#shake-table"
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer"
                >
                  <Activity size={15} className="text-[#D4AF37]" />
                  <span>SEISMIC SHAKE TABLE</span>
                </a>
              </motion.div>

              {/* Quick KPI Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg"
              >
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono">$850M+</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Built Value</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono">180+</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Projects Led</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#D4AF37] font-mono">14+</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Years Practice</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Interactive Career Milestone Spotlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="relative rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/95 dark:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] p-5 sm:p-6 overflow-hidden group">
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Milestone Spotlight</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] font-bold">
                    {activeMilestone.year}
                  </span>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-zinc-200/70 dark:border-white/5 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    {activeMilestone.category} · {activeMilestone.location}
                  </span>
                  <h3 className="font-black text-lg text-zinc-900 dark:text-zinc-100 leading-snug mb-2">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">
                    {activeMilestone.achievement}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-200/60 dark:border-white/5 text-[11px] font-mono font-bold">
                    <span className="text-[#801834] dark:text-[#E84855]">{activeMilestone.value}</span>
                    <span className="text-zinc-500">{activeMilestone.role}</span>
                  </div>
                </div>

                {/* Milestone Selector Chips */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {engineeringMilestones.map((ms, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedMilestoneIdx(idx)}
                      className={`p-2 rounded-xl text-center font-mono text-[10px] font-bold uppercase transition-all cursor-pointer ${
                        selectedMilestoneIdx === idx
                          ? 'bg-[#D4AF37] text-[#121417] shadow-sm font-extrabold'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      {ms.year.split(' ')[0]}
                    </button>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 2. TABBED EXPERIENCE DOSSIER (MILESTONES, TIMELINE, COMPETENCIES)         */}
      {/* ========================================================================= */}
      <div id="experience-tabs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-2xl p-2 rounded-3xl border border-white/90 dark:border-white/10 w-max shadow-md">
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'milestones'
                ? 'bg-[#D4AF37] text-[#121417] shadow-[0_4px_15px_rgba(212,175,55,0.35)] scale-[1.02]'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Major Project Milestones
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-[#D4AF37] text-[#121417] shadow-[0_4px_15px_rgba(212,175,55,0.35)] scale-[1.02]'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Career Timeline & Roles
          </button>

          <button
            onClick={() => setActiveTab('competencies')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'competencies'
                ? 'bg-[#D4AF37] text-[#121417] shadow-[0_4px_15px_rgba(212,175,55,0.35)] scale-[1.02]'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Core Competencies
          </button>
        </div>

        {/* Tab 1: Major Milestones */}
        {activeTab === 'milestones' && (
          <div className="flex flex-col gap-8 mb-24">
            {engineeringMilestones.map((item, index) => (
              <div 
                key={index} 
                className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-8 sm:p-10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]"
              >
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6 pb-6 border-b border-zinc-200/80 dark:border-white/10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase">
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 px-3 py-1 rounded-full font-bold">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono bg-amber-500/10 text-[#801834] dark:text-[#E84855] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full font-extrabold">
                      {item.value}
                    </span>
                    <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#D4AF37]" /> {item.location}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase font-mono font-bold text-[#801834] dark:text-[#E84855] tracking-wider mb-2">
                    Structural Achievement & Technical Innovation
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item.achievement}
                  </p>
                </div>

                <div className="bg-zinc-50/80 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-200/80 dark:border-white/5">
                  <h5 className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mb-3 font-bold">Key Technical Scope:</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
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
          <div className="mb-24">
            <div className="flex flex-col gap-8 relative border-l-2 border-zinc-200 dark:border-white/10 pl-8 ml-4">
              {CAREER_TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#D4AF37] group-hover:scale-125 transition-transform"></div>
                  <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-8 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
                    <span className="inline-block rounded-full bg-amber-500/10 border border-[#D4AF37]/40 px-3 py-1 text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-1">{item.role}</h3>
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Building2 size={13} className="text-[#D4AF37]" /> {item.company}
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 max-w-3xl leading-relaxed mb-5">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 font-bold">
                      <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 px-3 py-1">Direct Client Coordination</span>
                      <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 px-3 py-1">Code Authority Submissions</span>
                      <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 px-3 py-1">Multi-Disciplinary BIM</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Core Competencies */}
        {activeTab === 'competencies' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {structuralCompetencies.map((comp, index) => (
              <div 
                key={index} 
                className="group rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-8 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-[#801834] dark:text-[#E84855] flex items-center justify-center font-mono font-bold text-sm mb-6 group-hover:scale-110 transition-transform">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-black text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-[#801834] dark:group-hover:text-[#E84855] transition-colors">{comp.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{comp.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-white/10 flex items-center gap-2 text-[10px] uppercase font-mono text-[#D4AF37] font-bold">
                  <ShieldCheck size={13} /> Rigorous Engineering Verified
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ======================================================================= */}
        {/* 3. DYNAMIC SEISMIC SHAKE TABLE LABORATORY                               */}
        {/* ======================================================================= */}
        <div id="shake-table" className="mb-24 scroll-mt-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Live Physics & Non-Linear Dynamics
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Dynamic Seismic <span className="text-[#801834] dark:text-[#E84855]">Shake Table Laboratory.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Experience how high-performance structural systems withstand historical earthquake accelerograms through advanced base isolation, viscous fluid dampers, and tuned mass dampers.
            </p>
          </div>

          <SeismicShakeTable />
        </div>

        {/* ======================================================================= */}
        {/* 4. CREDENTIALS & CALL TO ACTION BANNER                                  */}
        {/* ======================================================================= */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <div className="text-left max-w-2xl">
            <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-widest block mb-2 font-bold">Ready to Collaborate</span>
            <h3 className="text-2xl lg:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">Need an Expert <span className="text-[#801834] dark:text-[#E84855]">Structural Engineer</span> for Your Project?</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Available for high-rise peer reviews, dynamic seismic analysis, value engineering audits, and complete construction documentation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => navigate('/resources')}
              className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Download Full CV (PDF)</span>
              <Download size={14} className="text-[#D4AF37]" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]"
            >
              <span>Request Consultation</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
