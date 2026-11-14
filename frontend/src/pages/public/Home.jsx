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
  MessageSquareQuote,
  Users
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { TechMarquee } from '../../components/common/TechMarquee';
import { StatCounter } from '../../components/engineering/StatCounter';
import { ProjectCard } from '../../components/engineering/ProjectCard';
import { EngineeringCanvas } from '../../components/engineering/EngineeringCanvas';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { LoadPathSimulator } from '../../components/engineering/LoadPathSimulator';
import { BlueprintInspector } from '../../components/engineering/BlueprintInspector';
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTestimonialCategory, setSelectedTestimonialCategory] = useState('All');
  const testimonialCategories = ['All', 'Faculty & Mentors', 'Industry Supervisors', 'Engineering Brothers'];

  // Hero Section Dynamic Portfolio Project Showcase
  const [activeHeroProjectIdx, setActiveHeroProjectIdx] = useState(0);
  const [isEngineerHovered, setIsEngineerHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
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
      metric: '180m Prestressed Girder',
      tag: 'ERA Standard · SAP2000',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      slug: 'awash-river-highway-link-bridge',
      location: 'Awash Corridor, Oromia'
    },
    {
      id: '3',
      title: 'Adama Smart Commercial Plaza',
      category: 'Geotechnical & Foundation',
      metric: 'Expansive Clay Mat Sizing',
      tag: 'EBCS 7 · Soil Mechanics',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
      slug: 'adama-smart-commercial-plaza',
      location: 'Downtown Adama, Ethiopia'
    }
  ];

  useEffect(() => {
    const heroProjectTimer = setInterval(() => {
      setActiveHeroProjectIdx((prev) => (prev + 1) % heroProjects.length);
    }, 4500);
    return () => clearInterval(heroProjectTimer);
  }, [heroProjects.length]);

  // Dynamic Rotating Pill Text
  const rotatingDisciplines = [
    'ASTU 5th Year Civil Engineering',
    'Reinforced Concrete & Shear Walls',
    'Practical Construction & Site Supervision',
    'Highway Alignment & ERA Standards',
    'Total Station Surveying & Concrete QC',
    'B.Sc. Graduation Capstone Defense'
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

  const { data: projectsData } = useFetch('/projects?featured=true');
  const { data: servicesData } = useFetch('/services');
  const { data: testimonialsData } = useFetch('/testimonials');
  const { data: insightsData } = useFetch('/insights');

  const settings = settingsData?.settings || settingsData || {};
  const projects = (projectsData?.projects && projectsData.projects.length > 0) ? projectsData.projects : [
    {
      id: '1',
      title: 'ASTU Central Multipurpose Complex & Auditorium',
      slug: 'astu-central-multipurpose-complex',
      category: 'Structural & Buildings',
      location: 'ASTU Main Campus, Adama, Ethiopia',
      year: '2025 - 2026',
      client: 'ASTU School of Civil Engineering & Architecture (SoCEA)',
      role: 'Lead Student Structural Engineer & Capstone Group Lead',
      structuralSystem: 'Dual Reinforced Concrete Shear Wall & Moment Resisting Frame',
      materials: 'C30/37 Reinforced Concrete, Grade 500 High-Yield Ribbed Rebar',
      description: 'A 5-story multipurpose academic auditorium and library complex designed as the final year graduation capstone project at ASTU.',
      challenge: 'Addressing high seismic response factors in the Great East African Rift Valley corridor and optimizing long-span column-free seating areas.',
      engineeringApproach: 'Conducted 3D finite element modeling in ETABS, non-linear dynamic spectrum analysis, and foundation soil-structure interaction over Adama volcanic tuff.',
      solution: 'Engineered a dual RC shear wall core coupled with post-tensioned beam-slab systems conforming strictly to Ethiopian Building Code Standard (EBCS EN 1992 & EBCS EN 1998).',
      result: 'Received highest capstone evaluation honor from the ASTU civil engineering faculty and external industry evaluators.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      softwareUsed: '["ETABS","SAP2000","AutoCAD","SAFE"]'
    },
    {
      id: '2',
      title: 'Awash River Highway Link Bridge',
      slug: 'awash-river-highway-link-bridge',
      category: 'Highway & Transportation',
      location: 'Awash Basin Transit Corridor, Oromia, Ethiopia',
      year: '2024 - 2025',
      client: 'Ethiopian Roads Administration (ERA) Academic Case Study',
      role: 'Student Bridge Design Engineer & Team Modeler',
      structuralSystem: 'Prestressed Concrete Box Girder with Reinforced Concrete Piers',
      materials: 'Post-Tensioned C40 Concrete, High-Strength Strands, Reinforced Abutments',
      description: 'A 180-meter continuous prestressed concrete highway bridge designed to handle heavy freight transit across the Awash river basin.',
      challenge: 'Severe seasonal river flood scouring, expansive riverbank clay deposits, and high vehicular dynamic axle loads.',
      engineeringApproach: 'Utilized SAP2000 and Midas Civil for moving vehicle live-load analysis in accordance with ERA Bridge Design Manual and AASHTO LRFD specifications.',
      solution: 'Implemented deep driven bored pile foundations anchored into competent bedrock and elastomeric bearing pads to dissipate thermal expansion.',
      result: 'Engineered a resilient 100-year design life structure reducing freight detour times by 45 minutes.',
      imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80',
      softwareUsed: '["SAP2000","AutoCAD Civil 3D","Midas Civil"]'
    }
  ];

  const services = (servicesData?.services && servicesData.services.length > 0) ? servicesData.services : [
    { icon: 'Building2', title: 'Structural Analysis & RC Design', summary: '3D ETABS & SAP2000 modeling, load combinations, and rebar detailing per EBCS EN 1992 and Eurocodes.' },
    { icon: 'Layers', title: 'Highway Alignment & Geometric Design', summary: 'Route layout, horizontal/vertical curvature design, and mass haul cut-and-fill optimization per ERA standards.' },
    { icon: 'ShieldCheck', title: 'Geotechnical & Expansive Soil Mitigation', summary: 'Borehole log analysis, direct shear testing, and foundation solutions for Rift Valley expansive black cotton soils.' },
    { icon: 'Ruler', title: 'Capstone Defense & Quantity Surveying', summary: 'Technical calculation packages, BOQ cost estimation, project management, and multidisciplinary student defense.' }
  ];

  const defaultTestimonials = [
    {
      id: '1',
      clientName: 'Dr. Abebe Gemechu, Ph.D.',
      clientRole: 'Associate Professor & Capstone Advisor',
      clientCompany: 'ASTU School of Civil Engineering & Architecture',
      category: 'Faculty & Mentors',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      content: 'Lemma and his 5th-year brothers exhibited remarkable mastery of structural dynamics and EBCS provisions in their multi-story capstone defense. Their ETABS modeling was rigorous and precise.',
      rating: 5,
      projectRef: 'ASTU Central Multipurpose Complex (5-Story)'
    },
    {
      id: '2',
      clientName: 'Eng. Bethlehem Tadesse, P.E.',
      clientRole: 'Senior Structural Engineer & Site Supervisor',
      clientCompany: 'Oromia Construction Corporation (OCC)',
      category: 'Industry Supervisors',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      content: 'During their site internship, Lemma and his fellow ASTU brothers demonstrated exceptional diligence in reinforcement inspection and concrete quality control. True future leaders of Ethiopian engineering.',
      rating: 5,
      projectRef: 'Awash Basin Highway Interchange'
    },
    {
      id: '3',
      clientName: 'Dawit Kassa',
      clientRole: '5th Year Civil Engineering Brother & Co-Researcher',
      clientCompany: 'ASTU Class of 2026',
      category: 'Engineering Brothers',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'Tackling complex structural mechanics and late-night capstone simulations alongside Lemma has been an honor. The brotherhood and work ethic in our ASTU 5th-year group is unmatched.',
      rating: 5,
      projectRef: 'Adama Smart Commercial Plaza Mat Foundation'
    }
  ];

  const testimonials = (testimonialsData?.testimonials && testimonialsData.testimonials.length > 0) ? testimonialsData.testimonials : defaultTestimonials;

  const filteredTestimonials = testimonials.filter(t => {
    if (selectedTestimonialCategory === 'All') return true;
    if (t.category === selectedTestimonialCategory) return true;
    if (selectedTestimonialCategory === 'Faculty & Mentors' && (t.clientRole?.toLowerCase().includes('professor') || t.clientRole?.toLowerCase().includes('advisor'))) return true;
    if (selectedTestimonialCategory === 'Industry Supervisors' && (t.clientRole?.toLowerCase().includes('engineer') || t.clientRole?.toLowerCase().includes('supervisor'))) return true;
    if (selectedTestimonialCategory === 'Engineering Brothers' && (t.clientRole?.toLowerCase().includes('brother') || t.clientRole?.toLowerCase().includes('researcher') || t.clientRole?.toLowerCase().includes('student'))) return true;
    return false;
  });

  const insights = (insightsData?.insights && insightsData.insights.length > 0) ? insightsData.insights : [
    { title: 'Mitigating Differential Settlement on Expansive Black Cotton Soils in the Rift Valley', slug: 'mitigating-differential-settlement-expansive-soils', category: 'Geotechnical Engineering', date: 'Oct 2026' },
    { title: 'Comparative Structural Modeling: EBCS EN 1992 vs Eurocode 2 in ETABS', slug: 'comparative-structural-modeling-ebcs-vs-eurocode', category: 'Structural Mechanics', date: 'Sep 2026' },
    { title: 'Hydraulic Capacity & Scour Protection for Bridges along the Modjo-Adama Transit Corridor', slug: 'hydraulic-capacity-scour-protection-bridges', category: 'Hydraulic & Highway', date: 'Aug 2026' }
  ];

  // Marquee tools, construction skills and building codes
  const techMarquee = [
    'ASTU Civil 5th Year', 'Practical Site Supervision', 'Total Station Surveying', 'Concrete Slump & Cube QC',
    'ETABS Structural', 'Rebar Detailing & BBS', 'AutoCAD Civil 3D', 'Field Density Compaction (FDT)',
    'EBCS EN 1992', 'EBCS EN 1998', 'ERA Road Manuals', 'OCC Site Internship', 'SoCEA Brotherhood'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lemmayezedlij21@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#D3AE36] selection:text-white transition-colors duration-200">
          {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-center items-center py-20 sm:py-28 lg:py-24 overflow-hidden bg-[#F8F9FA] dark:bg-[#12151C] transition-colors">
        
        {/* Architectural 3D Three.js Civil Engineering Simulation - Pure Primary Background */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-auto">
          {/* Subtle Ambient Studio Light */}
          <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#D3AE36]/[0.03] dark:bg-[#D3AE36]/10 blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D3AE36]/[0.03] dark:bg-[#D3AE36]/10 blur-[120px] pointer-events-none"></div>
          
          {/* 3D Interactive Three.js High-Rise Civil Engineering Process Model */}
          <div className="absolute inset-0 opacity-95 dark:opacity-100">
            <Hero3DCanvas />
          </div>

          {/* Soft Vignette Edge Fade at bottom only */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F8F9FA] dark:from-[#12151C] to-transparent pointer-events-none"></div>
        </div>

        {/* Hero Content Container - Split 2-Column Professional Architecture */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8 select-text pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            
            {/* --------------------------------------------------------------- */}
            {/* LEFT COLUMN: Headings, Bio Narrative, Engineering Badges & CTAs */}
            {/* --------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left gap-4 sm:gap-5 select-text">
              
              {/* Status Badge - Borderless, Clean Typography */}
              <div className="inline-flex items-center gap-2 py-1 text-xs font-mono font-bold text-[#D3AE36] pointer-events-auto">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                <span>ASTU SoCEA Civil Engineering · Class of 2026</span>
              </div>

              {/* Main Headline (Left Aligned) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-1 sm:space-y-1.5 pointer-events-auto select-text"
              >
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-[2.6rem] xl:text-[2.9rem] tracking-tight leading-tight text-[#1E2025] dark:text-[#F8F9FA] select-text">
                  <span className="block select-text">
                    {settings.heroHeadlineLine1 || 'Engineering Ethiopia.'}
                  </span>
                  <span className="text-[#D3AE36] block select-text">
                    {settings.heroHeadlineAccent ? `${settings.heroHeadlineAccent} ` : 'ASTU '}
                    {settings.heroHeadlineLine2 || 'Civil 5th Year.'}
                  </span>
                </h1>
              </motion.div>

              {/* Narrative Bio & Focus - Zero Background Boxes, Zero Borders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full space-y-3.5 pointer-events-auto select-text"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36]"></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1E2025]/80 dark:text-[#F8F9FA]/80 font-bold">
                    ASTU SoCEA · Class of 2026 Brotherhood
                  </span>
                  <span className="text-xs font-mono text-[#D3AE36] font-bold">
                    · 5th-Year Capstone
                  </span>
                </div>

                <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 font-medium text-sm sm:text-base leading-relaxed text-left select-text">
                  Final-year Civil Engineering team at <strong className="text-[#D3AE36] font-bold">Adama Science and Technology University (ASTU)</strong>. Graduating together as brothers, we combine ETABS and Civil 3D design with practical site construction, concrete quality control, and field surveying across Ethiopia.
                </p>

                {/* Micro-Bullet Highlights - Clean, Borderless */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-0.5 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-[#1E2025]/90 dark:text-[#F8F9FA]/90">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>
                      <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-bold">RC Structures:</strong> EBCS EN 1992
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#1E2025]/90 dark:text-[#F8F9FA]/90">
                    <span className="text-[#D3AE36] font-bold">✦</span>
                    <span>
                      <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-bold">Corridors &amp; QC:</strong> ERA &amp; OCC Site
                    </span>
                  </div>
                </div>

                {/* Rotating Focus Indicator */}
                <div className="flex items-center gap-2 text-xs font-mono select-text pt-1">
                  <span className="font-semibold text-[#1E2025]/60 dark:text-[#F8F9FA]/60 uppercase tracking-wider text-[10px] select-text">Active Focus:</span>
                  <span className="font-bold text-[#D3AE36] underline decoration-[#D3AE36] decoration-2 underline-offset-4 select-text">
                    {rotatingDisciplines[disciplineIndex]}
                  </span>
                </div>
              </motion.div>

              {/* Dual Action Buttons (Side by Side Horizontally) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-row items-center justify-start gap-3 sm:gap-4 pt-1 pointer-events-auto select-text"
              >
                {/* Primary Filled Pill Button with Specular Sheen */}
                <button
                  onClick={() => navigate('/projects')}
                  className="relative overflow-hidden rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-5 sm:px-7 py-3 sm:py-3.5 font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 group cursor-pointer shrink-0 whitespace-nowrap shadow-md hover:shadow-lg border-none"
                >
                  <span className="relative z-10">EXPLORE PROJECTS</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0 relative z-10" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform" />
                </button>

                {/* Secondary Button - Borderless */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="rounded-full text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] active:scale-95 px-5 sm:px-6 py-3 sm:py-3.5 font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer shrink-0 whitespace-nowrap border-none"
                >
                  <span>WATCH CAPSTONE SHOWREEL</span>
                  <Play size={12} className="fill-[#D3AE36] text-[#D3AE36] shrink-0" />
                </button>
              </motion.div>

              {/* Quick Credentials / Academic Metrics - Zero Borders, Zero Boxes */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 pt-3 w-full pointer-events-auto select-text"
              >
                <div className="text-left select-text">
                  <span className="block text-2xl sm:text-3xl font-black text-[#1E2025] dark:text-[#F8F9FA] font-mono leading-none select-text">{settings.yearsExp || '5th Year'}</span>
                  <span className="block text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mt-1 select-text">Academic Level</span>
                </div>
                <div className="text-left select-text">
                  <span className="block text-2xl sm:text-3xl font-black text-[#D3AE36] font-mono leading-none select-text">{settings.projectsCount || '25+'}</span>
                  <span className="block text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mt-1 select-text">Capstone Works</span>
                </div>
                <div className="text-left select-text">
                  <span className="block text-2xl sm:text-3xl font-black text-[#D3AE36] font-mono leading-none select-text">100%</span>
                  <span className="block text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mt-1 select-text">Defense Ready</span>
                </div>
              </motion.div>

            </div>

            {/* --------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Architectural Capstone Showcase (No Extra Background Box, No Borders) */}
            {/* --------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col justify-center pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full space-y-3.5 transition-all"
              >
                {/* Header Profile & Verification Bar - Borderless */}
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

                {/* Main Visual Display Frame - Borderless */}
                <div 
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
                  onClick={() => {
                    const matched = projects.find(p => p.slug === heroProjects[activeHeroProjectIdx].slug) || projects[0];
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

                  {/* Top-Right Expand Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white font-semibold flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <span>View Case Study</span>
                    <ArrowUpRight size={12} className="text-[#D3AE36]" />
                  </div>

                  {/* Permanent High-Contrast Caption Overlay */}
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

                {/* Clean Project Switcher Tabs - Borderless */}
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
                          <span className="text-[9px] font-mono text-[#D3AE36] block truncate">
                            {proj.category.split(' ')[0]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Telemetry Row - Borderless */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#1E2025]/80 dark:text-[#F8F9FA]/80 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36]"></span>
                    Defense Capstone 2026
                  </span>
                  <span className="text-[#D3AE36] font-bold">
                    EBCS EN 1998 ZONE 4 PASS
                  </span>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INFINITE MARQUEE TICKER                                                */}
      {/* ========================================================================= */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 3. BENTO GRID CORE DISCIPLINES ("ANALYZE. CALCULATE. DELIVER.")            */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 relative transition-colors bg-[#DFE2EB] dark:bg-[#1E2025]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
              ASTU Civil Engineering Capabilities & Rigor
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight mb-4 dark:text-[#F8F9FA]">
              Analyze. Calculate. <span className="text-[#D3AE36]">Deliver.</span>
            </h2>
            <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Precision finite element mechanics, highway alignments, and geotechnical simulations engineered by <strong className="text-[#D3AE36] font-bold">ASTU 5th-year civil engineering brothers</strong>.
            </p>
          </div>

          <div className="relative mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6">
            
            {/* Bento Card 1: Multi-Story RC Structural Design (Col 1-2) */}
            <div className="bg-[#F8F9FA] dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 md:col-span-2 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] group-hover:scale-110 transition-transform">
                    <Building2 size={24} className="text-[#D3AE36]" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#D3AE36]/10 text-[#D3AE36] border border-[#D3AE36]/30 font-bold">
                    EBCS EN 1992
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-[#1E2025] text-lg dark:text-[#F8F9FA] leading-snug">Multi-Story RC Structural Design</h3>
                  <p className="text-[#1E2025]/80 text-xs leading-relaxed dark:text-[#F8F9FA]/80">
                    Dual core shear walls and moment frames compliant with <strong className="text-[#D3AE36] font-semibold">EBCS EN 1992</strong> &amp; <strong className="text-[#D3AE36] font-semibold">Eurocode 2</strong>.
                  </p>
                  {/* Structured Architectural Spec Micro-Box */}
                  <div className="p-3 rounded-2xl bg-[#DFE2EB] dark:bg-[#12151C]/70 border border-zinc-200/80 dark:border-[#31394D]/60 space-y-1.5 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px]">3D dynamic response spectrum</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px]">Ductility Class High (DCH) drift pass</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3.5 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex items-center justify-between text-[10px] font-mono font-bold">
                <span className="text-[#D3AE36]">ETABS · FEA Sizing</span>
                <span className="text-[#1E2025]/60 dark:text-[#F8F9FA]/60">01 / 03</span>
              </div>
            </div>

            {/* Bento Card 2: Highway Alignment & ERA Standards (Col 3-4) */}
            <div className="bg-[#DFE2EB] dark:bg-[#181B22] border border-[#31394D]/25 dark:border-[#31394D]/60 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 md:col-span-2 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] group-hover:scale-110 transition-transform">
                    <Activity size={24} className="text-[#D3AE36]" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#D3AE36]/10 text-[#D3AE36] border border-[#D3AE36]/30 font-bold">
                    ERA 2024 Code
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-[#1E2025] text-lg dark:text-[#F8F9FA] leading-snug">Highway Alignment &amp; ERA Standards</h3>
                  <p className="text-[#1E2025]/80 text-xs leading-relaxed dark:text-[#F8F9FA]/80">
                    Route geometric layout and cut-and-fill optimization adhering strictly to <strong className="text-[#D3AE36] font-semibold">ERA 2024</strong> manuals.
                  </p>
                  {/* Structured Architectural Spec Micro-Box */}
                  <div className="p-3 rounded-2xl bg-[#F8F9FA] dark:bg-[#12151C]/70 border border-zinc-200/80 dark:border-[#31394D]/60 space-y-1.5 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px]">Civil 3D corridor &amp; profile design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px]">Mass-haul volumetric balance</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3.5 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex items-center justify-between text-[10px] font-mono font-bold">
                <span className="text-[#D3AE36]">Civil 3D · Pavements</span>
                <span className="text-[#1E2025]/60 dark:text-[#F8F9FA]/60">02 / 03</span>
              </div>
            </div>

            {/* Bento Card 3: Practical Site Supervision & Soil Testing (Col 5-6) */}
            <div className="bg-[#F8F9FA] dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 sm:col-span-2 md:col-span-2 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} className="text-[#D3AE36]" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-bold">
                    OCC Field QA/QC
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-[#1E2025] text-lg dark:text-[#F8F9FA] leading-snug">Site Supervision &amp; Quality Control</h3>
                  <p className="text-[#1E2025]/80 text-xs leading-relaxed dark:text-[#F8F9FA]/80">
                    Field inspection conducted during <strong className="text-[#D3AE36] font-semibold">OCC Site Internships</strong> and ASTU geodetic survey camps.
                  </p>
                  {/* Structured Architectural Spec Micro-Box */}
                  <div className="p-3 rounded-2xl bg-[#DFE2EB] dark:bg-[#12151C]/70 border border-zinc-200/80 dark:border-[#31394D]/60 space-y-1.5 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px]">Slump test (80–120mm) &amp; cube QC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#D3AE36] font-bold">✦</span>
                      <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px]">Rebar spacing, lap lengths &amp; 135° hooks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3.5 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex items-center justify-between text-[10px] font-mono font-bold">
                <span className="text-[#D3AE36]">Slump QC · Field Survey · FDT</span>
                <span className="text-[#1E2025]/60 dark:text-[#F8F9FA]/60">03 / 03</span>
              </div>
            </div>

            {/* Bento Card 4: Full-Width 6-Col Bottom Showcase */}
            <div className="bg-[#DFE2EB] dark:bg-[#181B22] border border-[#31394D]/25 dark:border-[#31394D] rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 sm:col-span-2 md:col-span-6 grid sm:grid-cols-2 gap-8 items-center group">
              <div className="space-y-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36]">
                  <Ruler size={24} className="text-[#D3AE36]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-[#1E2025] text-xl sm:text-2xl dark:text-[#F8F9FA] leading-tight">
                    Bridging Office Calculations with Real Site Construction
                  </h3>
                  <p className="text-[#1E2025]/80 text-xs sm:text-sm leading-relaxed dark:text-[#F8F9FA]/80 max-w-md">
                    From finite element modeling in <strong className="text-[#D3AE36] font-semibold">ETABS</strong> and <strong className="text-[#D3AE36] font-semibold">Civil 3D</strong> to on-site concrete batching and rebar inspection, we ensure structural safety adheres to Ethiopian standards every step of the way.
                  </p>
                </div>

                {/* Structured Value Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#12151C] border border-[#31394D]/30">
                    <span className="font-bold text-[#1E2025] dark:text-[#F8F9FA] block text-xs">01. FEA Computer Modeling</span>
                    <span className="text-[10px] text-[#1E2025]/70 dark:text-[#F8F9FA]/70">ETABS 3D seismic &amp; frame dynamics</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#12151C] border border-[#31394D]/30">
                    <span className="font-bold text-[#1E2025] dark:text-[#F8F9FA] block text-xs">02. Field QA/QC Supervision</span>
                    <span className="text-[10px] text-[#1E2025]/70 dark:text-[#F8F9FA]/70">Slump testing, BBS &amp; Total Station</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-lg bg-[#F8F9FA] dark:bg-[#12151C] border border-[#31394D]/30 font-mono text-[11px] text-[#D3AE36] font-bold">EBCS EN 1992</span>
                  <span className="px-3 py-1 rounded-lg bg-[#F8F9FA] dark:bg-[#12151C] border border-[#31394D]/30 font-mono text-[11px] text-[#D3AE36] font-bold">ERA Standards</span>
                  <span className="px-3 py-1 rounded-lg bg-[#F8F9FA] dark:bg-[#12151C] border border-[#31394D]/30 font-mono text-[11px] text-[#D3AE36] font-bold">OCC Site Internship</span>
                  <span className="px-3 py-1 rounded-lg bg-[#F8F9FA] dark:bg-[#12151C] border border-[#31394D]/30 font-mono text-[11px] text-[#D3AE36] font-bold">Quality Assurance</span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-auto h-full min-h-[240px] border border-[#31394D]/25 dark:border-[#31394D] shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80" 
                  alt="Practical Construction & Structural Detailing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-xs flex justify-between items-center">
                  <span className="font-bold text-[#D3AE36]">OCC Reinforced Concrete Site</span>
                  <span className="text-[10px] text-white/80">Adama, Ethiopia</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.5 INTERACTIVE LOAD PATH & STRUCTURAL TELEMETRY SIMULATOR                */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative transition-colors bg-[#F8F9FA] dark:bg-[#12151C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
              Live Dynamic Mechanics Simulation
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight mb-4 dark:text-[#F8F9FA]">
              Real-Time Structural & Seismic <span className="text-[#D3AE36]">Load Path.</span>
            </h2>
            <p className="text-[#1E2025]/80 dark:text-[#F8F9FA]/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Explore how gravity loads, wind pressures, and Rift Valley seismic motions propagate through reinforced concrete columns, shear walls, and foundation soils down to bedrock.
            </p>
          </div>

          <LoadPathSimulator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT ME SECTION                                                       */}
      {/* ========================================================================= */}
      <section className="py-24 relative transition-colors bg-[#DFE2EB] dark:bg-[#1E2025]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="relative rounded-2xl group transition-all duration-300">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#12151C] border border-[#31394D]/30 dark:border-[#31394D] shadow-xl">
                    <img
                      src={brotherhoodMembers[activeBrotherIndex].img}
                      alt={brotherhoodMembers[activeBrotherIndex].name}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-[#12151C]/85 backdrop-blur-md p-4 text-xs font-mono rounded-xl text-white border border-[#232936]">
                    <div className="flex justify-between items-center text-[#D3AE36] font-bold uppercase tracking-wider mb-1">
                      <span>{brotherhoodMembers[activeBrotherIndex].name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D3AE36]/15 border border-[#D3AE36]/30">
                        {brotherhoodMembers[activeBrotherIndex].badge}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#F8F9FA] block font-semibold">
                      {brotherhoodMembers[activeBrotherIndex].role}
                    </span>
                    <span className="text-[9px] text-[#F8F9FA]/60 uppercase tracking-widest block font-medium mt-0.5">
                      {brotherhoodMembers[activeBrotherIndex].sub}
                    </span>
                  </div>
                </div>

                {/* Brotherhood Thumbnail Switcher Strip */}
                <div className="mt-4 pt-3 border-t border-[#31394D]/30 dark:border-[#31394D] flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#D3AE36] uppercase font-bold shrink-0">
                    <Users size={13} />
                    <span>Cohort:</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {brotherhoodMembers.map((b, idx) => (
                      <button
                        key={b.name}
                        onClick={() => setActiveBrotherIndex(idx)}
                        title={`${b.name} · ${b.role}`}
                        className={`relative w-8 h-8 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                          activeBrotherIndex === idx
                            ? 'border-[#D3AE36] ring-2 ring-[#D3AE36]/50 scale-110 shadow-md'
                            : 'border-[#31394D]/40 dark:border-[#31394D] opacity-60 hover:opacity-100 hover:border-[#D3AE36]'
                        }`}
                      >
                        <img src={b.img} alt={b.name} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] w-max font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                Academic Journey & Engineering Brotherhood
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2025] tracking-tight dark:text-[#F8F9FA]">
                Civil Engineering Built on <span className="text-[#D3AE36]">Practical Construction &amp; Rigor.</span>
              </h2>

              {/* Editorial Lead Paragraph */}
              <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-sm sm:text-base leading-relaxed">
                At <strong className="text-[#D3AE36] font-bold">Adama Science and Technology University (ASTU)</strong>, our 5-year curriculum fuses advanced structural modeling with real on-site field practice. Graduating as civil engineering brothers, we turn complex design codes into durable, buildable physical assets.
              </p>

              {/* 2-Column Technical Experience DIV Cards */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-[#232936] border border-[#31394D]/30 dark:border-[#31394D] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="text-[#D3AE36] w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold text-[#1E2025] dark:text-[#F8F9FA] uppercase font-mono tracking-wider">
                      ASTU Capstone Rigor
                    </span>
                  </div>
                  <p className="text-xs text-[#1E2025]/75 dark:text-[#F8F9FA]/75 leading-relaxed">
                    5th-year multidisciplinary capstone projects compliant with <span className="text-[#D3AE36] font-semibold">EBCS EN 1990–1998</span> and ERA geometric road standards.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#DFE2EB] dark:bg-[#181B22] border border-[#31394D]/30 dark:border-[#31394D] shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <HardHat className="text-[#D3AE36] w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold text-[#1E2025] dark:text-[#F8F9FA] uppercase font-mono tracking-wider">
                      OCC Site Supervision
                    </span>
                  </div>
                  <p className="text-xs text-[#1E2025]/75 dark:text-[#F8F9FA]/75 leading-relaxed">
                    Industrial internships at <span className="text-[#D3AE36] font-semibold">Oromia Construction Corp</span> — supervising concrete batching, slump cone QC, and Total Station setting-out.
                  </p>
                </div>
              </div>

              {/* Executive Architectural Pull-Quote DIV */}
              <div className="relative p-4 sm:p-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#232936]/60 border-l-4 border-[#D3AE36] border-y border-r border-[#31394D]/25 dark:border-[#31394D]/50 shadow-xs">
                <p className="text-xs sm:text-sm text-[#1E2025] dark:text-[#F8F9FA] italic leading-relaxed font-serif">
                  “Civil engineering is about turning physical laws and local materials into safe, durable structures. We bridge office calculations with real boots-on-the-ground construction.”
                </p>
                <div className="mt-2 text-[10px] font-mono text-[#D3AE36] uppercase tracking-wider font-bold">
                  — Lemma Amensisa &amp; ASTU SoCEA Civil Engineering Cohort
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#DFE2EB] dark:bg-[#181B22] border border-[#31394D]/25 dark:border-[#31394D]/60 flex items-center gap-3.5 shadow-xs hover:border-[#D3AE36]/50 transition-all">
                  <div className="p-2.5 rounded-xl bg-[#D3AE36]/10 text-[#D3AE36] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#1E2025] font-bold block dark:text-[#F8F9FA]">B.Sc. Civil Engineering (5th Year)</span>
                    <span className="text-[10px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75">Adama Science &amp; Technology University</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 flex items-center gap-3.5 shadow-xs hover:border-[#D3AE36]/50 transition-all">
                  <div className="p-2.5 rounded-xl bg-[#D3AE36]/10 text-[#D3AE36] shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#1E2025] font-bold block dark:text-[#F8F9FA]">Practical Site Internship</span>
                    <span className="text-[10px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75">OCC Supervision &amp; Geodetic Survey Camps</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about"
                  className="rounded-full bg-[#D3AE36] text-[#12151C] hover:bg-[#C29F2F] px-7 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 font-bold shadow-md shadow-[#D3AE36]/20"
                >
                  Full Academic Profile <ArrowUpRight size={14} />
                </Link>
                <Link
                  to="/about#brotherhood"
                  className="rounded-full bg-[#FFFFFF] dark:bg-[#232936] text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] hover:border-[#D3AE36] border border-[#31394D]/30 dark:border-[#31394D] px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                >
                  <Users size={14} className="text-[#D3AE36]" />
                  <span>Meet Our Brotherhood Cohort</span>
                </Link>
                <a
                  href="/resources"
                  className="rounded-full text-[#1E2025] dark:text-[#F8F9FA]/80 hover:text-[#D3AE36] px-5 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  CV (PDF) <Download size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPERTISE / SERVICES SECTION                                           */}
      {/* ========================================================================= */}
      <section className="py-24 relative transition-colors bg-[#F8F9FA] dark:bg-[#12151C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                Core Capabilities & Practice
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight dark:text-[#F8F9FA]">
                Core Civil Engineering <span className="text-[#D3AE36]">Specializations &amp; Capstones.</span>
              </h2>
              <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Comprehensive structural analysis, highway geometric modeling, and geotechnical evaluations developed at ASTU.
              </p>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-[#D3AE36] hover:text-[#1E2025] transition-colors flex items-center gap-2 dark:hover:text-[#F8F9FA]">
              Explore All Disciplines <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((srv, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`${isEven ? 'bg-[#DFE2EB] dark:bg-[#1E2025]' : 'bg-[#F8F9FA] dark:bg-[#232936]'} border border-[#31394D]/25 dark:border-[#31394D]/60 rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Building2 size={24} />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#D3AE36]/10 text-[#D3AE36] border border-[#D3AE36]/30 font-bold uppercase tracking-wider">
                        Specialization 0{index + 1}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#1E2025] mb-2.5 group-hover:text-[#D3AE36] transition-colors dark:text-[#F8F9FA]">{srv.title}</h4>
                    <p className="text-[#1E2025]/80 text-sm leading-relaxed mb-4 dark:text-[#F8F9FA]/80">{srv.summary || srv.description}</p>
                    
                    {/* Structured Technical Specification DIV Card */}
                    <div className={`p-3.5 rounded-2xl ${isEven ? 'bg-[#F8F9FA]/90 dark:bg-[#12151C]/70' : 'bg-[#DFE2EB]/90 dark:bg-[#12151C]/70'} border border-zinc-200/80 dark:border-[#31394D]/60 space-y-1.5 font-mono text-xs mb-5`}>
                      <div className="flex items-center gap-2">
                        <span className="text-[#D3AE36] font-bold">✦ Standard:</span>
                        <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px]">EBCS EN, ERA 2024 &amp; ASTM Standards</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#D3AE36] font-bold">✦ Execution:</span>
                        <span className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-[11px]">3D Modeling, Field Testing &amp; BBS Calculation</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/services" className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] hover:text-[#C29F2F] flex items-center justify-between pt-4 border-t border-[#31394D]/15 dark:border-[#31394D]/50">
                    <span>Explore Scope &amp; Deliverables</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STATISTICS ROW                                                         */}
      {/* ========================================================================= */}
      <section className="py-14 transition-colors bg-[#DFE2EB] dark:bg-[#1E2025] border-y border-[#31394D]/15 dark:border-[#31394D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-[#F8F9FA] dark:bg-[#232936] border border-[#31394D]/20 shadow-xs">
            <StatCounter value={settings.yearsExp || '5th Year'} label="Academic Year" subtext="ASTU Graduating Class of 2026" />
          </div>
          <div className="rounded-2xl bg-[#DFE2EB] dark:bg-[#181B22] border border-[#31394D]/20 shadow-xs">
            <StatCounter value={settings.projectsCount || '25+'} label="Academic &amp; Site Projects" subtext="Capstones, Labs &amp; Internships" />
          </div>
          <div className="rounded-2xl bg-[#F8F9FA] dark:bg-[#232936] border border-[#31394D]/20 shadow-xs">
            <StatCounter value={settings.safetyRecord || '100%'} label="Defense Readiness" subtext="Zero Critical Deficiencies" />
          </div>
          <div className="rounded-2xl bg-[#DFE2EB] dark:bg-[#181B22] border border-[#31394D]/20 shadow-xs">
            <StatCounter value={settings.clientsCount || 'ASTU SoCEA'} label="University School" subtext="Civil Eng &amp; Architecture" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FEATURED PROJECTS CASE STUDIES                                         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 relative transition-colors bg-[#F8F9FA] dark:bg-[#12151C]" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                ASTU Capstone &amp; Field Practice
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight dark:text-[#F8F9FA]">
                Featured Civil Engineering <span className="text-[#D3AE36]">Capstones.</span>
              </h2>
              <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Showcase of verified structural designs, highway link models, and expansive soil foundations engineered at ASTU.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="rounded-full text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 w-max"
            >
              Browse All Projects <ChevronRight size={14} />
            </Link>
          </div>

          <div className="space-y-12">
            {projects.slice(0, 3).map((proj, pIdx) => {
              const isEven = pIdx % 2 === 0;
              const softwareList = typeof proj.softwareUsed === 'string'
                ? JSON.parse(proj.softwareUsed || '[]')
                : (proj.softwareUsed || []);

              return (
                <article 
                  key={proj.id}
                  className={`group grid overflow-hidden md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl ${
                    isEven ? 'bg-[#DFE2EB] dark:bg-[#1E2025]' : 'bg-[#F8F9FA] dark:bg-[#232936]'
                  } border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300`}
                >
                  {/* Left Column Image */}
                  <div className="relative overflow-hidden rounded-2xl min-h-[280px] border border-[#31394D]/20 dark:border-[#31394D]/50 shadow-xs">
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="rounded-full bg-black/70 backdrop-blur-md text-[#D3AE36] text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider border border-[#D3AE36]/30">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 text-[9px] font-mono text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full font-semibold border border-white/10">
                      ASTU CAPSTONE · {proj.year}
                    </div>
                  </div>

                  {/* Right Column Content */}
                  <div className="flex flex-col gap-4 py-1 justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75 text-xs uppercase tracking-[0.2em] mb-1.5 font-semibold">
                        <span className="text-[#D3AE36] flex items-center gap-1 font-bold">
                          <MapPin size={12} /> {proj.location}
                        </span>
                        <span aria-hidden="true" className="text-[#31394D]">·</span>
                        <span>{proj.year}</span>
                      </div>
                      
                      <h3 className="font-bold text-xl md:text-2xl text-[#1E2025] group-hover:text-[#D3AE36] transition-colors mb-2.5 leading-snug dark:text-[#F8F9FA]">
                        {proj.title}
                      </h3>
                      
                      <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-xs sm:text-sm leading-relaxed mb-4">
                        {proj.description}
                      </p>

                      {/* Structured Technical Specs DIV Box */}
                      <div className="p-3.5 rounded-2xl bg-zinc-50/90 dark:bg-[#12151C]/70 border border-zinc-200/80 dark:border-[#31394D]/60 space-y-2 mb-4 text-xs font-mono">
                        <div className="flex items-start gap-2">
                          <span className="text-[#D3AE36] font-bold text-[11px] shrink-0 uppercase tracking-wider">✦ System:</span>
                          <span className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-xs font-medium font-sans">{proj.structuralSystem}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#D3AE36] font-bold text-[11px] shrink-0 uppercase tracking-wider">✦ Result:</span>
                          <span className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 text-xs font-medium font-sans">{proj.result}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-0.5">
                        {softwareList.slice(0, 4).map((soft) => (
                          <span 
                            key={soft}
                            className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#12151C] border border-[#31394D]/30 font-mono text-xs text-[#D3AE36] font-semibold"
                          >
                            #{soft}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 flex items-center justify-between border-t border-[#31394D]/15 dark:border-[#31394D]/50">
                      <button
                        onClick={() => setSelectedCaseStudy(proj)}
                        className="rounded-full bg-[#D3AE36] text-[#12151C] hover:bg-[#C29F2F] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                      >
                        Explore Case Study <ArrowUpRight size={13} />
                      </button>
                      <Link 
                        to={`/projects/${proj.slug || 'astu-central-multipurpose-complex'}`}
                        className="text-[11px] font-mono text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] uppercase tracking-wider flex items-center gap-1 font-semibold"
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
      <section className="py-20 md:py-28 relative transition-colors bg-[#DFE2EB] dark:bg-[#1E2025]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
              ASTU Multi-Layer CAD &amp; FEA Telemetry Board
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight mb-4 dark:text-[#F8F9FA]">
              Interactive Capstone <span className="text-[#D3AE36]">Dossier &amp; Structural Inspector.</span>
            </h2>
            <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base leading-relaxed">
              Toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles with certified code verification markers.
            </p>
          </div>

          <BlueprintInspector />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CLIENT TRUST & TESTIMONIALS                                            */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-24 relative transition-colors scroll-mt-20 bg-[#F8F9FA] dark:bg-[#12151C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                Academic &amp; Field Endorsements
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight dark:text-[#F8F9FA]">
                Faculty &amp; Peer <span className="text-[#D3AE36]">Endorsements.</span>
              </h2>
              <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
                Recommendations and academic reviews from ASTU faculty, internship supervisors, and student brothers.
              </p>
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="flex items-center gap-4 py-2 shrink-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#D3AE36]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D3AE36" className="text-[#D3AE36]" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#1E2025]/85 dark:text-[#F8F9FA]/85 mt-1 font-semibold">
                  5.0 ★ Rating from ASTU Faculty &amp; Mentors
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
                    ? 'bg-[#D3AE36] text-[#12151C] scale-105 font-extrabold'
                    : 'text-[#1E2025] hover:text-[#D3AE36] dark:text-[#F8F9FA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Testimonials Cards Grid */}
          {filteredTestimonials.length === 0 ? (
            <div className="py-16 text-center mb-12">
              <MessageSquareQuote className="mx-auto w-10 h-10 text-[#D3AE36]/60 mb-2" />
              <p className="text-[#1E2025] text-xs font-mono uppercase tracking-wider">
                No endorsements match the selected category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {filteredTestimonials.map((t, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={t.id || idx} 
                    className={`${isEven ? 'bg-[#DFE2EB] dark:bg-[#1E2025]' : 'bg-[#F8F9FA] dark:bg-[#232936]'} border border-[#31394D]/25 dark:border-[#31394D] rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group`}
                  >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-1 text-[#D3AE36]">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} size={15} fill="#D3AE36" className="text-[#D3AE36]" />
                        ))}
                      </div>
                      <Quote className="text-[#31394D] w-8 h-8 group-hover:text-[#D3AE36]/40 transition-colors" />
                    </div>

                    <p className="text-[#1E2025]/90 text-sm leading-relaxed mb-6 italic font-light dark:text-[#F8F9FA]/90">
                      "{t.content}"
                    </p>

                    {t.projectRef && (
                      <div className="mb-4 text-[11px] font-mono text-[#D3AE36] flex items-center gap-1.5 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36]"></span>
                        <span className="truncate">Ref: {t.projectRef}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#31394D]/15 dark:border-[#31394D]/50">
                    <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center font-bold text-[#D3AE36] text-xs shrink-0 bg-[#D3AE36]/10 border border-[#D3AE36]/30">
                      {t.avatarUrl ? (
                        <img src={t.avatarUrl} alt={t.clientName} className="w-full h-full object-cover" />
                      ) : (
                        (t.clientName || 'CL').slice(0, 2).toUpperCase()
                      )}
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="text-[#1E2025] font-bold text-sm truncate dark:text-[#F8F9FA]">{t.clientName}</h5>
                      <p className="text-[#1E2025]/75 text-xs truncate dark:text-[#F8F9FA]/75">{t.clientRole}</p>
                      <span className="inline-block text-[10px] font-mono text-[#D3AE36] uppercase tracking-wider mt-0.5 font-bold truncate max-w-full">
                        {t.clientCompany}
                      </span>
                    </div>
                  </div>
                </div>
              ); })}
            </div>
          )}

          {/* Consultation Prompt / Trust Banner Architectural DIV Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#DFE2EB] dark:bg-[#1E2025] border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-6 my-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-[#1E2025] dark:text-[#F8F9FA]">ASTU 5th-Year Capstone Defense Ready</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>
                <p className="text-xs text-[#1E2025]/80 dark:text-[#F8F9FA]/80">All designs adhere to Ethiopian Building Code Standards (EBCS) and ERA Manuals.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-[#D3AE36] text-[#12151C] px-6 py-3.5 text-xs font-mono font-extrabold tracking-widest uppercase hover:bg-[#C29F2F] transition-all shrink-0 inline-flex items-center gap-2 shadow-sm active:scale-95"
            >
              Connect With Us <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. LATEST ENGINEERING INSIGHTS                                            */}
      {/* ========================================================================= */}
      <section className="py-24 relative transition-colors bg-[#DFE2EB] dark:bg-[#1E2025]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                ASTU Student Research &amp; Technical Notes
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight dark:text-[#F8F9FA]">
                Technical Notes &amp; <span className="text-[#D3AE36]">Research Papers.</span>
              </h2>
              <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                EBCS code evaluations, expansive black cotton soil mitigation, and hydraulic design notes.
              </p>
            </div>
            <Link to="/insights" className="text-xs font-bold uppercase tracking-widest text-[#D3AE36] hover:text-[#1E2025] transition-colors flex items-center gap-2 dark:hover:text-[#F8F9FA]">
              Browse All Articles <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {insights.slice(0, 3).map((article, i) => {
              const isEven = i % 2 === 0;
              return (
                <Link 
                  key={i} 
                  to={`/insights/${article.slug || 'mitigating-differential-settlement-expansive-soils'}`} 
                  className={`${isEven ? 'bg-[#F8F9FA] dark:bg-[#232936]' : 'bg-[#DFE2EB] dark:bg-[#181B22]'} border border-[#31394D]/25 dark:border-[#31394D] rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#D3AE36]/10 text-[#D3AE36] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <FileText size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-mono text-[#D3AE36] tracking-widest block mb-2 font-bold">{article.category} • {article.date || 'Oct 2026'}</span>
                    <h5 className="text-base font-bold text-[#1E2025] group-hover:text-[#D3AE36] transition-colors mb-3 dark:text-[#F8F9FA] leading-snug">{article.title}</h5>
                    <p className="text-xs text-[#1E2025]/75 dark:text-[#F8F9FA]/75 leading-relaxed mb-4 line-clamp-2">
                      {article.summary || article.excerpt || 'Technical analysis and design procedures compliant with Ethiopian Building Code Standards (EBCS).'}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] group-hover:text-[#C29F2F] flex items-center gap-1.5 pt-4 border-t border-[#31394D]/15 dark:border-[#31394D]/50">
                    <span>Read Technical Paper</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CONTACT BENTO STRIP                                                   */}
      {/* ========================================================================= */}
      <section className="py-20 relative transition-colors bg-[#F8F9FA] dark:bg-[#12151C]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D3AE36] mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
              Academic &amp; Graduate Opportunities
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E2025] tracking-tight mb-4 dark:text-[#F8F9FA]">
              Have Inquiries? <span className="text-[#D3AE36]">Connect with Our Team!</span>
            </h2>
            <p className="text-[#1E2025]/85 dark:text-[#F8F9FA]/85 text-sm md:text-base leading-relaxed">
              Inquire about 2026 graduate engineer recruitment, B.Sc. capstone collaborations, or civil engineering consulting.
            </p>
          </div>

          {/* 3-Column Direct Contact Info Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {/* Item 1: Email */}
            <a 
              href="mailto:lemmayezedlij21@gmail.com" 
              className="bg-[#DFE2EB] dark:bg-[#1E2025] border border-[#31394D]/25 dark:border-[#31394D] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#D3AE36]/60 transition-all flex items-center gap-4 group"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#D3AE36]/10 text-[#D3AE36] group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div className="flex flex-col gap-y-0.5 overflow-hidden">
                <h4 className="text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA]">Send an Email</h4>
                <p className="text-xs font-mono text-[#1E2025]/80 dark:text-[#F8F9FA]/80 truncate group-hover:text-[#D3AE36] transition-colors">lemmayezedlij21@gmail.com</p>
              </div>
            </a>

            {/* Item 2: Phone */}
            <a 
              href="tel:+251934830919" 
              className="bg-[#F8F9FA] dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#D3AE36]/60 transition-all flex items-center gap-4 group"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#D3AE36]/10 text-[#D3AE36] group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h4 className="text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA]">Call Direct</h4>
                <p className="text-xs font-mono text-[#1E2025]/80 dark:text-[#F8F9FA]/80 group-hover:text-[#D3AE36] transition-colors">+251 934 830 919</p>
              </div>
            </a>

            {/* Item 3: Location */}
            <div className="bg-[#DFE2EB] dark:bg-[#1E2025] border border-[#31394D]/25 dark:border-[#31394D] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#D3AE36]/60 transition-all flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#D3AE36]/10 text-[#D3AE36]">
                <MapPin size={22} />
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h4 className="text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA]">ASTU Main Campus</h4>
                <p className="text-xs font-mono text-[#1E2025]/80 dark:text-[#F8F9FA]/80">School of Civil Eng &amp; Architecture</p>
              </div>
            </div>
          </div>

          {/* Full Consultation Trigger Banner Architectural DIV Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#DFE2EB] dark:bg-[#1E2025] border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-left space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
                <span className="text-xs font-mono text-[#D3AE36] font-bold uppercase tracking-wider">Direct Academic &amp; Industry Inquiry</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E2025] dark:text-[#F8F9FA] leading-tight">
                Interested in Collaborating on Civil Engineering Projects?
              </h3>
              <p className="text-xs sm:text-sm text-[#1E2025]/80 dark:text-[#F8F9FA]/80 leading-relaxed">
                Submit project inquiries, graduate opportunities, structural modeling assessments, or academic research collaborations.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D3AE36] text-[#12151C] hover:bg-[#C29F2F] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 active:scale-95 cursor-pointer shadow-md shadow-[#D3AE36]/20"
            >
              <span>Connect With Us</span>
              <ArrowUpRight size={14} />
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
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
