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
  Check
} from 'lucide-react';
import { SOFTWARE_STACK, CAREER_TIMELINE, CERTIFICATIONS } from '../../utils/constants';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D4AF37] selection:text-[#121417] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC ABOUT & CREDENTIALS HERO SECTION                             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B0C0E] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Luminous White Glass Frosted Sheen & Center Light Dome (Exact Match to Home) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-[#0B0C0E] dark:via-[#0B0C0E] dark:to-[#0B0C0E] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle Ambient Studio Lights */}
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/[0.02] dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/[0.02] dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-[#0B0C0E] dark:via-[#0B0C0E]/90 to-transparent pointer-events-none"></div>
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
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
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
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 select-text drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                  Engineered for Ethiopia.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)] select-text">
                    Grounded
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block select-text">
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
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm sm:text-base leading-relaxed text-left drop-shadow-xs">
                  We are 5th-year Civil Engineering students at Adama Science and Technology University (ASTU), School of Civil Engineering & Architecture. Walking this path together as brothers, we combine computer modeling in ETABS, SAP2000, and Civil 3D with hands-on site experience and Ethiopian standards to build safe, lasting infrastructure.
                </p>

                {/* Authority Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 font-mono text-xs">
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200">
                    <GraduationCap size={16} className="text-[#D4AF37] shrink-0" />
                    <div>
                      <span className="font-bold block text-zinc-900 dark:text-zinc-100 text-xs">ASTU SoCEA</span>
                      <span className="text-[9px] text-zinc-500">B.Sc. Civil Eng. 2026</span>
                    </div>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200">
                    <ShieldCheck size={16} className="text-[#D4AF37] shrink-0" />
                    <div>
                      <span className="font-bold block text-zinc-900 dark:text-zinc-100 text-xs">100% Defense Ready</span>
                      <span className="text-[9px] text-zinc-500">Capstone Excellence</span>
                    </div>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200">
                    <Building2 size={16} className="text-[#D4AF37] shrink-0" />
                    <div>
                      <span className="font-bold block text-zinc-900 dark:text-zinc-100 text-xs">25+ Capstone Projects</span>
                      <span className="text-[9px] text-zinc-500">RC, Highway & Soils</span>
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
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] flex items-center gap-2 group cursor-pointer border border-[#D4AF37]"
                >
                  <HardHat size={16} />
                  <span>EXPLORE PRACTICAL SITE WORK</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Frosted Glass Pill Button */}
                <button
                  onClick={() => navigate('/resources')}
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer"
                >
                  <Download size={14} className="text-[#D4AF37]" />
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
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono">5th</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono">25+</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Structural Projects</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#D4AF37] font-mono">100%</span>
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
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                    Class of 2026
                  </span>
                </div>

                {/* Portrait with Holographic Seal Watermark */}
                <div className="relative aspect-[4/4.6] rounded-2xl overflow-hidden bg-zinc-900 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                    alt="Lemma Techane & ASTU 5th Year Civil Engineering Brothers"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Stamp badge */}
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-zinc-900/90 border border-[#D4AF37] px-3.5 py-1 text-[11px] font-mono font-bold text-[#801834] dark:text-[#E84855] uppercase tracking-wider rounded-full shadow-md backdrop-blur-md">
                    ASTU/SoCEA/2026
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#D4AF37] mb-1">
                      <ShieldCheck size={14} />
                      <span>ASTU Verified Candidate</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">Lemma Techane</h3>
                    <p className="text-xs text-zinc-300 font-mono">5th Year Civil Engineering Student · ASTU SoCEA</p>
                  </div>
                </div>

                {/* Quick Interactive Actions */}
                <div className="pt-3 flex items-center justify-between gap-3">
                  <a
                    href="#practical-construction"
                    className="flex-1 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2c] text-[#121417] px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(212,175,55,0.3)] text-center cursor-pointer"
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
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">Core Academic & Field Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-6 leading-tight max-w-3xl">
            Precision Engineering Meets Ethiopian Infrastructure
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              We believe civil engineering shapes communities. As 5th-year students at ASTU, we study and work together as brothers to solve real local challenges — from earthquake forces in the Rift Valley to building on expansive black cotton soils.
            </p>
            <p>
              Every capstone design is modeled in ETABS, SAP2000, or Civil 3D, and checked against Ethiopian Building Code Standards (EBCS) and ERA manuals to ensure safety, durability, and cost efficiency.
            </p>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 3. SOFTWARE & FEA PROFICIENCY                                           */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-3 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Technical Toolkit & Simulation
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-10">
            Software & <span className="text-[#801834] dark:text-[#E84855]">FEA Numerical Modeling.</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_STACK.map((soft) => (
              <div 
                key={soft.name} 
                className="group rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono group-hover:text-[#D4AF37] transition-colors">{soft.name}</h4>
                    <span className="rounded-full text-[10px] font-mono font-bold text-[#D4AF37] bg-amber-500/10 border border-[#D4AF37]/30 px-2.5 py-0.5 uppercase">
                      {soft.level}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{soft.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/10 text-[10px] font-mono text-zinc-500 group-hover:text-[#D4AF37] transition-colors">
                  FEA Precision Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 4. CAREER TIMELINE                                                      */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-3 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Professional Journey & Track Record
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-12">
            Academic & Field <span className="text-[#801834] dark:text-[#E84855]">Progression.</span>
          </h3>

          <div className="flex flex-col gap-8 relative border-l-2 border-zinc-200 dark:border-white/10 pl-8 ml-4">
            {CAREER_TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#D4AF37] group-hover:scale-125 transition-transform shadow-xs"></div>
                <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 sm:p-7 hover:border-[#D4AF37]/50 transition-all shadow-sm">
                  <span className="inline-block rounded-full bg-amber-500/10 border border-[#D4AF37]/40 px-3 py-0.5 text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-black text-zinc-900 dark:text-zinc-100 mb-1">{item.role}</h4>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">{item.company}</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 5. LICENSURE & BOARD CERTIFICATIONS                                     */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-3 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Academic Honors & Technical Certifications
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-10">
            Academic Credentials & <span className="text-[#801834] dark:text-[#E84855]">Certifications.</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 flex items-start gap-4 hover:border-[#D4AF37]/50 transition-all shadow-sm group">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 text-[#D4AF37] border border-zinc-200 dark:border-white/10 rounded-2xl group-hover:scale-105 transition-transform shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-[#D4AF37] transition-colors">{cert.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{cert.body}</p>
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
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              On-Site Practical Construction &amp; Internship Experience
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Practical Construction <span className="text-[#801834] dark:text-[#E84855]">&amp; Field Engineering.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Real-world site experience during university-industry internships at Oromia Construction Corporation (OCC) and MIDROC. Bridging classroom calculations with hands-on site execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all shadow-sm group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 text-[#D4AF37] border border-zinc-200 dark:border-white/10 rounded-2xl group-hover:scale-105 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D4AF37] bg-amber-500/10 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full uppercase">
                    EBCS / ASTM
                  </span>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Concrete Casting &amp; Slump Testing
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Conducted on-site slump cone tests (80–120mm workability), concrete batching inspections, standard 150mm cube sampling, and 7 &amp; 28-day compressive crushing strength tests in the ASTU materials lab.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/10 text-[10px] font-mono text-zinc-500">
                Quality Assurance Verified
              </div>
            </div>

            <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all shadow-sm group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 text-[#D4AF37] border border-zinc-200 dark:border-white/10 rounded-2xl group-hover:scale-105 transition-transform">
                    <HardHat size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D4AF37] bg-amber-500/10 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full uppercase">
                    Site Supervision
                  </span>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Rebar Detailing &amp; Formwork Plumb
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Supervised rebar diameters, lap splice lengths, cover block positioning, 135° seismic stirrup hooks, formwork vertical plumbness, and strut bracing before major slab and column pours.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/10 text-[10px] font-mono text-zinc-500">
                Pre-Pour Inspection Protocol
              </div>
            </div>

            <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all shadow-sm group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 text-[#D4AF37] border border-zinc-200 dark:border-white/10 rounded-2xl group-hover:scale-105 transition-transform">
                    <Compass size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D4AF37] bg-amber-500/10 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full uppercase">
                    Field Surveying
                  </span>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Total Station &amp; Level Setting Out
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Transferred permanent benchmarks, established building column gridlines, and staked out road centerline horizontal and vertical levels using digital Total Stations and optical AutoLevels.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/10 text-[10px] font-mono text-zinc-500">
                Sub-Millimeter Alignment
              </div>
            </div>

            <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all shadow-sm group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800 text-[#D4AF37] border border-zinc-200 dark:border-white/10 rounded-2xl group-hover:scale-105 transition-transform">
                    <Layers size={24} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D4AF37] bg-amber-500/10 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full uppercase">
                    ERA Specifications
                  </span>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Earthworks &amp; Road Compaction
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Monitored deep foundation excavations in expansive black cotton soils, lime-stabilized subgrade layers, and verified road sub-base compaction density using the field sand cone test method.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/10 text-[10px] font-mono text-zinc-500">
                Field Density Test (FDT) Approved
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 8. BOTTOM CONSULTATION BANNER                                           */}
        {/* ======================================================================= */}
        <div className="py-12 border-t border-zinc-200/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Graduate Engagements & Capstone Defense</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
              Have an Infrastructure Project or Graduate Role in Mind?
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              From structural RC framing analysis to highway alignments and geotechnical soil testing — let's connect and build Ethiopia's future together.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] shrink-0 flex items-center gap-2 cursor-pointer border border-[#D4AF37]"
          >
            <span>Connect With Us</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};
