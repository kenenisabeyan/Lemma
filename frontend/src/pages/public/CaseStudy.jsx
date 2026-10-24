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
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';

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
      softwareUsed: JSON.stringify(['ETABS', 'SAP2000', 'AutoCAD Civil 3D', 'SAFE'])
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
      softwareUsed: JSON.stringify(['SAP2000', 'AutoCAD', 'HEC-RAS', 'Civil 3D'])
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
      softwareUsed: JSON.stringify(['AutoCAD Civil 3D', 'ERA Geometric Manual', 'ArcGIS'])
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
    <div className="min-h-screen bg-transparent text-inherit relative pt-32 pb-24 overflow-hidden selection:bg-[#D4AF37] selection:text-[#121417] transition-colors duration-200 bg-cad-grid">
      
      {/* Luminous White Glass Frosted Sheen & Center Light Dome */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white/85 dark:from-[#0B0C0E]/80 dark:via-[#0B0C0E]/50 dark:to-[#0B0C0E]/85 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white/70 dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle Ambient Studio Lights */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/5 dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/6 dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none"></div>
      </div>

      {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
      <div className="absolute inset-0 overflow-hidden select-none z-0 pointer-events-none">
        <Hero3DCanvas />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 dark:from-[#0B0C0E] dark:via-[#0B0C0E]/80 to-transparent pointer-events-none"></div>
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-[#801834] dark:hover:text-[#E84855] transition-colors">
            <ArrowLeft size={16} /> Back to All Projects
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={handleCopyLink}
              className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-[#D4AF37] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Share2 size={14} className="text-[#D4AF37]" /> {copied ? 'Link Copied!' : 'Share Case Study'}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Consult On Scope</span>
              <ArrowUpRight size={14} className="text-[#D4AF37]" />
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-3 font-bold uppercase tracking-wider">
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
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 group">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Engineering Blueprint Label */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center p-3 text-xs font-mono text-white">
            <span className="text-[#D4AF37] font-bold">PROJECT CODE: {project.slug?.toUpperCase()}</span>
            <span className="text-zinc-300 hidden sm:inline font-semibold">ASTU SoCEA VERIFIED • EBCS EN & ERA COMPLIANT</span>
          </div>
        </div>

        {/* Structural Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 mb-12">
          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Geographic Location</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <MapPin size={14} className="text-[#D4AF37]" /> {project.location}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Completion Year</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Calendar size={14} className="text-[#D4AF37]" /> {project.year}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Structural Role</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#D4AF37]" /> {project.role || 'Lead Structural Engineer'}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Client / Authority</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Building size={14} className="text-[#D4AF37]" /> {project.client || 'Private Developer'}
            </span>
          </div>
        </div>

        {/* System & Material Specifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#801834] dark:text-[#E84855] mb-2 flex items-center gap-2">
              <Layers size={16} /> Lateral & Gravity Structural System
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.structuralSystem}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#801834] dark:text-[#E84855] mb-2 flex items-center gap-2">
              <Building size={16} /> Primary Materials Specified
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.materials}
            </p>
          </div>
        </div>

        {/* 5-STEP CASE STUDY NARRATIVE */}
        <div className="flex flex-col gap-8 mb-16">
          
          {/* Step 1: Overview */}
          <div className="py-4 border-l-2 border-[#D4AF37] pl-6">
            <span className="inline-block text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase mb-2">
              Phase 01 • Context & Scope
            </span>
            <h2 className="text-xl font-black text-zinc-900 dark:text-zinc-100 mb-3">1. Project Overview & Architectural Vision</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Step 2: Challenge */}
          <div className="py-4 border-l-2 border-red-500 pl-6">
            <span className="inline-block text-xs font-mono text-red-600 dark:text-red-400 font-bold tracking-widest uppercase mb-2">
              Phase 02 • Technical Boundary
            </span>
            <h2 className="text-xl font-black text-red-600 dark:text-red-400 mb-3">2. The Structural Engineering Challenge</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Step 3: Engineering Approach */}
          <div className="py-4 border-l-2 border-[#D4AF37] pl-6">
            <span className="inline-block text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase mb-2">
              Phase 03 • Mechanics & Simulation
            </span>
            <h2 className="text-xl font-black text-zinc-900 dark:text-zinc-100 mb-3">3. Engineering Approach & FEA Modeling</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              {project.engineeringApproach}
            </p>
            <div className="py-2 text-xs text-zinc-600 dark:text-zinc-300 flex items-center gap-3">
              <Cpu className="text-[#801834] dark:text-[#E84855] shrink-0" size={18} />
              <span>Full 3D dynamic response spectrum analysis, lateral stiffness checks, and seismic shear wall distribution validated against EBCS EN 1998 Zone 4 and EBCS EN 1992.</span>
            </div>
          </div>

          {/* Step 4: Solution */}
          <div className="py-4 border-l-2 border-emerald-500 pl-6">
            <span className="inline-block text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase mb-2">
              Phase 04 • Implementation
            </span>
            <h2 className="text-xl font-black text-emerald-700 dark:text-emerald-300 mb-3">4. Innovative Structural Solution Implemented</h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Step 5: Result */}
          <div className="py-4 border-l-2 border-emerald-500 pl-6">
            <span className="inline-block text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase mb-2 flex items-center gap-2 w-max">
              <CheckCircle2 size={16} /> Phase 05 • Performance Verification
            </span>
            <h2 className="text-xl font-black text-emerald-700 dark:text-emerald-300 mb-3">5. Quantified Performance Result</h2>
            <p className="text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-bold leading-relaxed">
              {project.result}
            </p>
          </div>

        </div>

        {/* Interactive Drawing Dossier & Multi-Layer CAD Board */}
        <div className="mb-16">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4AF37] mb-2 uppercase tracking-wider">
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
        <div className="py-6 mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block mb-1">
              Finite Element & BIM Software Tools Utilized
            </span>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Computational Engineering Stack</h4>
          </div>

          <div className="flex flex-wrap gap-3">
            {softwareList.map((soft) => (
              <span key={soft} className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-bold">
                • {soft}
              </span>
            ))}
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="pt-8 mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
                Explore <span className="text-[#801834] dark:text-[#E84855]">Related Case Studies</span>
              </h3>
              <Link to="/projects" className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1">
                View All Portfolio <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/projects/${rel.slug}`}
                  className="p-4 transition-all group flex flex-col justify-between"
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
        <div className="py-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-3">
              Facing an <span className="text-[#801834] dark:text-[#E84855]">Ambitious</span> Civil or Structural Engineering Challenge?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Connect with our ASTU 5th-year graduating civil engineering team to review technical drawings, EBCS code compliance, or explore capstone graduate collaborations.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-[#D4AF37] hover:underline inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Connect With Our Team →</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
