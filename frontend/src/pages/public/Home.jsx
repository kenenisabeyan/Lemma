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
  HardHat, 
  X, 
  GraduationCap, 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Star,
  Users,
  Compass
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { TechMarquee } from '../../components/common/TechMarquee';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { LoadPathSimulator } from '../../components/engineering/LoadPathSimulator';
import { CaseStudyModal } from './CaseStudy';
import lemmaImg from '../../assets/lemma.JPG';
import lemmaTwoImg from '../../assets/lemma-two.jpg';
import lemmaThreeImg from '../../assets/lemma-three.jpg';
import lemmaFourImg from '../../assets/lemma-four.jpg';
import li2Img from '../../assets/li2.jpg';
import li3Img from '../../assets/li3.jpg';

export const Home = () => {
  const navigate = useNavigate();
  const [activeBrotherIndex, setActiveBrotherIndex] = useState(0);

  const brotherhoodMembers = [
    {
      name: 'Lemma Amensisa',
      role: 'Senior Capstone Lead & Structural Dynamics',
      sub: 'Adama Science & Technology University · SoCEA',
      img: lemmaImg,
      badge: 'Team Lead · Class of 2026'
    },
    {
      name: 'Structural Modeling Cohort',
      role: 'ETABS 3D Seismic & Beam-Column Joint Detailing',
      sub: 'EBCS EN 1998 Seismic Ductility · Eurocode 2',
      img: lemmaTwoImg,
      badge: 'FEA Specialist'
    },
    {
      name: 'Highway Infrastructure Specialist',
      role: 'Civil 3D Geometric Corridor & Mass-Haul',
      sub: 'ERA 2024 Road Standards · Earthwork Balance',
      img: lemmaThreeImg,
      badge: 'ERA Certified'
    },
    {
      name: 'Geotechnical & Foundation Engineer',
      role: 'Expansive Clay Soil Stabilization & Caisson Piles',
      sub: 'EBCS EN 1997 Geotechnical · Lime Mitigation',
      img: lemmaFourImg,
      badge: 'Soil & Bedrock Lead'
    },
    {
      name: 'Site QC & Field Supervision Officer',
      role: 'Total Station Surveying & Concrete Slump/Cube QC',
      sub: 'OCC Site Internship · Bar Bending Schedules (BBS)',
      img: li2Img,
      badge: 'Site QC Trainee'
    },
    {
      name: 'Hydraulic & Water Resources Engineer',
      role: 'Corridor Drainage, Culverts & Watershed Runoff',
      sub: 'Hydraulic Modeling · Flood Risk Mitigation',
      img: li3Img,
      badge: 'Drainage Lead'
    }
  ];

  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeHeroProjectIdx, setActiveHeroProjectIdx] = useState(0);

  const heroProjects = [
    {
      id: '1',
      title: 'ASTU Central Multipurpose Complex',
      category: 'Structural & Buildings',
      metric: '5-Story Dual RC Core',
      tag: 'EBCS EN 1992 · ETABS FEA',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      slug: 'astu-central-multipurpose-complex',
      location: 'ASTU Campus, Adama'
    },
    {
      id: '2',
      title: 'Awash River Highway Link Bridge',
      category: 'Highway & Transportation',
      metric: '180m Prestressed Box Girder',
      tag: 'ERA Manuals · SAP2000',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      slug: 'awash-river-highway-link-bridge',
      location: 'Awash Transit Corridor'
    },
    {
      id: '3',
      title: 'Adama Smart Commercial Plaza',
      category: 'Geotechnical & Foundation',
      metric: 'Mat Foundation on Expansive Clay',
      tag: 'EBCS 7 · Lime Stabilization',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&q=80',
      slug: 'adama-smart-commercial-plaza',
      location: 'Downtown Adama'
    }
  ];

  const rotatingDisciplines = [
    'ASTU 5th Year Civil Engineering',
    'Reinforced Concrete & Shear Walls',
    'Practical Construction & Site Supervision',
    'Highway Alignment & ERA Standards',
    'B.Sc. Graduation Capstone Defense'
  ];
  const [disciplineIndex, setDisciplineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisciplineIndex((prev) => (prev + 1) % rotatingDisciplines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const { data: settingsData } = useFetch('/settings', {
    settings: {
      engineerName: 'Lemma Amensisa & Brothers',
      title: '5th Year Civil Engineering | ASTU SoCEA',
      heroHeadlineLine1: 'Engineering Ethiopia.',
      heroHeadlineAccent: 'ASTU ',
      heroHeadlineLine2: 'Civil 5th Year.',
      heroBio: '5th-year Civil Engineering students at Adama Science and Technology University (ASTU). Graduating together as brothers, we combine ETABS and Civil 3D design with practical site construction, concrete quality control, and field surveying across Ethiopia.',
      introVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-building-41618-large.mp4',
      yearsExp: '5th Year',
      projectsCount: '25+',
      safetyRecord: '100% Defense Ready',
      clientsCount: 'ASTU SoCEA'
    }
  });

  const settings = settingsData?.settings || settingsData || {};

  const coreDisciplines = [
    {
      icon: Building2,
      tag: 'EBCS EN 1992',
      title: 'Multi-Story RC Structural Design',
      desc: 'Dual-core shear walls, moment frames, and high-ductility seismic detailing compliant with EBCS EN 1992 and Eurocode 2.',
      spec1: '3D ETABS dynamic response spectrum',
      spec2: 'Ductility Class High (DCH) joint pass'
    },
    {
      icon: Activity,
      tag: 'ERA 2024 Standards',
      title: 'Highway Alignment & Geometric Corridors',
      desc: 'Route layout, horizontal/vertical curvature design, and mass-haul cut-and-fill optimization adhering strictly to ERA manuals.',
      spec1: 'Civil 3D corridor & profile geometry',
      spec2: 'Hydraulic culvert sizing & earthwork balance'
    },
    {
      icon: ShieldCheck,
      tag: 'EBCS 7 / ASTM',
      title: 'Geotechnical & Soil Stabilization',
      desc: 'Borehole log evaluation, direct shear parameters, and foundation mitigation on Rift Valley expansive black cotton soils.',
      spec1: 'Deep caisson socketing in volcanic bedrock',
      spec2: 'Chemical lime stabilization & swelling control'
    },
    {
      icon: HardHat,
      tag: 'OCC Site Practice',
      title: 'Field Supervision & Concrete Quality Control',
      desc: 'Practical site engineering during OCC internships: Total Station topography, slump tests, cube compressive testing, and BBS scheduling.',
      spec1: 'Rebar placement verification & BBS audits',
      spec2: 'Field Density Testing (FDT) compaction'
    }
  ];

  const featuredProjects = [
    {
      id: '1',
      title: 'ASTU Central Multipurpose Complex & Auditorium',
      slug: 'astu-central-multipurpose-complex',
      category: 'Structural & Buildings',
      metric: '5-Story Dual RC Core',
      system: 'Dual Shear Wall & Moment Frame',
      standard: 'EBCS EN 1992 & 1998',
      summary: '5-story multipurpose academic auditorium and library complex designed as the graduation capstone project with 3D non-linear dynamic spectrum analysis in ETABS.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'Awash River Highway Link Bridge',
      slug: 'awash-river-highway-link-bridge',
      category: 'Highway & Transportation',
      metric: '180m Prestressed Box Girder',
      system: 'Continuous Concrete Box Girder',
      standard: 'ERA Bridge Manual 2024',
      summary: '180-meter continuous prestressed highway bridge handling heavy transit live-loads, seasonal river flood scour, and bedrock socketed caisson piles.',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80'
    },
    {
      id: '3',
      title: 'Adama Smart Commercial Plaza',
      slug: 'adama-smart-commercial-plaza',
      category: 'Geotechnical & Foundation',
      metric: 'Mat Foundation on Expansive Clay',
      system: 'Ribbed Raft & Drilled Caissons',
      standard: 'EBCS 7 & Eurocode 7',
      summary: 'Foundation design in downtown Adama resolving high swelling index clay soils via 4% lime chemical stabilization and rigid RC raft footing.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&q=80'
    }
  ];

  const endorsements = [
    {
      name: 'Dr. Abebe Gemechu, Ph.D.',
      role: 'Associate Professor & Capstone Advisor',
      org: 'ASTU School of Civil Engineering & Architecture',
      quote: 'Lemma and his 5th-year brothers exhibited remarkable mastery of structural dynamics and EBCS provisions in their multi-story capstone defense. Their ETABS modeling was rigorous and precise.'
    },
    {
      name: 'Eng. Dawit Kebede, PE',
      role: 'Senior Project Manager & Field Supervisor',
      org: 'Oromia Construction Corporation (OCC)',
      quote: 'During field site internships, Lemma showed exemplary attention to concrete quality control, bar bending schedules, and surveyor alignment on active commercial building jobsites.'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D3AE36] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC 3D HERO SECTION                                              */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center py-20 sm:py-28 lg:py-24 overflow-hidden bg-[#F8F9FA] dark:bg-[#12151C] transition-colors">
        
        {/* Three.js 3D Civil Engineering Canvas Background */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-auto">
          <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#D3AE36]/[0.03] dark:bg-[#D3AE36]/10 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D3AE36]/[0.03] dark:bg-[#D3AE36]/10 blur-[120px] pointer-events-none" />
          
          <div className="absolute inset-0 opacity-95 dark:opacity-100">
            <Hero3DCanvas />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F8F9FA] dark:from-[#12151C] to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8 select-text pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Headlines, Narrative & CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start text-left gap-4 sm:gap-5 select-text">
              
              <div className="inline-flex items-center gap-2 py-1 text-xs font-mono font-bold text-[#D3AE36] pointer-events-auto">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                <span>ASTU SoCEA Civil Engineering · Class of 2026</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-1 sm:space-y-1.5 pointer-events-auto select-text"
              >
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-[2.6rem] xl:text-[2.9rem] tracking-tight leading-tight text-[#1E2025] dark:text-[#F8F9FA]">
                  <span className="block">
                    {settings.heroHeadlineLine1 || 'Engineering Ethiopia.'}
                  </span>
                  <span className="text-[#D3AE36] block">
                    {settings.heroHeadlineAccent ? `${settings.heroHeadlineAccent} ` : 'ASTU '}
                    {settings.heroHeadlineLine2 || 'Civil 5th Year.'}
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full space-y-3 pointer-events-auto select-text"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1E2025]/80 dark:text-[#F8F9FA]/80 font-bold">
                    ASTU SoCEA · Class of 2026 Brotherhood
                  </span>
                  <span className="text-xs font-mono text-[#D3AE36] font-bold">
                    · 5th-Year Capstone
                  </span>
                </div>

                <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 font-medium text-sm sm:text-base leading-relaxed text-left">
                  Final-year Civil Engineering team at <strong className="text-[#D3AE36] font-bold">Adama Science and Technology University (ASTU)</strong>. Graduating together as brothers, we combine ETABS and Civil 3D design with practical site construction, concrete quality control, and field surveying across Ethiopia.
                </p>

                {/* Rotating Focus Tag */}
                <div className="flex items-center gap-2 text-xs font-mono pt-1">
                  <span className="font-semibold text-[#1E2025]/60 dark:text-[#F8F9FA]/60 uppercase tracking-wider text-[10px]">Active Focus:</span>
                  <span className="font-bold text-[#D3AE36] underline decoration-[#D3AE36] decoration-2 underline-offset-4">
                    {rotatingDisciplines[disciplineIndex]}
                  </span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-row items-center justify-start gap-3 sm:gap-4 pt-1 pointer-events-auto"
              >
                <button
                  onClick={() => navigate('/projects')}
                  className="relative overflow-hidden rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-6 sm:px-7 py-3 sm:py-3.5 font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 group cursor-pointer shrink-0 shadow-md hover:shadow-lg border-none"
                >
                  <span className="relative z-10">EXPLORE PROJECTS</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0 relative z-10" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="rounded-full text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] active:scale-95 px-5 sm:px-6 py-3 sm:py-3.5 font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer shrink-0 border-none"
                >
                  <span>WATCH SHOWREEL</span>
                  <Play size={12} className="fill-[#D3AE36] text-[#D3AE36] shrink-0" />
                </button>
              </motion.div>

              {/* Key Credentials Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 pt-3 w-full pointer-events-auto"
              >
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-[#1E2025] dark:text-[#F8F9FA] font-mono leading-none">{settings.yearsExp || '5th Year'}</span>
                  <span className="block text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mt-1">Academic Level</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-[#D3AE36] font-mono leading-none">{settings.projectsCount || '25+'}</span>
                  <span className="block text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mt-1">Capstone Works</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-[#D3AE36] font-mono leading-none">100%</span>
                  <span className="block text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mt-1">Defense Ready</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Architectural Capstone Showcase Card */}
            <div className="lg:col-span-6 relative flex flex-col justify-center pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full space-y-3.5 transition-all"
              >
                {/* Header Verification Bar */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-3">
                    <img 
                      src={settings.avatarUrl || lemmaImg} 
                      alt="Lemma Amensisa" 
                      className="w-11 h-11 rounded-full object-cover object-top shadow-md shrink-0" 
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA] block leading-tight">
                        {settings.engineerName || 'Lemma Amensisa'}
                      </span>
                      <span className="text-[10px] font-mono text-[#D3AE36] font-semibold block mt-0.5">
                        ASTU Civil Engineering · Class of 2026
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full flex items-center gap-1.5 shrink-0">
                    <ShieldCheck size={13} />
                    <span>EBCS VERIFIED</span>
                  </span>
                </div>

                {/* Main Visual Display Frame */}
                <div 
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
                  onClick={() => {
                    const matched = featuredProjects.find(p => p.slug === heroProjects[activeHeroProjectIdx].slug) || featuredProjects[0];
                    setSelectedCaseStudy(matched);
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeHeroProjectIdx}
                      src={heroProjects[activeHeroProjectIdx].imageUrl}
                      alt={heroProjects[activeHeroProjectIdx].title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </AnimatePresence>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white font-semibold flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <span>View Case Study</span>
                    <ArrowUpRight size={12} className="text-[#D3AE36]" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end pointer-events-none">
                    <span className="text-[10px] font-mono text-[#D3AE36] uppercase font-bold tracking-wider mb-0.5">
                      {heroProjects[activeHeroProjectIdx].category} · {heroProjects[activeHeroProjectIdx].location}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug drop-shadow-sm">
                      {heroProjects[activeHeroProjectIdx].title}
                    </h4>
                    <span className="text-[11px] font-mono text-white/80 mt-1">
                      {heroProjects[activeHeroProjectIdx].tag} · {heroProjects[activeHeroProjectIdx].metric}
                    </span>
                  </div>
                </div>

                {/* Project Switcher Tabs */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  {heroProjects.map((proj, idx) => {
                    const isSelected = activeHeroProjectIdx === idx;
                    return (
                      <button
                        key={proj.id}
                        onClick={() => setActiveHeroProjectIdx(idx)}
                        className={`p-2 rounded-xl text-left transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-[#D3AE36]/20 text-[#D3AE36]'
                            : 'bg-black/[0.04] dark:bg-white/[0.05] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 shadow-xs">
                          <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="overflow-hidden min-w-0">
                          <span className="text-[10px] font-bold text-[#1E2025] dark:text-[#F8F9FA] block truncate leading-tight">
                            {proj.title.split(' ')[0]} {proj.title.split(' ')[1]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Marquee Ribbon */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 2. INTEGRATED ENGINEERING EXPERTISE & BROTHERHOOD SYNERGY                 */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 relative transition-colors bg-[#DFE2EB] dark:bg-[#1E2025]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
              Core Disciplines &amp; Academic Synergy
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight mb-4 dark:text-[#F8F9FA]">
              Design Rigor. <span className="text-[#D3AE36]">Site Execution.</span>
            </h2>
            <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base leading-relaxed">
              At ASTU, we bridge finite element theoretical modeling with real construction practice — turning complex codes into durable, buildable physical assets.
            </p>
          </div>

          {/* 4 Core Specializations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreDisciplines.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="bg-black/[0.03] dark:bg-white/[0.04] rounded-2xl p-6 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D3AE36]/10 text-[#D3AE36] font-bold">
                        {d.tag}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-[#1E2025] dark:text-[#F8F9FA] leading-snug">
                      {d.title}
                    </h3>

                    <p className="text-xs text-[#1E2025]/75 dark:text-[#F8F9FA]/75 leading-relaxed">
                      {d.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 space-y-1 font-mono text-[11px] text-[#1E2025]/80 dark:text-[#F8F9FA]/80">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="truncate">{d.spec1}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="truncate">{d.spec2}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Brotherhood Cohort Spotlight Bar */}
          <div className="bg-black/[0.03] dark:bg-white/[0.04] rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Profile Preview */}
              <div className="lg:col-span-5 flex items-center gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-md">
                  <img
                    src={brotherhoodMembers[activeBrotherIndex].img}
                    alt={brotherhoodMembers[activeBrotherIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#D3AE36] font-bold uppercase tracking-wider">
                      {brotherhoodMembers[activeBrotherIndex].badge}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-lg text-[#1E2025] dark:text-[#F8F9FA] leading-tight">
                    {brotherhoodMembers[activeBrotherIndex].name}
                  </h4>
                  <p className="text-xs text-[#1E2025]/75 dark:text-[#F8F9FA]/75">
                    {brotherhoodMembers[activeBrotherIndex].role}
                  </p>
                  <p className="text-[10px] font-mono text-[#1E2025]/60 dark:text-[#F8F9FA]/60">
                    {brotherhoodMembers[activeBrotherIndex].sub}
                  </p>
                </div>
              </div>

              {/* Right: Cohort Selector Strip & Bio */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between pb-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#D3AE36] font-bold">
                    <Users size={14} />
                    <span>ASTU SoCEA Civil Engineering Brotherhood · Class of 2026</span>
                  </div>
                  <Link to="/about" className="text-xs font-bold text-[#D3AE36] hover:underline flex items-center gap-1">
                    <span>Full Cohort</span> <ChevronRight size={13} />
                  </Link>
                </div>

                <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                  {brotherhoodMembers.map((b, idx) => (
                    <button
                      key={b.name}
                      onClick={() => setActiveBrotherIndex(idx)}
                      title={`${b.name} · ${b.role}`}
                      className={`relative w-11 h-11 rounded-xl overflow-hidden transition-all cursor-pointer shrink-0 ${
                        activeBrotherIndex === idx
                          ? 'ring-2 ring-[#D3AE36] scale-105 shadow-md'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={b.img} alt={b.name} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE STRUCTURAL MECHANICS LAB                                   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 relative transition-colors bg-[#F8F9FA] dark:bg-[#12151C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadPathSimulator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED CAPSTONE DELIVERABLES                                         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 relative transition-colors bg-[#DFE2EB] dark:bg-[#1E2025]" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-3 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                Featured B.Sc. Capstone Works
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight dark:text-[#F8F9FA]">
                Selected Milestone <span className="text-[#D3AE36]">Projects.</span>
              </h2>
              <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Engineering multi-story RC frames, prestressed bridges, and expansive clay mat footings designed to Ethiopian Building Code Standards (EBCS) &amp; ERA Manuals.
              </p>
            </div>

            <Link 
              to="/projects" 
              className="rounded-full bg-white dark:bg-[#232936] border border-zinc-200 dark:border-[#31394D] px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] transition-all flex items-center gap-2 shadow-xs shrink-0 self-start md:self-auto"
            >
              <span>View All 25+ Works</span>
              <ArrowUpRight size={14} className="text-[#D3AE36]" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedCaseStudy(p)}
                className="bg-white dark:bg-[#232936] rounded-3xl overflow-hidden border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1">
                      <span>View Study</span>
                      <ArrowUpRight size={11} className="text-[#D3AE36]" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#D3AE36] font-bold uppercase tracking-wider">
                        {p.category}
                      </span>
                      <span className="text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold">
                        {p.metric}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] transition-colors leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-xs text-[#1E2025]/75 dark:text-[#F8F9FA]/75 leading-relaxed line-clamp-2">
                      {p.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#1E2025]/70 dark:text-[#F8F9FA]/70 truncate">
                    {p.standard}
                  </span>
                  <span className="text-[#D3AE36] font-bold shrink-0">
                    Case Study ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ENDORSEMENTS & DIRECT COLLABORATION (INTEGRATED CLOSING SECTION)        */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 relative transition-colors bg-[#F8F9FA] dark:bg-[#12151C]" id="endorsements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Faculty Endorsement Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {endorsements.map((e, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#232936] rounded-3xl p-7 sm:p-8 border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-[#D3AE36]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#D3AE36" className="text-[#D3AE36]" />
                      ))}
                    </div>
                    <Quote className="text-[#31394D]/40 w-7 h-7" />
                  </div>

                  <p className="text-sm italic font-light text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed mb-6">
                    "{e.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm text-[#1E2025] dark:text-[#F8F9FA]">{e.name}</h5>
                    <p className="text-xs text-[#1E2025]/70 dark:text-[#F8F9FA]/70">{e.role}</p>
                    <span className="text-[10px] font-mono text-[#D3AE36] uppercase tracking-wider block mt-0.5">{e.org}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30 shrink-0">
                    VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Collaboration & Direct Channel Banner */}
          <div className="bg-white dark:bg-[#232936] rounded-3xl p-8 sm:p-12 border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] font-semibold bg-[#D3AE36]/10 rounded-full w-max">
                  <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                  Direct Consultation &amp; Graduate Recruitment
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2025] dark:text-[#F8F9FA] tracking-tight">
                  Have an Infrastructure Project or Graduate Role in Mind?
                </h3>
                <p className="text-xs sm:text-sm text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed">
                  Connect directly with Lemma Amensisa &amp; ASTU SoCEA Civil Engineering Team. Available for graduate structural roles, B.Sc. capstone collaborations, and site supervision across Ethiopia.
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <a
                  href="tel:+251934830919"
                  className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] text-[#12151C] px-6 sm:px-7 py-3.5 font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm active:scale-95 cursor-pointer"
                >
                  <Phone size={14} />
                  <span>Call +251 934 830 919</span>
                </a>
                
                <Link
                  to="/contact"
                  className="rounded-full bg-transparent border border-zinc-300 dark:border-[#31394D] text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] hover:border-[#D3AE36] px-6 py-3.5 font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95"
                >
                  <Mail size={14} className="text-[#D3AE36]" />
                  <span>Send Inquiry</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal project={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
      )}

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-white dark:bg-[#232936] border border-[#31394D]/30 dark:border-[#31394D] p-2 rounded-xl shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-[#F8F9FA] hover:text-[#D3AE36] transition-colors cursor-pointer"
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
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
