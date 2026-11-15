import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  HardHat, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  ArrowUpRight, 
  ArrowRight,
  Cpu, 
  Compass, 
  Building2,
  Users,
  Target,
  Layers,
  MapPin
} from 'lucide-react';
import { SOFTWARE_STACK, CAREER_TIMELINE, CERTIFICATIONS } from '../../utils/constants';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';
import lemmaImg from '../../assets/lemma.JPG';
import lemmaTwoImg from '../../assets/lemma-two.jpg';
import lemmaThreeImg from '../../assets/lemma-three.jpg';
import lemmaFourImg from '../../assets/lemma-four.jpg';
import li2Img from '../../assets/li2.jpg';
import li3Img from '../../assets/li3.jpg';

export const About = () => {
  const navigate = useNavigate();

  const brotherhoodCohort = [
    {
      id: 'lemma',
      name: 'Lemma Amensisa',
      role: 'Senior Capstone Lead & Structural Dynamics',
      focus: 'Multi-story RC Dual Frame, ETABS 3D Seismic Analysis & Project Integration',
      image: lemmaImg,
      badge: 'ASTU SoCEA Lead · 2026',
      badgeColor: 'bg-[#D3AE36]/15 text-[#D3AE36] border-[#D3AE36]/40',
      standards: ['EBCS EN 1998', 'ETABS 21', 'Eurocode 2'],
      stat: '100% Defense Ready',
      quote: 'Engineered for resilience, tested on site, built with brotherhood.'
    },
    {
      id: 'structural',
      name: 'Structural Modeling Cohort',
      role: 'FEA Computing & Beam-Column Joint Detailing',
      focus: 'Bending moment distribution, shear wall stress tensors & SAP2000 calculations',
      image: lemmaTwoImg,
      badge: 'FEA Specialist · ASTU',
      badgeColor: 'bg-[#232936] text-[#D3AE36] border-[#D3AE36]/30',
      standards: ['SAP2000 v24', 'ACI 318', 'SAFE Slab'],
      stat: '0.015h Drift Pass',
      quote: 'Eliminating torsional eccentricities before concrete is ever poured.'
    },
    {
      id: 'highway',
      name: 'Highway Infrastructure Specialist',
      role: 'Geometric Road Alignment & Mass-Haul Engineering',
      focus: 'Civil 3D horizontal/vertical profiling, ERA DC6 standards & earthwork balance',
      image: lemmaThreeImg,
      badge: 'ERA Certified · 2026',
      badgeColor: 'bg-[#232936] text-emerald-400 border-emerald-500/30',
      standards: ['AutoCAD Civil 3D', 'ERA 2024', 'AASHTO'],
      stat: '14.8 km Corridor Done',
      quote: 'Balancing mass-haul diagrams for economical corridor transit.'
    },
    {
      id: 'geotech',
      name: 'Geotechnical & Foundation Engineer',
      role: 'Expansive Soil Stabilization & Deep Piles',
      focus: 'Rift Valley black cotton clay mitigation, lime stabilization & pile cap design',
      image: lemmaFourImg,
      badge: 'Soils & Subgrade Lead',
      badgeColor: 'bg-[#232936] text-[#D3AE36] border-[#D3AE36]/30',
      standards: ['EBCS EN 1997', 'FDT Density', 'Terzaghi Bearing'],
      stat: '220 kPa Bearing Pass',
      quote: 'Deep foundational safety anchored into volcanic bedrock.'
    },
    {
      id: 'survey',
      name: 'Site QC & Field Supervision Officer',
      role: 'Total Station Surveying & Concrete Quality Batching',
      focus: 'Slump testing, rebar BBS inspection, 135° hook verification & OCC site training',
      image: li2Img,
      badge: 'OCC Site Internship',
      badgeColor: 'bg-[#232936] text-[#D3AE36] border-[#D3AE36]/30',
      standards: ['Digital Total Station', 'Slump Cone QC', 'Bar Bending (BBS)'],
      stat: '100% Pour Sign-off',
      quote: 'Inspecting every rebar diameter and formwork plumbness on site.'
    },
    {
      id: 'hydraulics',
      name: 'Hydraulic & Water Resources Engineer',
      role: 'Drainage Corridor & Watershed Storm Modeling',
      focus: 'Culvert sizing, catchment runoff coefficient, and sediment retention works',
      image: li3Img,
      badge: 'Water Works Division',
      badgeColor: 'bg-[#232936] text-cyan-400 border-cyan-500/30',
      standards: ['HEC-RAS', 'Rational Runoff', 'ERA Drainage'],
      stat: '50-Yr Storm Return',
      quote: 'Protecting highway embankments against severe seasonal monsoon runoff.'
    }
  ];

  const siteCapabilities = [
    {
      title: 'Concrete Batching & Slump Tests',
      tag: 'EBCS / ASTM',
      desc: '80–120mm slump cone verification, 7 & 28-day 150mm cube crush compressive tests per EBCS EN 1992.'
    },
    {
      title: 'Rebar Detailing & BBS Audits',
      tag: 'Site Supervision',
      desc: 'Pre-pour checks ensuring 135° seismic stirrup hooks, lap splices, cover blocks, and formwork plumb.'
    },
    {
      title: 'Total Station & Level Setting Out',
      tag: 'Geodetic Survey',
      desc: 'Column gridline axis triangulation, benchmark transfer, and sub-millimeter foundation alignment.'
    },
    {
      title: 'Earthworks & Soil Compaction',
      tag: 'ERA Road Standards',
      desc: 'Sand cone Field Density Tests (FDT), lime chemical stabilization for expansive black cotton clay.'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D3AE36] selection:text-[#12151C] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC ABOUT & CREDENTIALS HERO SECTION                             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8F9FA] dark:bg-[#12151C] transition-colors">
        
        {/* Three.js 3D Civil Engineering Canvas Background */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F9FA] dark:from-[#12151C] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scope, Headline, Bio, Badges */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-xl shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU SoCEA Civil Engineering · Class of 2026 Lead
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1.5"
              >
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-[2.2rem] xl:text-[2.45rem] tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
                  Engineering Ethiopia with Rigor,{' '}
                  <span className="text-[#D3AE36] drop-shadow-[0_4px_20px_rgba(211,174,54,0.3)]">
                    ASTU Brotherhood,
                  </span>
                  <br />
                  <span className="text-[#D3AE36] opacity-95 inline-block">
                    &amp; Practical Construction.
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full space-y-4"
              >
                <div className="p-4 sm:p-5 rounded-3xl bg-black/[0.03] dark:bg-white/[0.04] space-y-3.5 max-w-xl">
                  <div className="flex items-center justify-between pb-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1E2025]/70 dark:text-[#F8F9FA]/70 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36]" />
                      Candidate: B.Sc. Civil Engineering (2026)
                    </span>
                    <span className="text-[10px] font-mono text-[#D3AE36] font-bold bg-[#D3AE36]/10 px-2.5 py-0.5 rounded-full">
                      5th-Year Senior
                    </span>
                  </div>

                  <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 font-medium text-xs sm:text-sm leading-relaxed text-left">
                    Final-year student civil engineer at <strong className="text-[#D3AE36] font-bold">Adama Science and Technology University (ASTU)</strong>. Specializing in ETABS 3D seismic modeling, highway corridor alignments, and site quality supervision during OCC internships across Ethiopia.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5 font-mono text-xs">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04]">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-[11px] truncate">
                        <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-bold">Modeling:</strong> ETABS, Civil 3D, SAP
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04]">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-[11px] truncate">
                        <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-bold">Site QC:</strong> Slump, BBS &amp; Compaction
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  onClick={() => navigate('/projects')}
                  className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(211,174,54,0.35)] flex items-center gap-2 cursor-pointer font-mono"
                >
                  <span>Explore Capstone Projects</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-full text-zinc-800 dark:text-zinc-200 hover:text-[#D3AE36] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer font-mono"
                >
                  <span>Contact Our Team</span>
                  <ArrowUpRight size={14} className="text-[#D3AE36]" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg"
              >
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-zinc-900 dark:text-white font-mono">5th</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">25+</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Capstone Works</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">ASTU</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">SoCEA Campus</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Profile Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#12151C]">
                <img
                  src={lemmaImg}
                  alt="Lemma Amensisa"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                    <span className="text-[10px] font-mono text-[#D3AE36] font-bold uppercase tracking-wider">Lead Student Structural Engineer</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">Lemma Amensisa</h3>
                  <p className="text-xs text-zinc-300 font-mono">5th Year Civil Engineering Student · ASTU SoCEA</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 2. INTEGRATED FIELD PRACTICE & FEA NUMERICAL TOOLKIT                       */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#DFE2EB] dark:bg-[#1E2025] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
              Theory Meets Practical Construction
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1E2025] dark:text-[#F8F9FA] tracking-tight mb-4">
              Field Execution <span className="text-[#D3AE36]">&amp; Computational Rigor.</span>
            </h2>
            <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/80 text-sm md:text-base leading-relaxed">
              Bridging academic FEA calculations with real jobsite supervision during university-industry internships at <strong className="text-[#D3AE36] font-bold">Oromia Construction Corporation (OCC)</strong>.
            </p>
          </div>

          {/* 4 Field Practice Modules */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] mb-6 flex items-center gap-2">
              <span>✦</span> On-Site Practical Construction Competencies (OCC Internship)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteCapabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black/[0.03] dark:bg-white/[0.04] rounded-2xl p-6 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold text-[#D3AE36] uppercase px-2 py-0.5 rounded-full bg-[#D3AE36]/10 inline-block">
                      {item.tag}
                    </span>
                    <h4 className="font-extrabold text-base text-[#1E2025] dark:text-[#F8F9FA] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#1E2025]/75 dark:text-[#F8F9FA]/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 text-[10px] font-mono text-[#D3AE36] font-bold">
                    ✓ Verified on OCC Sites
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Stack & Milestones 2-Column Split */}
          <div className="grid lg:grid-cols-12 gap-8 items-start pt-6">
            
            {/* Left: Software Stack (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] flex items-center gap-2">
                <span>✦</span> FEA Numerical Modeling Stack
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {SOFTWARE_STACK.slice(0, 4).map((soft) => (
                  <div 
                    key={soft.name} 
                    className="p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA] font-mono">{soft.name}</h4>
                        <span className="text-[9px] font-mono font-bold text-[#D3AE36] uppercase px-2 py-0.5 rounded-full bg-[#D3AE36]/10">
                          {soft.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#1E2025]/75 dark:text-[#F8F9FA]/75 leading-relaxed">{soft.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Academic Milestones Timeline (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] flex items-center gap-2">
                <span>✦</span> Academic &amp; Field Milestones
              </h3>
              <div className="space-y-3">
                {CAREER_TIMELINE.slice(0, 3).map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] flex items-start gap-4"
                  >
                    <span className="text-xs font-mono text-[#D3AE36] font-bold px-2 py-1 rounded-lg bg-[#D3AE36]/10 shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[#1E2025] dark:text-[#F8F9FA] leading-tight">{item.role}</h4>
                      <p className="text-[11px] text-[#D3AE36] font-mono font-semibold mt-0.5">{item.company}</p>
                      <p className="text-xs text-[#1E2025]/70 dark:text-[#F8F9FA]/70 mt-1 leading-snug">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE BROTHERHOOD COHORT & GRADUATE READINESS                            */}
      {/* ========================================================================= */}
      <section id="brotherhood" className="py-20 sm:py-24 bg-[#F8F9FA] dark:bg-[#12151C] transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
              ASTU SoCEA Civil Engineering Brotherhood · Class of 2026
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-[#F8F9FA] tracking-tight mb-4">
              United in Rigor. <span className="text-[#D3AE36]">Graduating as Brother Engineers.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#1E2025]/85 dark:text-[#F8F9FA]/80 leading-relaxed">
              From 1st-year statics to 5th-year multi-story ETABS capstone defense, surveying camps in Adama, and field internships at OCC — meet the team that stands shoulder to shoulder with Lemma Amensisa.
            </p>
          </div>

          {/* 6-Card Brotherhood Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brotherhoodCohort.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-2xl bg-transparent sm:bg-black/[0.02] sm:dark:bg-white/[0.03] p-5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden mb-4 bg-[#12151C]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 z-10">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${member.badgeColor}`}>
                        {member.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#D3AE36] font-bold">
                      {member.stat}
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#D3AE36] font-semibold mt-0.5 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/75 leading-relaxed mb-4">
                    {member.focus}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.standards.map((std) => (
                      <span
                        key={std}
                        className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-zinc-700 dark:text-[#F8F9FA]/80"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 text-[11px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/70 italic flex items-center justify-between">
                  <span className="truncate">"{member.quote}"</span>
                  <ArrowUpRight size={14} className="text-[#D3AE36] shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Consolidated Single Consultation & Recruitment Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-transparent sm:bg-black/[0.02] sm:dark:bg-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-2xl space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#D3AE36] font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Graduate Engagements &amp; Capstone Defense</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#1E2025] dark:text-[#F8F9FA] tracking-tight leading-snug">
                Have an Infrastructure Project or Graduate Role in Mind?
              </h3>
              <p className="text-xs sm:text-sm text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed">
                Connect directly with Lemma Amensisa &amp; ASTU SoCEA Civil Engineering Team. Let's discuss structural RC frames, ERA highway corridors, or expansive soil foundations.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(211,174,54,0.35)] shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Connect With Us</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
