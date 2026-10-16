import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, HardHat, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { SOFTWARE_STACK, CAREER_TIMELINE, CERTIFICATIONS } from '../../utils/constants';

export const About = () => {
  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24 selection:bg-[#D4AF37] selection:text-[#121417]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Professional Biography & Credentials
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Resilience.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base lg:text-lg max-w-3xl leading-relaxed">
            Over 14 years of professional practice delivering robust structural design solutions for high-rise commercial developments, heavy civil infrastructure, and complex architectural steel frames.
          </p>
        </div>

        {/* Bio Bento Grid (Signature Alazar-style layout) */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24 items-stretch">
          
          {/* Bento Profile Image Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl border border-[#333]/80 bg-[#181A1E] p-3 shadow-2xl h-full flex flex-col justify-between">
              <div className="aspect-[4/5] bg-[#121417] overflow-hidden rounded-xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Alexandre Senior Structural Engineer"
                  className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#121417]/90 backdrop-blur-md border border-[#D4AF37]/50 px-3 py-1 text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider rounded-full shadow-lg">
                  PE #84729-SE · NY State
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-xs font-mono text-[#9CA3AF] border-t border-[#2D3137] mt-3">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#D4AF37]" /> Licensed PE, SE</span>
                <span className="text-[#D4AF37]">Active Practice</span>
              </div>
            </div>
          </div>

          {/* Bento Philosophy & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 rounded-2xl border border-[#333]/80 bg-[#181A1E] p-8 lg:p-10 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">Core Practice Philosophy</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#EAEAEA] mb-6 leading-snug">
                Precision Physics Meets Architectural Geometry
              </h2>
              <p className="text-[#9CA3AF] text-sm lg:text-base leading-relaxed mb-4">
                I believe structural engineering is the invisible foundation of visionary architecture. Great engineering does not constrain architectural form; it empowers ambitious geometry through rigorous mechanical physics, spatial efficiency, and material precision.
              </p>
              <p className="text-[#9CA3AF] text-sm lg:text-base leading-relaxed mb-6">
                Every design is subjected to comprehensive 3D non-linear dynamic spectrum analysis, ensuring structural integrity under extreme earthquake dynamics, hurricane-force wind drift, and long-term thermal expansion cycles.
              </p>
            </div>

            <div>
              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-[#2D3137]">
                <div className="flex items-center gap-3 bg-[#121417] p-3.5 rounded-xl border border-[#333]">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-[#EAEAEA] font-semibold block">100% Safety Record</span>
                    <span className="text-[10px] text-[#9CA3AF] font-mono">Zero audit deficiencies</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#121417] p-3.5 rounded-xl border border-[#333]">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-[#EAEAEA] font-semibold block">Columbia University</span>
                    <span className="text-[10px] text-[#9CA3AF] font-mono">M.S. Structural Engineering</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 flex flex-wrap gap-4">
                <a
                  href="/resources"
                  className="rounded-full bg-[#D4AF37] text-[#121417] px-6 py-3 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] inline-flex items-center gap-2"
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
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">Technical Toolkit</span>
          </div>
          <h3 className="text-3xl font-extrabold text-[#EAEAEA] mb-10">Software & FEA Proficiency</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_STACK.map((soft) => (
              <div 
                key={soft.name} 
                className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_25px_rgba(212,175,55,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-bold text-[#EAEAEA] font-mono group-hover:text-[#D4AF37] transition-colors">{soft.name}</h4>
                    <span className="rounded-full text-[10px] font-mono font-bold text-[#D4AF37] bg-[#121417] border border-[#D4AF37]/30 px-2.5 py-0.5 uppercase">
                      {soft.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{soft.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2D3137] text-[10px] font-mono text-[#666] group-hover:text-[#D4AF37] transition-colors">
                  FEA Precision Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">Professional Journey</span>
          </div>
          <h3 className="text-3xl font-extrabold text-[#EAEAEA] mb-12">Career Timeline</h3>

          <div className="flex flex-col gap-8 relative border-l-2 border-[#333] pl-8 ml-4">
            {CAREER_TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#121417] border-2 border-[#D4AF37] group-hover:scale-125 transition-transform"></div>
                <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 hover:border-[#D4AF37]/50 transition-all shadow-md">
                  <span className="inline-block rounded-full bg-[#121417] border border-[#D4AF37]/40 px-3 py-0.5 text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-[#EAEAEA] mb-1">{item.role}</h4>
                  <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">{item.company}</p>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Licensure & Certifications Bento */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">Official Licensure</span>
          </div>
          <h3 className="text-3xl font-extrabold text-[#EAEAEA] mb-10">Licensure & Certifications</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 flex items-start gap-4 hover:border-[#D4AF37]/50 transition-all shadow-lg group">
                <div className="p-3 bg-[#121417] text-[#D4AF37] border border-[#333] rounded-xl group-hover:scale-105 transition-transform shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#EAEAEA] mb-1 group-hover:text-[#D4AF37] transition-colors">{cert.title}</h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{cert.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
