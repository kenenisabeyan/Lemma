import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  ArrowDown
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { StatCounter } from '../../components/engineering/StatCounter';
import { ProjectCard } from '../../components/engineering/ProjectCard';
import { EngineeringCanvas } from '../../components/engineering/EngineeringCanvas';
import { CaseStudyModal } from './CaseStudy';

export const Home = () => {
  const navigate = useNavigate();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeEducationTab, setActiveEducationTab] = useState('roles');
  const [activeLoadPath, setActiveLoadPath] = useState('gravity');

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

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-20">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (NAME, PE/SE TITLE, VALUE STATEMENT, CTAS, INTRO VIDEO) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center py-16 overflow-hidden bg-[#121417] border-b border-[#222]">
        <EngineeringCanvas />

        {/* Blueprint line grid background overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase w-max">
              <HardHat size={14} /> Alexandre Techane • Principal Structural Engineer PE, SE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#EAEAEA] leading-[1.08] tracking-tight">
              Precision in <br />
              Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Structure.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl leading-relaxed border-l-2 border-[#D4AF37] pl-4">
              {settings.heroBio || 'Ensuring structural integrity, seismic safety, and architectural elegance for high-rise towers, infrastructure bridges, and complex commercial developments.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => navigate('/contact')}
                className="bg-[#D4AF37] text-[#121417] px-8 py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center gap-2"
              >
                Hire Me / Request Consultation <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="border border-[#333] bg-[#1E2125] text-[#EAEAEA] px-8 py-4 text-xs font-bold tracking-widest uppercase hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
              >
                View Project Portfolio <ChevronRight size={16} />
              </button>
            </div>

            {/* Micro Badges */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-[#222] text-xs text-[#9CA3AF]">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4AF37]" /> IBC 2024 & ASCE 7 Code Authority</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Non-Linear 3D Finite Element Modeling</span>
            </div>
          </motion.div>

          {/* Right Video / Media Intro Card Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group p-2 border border-[#333] bg-[#1E2125]">
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]"></div>

              <div 
                onClick={() => setIsVideoModalOpen(true)}
                className="relative aspect-video bg-[#121417] overflow-hidden cursor-pointer flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
                  alt="Structural Engineering Overview"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent"></div>

                {/* Play Button Overlay */}
                <div className="relative z-20 w-16 h-16 rounded-full bg-[#121417]/90 border border-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <Play className="text-[#D4AF37] w-6 h-6 ml-1" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center bg-[#121417]/90 p-2.5 border border-[#333] text-[11px] text-[#EAEAEA] uppercase tracking-wider">
                  <span className="flex items-center gap-2 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Introduction Video (Editable in CMS)
                  </span>
                  <span className="text-[#D4AF37] font-bold">Watch 2 min</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT ME SECTION (BIOGRAPHY, LICENSURE, PHILOSOPHY & CV DOWNLOAD)       */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#181A1E] border-b border-[#333] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative border border-[#333] p-2 bg-[#121417]">
                <div className="aspect-[4/5] bg-[#121417] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                    alt="Alexandre Senior Structural Engineer"
                    className="w-full h-full object-cover grayscale opacity-85 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-[#121417]/95 border border-[#D4AF37] p-4 text-xs font-mono">
                  <div className="flex justify-between items-center text-[#D4AF37] font-bold uppercase tracking-wider mb-1">
                    <span>PE #84729-NY</span>
                    <span>SE #92041-CA</span>
                  </div>
                  <span className="text-[10px] text-[#9CA3AF] uppercase tracking-widest block">Licensed Structural Engineer & ASCE Fellow</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#D4AF37]"></span> About Alexandre Techane
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EAEAEA] tracking-tight">
                Engineering Integrity Behind Visionary Architecture.
              </h2>

              <p className="text-[#9CA3AF] text-base leading-relaxed">
                With over 14 years of specialized practice across North America, I bridge the critical gap between audacious architectural imagination and uncompromising structural mechanics. My work ensures high-rise towers withstand extreme hurricane forces and heritage masonry survives intense seismic ground motion.
              </p>

              <div className="bg-[#121417] border-l-2 border-[#D4AF37] p-5 text-sm text-[#EAEAEA] italic leading-relaxed">
                "Structural engineering should never be treated as an architectural limitation. When calculated with precision, physics becomes the catalyst that enables daring, column-free spaces."
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-[#121417] p-3.5 border border-[#333]">
                  <GraduationCap className="text-[#D4AF37] w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#EAEAEA] font-bold block">M.S. Structural Engineering</span>
                    <span className="text-[10px] text-[#9CA3AF]">Columbia University</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#121417] p-3.5 border border-[#333]">
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
                  className="bg-[#D4AF37] text-[#121417] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
                >
                  Full Biography & Credentials <ArrowUpRight size={14} />
                </Link>
                <a
                  href="/resources"
                  className="bg-[#121417] text-[#EAEAEA] border border-[#333] hover:border-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Download CV (PDF) <Download size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPERTISE / SERVICES SECTION                                           */}
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

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((srv, index) => (
              <div key={index} className="group bg-[#1E2125] border border-[#333] p-8 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#121417] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#EAEAEA] mb-3 group-hover:text-[#D4AF37] transition-colors">{srv.title}</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">{srv.summary || srv.description}</p>
                </div>
                <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] group-hover:text-[#D4AF37] flex items-center gap-1">
                  Scope & Deliverables <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STATISTICS ROW                                                         */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#1E2125] border-t border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter value={settings.yearsExp || '14+'} label="Years Experience" subtext="PE & SE Certified" />
          <StatCounter value={settings.projectsCount || '180+'} label="Projects Completed" subtext="High-Rise & Infrastructure" />
          <StatCounter value={settings.safetyRecord || '100%'} label="Structural Safety Record" subtext="Zero Critical Deficiencies" />
          <StatCounter value={settings.clientsCount || '50+'} label="Corporate Clients" subtext="Architects & Developers" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED PROJECTS CASE STUDIES                                         */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#121417] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Featured Portfolio
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight">Project Case Studies</h3>
            </div>
            <Link to="/projects" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors flex items-center gap-2">
              Browse All Projects <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((proj) => (
              <ProjectCard key={proj.id} project={proj} onClick={(p) => setSelectedCaseStudy(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ENGINEERING EDUCATION: "WHAT STRUCTURAL ENGINEERS DO"                  */}
      {/*    (DESIGNED SPECIFICALLY FOR NON-ENGINEERS, CLIENTS & RECRUITERS)         */}
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

          {/* Education Sub-Navigation */}
          <div className="flex flex-wrap gap-4 border-b border-[#333] pb-4 mb-10">
            <button
              onClick={() => setActiveEducationTab('roles')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                activeEducationTab === 'roles'
                  ? 'bg-[#D4AF37] text-[#121417] border-[#D4AF37]'
                  : 'bg-[#121417] text-[#9CA3AF] border-[#333] hover:text-[#EAEAEA]'
              }`}
            >
              Architect vs Engineer vs Builder
            </button>
            <button
              onClick={() => setActiveEducationTab('loadpath')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                activeEducationTab === 'loadpath'
                  ? 'bg-[#D4AF37] text-[#121417] border-[#D4AF37]'
                  : 'bg-[#121417] text-[#9CA3AF] border-[#333] hover:text-[#EAEAEA]'
              }`}
            >
              How Loads Flow (Physics of Safety)
            </button>
            <button
              onClick={() => setActiveEducationTab('when')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                activeEducationTab === 'when'
                  ? 'bg-[#D4AF37] text-[#121417] border-[#D4AF37]'
                  : 'bg-[#121417] text-[#9CA3AF] border-[#333] hover:text-[#EAEAEA]'
              }`}
            >
              When Do You Need an Engineer?
            </button>
          </div>

          {/* Tab 1: Roles Comparison */}
          {activeEducationTab === 'roles' && (
            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="bg-[#121417] border border-[#333] p-8 relative flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#1E2125] border border-[#333] text-[#9CA3AF] flex items-center justify-center mb-6">
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

              <div className="bg-[#121417] border-2 border-[#D4AF37] p-8 relative flex flex-col justify-between shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                <div className="absolute -top-3 right-4 bg-[#D4AF37] text-[#121417] text-[10px] font-extrabold uppercase px-2.5 py-0.5 tracking-wider">
                  Our Discipline
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mb-6">
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

              <div className="bg-[#121417] border border-[#333] p-8 relative flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#1E2125] border border-[#333] text-[#9CA3AF] flex items-center justify-center mb-6">
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
            <div className="bg-[#121417] border border-[#333] p-8 lg:p-12">
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveLoadPath('gravity')}
                  className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-colors ${
                    activeLoadPath === 'gravity' ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-[#9CA3AF] border-transparent'
                  }`}
                >
                  1. Downward Gravity Loads (People, Furniture, Snow)
                </button>
                <button
                  onClick={() => setActiveLoadPath('lateral')}
                  className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-colors ${
                    activeLoadPath === 'lateral' ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-[#9CA3AF] border-transparent'
                  }`}
                >
                  2. Lateral Loads (140mph Wind & Earthquake Forces)
                </button>
              </div>

              {activeLoadPath === 'gravity' ? (
                <div>
                  <h4 className="text-lg font-bold text-[#EAEAEA] mb-3">The Gravity Load Journey</h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
                    Every kilogram of building weight and live occupancy load must follow an unbroken mechanical path down into solid ground. If any link in this chain fails, localized collapse occurs:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                    <div className="bg-[#1E2125] border border-[#333] p-4">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">STAGE 1</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Floor Slabs</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Receives people & equipment</p>
                    </div>
                    <div className="bg-[#1E2125] border border-[#333] p-4">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">STAGE 2</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Beams & Girders</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Transfers load horizontally</p>
                    </div>
                    <div className="bg-[#1E2125] border border-[#333] p-4">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">STAGE 3</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Columns / Walls</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Channels load downward</p>
                    </div>
                    <div className="bg-[#1E2125] border border-[#333] p-4">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">STAGE 4</span>
                      <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">Deep Caissons</h5>
                      <p className="text-[10px] text-[#9CA3AF]">Distributes foundation pressure</p>
                    </div>
                    <div className="bg-[#1E2125] border border-[#D4AF37]/50 p-4">
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
                    <div className="bg-[#1E2125] border border-[#333] p-5">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">1. Floor Diaphragms</h5>
                      <p className="text-xs text-[#9CA3AF]">Act as giant horizontal deep beams, collecting wind pressure from exterior facades and channeling it to the core.</p>
                    </div>
                    <div className="bg-[#1E2125] border border-[#333] p-5">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">2. Reinforced Concrete Core</h5>
                      <p className="text-xs text-[#9CA3AF]">Heavy shear wall core acts as a vertical cantilever beam that resists overturning moments.</p>
                    </div>
                    <div className="bg-[#1E2125] border border-[#333] p-5">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">3. Outrigger Belt Trusses</h5>
                      <p className="text-xs text-[#9CA3AF]">Couples the core to perimeter columns, activating push-pull resistance and damping vibrations.</p>
                    </div>
                    <div className="bg-[#1E2125] border border-[#333] p-5">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">4. Foundation Tiebacks</h5>
                      <p className="text-xs text-[#9CA3AF]">Deep tension anchors prevent the building from uprooting during extreme ground motions.</p>
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
                <div key={idx} className="bg-[#121417] border border-[#333] p-6">
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase mb-2">
                    <CheckCircle2 size={16} /> Case {idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#EAEAEA] mb-2">{item.title}</h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLIENT TRUST & TESTIMONIALS                                            */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#121417]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Industry Endorsements
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] tracking-tight">Client Trust & Testimonials</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#1E2125] border border-[#333] p-10 relative flex flex-col justify-between">
                <Quote className="text-[#2A2E35] w-14 h-14 absolute top-6 right-6 pointer-events-none" />
                <p className="text-[#EAEAEA] text-base leading-relaxed mb-8 relative z-10 italic">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4 border-t border-[#333] pt-6">
                  <div className="w-12 h-12 bg-[#121417] border border-[#D4AF37] rounded-full overflow-hidden flex items-center justify-center font-bold text-[#D4AF37]">
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
      {/* 8. LATEST ENGINEERING INSIGHTS                                            */}
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
                className="flex flex-col justify-between p-6 bg-[#121417] border border-[#333] hover:border-[#D4AF37]/50 transition-all group"
              >
                <div>
                  <div className="p-3 bg-[#1E2125] text-[#D4AF37] border border-[#333] w-max mb-4">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest block mb-2">{article.category} • {article.date || 'Oct 2026'}</span>
                  <h5 className="text-base font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-4">{article.title}</h5>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] group-hover:text-[#D4AF37] flex items-center gap-1 pt-4 border-t border-[#222]">
                  Read Technical Paper <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CONTACT / HIRE ME CTA BANNER                                           */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#181A1E] via-[#121417] to-[#181A1E] border-t border-[#333] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Initiate Project Collaboration
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] mb-6 tracking-tight">Ready to Engineer Your Project?</h2>
          <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto mb-8">
            Available for structural consultations, high-rise peer reviews, dynamic seismic evaluations, and complete structural lead engineering documentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#D4AF37] text-[#121417] px-10 py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_25px_rgba(212,175,55,0.25)] inline-flex items-center justify-center gap-2"
            >
              Request Consultation <ArrowUpRight size={16} />
            </button>
            <a
              href="/resources"
              className="bg-[#1E2125] text-[#EAEAEA] border border-[#333] hover:border-[#D4AF37] px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all inline-flex items-center justify-center gap-2"
            >
              Download Engineering Guides <Download size={16} />
            </a>
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
          <div className="relative w-full max-w-4xl bg-[#1E2125] border border-[#D4AF37] p-2">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-[#EAEAEA] hover:text-[#D4AF37]"
            >
              <X size={28} />
            </button>
            <div className="aspect-video bg-black">
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
