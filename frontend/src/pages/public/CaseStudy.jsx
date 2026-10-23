import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Building, 
  Layers, 
  CheckCircle2, 
  FileText, 
  ArrowLeft, 
  ExternalLink, 
  Download, 
  Share2, 
  ShieldCheck, 
  ArrowUpRight,
  ChevronRight,
  HardHat,
  Cpu,
  Layers3
} from 'lucide-react';
import { Modal } from '../../components/common/Modal';
import { useFetch } from '../../hooks/useFetch';
import { BlueprintInspector } from '../../components/engineering/BlueprintInspector';

// ==========================================
// 1. QUICK MODAL VIEW (FOR IN-PAGE PREVIEW)
// ==========================================
export const CaseStudyModal = ({ project, onClose }) => {
  const navigate = useNavigate();
  if (!project) return null;

  const softwareList = typeof project.softwareUsed === 'string'
    ? JSON.parse(project.softwareUsed || '[]')
    : (project.softwareUsed || []);

  const openFullPage = () => {
    onClose();
    navigate(`/projects/${project.slug}`);
  };

  return (
    <Modal isOpen={!!project} onClose={onClose} title={`Case Study: ${project.title}`} maxWidth="max-w-4xl">
      <div className="flex flex-col gap-6 text-inherit">
        
        {/* Banner Header Image */}
        <div className="relative aspect-[16/9] rounded-2xl bg-zinc-900 border border-zinc-200 dark:border-white/10 overflow-hidden shadow-sm">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
          
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md text-[#801834] dark:text-[#E84855] border border-white/30 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
              {project.category}
            </span>
          </div>

          <button
            onClick={openFullPage}
            className="absolute top-4 right-4 rounded-full bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-900 dark:text-zinc-100 hover:text-[#801834] dark:hover:text-[#E84855] border border-zinc-200 dark:border-white/20 text-[10px] font-mono font-bold px-3.5 py-1.5 uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
          >
            Open Dedicated Page <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Structural Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-zinc-200/80 dark:border-white/5 text-xs">
          <div className="p-2">
            <span className="text-zinc-500 uppercase block text-[10px] font-mono mb-0.5">Location</span>
            <span className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1"><MapPin size={12} className="text-[#D4AF37]"/> {project.location}</span>
          </div>
          <div className="p-2">
            <span className="text-zinc-500 uppercase block text-[10px] font-mono mb-0.5">Year</span>
            <span className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1"><Calendar size={12} className="text-[#D4AF37]"/> {project.year}</span>
          </div>
          <div className="p-2">
            <span className="text-zinc-500 uppercase block text-[10px] font-mono mb-0.5">Role</span>
            <span className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1"><ShieldCheck size={12} className="text-[#D4AF37]"/> {project.role || 'Lead Structural'}</span>
          </div>
          <div className="p-2">
            <span className="text-zinc-500 uppercase block text-[10px] font-mono mb-0.5">Authority</span>
            <span className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1"><Building size={12} className="text-[#D4AF37]"/> {project.client || 'Apex Global'}</span>
          </div>
        </div>

        {/* Narrative Accordion Sections */}
        <div className="flex flex-col gap-4 text-sm">
          
          {/* Overview */}
          <div className="bg-white/80 dark:bg-zinc-800/40 p-5 rounded-2xl border border-zinc-200/80 dark:border-white/5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1">01 • Executive Overview</h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">{project.description}</p>
          </div>

          {/* Challenge */}
          <div className="bg-red-500/5 dark:bg-red-950/20 p-5 rounded-2xl border border-red-200 dark:border-red-900/40">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">02 • Technical Challenge</h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">{project.challenge}</p>
          </div>

          {/* Engineering Approach */}
          <div className="bg-white/80 dark:bg-zinc-800/40 p-5 rounded-2xl border border-zinc-200/80 dark:border-white/5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-1">03 • Computational Approach & FEA</h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">{project.engineeringApproach}</p>
          </div>

          {/* Solution & Result */}
          <div className="bg-emerald-500/5 dark:bg-emerald-950/20 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/40">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">04 • Stamped Solution & Outcome</h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm mb-2">{project.solution}</p>
            <p className="text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center gap-1.5">
              <CheckCircle2 size={14} /> Result: {project.result}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-zinc-200/80 dark:border-white/10">
          <div className="flex flex-wrap gap-1.5 items-center">
            {softwareList.map(soft => (
              <span key={soft} className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 px-2.5 py-0.5 text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
                {soft}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={openFullPage}
              className="flex-1 sm:flex-none rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-[#801834] dark:hover:bg-[#E84855] hover:text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              Full Case Study Page
            </button>
            <button
              onClick={() => { onClose(); navigate('/contact'); }}
              className="flex-1 sm:flex-none rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Consult On Scope
            </button>
          </div>
        </div>

      </div>
    </Modal>
  );
};

// ==========================================
// 2. DEDICATED FULL-PAGE CASE STUDY VIEW
// ==========================================
export const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const { data, loading } = useFetch(`/projects/${slug}`);
  const { data: allData } = useFetch('/projects');

  const fallbackProjects = [
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
      softwareUsed: JSON.stringify(['ETABS', 'SAP2000', 'REVIT Structure', 'SAFE', 'RISA-3D'])
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
      softwareUsed: JSON.stringify(['SAP2000', 'Midas Civil', 'ANSYS', 'AutoCAD 2025'])
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
      softwareUsed: JSON.stringify(['ANSYS', 'Rhino Grasshopper', 'Tekla Structures', 'ETABS'])
    }
  ];

  const project = data?.project || fallbackProjects.find(p => p.slug === slug) || fallbackProjects[0];
  const relatedProjects = (allData?.projects || fallbackProjects).filter(p => p.slug !== slug).slice(0, 2);

  const softwareList = typeof project?.softwareUsed === 'string'
    ? JSON.parse(project.softwareUsed || '[]')
    : (project?.softwareUsed || []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-transparent text-inherit flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest mb-2 font-bold">Project Not Found</p>
          <h2 className="text-2xl font-bold mb-4">The requested structural case study does not exist.</h2>
          <button onClick={() => navigate('/projects')} className="bg-[#D4AF37] text-zinc-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-inherit relative pt-32 pb-24 overflow-hidden selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* Ambient Sheen & Radiant Studio Lights */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white/70 dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/5 dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift"></div>
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/6 dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-[#801834] dark:hover:text-[#E84855] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-zinc-400" />
          <Link to="/projects" className="hover:text-[#801834] dark:hover:text-[#E84855] transition-colors">Projects</Link>
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="text-[#D4AF37] font-bold">{project.title}</span>
        </div>

        {/* Back Link & Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-zinc-200/80 dark:border-white/10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-[#801834] dark:hover:text-[#E84855] transition-colors">
            <ArrowLeft size={16} /> Back to All Projects
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="rounded-full bg-white/85 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] border border-white/90 dark:border-white/20 backdrop-blur-xl px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.04)] cursor-pointer"
            >
              <Share2 size={13} className="text-[#D4AF37]" /> {copied ? 'Link Copied!' : 'Share Case Study'}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] border border-[#D4AF37] flex items-center gap-2 cursor-pointer"
            >
              <span>Consult On Scope</span>
              <ArrowUpRight size={14} className="text-[#121417]" />
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Structural Case Study · {project.category}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
            <span className="text-[#801834] dark:text-[#E84855]">{project.title.split(' ')[0]}</span> {project.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Main Project Feature Image */}
        <div className="relative aspect-[16/9] rounded-3xl bg-zinc-900 border border-zinc-200/80 dark:border-white/10 overflow-hidden mb-10 group shadow-xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Engineering Blueprint Label */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/30 text-xs font-mono shadow-md">
            <span className="text-[#801834] dark:text-[#E84855] font-bold">PROJECT CODE: {project.slug?.toUpperCase()}</span>
            <span className="text-zinc-600 dark:text-zinc-300 hidden sm:inline font-semibold">PE/SE SEAL CERTIFIED • ASCE 7 / IBC COMPLIANT</span>
          </div>
        </div>

        {/* Structural Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl p-6 rounded-3xl border border-white/90 dark:border-white/10 mb-12 shadow-sm">
          <div className="p-2">
            <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Geographic Location</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <MapPin size={14} className="text-[#D4AF37]" /> {project.location}
            </span>
          </div>
          <div className="p-2">
            <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Completion Year</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Calendar size={14} className="text-[#D4AF37]" /> {project.year}
            </span>
          </div>
          <div className="p-2">
            <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Structural Role</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#D4AF37]" /> {project.role || 'Lead Structural Engineer'}
            </span>
          </div>
          <div className="p-2">
            <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Client / Authority</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Building size={14} className="text-[#D4AF37]" /> {project.client || 'Private Developer'}
            </span>
          </div>
        </div>

        {/* System & Material Specifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#801834] dark:text-[#E84855] mb-3 flex items-center gap-2">
              <Layers size={16} /> Lateral & Gravity Structural System
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.structuralSystem}
            </p>
          </div>

          <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#801834] dark:text-[#E84855] mb-3 flex items-center gap-2">
              <Building size={16} /> Primary Materials Specified
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.materials}
            </p>
          </div>
        </div>

        {/* 5-STEP CASE STUDY NARRATIVE */}
        <div className="flex flex-col gap-6 mb-16">
          
          {/* Step 1: Overview */}
          <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-amber-500/10 border border-[#D4AF37]/40 px-3 py-0.5 text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase mb-3">
              Phase 01 • Context & Scope
            </span>
            <h2 className="text-xl font-black text-zinc-900 dark:text-zinc-100 mb-4">1. Project Overview & Architectural Vision</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Step 2: Challenge */}
          <div className="rounded-3xl bg-red-500/5 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-red-500/10 border border-red-300 dark:border-red-700 px-3 py-0.5 text-xs font-mono text-red-600 dark:text-red-400 font-bold tracking-widest uppercase mb-3">
              Phase 02 • Technical Boundary
            </span>
            <h2 className="text-xl font-black text-red-600 dark:text-red-400 mb-4">2. The Structural Engineering Challenge</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Step 3: Engineering Approach */}
          <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-amber-500/10 border border-[#D4AF37]/40 px-3 py-0.5 text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase mb-3">
              Phase 03 • Mechanics & Simulation
            </span>
            <h2 className="text-xl font-black text-zinc-900 dark:text-zinc-100 mb-4">3. Engineering Approach & FEA Modeling</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              {project.engineeringApproach}
            </p>
            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 p-4 border border-zinc-200/80 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-300 flex items-center gap-3">
              <Cpu className="text-[#801834] dark:text-[#E84855] shrink-0" size={18} />
              <span>Full non-linear dynamic spectrum analysis, gravity load redistribution modeling, and wind tunnel pressure coefficients validated against IBC seismic design criteria.</span>
            </div>
          </div>

          {/* Step 4: Solution */}
          <div className="rounded-3xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-300 dark:border-emerald-700 px-3 py-0.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase mb-3">
              Phase 04 • Implementation
            </span>
            <h2 className="text-xl font-black text-emerald-700 dark:text-emerald-300 mb-4">4. Innovative Structural Solution Implemented</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Step 5: Result */}
          <div className="rounded-3xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-300 dark:border-emerald-700 px-3 py-0.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase mb-3 flex items-center gap-2 w-max">
              <CheckCircle2 size={16} /> Phase 05 • Performance Verification
            </span>
            <h2 className="text-xl font-black text-emerald-700 dark:text-emerald-300 mb-4">5. Quantified Performance Result</h2>
            <p className="text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-bold leading-relaxed">
              {project.result}
            </p>
          </div>

        </div>

        {/* Interactive Drawing Dossier & Multi-Layer CAD Board */}
        <div className="mb-16">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono font-bold text-[#D4AF37] shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Multi-Layer CAD Telemetry Board
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
              Interactive Drawing <span className="text-[#801834] dark:text-[#E84855]">Dossier & FEA Inspector.</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Examine the engineering layers for this structure: toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles.
            </p>
          </div>

          <BlueprintInspector />
        </div>

        {/* Software Stack Used */}
        <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-6 mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block mb-1">
              Finite Element & BIM Software Tools Utilized
            </span>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Computational Engineering Stack</h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {softwareList.map((soft) => (
              <span key={soft} className="rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 px-3 py-1 font-bold">
                {soft}
              </span>
            ))}
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-zinc-200/80 dark:border-white/10 pt-12 mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
                Explore <span className="text-[#801834] dark:text-[#E84855]">Related Case Studies</span>
              </h3>
              <Link to="/projects" className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1">
                View All Portfolio <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/projects/${rel.slug}`}
                  className="rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 hover:border-[#D4AF37]/50 p-6 transition-all group flex flex-col justify-between shadow-sm hover:shadow-xl"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2 font-bold">{rel.category}</span>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#801834] dark:group-hover:text-[#E84855] transition-colors mb-2">{rel.title}</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4">{rel.challenge}</p>
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1">
                    Open Case Study <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Consultation CTA */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-gradient-to-br from-white/90 via-white/80 to-amber-50/40 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-950/90 backdrop-blur-2xl p-10 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-3">
              Facing a <span className="text-[#801834] dark:text-[#E84855]">Complex</span> Structural Engineering Challenge?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Let's evaluate your project drawings, lateral load requirements, and value engineering possibilities with senior engineering rigor.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] border border-[#D4AF37] inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Initiate Consultation Inquiry</span>
              <ArrowUpRight size={16} className="text-[#121417]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
