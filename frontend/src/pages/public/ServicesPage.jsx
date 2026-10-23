import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Layers, 
  ShieldCheck, 
  Ruler, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight,
  Activity, 
  Cpu, 
  FileCheck2, 
  Compass, 
  Sparkles,
  Wind
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { CodeComplianceMatrix } from '../../components/engineering/CodeComplianceMatrix';
import { WindTunnelSimulator } from '../../components/engineering/WindTunnelSimulator';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const ServicesPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch('/services');
  const [activeHeroTab, setActiveHeroTab] = useState(0);

  const servicesList = (data?.services && data.services.length > 0) ? data.services : [
    {
      id: '1',
      title: 'Structural Analysis & Engineering Design',
      icon: 'Building2',
      summary: 'Advanced 3D linear and non-linear structural modeling for high-rise, commercial, and industrial facilities.',
      description: 'Comprehensive analysis from concept schematic phase through detailed construction documentation, ensuring structural safety, efficiency, and full building code compliance.',
      features: '["Wind and seismic dynamic response analysis","Gravity load system optimization & foundation design","3D BIM modeling and Tekla structural detailing","Code compliance auditing (IBC, ACI 318, AISC 360, ASCE 7)"]'
    },
    {
      id: '2',
      title: 'Reinforced Concrete & Steel Systems',
      icon: 'Layers',
      summary: 'Specialized member detailing and steel connection specification for heavy structural frameworks.',
      description: 'Tailored structural design for reinforced concrete cores, post-tensioned floor systems, composite steel beams, and complex truss geometries.',
      features: '["Post-tensioned slab & beam calculations","Precast concrete structural system design","High-capacity structural steel connection detailing","Material optimization for reduced carbon footprint"]'
    },
    {
      id: '3',
      title: 'Seismic Retrofitting & Structural Assessment',
      icon: 'ShieldCheck',
      summary: 'Rigorous structural health evaluations, failure analysis, and earthquake resilience retrofits.',
      description: 'Protecting legacy buildings and heritage structures through non-destructive testing, pushover analysis, and state-of-the-art seismic isolation upgrades.',
      features: '["Non-destructive testing (NDT) & concrete coring analysis","FEMA P-58 seismic performance estimation","Base isolation and fluid viscous damper integration","Structural repair after seismic or blast events"]'
    },
    {
      id: '4',
      title: 'Technical Advisory & Peer Review',
      icon: 'Ruler',
      summary: 'Independent third-party peer review and structural cost-optimization consulting for developers.',
      description: 'Providing strategic technical guidance for architects, general contractors, and project owners to eliminate design redundancies and prevent construction delays.',
      features: '["Third-party structural calculation verification","Value engineering and material quantity optimization","Expert witness & forensic structural investigation","Constructability reviews and site quality control"]'
    }
  ];

  const heroPillars = [
    {
      title: 'FEA Analysis & Modeling',
      short: 'ETABS & SAP2000 non-linear 3D dynamic simulations',
      icon: Building2,
      metric: '52-Story Superstructures'
    },
    {
      title: 'Post-Tensioned Concrete & Steel',
      short: 'Long-span structural slab & heavy steel connection design',
      icon: Layers,
      metric: '35% Span Optimization'
    },
    {
      title: 'Seismic Retrofit & Auditing',
      short: 'FEMA P-58 pushover curves & fluid viscous damper systems',
      icon: ShieldCheck,
      metric: 'ASCE 41-17 Compliance'
    },
    {
      title: 'Peer Review & Value Eng',
      short: 'Independent third-party verification & material reduction',
      icon: Ruler,
      metric: '15-25% Cost Savings'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D4AF37] selection:text-[#121417] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* CINEMATIC SERVICES HERO SECTION                                           */}
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
            
            {/* Left Column: Scope, Headline, Value Proposition */}
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
                  Engineering Scope of Practice · NY PE & CA SE
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1 sm:space-y-2"
              >
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 select-text drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                  Disciplined Mechanics.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)] select-text">
                    Comprehensive
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block select-text">
                    Structural Solutions.
                  </span>
                </h1>
              </motion.div>

              {/* Narrative Frosted Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full rounded-3xl bg-white/85 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/90 dark:border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] px-6 sm:px-8 py-4 sm:py-5"
              >
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm sm:text-base leading-relaxed text-left drop-shadow-xs">
                  Delivering high-performance structural engineering across all phases of development — from schematic load path conception and 3D FEA numerical simulations to stamped calculation packages and constructability peer reviews.
                </p>

                {/* Assurance & SLA Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 mt-4 border-t border-zinc-200/80 dark:border-white/10 font-mono text-xs">
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-xs">PE/SE Stamped</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-xs">IBC & ASCE 7-22</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-xs">Fast Peer Review</span>
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
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] flex items-center gap-2 group cursor-pointer border border-[#D4AF37]"
                >
                  <span>REQUEST CONSULTATION</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Frosted Glass Pill Button */}
                <a
                  href="#service-modules"
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer"
                >
                  <Layers size={15} className="text-[#D4AF37]" />
                  <span>EXPLORE 4 PILLARS</span>
                </a>
              </motion.div>

              {/* Quick KPI Stats Row (Exact pattern from Home) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg"
              >
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono">4</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Core Services</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono">14+</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Years Practice</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#D4AF37] font-mono">100%</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">PE/SE Stamped</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Interactive 4-Pillar Capability Matrix */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/95 dark:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] p-5 sm:p-6">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Practice Pillars Matrix</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Select Module</span>
                </div>

                {/* Pillar Clickable Tiles */}
                <div className="grid grid-cols-1 gap-2.5">
                  {heroPillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    const isActive = activeHeroTab === idx;

                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveHeroTab(idx)}
                        className={`text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                          isActive
                            ? 'bg-[#D4AF37] text-[#121417] border-[#D4AF37] shadow-[0_6px_20px_rgba(212,175,55,0.35)] scale-[1.01]'
                            : 'bg-white/70 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800 border-zinc-200/70 dark:border-white/10 text-zinc-800 dark:text-zinc-200'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl border shrink-0 ${
                          isActive
                            ? 'bg-zinc-950/15 border-zinc-950/20 text-[#121417]'
                            : 'bg-zinc-100 dark:bg-zinc-700/60 border-zinc-200/60 dark:border-white/5 text-[#801834] dark:text-[#E84855]'
                        }`}>
                          <Icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="font-bold text-xs uppercase tracking-wide truncate">{pillar.title}</span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 font-bold ${
                              isActive
                                ? 'bg-zinc-950 text-white'
                                : 'bg-zinc-200/70 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400'
                            }`}>
                              {pillar.metric}
                            </span>
                          </div>
                          <p className={`text-[11px] leading-tight line-clamp-1 ${
                            isActive ? 'text-zinc-800 font-medium' : 'text-zinc-500 dark:text-zinc-400'
                          }`}>
                            {pillar.short}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Quick Action below pillars */}
                <div className="mt-4 pt-3.5 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500 text-[11px]">IBC 2024 · ASCE 7-22 · ACI 318</span>
                  <a
                    href="#service-modules"
                    className="font-bold text-[#801834] dark:text-[#E84855] hover:underline flex items-center gap-1"
                  >
                    View Full Specifications <ArrowRight size={12} />
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
      {/* 2. SERVICES LIST (BENTO CARD MODULES)                                     */}
      {/* ========================================================================= */}
      <div id="service-modules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Technical Specifications & Scope
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
            Four Core <span className="text-[#801834] dark:text-[#E84855]">Engineering Capabilities.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
            Every deliverable follows rigorous structural physics and finite element verification, delivering stamped engineering packages for developers, architects, and institutions.
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-24">
          {servicesList.map((srv, index) => {
            const features = typeof srv.features === 'string'
              ? JSON.parse(srv.features || '[]')
              : (srv.features || []);

            const iconMap = {
              '0': Building2,
              '1': Layers,
              '2': ShieldCheck,
              '3': Ruler
            };
            const Icon = iconMap[index % 4] || Building2;

            return (
              <div 
                key={srv.id || index} 
                className="group rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-7 sm:p-10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] relative overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-[#801834] dark:text-[#E84855] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                      <Icon size={30} />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 px-3 py-0.5 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-2 font-extrabold">
                        Module 0{index + 1}
                      </span>
                      <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 group-hover:text-[#801834] dark:group-hover:text-[#E84855] transition-colors leading-snug">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {srv.description || srv.summary}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3.5 bg-zinc-50/80 dark:bg-zinc-800/40 p-5 rounded-2xl border border-zinc-200/80 dark:border-white/5">
                      {features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => navigate('/contact')}
                        className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] text-[#121417] px-7 py-3 text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] inline-flex items-center gap-2 cursor-pointer border border-[#D4AF37]"
                      >
                        <span>Request Service Consultation</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================================= */}
        {/* 3. CODE COMPLIANCE & MUNICIPAL STANDARDS MATRIX                         */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Regulatory & Code Compliance Auditor
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Municipal Code & <span className="text-[#801834] dark:text-[#E84855]">Provisions Matrix.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Every design calculation and structural drawing package adheres strictly to the latest edition of American and international structural codes.
            </p>
          </div>

          <CodeComplianceMatrix />
        </div>

        {/* ======================================================================= */}
        {/* 4. BOUNDARY LAYER WIND TUNNEL & AERODYNAMICS SECTION                    */}
        {/* ======================================================================= */}
        <div className="mb-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Wind Engineering & Boundary Layer Modeling
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Wind Tunnel Aerodynamics & <span className="text-[#801834] dark:text-[#E84855]">Vortex Shedding Simulator.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Test skyscraper geometries against ASCE 7-22 wind tunnel criteria. Assess corner chamfering, through-aperture venting, and ISO 10137 occupant acceleration thresholds under hurricane winds.
            </p>
          </div>

          <WindTunnelSimulator />
        </div>

        {/* ======================================================================= */}
        {/* 5. BOTTOM CONSULTATION BANNER                                           */}
        {/* ======================================================================= */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-8 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <div className="text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">Require Specialized Structural Analysis?</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Let's discuss FEA dynamic modeling, IBC code certifications, post-tensioned floor systems, or third-party peer reviews for your project.
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
