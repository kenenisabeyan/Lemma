import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Award, Briefcase, GraduationCap, HardHat, CheckCircle2, ShieldCheck, Download, ArrowUpRight } from 'lucide-react';
import { SOFTWARE_STACK, CAREER_TIMELINE, CERTIFICATIONS } from '../../utils/constants';
import { PEVerificationPortal } from '../../components/engineering/PEVerificationPortal';

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent text-inherit pt-28 pb-24 relative overflow-hidden selection:bg-[#801834] selection:text-white transition-colors duration-200">
      {/* Ambient Aurora Drift Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#801834]/10 dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-zinc-200/80 dark:border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#801834] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#801834]"></span>
            </span>
            Professional Biography & Credentials
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.08] mb-5">
            Engineered for <span className="text-[#801834] dark:text-[#E84855]">Resilience.</span>
          </h1>
          <div className="rounded-2xl bg-white/95 dark:bg-[#181A1E]/80 backdrop-blur-md border border-rose-100/90 dark:border-zinc-800 p-6 shadow-[0_8px_30px_rgba(128,24,52,0.04)] max-w-3xl">
            <p className="text-zinc-700 dark:text-zinc-300 text-base lg:text-lg leading-relaxed">
              Over 14 years of professional practice delivering robust structural design solutions for high-rise commercial developments, heavy civil infrastructure, and complex architectural steel frames.
            </p>
          </div>
        </div>

        {/* Bio Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24 items-stretch">
          
          {/* Bento Profile Image Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full">
              {/* Decorative Outer Mask Frame */}
              <div aria-hidden="true" className="-inset-3 absolute rounded-[2rem] border border-[#801834]/20 dark:border-[#D4AF37]/25 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>

              <div className="relative rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-[#181A1E] p-3 shadow-md dark:shadow-2xl h-full flex flex-col justify-between">
                <div className="aspect-[4/5] bg-zinc-100 dark:bg-[#121417] overflow-hidden rounded-xl relative group">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                    alt="Alexandre Senior Structural Engineer"
                    className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#121417]/90 backdrop-blur-md border border-zinc-200 dark:border-[#D4AF37]/50 px-3 py-1 text-[10px] font-mono font-bold text-[#801834] dark:text-[#D4AF37] uppercase tracking-wider rounded-full shadow-xs">
                    PE #84729-SE · NY State
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-[#9CA3AF] border-t border-zinc-200 dark:border-[#2D3137] mt-3 font-semibold">
                  <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#801834] dark:text-[#D4AF37]" /> Licensed PE, SE</span>
                  <span className="text-[#801834] dark:text-[#D4AF37]">Active Practice</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Philosophy & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-[#181A1E] p-8 lg:p-10 shadow-md dark:shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] font-semibold">Core Practice Philosophy</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-6 leading-snug">
                Precision Physics Meets Architectural Geometry
              </h2>
              <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm lg:text-base leading-relaxed mb-4">
                I believe structural engineering is the invisible foundation of visionary architecture. Great engineering does not constrain architectural form; it empowers ambitious geometry through rigorous mechanical physics, spatial efficiency, and material precision.
              </p>
              <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm lg:text-base leading-relaxed mb-6">
                Every design is subjected to comprehensive 3D non-linear dynamic spectrum analysis, ensuring structural integrity under extreme earthquake dynamics, hurricane-force wind drift, and long-term thermal expansion cycles.
              </p>
            </div>

            <div>
              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-200 dark:border-[#2D3137]">
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-[#121417] p-3.5 rounded-xl border border-zinc-200 dark:border-[#333]">
                  <div className="p-2 rounded-lg bg-[#801834]/10 dark:bg-[#D4AF37]/10 text-[#801834] dark:text-[#D4AF37] border border-[#801834]/20 dark:border-[#D4AF37]/30 shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-900 dark:text-[#EAEAEA] font-semibold block">100% Safety Record</span>
                    <span className="text-[10px] text-zinc-500 dark:text-[#9CA3AF] font-mono">Zero audit deficiencies</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-[#121417] p-3.5 rounded-xl border border-zinc-200 dark:border-[#333]">
                  <div className="p-2 rounded-lg bg-[#801834]/10 dark:bg-[#D4AF37]/10 text-[#801834] dark:text-[#D4AF37] border border-[#801834]/20 dark:border-[#D4AF37]/30 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-900 dark:text-[#EAEAEA] font-semibold block">Columbia University</span>
                    <span className="text-[10px] text-zinc-500 dark:text-[#9CA3AF] font-mono">M.S. Structural Engineering</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 flex flex-wrap gap-4">
                <a
                  href="/resources"
                  className="rounded-full bg-[#801834] text-white hover:bg-[#68132a] dark:bg-[#D4AF37] dark:text-[#121417] dark:hover:bg-white px-6 py-3 text-xs font-extrabold tracking-widest uppercase transition-all shadow-[0_4px_15px_rgba(128,24,52,0.25)] inline-flex items-center gap-2"
                >
                  Download Complete Resume / CV (PDF) <Download size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Software Toolkit Bento Cards */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] font-semibold">Technical Toolkit</span>
          </div>
          <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-10">Software & FEA Proficiency</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_STACK.map((soft) => (
              <div 
                key={soft.name} 
                className="group rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-bold text-zinc-900 dark:text-[#EAEAEA] font-mono group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">{soft.name}</h4>
                    <span className="rounded-full text-[10px] font-mono font-bold text-[#801834] dark:text-[#D4AF37] bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/30 px-2.5 py-0.5 uppercase">
                      {soft.level}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">{soft.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-[#2D3137] text-[10px] font-mono text-zinc-500 dark:text-[#666] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">
                  FEA Precision Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] font-semibold">Professional Journey</span>
          </div>
          <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-12">Career Timeline</h3>

          <div className="flex flex-col gap-8 relative border-l-2 border-zinc-200 dark:border-[#333] pl-8 ml-4">
            {CAREER_TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#121417] border-2 border-[#801834] dark:border-[#D4AF37] group-hover:scale-125 transition-transform shadow-xs"></div>
                <div className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-md">
                  <span className="inline-block rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/40 px-3 py-0.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">{item.role}</h4>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-[#9CA3AF] uppercase tracking-wider mb-3">{item.company}</p>
                  <p className="text-sm text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Licensure & Certifications Bento */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] font-semibold">Official Licensure</span>
          </div>
          <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-10">Licensure & Certifications</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 flex items-start gap-4 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-lg group">
                <div className="p-3 bg-zinc-50 dark:bg-[#121417] text-[#801834] dark:text-[#D4AF37] border border-zinc-200 dark:border-[#333] rounded-xl group-hover:scale-105 transition-transform shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1 group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">{cert.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">{cert.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital PE/SE Seal & Licensure Verification Portal */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-white dark:bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37] animate-pulse"></span>
              Live Licensure Credential System
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Digital Seal & <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">PE/SE Verification.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Verify active professional licensure credentials or generate a project-specific compliance certification package stamped with official New York PE and California SE credentials.
            </p>
          </div>

          <PEVerificationPortal />
        </div>

        {/* Bottom Bento Consultation Banner */}
        <div className="rounded-3xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-gradient-to-r dark:from-[#181A1E] dark:via-[#14161A] dark:to-[#181A1E] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md dark:shadow-2xl">
          <div className="text-left">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#801834] dark:text-[#D4AF37] mb-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Select Mandates</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-2">
              Have a Structural Project in Mind?
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-[#9CA3AF] max-w-xl leading-relaxed">
              From schematic framing layout to stamped PE/SE structural drawing sets and peer reviews — let's engineer something extraordinary together.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#801834] text-white hover:bg-[#68132a] dark:bg-[#D4AF37] dark:text-[#121417] dark:hover:bg-white px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(128,24,52,0.3)] shrink-0 flex items-center gap-2"
          >
            Schedule Consultation <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
