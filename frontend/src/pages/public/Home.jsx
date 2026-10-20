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
  Layers3, 
  ArrowRight,
  Star,
  MessageSquareQuote
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { StatCounter } from '../../components/engineering/StatCounter';
import { ProjectCard } from '../../components/engineering/ProjectCard';
import { EngineeringCanvas } from '../../components/engineering/EngineeringCanvas';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { Moveable3DHeroCards } from '../../components/engineering/Moveable3DHeroCards';
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
  const [selectedTestimonialCategory, setSelectedTestimonialCategory] = useState('All');
  const testimonialCategories = ['All', 'Architects', 'Developers', 'Civic Infrastructure'];

  // Dynamic Rotating Pill Text
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
      heroHeadlineLine1: 'Resilient Structures.',
      heroHeadlineAccent: 'Clear',
      heroHeadlineLine2: 'Engineering.',
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
  const projects = (projectsData?.projects && projectsData.projects.length > 0) ? projectsData.projects : [
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

  const services = (servicesData?.services && servicesData.services.length > 0) ? servicesData.services : [
    { icon: 'Building2', title: 'Structural Analysis & Design', summary: 'Advanced linear & non-linear 3D modeling for high-rise towers, commercial centers, and civic buildings.' },
    { icon: 'Layers', title: 'Reinforced Concrete & Steel', summary: 'Specialized connection detailing, post-tensioned slab calculations, and structural steel optimization.' },
    { icon: 'ShieldCheck', title: 'Seismic Retrofit & Evaluation', summary: 'Structural integrity auditing, non-destructive testing, dynamic pushover analysis, and dampening retrofits.' },
    { icon: 'Ruler', title: 'Peer Review & Consultation', summary: 'Third-party calculation verification, cost value engineering, and constructability advisory.' }
  ];

  const defaultTestimonials = [
    {
      id: '1',
      clientName: 'Sarah Jenkins, AIA',
      clientRole: 'Principal Architect',
      clientCompany: 'ArchiTech Global Design',
      category: 'Architects',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content: 'Alexandre’s approach to the foundation redesign on the Nexus Tower saved us 4 months of schedule time while exceeding safety margins. A true master of structural elegance.',
      rating: 5,
      projectRef: 'Nexus Commercial Tower (52-Story)'
    },
    {
      id: '2',
      clientName: 'Marcus Vance',
      clientRole: 'VP of Development',
      clientCompany: 'Apex Commercial Properties',
      category: 'Developers',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      content: 'Unmatched technical depth and clear communication. He translates complex structural mechanics into actionable insights that non-engineers can confidently execute.',
      rating: 5,
      projectRef: 'Horizon Logistics Distribution Center'
    },
    {
      id: '3',
      clientName: 'David Sterling, P.E.',
      clientRole: 'Chief Infrastructure Officer',
      clientCompany: 'State Transit Authority',
      category: 'Civic Infrastructure',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'His non-linear seismic pushover analysis on the Avalon Suspension Bridge retrofitting plan saved millions in unnecessary material replacement while guaranteeing 120-year structural durability.',
      rating: 5,
      projectRef: 'Avalon River Suspension Bridge'
    }
  ];

  const testimonials = (testimonialsData?.testimonials && testimonialsData.testimonials.length > 0) ? testimonialsData.testimonials : defaultTestimonials;

  const filteredTestimonials = testimonials.filter(t => {
    if (selectedTestimonialCategory === 'All') return true;
    if (t.category === selectedTestimonialCategory) return true;
    if (selectedTestimonialCategory === 'Architects' && (t.clientRole?.toLowerCase().includes('architect') || t.clientCompany?.toLowerCase().includes('design'))) return true;
    if (selectedTestimonialCategory === 'Developers' && (t.clientRole?.toLowerCase().includes('development') || t.clientCompany?.toLowerCase().includes('properties'))) return true;
    if (selectedTestimonialCategory === 'Civic Infrastructure' && (t.clientRole?.toLowerCase().includes('infrastructure') || t.clientCompany?.toLowerCase().includes('transit') || t.clientRole?.toLowerCase().includes('officer'))) return true;
    return false;
  });

  const insights = (insightsData?.insights && insightsData.insights.length > 0) ? insightsData.insights : [
    { title: 'Innovations in High-Strength C80 Concrete Formulations', slug: 'innovations-high-strength-c80-concrete', category: 'Materials Science', date: 'Oct 12, 2026' },
    { title: 'Seismic Retrofitting Strategies for Pre-1980 Structural Steel Frame Buildings', slug: 'seismic-retrofitting-pre-1980-steel-frames', category: 'Seismic Design', date: 'Sep 28, 2026' },
    { title: 'Optimizing Wind Damping Outrigger Systems in 50+ Story Skyscrapers', slug: 'optimizing-wind-damping-outrigger-systems', category: 'High-Rise Analysis', date: 'Aug 15, 2026' }
  ];

  // Marquee tools and building codes
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
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-center items-center py-24 sm:py-32 px-4 sm:px-6 overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FAF9F6] dark:bg-[#121417]">
        
        {/* Hardware-Accelerated 3D Three.js Wireframe Structural Tower */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden select-none">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
            alt="Structural engineering studio background" 
            className="w-full h-full object-cover opacity-5 dark:opacity-10 filter blur-[0.5px] scale-105 pointer-events-none" 
          />
          {/* Subtle Ambient Studio Light */}
          <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/8 dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-zinc-200/40 dark:bg-[#801834]/12 blur-[120px] animate-aurora-drift-2 pointer-events-none"></div>
          
          {/* 3D Interactive Three.js High-Rise Model */}
          <div className="absolute inset-0 z-0 opacity-80 dark:opacity-90">
            <Hero3DCanvas />
          </div>

          {/* Frosted Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/95 dark:from-[#121417]/50 dark:via-transparent dark:to-[#121417]/95 pointer-events-none"></div>
        </div>

        {/* 3D Moveable Floating Architectural & Engineering Cards (Draggable in 3D Space) */}
        <Moveable3DHeroCards />

        {/* Floating Translucent Accent Ring */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-[28%] left-[16%] sm:left-[24%] w-4 h-4 rounded-full border-2 border-zinc-400/40 dark:border-zinc-500/40 bg-zinc-300/30 dark:bg-zinc-600/20 backdrop-blur-xs animate-pulse hidden sm:block z-10"
        />

        {/* Hero Content Container */}
        <div className="relative z-30 max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-5 sm:gap-7 pointer-events-none px-4">
          
          {/* Spatial 3D Studio Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 shadow-sm pointer-events-auto"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>3D Spatial Studio · Moveable Elements</span>
          </motion.div>

          {/* Main Giant Bold Headline with 3D Depth */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-1 sm:space-y-2 pointer-events-auto"
          >
            <h1 className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.2rem] tracking-tight leading-[1.06] text-zinc-900 dark:text-zinc-100 select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]">
              {settings.heroHeadlineLine1 || 'Resilient Structures.'}{' '}
              <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                {settings.heroHeadlineAccent || 'Clear'}
              </span>
              <br />
              <span className="text-[#801834] dark:text-[#E84855] opacity-90 inline-block drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                {settings.heroHeadlineLine2 || 'Engineering.'}
              </span>
            </h1>
          </motion.div>

          {/* Frosted Glassmorphic Description Pill Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto rounded-3xl bg-white dark:bg-[#181A1E]/90 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-700/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.5)] px-6 sm:px-10 py-5 sm:py-6 pointer-events-auto"
          >
            <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base md:text-lg leading-relaxed text-center">
              {settings.heroBio || 'Ensuring structural integrity, seismic safety, and architectural elegance for high-rise towers, infrastructure bridges, and complex commercial developments.'}
            </p>
          </motion.div>

          {/* Dual Pill Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 pt-2 pointer-events-auto"
          >
            {/* Primary Filled Pill Button */}
            <button
              onClick={() => navigate('/projects')}
              className="rounded-full bg-[#801834] hover:bg-[#68132a] active:scale-95 text-white px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(128,24,52,0.35)] hover:shadow-[0_14px_32px_rgba(128,24,52,0.5)] flex items-center gap-2 group cursor-pointer"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Frosted White Pill Button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="rounded-full bg-white dark:bg-[#181A1E] text-[#801834] dark:text-[#E84855] border border-rose-200/90 dark:border-zinc-700 hover:bg-rose-50/60 dark:hover:bg-zinc-800 active:scale-95 px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_15px_rgba(128,24,52,0.06)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.4)] flex items-center gap-2 cursor-pointer"
            >
              <span>WATCH SHOWREEL</span>
              <Play size={13} className="fill-[#801834] dark:fill-[#E84855]" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INFINITE MARQUEE TICKER                                                */}
      {/* ========================================================================= */}
      <section aria-label="Software Stack & Standards" className="border-y border-zinc-200/80 dark:border-zinc-800 bg-[#F8F9FA] dark:bg-[#15171B] py-4 overflow-hidden transition-colors">
        <div className="mx-auto max-w-6xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="overflow-hidden">
            <div className="animate-marquee flex items-center gap-10">
              {techMarquee.concat(techMarquee).map((tool, idx) => (
                <span 
                  key={idx} 
                  className="group flex items-center gap-2 whitespace-nowrap font-mono text-zinc-700 dark:text-[#9CA3AF] text-xs uppercase tracking-wider transition-colors hover:text-[#801834] dark:hover:text-[#D4AF37]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#801834]/70 dark:bg-[#D4AF37]/60 group-hover:bg-[#801834] dark:group-hover:bg-[#D4AF37]"></span>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BENTO GRID CORE DISCIPLINES ("ANALYZE. CALCULATE. DELIVER.")            */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-white dark:bg-[#121417] relative transition-colors border-b border-zinc-200/80 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-[#EAEAEA]">
              Analyze<span className="text-[#801834] dark:text-[#D4AF37]">.</span> Calculate<span className="text-[#801834] dark:text-[#D4AF37]">.</span> Deliver<span className="text-[#801834] dark:text-[#D4AF37]">.</span>
            </h2>
            <p className="mt-4 text-balance text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Precision structural mechanics and finite element performance simulation for buildings and infrastructure designed to withstand extreme wind and seismic forces.
            </p>
          </div>

          <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
            
            {/* Bento Card 1: High-Rise Lateral Stability (Col 1-2) */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-[#181A1E] px-8 pt-8 pb-6 md:col-span-2 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(128,24,52,0.05)] dark:shadow-xl">
              <div className="relative mx-auto flex size-28 items-center justify-center rounded-full border-4 border-dashed border-[#801834]/30 dark:border-[#D4AF37]/40 bg-[#FAF0F3] dark:bg-[#121417] shadow-xs outline outline-zinc-200 dark:outline-[#333] outline-offset-4 group-hover:scale-105 transition-transform mb-6">
                <div className="absolute inset-0 z-10 scale-125 bg-radial from-[#801834]/15 dark:from-[#D4AF37]/25 via-transparent to-transparent blur-xl"></div>
                <Building2 size={36} className="text-[#801834] dark:text-[#D4AF37] relative z-20" />
              </div>
              <div className="relative mt-2 space-y-1.5 text-center">
                <h3 className="font-semibold text-zinc-900 dark:text-[#EAEAEA] text-lg">High-Rise Lateral Stability</h3>
                <p className="text-zinc-600 dark:text-[#9CA3AF] text-xs leading-relaxed">
                  Dual core shear walls, perimeter belt trusses, and aerodynamic damping suppressing lateral drift in skyscrapers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-[#2D3137] text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] text-center uppercase tracking-widest font-semibold">
                ETABS · ASCE 7-22 Wind Tunnel
              </div>
            </div>

            {/* Bento Card 2: Non-Linear Seismic Modeling (Col 3-4) */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-[#181A1E] px-8 pt-8 pb-6 md:col-span-2 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(128,24,52,0.05)] dark:shadow-xl">
              <div className="relative mx-auto flex size-28 items-center justify-center rounded-full border border-[#801834]/30 dark:border-[#D4AF37]/40 bg-[#FAF0F3] dark:bg-[#121417] shadow-xs outline outline-zinc-200 dark:outline-[#333] outline-offset-4 group-hover:scale-105 transition-transform mb-6">
                <div className="absolute inset-0 z-10 scale-125 bg-radial from-[#801834]/15 dark:from-[#D4AF37]/25 via-transparent to-transparent blur-xl"></div>
                <Activity size={36} className="text-[#801834] dark:text-[#D4AF37] relative z-20" />
              </div>
              <div className="relative mt-2 space-y-1.5 text-center">
                <h3 className="font-semibold text-zinc-900 dark:text-[#EAEAEA] text-lg">Non-Linear Seismic Modeling</h3>
                <p className="text-zinc-600 dark:text-[#9CA3AF] text-xs leading-relaxed">
                  Dynamic response spectrum history analysis, viscous damper dissipation, and pushover assessments per FEMA P-58.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-[#2D3137] text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] text-center uppercase tracking-widest font-semibold">
                SAP2000 · Base Isolation
              </div>
            </div>

            {/* Bento Card 3: Value Engineering Sparkline Graph (Col 5-6) */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-[#181A1E] px-8 pt-8 pb-6 sm:col-span-2 md:col-span-2 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(128,24,52,0.05)] dark:shadow-xl">
              <div className="min-h-28 relative flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#FAF0F3] dark:bg-[#D4AF37]/10 text-[#801834] dark:text-[#D4AF37] border border-[#801834]/20 dark:border-[#D4AF37]/30">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="font-mono text-xs font-bold text-zinc-900 dark:text-[#EAEAEA]">100% Safety Record</div>
                </div>
                {/* Sparkline SVG Curve */}
                <svg fill="none" viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" className="translate-x-[5%] -rotate-1 scale-125 opacity-80 group-hover:opacity-100 transition-opacity my-2">
                  <path d="M3 90 C 45 60, 75 80, 110 40 C 145 10, 180 70, 220 30 C 255 10, 280 25, 298 15" stroke="#801834" className="dark:stroke-[#D4AF37]" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M3 90 C 45 60, 75 80, 110 40 C 145 10, 180 70, 220 30 C 255 10, 280 25, 298 15 L298 110 L3 110 Z" fill="url(#goldGradBento)" opacity="0.15" />
                  <defs>
                    <linearGradient id="goldGradBento" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#801834" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative z-10 mt-2 space-y-1.5 text-center">
                <h3 className="font-semibold text-zinc-900 dark:text-[#EAEAEA] text-lg">Value Engineering</h3>
                <p className="text-zinc-600 dark:text-[#9CA3AF] text-xs leading-relaxed">
                  Post-tensioning and optimized finite element redistribution saving 20-30% concrete mass and steel tonnage.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-[#2D3137] text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] text-center uppercase tracking-widest font-semibold">
                Peer Review · Quantity Audits
              </div>
            </div>

            {/* Bento Card 4: Full-Width 6-Col Bottom Showcase */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-[#181A1E] sm:col-span-2 md:col-span-6 p-0 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_8px_30px_rgba(128,24,52,0.05)] dark:shadow-xl">
              <div className="grid h-full sm:grid-cols-2 items-center">
                <div className="relative z-10 space-y-6 py-8 ps-8 pe-6">
                  <div className="flex size-12 items-center justify-center rounded-full border border-[#801834]/20 dark:border-[#D4AF37]/30 bg-[#FAF0F3] dark:bg-[#121417] shadow-xs outline outline-zinc-200 dark:outline-[#333] outline-offset-2">
                    <Ruler size={20} className="text-[#801834] dark:text-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-zinc-900 dark:text-[#EAEAEA] text-xl">3D Finite Element Simulation</h3>
                    <p className="text-zinc-600 dark:text-[#9CA3AF] text-xs sm:text-sm leading-relaxed max-w-md">
                      From ETABS building wind tunnel integration to Midas Civil bridge span dynamic response, calculations adhere to the highest international seismic and structural performance criteria.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-3 py-1 font-mono text-[10px] text-zinc-700 dark:text-[#D4AF37] uppercase font-semibold">ASCE 7-22</span>
                    <span className="rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-3 py-1 font-mono text-[10px] text-zinc-700 dark:text-[#D4AF37] uppercase font-semibold">IBC 2024</span>
                    <span className="rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-3 py-1 font-mono text-[10px] text-zinc-700 dark:text-[#D4AF37] uppercase font-semibold">ACI 318-19</span>
                    <span className="rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-3 py-1 font-mono text-[10px] text-zinc-700 dark:text-[#D4AF37] uppercase font-semibold">AISC 360</span>
                  </div>
                </div>
                <div className="relative aspect-video sm:aspect-auto h-full min-h-[240px] overflow-hidden p-6 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-200 dark:border-[#333] bg-[#FAF0F3] dark:bg-[#121417] shadow-md dark:shadow-2xl group-hover:border-[#801834]/40 dark:group-hover:border-[#D4AF37]/50 transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80" 
                      alt="Structural FEA Simulation" 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-[#121417]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#333] font-mono text-[10px] text-[#801834] dark:text-[#D4AF37] flex items-center gap-2 shadow-sm font-semibold">
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
      <section className="py-20 md:py-28 bg-[#F8F9FA] dark:bg-[#14161A] border-t border-b border-zinc-200/80 dark:border-zinc-800 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-[#D4AF37]/40 bg-white dark:bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37] animate-pulse"></span>
              Live Dynamic Mechanics Simulation
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Real-Time Lateral & Seismic <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">Load Path.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Explore how wind aerodynamic drift, non-linear seismic ground motions, and gravitational vectors propagate through reinforced concrete cores and outrigger belt trusses down into bedrock.
            </p>
          </div>

          <LoadPathSimulator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT ME SECTION                                                       */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white dark:bg-[#121417] border-b border-zinc-200/80 dark:border-zinc-800 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Decorative Outer Mask Frame */}
                <div aria-hidden="true" className="-inset-4 absolute rounded-[2rem] border border-[#801834]/20 dark:border-[#D4AF37]/25 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>

                <div className="relative border border-zinc-200/90 dark:border-[#333]/80 p-2.5 bg-white dark:bg-[#121417] rounded-2xl shadow-lg dark:shadow-2xl group hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div className="aspect-[4/5] bg-zinc-100 dark:bg-[#121417] overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                      alt="Alexandre Senior Structural Engineer"
                      className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#121417]/95 border border-zinc-200 dark:border-[#D4AF37]/60 p-4 text-xs font-mono rounded-xl shadow-md dark:shadow-xl backdrop-blur-md">
                    <div className="flex justify-between items-center text-[#801834] dark:text-[#D4AF37] font-bold uppercase tracking-wider mb-1">
                      <span>PE #84729-NY</span>
                      <span>SE #92041-CA</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 dark:text-[#9CA3AF] uppercase tracking-widest block">Licensed Structural Engineer & ASCE Fellow</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-zinc-50 dark:bg-[#121417] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-xs w-max font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#801834] dark:bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#801834] dark:bg-[#D4AF37]"></span>
                </span>
                Professional Background
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
                Structural Engineering Behind Visionary Architecture.
              </h2>

              <p className="text-zinc-600 dark:text-[#9CA3AF] text-base leading-relaxed">
                With over 14 years of specialized structural practice across North America, I bridge the critical gap between audacious architectural imagination and uncompromising structural mechanics. My work ensures high-rise towers withstand extreme hurricane forces and heritage masonry survives intense seismic ground motion.
              </p>

              <div className="bg-zinc-50 dark:bg-[#121417] border-l-2 border-[#801834] dark:border-[#D4AF37] p-5 text-sm text-zinc-800 dark:text-[#EAEAEA] italic leading-relaxed rounded-r-xl border-y border-r border-zinc-200 dark:border-[#2D3137]">
                "Structural engineering should never be treated as an architectural limitation. When calculated with precision, physics becomes the catalyst that enables daring, column-free spaces."
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-[#121417] p-4 border border-zinc-200/90 dark:border-[#333]/80 rounded-2xl shadow-xs">
                  <GraduationCap className="text-[#801834] dark:text-[#D4AF37] w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-900 dark:text-[#EAEAEA] font-bold block">M.S. Structural Engineering</span>
                    <span className="text-[10px] text-zinc-500 dark:text-[#9CA3AF]">Columbia University</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-zinc-50 dark:bg-[#121417] p-4 border border-zinc-200/90 dark:border-[#333]/80 rounded-2xl shadow-xs">
                  <ShieldCheck className="text-[#801834] dark:text-[#D4AF37] w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-900 dark:text-[#EAEAEA] font-bold block">100% Safety Compliance</span>
                    <span className="text-[10px] text-zinc-500 dark:text-[#9CA3AF]">Zero Audit Deficiencies</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about"
                  className="rounded-full bg-[#801834] text-white hover:bg-[#68132a] dark:bg-[#D4AF37] dark:text-[#121417] dark:hover:bg-white px-7 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(128,24,52,0.25)] flex items-center gap-2"
                >
                  Full Biography & Credentials <ArrowUpRight size={14} />
                </Link>
                <a
                  href="/resources"
                  className="rounded-full bg-white dark:bg-[#121417] text-zinc-800 dark:text-[#EAEAEA] border border-zinc-300 dark:border-[#333] hover:border-[#801834] dark:hover:border-[#D4AF37] hover:text-[#801834] dark:hover:text-[#D4AF37] px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
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
      <section className="py-24 bg-[#F8F9FA] dark:bg-[#14161A] relative transition-colors border-b border-zinc-200/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-[#801834] dark:text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#801834] dark:bg-[#D4AF37]"></span> Core Capabilities
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">Engineering Services</h3>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2">
              Explore All Services <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((srv, index) => (
              <div key={index} className="group rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.04)] dark:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/40 text-[#801834] dark:text-[#D4AF37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rounded-xl shadow-xs">
                    <Building2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-3 group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">{srv.title}</h4>
                  <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm leading-relaxed mb-6">{srv.summary || srv.description}</p>
                </div>
                <Link to="/services" className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-[#9CA3AF] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] flex items-center gap-1.5 pt-4 border-t border-zinc-200 dark:border-[#2D3137]">
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
      <section className="py-12 bg-white dark:bg-[#181A1E] border-b border-zinc-200/80 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter value={settings.yearsExp || '14+'} label="Years Experience" subtext="PE & SE Certified" />
          <StatCounter value={settings.projectsCount || '180+'} label="Projects Completed" subtext="High-Rise & Infrastructure" />
          <StatCounter value={settings.safetyRecord || '100%'} label="Structural Safety Record" subtext="Zero Critical Deficiencies" />
          <StatCounter value={settings.clientsCount || '50+'} label="Corporate Clients" subtext="Architects & Developers" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FEATURED PROJECTS CASE STUDIES                                         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-white dark:bg-[#121417] relative transition-colors border-b border-zinc-200/80 dark:border-zinc-800" id="projects">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-zinc-200/80 dark:border-[#26282D]">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#801834] dark:text-[#D4AF37] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37] animate-pulse"></span>
                <span>Featured Engineering Practice</span>
              </div>
              <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl tracking-tight text-zinc-900 dark:text-[#EAEAEA]">
                Projects<span className="text-[#801834] dark:text-[#D4AF37]">.</span>
              </h2>
            </div>
            <Link 
              to="/projects" 
              className="rounded-full border border-zinc-300 dark:border-[#333] bg-white dark:bg-[#181A1E] text-zinc-800 dark:text-[#EAEAEA] hover:border-[#801834] dark:hover:border-[#D4AF37] hover:text-[#801834] dark:hover:text-[#D4AF37] px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 w-max shadow-xs"
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
                  className="group grid overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 bg-white dark:bg-[#181A1E] md:grid-cols-2 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-2xl hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  {/* Left Column Image */}
                  <div className="relative overflow-hidden border-b border-zinc-200 dark:border-[#333]/80 md:border-b-0 md:border-r min-h-[280px]">
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04] grayscale opacity-85 group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="rounded-full bg-white/95 dark:bg-[#121417]/85 backdrop-blur-md text-[#801834] dark:text-[#D4AF37] border border-zinc-200/90 dark:border-[#D4AF37]/40 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 text-[9px] font-mono text-zinc-600 dark:text-[#9CA3AF] bg-white/95 dark:bg-[#121417]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-200 dark:border-[#333] shadow-xs">
                      PE-SE SEALED · {proj.year}
                    </div>
                  </div>

                  {/* Right Column Content */}
                  <div className="flex flex-col gap-4 p-6 md:p-8 justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-zinc-500 dark:text-[#9CA3AF] text-xs uppercase tracking-[0.2em] mb-1 font-semibold">
                        <span className="text-[#801834] dark:text-[#D4AF37] flex items-center gap-1">
                          <MapPin size={12} /> {proj.location}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{proj.year}</span>
                      </div>
                      
                      <h3 className="font-semibold text-xl md:text-2xl text-zinc-900 dark:text-[#EAEAEA] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
                        {proj.title}
                      </h3>
                      
                      <p className="text-zinc-600 dark:text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-4">
                        {proj.description}
                      </p>

                      <ul className="space-y-1.5 text-zinc-600 dark:text-[#9CA3AF] text-xs mb-4">
                        <li className="flex gap-2">
                          <span aria-hidden="true" className="text-[#801834] dark:text-[#D4AF37] font-bold">—</span>
                          <span><strong className="text-zinc-900 dark:text-[#EAEAEA]">System:</strong> {proj.structuralSystem}</span>
                        </li>
                        <li className="flex gap-2">
                          <span aria-hidden="true" className="text-[#801834] dark:text-[#D4AF37] font-bold">—</span>
                          <span><strong className="text-zinc-900 dark:text-[#EAEAEA]">Result:</strong> {proj.result}</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {softwareList.slice(0, 4).map((soft) => (
                          <span 
                            key={soft}
                            className="inline-flex items-center rounded-full border border-zinc-200 dark:border-[#333] bg-[#FAF0F3] dark:bg-[#121417] px-2.5 py-0.5 font-mono text-[10px] text-zinc-700 dark:text-[#D4AF37] shadow-2xs"
                          >
                            {soft}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-[#2D3137] flex items-center justify-between">
                      <button
                        onClick={() => setSelectedCaseStudy(proj)}
                        className="rounded-full bg-[#801834] text-white hover:bg-[#68132a] dark:bg-[#D4AF37] dark:text-[#121417] dark:hover:bg-white px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        Explore Case Study <ArrowUpRight size={13} />
                      </button>
                      <Link 
                        to={`/projects/${proj.slug || 'nexus-commercial-tower'}`}
                        className="text-[11px] font-mono text-zinc-500 dark:text-[#9CA3AF] hover:text-[#801834] dark:hover:text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 font-semibold"
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
      <section className="py-20 md:py-28 bg-[#F8F9FA] dark:bg-[#14161A] border-t border-b border-zinc-200/80 dark:border-zinc-800 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-[#D4AF37]/40 bg-white dark:bg-[#121417] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Multi-Layer CAD Telemetry Board
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Interactive Drawing <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">Dossier & FEA Inspector.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles with certified code verification markers.
            </p>
          </div>

          <BlueprintInspector />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ENGINEERING EDUCATION: "WHAT STRUCTURAL ENGINEERS DO"                  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white dark:bg-[#121417] border-b border-zinc-200/80 dark:border-zinc-800 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-[#801834] dark:text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Demystifying Structural Mechanics
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              What Does a Structural Engineer Actually Do?
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-base leading-relaxed">
              If an architect decides what a building looks like and how people live inside it, the structural engineer calculates how physics, gravity, wind, and earthquakes interact with the structure so it remains completely safe for generations.
            </p>
          </div>

          {/* Education Sub-Navigation */}
          <div className="flex flex-wrap gap-2 mb-10 bg-white dark:bg-[#181A1E] p-2 rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 w-max shadow-sm">
            <button
              onClick={() => setActiveEducationTab('roles')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'roles'
                  ? 'bg-[#801834] text-white shadow-sm dark:bg-[#D4AF37] dark:text-[#121417] scale-105'
                  : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA] hover:bg-zinc-100 dark:hover:bg-[#121417]'
              }`}
            >
              Architect vs Engineer vs Builder
            </button>
            <button
              onClick={() => setActiveEducationTab('loadpath')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'loadpath'
                  ? 'bg-[#801834] text-white shadow-sm dark:bg-[#D4AF37] dark:text-[#121417] scale-105'
                  : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA] hover:bg-zinc-100 dark:hover:bg-[#121417]'
              }`}
            >
              How Loads Flow (Physics of Safety)
            </button>
            <button
              onClick={() => setActiveEducationTab('when')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'when'
                  ? 'bg-[#801834] text-white shadow-sm dark:bg-[#D4AF37] dark:text-[#121417] scale-105'
                  : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA] hover:bg-zinc-100 dark:hover:bg-[#121417]'
              }`}
            >
              When Do You Need an Engineer?
            </button>
          </div>

          {/* Tab 1: Roles Comparison */}
          {activeEducationTab === 'roles' && (
            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="rounded-2xl bg-white dark:bg-[#121417] border border-zinc-200/90 dark:border-[#333]/80 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/40 transition-all">
                <div>
                  <div className="w-12 h-12 bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] text-zinc-600 dark:text-[#9CA3AF] flex items-center justify-center mb-6 rounded-xl shadow-2xs">
                    <Compass size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-[#9CA3AF] tracking-wider block mb-1 font-semibold">Spatial Design</span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-3">The Architect</h3>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed mb-4">
                    Focuses on the human experience, exterior aesthetics, room layouts, natural lighting, ADA code circulation, and building facades.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-[#2D3137] text-[11px] text-zinc-600 dark:text-[#9CA3AF]">
                  <strong className="text-zinc-900 dark:text-[#EAEAEA] block mb-1">Key Deliverable:</strong>
                  Architectural floor plans, exterior renderings & zoning permits.
                </div>
              </div>

              <div className="rounded-2xl bg-white dark:bg-[#181A1E] border-2 border-[#801834] dark:border-[#D4AF37] p-8 relative flex flex-col justify-between shadow-[0_0_25px_rgba(128,24,52,0.1)] dark:shadow-[0_0_30px_rgba(212,175,55,0.18)]">
                <div className="absolute -top-3 right-6 bg-[#801834] text-white dark:bg-[#D4AF37] dark:text-[#121417] text-[10px] font-mono font-extrabold uppercase px-3 py-0.5 tracking-wider rounded-full shadow-sm">
                  Our Discipline
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#801834]/10 dark:bg-[#D4AF37]/10 border border-[#801834]/30 dark:border-[#D4AF37] text-[#801834] dark:text-[#D4AF37] flex items-center justify-center mb-6 rounded-xl shadow-2xs">
                    <ShieldCheck size={26} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#801834] dark:text-[#D4AF37] tracking-wider block mb-1 font-semibold">Physics & Stability</span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-3">The Structural Engineer</h3>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed mb-4">
                    Calculates how massive gravitational loads, hurricane winds, and earthquake ground shocks travel safely into the foundation without cracking or deflecting.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#801834]/20 dark:border-[#D4AF37]/30 text-[11px] text-[#801834] dark:text-[#D4AF37]">
                  <strong className="text-zinc-900 dark:text-[#EAEAEA] block mb-1">Key Deliverable:</strong>
                  Stamped structural calculations, framing plans, beam/column schedules & PE/SE seals.
                </div>
              </div>

              <div className="rounded-2xl bg-white dark:bg-[#121417] border border-zinc-200/90 dark:border-[#333]/80 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/40 transition-all">
                <div>
                  <div className="w-12 h-12 bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] text-zinc-600 dark:text-[#9CA3AF] flex items-center justify-center mb-6 rounded-xl shadow-2xs">
                    <Hammer size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-[#9CA3AF] tracking-wider block mb-1 font-semibold">Physical Execution</span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-3">The General Contractor</h3>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed mb-4">
                    Manages on-site sub-trades, pours the specified concrete mix, erects steel frames, and brings the structural drawings into physical reality.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-[#2D3137] text-[11px] text-zinc-600 dark:text-[#9CA3AF]">
                  <strong className="text-zinc-900 dark:text-[#EAEAEA] block mb-1">Key Deliverable:</strong>
                  Physical building construction, daily safety oversight & trade scheduling.
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Load Path Visualization */}
          {activeEducationTab === 'loadpath' && (
            <div className="rounded-2xl bg-white dark:bg-[#121417] border border-zinc-200/90 dark:border-[#333]/80 p-8 lg:p-10 shadow-md dark:shadow-2xl">
              <div className="flex flex-wrap gap-2 mb-8 bg-zinc-100 dark:bg-[#181A1E] p-1.5 rounded-xl border border-zinc-200 dark:border-[#333] w-max">
                <button
                  onClick={() => setActiveLoadPath('gravity')}
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg transition-all ${
                    activeLoadPath === 'gravity' ? 'bg-[#801834] text-white shadow-xs dark:bg-[#D4AF37] dark:text-[#121417]' : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
                  }`}
                >
                  1. Downward Gravity Loads
                </button>
                <button
                  onClick={() => setActiveLoadPath('lateral')}
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg transition-all ${
                    activeLoadPath === 'lateral' ? 'bg-[#801834] text-white shadow-xs dark:bg-[#D4AF37] dark:text-[#121417]' : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
                  }`}
                >
                  2. Lateral Hurricane & Seismic Loads
                </button>
              </div>

              {activeLoadPath === 'gravity' ? (
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-[#EAEAEA] mb-3">The Gravity Load Journey</h4>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                    Every kilogram of building weight and live occupancy load must follow an unbroken mechanical path down into solid ground. If any link in this chain fails, localized collapse occurs:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] block mb-1 font-semibold">STAGE 1</span>
                      <h5 className="text-xs font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">Floor Slabs</h5>
                      <p className="text-[10px] text-zinc-500 dark:text-[#9CA3AF]">Receives people & equipment</p>
                    </div>
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] block mb-1 font-semibold">STAGE 2</span>
                      <h5 className="text-xs font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">Beams & Girders</h5>
                      <p className="text-[10px] text-zinc-500 dark:text-[#9CA3AF]">Transfers load horizontally</p>
                    </div>
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] block mb-1 font-semibold">STAGE 3</span>
                      <h5 className="text-xs font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">Columns / Walls</h5>
                      <p className="text-[10px] text-zinc-500 dark:text-[#9CA3AF]">Channels load downward</p>
                    </div>
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] block mb-1 font-semibold">STAGE 4</span>
                      <h5 className="text-xs font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">Deep Caissons</h5>
                      <p className="text-[10px] text-zinc-500 dark:text-[#9CA3AF]">Distributes foundation pressure</p>
                    </div>
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-[#801834]/40 dark:border-[#D4AF37]/50 p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] block mb-1 font-bold">FINAL</span>
                      <h5 className="text-xs font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">Solid Bedrock</h5>
                      <p className="text-[10px] text-zinc-500 dark:text-[#9CA3AF]">Permanent reaction support</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-[#EAEAEA] mb-3">The Lateral Seismic & Wind Dissipation Path</h4>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                    When 140mph hurricane winds blow or earthquakes shake the ground, horizontal shear tries to twist and slide the structure. Structural engineers design the lateral force resisting system (LFRS):
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] p-5 shadow-2xs">
                      <h5 className="text-sm font-bold text-[#801834] dark:text-[#D4AF37] mb-2">1. Floor Diaphragms</h5>
                      <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">Act as giant horizontal deep beams, collecting wind pressure from exterior facades and channeling it to the core.</p>
                    </div>
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] p-5 shadow-2xs">
                      <h5 className="text-sm font-bold text-[#801834] dark:text-[#D4AF37] mb-2">2. Reinforced Concrete Core</h5>
                      <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">Heavy shear wall core acts as a vertical cantilever beam that resists overturning moments.</p>
                    </div>
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] p-5 shadow-2xs">
                      <h5 className="text-sm font-bold text-[#801834] dark:text-[#D4AF37] mb-2">3. Outrigger Belt Trusses</h5>
                      <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">Couples the core to perimeter columns, activating push-pull resistance and damping vibrations.</p>
                    </div>
                    <div className="rounded-xl bg-zinc-50 dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] p-5 shadow-2xs">
                      <h5 className="text-sm font-bold text-[#801834] dark:text-[#D4AF37] mb-2">4. Foundation Tiebacks</h5>
                      <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">Deep tension anchors prevent the building from uprooting during extreme ground motions.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: When Do You Need an Engineer? */}
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
                <div key={idx} className="group rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all">
                  <div className="flex items-center gap-2 text-[#801834] dark:text-[#D4AF37] text-xs font-mono font-bold uppercase mb-2">
                    <CheckCircle2 size={15} /> Case 0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-[#EAEAEA] mb-2 group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CLIENT TRUST & TESTIMONIALS                                            */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-24 bg-[#F8F9FA] dark:bg-[#14161A] border-b border-zinc-200/80 dark:border-zinc-800 transition-colors scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 shadow-sm mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#801834] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#801834]"></span>
                </span>
                Industry Endorsements & Client Trust
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
                Verified Client <span className="text-[#801834] dark:text-[#E84855]">Testimonials.</span>
              </h2>
              <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
                Direct evaluations and technical endorsements from collaborating architects, developers, and civic engineering authorities.
              </p>
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="flex items-center gap-4 bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 rounded-2xl p-4 shadow-sm shrink-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-[#9CA3AF] mt-1 font-semibold">
                  5.0 ★ Rating from 40+ Projects
                </span>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none items-center mb-10">
            {testimonialCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTestimonialCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedTestimonialCategory === cat
                    ? 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] shadow-sm scale-105'
                    : 'bg-white dark:bg-[#181A1E] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200/90 dark:border-[#333] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Testimonials Cards Grid */}
          {filteredTestimonials.length === 0 ? (
            <div className="py-16 text-center bg-white dark:bg-[#181A1E] rounded-2xl border border-zinc-200 dark:border-[#333] mb-12 shadow-sm">
              <MessageSquareQuote className="mx-auto w-10 h-10 text-zinc-400 dark:text-[#9CA3AF]/40 mb-2" />
              <p className="text-zinc-500 dark:text-[#9CA3AF] text-xs font-mono uppercase tracking-wider">
                No client endorsements match the selected category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredTestimonials.map((t, idx) => (
                <div 
                  key={t.id || idx} 
                  className="group rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 relative flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-xl hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-1 text-[#D4AF37]">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} size={15} fill="#D4AF37" className="text-[#D4AF37]" />
                        ))}
                      </div>
                      <Quote className="text-zinc-300 dark:text-[#2A2E35] w-8 h-8 group-hover:text-[#801834]/40 dark:group-hover:text-[#D4AF37]/40 transition-colors" />
                    </div>

                    <p className="text-zinc-800 dark:text-[#EAEAEA] text-sm leading-relaxed mb-6 italic font-light">
                      "{t.content}"
                    </p>

                    {t.projectRef && (
                      <div className="mb-6 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-[#121417] border border-zinc-200/80 dark:border-[#2D3137] text-[11px] font-mono text-zinc-600 dark:text-[#9CA3AF] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span>
                        <span className="truncate">Ref: {t.projectRef}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3.5 border-t border-zinc-200 dark:border-[#2D3137] pt-5">
                    <div className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-[#121417] border-2 border-[#801834]/50 dark:border-[#D4AF37]/60 overflow-hidden flex items-center justify-center font-bold text-[#801834] dark:text-[#D4AF37] text-xs shadow-xs shrink-0">
                      {t.avatarUrl ? (
                        <img src={t.avatarUrl} alt={t.clientName} className="w-full h-full object-cover" />
                      ) : (
                        (t.clientName || 'CL').slice(0, 2).toUpperCase()
                      )}
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="text-zinc-900 dark:text-[#EAEAEA] font-bold text-sm truncate">{t.clientName}</h5>
                      <p className="text-zinc-500 dark:text-[#9CA3AF] text-xs truncate">{t.clientRole}</p>
                      <span className="inline-block rounded-full bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#333] px-2 py-0.5 text-[9px] font-mono text-[#801834] dark:text-[#D4AF37] uppercase tracking-wider mt-1 font-bold truncate max-w-full">
                        {t.clientCompany}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Consultation Prompt / Trust Banner */}
          <div className="rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-[#EAEAEA]">100% Structural Safety & Peer-Review Track Record</h4>
                <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] mt-0.5">Every project engineered to exceed IBC, ASCE 7, and ACI standards with zero structural drift failures.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] px-6 py-3 text-xs font-extrabold tracking-widest uppercase hover:bg-zinc-900 dark:hover:bg-white transition-all shadow-sm shrink-0 inline-flex items-center gap-2"
            >
              Request Consultation <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. LATEST ENGINEERING INSIGHTS                                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white dark:bg-[#121417] border-b border-zinc-200/80 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <h2 className="text-[#801834] dark:text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#801834] dark:bg-[#D4AF37]"></span> Publications
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">Technical Notes & Articles</h3>
            </div>
            <Link to="/insights" className="text-xs font-bold uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2">
              Browse All Articles <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((article, i) => (
              <Link 
                key={i} 
                to={`/insights/${article.slug || 'innovations-high-strength-c80-concrete'}`} 
                className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#121417] border border-zinc-200/80 dark:border-[#333]/80 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-xl"
              >
                <div>
                  <div className="p-3 bg-zinc-100 dark:bg-[#181A1E] text-[#801834] dark:text-[#D4AF37] border border-zinc-200 dark:border-[#333] w-max mb-4 rounded-xl shadow-2xs">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#801834] dark:text-[#D4AF37] tracking-widest block mb-2 font-semibold">{article.category} • {article.date || 'Oct 2026'}</span>
                  <h5 className="text-base font-bold text-zinc-900 dark:text-[#EAEAEA] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors mb-4">{article.title}</h5>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-[#9CA3AF] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] flex items-center gap-1 pt-4 border-t border-zinc-200 dark:border-[#222]">
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
      <section className="py-20 md:py-28 bg-[#F8F9FA] dark:bg-[#14161A] border-b border-zinc-200/80 dark:border-zinc-800 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-[#D4AF37]/40 bg-white dark:bg-[#121417] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37] animate-pulse"></span>
              Optimization Feasibility Model
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Value Engineering & <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">Embodied Carbon Estimator.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Estimate potential structural cost reductions, concrete volume conservation, and schedule acceleration achieved through advanced finite element redistribution and post-tensioning.
            </p>
          </div>

          <ValueEngineeringCalculator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CONTACT BENTO STRIP                                                   */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white dark:bg-[#121417] border-t border-zinc-200/80 dark:border-zinc-800 transition-colors" id="contact">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#801834] dark:text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Consultation & Engagement
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
              Have Questions? <span className="text-[#801834] dark:text-[#D4AF37]">Get in Touch!</span>
            </h2>
          </div>

          {/* 3-Bento Contact Strip */}
          <div className="relative mb-10">
            <div aria-hidden="true" className="pointer-events-none absolute h-px bg-zinc-200 dark:bg-[#333] -top-px left-0 right-0"></div>
            <div className="grid gap-px overflow-hidden bg-zinc-200 dark:bg-[#2D3137] rounded-2xl border border-zinc-200 dark:border-[#333] md:grid-cols-3 shadow-md dark:shadow-2xl">
              {/* Card 1: Email */}
              <a 
                href="mailto:consult@alexandre-structural.com" 
                className="flex items-center gap-3 bg-white dark:bg-[#181A1E] p-5 shadow-xs transition-colors hover:bg-zinc-50 dark:hover:bg-[#1f2227] group"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#801834]/20 dark:border-[#D4AF37]/30 bg-[#801834]/10 dark:bg-[#D4AF37]/10 text-[#801834] dark:text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5 overflow-hidden">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-[#EAEAEA]">Send an Email</h4>
                  <p className="text-xs font-mono text-zinc-500 dark:text-[#9CA3AF] truncate group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">consult@alexandre-structural.com</p>
                </div>
              </a>

              {/* Card 2: Phone */}
              <a 
                href="tel:+15550198472" 
                className="flex items-center gap-3 bg-white dark:bg-[#181A1E] p-5 shadow-xs transition-colors hover:bg-zinc-50 dark:hover:bg-[#1f2227] group"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#801834]/20 dark:border-[#D4AF37]/30 bg-[#801834]/10 dark:bg-[#D4AF37]/10 text-[#801834] dark:text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-[#EAEAEA]">Call Direct</h4>
                  <p className="text-xs font-mono text-zinc-500 dark:text-[#9CA3AF] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">+1 (555) 019-8472</p>
                </div>
              </a>

              {/* Card 3: Location */}
              <div className="flex items-center gap-3 bg-white dark:bg-[#181A1E] p-5 shadow-xs">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#801834]/20 dark:border-[#D4AF37]/30 bg-[#801834]/10 dark:bg-[#D4AF37]/10 text-[#801834] dark:text-[#D4AF37]">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-[#EAEAEA]">Office Headquarters</h4>
                  <p className="text-xs font-mono text-zinc-500 dark:text-[#9CA3AF]">New York, NY (EST · GMT-5)</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute h-px bg-zinc-200 dark:bg-[#333] -bottom-px left-0 right-0"></div>
          </div>

          {/* Full Consultation Trigger Banner */}
          <div className="bg-white dark:bg-gradient-to-r dark:from-[#181A1E] dark:via-[#14161A] dark:to-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 sm:p-10 rounded-3xl text-center flex flex-col sm:flex-row justify-between items-center gap-6 shadow-md dark:shadow-2xl">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-1.5">Ready to Evaluate Your Project's Structural Integrity?</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#9CA3AF]">Submit project drawings, lateral load requirements, or request a third-party peer review.</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#801834] text-white hover:bg-[#68132a] dark:bg-[#D4AF37] dark:text-[#121417] dark:hover:bg-white px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(128,24,52,0.3)] shrink-0 flex items-center gap-2 active:scale-95"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-white dark:bg-[#181A1E] border border-zinc-200 dark:border-[#D4AF37] p-2 rounded-xl shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-zinc-300"
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
