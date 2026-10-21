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
      <div className="flex flex-col gap-6 bg-[#FFFFFF] text-[#54595F]">
        
        {/* Banner Header Image */}
        <div className="relative aspect-[16/9] rounded-2xl bg-[#FFFFFF] border border-zinc-200 overflow-hidden shadow-sm">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
              {project.category}
            </span>
          </div>

          <button
            onClick={openFullPage}
            className="absolute top-4 right-4 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[#54595F] hover:text-[#D4AF37] border border-zinc-200 hover:border-[#D4AF37] text-[10px] font-mono font-bold px-3.5 py-1.5 uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
          >
            Open Dedicated Page <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Structural Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FFFFFF] p-4 rounded-2xl border border-zinc-200 text-xs shadow-sm">
          <div className="p-2">
            <span className="text-[#54595F]/75 uppercase block text-[10px] font-mono mb-0.5">Location</span>
            <span className="text-[#54595F] font-bold flex items-center gap-1"><MapPin size={12} className="text-[#D4AF37]"/> {project.location}</span>
          </div>
          <div className="p-2">
            <span className="text-[#54595F]/75 uppercase block text-[10px] font-mono mb-0.5">Completion</span>
            <span className="text-[#54595F] font-bold">{project.year}</span>
          </div>
          <div className="p-2">
            <span className="text-[#54595F]/75 uppercase block text-[10px] font-mono mb-0.5">Role</span>
            <span className="text-[#54595F] font-bold">{project.role || 'Lead Structural Engineer'}</span>
          </div>
          <div className="p-2">
            <span className="text-[#54595F]/75 uppercase block text-[10px] font-mono mb-0.5">Authority / Client</span>
            <span className="text-[#54595F] font-bold">{project.client || 'Confidential'}</span>
          </div>
        </div>

        {/* System & Materials */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#FFFFFF] p-5 border border-zinc-200 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2 flex items-center gap-2">
              <Layers size={14} /> Structural System
            </h4>
            <p className="text-xs text-[#54595F] leading-relaxed">{project.structuralSystem}</p>
          </div>
          <div className="rounded-2xl bg-[#FFFFFF] p-5 border border-zinc-200 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2 flex items-center gap-2">
              <Building size={14} /> Key Structural Materials
            </h4>
            <p className="text-xs text-[#54595F] leading-relaxed">{project.materials}</p>
          </div>
        </div>

        {/* NARRATIVE SECTION: Project -> Challenge -> Approach -> Solution -> Result */}
        <div className="flex flex-col gap-4 text-xs">
          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-5 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 px-2.5 py-0.5 text-[9px] font-mono text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
              Phase 01 · Scope
            </span>
            <h4 className="text-sm font-bold text-[#54595F] mb-2">Project Overview & Objectives</h4>
            <p className="text-[#54595F] leading-relaxed">{project.description}</p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-red-200 p-5 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-red-300 px-2.5 py-0.5 text-[9px] font-mono text-red-600 font-bold uppercase tracking-wider mb-2">
              Phase 02 · Boundary
            </span>
            <h4 className="text-sm font-bold text-red-600 mb-2">Structural Challenge</h4>
            <p className="text-[#54595F] leading-relaxed">{project.challenge}</p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-5 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 px-2.5 py-0.5 text-[9px] font-mono text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
              Phase 03 · FEA Simulation
            </span>
            <h4 className="text-sm font-bold text-[#D4AF37] mb-2">Engineering Approach & FEA Modeling</h4>
            <p className="text-[#54595F] leading-relaxed">{project.engineeringApproach}</p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-emerald-200 p-5 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-emerald-300 px-2.5 py-0.5 text-[9px] font-mono text-emerald-700 font-bold uppercase tracking-wider mb-2">
              Phase 04 · Execution
            </span>
            <h4 className="text-sm font-bold text-emerald-700 mb-2">Innovative Solution Implemented</h4>
            <p className="text-[#54595F] leading-relaxed">{project.solution}</p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-emerald-200 p-5 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-emerald-300 px-2.5 py-0.5 text-[9px] font-mono text-emerald-700 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-max">
              <CheckCircle2 size={12} /> Phase 05 · Performance Verification
            </span>
            <h4 className="text-sm font-bold text-emerald-700 mb-2">Quantified Performance Result</h4>
            <p className="text-[#54595F] leading-relaxed font-bold">{project.result}</p>
          </div>
        </div>

        {/* Software Stack Used */}
        <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] uppercase font-mono text-[#54595F]/75 font-semibold">Software Tools:</span>
            <div className="flex gap-1.5 flex-wrap">
              {softwareList.map((soft) => (
                <span key={soft} className="rounded-full text-[10px] font-mono bg-[#FFFFFF] text-[#D4AF37] border border-[#D4AF37]/40 px-2.5 py-0.5 font-bold shadow-2xs">
                  {soft}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={openFullPage}
              className="rounded-full bg-[#FFFFFF] text-[#54595F] border border-[#D4AF37] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#121417] transition-all flex items-center gap-1.5 shadow-xs"
            >
              Dedicated Page <ArrowUpRight size={13} />
            </button>
            <button
              onClick={onClose}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2 text-xs font-extrabold uppercase tracking-widest hover:bg-[#c49f2c] transition-all shadow-md shadow-[#D4AF37]/20"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </Modal>
  );
};

// ==========================================
// 2. DEDICATED FULL-PAGE CASE STUDY COMPONENT
// ==========================================
export const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Fetch project from API by slug
  const { data, loading, error } = useFetch(`/projects/${slug}`);
  const { data: allData } = useFetch('/projects');

  // Fallback project in case backend is offline
  const fallbackProjects = [
    {
      id: '1',
      title: 'Nexus Commercial Tower',
      slug: 'nexus-commercial-tower',
      category: 'Commercial High-Rise',
      location: 'Metropolis Financial District, NY',
      year: '2025',
      client: 'Apex Global Real Estate',
      role: 'Lead Structural Engineer',
      structuralSystem: 'Dual Core Shear Wall & Outrigger Truss System',
      materials: 'C80 High-Strength Concrete, Grade 65 Structural Steel, Viscoelastic Dampers',
      description: 'A 52-story state-of-the-art commercial skyscraper featuring a striking cantilevered glass atrium, multi-level outrigger belt trusses, and high-velocity wind damping systems.',
      challenge: 'High aspect ratio (9.2:1) resulting in severe lateral wind drift and complex seismic foundation loads over soft clay strata.',
      engineeringApproach: 'Utilized ETABS wind-tunnel aerodynamic integration, high-performance viscoelastic dampers, and deep drilled shaft caissons extending to bedrock.',
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
      location: 'West River County Highway Authority',
      year: '2024',
      client: 'State Transportation Department',
      role: 'Principal Bridge Engineer',
      structuralSystem: 'Steel Cable-Stayed Deck System with Reinforced Concrete Pylons',
      materials: 'Weathering Steel (ASTM A709), Ultra-High Performance Concrete (UHPC)',
      description: 'A 450-meter main span cable-stayed bridge built to replace a century-old vulnerable truss structure while handling 80,000 vehicles daily.',
      challenge: 'Maintaining active traffic flow during construction while adhering to strict environmental water protection regulations.',
      engineeringApproach: 'Implemented incremental launching method for steel deck segments and non-linear dynamic seismic response analysis in SAP2000.',
      solution: 'Designed lightweight orthotropic steel deck plates with lead-rubber seismic isolation bearings at pylon abutments.',
      result: 'Restored vital economic transit corridor with a projected 120-year design life and zero environmental impact citations.',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      softwareUsed: JSON.stringify(['SAP2000', 'Midas Civil', 'AutoCAD Structural', 'ANSYS'])
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
      <div className="min-h-screen bg-[#FFFFFF] text-[#54595F] flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest mb-2 font-bold">Project Not Found</p>
          <h2 className="text-2xl font-bold mb-4 text-[#54595F]">The requested structural case study does not exist.</h2>
          <button onClick={() => navigate('/projects')} className="bg-[#D4AF37] text-[#121417] hover:bg-[#c49f2c] px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#54595F] pt-24 pb-24 overflow-hidden selection:bg-[#D4AF37] selection:text-[#121417]">
      
      {/* Ambient subtle glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#D4AF37]/5 blur-[130px]"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/5 blur-[110px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#54595F] uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-zinc-300" />
          <Link to="/projects" className="hover:text-[#D4AF37] transition-colors">Projects</Link>
          <ChevronRight size={14} className="text-zinc-300" />
          <span className="text-[#D4AF37] font-bold">{project.title}</span>
        </div>

        {/* Back Link & Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-zinc-200">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#54595F] hover:text-[#D4AF37] transition-colors">
            <ArrowLeft size={16} /> Back to All Projects
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="rounded-full bg-[#FFFFFF] text-[#54595F] hover:text-[#D4AF37] border border-zinc-200 hover:border-[#D4AF37] px-4 py-2 text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs"
            >
              <Share2 size={13} /> {copied ? 'Link Copied!' : 'Share Case Study'}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2 text-xs font-extrabold uppercase tracking-widest hover:bg-[#c49f2c] transition-all flex items-center gap-1.5 shadow-md shadow-[#D4AF37]/20"
            >
              Consult On Similar Project <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Structural Case Study · {project.category}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#54595F] tracking-tight mb-4">
            <span className="text-[#D4AF37]">{project.title.split(' ')[0]}</span> {project.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-[#54595F] text-base sm:text-lg max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Main Project Feature Image with Crosshairs */}
        <div className="relative aspect-[16/9] rounded-2xl bg-[#FFFFFF] border border-zinc-200 overflow-hidden mb-10 group shadow-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Engineering Blueprint Label */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-[#FFFFFF]/95 backdrop-blur-md p-3.5 rounded-xl border border-zinc-200 text-xs font-mono shadow-md">
            <span className="text-[#D4AF37] font-bold">PROJECT CODE: {project.slug.toUpperCase()}</span>
            <span className="text-[#54595F] hidden sm:inline font-semibold">PE/SE SEAL CERTIFIED • ASCE 7 / IBC COMPLIANT</span>
          </div>
        </div>

        {/* Structural Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#FFFFFF] p-6 rounded-2xl border border-zinc-200 mb-12 shadow-sm">
          <div className="p-2">
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 block mb-1">Geographic Location</span>
            <span className="text-sm font-bold text-[#54595F] flex items-center gap-1.5">
              <MapPin size={14} className="text-[#D4AF37]" /> {project.location}
            </span>
          </div>
          <div className="p-2">
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 block mb-1">Completion Year</span>
            <span className="text-sm font-bold text-[#54595F] flex items-center gap-1.5">
              <Calendar size={14} className="text-[#D4AF37]" /> {project.year}
            </span>
          </div>
          <div className="p-2">
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 block mb-1">Structural Role</span>
            <span className="text-sm font-bold text-[#54595F] flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#D4AF37]" /> {project.role || 'Lead Structural Engineer'}
            </span>
          </div>
          <div className="p-2">
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 block mb-1">Client / Authority</span>
            <span className="text-sm font-bold text-[#54595F] flex items-center gap-1.5">
              <Building size={14} className="text-[#D4AF37]" /> {project.client || 'Private Developer'}
            </span>
          </div>
        </div>

        {/* System & Material Specifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-2">
              <Layers size={16} /> Lateral & Gravity Structural System
            </h3>
            <p className="text-sm text-[#54595F] leading-relaxed">
              {project.structuralSystem}
            </p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-2">
              <Building size={16} /> Primary Materials Specified
            </h3>
            <p className="text-sm text-[#54595F] leading-relaxed">
              {project.materials}
            </p>
          </div>
        </div>

        {/* 5-STEP CASE STUDY NARRATIVE */}
        <div className="flex flex-col gap-6 mb-16">
          
          {/* Step 1: Overview */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 px-3 py-0.5 text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase mb-3">
              Phase 01 • Context & Scope
            </span>
            <h2 className="text-xl font-bold text-[#54595F] mb-4">1. Project Overview & Architectural Vision</h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Step 2: Challenge */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-red-200 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-red-300 px-3 py-0.5 text-xs font-mono text-red-600 font-bold tracking-widest uppercase mb-3">
              Phase 02 • Technical Boundary
            </span>
            <h2 className="text-xl font-bold text-red-600 mb-4">2. The Structural Engineering Challenge</h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Step 3: Engineering Approach */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 px-3 py-0.5 text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase mb-3">
              Phase 03 • Mechanics & Simulation
            </span>
            <h2 className="text-xl font-bold text-[#D4AF37] mb-4">3. Engineering Approach & FEA Modeling</h2>
            <p className="text-sm text-[#54595F] leading-relaxed mb-6">
              {project.engineeringApproach}
            </p>
            <div className="rounded-xl bg-[#FFFFFF] p-4 border border-zinc-200 text-xs text-[#54595F] flex items-center gap-3">
              <Cpu className="text-[#D4AF37] shrink-0" size={18} />
              <span>Full non-linear dynamic spectrum analysis, gravity load redistribution modeling, and wind tunnel pressure coefficients validated against IBC seismic design criteria.</span>
            </div>
          </div>

          {/* Step 4: Solution */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-emerald-200 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-emerald-300 px-3 py-0.5 text-xs font-mono text-emerald-700 font-bold tracking-widest uppercase mb-3">
              Phase 04 • Implementation
            </span>
            <h2 className="text-xl font-bold text-emerald-700 mb-4">4. Innovative Structural Solution Implemented</h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Step 5: Result */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-emerald-200 p-8 shadow-sm">
            <span className="inline-block rounded-full bg-[#FFFFFF] border border-emerald-300 px-3 py-0.5 text-xs font-mono text-emerald-700 font-bold tracking-widest uppercase mb-3 flex items-center gap-2 w-max">
              <CheckCircle2 size={16} /> Phase 05 • Performance Verification
            </span>
            <h2 className="text-xl font-bold text-emerald-700 mb-4">5. Quantified Performance Result</h2>
            <p className="text-base text-[#54595F] font-bold leading-relaxed">
              {project.result}
            </p>
          </div>

        </div>

        {/* Interactive Drawing Dossier & Multi-Layer CAD Board */}
        <div className="mb-16">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Multi-Layer CAD Telemetry Board
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-[#54595F] tracking-tight mb-2">
              Interactive Drawing <span className="text-[#D4AF37]">Dossier & FEA Inspector.</span>
            </h3>
            <p className="text-xs text-[#54595F] leading-relaxed">
              Examine the engineering layers for this structure: toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles.
            </p>
          </div>

          <BlueprintInspector />
        </div>

        {/* Software Stack Used */}
        <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#54595F]/75 tracking-widest block mb-1">
              Finite Element & BIM Software Tools Utilized
            </span>
            <h4 className="text-sm font-bold text-[#54595F]">Computational Engineering Stack</h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {softwareList.map((soft) => (
              <span key={soft} className="rounded-full text-xs font-mono bg-[#FFFFFF] text-[#D4AF37] border border-[#D4AF37]/40 px-3 py-1 font-bold shadow-2xs">
                {soft}
              </span>
            ))}
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-zinc-200 pt-12 mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-[#54595F]">Explore Related Case Studies</h3>
              <Link to="/projects" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:opacity-80 transition-opacity flex items-center gap-1">
                View All Portfolio <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/projects/${rel.slug}`}
                  className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 hover:border-[#D4AF37] p-6 transition-all group flex flex-col justify-between shadow-sm hover:shadow-xl"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2 font-bold">{rel.category}</span>
                    <h4 className="text-lg font-bold text-[#54595F] group-hover:text-[#D4AF37] transition-colors mb-2">{rel.title}</h4>
                    <p className="text-xs text-[#54595F] line-clamp-2 mb-4">{rel.challenge}</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1 font-bold">
                    Open Case Study <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Consultation CTA */}
        <div className="rounded-3xl bg-[#FFFFFF] border border-zinc-200 p-10 text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[#54595F] mb-3">Facing a <span className="text-[#D4AF37]">Complex</span> Structural Engineering Challenge?</h3>
            <p className="text-sm text-[#54595F] max-w-xl mx-auto mb-6 leading-relaxed">
              Let's evaluate your project drawings, lateral load requirements, and value engineering possibilities with senior engineering rigor.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest hover:bg-[#c49f2c] transition-all shadow-md shadow-[#D4AF37]/20 inline-flex items-center gap-2"
            >
              Initiate Consultation Inquiry <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
