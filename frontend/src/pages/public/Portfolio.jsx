import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, HardHat, ArrowUpRight } from 'lucide-react';
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

  const { data, loading } = useFetch('/projects');

  const allProjects = data?.projects || [
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
      proj.structuralSystem.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-transparent text-inherit pt-28 pb-24 relative overflow-hidden selection:bg-[#801834] selection:text-white transition-colors duration-200">
      {/* Ambient Aurora Drift Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#801834]/10 dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-zinc-200/80 dark:border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5 text-zinc-800 dark:text-zinc-200 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#E84855] animate-pulse"></span>
            Featured Engineering Practice
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.08] mb-5">
            Project <span className="text-[#801834] dark:text-[#E84855]">Portfolio.</span>
          </h1>
          <div className="rounded-2xl bg-white/85 dark:bg-[#181A1E]/80 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800 p-6 shadow-sm max-w-3xl">
            <p className="text-zinc-700 dark:text-zinc-300 text-base lg:text-lg leading-relaxed">
              Explore detailed structural case studies across high-rise skyscrapers, long-span bridge infrastructure, and seismic retrofits — complete with finite element modeling notes and calculated results.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-12 bg-white dark:bg-[#181A1E] p-3 rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 shadow-sm dark:shadow-xl">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none items-center">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#801834] text-white shadow-sm dark:bg-[#D4AF37] dark:text-[#121417] scale-105'
                    : 'bg-zinc-100 dark:bg-[#121417] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333] hover:text-zinc-900 dark:hover:text-[#EAEAEA] hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-[#9CA3AF] w-4 h-4" />
            <input
              type="text"
              placeholder="Search by tower, bridge, system..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-[#121417] rounded-full border border-zinc-200 dark:border-[#333] pl-10 pr-4 py-2 text-xs text-zinc-900 dark:text-[#EAEAEA] placeholder:text-zinc-400 dark:placeholder:text-[#666] focus:border-[#801834] dark:focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-[#181A1E] rounded-2xl border border-zinc-200 dark:border-[#333] mb-20 shadow-xs">
            <p className="text-zinc-500 dark:text-[#9CA3AF] text-sm font-mono uppercase tracking-wider">No engineering projects match the selected criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        )}

        {/* Interactive Drawing Dossier & CAD Inspector */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-white dark:bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Multi-Layer CAD Telemetry Board
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Interactive Drawing <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">Dossier & FEA Inspector.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Examine project documentation layers: toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles.
            </p>
          </div>

          <BlueprintInspector />
        </div>

        {/* Bottom Bento Consultation Banner */}
        <div className="rounded-3xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-gradient-to-r dark:from-[#181A1E] dark:via-[#14161A] dark:to-[#181A1E] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md dark:shadow-2xl">
          <div className="text-left">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#801834] dark:text-[#D4AF37] mb-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Select Mandates</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-2">
              Have a High-Stakes Project Requiring Stamped Verification?
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-[#9CA3AF] max-w-xl leading-relaxed">
              Available for preliminary structural feasibility review, independent FEA peer reviews, and complete PE/SE calculations packages.
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
