import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  HardHat, 
  ArrowUpRight, 
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
      title: 'Nexus Commercial Tower',
      slug: 'nexus-commercial-tower',
      category: 'Commercial High-Rise',
      location: 'Metropolis City, NY',
      year: '2025',
      client: 'Apex Global Real Estate',
      role: 'Lead Structural Engineer',
      structuralSystem: 'Dual Core Shear Wall & Outrigger Truss System',
      materials: 'C80 High-Strength Concrete, Grade 65 Structural Steel',
      description: 'A 52-story state-of-the-art skyscraper featuring a striking cantilevered glass atrium and high-velocity wind damping systems.',
      challenge: 'Designing a wind-resistant structural core for a 52-story building in a high-velocity wind zone over soft clay strata.',
      engineeringApproach: 'Utilized ETABS wind-tunnel dynamic integration, high-performance viscoelastic dampers, and deep drilled shaft caissons extending to bedrock.',
      solution: 'Engineered a perimeter belt truss coupled with post-tensioned floor slabs to maximize interior clear-span space by 35%.',
      result: 'Completed 2 months ahead of schedule, achieving LEED Platinum certification and zero structural vibration compliance issues.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      softwareUsed: '["ETABS","SAP2000","REVIT Structure","SAFE"]'
    },
    {
      id: '2',
      title: 'Avalon River Suspension Bridge',
      slug: 'avalon-river-bridge',
      category: 'Infrastructure & Bridges',
      location: 'West River County',
      year: '2024',
      client: 'State Transportation Dept',
      role: 'Principal Bridge Engineer',
      structuralSystem: 'Steel Cable-Stayed Deck System with UHPC Pylons',
      materials: 'Weathering Steel, Ultra-High Performance Concrete',
      description: 'A 450-meter main span cable-stayed bridge handling 80,000 vehicles daily.',
      challenge: 'Seismic retrofitting and deck installation without disrupting daily river and highway traffic flow.',
      engineeringApproach: 'Implemented incremental launching method for steel deck segments and dynamic seismic response spectrum analysis in SAP2000.',
      solution: 'Designed lightweight orthotropic steel deck plates with lead-rubber seismic isolation bearings at pylon abutments.',
      result: 'Restored vital economic transit corridor with a projected 120-year design life.',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      softwareUsed: '["SAP2000","Midas Civil","ANSYS"]'
    },
    {
      id: '3',
      title: 'Solaria Cultural Center & Dome',
      slug: 'solaria-cultural-center',
      category: 'Special Structures',
      location: 'San Francisco, CA',
      year: '2025',
      client: 'Civic Arts Foundation',
      role: 'Senior Structural Designer',
      structuralSystem: 'Geodesic Steel Space Frame Dome with Tension Fabric Membrane',
      materials: 'Architectural Glazing, Hollow Structural Sections (HSS), Stainless Steel Nodes',
      description: 'An iconic column-free 80-meter diameter spherical dome serving as an amphitheater and museum auditorium.',
      challenge: 'High seismic acceleration zone combined with irregular asymmetric geometry and heavy snow/wind load combinations.',
      engineeringApproach: 'Conducted finite element geometric non-linear displacement analysis under extreme dynamic earthquake response spectra.',
      solution: 'Engineered node connection pin joints with energy-dissipating yield dampers at foundational ring beams.',
      result: 'Featured in Architectural Record for structural transparency and structural elegance.',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
      softwareUsed: '["ANSYS","Rhino Grasshopper","Tekla Structures"]'
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
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* CINEMATIC PORTFOLIO HERO SECTION                                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[88vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/80 dark:border-white/10 bg-white/75 dark:bg-[#0B0C0E]/85 backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Luminous Sheen & Ambient Aurora Lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white/85 dark:from-[#0B0C0E]/85 dark:via-[#0B0C0E]/50 dark:to-[#0B0C0E]/90 pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/8 dark:bg-[#801834]/20 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/7 dark:bg-[#D4AF37]/15 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Column: Headline, Mission, Badges */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
              
              {/* License & Portfolio Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  PE & SE Certified Practice · Project Dossiers
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1.5"
              >
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                  Engineering Reality.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    Built
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Structural Resilience.
                  </span>
                </h1>
              </motion.div>

              {/* Narrative Frosted Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 sm:p-7"
              >
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base leading-relaxed">
                  A curated record of high-stakes structural commissions across 180+ projects worldwide — from 52-story seismic outrigger towers to 450m long-span cable bridges, documented with non-linear FEA calculations and constructed outcomes.
                </p>

                {/* Live Engineering KPI Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 mt-5 border-t border-zinc-200/80 dark:border-white/10 font-mono">
                  <div className="bg-white/60 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-zinc-200/60 dark:border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Valuation</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#801834] dark:text-[#E84855]">$850M+</span>
                  </div>
                  <div className="bg-white/60 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-zinc-200/60 dark:border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Deliverables</span>
                    <span className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-zinc-100">180+ Stamped</span>
                  </div>
                  <div className="bg-white/60 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-zinc-200/60 dark:border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Safety Audit</span>
                    <span className="text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400">100% Zero Defect</span>
                  </div>
                  <div className="bg-white/60 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-zinc-200/60 dark:border-white/5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Peak Elevation</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#D4AF37]">52 Stories</span>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <a
                  href="#project-grid"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(128,24,52,0.3)] hover:scale-[1.02]"
                >
                  <Filter size={14} className="text-[#D4AF37]" />
                  Filter 180+ Projects
                </a>
                <a
                  href="#cad-inspector"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-white/20 backdrop-blur-xl px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider transition-all hover:scale-[1.02]"
                >
                  <Compass size={14} className="text-[#D4AF37]" />
                  Launch CAD Inspector
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
              <div className="relative rounded-3xl bg-white/85 dark:bg-zinc-900/70 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 overflow-hidden group">
                
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
                            ? 'w-6 bg-[#801834] dark:bg-[#E84855]' 
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

                  <div className="absolute top-3 right-3 bg-[#D4AF37] text-zinc-950 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase">
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
                      className="flex-1 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-[#801834] dark:hover:bg-[#E84855] hover:text-white px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      Inspect Case Study <ArrowUpRight size={13} />
                    </button>
                    <button
                      onClick={() => setSpotlightIndex((prev) => (prev + 1) % allProjects.length)}
                      className="rounded-xl border border-zinc-200 dark:border-white/10 hover:border-[#D4AF37] p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
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

      {/* ========================================================================= */}
      {/* 2. FILTER & SEARCH TELEMETRY DOCK                                         */}
      {/* ========================================================================= */}
      <div id="project-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-30">
        <div className="bg-white/95 dark:bg-zinc-900/90 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl border border-white/90 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4">
          
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
                  className={`rounded-2xl px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#801834] to-[#601227] text-white shadow-md shadow-[#801834]/25 scale-[1.02]'
                      : 'bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/5 hover:border-[#D4AF37]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected 
                      ? 'bg-[#D4AF37] text-zinc-950 font-black' 
                      : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Reset */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tower, bridge, concrete, steel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 pl-10 pr-9 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-[#D4AF37] focus:outline-none transition-colors"
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
          <div className="py-24 text-center bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-zinc-200/80 dark:border-white/10 mb-20 shadow-xs">
            <HardHat className="w-12 h-12 text-[#D4AF37] mx-auto mb-4 opacity-75" />
            <p className="text-zinc-900 dark:text-zinc-100 text-base font-bold mb-1">No structural projects match your search.</p>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-4">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 text-xs font-mono uppercase font-bold"
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
              Examine project documentation layers: toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles.
            </p>
          </div>

          <BlueprintInspector />
        </div>

        {/* ======================================================================= */}
        {/* 5. HIGH-STAKES CONSULTATION BANNER                                      */}
        {/* ======================================================================= */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-gradient-to-br from-white/90 via-white/80 to-amber-50/40 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-950/90 backdrop-blur-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Select Mandates</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-3">
              Have a High-Stakes Project Requiring Stamped Verification?
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Available for preliminary structural feasibility review, independent FEA peer reviews, and complete PE/SE calculations packages across commercial, residential, and infrastructure portfolios.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(128,24,52,0.3)] shrink-0 flex items-center gap-2 hover:scale-[1.02]"
          >
            Schedule Consultation <ArrowUpRight size={15} className="text-[#D4AF37]" />
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
