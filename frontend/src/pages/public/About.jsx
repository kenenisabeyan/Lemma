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
import { PEVerificationPortal } from '../../components/engineering/PEVerificationPortal';
import { EngineeringPrinciplesMatrix } from '../../components/engineering/EngineeringPrinciplesMatrix';

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D4AF37] selection:text-[#121417] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC ABOUT & CREDENTIALS HERO SECTION                             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/80 dark:border-white/10 bg-white/75 dark:bg-[#0B0C0E]/85 backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Luminous White Glass Frosted Sheen & Center Light Dome (Exact Match to Home) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white/85 dark:from-[#0B0C0E]/80 dark:via-[#0B0C0E]/50 dark:to-[#0B0C0E]/85 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white/70 dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle Ambient Studio Lights */}
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/5 dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/6 dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

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
                  Senior Structural Engineer · NY PE #84729-SE & CA SE #61902
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1 sm:space-y-2"
              >
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                  Engineered for Resilience.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    Grounded
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    in Physics.
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
                  Over 14 years of professional practice delivering robust structural design solutions for high-rise commercial developments, heavy civil infrastructure, and complex architectural steel frames. My philosophy balances non-linear computational mechanics with bold spatial elegance.
                </p>

                {/* Authority Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 mt-4 border-t border-zinc-200/80 dark:border-white/10 font-mono text-xs">
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200">
                    <GraduationCap size={16} className="text-[#D4AF37] shrink-0" />
                    <div>
                      <span className="font-bold block text-zinc-900 dark:text-zinc-100 text-xs">Columbia Univ.</span>
                      <span className="text-[9px] text-zinc-500">M.S. Structural</span>
                    </div>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200">
                    <ShieldCheck size={16} className="text-[#D4AF37] shrink-0" />
                    <div>
                      <span className="font-bold block text-zinc-900 dark:text-zinc-100 text-xs">100% Safety</span>
                      <span className="text-[9px] text-zinc-500">Zero Deficiencies</span>
                    </div>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200">
                    <Building2 size={16} className="text-[#D4AF37] shrink-0" />
                    <div>
                      <span className="font-bold block text-zinc-900 dark:text-zinc-100 text-xs">180+ Delivered</span>
                      <span className="text-[9px] text-zinc-500">High-Rise & Bridges</span>
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
                  href="#pe-portal"
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] flex items-center gap-2 group cursor-pointer border border-[#D4AF37]"
                >
                  <ShieldCheck size={16} />
                  <span>VERIFY PE/SE CREDENTIALS</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Frosted Glass Pill Button */}
                <button
                  onClick={() => navigate('/resources')}
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer"
                >
                  <Download size={14} className="text-[#D4AF37]" />
                  <span>DOWNLOAD CV (PDF)</span>
                </button>
              </motion.div>

            </div>

            {/* Right Column: Verified Licensure Seal & Engineer Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="relative rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/95 dark:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] p-5 overflow-hidden group">
                
                {/* Header ribbon */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Active Board Licensure</span>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                    NY PE & CA SE
                  </span>
                </div>

                {/* Portrait with Holographic Seal Watermark */}
                <div className="relative aspect-[4/4.6] rounded-2xl overflow-hidden bg-zinc-900 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                    alt="Alexandre Techane Senior Structural Engineer"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Stamp badge */}
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-zinc-900/90 border border-[#D4AF37] px-3.5 py-1 text-[11px] font-mono font-bold text-[#801834] dark:text-[#E84855] uppercase tracking-wider rounded-full shadow-md backdrop-blur-md">
                    Lic #84729-SE
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#D4AF37] mb-1">
                      <ShieldCheck size={14} />
                      <span>Sealed & Verified Practice</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">Alexandre Techane, PE, SE</h3>
                    <p className="text-xs text-zinc-300 font-mono">Senior Principal · Structural & Civil Engineering</p>
                  </div>
                </div>

                {/* Quick Interactive Seal Actions */}
                <div className="pt-3 flex items-center justify-between gap-3">
                  <a
                    href="#pe-portal"
                    className="flex-1 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2c] text-[#121417] px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(212,175,55,0.3)] text-center cursor-pointer"
                  >
                    <span>Open Licensure Seal Portal</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE PHILOSOPHY & PRACTICE HIGHLIGHTS                                  */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-8 sm:p-12 mb-24 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">Core Practice Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-6 leading-tight max-w-3xl">
            Precision Physics Meets Architectural Geometry
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              I believe structural engineering is the invisible foundation of visionary architecture. Great engineering does not constrain architectural form; it empowers ambitious geometry through rigorous mechanical physics, spatial efficiency, and material precision.
            </p>
            <p>
              Every design is subjected to comprehensive 3D non-linear dynamic spectrum analysis, ensuring structural integrity under extreme earthquake dynamics, hurricane-force wind drift, and long-term thermal expansion cycles.
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
            Engineering <span className="text-[#801834] dark:text-[#E84855]">Career Progression.</span>
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
            Official Licensure & Credentials
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-10">
            Licensure & <span className="text-[#801834] dark:text-[#E84855]">Board Certifications.</span>
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
        {/* 6. ENGINEERING PRINCIPLES MATRIX                                        */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <EngineeringPrinciplesMatrix />
        </div>

        {/* ======================================================================= */}
        {/* 7. DIGITAL PE/SE SEAL VERIFICATION PORTAL                               */}
        {/* ======================================================================= */}
        <div id="pe-portal" className="mb-24 scroll-mt-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Live Licensure Credential System
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Digital Seal & <span className="text-[#801834] dark:text-[#E84855]">PE/SE Verification.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Verify active professional licensure credentials or generate a project-specific compliance certification package stamped with official New York PE and California SE credentials.
            </p>
          </div>

          <PEVerificationPortal />
        </div>

        {/* ======================================================================= */}
        {/* 8. BOTTOM CONSULTATION BANNER                                           */}
        {/* ======================================================================= */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Select Mandates</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
              Have a Structural Project in Mind?
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              From schematic framing layout to stamped PE/SE structural drawing sets and peer reviews — let's engineer something extraordinary together.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] shrink-0 flex items-center gap-2 cursor-pointer border border-[#D4AF37]"
          >
            <span>Schedule Consultation</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};
