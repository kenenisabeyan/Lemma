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
  FileCheck2, 
  Sparkles,
  Building2,
  Check,
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

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D3AE36] selection:text-[#12151C] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC ABOUT & CREDENTIALS HERO SECTION                             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-[#F8F9FA] dark:bg-[#12151C] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Luminous Glass Frosted Sheen & Center Light Dome */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F9FA]/40 to-[#F8F9FA] dark:from-transparent dark:via-[#12151C]/40 dark:to-[#12151C] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-[#D3AE36]/5 dark:bg-[#D3AE36]/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle Ambient Studio Lights */}
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#D3AE36]/[0.02] dark:bg-[#D3AE36]/10 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D3AE36]/[0.02] dark:bg-[#D3AE36]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/90 dark:from-[#12151C] dark:via-[#12151C]/90 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Licensure, Headline, Philosophy & Metrics */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 sm:gap-5">
              
              {/* License Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · 5th Year Graduating Class of 2026
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1 sm:space-y-2"
              >
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-[2.2rem] xl:text-[2.45rem] tracking-tight leading-tight text-zinc-900 dark:text-zinc-100 select-text">
                  Engineered for Ethiopia.{' '}
                  <span className="text-[#D3AE36] drop-shadow-[0_4px_20px_rgba(211,174,54,0.3)] select-text">
                    Grounded
                  </span>
                  <br />
                  <span className="text-[#D3AE36] opacity-95 inline-block select-text">
                    in ASTU Excellence.
                  </span>
                </h1>
              </motion.div>

              {/* Narrative Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full space-y-4"
              >
                <p className="text-[#1E2025] dark:text-[#F8F9FA] font-medium text-sm sm:text-base leading-relaxed text-left">
                  We are 5th-year Civil Engineering students at <strong className="text-[#D3AE36] font-bold">Adama Science and Technology University (ASTU)</strong>, School of Civil Engineering &amp; Architecture. Walking this path together as brothers, we fuse computational modeling in <span className="text-[#D3AE36] font-semibold">ETABS, SAP2000, and Civil 3D</span> with hands-on site supervision to engineer safe, resilient infrastructure across Ethiopia.
                </p>

                {/* Authority Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 font-mono text-xs">
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-[#232936]/80 backdrop-blur-xl border border-zinc-200/80 dark:border-[#31394D] flex items-center gap-2.5 text-[#1E2025] dark:text-[#F8F9FA] shadow-xs">
                    <GraduationCap size={18} className="text-[#D3AE36] shrink-0" />
                    <div>
                      <span className="font-bold block text-xs">ASTU SoCEA</span>
                      <span className="text-[10px] text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">B.Sc. Civil Eng. 2026</span>
                    </div>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-[#232936]/80 backdrop-blur-xl border border-zinc-200/80 dark:border-[#31394D] flex items-center gap-2.5 text-[#1E2025] dark:text-[#F8F9FA] shadow-xs">
                    <ShieldCheck size={18} className="text-[#D3AE36] shrink-0" />
                    <div>
                      <span className="font-bold block text-xs">100% Defense Ready</span>
                      <span className="text-[10px] text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">Capstone Excellence</span>
                    </div>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-[#232936]/80 backdrop-blur-xl border border-zinc-200/80 dark:border-[#31394D] flex items-center gap-2.5 text-[#1E2025] dark:text-[#F8F9FA] shadow-xs">
                    <Building2 size={18} className="text-[#D3AE36] shrink-0" />
                    <div>
                      <span className="font-bold block text-xs">25+ Capstones</span>
                      <span className="text-[10px] text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">RC, Highway &amp; Soils</span>
                    </div>
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
                  href="#practical-construction"
                  className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(211,174,54,0.35)] hover:shadow-[0_14px_32px_rgba(211,174,54,0.5)] flex items-center gap-2 group cursor-pointer border border-[#D3AE36]"
                >
                  <HardHat size={16} />
                  <span>EXPLORE PRACTICAL SITE WORK</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Flat Pill Button */}
                <button
                  onClick={() => navigate('/resources')}
                  className="rounded-full text-zinc-900 dark:text-zinc-100 hover:text-[#D3AE36] dark:hover:text-[#D3AE36] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Download size={14} className="text-[#D3AE36]" />
                  <span>DOWNLOAD DOSSIER (PDF)</span>
                </button>
              </motion.div>

              {/* Quick KPI Stats Row */}
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
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Structural Projects</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">100%</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">ASTU SoCEA Brotherhood</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Verified Licensure Seal & Engineer Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="relative w-full overflow-hidden group">
                
                {/* Header ribbon */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">ASTU SoCEA Candidate</span>
                  </div>
                  <span className="text-[10px] text-[#D3AE36] font-bold uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-full border border-[#D3AE36]/30">
                    Class of 2026
                  </span>
                </div>

                {/* Portrait with Holographic Seal Watermark */}
                <div className="relative aspect-[4/4.6] rounded-2xl overflow-hidden bg-[#12151C] shadow-inner group border border-zinc-200/80 dark:border-[#31394D]">
                  <img
                    src={lemmaImg}
                    alt="Lemma Amensisa & ASTU 5th Year Civil Engineering Brothers"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Stamp badge */}
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#12151C]/90 border border-[#D3AE36] px-3.5 py-1 text-[11px] font-mono font-bold text-[#D3AE36] uppercase tracking-wider rounded-full shadow-md backdrop-blur-md">
                    ASTU/SoCEA/2026
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#D3AE36] mb-1">
                      <ShieldCheck size={14} />
                      <span>ASTU Verified Candidate</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">Lemma Amensisa</h3>
                    <p className="text-xs text-zinc-300 font-mono">5th Year Civil Engineering Student · ASTU SoCEA</p>
                  </div>
                </div>

                {/* Quick Interactive Actions */}
                <div className="pt-3 flex items-center justify-between gap-3">
                  <a
                    href="#practical-construction"
                    className="flex-1 rounded-xl bg-[#D3AE36] hover:bg-[#C29F2F] text-[#12151C] px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(211,174,54,0.3)] text-center cursor-pointer"
                  >
                    <span>View Practical Construction Work</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 2. CORE PHILOSOPHY & PRACTICE HIGHLIGHTS                                  */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D3AE36] font-bold">Core Academic &amp; Field Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E2025] dark:text-[#F8F9FA] mb-6 leading-tight max-w-3xl">
            Precision Engineering Meets <span className="text-[#D3AE36]">Ethiopian Infrastructure.</span>
          </h2>

          {/* Book-Style Monograph Reading Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] shadow-sm border-l-4 border-l-[#D3AE36] mb-8 space-y-3.5">
            <p className="text-sm sm:text-[15px] text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-[1.75]">
              <span className="float-left text-3xl font-serif font-black text-[#D3AE36] leading-none pr-3 pt-0.5">C</span>
              ivil engineering is fundamentally an act of public trust and stewardship over the physical built environment. Across five years of academic study at Adama Science and Technology University (ASTU) School of Civil Engineering and Architecture (SoCEA), our philosophy has centered on one inviolable principle: theoretical calculations must directly withstand physical reality. Every structural member modeled on our workstations must translate safely into rebar cages, concrete batching, and stable foundations on Ethiopia's distinctive geological terrains.
            </p>
            <p className="text-sm sm:text-[15px] text-[#1E2025]/85 dark:text-[#F8F9FA]/85 leading-[1.75]">
              Whether confronting the severe seismic acceleration coefficients of the Main Ethiopian Rift or mitigating deep cyclic volumetric swelling across expansive black cotton clay soils, our designs are calculated in strict conformance with both national provisions (<strong className="text-[#D3AE36] font-semibold">EBCS EN 1990–1998</strong>, <strong className="text-[#D3AE36] font-semibold">ERA 2024 Standards</strong>) and international Eurocode structural methodologies.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 pt-2">
            <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] shadow-sm hover:border-[#D3AE36]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center font-bold">
                    <Target size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1E2025] dark:text-[#F8F9FA]">Context-Driven Civil Engineering</h4>
                    <span className="text-[10px] font-mono text-[#D3AE36] font-bold uppercase tracking-wider">Rift Valley &amp; Local Geologies</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#1E2025]/85 dark:text-[#F8F9FA]/80 leading-relaxed mb-4">
                  We believe civil engineering shapes communities. As 5th-year students at ASTU, we study and work together as brothers to solve real local challenges — from earthquake forces in the Great Rift Valley to foundation design on expansive black cotton soils.
                </p>
              </div>
              <div className="pt-3 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex items-center gap-3 text-xs font-mono text-[#D3AE36] font-bold">
                <span>✦ Seismic Ductility Class High</span>
                <span>·</span>
                <span>✦ Expansive Soil Stabilization</span>
              </div>
            </div>

            <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] shadow-sm hover:border-[#D3AE36]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center font-bold">
                    <Layers size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1E2025] dark:text-[#F8F9FA]">Computational Rigor &amp; National Codes</h4>
                    <span className="text-[10px] font-mono text-[#D3AE36] font-bold uppercase tracking-wider">EBCS &amp; ERA Certified</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#1E2025]/85 dark:text-[#F8F9FA]/80 leading-relaxed mb-4">
                  Every capstone design is modeled in ETABS, SAP2000, or Civil 3D, and checked against Ethiopian Building Code Standards (EBCS EN 1990–1998) and ERA manuals to ensure safety, durability, and cost efficiency.
                </p>
              </div>
              <div className="pt-3 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex items-center gap-3 text-xs font-mono text-[#D3AE36] font-bold">
                <span>✦ Finite Element Verification</span>
                <span>·</span>
                <span>✦ Standard Bar Bending Schedules</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 3. SOFTWARE & FEA PROFICIENCY                                           */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D3AE36] shadow-xs mb-3 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
            Technical Toolkit & Simulation
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-10">
            Software & <span className="text-[#D3AE36]">FEA Numerical Modeling.</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_STACK.map((soft) => (
              <div 
                key={soft.name} 
                className="p-5 rounded-2xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-base font-bold text-[#1E2025] dark:text-[#F8F9FA] font-mono group-hover:text-[#D3AE36] transition-colors">{soft.name}</h4>
                    <span className="text-[10px] font-mono font-bold text-[#D3AE36] uppercase px-2 py-0.5 rounded-full bg-[#D3AE36]/10 border border-[#D3AE36]/30">
                      {soft.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed mb-3">{soft.desc}</p>
                </div>
                <div className="mt-2 pt-3 border-t border-[#31394D]/15 dark:border-[#31394D]/50 text-[10px] font-mono text-[#1E2025]/60 dark:text-[#F8F9FA]/60 group-hover:text-[#D3AE36] transition-colors flex items-center justify-between">
                  <span>FEA Precision Verified</span>
                  <CheckCircle2 size={12} className="text-[#D3AE36]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 4. CAREER TIMELINE                                                      */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-[#31394D] px-4 py-1.5 text-xs font-mono text-[#D3AE36] mb-3 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
            Professional Journey & Track Record
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-12">
            Academic & Field <span className="text-[#D3AE36]">Progression.</span>
          </h3>

          <div className="flex flex-col gap-6 relative border-l-2 border-[#D3AE36]/40 pl-6 sm:pl-8 ml-3 sm:ml-4">
            {CAREER_TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-white dark:bg-[#12151C] border-2 border-[#D3AE36] group-hover:scale-125 transition-transform shadow-xs"></div>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-md hover:border-[#D3AE36]/60 transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-[#D3AE36] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D3AE36]/10 border border-[#D3AE36]/30">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono text-[#1E2025]/60 dark:text-[#F8F9FA]/60 uppercase tracking-widest font-semibold">
                      Milestone 0{index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#1E2025] dark:text-[#F8F9FA] leading-snug">{item.role}</h4>
                  <p className="text-xs font-semibold text-[#D3AE36] uppercase tracking-wider">{item.company}</p>
                  <p className="text-xs sm:text-sm text-[#1E2025]/85 dark:text-[#F8F9FA]/85 leading-relaxed pt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 5. LICENSURE & BOARD CERTIFICATIONS                                     */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 px-4 py-1.5 text-xs font-mono text-[#D3AE36] mb-3 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
            Academic Honors & Technical Certifications
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-10">
            Academic Credentials & <span className="text-[#D3AE36]">Certifications.</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-md hover:border-[#D3AE36]/60 transition-all flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-xl bg-[#D3AE36]/10 text-[#D3AE36] shrink-0 group-hover:scale-110 transition-transform">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1E2025] dark:text-[#F8F9FA] mb-1 group-hover:text-[#D3AE36] transition-colors leading-snug">{cert.title}</h4>
                  <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed">{cert.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 6. PRACTICAL SITE CONSTRUCTION & INTERNSHIP SHOWCASE                    */}
        {/* ======================================================================= */}
        <div id="practical-construction" className="mb-24 scroll-mt-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 px-4 py-1.5 text-xs font-mono text-[#D3AE36] mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
              On-Site Practical Construction &amp; Internship Experience
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1E2025] dark:text-[#F8F9FA] tracking-tight mb-4">
              Practical Construction <span className="text-[#D3AE36]">&amp; Field Engineering.</span>
            </h2>
            <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/80 text-sm md:text-base leading-relaxed">
              Real-world site experience during university-industry internships at <strong className="text-[#D3AE36] font-bold">Oromia Construction Corporation (OCC)</strong>. Bridging classroom calculations with hands-on site execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D3AE36] uppercase">
                    EBCS / ASTM
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1E2025] dark:text-[#F8F9FA] mb-2 group-hover:text-[#D3AE36] transition-colors">
                  Concrete Casting &amp; Slump Testing
                </h4>
                <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed mb-3">
                  Supervised batching and consistency checks for structural grade concrete pours:
                </p>
                <div className="space-y-1.5 text-[11px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>80–120mm slump cone verification</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>7 &amp; 28-day 150mm cube crush tests</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#31394D]/15 dark:border-[#31394D]/50 text-[10px] font-mono text-[#D3AE36] font-bold">
                Quality Assurance Verified
              </div>
            </div>

            <div className="bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HardHat size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D3AE36] uppercase">
                    Site Supervision
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1E2025] dark:text-[#F8F9FA] mb-2 group-hover:text-[#D3AE36] transition-colors">
                  Rebar Detailing &amp; Formwork Plumb
                </h4>
                <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed mb-3">
                  Pre-pour inspections ensuring full structural drawings and BBS compliance:
                </p>
                <div className="space-y-1.5 text-[11px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>135° seismic stirrup hooks &amp; splices</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>Cover blocks &amp; vertical strut plumb</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#31394D]/15 dark:border-[#31394D]/50 text-[10px] font-mono text-[#D3AE36] font-bold">
                Pre-Pour Inspection Protocol
              </div>
            </div>

            <div className="bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Compass size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D3AE36] uppercase">
                    Field Surveying
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1E2025] dark:text-[#F8F9FA] mb-2 group-hover:text-[#D3AE36] transition-colors">
                  Total Station &amp; Level Setting Out
                </h4>
                <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed mb-3">
                  Geodetic alignment from benchmark to construction gridlines:
                </p>
                <div className="space-y-1.5 text-[11px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>Column gridline &amp; axis triangulation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>AutoLevel vertical bench transfer</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#31394D]/15 dark:border-[#31394D]/50 text-[10px] font-mono text-[#D3AE36] font-bold">
                Sub-Millimeter Alignment
              </div>
            </div>

            <div className="bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Layers size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D3AE36] uppercase">
                    ERA Specifications
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1E2025] dark:text-[#F8F9FA] mb-2 group-hover:text-[#D3AE36] transition-colors">
                  Earthworks &amp; Road Compaction
                </h4>
                <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed mb-3">
                  Subgrade compaction and expansive soil mitigation:
                </p>
                <div className="space-y-1.5 text-[11px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>Sand cone Field Density Tests (FDT)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>Lime stabilization for black cotton clay</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#31394D]/15 dark:border-[#31394D]/50 text-[10px] font-mono text-[#D3AE36] font-bold">
                Field Density Test (FDT) Approved
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 7.5 ASTU SoCEA CIVIL ENGINEERING BROTHERHOOD (id="brotherhood")          */}
        {/* ======================================================================= */}
        <div id="brotherhood" className="mb-24 scroll-mt-24">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-[#31394D] bg-[#FFFFFF] dark:bg-[#232936] px-4 py-1.5 text-xs font-mono text-[#D3AE36] shadow-xs mb-3 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
              ASTU SoCEA Civil Engineering Brotherhood · Class of 2026
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2025] dark:text-[#F8F9FA] tracking-tight mb-4">
              United in Rigor. <span className="text-[#D3AE36]">Graduating as Brother Engineers.</span>
            </h2>

            {/* Book-Style Editorial Narrative Monograph */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] shadow-sm text-left my-6 space-y-3.5 border-l-4 border-l-[#D3AE36]">
              <p className="text-sm sm:text-[15px] text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-[1.75]">
                <span className="float-left text-3xl font-serif font-black text-[#D3AE36] leading-none pr-3 pt-0.5">W</span>
                e are not merely independent students; we are a disciplined engineering brotherhood formed through five years of shared academic rigor at Adama Science and Technology University (ASTU). From foundational vector statics and fluid mechanics to complex multi-story ETABS modal simulations and high-temperature summer site internships at Oromia Construction Corporation (OCC), each member of our cohort brings a specialized, certified pillar of civil praxis to the table.
              </p>
              <div className="pt-2 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-[#D3AE36] font-bold">✦ Co-Authored Capstones &amp; Site Supervisions</span>
                <span className="text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold">ADAMA · OROMIA · ETHIOPIA</span>
              </div>
            </div>
          </div>

          {/* 6-Card Brotherhood Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brotherhoodCohort.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-2xl bg-[#FFFFFF] dark:bg-[#232936] border border-zinc-200/90 dark:border-[#31394D] p-5 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 dark:hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between cad-bracket-corners"
              >
                <div>
                  {/* Photo Thumbnail with Blueprint & Vignette */}
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden mb-4 bg-[#12151C] border border-zinc-200/50 dark:border-[#31394D]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Corner Crosshairs */}
                    <span className="absolute top-2 left-2 text-[8px] font-mono text-white/50 tracking-widest">+</span>
                    <span className="absolute top-2 right-2 text-[8px] font-mono text-white/50 tracking-widest">+</span>
                    <span className="absolute bottom-2 left-2 text-[8px] font-mono text-white/50 tracking-widest">+</span>
                    <span className="absolute bottom-2 right-2 text-[8px] font-mono text-white/50 tracking-widest">+</span>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md ${member.badgeColor}`}>
                        {member.badge}
                      </span>
                    </div>

                    {/* Live Stat in Photo */}
                    <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#D3AE36] font-bold">
                      {member.stat}
                    </div>
                  </div>

                  {/* Header & Role */}
                  <h3 className="text-lg font-extrabold text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#D3AE36] font-semibold mt-1 mb-2">
                    {member.role}
                  </p>

                  {/* Focus narrative */}
                  <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/75 leading-relaxed mb-4">
                    {member.focus}
                  </p>

                  {/* Standards Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.standards.map((std) => (
                      <span
                        key={std}
                        className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-[#12151C] text-zinc-700 dark:text-[#F8F9FA]/80 border border-zinc-200 dark:border-[#31394D]"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Quote Strip */}
                <div className="pt-3 border-t border-zinc-200/70 dark:border-[#31394D] text-[11px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/70 italic flex items-center justify-between">
                  <span className="truncate">"{member.quote}"</span>
                  <ArrowUpRight size={14} className="text-[#D3AE36] shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Brotherhood Cohort Endorsement Strip */}
          <div className="mt-8 p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#232936] border border-[#D3AE36]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D3AE36]/15 border border-[#D3AE36]/40 flex items-center justify-center text-[#D3AE36] shrink-0">
                <Users size={18} />
              </div>
              <div>
                <span className="font-extrabold uppercase text-[#1E2025] dark:text-[#F8F9FA] block">ASTU SoCEA Capstone Cohort Certified</span>
                <span className="text-[#1E2025]/70 dark:text-[#F8F9FA]/70">Multidisciplinary final-year student engineering cohort ready for national infrastructure projects.</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] text-[#12151C] px-5 py-2.5 font-bold uppercase tracking-wider text-xs transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <span>Recruit Our Team</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 8. BOTTOM CONSULTATION BANNER ARCHITECTURAL DIV CARD                    */}
        {/* ======================================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div className="text-left max-w-2xl space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#D3AE36] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Graduate Engagements &amp; Capstone Defense</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#1E2025] dark:text-[#F8F9FA] tracking-tight leading-snug">
              Have an Infrastructure Project or Graduate Role in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed">
              From structural RC framing analysis to highway alignments and geotechnical soil testing — let's connect and build Ethiopia's future together.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(211,174,54,0.35)] shrink-0 flex items-center gap-2 cursor-pointer border border-[#D3AE36]"
          >
            <span>Connect With Us</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};
