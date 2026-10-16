import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, HardHat, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { SOFTWARE_STACK, CAREER_TIMELINE, CERTIFICATIONS } from '../../utils/constants';

export const About = () => {
  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <HardHat size={14} /> Professional Biography & Background
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-6">
            Engineered for <span className="text-[#D4AF37]">Resilience.</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-3xl leading-relaxed">
            Over 14 years of professional practice delivering robust structural design solutions for high-rise commercial developments, heavy civil infrastructure, and complex architectural steel frames.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-center">
          <div className="lg:col-span-5">
            <div className="relative border border-[#333] p-2 bg-[#1E2125]">
              <div className="aspect-[4/5] bg-[#121417] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Alexandre Senior Structural Engineer"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute top-6 right-6 bg-[#121417]/90 border border-[#D4AF37] p-3 text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest">
                PE #84729-SE | NY State
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[#EAEAEA] border-l-2 border-[#D4AF37] pl-4">
              Structural Engineering Philosophy
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              I believe structural engineering is the invisible foundation of visionary architecture. Great engineering does not constrain architectural form; it empowers ambitious geometry through rigorous mechanical physics, spatial efficiency, and material precision.
            </p>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Every design is subjected to comprehensive 3D non-linear dynamic spectrum analysis, ensuring structural integrity under extreme earthquake dynamics, hurricane-force wind drift, and long-term thermal expansion cycles.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#333]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#D4AF37] w-5 h-5 shrink-0" />
                <span className="text-xs text-[#EAEAEA] font-semibold uppercase tracking-wider">Zero Safety Audit Deficiencies</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-[#D4AF37] w-5 h-5 shrink-0" />
                <span className="text-xs text-[#EAEAEA] font-semibold uppercase tracking-wider">M.S. Structural Engineering (Columbia)</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/resources"
                className="bg-[#D4AF37] text-[#121417] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all inline-flex items-center gap-2"
              >
                Download Complete Resume / CV (PDF) <Download size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Software Stack */}
        <div className="mb-24">
          <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Technical Toolkit
          </h2>
          <h3 className="text-3xl font-extrabold text-[#EAEAEA] mb-10">Software & FEA Proficiency</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_STACK.map((soft) => (
              <div key={soft.name} className="bg-[#1E2125] border border-[#333] p-6 hover:border-[#D4AF37]/50 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold text-[#EAEAEA] font-mono">{soft.name}</h4>
                  <span className="text-[10px] font-mono font-bold text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 uppercase">
                    {soft.level}
                  </span>
                </div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{soft.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-24">
          <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Professional Journey
          </h2>
          <h3 className="text-3xl font-extrabold text-[#EAEAEA] mb-12">Career Timeline</h3>

          <div className="flex flex-col gap-8 relative border-l-2 border-[#333] pl-8 ml-4">
            {CAREER_TIMELINE.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#121417] border-2 border-[#D4AF37]"></div>
                <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider block mb-1">{item.year}</span>
                <h4 className="text-xl font-bold text-[#EAEAEA]">{item.role}</h4>
                <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-3">{item.company}</p>
                <p className="text-sm text-[#9CA3AF] max-w-2xl leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Credentials
          </h2>
          <h3 className="text-3xl font-extrabold text-[#EAEAEA] mb-10">Licensure & Certifications</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-[#1E2125] border border-[#333] p-6 flex items-start gap-4">
                <div className="p-3 bg-[#121417] text-[#D4AF37] border border-[#333]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#EAEAEA] mb-1">{cert.title}</h4>
                  <p className="text-xs text-[#9CA3AF]">{cert.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
