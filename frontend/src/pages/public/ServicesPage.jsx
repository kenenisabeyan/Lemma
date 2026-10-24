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
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const ServicesPage = () => {
  const navigate = useNavigate();
  const { data } = useFetch('/services');
  const [activeHeroTab, setActiveHeroTab] = useState(0);

  const servicesList = (data?.services && data.services.length > 0) ? data.services : [
    {
      id: '1',
      title: 'Structural RC & Multi-Story Framing Design',
      icon: 'Building2',
      summary: 'Advanced 3D linear and dynamic modeling for multi-story residential, commercial, and mixed-use structures.',
      description: 'Comprehensive analysis from architectural schematics through structural framing details in ETABS and SAP2000, ensuring seismic safety under EBCS EN 1998 (Zone 4) and EBCS EN 1992.',
      features: '["3D finite element structural analysis in ETABS & SAP2000","Reinforced concrete shear wall & moment frame detailing","Earthquake response spectrum analysis (EBCS EN 1998 Zone 4)","Complete structural drawing packages & bar bending schedules"]'
    },
    {
      id: '2',
      title: 'Highway Geometric & Pavement Engineering',
      icon: 'Layers',
      summary: 'Road alignment design, earthwork mass-haul balancing, and flexible pavement structure design in AutoCAD Civil 3D.',
      description: 'Field-tested geometric route design adhering to Ethiopian Roads Administration (ERA) manuals, optimizing cut-fill volumes and drainage cross-sections.',
      features: '["AutoCAD Civil 3D corridor modeling & digital terrain modeling","Horizontal & vertical curve optimization with super-elevation","Flexible & rigid pavement thickness design per ERA manuals","Culvert sizing, side drains, and hydrological runoff routing"]'
    },
    {
      id: '3',
      title: 'Geotechnical Soil Investigation & Foundations',
      icon: 'ShieldCheck',
      summary: 'Laboratory soil classification, consolidation testing, and deep/shallow foundation design on expansive soils.',
      description: 'Rigorous geotechnical characterization of Adama and Rift Valley black cotton soils, providing lime-stabilization schemes and safe mat/pile foundation solutions.',
      features: '["Atterberg limits, sieve analysis, and Proctor compaction testing","Direct shear, unconfined compression & consolidation testing","Bearing capacity calculations for isolated and mat footings","Expansive soil stabilization strategies per EBCS EN 1997"]'
    },
    {
      id: '4',
      title: 'Water Resources & Hydraulic Infrastructure',
      icon: 'Ruler',
      summary: 'Hydrological catchment modeling, storm drainage networks, and reinforced concrete culvert engineering.',
      description: 'Designing sustainable water conveyance structures, municipal storm drainage systems, and bridge pier hydraulic clearances.',
      features: '["Catchment runoff peak discharge estimation (Rational & SCS methods)","Storm sewer networks & hydraulic grade line (HGL) calculations","Reinforced concrete box and pipe culvert structural design","Erosion protection and energy dissipator engineering"]'
    }
  ];

  const heroPillars = [
    {
      title: 'Structural RC & ETABS FEA',
      short: 'EBCS EN 1992/1998 3D dynamic simulations & framing',
      icon: Building2,
      metric: 'B+G+10 Capstone'
    },
    {
      title: 'Highway Civil 3D & ERA',
      short: 'Route geometry, super-elevation & pavement layers',
      icon: Layers,
      metric: '45 km Trunk Route'
    },
    {
      title: 'Geotechnical & Soils',
      short: 'Expansive clay stabilization & raft foundation design',
      icon: ShieldCheck,
      metric: 'Rift Valley Soils'
    },
    {
      title: 'Surveying & Site Engineering',
      short: 'Total Station topography, GPS & field layout camps',
      icon: Ruler,
      metric: 'ASTU Field Camps'
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
                  ASTU Civil Engineering · 5th Year Capstone & Field Scope
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
                    Civil & Structural Solutions.
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
                  5th-year graduating civil engineering candidates at Adama Science and Technology University (ASTU SoCEA). Delivering comprehensive engineering solutions across structural RC analysis, highway geometric alignments, geotechnical soil mechanics, and infrastructure design adhering to Ethiopian Building Code Standards (EBCS) and ERA manuals.
                </p>

                {/* Assurance & SLA Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 mt-4 border-t border-zinc-200/80 dark:border-white/10 font-mono text-xs">
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-xs">EBCS & ERA Aligned</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-xs">ASTU SoCEA Verified</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold text-xs">Defense Ready</span>
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
                  <span>CONNECT WITH US</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Frosted Glass Pill Button */}
                <a
                  href="#service-modules"
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer"
                >
                  <Layers size={15} className="text-[#D4AF37]" />
                  <span>EXPLORE 4 DISCIPLINES</span>
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
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Core Disciplines</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono">5th</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#D4AF37] font-mono">100%</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Defense Readiness</span>
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
                  <span className="text-zinc-500 text-[11px]">EBCS EN 1992 · EBCS EN 1998 · ERA 2024</span>
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
              Ethiopian Standards & Eurocode Compliance
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Ethiopian Building Code & <span className="text-[#801834] dark:text-[#E84855]">ERA Provisions Matrix.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Every structural design calculation, highway profile, and foundation verification conforms strictly with Ethiopian Building Code Standards (EBCS EN) and Ethiopian Roads Administration (ERA) specifications.
            </p>
          </div>

          <CodeComplianceMatrix />
        </div>



        {/* ======================================================================= */}
        {/* 5. BOTTOM CONSULTATION BANNER                                           */}
        {/* ======================================================================= */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-8 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <div className="text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">Require Civil & Structural Engineering Collaboration?</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Let's discuss reinforced concrete analysis, ERA highway alignments, expansive soil foundation design, or capstone collaborations with our ASTU 5th-year student team.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] shrink-0 flex items-center gap-2 cursor-pointer border border-[#D4AF37]"
          >
            <span>Connect With Our Team</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};
