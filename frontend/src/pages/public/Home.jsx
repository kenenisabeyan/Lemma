import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Layers, 
  ShieldCheck, 
  Ruler, 
  Play, 
  ArrowUpRight, 
  ChevronRight, 
  Quote, 
  FileText, 
  Award, 
  CheckCircle2,
  HardHat,
  X,
  GraduationCap,
  Download,
  HelpCircle,
  Compass,
  Hammer,
  Activity,
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  TrendingDown,
  Cpu,
  Layers3
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { StatCounter } from '../../components/engineering/StatCounter';
import { ProjectCard } from '../../components/engineering/ProjectCard';
import { EngineeringCanvas } from '../../components/engineering/EngineeringCanvas';
import { LoadPathSimulator } from '../../components/engineering/LoadPathSimulator';
import { BlueprintInspector } from '../../components/engineering/BlueprintInspector';
import { ValueEngineeringCalculator } from '../../components/engineering/ValueEngineeringCalculator';
import { CaseStudyModal } from './CaseStudy';

export const Home = () => {
  const navigate = useNavigate();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeEducationTab, setActiveEducationTab] = useState('roles');
  const [activeLoadPath, setActiveLoadPath] = useState('gravity');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Dynamic Rotating Pill Text (like alazar.dev)
  const rotatingDisciplines = [
    'High-Rise Commercial Towers',
    'Seismic Damping Systems',
    'Post-Tensioned Concrete',
    'Long-Span Cable Bridges',
    'Specialty Space Frame Domes'
  ];
  const [disciplineIndex, setDisciplineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisciplineIndex((prev) => (prev + 1) % rotatingDisciplines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Fetch live settings and projects from API with fallback
  const { data: settingsData } = useFetch('/settings', {
    settings: {
      engineerName: 'Alexandre Techane',
      title: 'Senior Structural Engineer, PE, SE',
      heroTagline: 'Precision in Every Structure.',
      heroBio: 'Ensuring structural integrity, seismic safety, and architectural elegance for high-rise towers, infrastructure bridges, and complex commercial developments.',
      introVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-building-41618-large.mp4',
      yearsExp: '14+',
      projectsCount: '180+',
      safetyRecord: '100%',
      clientsCount: '50+'
    }
  });

  const { data: projectsData } = useFetch('/projects?featured=true');
  const { data: servicesData } = useFetch('/services');
  const { data: testimonialsData } = useFetch('/testimonials');
  const { data: insightsData } = useFetch('/insights');

  const settings = settingsData?.settings || settingsData || {};
  const projects = projectsData?.projects || [
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
      materials: 'C80 High-Strength Concrete, Grade 65 Structural Steel',
      description: 'A 52-story state-of-the-art skyscraper featuring a striking cantilevered glass atrium and high-velocity wind damping systems.',
      challenge: 'High aspect ratio resulting in severe lateral wind drift and complex seismic foundation loads over soft clay strata.',
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
      location: 'West River County Highway Authority',
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
    }
  ];

  const services = servicesData?.services || [
    { icon: 'Building2', title: 'Structural Analysis & Design', summary: 'Advanced linear & non-linear 3D modeling for high-rise towers, commercial centers, and civic buildings.' },
    { icon: 'Layers', title: 'Reinforced Concrete & Steel', summary: 'Specialized connection detailing, post-tensioned slab calculations, and structural steel optimization.' },
    { icon: 'ShieldCheck', title: 'Seismic Retrofit & Evaluation', summary: 'Structural integrity auditing, non-destructive testing, dynamic pushover analysis, and dampening retrofits.' },
    { icon: 'Ruler', title: 'Peer Review & Consultation', summary: 'Third-party calculation verification, cost value engineering, and constructability advisory.' }
  ];

  const testimonials = testimonialsData?.testimonials || [
    {
      clientName: 'Sarah Jenkins, AIA',
      clientRole: 'Principal Architect',
      clientCompany: 'ArchiTech Global Design',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content: 'Alexandre’s approach to the foundation redesign on the Nexus Tower saved us 4 months of schedule time while exceeding safety margins. A true master of structural elegance.'
    },
    {
      clientName: 'Marcus Vance',
      clientRole: 'VP of Development',
      clientCompany: 'Apex Commercial Properties',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      content: 'Unmatched technical depth and clear communication. He translates complex structural mechanics into actionable insights that non-engineers can confidently execute.'
    }
  ];

  const insights = insightsData?.insights || [
    { title: 'Innovations in High-Strength C80 Concrete Formulations', slug: 'innovations-high-strength-c80-concrete', category: 'Materials Science', date: 'Oct 12, 2026' },
    { title: 'Seismic Retrofitting Strategies for Pre-1980 Structural Steel Frame Buildings', slug: 'seismic-retrofitting-pre-1980-steel-frames', category: 'Seismic Design', date: 'Sep 28, 2026' },
    { title: 'Optimizing Wind Damping Outrigger Systems in 50+ Story Skyscrapers', slug: 'optimizing-wind-damping-outrigger-systems', category: 'High-Rise Analysis', date: 'Aug 15, 2026' }
  ];

  // Marquee tools and building codes (alazar.dev style marquee)
  const techMarquee = [
    'ETABS v21', 'SAP2000', 'REVIT Structure', 'SAFE Concrete', 'Tekla Structures', 'ANSYS Mechanical', 'RISA-3D', 'AutoCAD 2025',
    'IBC 2024', 'ASCE 7-22', 'ACI 318-19', 'AISC 360-22', 'FEMA P-58', 'Eurocode 2 & 3'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('consult@alexandre-structural.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-24 sm:pt-28 relative selection:bg-[#D4AF37] selection:text-[#121417]">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (ALAZAR.DEV MODERN AESTHETIC + DARK GOLD PALETTE)          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[95vh] flex items-center py-20 overflow-hidden bg-[#121417] border-b border-[#222]">
        
        {/* Animated Aurora Glow Ambience (like alazar.dev) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#D4AF37]/15 blur-[140px] animate-aurora-drift"></div>
          <div className="absolute bottom-0 right-[6%] h-[48vh] w-[48vh] rounded-full bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2"></div>
        </div>

        {/* Blueprint line grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

        {/* Left Vertical Coordinate / Tag Badge (like alazar.dev) */}
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-5 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex z-20">
          <span className="h-20 w-px bg-gradient-to-b from-transparent to-[#D4AF37]/40"></span>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#9CA3AF] [writing-mode:vertical-rl]">
            Engineering Portfolio — 2026
          </span>
          <span className="h-20 w-px bg-gradient-to-b from-[#D4AF37]/40 to-transparent"></span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:pl-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Top Subtitle with Dot */}
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
              <span>Principal Structural Engineer</span>
              <span className="text-[#D4AF37] font-bold">·</span>
              <span className="text-[#EAEAEA] font-semibold">PE & SE Licensed</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#EAEAEA] leading-[1.05] tracking-tight">
              Alexandre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Techane</span>
            </h1>

            {/* Dynamic Rotating Pill Box (signature alazar.dev feature adapted to engineering) */}
            <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl text-[#9CA3AF]">
              <span>I design & calculate</span>
              <span className="relative inline-flex items-center">
                <span className="relative overflow-hidden rounded-md border border-[#D4AF37]/50 bg-[#181A1E] px-4 py-1.5 font-mono text-sm sm:text-base font-bold text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={disciplineIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block whitespace-nowrap"
                    >
                      {rotatingDisciplines[disciplineIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </div>

            {/* Concise Value Statement */}
            <p className="max-w-xl text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              {settings.heroBio || 'Turning architectural ambition into resilient, code-compliant physical reality — from initial finite element analysis to high-rise completion.'}
            </p>

            {/* Social / Contact Pill Buttons with Tooltips (like alazar.dev) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:consult@alexandre-structural.com"
                aria-label="Email Engineer"
                className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-[#333] bg-[#181A1E] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121417] text-[#D4AF37] transition-all duration-300 shadow-md"
              >
                <Mail size={16} />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#121417] border border-[#333] px-2 py-0.5 text-[10px] font-mono text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                  Email Inquiries
                </span>
              </a>

              <a
                href="tel:+15550198472"
                aria-label="Phone Consultation"
                className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-[#333] bg-[#181A1E] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121417] text-[#D4AF37] transition-all duration-300 shadow-md"
              >
                <Phone size={16} />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#121417] border border-[#333] px-2 py-0.5 text-[10px] font-mono text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                  Call Office
                </span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-[#333] bg-[#181A1E] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121417] text-[#D4AF37] transition-all duration-300 shadow-md"
                title="Copy Email"
              >
                <Copy size={16} />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#121417] border border-[#333] px-2 py-0.5 text-[10px] font-mono text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                  {copiedEmail ? 'Copied!' : 'Copy Email Address'}
                </span>
              </button>

              <div className="flex items-center gap-2 pl-3 border-l border-[#333] text-xs font-mono text-[#9CA3AF]">
                <MapPin size={13} className="text-[#D4AF37]" />
                <span>New York, NY · Available Worldwide</span>
              </div>
            </div>

            {/* CTAs (Alazar rounded pills) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => navigate('/contact')}
                className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-3.5 text-xs font-mono font-extrabold tracking-wider uppercase hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2"
              >
                Hire Me / Consultation <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="rounded-full border border-[#333] bg-[#181A1E] text-[#EAEAEA] px-8 py-3.5 text-xs font-mono font-bold tracking-wider uppercase hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                View Project Portfolio <ChevronRight size={15} />
              </button>
            </div>

            {/* License info bar */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-[#222] font-mono text-[11px] text-[#9CA3AF]">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#D4AF37]" /> PE #84729-NY</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#D4AF37]" /> SE #92041-CA</span>
              <span className="flex items-center gap-1.5 text-[#D4AF37] font-semibold"><ShieldCheck size={13} /> 100% Safety Compliance</span>
            </div>
          </motion.div>

          {/* Right Video / Profile 3D Tilt Card (like alazar.dev hero figure) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Alazar Signature Decorative Outer Mask Frame */}
              <div aria-hidden="true" className="-inset-4 absolute rounded-[2rem] border border-[#D4AF37]/25 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>

              <div className="relative group p-2.5 border border-[#333]/80 bg-[#181A1E] rounded-2xl shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300">
                {/* Corner Coordinate Crosshairs */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37] rounded-tl"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37] rounded-tr"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37] rounded-bl"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37] rounded-br"></div>

                <div 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="relative aspect-video bg-[#121417] overflow-hidden cursor-pointer flex items-center justify-center rounded-xl group-hover:border-[#D4AF37]/50 transition-all"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
                    alt="Structural Engineering Overview"
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent"></div>

                  {/* Play Button Overlay */}
                  <div className="relative z-20 w-16 h-16 rounded-full bg-[#121417]/90 border border-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_25px_rgba(212,175,55,0.45)]">
                    <Play className="text-[#D4AF37] w-6 h-6 ml-1" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-center bg-[#121417]/90 backdrop-blur-md p-3 border border-[#333] text-[11px] text-[#EAEAEA] uppercase tracking-wider rounded-xl">
                    <span className="flex items-center gap-2 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Introduction Video (Editable in CMS)
                    </span>
                    <span className="text-[#D4AF37] font-bold font-mono">Watch 2 min</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INFINITE MARQUEE TICKER (SIGNATURE ALAZAR.DEV TECH STRIP PATTERN)       */}
      {/* ========================================================================= */}
      <section aria-label="Software Stack & Standards" className="border-y border-[#333] bg-[#181A1E]/40 py-4 overflow-hidden">
        <div className="mx-auto max-w-6xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="overflow-hidden">
            <div className="animate-marquee flex items-center gap-10">
              {techMarquee.concat(techMarquee).map((tool, idx) => (
                <span 
                  key={idx} 
                  className="group flex items-center gap-2 whitespace-nowrap font-mono text-[#9CA3AF] text-xs uppercase tracking-wider transition-colors hover:text-[#D4AF37]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 group-hover:bg-[#D4AF37]"></span>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BENTO GRID CORE DISCIPLINES ("ANALYZE. CALCULATE. DELIVER.")            */}
      {/*    (EXACT ALAZAR.DEV 6-COLUMN BENTO GRID PATTERN)                          */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#121417] relative">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl tracking-tight text-[#EAEAEA]">
              Analyze<span className="text-[#D4AF37]">.</span> Calculate<span className="text-[#D4AF37]">.</span> Deliver<span className="text-[#D4AF37]">.</span>
            </h2>
            <p className="mt-4 text-balance text-[#9CA3AF] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Precision structural mechanics and finite element performance simulation for buildings and infrastructure designed to withstand extreme wind and seismic forces.
            </p>
          </div>

          <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
            
            {/* Bento Card 1: High-Rise Lateral Stability (Col 1-2) */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#333]/80 bg-[#181A1E] px-8 pt-8 pb-6 md:col-span-2 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div className="relative mx-auto flex size-28 items-center justify-center rounded-full border-4 border-dashed border-[#D4AF37]/40 bg-[#121417] shadow-xs outline outline-[#333] outline-offset-4 group-hover:scale-105 transition-transform mb-6">
                <div className="absolute inset-0 z-10 scale-125 bg-radial from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent blur-xl"></div>
                <Building2 size={36} className="text-[#D4AF37] relative z-20" />
              </div>
              <div className="relative mt-2 space-y-1.5 text-center">
                <h3 className="font-medium text-[#EAEAEA] text-lg">High-Rise Lateral Stability</h3>
                <p className="text-[#9CA3AF] text-xs leading-relaxed">
                  Dual core shear walls, perimeter belt trusses, and aerodynamic damping suppressing lateral drift in skyscrapers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2D3137] text-[10px] font-mono text-[#D4AF37] text-center uppercase tracking-widest">
                ETABS · ASCE 7-22 Wind Tunnel
              </div>
            </div>

            {/* Bento Card 2: Non-Linear Seismic Modeling (Col 3-4) */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#333]/80 bg-[#181A1E] px-8 pt-8 pb-6 md:col-span-2 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div className="relative mx-auto flex size-28 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#121417] shadow-xs outline outline-[#333] outline-offset-4 group-hover:scale-105 transition-transform mb-6">
                <div className="absolute inset-0 z-10 scale-125 bg-radial from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent blur-xl"></div>
                <Activity size={36} className="text-[#D4AF37] relative z-20" />
              </div>
              <div className="relative mt-2 space-y-1.5 text-center">
                <h3 className="font-medium text-[#EAEAEA] text-lg">Non-Linear Seismic Modeling</h3>
                <p className="text-[#9CA3AF] text-xs leading-relaxed">
                  Dynamic response spectrum history analysis, viscous damper dissipation, and pushover assessments per FEMA P-58.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2D3137] text-[10px] font-mono text-[#D4AF37] text-center uppercase tracking-widest">
                SAP2000 · Base Isolation
              </div>
            </div>

            {/* Bento Card 3: Value Engineering Sparkline Graph (Col 5-6) */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#333]/80 bg-[#181A1E] px-8 pt-8 pb-6 sm:col-span-2 md:col-span-2 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div className="min-h-28 relative flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="font-mono text-xs font-bold text-[#EAEAEA]">100% Safety Record</div>
                </div>
                {/* Alazar Sparkline SVG Curve */}
                <svg fill="none" viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" className="translate-x-[5%] -rotate-1 scale-125 opacity-70 group-hover:opacity-100 transition-opacity my-2">
                  <path d="M3 90 C 45 60, 75 80, 110 40 C 145 10, 180 70, 220 30 C 255 10, 280 25, 298 15" stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M3 90 C 45 60, 75 80, 110 40 C 145 10, 180 70, 220 30 C 255 10, 280 25, 298 15 L298 110 L3 110 Z" fill="url(#goldGradBento)" opacity="0.15" />
                  <defs>
                    <linearGradient id="goldGradBento" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative z-10 mt-2 space-y-1.5 text-center">
                <h3 className="font-medium text-[#EAEAEA] text-lg">Value Engineering</h3>
                <p className="text-[#9CA3AF] text-xs leading-relaxed">
                  Post-tensioning and optimized finite element redistribution saving 20-30% concrete mass and steel tonnage.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2D3137] text-[10px] font-mono text-[#D4AF37] text-center uppercase tracking-widest">
                Peer Review · Quantity Audits
              </div>
            </div>

            {/* Bento Card 4: Full-Width 6-Col Bottom Showcase (like alazar.dev bottom bento card) */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#333]/80 bg-[#181A1E] sm:col-span-2 md:col-span-6 p-0 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl">
              <div className="grid h-full sm:grid-cols-2 items-center">
                <div className="relative z-10 space-y-6 py-8 ps-8 pe-6">
                  <div className="flex size-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#121417] shadow-sm outline outline-[#333] outline-offset-2">
                    <Ruler size={20} className="text-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-[#EAEAEA] text-xl">3D Finite Element Simulation</h3>
                    <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed max-w-md">
                      From ETABS building wind tunnel integration to Midas Civil bridge span dynamic response, calculations adhere to the highest international seismic and structural performance criteria.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="rounded-full bg-[#121417] border border-[#333] px-3 py-1 font-mono text-[10px] text-[#D4AF37] uppercase">ASCE 7-22</span>
                    <span className="rounded-full bg-[#121417] border border-[#333] px-3 py-1 font-mono text-[10px] text-[#D4AF37] uppercase">IBC 2024</span>
                    <span className="rounded-full bg-[#121417] border border-[#333] px-3 py-1 font-mono text-[10px] text-[#D4AF37] uppercase">ACI 318-19</span>
                    <span className="rounded-full bg-[#121417] border border-[#333] px-3 py-1 font-mono text-[10px] text-[#D4AF37] uppercase">AISC 360</span>
                  </div>
                </div>
                <div className="relative aspect-video sm:aspect-auto h-full min-h-[240px] overflow-hidden p-6 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#333] bg-[#121417] shadow-2xl group-hover:border-[#D4AF37]/50 transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80" 
                      alt="Structural FEA Simulation" 
                      className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-[#121417]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#333] font-mono text-[10px] text-[#D4AF37] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      ETABS v21 Live Non-Linear Stress Distribution
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.5 INTERACTIVE LOAD PATH & STRUCTURAL TELEMETRY SIMULATOR                */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#121417] border-t border-[#333] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Live Dynamic Mechanics Simulation
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
              Real-Time Lateral & Seismic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Load Path.</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Explore how wind aerodynamic drift, non-linear seismic ground motions, and gravitational vectors propagate through reinforced concrete cores and outrigger belt trusses down into bedrock.
            </p>
          </div>

          <LoadPathSimulator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT ME SECTION                                                       */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#181A1E] border-t border-b border-[#333] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Alazar Signature Decorative Outer Mask Frame */}
                <div aria-hidden="true" className="-inset-4 absolute rounded-[2rem] border border-[#D4AF37]/25 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>

                <div className="relative border border-[#333]/80 p-2.5 bg-[#121417] rounded-2xl shadow-2xl group hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div className="aspect-[4/5] bg-[#121417] overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                      alt="Alexandre Senior Structural Engineer"
                      className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-[#121417]/95 border border-[#D4AF37]/60 p-4 text-xs font-mono rounded-xl shadow-xl backdrop-blur-md">
                    <div className="flex justify-between items-center text-[#D4AF37] font-bold uppercase tracking-wider mb-1">
                      <span>PE #84729-NY</span>
                      <span>SE #92041-CA</span>
                    </div>
                    <span className="text-[10px] text-[#9CA3AF] uppercase tracking-widest block">Licensed Structural Engineer & ASCE Fellow</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#121417] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm w-max">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                </span>
                Professional Background
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EAEAEA] tracking-tight">
                Structural Engineering Behind Visionary Architecture.
              </h2>

              <p className="text-[#9CA3AF] text-base leading-relaxed">
                With over 14 years of specialized structural practice across North America, I bridge the critical gap between audacious architectural imagination and uncompromising structural mechanics. My work ensures high-rise towers withstand extreme hurricane forces and heritage masonry survives intense seismic ground motion.
              </p>

              <div className="bg-[#121417] border-l-2 border-[#D4AF37] p-5 text-sm text-[#EAEAEA] italic leading-relaxed rounded-r-xl border-y border-r border-[#2D3137]">
                "Structural engineering should never be treated as an architectural limitation. When calculated with precision, physics becomes the catalyst that enables daring, column-free spaces."
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-[#121417] p-4 border border-[#333]/80 rounded-2xl shadow-md">
                  <GraduationCap className="text-[#D4AF37] w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#EAEAEA] font-bold block">M.S. Structural Engineering</span>
                    <span className="text-[10px] text-[#9CA3AF]">Columbia University</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#121417] p-4 border border-[#333]/80 rounded-2xl shadow-md">
                  <ShieldCheck className="text-[#D4AF37] w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#EAEAEA] font-bold block">100% Safety Compliance</span>
                    <span className="text-[10px] text-[#9CA3AF]">Zero Audit Deficiencies</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about"
                  className="rounded-full bg-[#D4AF37] text-[#121417] px-7 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2"
                >
                  Full Biography & Credentials <ArrowUpRight size={14} />
                </Link>
                <a
                  href="/resources"
                  className="rounded-full bg-[#121417] text-[#EAEAEA] border border-[#333] hover:border-[#D4AF37] hover:text-[#D4AF37] px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  Download CV (PDF) <Download size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPERTISE / SERVICES SECTION                                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#121417] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Core Capabilities
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight">Engineering Services</h3>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors flex items-center gap-2">
              Explore All Services <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((srv, index) => (
              <div key={index} className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-8 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#121417] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rounded-xl shadow-md">
                    <Building2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#EAEAEA] mb-3 group-hover:text-[#D4AF37] transition-colors">{srv.title}</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">{srv.summary || srv.description}</p>
                </div>
                <Link to="/services" className="text-xs font-mono font-bold uppercase tracking-wider text-[#9CA3AF] group-hover:text-[#D4AF37] flex items-center gap-1.5 pt-4 border-t border-[#2D3137]">
                  Scope & Deliverables <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STATISTICS ROW                                                         */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#181A1E] border-t border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter value={settings.yearsExp || '14+'} label="Years Experience" subtext="PE & SE Certified" />
          <StatCounter value={settings.projectsCount || '180+'} label="Projects Completed" subtext="High-Rise & Infrastructure" />
          <StatCounter value={settings.safetyRecord || '100%'} label="Structural Safety Record" subtext="Zero Critical Deficiencies" />
          <StatCounter value={settings.clientsCount || '50+'} label="Corporate Clients" subtext="Architects & Developers" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FEATURED PROJECTS CASE STUDIES (ALAZAR.DEV SPLIT ARTICLE PATTERN)       */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#121417] relative" id="projects">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#26282D]">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span>Featured Engineering Practice</span>
              </div>
              <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl tracking-tight text-[#EAEAEA]">
                Projects<span className="text-[#D4AF37]">.</span>
              </h2>
            </div>
            <Link 
              to="/projects" 
              className="rounded-full border border-[#333] bg-[#181A1E] text-[#EAEAEA] hover:border-[#D4AF37] hover:text-[#D4AF37] px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 w-max"
            >
              Browse All Projects <ChevronRight size={14} />
            </Link>
          </div>

          <div className="space-y-8">
            {projects.slice(0, 3).map((proj) => {
              const softwareList = typeof proj.softwareUsed === 'string'
                ? JSON.parse(proj.softwareUsed || '[]')
                : (proj.softwareUsed || []);

              return (
                <article 
                  key={proj.id}
                  className="group grid overflow-hidden rounded-2xl border border-[#333]/80 bg-[#181A1E] md:grid-cols-2 shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  {/* Left Column Image */}
                  <div className="relative overflow-hidden border-b border-[#333]/80 md:border-b-0 md:border-r min-h-[280px]">
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04] grayscale opacity-85 group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="rounded-full bg-[#121417]/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-md">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 text-[9px] font-mono text-[#9CA3AF] bg-[#121417]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#333]">
                      PE-SE SEALED · {proj.year}
                    </div>
                  </div>

                  {/* Right Column Content */}
                  <div className="flex flex-col gap-4 p-6 md:p-8 justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[#9CA3AF] text-xs uppercase tracking-[0.2em] mb-1">
                        <span className="text-[#D4AF37] flex items-center gap-1">
                          <MapPin size={12} /> {proj.location}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{proj.year}</span>
                      </div>
                      
                      <h3 className="font-medium text-xl md:text-2xl text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
                        {proj.title}
                      </h3>
                      
                      <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-4">
                        {proj.description}
                      </p>

                      <ul className="space-y-1.5 text-[#9CA3AF] text-xs mb-4">
                        <li className="flex gap-2">
                          <span aria-hidden="true" className="text-[#D4AF37] font-bold">—</span>
                          <span><strong className="text-[#EAEAEA]">System:</strong> {proj.structuralSystem}</span>
                        </li>
                        <li className="flex gap-2">
                          <span aria-hidden="true" className="text-[#D4AF37] font-bold">—</span>
                          <span><strong className="text-[#EAEAEA]">Result:</strong> {proj.result}</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {softwareList.slice(0, 4).map((soft) => (
                          <span 
                            key={soft}
                            className="inline-flex items-center rounded-full border border-[#333] bg-[#121417] px-2.5 py-0.5 font-mono text-[10px] text-[#D4AF37]"
                          >
                            {soft}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#2D3137] flex items-center justify-between">
                      <button
                        onClick={() => setSelectedCaseStudy(proj)}
                        className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        Explore Case Study <ArrowUpRight size={13} />
                      </button>
                      <Link 
                        to={`/projects/${proj.slug || 'nexus-commercial-tower'}`}
                        className="text-[11px] font-mono text-[#9CA3AF] hover:text-[#D4AF37] uppercase tracking-wider flex items-center gap-1"
                      >
                        Dedicated Page →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7.5 INTERACTIVE CAD & FEA BLUEPRINT INSPECTOR                             */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#181A1E] border-t border-b border-[#333] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#121417] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Multi-Layer CAD Telemetry Board
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
              Interactive Drawing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Dossier & FEA Inspector.</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles with certified code verification markers.
            </p>
          </div>

          <BlueprintInspector />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ENGINEERING EDUCATION: "WHAT STRUCTURAL ENGINEERS DO"                  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#181A1E] border-t border-b border-[#333] relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Demystifying Structural Mechanics
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
              What Does a Structural Engineer Actually Do?
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              If an architect decides what a building looks like and how people live inside it, the structural engineer calculates how physics, gravity, wind, and earthquakes interact with the structure so it remains completely safe for generations.
            </p>
          </div>

          {/* Education Sub-Navigation (Alazar pill bar) */}
          <div className="flex flex-wrap gap-2 mb-10 bg-[#181A1E] p-2 rounded-2xl border border-[#333]/80 w-max shadow-lg">
            <button
              onClick={() => setActiveEducationTab('roles')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'roles'
                  ? 'bg-[#D4AF37] text-[#121417] shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-105'
                  : 'text-[#9CA3AF] hover:text-[#EAEAEA] hover:bg-[#121417]'
              }`}
            >
              Architect vs Engineer vs Builder
            </button>
            <button
              onClick={() => setActiveEducationTab('loadpath')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'loadpath'
                  ? 'bg-[#D4AF37] text-[#121417] shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-105'
                  : 'text-[#9CA3AF] hover:text-[#EAEAEA] hover:bg-[#121417]'
              }`}
            >
              How Loads Flow (Physics of Safety)
            </button>
            <button
              onClick={() => setActiveEducationTab('when')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'when'
                  ? 'bg-[#D4AF37] text-[#121417] shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-105'
                  : 'text-[#9CA3AF] hover:text-[#EAEAEA] hover:bg-[#121417]'
              }`}
            >
              When Do You Need an Engineer?
            </button>
          </div>

          {/* Tab 1: Roles Comparison (Alazar Bento 3-Card Grid) */}
          {activeEducationTab === 'roles' && (
            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="rounded-2xl bg-[#121417] border border-[#333]/80 p-8 flex flex-col justify-between shadow-xl hover:border-[#D4AF37]/40 transition-all">
                <div>
                  <div className="w-12 h-12 bg-[#181A1E] border border-[#333] text-[#9CA3AF] flex items-center justify-center mb-6 rounded-xl shadow-md">
                    <Compass size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Spatial Design</span>
                  <h3 className="text-xl font-bold text-[#EAEAEA] mb-3">The Architect</h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                    Focuses on the human experience, exterior aesthetics, room layouts, natural lighting, ADA code circulation, and building facades.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#2D3137] text-[11px] text-[#9CA3AF]">
                  <strong className="text-[#EAEAEA] block mb-1">Key Deliverable:</strong>
                  Architectural floor plans, exterior renderings & zoning permits.
                </div>
              </div>

              <div className="rounded-2xl bg-[#181A1E] border-2 border-[#D4AF37] p-8 relative flex flex-col justify-between shadow-[0_0_30px_rgba(212,175,55,0.18)]">
                <div className="absolute -top-3 right-6 bg-[#D4AF37] text-[#121417] text-[10px] font-mono font-extrabold uppercase px-3 py-0.5 tracking-wider rounded-full shadow-md">
                  Our Discipline
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mb-6 rounded-xl shadow-md">
                    <ShieldCheck size={26} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider block mb-1">Physics & Stability</span>
                  <h3 className="text-xl font-bold text-[#EAEAEA] mb-3">The Structural Engineer</h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                    Calculates how massive gravitational loads, hurricane winds, and earthquake ground shocks travel safely into the foundation without cracking or deflecting.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D4AF37]/30 text-[11px] text-[#D4AF37]">
                  <strong className="text-[#EAEAEA] block mb-1">Key Deliverable:</strong>
                  Stamped structural calculations, framing plans, beam/column schedules & PE/SE seals.
                </div>
              </div>

              <div className="rounded-2xl bg-[#121417] border border-[#333]/80 p-8 flex flex-col justify-between shadow-xl hover:border-[#D4AF37]/40 transition-all">
                <div>
                  <div className="w-12 h-12 bg-[#181A1E] border border-[#333] text-[#9CA3AF] flex items-center justify-center mb-6 rounded-xl shadow-md">
                    <Hammer size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Physical Execution</span>
                  <h3 className="text-xl font-bold text-[#EAEAEA] mb-3">The General Contractor</h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                    Manages on-site sub-trades, pours the specified concrete mix, erects steel frames, and brings the structural drawings into physical reality.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#2D3137] text-[11px] text-[#9CA3AF]">
                  <strong className="text-[#EAEAEA] block mb-1">Key Deliverable:</strong>
                  Physical building construction, daily safety oversight & trade scheduling.
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Load Path Visualization */}
          {activeEducationTab === 'loadpath' && (
            <div className="rounded-2xl bg-[#121417] border border-[#333]/80 p-8 lg:p-10 shadow-2xl">
              <div className="flex flex-wrap gap-2 mb-8 bg-[#181A1E] p-1.5 rounded-xl border border-[#333] w-max">
                <button
                  onClick={() => setActiveLoadPath('gravity')}
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg transition-all ${
                    activeLoadPath === 'gravity' ? 'bg-[#D4AF37] text-[#121417] shadow-sm' : 'text-[#9CA3AF] hover:text-[#EAEAEA]'
                  }`}
                >
                  1. Downward Gravity Loads
                </button>
                <button
                  onClick={() => setActiveLoadPath('lateral')}
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg transition-all ${
                    activeLoadPath === 'lateral' ? 'bg-[#D4AF37] text-[#121417] shadow-sm' : 'text-[#9CA3AF] hover:text-[#EAEAEA]'
                  }`}
                >
                  2. Lateral Hurricane & Seismic Loads
                </button>
              </div>

              {activeLoadPath === 'gravity' ? (
                <div>
                  <h4 className="text-lg font-bold text-[#EAEAEA] mb-3">The Gravity Load Journey</h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                    Every kilogram of building weight and live occupancy load must follow an unbroken mechanical path down into solid ground. If any link in this chain fails, localized collapse occurs:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                    <div className="rounded-xl bg-[#181A1E] border border-[#333] p-4 shadow-sm">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">STAGE 1</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Floor Slabs</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Receives people & equipment</p>
                    </div>
                    <div className="rounded-xl bg-[#181A1E] border border-[#333] p-4 shadow-sm">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">STAGE 2</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Beams & Girders</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Transfers load horizontally</p>
                    </div>
                    <div className="rounded-xl bg-[#181A1E] border border-[#333] p-4 shadow-sm">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">STAGE 3</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Columns / Walls</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Channels load downward</p>
                    </div>
                    <div className="rounded-xl bg-[#181A1E] border border-[#333] p-4 shadow-sm">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">STAGE 4</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Deep Caissons</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Distributes foundation pressure</p>
                    </div>
                    <div className="rounded-xl bg-[#181A1E] border border-[#D4AF37]/50 p-4 shadow-sm">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">FINAL</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Solid Bedrock</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Permanent reaction support</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-bold text-[#EAEAEA] mb-3">The Lateral Seismic & Wind Dissipation Path</h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                    When 140mph hurricane winds blow or earthquakes shake the ground, horizontal shear tries to twist and slide the structure. Structural engineers design the lateral force resisting system (LFRS):
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="rounded-xl bg-[#181A1E] border border-[#333] p-5 shadow-sm">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">1. Floor Diaphragms</h5>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">Act as giant horizontal deep beams, collecting wind pressure from exterior facades and channeling it to the core.</p>
                    </div>
                    <div className="rounded-xl bg-[#181A1E] border border-[#333] p-5 shadow-sm">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">2. Reinforced Concrete Core</h5>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">Heavy shear wall core acts as a vertical cantilever beam that resists overturning moments.</p>
                    </div>
                    <div className="rounded-xl bg-[#181A1E] border border-[#333] p-5 shadow-sm">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">3. Outrigger Belt Trusses</h5>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">Couples the core to perimeter columns, activating push-pull resistance and damping vibrations.</p>
                    </div>
                    <div className="rounded-xl bg-[#181A1E] border border-[#333] p-5 shadow-sm">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">4. Foundation Tiebacks</h5>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">Deep tension anchors prevent the building from uprooting during extreme ground motions.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: When Do You Need an Engineer? (Bento Grid) */}
          {activeEducationTab === 'when' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Removing Load-Bearing Walls', desc: 'Removing an interior wall requires calculating weight transfer to engineered steel beams so the upper roof does not sag.' },
                { title: 'Adding Stories or Roof Decks', desc: 'Every added floor multiplies foundation dead load. An engineer verifies if existing columns can handle the new weight.' },
                { title: 'Foundation Cracks & Settlement', desc: 'Differential settlement can tear drywall and jam doors. Engineers diagnose whether the issue is soil creep or shear failure.' },
                { title: 'Commercial & Multi-Family Permitting', desc: 'City building departments legally mandate certified PE/SE structural calculation packages before granting permits.' },
                { title: 'Seismic Retrofitting', desc: 'Older buildings built before 1994 require seismic damping upgrades to prevent brittle joint fracture during earthquakes.' },
                { title: 'Third-Party Peer Reviews', desc: 'Developers hire independent engineers to verify calculations and eliminate redundant concrete/steel, saving millions.' }
              ].map((item, idx) => (
                <div key={idx} className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 shadow-xl hover:border-[#D4AF37]/50 transition-all">
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono font-bold uppercase mb-2">
                    <CheckCircle2 size={15} /> Case 0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#EAEAEA] mb-2 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CLIENT TRUST & TESTIMONIALS                                            */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#121417]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Industry Endorsements
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight">Client Trust & Testimonials</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-8 sm:p-10 relative flex flex-col justify-between shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300">
                <Quote className="text-[#2A2E35] w-14 h-14 absolute top-6 right-6 pointer-events-none group-hover:text-[#D4AF37]/20 transition-colors" />
                <p className="text-[#EAEAEA] text-sm sm:text-base leading-relaxed mb-8 relative z-10 italic font-light">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4 border-t border-[#2D3137] pt-6">
                  <div className="w-12 h-12 bg-[#121417] border-2 border-[#D4AF37]/60 rounded-full overflow-hidden flex items-center justify-center font-bold text-[#D4AF37] text-sm shadow-md">
                    {t.avatarUrl ? (
                      <img src={t.avatarUrl} alt={t.clientName} className="w-full h-full object-cover" />
                    ) : (
                      t.clientName.slice(0, 2)
                    )}
                  </div>
                  <div>
                    <h5 className="text-[#EAEAEA] font-bold text-sm">{t.clientName}</h5>
                    <p className="text-[#9CA3AF] text-xs uppercase tracking-wider">{t.clientRole}, {t.clientCompany}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. LATEST ENGINEERING INSIGHTS                                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#181A1E] border-t border-[#333]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Publications
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight">Technical Notes & Articles</h3>
            </div>
            <Link to="/insights" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors flex items-center gap-2">
              Browse All Articles <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((article, i) => (
              <Link 
                key={i} 
                to={`/insights/${article.slug || 'innovations-high-strength-c80-concrete'}`} 
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#121417] border border-[#333]/80 hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)]"
              >
                <div>
                  <div className="p-3 bg-[#181A1E] text-[#D4AF37] border border-[#333] w-max mb-4 rounded-xl shadow-sm">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest block mb-2">{article.category} • {article.date || 'Oct 2026'}</span>
                  <h5 className="text-base font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-4">{article.title}</h5>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] group-hover:text-[#D4AF37] flex items-center gap-1 pt-4 border-t border-[#222]">
                  Read Technical Paper <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10.5 VALUE ENGINEERING & CARBON OFFSET CALCULATOR                         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#181A1E] border-t border-[#333] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#121417] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Optimization Feasibility Model
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
              Value Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Embodied Carbon Estimator.</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Estimate potential structural cost reductions, concrete volume conservation, and schedule acceleration achieved through advanced finite element redistribution and post-tensioning.
            </p>
          </div>

          <ValueEngineeringCalculator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CONTACT BENTO STRIP (SIGNATURE ALAZAR.DEV CONTACT PATTERN)             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#121417] border-t border-[#333]" id="contact">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Consultation & Engagement
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#EAEAEA] tracking-tight">
              Have Questions? <span className="text-[#D4AF37]">Get in Touch!</span>
            </h2>
          </div>

          {/* 3-Bento Contact Strip (Alazar's exact hairline-divided grid container) */}
          <div className="relative mb-10">
            <div aria-hidden="true" className="pointer-events-none absolute h-px bg-[#333] -top-px left-0 right-0"></div>
            <div className="grid gap-px overflow-hidden bg-[#2D3137] rounded-2xl border border-[#333] md:grid-cols-3">
              {/* Card 1: Email */}
              <a 
                href="mailto:consult@alexandre-structural.com" 
                className="flex items-center gap-3 bg-[#181A1E] p-5 shadow-xs transition-colors hover:bg-[#1f2227] group"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5 overflow-hidden">
                  <h4 className="text-sm font-bold text-[#EAEAEA]">Send an Email</h4>
                  <p className="text-xs font-mono text-[#9CA3AF] truncate group-hover:text-[#D4AF37] transition-colors">consult@alexandre-structural.com</p>
                </div>
              </a>

              {/* Card 2: Phone */}
              <a 
                href="tel:+15550198472" 
                className="flex items-center gap-3 bg-[#181A1E] p-5 shadow-xs transition-colors hover:bg-[#1f2227] group"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h4 className="text-sm font-bold text-[#EAEAEA]">Call Direct</h4>
                  <p className="text-xs font-mono text-[#9CA3AF] group-hover:text-[#D4AF37] transition-colors">+1 (555) 019-8472</p>
                </div>
              </a>

              {/* Card 3: Location */}
              <div className="flex items-center gap-3 bg-[#181A1E] p-5 shadow-xs">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h4 className="text-sm font-bold text-[#EAEAEA]">Office Headquarters</h4>
                  <p className="text-xs font-mono text-[#9CA3AF]">New York, NY (EST · GMT-5)</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute h-px bg-[#333] -bottom-px left-0 right-0"></div>
          </div>

          {/* Full Consultation Trigger Banner */}
          <div className="bg-gradient-to-r from-[#181A1E] via-[#14161A] to-[#181A1E] border border-[#333]/80 p-8 sm:p-10 rounded-3xl text-center flex flex-col sm:flex-row justify-between items-center gap-6 shadow-2xl">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#EAEAEA] mb-1.5">Ready to Evaluate Your Project's Structural Integrity?</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">Submit project drawings, lateral load requirements, or request a third-party peer review.</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] shrink-0 flex items-center gap-2 active:scale-95"
            >
              Initiate Inquiry <ArrowUpRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <CaseStudyModal project={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
      )}

      {/* INTRO VIDEO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#181A1E] border border-[#D4AF37] p-2 rounded-xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-[#EAEAEA] hover:text-[#D4AF37]"
            >
              <X size={28} />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={settings.introVideoUrl}
                title="Structural Engineering Professional Intro"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
