import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  HardHat, 
  ArrowUpRight, 
  ArrowRight,
  Building2, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  MapPin,
  X,
  ExternalLink
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { ProjectCard } from '../../components/engineering/ProjectCard';
import { BlueprintInspector } from '../../components/engineering/BlueprintInspector';
import { CaseStudyModal } from './CaseStudy';
import { PROJECT_CATEGORIES } from '../../utils/constants';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const { data, loading } = useFetch('/projects');

  const allProjects = (data?.projects && data.projects.length > 0) ? data.projects : [
    {
      id: '1',
      title: 'Adama CBD Mixed-Use Commercial Tower (B+G+10)',
      slug: 'adama-cbd-tower',
      category: 'Structural RC & Tall Buildings',
      location: 'Adama CBD, Oromia, Ethiopia',
      year: '2026',
      client: 'ASTU SoCEA Final Year Capstone Committee',
      role: 'Lead Structural Capstone Engineer',
      structuralSystem: 'Reinforced Concrete Dual System (Shear Walls + Moment Resisting Frames)',
      materials: 'C-30/37 Concrete, Grade 500 High-Yield Ribbed Reinforcement Bars',
      description: 'Comprehensive B.Sc. capstone engineering design of an 11-story mixed-use commercial tower in downtown Adama, engineered to resist seismic forces in Great East African Rift Valley Zone 4.',
      challenge: 'High seismic ground acceleration in the Main Ethiopian Rift corridor coupled with high bearing pressure requirements on local soils.',
      engineeringApproach: 'Conducted 3D finite element dynamic response spectrum analysis in ETABS 2022 and SAP2000, adhering strictly to Ethiopian Building Code Standards EBCS EN 1998:2014 and EBCS EN 1992:2014.',
      solution: 'Engineered centrally coupled core shear walls, 220mm two-way floor slabs, and a 1.2m reinforced concrete mat raft foundation with perimeter retaining walls.',
      result: 'Earned 98% defense readiness grade from ASTU School of Civil Engineering & Architecture faculty advisory board.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      softwareUsed: '["ETABS","SAP2000","AutoCAD Civil 3D","SAFE"]'
    },
    {
      id: '2',
      title: 'Awash River Highway Bridge Capstone',
      slug: 'awash-river-bridge',
      category: 'Bridge & Highway Engineering',
      location: 'Awash River Crossing, Oromia / Afar Corridor',
      year: '2025',
      client: 'ERA / ASTU SoCEA Capstone Directorate',
      role: 'Lead Bridge & Hydraulic Engineer',
      structuralSystem: 'Post-Tensioned Concrete Box Girder & Reinforced Pier Shafts',
      materials: 'C-40/50 High-Strength Concrete, Low-Relaxation Prestressing Strands',
      description: 'A 120-meter three-span continuous prestressed concrete highway bridge designed across the Awash River gorge along the central freight corridor.',
      challenge: 'Seasonal torrential flash floods, scouring risks, and long-span deflections over soft alluvial gorge deposits.',
      engineeringApproach: 'Combined hydrological peak discharge estimation (HEC-RAS) with 3D structural longitudinal girder modeling in SAP2000 and ERA Bridge Design Manual 2024.',
      solution: 'Designed multi-cell post-tensioned box sections with deep drilled cast-in-place concrete pile groups protected by rip-rap stone pitching.',
      result: 'Complete calculation dossier and detailed AutoCAD drawing sheets validated by ASTU senior faculty advisors.',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      softwareUsed: '["SAP2000","AutoCAD","HEC-RAS","Civil 3D"]'
    },
    {
      id: '3',
      title: 'Adama-Wonji Express Highway Route & Pavement',
      slug: 'adama-wonji-highway',
      category: 'Bridge & Highway Engineering',
      location: 'Adama - Wonji Corridor, Ethiopia',
      year: '2025',
      client: 'Oromia Roads Authority / ASTU Academic Internship',
      role: 'Highway & Surveying Engineer',
      structuralSystem: 'Flexible Asphalt Concrete Pavement & Super-elevated Alignment',
      materials: 'Hot Mix Asphalt (HMA), Crushed Stone Base Course, Lime-Stabilized Subgrade',
      description: 'A 28-kilometer trunk road geometric design and multi-layered flexible pavement system designed using AutoCAD Civil 3D per ERA Geometric Design Manual.',
      challenge: 'Traversing expansive black cotton soil zones prone to severe seasonal swelling and shrinkage cracks.',
      engineeringApproach: 'Conducted comprehensive laboratory soil classification (Atterberg limits, CBR, and Proctor compaction) and mass-haul cut/fill optimization.',
      solution: 'Specified a 400mm lime-stabilized capping layer topped with 150mm crushed stone base course and 60mm asphalt concrete surfacing.',
      result: 'Optimized cut-and-fill earthworks by 22%, ensuring cost-effective construction and durability over a 20-year design life.',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      softwareUsed: '["AutoCAD Civil 3D","AASHTO / ERA Guide","ArcGIS"]'
    }
  ];

  const filteredProjects = allProjects.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (proj.structuralSystem && proj.structuralSystem.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (proj.materials && proj.materials.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const spotlightProject = allProjects[spotlightIndex % allProjects.length];

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D4AF37] selection:text-[#121417] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* CINEMATIC PORTFOLIO HERO SECTION                                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B0C0E] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Luminous White Glass Frosted Sheen & Center Light Dome (Exact Match to Home) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-[#0B0C0E] dark:via-[#0B0C0E] dark:to-[#0B0C0E] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
        
        {/* Subtle Ambient Studio Lights (Wine & Gold) */}
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
            
            {/* Left Hero Column: Headline, Mission, Badges */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 sm:gap-5">
              
              {/* License & Portfolio Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · 5th Year Capstone Dossiers
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
                  Engineering Reality.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)] select-text">
                    Built by
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block select-text">
                    ASTU Civil 5th Year.
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
                  A comprehensive portfolio of 25+ academic capstone designs, field surveying expeditions, geotechnical laboratory campaigns, and infrastructure engineering dossiers executed by Lemma Techane and fellow 5th-year graduating civil engineering brothers at ASTU SoCEA (Class of 2026).
                </p>

                {/* Live Engineering KPI Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 font-mono">
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                    <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono">5th</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                    <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono">25+</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Capstones</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                    <span className="block text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">100%</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Defense Ready</span>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                    <span className="block text-base sm:text-lg font-black text-[#D4AF37] font-mono">ASTU</span>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">SoCEA Brotherhood</span>
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
                  href="#project-grid"
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] flex items-center gap-2 group cursor-pointer border border-[#D4AF37]"
                >
                  <Filter size={15} />
                  <span>FILTER 25+ CAPSTONES</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Pill Button */}
                <a
                  href="#cad-inspector"
                  className="rounded-full text-zinc-800 dark:text-zinc-200 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Compass size={15} className="text-[#D4AF37]" />
                  <span>LAUNCH CAD INSPECTOR</span>
                </a>
              </motion.div>

            </div>

            {/* Right Hero Column: Interactive Landmark Spotlight */}
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
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Landmark Spotlight</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {allProjects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSpotlightIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          spotlightIndex === idx 
                            ? 'w-6 bg-[#D4AF37]' 
                            : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400'
                        }`}
                        title={`Select spotlight ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Spotlight Image & Badge */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 shadow-inner">
                  <img
                    src={spotlightProject.imageUrl}
                    alt={spotlightProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-[10px] font-mono font-bold text-zinc-900 dark:text-zinc-100 uppercase">
                    {spotlightProject.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-[#D4AF37] text-zinc-950 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase shadow-sm">
                    {spotlightProject.year}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-extrabold text-lg sm:text-xl drop-shadow-md leading-tight mb-1">
                      {spotlightProject.title}
                    </h3>
                    <p className="text-zinc-300 text-xs font-mono flex items-center gap-1">
                      <MapPin size={12} className="text-[#D4AF37]" />
                      {spotlightProject.location}
                    </p>
                  </div>
                </div>

                {/* Structural Overview */}
                <div className="pt-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase font-mono block">Structural System</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200 line-clamp-1">{spotlightProject.structuralSystem}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => setSelectedProject(spotlightProject)}
                      className="flex-1 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2c] text-[#121417] px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(212,175,55,0.3)] cursor-pointer"
                    >
                      <span>Inspect Case Study</span>
                      <ArrowUpRight size={13} />
                    </button>
                    <button
                      onClick={() => setSpotlightIndex((prev) => (prev + 1) % allProjects.length)}
                      className="rounded-xl border border-zinc-200 dark:border-white/10 hover:border-[#D4AF37] bg-white/80 dark:bg-white/5 p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer"
                      title="Next Landmark"
                    >
                      <Sparkles size={16} className="text-[#D4AF37]" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 2. FILTER & SEARCH TELEMETRY DOCK                                         */}
      {/* ========================================================================= */}
      <div id="project-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-30">
        <div className="py-4 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 border-b border-zinc-200/60 dark:border-zinc-800">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none items-center">
            {PROJECT_CATEGORIES.map((cat) => {
              const count = cat === 'All' 
                ? allProjects.length 
                : allProjects.filter(p => p.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'text-[#801834] dark:text-[#E84855]'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 rounded-full font-mono ${
                    isSelected 
                      ? 'bg-[#D4AF37] text-zinc-950 font-black' 
                      : 'text-zinc-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Reset */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search capstone, RC frame, highway, soil..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 pl-9 pr-9 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. PROJECT GRID                                                           */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center mb-20">
            <HardHat className="w-12 h-12 text-[#D4AF37] mx-auto mb-4 opacity-75" />
            <p className="text-zinc-900 dark:text-zinc-100 text-base font-bold mb-1">No capstone projects match your search.</p>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-4">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2 text-xs font-mono uppercase font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        )}

        {/* ======================================================================= */}
        {/* 4. INTERACTIVE DRAWING DOSSIER & FEA CAD INSPECTOR                      */}
        {/* ======================================================================= */}
        <div id="cad-inspector" className="mb-24 scroll-mt-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Multi-Layer CAD Telemetry Board
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              Interactive Drawing <span className="text-[#801834] dark:text-[#E84855]">Dossier & FEA Inspector.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Examine capstone project documentation layers: toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles.
            </p>
          </div>

          <BlueprintInspector />
        </div>

        {/* ======================================================================= */}
        {/* 5. HIGH-STAKES CONSULTATION BANNER                                      */}
        {/* ======================================================================= */}
        <div className="py-12 border-t border-zinc-200/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Graduate Recruitment & Capstone Collaborations</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-3">
              Interested in Capstone Research or Engineering Recruitment?
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Open for graduate engineering roles, infrastructure project partnerships, and technical discussions on Ethiopian Building Code Standards (EBCS) and ERA implementations with our ASTU 5th-year student cohort.
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

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};
