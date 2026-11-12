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
      year: '2025 - 2026',
      title: 'B+G+10 Mixed-Use RC Commercial Tower Commission (Adama CBD)',
      category: 'Structural RC & Tall Buildings',
      value: 'Commercial Commission',
      role: 'Managing Principal & Lead Structural FEA Engineer',
      location: 'Adama CBD, Oromia, Ethiopia',
      achievement: 'Pioneered 3D non-linear dynamic response spectrum modeling in ETABS to design a 10-story dual shear wall-moment frame resisting Great Rift Valley Zone 4 seismic ground accelerations.',
      highlights: [
        'EBCS EN 1998:2014 & EBCS EN 1992:2014 compliant reinforced concrete detailing',
        'Engineered 1.2m mat raft foundation with perimeter retaining walls for expansive Adama clay',
        'Achieved 98% defense readiness rating from ASTU SoCEA senior academic review board'
      ]
    },
    {
      year: '2025',
      title: 'Awash River Highway Bridge Infrastructure Commission',
      category: 'Bridge & Hydraulic Engineering',
      value: 'ERA & ASTU Infrastructure Commission',
      role: 'Lead Bridge & Structural Engineer',
      location: 'Awash River Corridor, Ethiopia',
      achievement: 'Engineered a 120-meter three-span continuous post-tensioned concrete box girder bridge traversing seasonal high-velocity river discharges.',
      highlights: [
        'Conducted HEC-RAS hydrological flood discharge modeling and scouring calculations',
        'Analyzed longitudinal girder prestressing profiles and tendon losses per ERA Bridge Manual',
        'Designed reinforced concrete pier shafts with cast-in-place drilled pile groups'
      ]
    },
    {
      year: '2024',
      title: 'Oromia Construction Corporation (OCC) Internship',
      category: 'Professional Site Internship',
      value: '4-Month Field Internship',
      role: 'Assistant Site Engineer',
      location: 'Adama & Regional Sites, Ethiopia',
      achievement: 'Assisted senior resident engineers in reinforcing bar inspections, slump testing, concrete cube crushing, and Total Station column axial alignment checks on commercial building sites.',
      highlights: [
        'Managed daily batching plant quality control records and slump cone testing',
        'Monitored contractor bar bending schedules against approved structural drawing sets',
        'Coordinated site safety and concrete curing protocols under hot arid climate conditions'
      ]
    },
    {
      year: '2023 - 2024',
      title: 'Geotechnical & Soil Mechanics Laboratory Campaign',
      category: 'Geotechnical Soil Testing',
      value: 'ASTU Central Geotechnical Lab',
      role: 'Lab Lead & Researcher',
      location: 'ASTU Main Campus, Adama',
      achievement: 'Led laboratory testing of expansive black cotton clays across East Shoa zone, determining Atterberg limits, consolidation coefficients, and optimal lime stabilization ratios.',
      highlights: [
        'Executed Proctor compaction, California Bearing Ratio (CBR), and unconfined compression tests',
        'Formulated 4% to 6% hydrated lime chemical stabilization mixes to mitigate soil swelling',
        'Co-authored technical laboratory reports published in ASTU departmental archive'
      ]
    }
  ];

  const structuralCompetencies = [
    {
      title: 'Reinforced Concrete Structural Analysis (ETABS & SAP2000)',
      desc: 'Expertise in 3D finite element frame modeling, shear wall core design, and response spectrum analysis compliant with EBCS EN 1992 and EBCS EN 1998.'
    },
    {
      title: 'Highway Alignment & Route Geometry (Civil 3D)',
      desc: 'Digital terrain modeling, horizontal/vertical curve design, super-elevation calculations, and earthwork cut/fill balancing per ERA Geometric Design Manual.'
    },
    {
      title: 'Geotechnical Soil Mechanics & Foundation Engineering',
      desc: 'Laboratory classification, Atterberg limits, CBR testing, bearing capacity evaluation, and lime stabilization for expansive black cotton soils per EBCS EN 1997.'
    },
    {
      title: 'Hydraulic Structures & Drainage Networks',
      desc: 'Hydrological runoff calculations using Rational and SCS methods, storm drainage sewer sizing, and reinforced concrete box/pipe culvert structural engineering.'
    },
    {
      title: 'Field Surveying & Geodetic Layout Camps',
      desc: 'Topographical surveying with Total Station, GPS/GNSS boundary traversing, leveling networks, and structural grid pegging conducted during ASTU surveying camps.'
    },
    {
      title: 'Ethiopian Standards & Engineering Specifications',
      desc: 'Systematic application of Ethiopian Building Code Standards (EBCS EN), ERA manuals, and Ministry of Urban Development & Infrastructure guidelines.'
    }
  ];

  const activeMilestone = engineeringMilestones[selectedMilestoneIdx];

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D3AE36] selection:text-[#12151C] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC EXPERIENCE & TRACK RECORD HERO SECTION                       */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#12151C] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Luminous White Glass Frosted Sheen & Center Light Dome (Exact Match to Home) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-[#12151C] dark:via-[#12151C] dark:to-[#12151C] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle Ambient Studio Lights */}
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#D3AE36]/[0.02] dark:bg-[#D3AE36]/10 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D3AE36]/[0.02] dark:bg-[#D3AE36]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-[#12151C] dark:via-[#12151C]/90 to-transparent pointer-events-none"></div>
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
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · 5-Year Academic Trajectory (2021 – 2026)
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1 sm:space-y-2"
              >
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-[2.2rem] xl:text-[2.45rem] tracking-tight leading-tight text-zinc-900 dark:text-zinc-100 select-text">
                  A Dedicated Journey of{' '}
                  <span className="text-[#D3AE36] drop-shadow-[0_4px_20px_rgba(211,174,54,0.3)] select-text">
                    Academic
                  </span>
                  <br />
                  <span className="text-[#D3AE36] opacity-95 inline-block select-text">
                    & Field Engineering.
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
                <div className="space-y-2 max-w-xl">
                  <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-sm sm:text-base leading-relaxed text-left">
                    Five-year academic &amp; field trajectory of <strong className="text-[#D3AE36] font-bold">Lemma Amensisa &amp; ASTU SoCEA Civil Engineering Cohort</strong>. Fusing numerical structural mechanics with certified construction site practice.
                  </p>

                  {/* Micro-Bullet Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D]/50 shadow-xs">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px] truncate">
                        <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-semibold">ETABS / SAP:</strong> 3D Seismic Dynamic
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D]/50 shadow-xs">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px] truncate">
                        <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-semibold">OCC Site:</strong> Slump QC &amp; Surveying
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4 Quantified Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 font-mono">
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white/80 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D] text-left shadow-xs">
                    <span className="block text-base sm:text-lg font-black text-[#D3AE36] font-mono">5+</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">Disciplines</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white/80 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D] text-left shadow-xs">
                    <span className="block text-base sm:text-lg font-black text-[#1E2025] dark:text-[#F8F9FA] font-mono">25+</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">Commissions</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white/80 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D] text-left shadow-xs">
                    <span className="block text-base sm:text-lg font-black text-[#1E2025] dark:text-[#F8F9FA] font-mono">ASTU</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">SoCEA Practice</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white/80 dark:bg-[#232936]/80 border border-[#31394D]/25 dark:border-[#31394D] text-left shadow-xs">
                    <span className="block text-base sm:text-lg font-black text-[#D3AE36] font-mono">100%</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-medium">Code Verified</span>
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
                  className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(211,174,54,0.35)] hover:shadow-[0_14px_32px_rgba(211,174,54,0.5)] flex items-center gap-2 group cursor-pointer border border-[#D3AE36]"
                >
                  <Briefcase size={15} />
                  <span>INSPECT MILESTONES</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Pill Button */}
                <a
                  href="#shake-table"
                  className="rounded-full text-zinc-800 dark:text-zinc-200 hover:text-[#D3AE36] dark:hover:text-[#D3AE36] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Activity size={15} className="text-[#D3AE36]" />
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
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">5th</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-zinc-900 dark:text-white font-mono">25+</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Projects Led</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D3AE36] font-mono">100%</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Defense Ready</span>
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
              <div className="relative w-full overflow-hidden group">
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200/80 dark:border-[#31394D] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                    <span className="font-bold text-[#1E2025] dark:text-[#F8F9FA] uppercase tracking-wider">Milestone Spotlight</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D3AE36] font-bold">
                    {activeMilestone.year}
                  </span>
                </div>

                <div className="bg-[#F8F9FA] dark:bg-[#232936] p-4 rounded-2xl border border-zinc-200/70 dark:border-[#31394D] mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-[#F8F9FA]/60 block mb-1">
                    {activeMilestone.category} · {activeMilestone.location}
                  </span>
                  <h3 className="font-black text-lg text-[#1E2025] dark:text-[#F8F9FA] leading-snug mb-2">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-[#F8F9FA]/70 leading-relaxed mb-3">
                    {activeMilestone.achievement}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-200/60 dark:border-[#31394D] text-[11px] font-mono font-bold">
                    <span className="text-[#D3AE36]">{activeMilestone.value}</span>
                    <span className="text-zinc-500 dark:text-[#F8F9FA]/60">{activeMilestone.role}</span>
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
                          ? 'bg-[#D3AE36] text-[#12151C] shadow-sm font-extrabold'
                          : 'bg-zinc-100 dark:bg-[#12151C] border border-zinc-200 dark:border-[#31394D] text-zinc-600 dark:text-[#F8F9FA]/80 hover:text-zinc-900 dark:hover:text-[#D3AE36]'
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
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-zinc-200/60 dark:border-[#31394D]">
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'milestones'
                ? 'bg-[#D3AE36] text-[#12151C] shadow-[0_4px_14px_rgba(211,174,54,0.3)] font-extrabold'
                : 'bg-zinc-100 dark:bg-[#232936] text-zinc-600 dark:text-[#F8F9FA]/70 border border-zinc-200/60 dark:border-[#31394D] hover:border-[#D3AE36]/50'
            }`}
          >
            Major Project Milestones
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-[#D3AE36] text-[#12151C] shadow-[0_4px_14px_rgba(211,174,54,0.3)] font-extrabold'
                : 'bg-zinc-100 dark:bg-[#232936] text-zinc-600 dark:text-[#F8F9FA]/70 border border-zinc-200/60 dark:border-[#31394D] hover:border-[#D3AE36]/50'
            }`}
          >
            Career Timeline &amp; Roles
          </button>

          <button
            onClick={() => setActiveTab('competencies')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'competencies'
                ? 'bg-[#D3AE36] text-[#12151C] shadow-[0_4px_14px_rgba(211,174,54,0.3)] font-extrabold'
                : 'bg-zinc-100 dark:bg-[#232936] text-zinc-600 dark:text-[#F8F9FA]/70 border border-zinc-200/60 dark:border-[#31394D] hover:border-[#D3AE36]/50'
            }`}
          >
            Core Competencies
          </button>
        </div>

        {/* Tab 1: Major Milestones */}
        {activeTab === 'milestones' && (
          <div className="flex flex-col gap-6 mb-24">
            {engineeringMilestones.map((item, index) => (
              <div 
                key={index} 
                className="rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-5 pb-5 border-b border-zinc-100 dark:border-[#31394D]/40">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#D3AE36]/10 text-[#D3AE36] font-mono font-bold text-xs border border-[#D3AE36]/30">
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-[#F8F9FA]/60 font-bold px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-[#12151C]">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-[#12151C] border border-zinc-200 dark:border-[#31394D] text-xs font-mono text-[#D3AE36] font-extrabold shadow-2xs">
                      {item.value}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-xl bg-zinc-50 dark:bg-[#12151C]/60 border border-zinc-200/60 dark:border-[#31394D]/40 text-xs font-mono text-zinc-600 dark:text-[#F8F9FA]/70 flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#D3AE36]" /> {item.location}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/80 dark:bg-[#12151C]/60 border border-zinc-200/60 dark:border-[#31394D]/40 mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-mono font-bold text-[#D3AE36] tracking-wider">
                      Structural Achievement &amp; Technical Innovation
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed font-sans">
                    <strong className="text-[#D3AE36] font-semibold">✦ Milestone Breakthrough: </strong>
                    {item.achievement}
                  </p>
                </div>

                <div className="pt-1">
                  <h5 className="text-[11px] font-mono uppercase text-zinc-500 dark:text-[#F8F9FA]/60 tracking-wider mb-3 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36]"></span>
                    Key Technical Scope &amp; Methodology:
                  </h5>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-white dark:bg-[#12151C]/40 border border-zinc-200/70 dark:border-[#31394D]/60 flex items-start gap-2.5 text-xs text-[#1E2025] dark:text-[#F8F9FA]/90 shadow-2xs hover:border-[#D3AE36]/40 transition-colors">
                        <CheckCircle2 size={15} className="text-[#D3AE36] shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
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
            <div className="flex flex-col gap-8 relative border-l-2 border-zinc-200 dark:border-[#31394D] pl-8 ml-4">
              {CAREER_TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[45px] top-6 w-5 h-5 rounded-full bg-white dark:bg-[#12151C] border-2 border-[#D3AE36] group-hover:scale-125 transition-transform shadow-xs flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#D3AE36]" />
                  </div>
                  <div className="rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#D3AE36]/60 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#D3AE36]/10 text-[#D3AE36] font-mono font-bold text-xs border border-[#D3AE36]/30 uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-xs font-semibold text-zinc-500 dark:text-[#F8F9FA]/60 uppercase tracking-wider flex items-center gap-2 font-mono">
                        <Building2 size={13} className="text-[#D3AE36]" /> {item.company}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1E2025] dark:text-[#F8F9FA] mb-3 group-hover:text-[#D3AE36] transition-colors">
                      {item.role}
                    </h3>
                    
                    <div className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-[#12151C]/60 border border-zinc-200/60 dark:border-[#31394D]/40 mb-4">
                      <p className="text-sm text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed">
                        <strong className="text-[#D3AE36] font-semibold">✦ Scope &amp; Deliverables: </strong>
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[11px] font-mono font-bold">
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#12151C] text-zinc-700 dark:text-[#F8F9FA]/70 border border-zinc-200/60 dark:border-[#31394D]">✦ Direct Client Coordination</span>
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#12151C] text-zinc-700 dark:text-[#F8F9FA]/70 border border-zinc-200/60 dark:border-[#31394D]">✦ Code Authority Submissions</span>
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#12151C] text-zinc-700 dark:text-[#F8F9FA]/70 border border-zinc-200/60 dark:border-[#31394D]">✦ Multi-Disciplinary BIM</span>
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
                className="group rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#D3AE36]/10 text-[#D3AE36] font-mono font-black text-xs border border-[#D3AE36]/30">
                      0{index + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D3AE36]/40 group-hover:bg-[#D3AE36] transition-colors" />
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-[#1E2025] dark:text-[#F8F9FA] mb-3 group-hover:text-[#D3AE36] transition-colors leading-snug">
                    {comp.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#F8F9FA]/75 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-zinc-200/60 dark:border-[#31394D]/60 flex items-center gap-2 text-[10px] uppercase font-mono text-[#D3AE36] font-bold">
                  <ShieldCheck size={14} /> Rigorous Engineering Verified
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
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 px-4 py-1.5 text-xs font-mono text-[#D3AE36] mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
              Live Physics &amp; Non-Linear Dynamics
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Dynamic Seismic <span className="text-[#D3AE36]">Shake Table Laboratory.</span>
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
        <div className="my-16 rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/30 p-8 sm:p-10 shadow-lg flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-left max-w-2xl">
            <span className="text-[10px] font-mono uppercase text-[#D3AE36] tracking-widest block mb-2 font-bold">Amensisa &amp; Partners · Advisory Desk</span>
            <h3 className="text-2xl lg:text-3xl font-black text-[#1E2025] dark:text-[#F8F9FA] mb-2">Commission Infrastructure or <span className="text-[#D3AE36]">Retain Amensisa &amp; Partners</span></h3>
            <p className="text-sm text-zinc-600 dark:text-[#F8F9FA]/80 leading-relaxed">
              Available for commercial civil &amp; structural engineering commissions, ETABS dynamic modeling, ERA highway alignments, and resident QA/QC engineering supervision across Ethiopia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => navigate('/resources')}
              className="rounded-full text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-zinc-200 dark:border-[#31394D] bg-zinc-50 dark:bg-[#12151C]"
            >
              <span>Download Corporate Dossier (PDF)</span>
              <Download size={14} className="text-[#D3AE36]" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-8 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(211,174,54,0.35)] flex items-center justify-center gap-2 cursor-pointer border border-[#D3AE36]"
            >
              <span>Initiate Commission RFP</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
