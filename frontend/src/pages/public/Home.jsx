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
    'Highway Alignment & ERA Standards',
    'Expansive Clay Foundation Sizing',
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
      engineerName: 'Lemma Techane',
      title: '5th Year Civil Engineering Student | ASTU',
      heroHeadlineLine1: 'Engineering Ethiopia.',
      heroHeadlineAccent: 'ASTU ',
      heroHeadlineLine2: 'Civil 5th Year.',
      heroBio: 'Final-year Civil Engineering student team at Adama Science and Technology University (ASTU). Graduating brothers designing resilient reinforced concrete buildings, sustainable highway corridors, and innovative graduation capstone projects.',
      introVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-building-41618-large.mp4',
      yearsExp: '5th Year',
      projectsCount: '25+',
      safetyRecord: '100%',
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

  // Marquee tools and building codes
  const techMarquee = [
    'ETABS 2024', 'SAP2000', 'AutoCAD Civil 3D', 'SAFE Concrete', 'Revit Structure', 'Prokon', 'ArcGIS', 'AutoCAD Detailing',
    'EBCS EN 1992', 'EBCS EN 1998', 'ERA Highway Manual', 'Eurocode 2 & 8', 'ASTM & ACI 318'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('astu.civil.lemma@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-center items-center py-20 sm:py-28 lg:py-24 px-4 sm:px-6 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B0C0E] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Luminous White Glass Frosted Sheen & Reflection Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-[#0B0C0E] dark:via-[#0B0C0E] dark:to-[#0B0C0E] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          {/* Subtle Ambient Studio Light (Wine & Gold) */}
          <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/[0.02] dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/[0.02] dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none"></div>
          
          {/* 3D Interactive Three.js High-Rise Civil Engineering Process Model */}
          <div className="absolute inset-0">
            <Hero3DCanvas />
          </div>

          {/* Precision Blueprint Vignette Edge Fade - subtle bottom transition only */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-[#0B0C0E] dark:via-[#0B0C0E]/90 to-transparent pointer-events-none"></div>
        </div>

        {/* Floating Translucent Accent Ring */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-[28%] left-[16%] sm:left-[24%] w-4 h-4 rounded-full border-2 border-white/80 dark:border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-xs animate-pulse hidden sm:block z-10"
        />

        {/* Hero Content Container - Split 2-Column Professional Architecture */}
        <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8 select-text">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            
            {/* --------------------------------------------------------------- */}
            {/* LEFT COLUMN: Headings, Bio Narrative, Engineering Badges & CTAs */}
            {/* --------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left gap-4 sm:gap-5 select-text">
              


              {/* Main Headline (Left Aligned) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-1 sm:space-y-1.5 pointer-events-auto select-text"
              >
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-[2.2rem] xl:text-[2.45rem] tracking-tight leading-tight text-zinc-900 dark:text-zinc-100 select-text drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]">
                  <span className="block select-text">
                    {settings.heroHeadlineLine1 || 'Engineering Ethiopia.'}
                  </span>
                  <span className="text-[#801834] dark:text-[#E84855] block drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)] select-text">
                    {settings.heroHeadlineAccent ? `${settings.heroHeadlineAccent} ` : 'ASTU '}
                    {settings.heroHeadlineLine2 || 'Civil 5th Year.'}
                  </span>
                </h1>
              </motion.div>

              {/* Narrative Bio & Focus (Clean Typography without Background Box) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full space-y-2.5 pointer-events-auto select-text"
              >
                <p className="text-zinc-700 dark:text-zinc-300 font-medium text-sm sm:text-base leading-relaxed text-left select-text max-w-xl">
                  {settings.heroBio || 'Final-year Civil Engineering student team at Adama Science and Technology University (ASTU). Graduating brothers designing resilient reinforced concrete buildings, sustainable highway corridors, and innovative graduation capstone projects.'}
                </p>

                {/* Rotating Focus Indicator (Clean, No Card Background) */}
                <div className="flex items-center gap-2 text-xs font-mono select-text pt-0.5">
                  <span className="font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-[10px] select-text">Active Focus:</span>
                  <span className="font-bold text-[#801834] dark:text-[#E84855] underline decoration-[#D4AF37] decoration-2 underline-offset-4 select-text">
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
                {/* Primary Filled Pill Button */}
                <button
                  onClick={() => navigate('/projects')}
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-5 sm:px-7 py-3 sm:py-3.5 font-bold text-xs tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] flex items-center gap-2 group cursor-pointer border border-[#D4AF37] shrink-0 whitespace-nowrap"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                {/* Secondary Frosted Glass Pill Button */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-5 sm:px-6 py-3 sm:py-3.5 font-bold text-xs tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer shrink-0 whitespace-nowrap"
                >
                  <span>WATCH CAPSTONE SHOWREEL</span>
                  <Play size={12} className="fill-[#D4AF37] text-[#D4AF37] shrink-0" />
                </button>
              </motion.div>

              {/* Quick Credentials / Performance Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg pointer-events-auto select-text"
              >
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left select-text">
                  <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono select-text">{settings.yearsExp || '5th Year'}</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium select-text">Academic Level</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left select-text">
                  <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono select-text">{settings.projectsCount || '25+'}</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium select-text">Capstone & Projects</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left select-text">
                  <span className="block text-base sm:text-lg font-black text-[#D4AF37] font-mono select-text">100%</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium select-text">Defense Readiness</span>
                </div>
              </motion.div>

            </div>

            {/* --------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Professional Portrait & Portfolio Images Showcase */}
            {/* --------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center pointer-events-auto">
              <div className="relative w-full max-w-xl lg:max-w-2xl xl:max-w-none flex flex-col items-center">
                
                {/* Visual Composition Container */}
                <div className="relative w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
                  
                  {/* 1. Professional Engineer Portrait Card (Clean Image, Text on Hover Only) */}
                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 w-full sm:w-[58%] lg:w-[57%] xl:w-[58%] rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/95 dark:border-white/20 p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] group overflow-hidden"
                  >
                    {/* Engineer Portrait Photo - Taller Vertical Frame */}
                    <div 
                      onMouseEnter={() => setIsEngineerHovered(true)}
                      onMouseLeave={() => setIsEngineerHovered(false)}
                      className="relative aspect-[3/4.6] sm:aspect-[3/4.7] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-inner cursor-pointer"
                    >
                      <img
                        src={settings.avatarUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"}
                        alt="Lemma Techane"
                        className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                      />

                      {/* Smooth Hover Overlay - Never rendered before hover */}
                      <AnimatePresence>
                        {isEngineerHovered && (
                          <>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
                            />
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.25 }}
                              className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-white/95 dark:bg-black/85 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-sm pointer-events-auto select-text"
                            >
                              <p className="text-xs font-bold text-zinc-900 dark:text-white leading-tight select-text">
                                {settings.engineerName || 'Lemma Techane'}
                              </p>
                              <p className="text-[10px] text-[#801834] dark:text-[#D4AF37] font-semibold tracking-wide select-text">
                                5th Year Civil Engineering · ASTU Senior Candidate
                              </p>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* 2. Layered Portfolio Project Showcase Card (Clean Image, Text on Hover Only) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="relative z-20 w-full sm:w-[68%] lg:w-[67%] xl:w-[68%] sm:-ml-12 sm:mt-14 lg:mt-16 rounded-3xl bg-white/90 dark:bg-zinc-900/75 backdrop-blur-2xl border border-white/95 dark:border-white/20 p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.14),inset_0_1px_2px_rgba(255,255,255,0.95)] group select-text"
                  >
                    {/* Project Preview Image - Taller Vertical Frame */}
                    <div 
                      onMouseEnter={() => setIsProjectHovered(true)}
                      onMouseLeave={() => setIsProjectHovered(false)}
                      className="relative aspect-[16/13] sm:aspect-[16/13.5] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-inner cursor-pointer"
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
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.35 }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </AnimatePresence>

                      {/* Smooth Hover Overlay - Never rendered before hover */}
                      <AnimatePresence>
                        {isProjectHovered && (
                          <>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
                            />
                            <motion.div
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.25 }}
                              className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-semibold text-white pointer-events-auto select-text"
                            >
                              {heroProjects[activeHeroProjectIdx].metric}
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.25 }}
                              className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md text-zinc-900 dark:text-white shadow-xs pointer-events-none"
                            >
                              <ArrowUpRight size={13} />
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.25 }}
                              className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-auto select-text"
                            >
                              <p className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] font-semibold select-text">
                                {heroProjects[activeHeroProjectIdx].category}
                              </p>
                              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight truncate select-text">
                                {heroProjects[activeHeroProjectIdx].title}
                              </h4>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Interactive Project Switcher (Pure Thumbnails, No Text) */}
                    <div className="mt-2.5 flex items-center justify-center gap-2.5">
                      {heroProjects.map((proj, idx) => (
                        <button
                          key={proj.id}
                          onClick={() => setActiveHeroProjectIdx(idx)}
                          aria-label={proj.title}
                          className={`relative w-14 h-8 sm:w-16 sm:h-9 rounded-xl overflow-hidden transition-all duration-300 border-2 cursor-pointer ${
                            activeHeroProjectIdx === idx
                              ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-105 shadow-md'
                              : 'border-white/70 dark:border-white/20 opacity-50 hover:opacity-100 hover:scale-102'
                          }`}
                        >
                          <img
                            src={proj.imageUrl}
                            alt={proj.title}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INFINITE MARQUEE TICKER                                                */}
      {/* ========================================================================= */}
      <section aria-label="Software Stack & Standards" className="border-y border-zinc-200/80 bg-[#FFFFFF] py-4 overflow-hidden transition-colors">
        <div className="mx-auto max-w-6xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="overflow-hidden">
            <div className="animate-marquee flex items-center gap-10">
              {techMarquee.concat(techMarquee).map((tool, idx) => (
                <span 
                  key={idx} 
                  className="group flex items-center gap-2 whitespace-nowrap font-mono text-[#54595F] text-xs uppercase tracking-wider transition-colors hover:text-[#D4AF37]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform"></span>
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
      <section className="py-20 md:py-24 bg-[#FFFFFF] relative transition-colors border-b border-zinc-200/80">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              ASTU Civil Engineering Capabilities & Rigor
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Analyze. Calculate. <span className="text-[#D4AF37]">Deliver.</span>
            </h2>
            <p className="text-[#54595F] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Precision structural mechanics, highway alignments, and geotechnical simulations developed by ASTU 5th-year civil engineering brothers.
            </p>
          </div>

          <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
            
            {/* Bento Card 1: Multi-Story RC Structural Design (Col 1-2) */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-[#FFFFFF] px-8 pt-8 pb-6 md:col-span-2 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="relative mx-auto flex size-28 items-center justify-center rounded-full border-4 border-dashed border-[#D4AF37]/40 bg-[#FEF9E7] shadow-xs outline outline-zinc-200 outline-offset-4 group-hover:scale-105 transition-transform mb-6">
                <div className="absolute inset-0 z-10 scale-125 bg-radial from-[#D4AF37]/20 via-transparent to-transparent blur-xl"></div>
                <Building2 size={36} className="text-[#D4AF37] relative z-20" />
              </div>
              <div className="relative mt-2 space-y-1.5 text-center">
                <h3 className="font-semibold text-zinc-900 text-lg">Multi-Story RC Structural Design</h3>
                <p className="text-[#54595F] text-xs leading-relaxed">
                  Dual core shear walls, moment frames, and ductility detailing compliant with EBCS EN 1992 & Eurocode 2.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 text-[10px] font-mono text-[#D4AF37] text-center uppercase tracking-widest font-semibold">
                ETABS · EBCS EN 1992 Concrete
              </div>
            </div>

            {/* Bento Card 2: Highway Alignment & ERA Standards (Col 3-4) */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-[#FFFFFF] px-8 pt-8 pb-6 md:col-span-2 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="relative mx-auto flex size-28 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#FEF9E7] shadow-xs outline outline-zinc-200 outline-offset-4 group-hover:scale-105 transition-transform mb-6">
                <div className="absolute inset-0 z-10 scale-125 bg-radial from-[#D4AF37]/20 via-transparent to-transparent blur-xl"></div>
                <Activity size={36} className="text-[#D4AF37] relative z-20" />
              </div>
              <div className="relative mt-2 space-y-1.5 text-center">
                <h3 className="font-semibold text-zinc-900 text-lg">Highway Alignment & ERA Standards</h3>
                <p className="text-[#54595F] text-xs leading-relaxed">
                  Route geometric layout, vertical profiling, and earthwork cut-and-fill optimization per ERA manuals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 text-[10px] font-mono text-[#D4AF37] text-center uppercase tracking-widest font-semibold">
                Civil 3D · Pavement Design
              </div>
            </div>

            {/* Bento Card 3: Geotechnical & Foundation Sizing (Col 5-6) */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-[#FFFFFF] px-8 pt-8 pb-6 sm:col-span-2 md:col-span-2 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="min-h-28 relative flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#FEF9E7] text-[#D4AF37] border border-[#D4AF37]/30">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="font-mono text-xs font-bold text-zinc-900">100% Defense Readiness</div>
                </div>
                {/* Sparkline SVG Curve */}
                <svg fill="none" viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" className="translate-x-[5%] -rotate-1 scale-125 opacity-80 group-hover:opacity-100 transition-opacity my-2">
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
                <h3 className="font-semibold text-zinc-900 text-lg">Geotechnical & Foundation Sizing</h3>
                <p className="text-[#54595F] text-xs leading-relaxed">
                  Raft foundations and settlement control on expansive black cotton soils in the Ethiopian Rift Valley.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200 text-[10px] font-mono text-[#D4AF37] text-center uppercase tracking-widest font-semibold">
                Expansive Soil · Mat Footings
              </div>
            </div>

            {/* Bento Card 4: Full-Width 6-Col Bottom Showcase */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-[#FFFFFF] sm:col-span-2 md:col-span-6 p-0 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="grid h-full sm:grid-cols-2 items-center">
                <div className="relative z-10 space-y-6 py-8 ps-8 pe-6">
                  <div className="flex size-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#FEF9E7] shadow-xs outline outline-zinc-200 outline-offset-2">
                    <Ruler size={20} className="text-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-zinc-900 text-xl">3D Finite Element Simulation & Code Standards</h3>
                    <p className="text-[#54595F] text-xs sm:text-sm leading-relaxed max-w-md">
                      From ETABS multi-story building frame analysis to SAP2000 highway bridge girder design, calculations adhere to the highest Ethiopian and international performance criteria.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="rounded-full bg-[#FFFFFF] border border-zinc-200 px-3 py-1 font-mono text-[10px] text-[#54595F] uppercase font-semibold">EBCS EN 1992</span>
                    <span className="rounded-full bg-[#FFFFFF] border border-zinc-200 px-3 py-1 font-mono text-[10px] text-[#54595F] uppercase font-semibold">EBCS EN 1998</span>
                    <span className="rounded-full bg-[#FFFFFF] border border-zinc-200 px-3 py-1 font-mono text-[10px] text-[#54595F] uppercase font-semibold">ERA Standards</span>
                    <span className="rounded-full bg-[#FFFFFF] border border-zinc-200 px-3 py-1 font-mono text-[10px] text-[#54595F] uppercase font-semibold">Eurocode 2 & 8</span>
                  </div>
                </div>
                <div className="relative aspect-video sm:aspect-auto h-full min-h-[240px] overflow-hidden p-6 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-200 bg-[#FFFFFF] shadow-md group-hover:border-[#D4AF37]/50 transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80" 
                      alt="Structural FEA Simulation" 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-200 font-mono text-[10px] text-[#D4AF37] flex items-center gap-2 shadow-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      ETABS Live Multi-Story RC Frame Stress Analysis
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
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-b border-zinc-200/80 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Live Dynamic Mechanics Simulation
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Real-Time Structural & Seismic <span className="text-[#D4AF37]">Load Path.</span>
            </h2>
            <p className="text-[#54595F] text-sm md:text-base leading-relaxed">
              Explore how gravity loads, wind pressures, and Rift Valley seismic motions propagate through reinforced concrete columns, shear walls, and foundation soils down to bedrock.
            </p>
          </div>

          <LoadPathSimulator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT ME SECTION                                                       */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-zinc-200/80 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Decorative Outer Mask Frame */}
                <div aria-hidden="true" className="-inset-4 absolute rounded-[2rem] border border-[#D4AF37]/25 pointer-events-none"></div>

                <div className="relative border border-zinc-200/90 p-2.5 bg-[#FFFFFF] rounded-2xl shadow-lg group hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div className="aspect-[4/5] bg-zinc-100 overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                      alt="Lemma 5th Year Civil Engineering Student"
                      className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 border border-zinc-200 p-4 text-xs font-mono rounded-xl shadow-md backdrop-blur-md">
                    <div className="flex justify-between items-center text-[#D4AF37] font-bold uppercase tracking-wider mb-1">
                      <span>ASTU SoCEA</span>
                      <span>Class of 2026</span>
                    </div>
                    <span className="text-[10px] text-[#54595F] uppercase tracking-widest block font-medium">Adama Science and Technology University · Civil Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs w-max font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                Academic Journey & Engineering Brotherhood
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
                Civil Engineering Built on <span className="text-[#D4AF37]">ASTU Academic Rigor.</span>
              </h2>

              <p className="text-[#54595F] text-base leading-relaxed">
                Rooted at Adama Science and Technology University (ASTU), our 5-year civil engineering journey blends high-level mathematical theory with practical infrastructure projects. Alongside my engineering brothers, we tackle reinforced concrete design, highway alignment, and geotechnical challenges vital to Ethiopia's rapid urbanization.
              </p>

              <div className="bg-[#FFFFFF] border-l-2 border-[#D4AF37] p-5 text-sm text-[#54595F] italic leading-relaxed rounded-r-xl border-y border-r border-zinc-200">
                "Civil engineering is the noble discipline of turning physical laws and local resources into the foundational backbone of society. As ASTU graduating students, our mission is to engineer durable, resilient infrastructure for our communities."
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-[#FFFFFF] p-4 border border-zinc-200/90 rounded-2xl shadow-xs">
                  <GraduationCap className="text-[#D4AF37] w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-900 font-bold block">B.Sc. Civil Engineering (5th Year)</span>
                    <span className="text-[10px] text-[#54595F]">Adama Science & Technology University (ASTU)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#FFFFFF] p-4 border border-zinc-200/90 rounded-2xl shadow-xs">
                  <ShieldCheck className="text-[#D4AF37] w-5 h-5 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-900 font-bold block">100% Capstone Defense Readiness</span>
                    <span className="text-[10px] text-[#54595F]">School of Civil Eng & Architecture (SoCEA)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about"
                  className="rounded-full bg-[#D4AF37] text-[#121417] hover:bg-[#c49f2c] px-7 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] flex items-center gap-2 font-bold"
                >
                  Full Academic Profile & Credentials <ArrowUpRight size={14} />
                </Link>
                <a
                  href="/resources"
                  className="rounded-full bg-[#FFFFFF] text-[#54595F] border border-zinc-300 hover:border-[#D4AF37] hover:text-[#D4AF37] px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
                >
                  Download Academic CV (PDF) <Download size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPERTISE / SERVICES SECTION                                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF] relative transition-colors border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                Core Capabilities & Practice
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
                Core Civil Engineering <span className="text-[#D4AF37]">Specializations & Capstones.</span>
              </h2>
              <p className="text-[#54595F] text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Comprehensive structural analysis, highway geometric modeling, and geotechnical evaluations developed at ASTU.
              </p>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-zinc-900 transition-colors flex items-center gap-2">
              Explore All Disciplines <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((srv, index) => (
              <div key={index} className="group rounded-2xl bg-[#FFFFFF] border border-zinc-200/90 p-8 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#FEF9E7] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rounded-xl shadow-xs">
                    <Building2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-[#D4AF37] transition-colors">{srv.title}</h4>
                  <p className="text-[#54595F] text-sm leading-relaxed mb-6">{srv.summary || srv.description}</p>
                </div>
                <Link to="/services" className="text-xs font-mono font-bold uppercase tracking-wider text-[#54595F] group-hover:text-[#D4AF37] flex items-center gap-1.5 pt-4 border-t border-zinc-200">
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
      <section className="py-14 bg-[#FFFFFF] border-b border-zinc-200/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter value={settings.yearsExp || '5th Year'} label="Academic Year" subtext="ASTU Graduating Class of 2026" />
          <StatCounter value={settings.projectsCount || '25+'} label="Academic & Site Projects" subtext="Capstones, Labs & Internships" />
          <StatCounter value={settings.safetyRecord || '100%'} label="Defense Readiness" subtext="Zero Critical Deficiencies" />
          <StatCounter value={settings.clientsCount || 'ASTU SoCEA'} label="University School" subtext="Civil Eng & Architecture" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FEATURED PROJECTS CASE STUDIES                                         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] relative transition-colors border-b border-zinc-200/80" id="projects">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-zinc-200/80">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                ASTU Capstone & Field Practice
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
                Featured Civil Engineering <span className="text-[#D4AF37]">Capstones.</span>
              </h2>
              <p className="text-[#54595F] text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Showcase of verified structural designs, highway link models, and expansive soil foundations engineered at ASTU.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="rounded-full border border-zinc-300 bg-[#FFFFFF] text-[#54595F] hover:border-[#D4AF37] hover:text-[#D4AF37] px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 w-max shadow-xs"
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
                  className="group grid overflow-hidden rounded-2xl border border-zinc-200/90 bg-[#FFFFFF] md:grid-cols-2 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  {/* Left Column Image */}
                  <div className="relative overflow-hidden border-b border-zinc-200 md:border-b-0 md:border-r min-h-[280px]">
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04] grayscale opacity-85 group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 text-[9px] font-mono text-[#54595F] bg-[#FFFFFF]/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-200 shadow-xs font-semibold">
                      ASTU CAPSTONE · {proj.year}
                    </div>
                  </div>

                  {/* Right Column Content */}
                  <div className="flex flex-col gap-4 p-6 md:p-8 justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[#54595F] text-xs uppercase tracking-[0.2em] mb-1 font-semibold">
                        <span className="text-[#D4AF37] flex items-center gap-1">
                          <MapPin size={12} /> {proj.location}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{proj.year}</span>
                      </div>
                      
                      <h3 className="font-semibold text-xl md:text-2xl text-zinc-900 group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
                        {proj.title}
                      </h3>
                      
                      <p className="text-[#54595F] text-xs sm:text-sm leading-relaxed mb-4">
                        {proj.description}
                      </p>

                      <ul className="space-y-1.5 text-[#54595F] text-xs mb-4">
                        <li className="flex gap-2">
                          <span aria-hidden="true" className="text-[#D4AF37] font-bold">—</span>
                          <span><strong className="text-zinc-900">System:</strong> {proj.structuralSystem}</span>
                        </li>
                        <li className="flex gap-2">
                          <span aria-hidden="true" className="text-[#D4AF37] font-bold">—</span>
                          <span><strong className="text-zinc-900">Result:</strong> {proj.result}</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {softwareList.slice(0, 4).map((soft) => (
                          <span 
                            key={soft}
                            className="inline-flex items-center rounded-full border border-zinc-200 bg-[#FFFFFF] px-2.5 py-0.5 font-mono text-[10px] text-[#54595F] shadow-2xs font-semibold"
                          >
                            {soft}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-zinc-200 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedCaseStudy(proj)}
                        className="rounded-full bg-[#D4AF37] text-[#121417] hover:bg-[#c49f2c] px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        Explore Case Study <ArrowUpRight size={13} />
                      </button>
                      <Link 
                        to={`/projects/${proj.slug || 'astu-central-multipurpose-complex'}`}
                        className="text-[11px] font-mono text-[#54595F] hover:text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 font-semibold"
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
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-b border-zinc-200/80 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              ASTU Multi-Layer CAD & FEA Telemetry Board
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Interactive Capstone <span className="text-[#D4AF37]">Dossier & Structural Inspector.</span>
            </h2>
            <p className="text-[#54595F] text-sm md:text-base leading-relaxed">
              Toggle between 3D non-linear stress wireframes, physical architectural finishes, and high-strength rebar / post-tensioning profiles with certified code verification markers.
            </p>
          </div>

          <BlueprintInspector />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ENGINEERING EDUCATION: "WHAT CIVIL ENGINEERS DO"                       */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-zinc-200/80 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Demystifying Civil Engineering at ASTU
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              What Does a Civil Engineer <span className="text-[#D4AF37]">Actually Do?</span>
            </h2>
            <p className="text-[#54595F] text-sm md:text-base leading-relaxed">
              While architects design functional spatial layouts, ASTU-trained civil engineers calculate the physical mechanics, soil stability, drainage, and structural frameworks to ensure communities have safe, resilient buildings and transport corridors.
            </p>
          </div>

          {/* Education Sub-Navigation */}
          <div className="flex flex-wrap gap-2 mb-10 bg-[#FFFFFF] p-2 rounded-2xl border border-zinc-200/90 w-max shadow-sm">
            <button
              onClick={() => setActiveEducationTab('roles')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'roles'
                  ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105'
                  : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              Architect vs Civil Engineer vs Builder
            </button>
            <button
              onClick={() => setActiveEducationTab('loadpath')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'loadpath'
                  ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105'
                  : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              How Loads Flow (Physics of Safety)
            </button>
            <button
              onClick={() => setActiveEducationTab('when')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeEducationTab === 'when'
                  ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105'
                  : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              When Do You Need an Engineer?
            </button>
          </div>

          {/* Tab 1: Roles Comparison */}
          {activeEducationTab === 'roles' && (
            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200/90 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#D4AF37]/50 transition-all">
                <div>
                  <div className="w-12 h-12 bg-[#FFFFFF] border border-zinc-200 text-[#54595F] flex items-center justify-center mb-6 rounded-xl shadow-2xs">
                    <Compass size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider block mb-1 font-semibold">Spatial Design</span>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">The Architect</h3>
                  <p className="text-xs text-[#54595F] leading-relaxed mb-4">
                    Focuses on the human experience, exterior aesthetics, room layouts, natural lighting, ADA code circulation, and building facades.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 text-[11px] text-[#54595F]">
                  <strong className="text-zinc-900 block mb-1">Key Deliverable:</strong>
                  Architectural floor plans, exterior renderings & zoning permits.
                </div>
              </div>

              <div className="rounded-2xl bg-[#FFFFFF] border-2 border-[#D4AF37] p-8 relative flex flex-col justify-between shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                <div className="absolute -top-3 right-6 bg-[#D4AF37] text-[#121417] text-[10px] font-mono font-extrabold uppercase px-3 py-0.5 tracking-wider rounded-full shadow-sm">
                  Our ASTU Brotherhood
                </div>
                <div>
                  <div className="w-12 h-12 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mb-6 rounded-xl shadow-2xs">
                    <ShieldCheck size={26} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider block mb-1 font-semibold">Physics & Stability</span>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">The Civil / Structural Engineer</h3>
                  <p className="text-xs text-[#54595F] leading-relaxed mb-4">
                    Calculates force distributions, reinforcement rebar sizes, soil bearing capacity, and seismic safety to ensure structures remain rigid and safe under all loading conditions.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D4AF37]/30 text-[11px] text-[#D4AF37]">
                  <strong className="text-zinc-900 block mb-1">Key Deliverable:</strong>
                  Stamped structural calculations, reinforcement schedules, CAD drawings & EBCS compliance reports.
                </div>
              </div>

              <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200/90 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#D4AF37]/50 transition-all">
                <div>
                  <div className="w-12 h-12 bg-[#FFFFFF] border border-zinc-200 text-[#54595F] flex items-center justify-center mb-6 rounded-xl shadow-2xs">
                    <Hammer size={24} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider block mb-1 font-semibold">Physical Execution</span>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">The General Contractor</h3>
                  <p className="text-xs text-[#54595F] leading-relaxed mb-4">
                    Manages on-site sub-trades, pours the specified concrete mix, erects steel frames, and brings the structural drawings into physical reality.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 text-[11px] text-[#54595F]">
                  <strong className="text-zinc-900 block mb-1">Key Deliverable:</strong>
                  Physical building construction, daily safety oversight & trade scheduling.
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Load Path Visualization */}
          {activeEducationTab === 'loadpath' && (
            <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200/90 p-8 lg:p-10 shadow-sm">
              <div className="flex flex-wrap gap-2 mb-8 bg-[#FFFFFF] p-1.5 rounded-xl border border-zinc-200 w-max">
                <button
                  onClick={() => setActiveLoadPath('gravity')}
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg transition-all ${
                    activeLoadPath === 'gravity' ? 'bg-[#D4AF37] text-[#121417] shadow-xs' : 'text-[#54595F] hover:text-zinc-900'
                  }`}
                >
                  1. Downward Gravity Loads
                </button>
                <button
                  onClick={() => setActiveLoadPath('lateral')}
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg transition-all ${
                    activeLoadPath === 'lateral' ? 'bg-[#D4AF37] text-[#121417] shadow-xs' : 'text-[#54595F] hover:text-zinc-900'
                  }`}
                >
                  2. Lateral Hurricane & Seismic Loads
                </button>
              </div>

              {activeLoadPath === 'gravity' ? (
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-3">The Gravity Load Journey</h4>
                  <p className="text-xs text-[#54595F] leading-relaxed mb-8 max-w-2xl">
                    Every kilogram of building weight and live occupancy load must follow an unbroken mechanical path down into solid ground. If any link in this chain fails, localized collapse occurs:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                    <div className="rounded-xl bg-[#FFFFFF] border border-zinc-200 p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1 font-semibold">STAGE 1</span>
                      <h5 className="text-xs font-bold text-zinc-900 mb-1">Floor Slabs</h5>
                      <p className="text-[10px] text-[#54595F]">Receives people & equipment</p>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border border-zinc-200 p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1 font-semibold">STAGE 2</span>
                      <h5 className="text-xs font-bold text-zinc-900 mb-1">Beams & Girders</h5>
                      <p className="text-[10px] text-[#54595F]">Transfers load horizontally</p>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border border-zinc-200 p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1 font-semibold">STAGE 3</span>
                      <h5 className="text-xs font-bold text-zinc-900 mb-1">Columns / Walls</h5>
                      <p className="text-[10px] text-[#54595F]">Channels load downward</p>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border border-zinc-200 p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1 font-semibold">STAGE 4</span>
                      <h5 className="text-xs font-bold text-zinc-900 mb-1">Deep Caissons</h5>
                      <p className="text-[10px] text-[#54595F]">Distributes foundation pressure</p>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border-2 border-[#D4AF37] p-4 shadow-2xs">
                      <span className="text-[10px] font-mono text-[#D4AF37] block mb-1 font-bold">FINAL</span>
                      <h5 className="text-xs font-bold text-zinc-900 mb-1">Solid Bedrock</h5>
                      <p className="text-[10px] text-[#54595F]">Permanent reaction support</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-3">The Lateral Seismic & Wind Dissipation Path</h4>
                  <p className="text-xs text-[#54595F] leading-relaxed mb-8 max-w-2xl">
                    When 140mph hurricane winds blow or earthquakes shake the ground, horizontal shear tries to twist and slide the structure. Structural engineers design the lateral force resisting system (LFRS):
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="rounded-xl bg-[#FFFFFF] border border-zinc-200 p-5 shadow-2xs">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">1. Floor Diaphragms</h5>
                      <p className="text-xs text-[#54595F] leading-relaxed">Act as giant horizontal deep beams, collecting wind pressure from exterior facades and channeling it to the core.</p>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border border-zinc-200 p-5 shadow-2xs">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">2. Reinforced Concrete Core</h5>
                      <p className="text-xs text-[#54595F] leading-relaxed">Heavy shear wall core acts as a vertical cantilever beam that resists overturning moments.</p>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border border-zinc-200 p-5 shadow-2xs">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">3. Outrigger Belt Trusses</h5>
                      <p className="text-xs text-[#54595F] leading-relaxed">Couples the core to perimeter columns, activating push-pull resistance and damping vibrations.</p>
                    </div>
                    <div className="rounded-xl bg-[#FFFFFF] border border-zinc-200 p-5 shadow-2xs">
                      <h5 className="text-sm font-bold text-[#D4AF37] mb-2">4. Foundation Tiebacks</h5>
                      <p className="text-xs text-[#54595F] leading-relaxed">Deep tension anchors prevent the building from uprooting during extreme ground motions.</p>
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
                { title: 'Multi-Story Building Design & Permitting', desc: 'Ensures compliance with Ethiopian Building Code Standards (EBCS) and municipal building safety guidelines before construction permits are issued.' },
                { title: 'Expansive Black Cotton Soil Foundations', desc: 'Rift Valley expansive soils demand engineered mat or deep foundations to prevent severe foundation heave and wall cracking.' },
                { title: 'Highway Alignment & Route Grading', desc: 'Civil 3D geometric optimization aligns roads with ERA standards, maximizing driving safety while minimizing cut-and-fill costs.' },
                { title: 'Bridge Crossing & Culvert Hydraulics', desc: 'Hydraulic calculations determine proper flood opening sizes to prevent washouts and scour around abutments during flash rains.' },
                { title: 'Structural Renovation & Story Additions', desc: 'Adding extra floors multiplies gravity loads. A structural audit verifies if existing concrete columns and footings can safely carry the weight.' },
                { title: 'Value Engineering & Material Optimization', desc: 'Optimizing rebar schedules and concrete strength ratios saves developers and public agencies significant budget while guaranteeing structural safety.' }
              ].map((item, idx) => (
                <div key={idx} className="group rounded-2xl bg-[#FFFFFF] border border-zinc-200/90 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#D4AF37]/50 transition-all">
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono font-bold uppercase mb-2">
                    <CheckCircle2 size={15} /> Case 0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 mb-2 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                  <p className="text-xs text-[#54595F] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CLIENT TRUST & TESTIMONIALS                                            */}
      {/* ========================================================================= */}
      <section id="testimonials" className="py-24 bg-[#FFFFFF] border-b border-zinc-200/80 transition-colors scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                Academic Endorsements & Brotherhood Trust
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
                Faculty & Peer <span className="text-[#D4AF37]">Endorsements.</span>
              </h2>
              <p className="text-[#54595F] text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
                Direct academic evaluations and technical recommendations from ASTU professors, internship supervisors, and engineering brothers.
              </p>
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] border border-zinc-200/90 rounded-2xl p-4 shadow-sm shrink-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#54595F] mt-1 font-semibold">
                  5.0 ★ Rating from ASTU Faculty & Mentors
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
                    ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105 font-extrabold'
                    : 'bg-[#FFFFFF] text-[#54595F] border border-zinc-200/90 hover:text-zinc-900 hover:border-[#D4AF37]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Testimonials Cards Grid */}
          {filteredTestimonials.length === 0 ? (
            <div className="py-16 text-center bg-[#FFFFFF] rounded-2xl border border-zinc-200 mb-12 shadow-sm">
              <MessageSquareQuote className="mx-auto w-10 h-10 text-zinc-400 mb-2" />
              <p className="text-[#54595F] text-xs font-mono uppercase tracking-wider">
                No endorsements match the selected category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredTestimonials.map((t, idx) => (
                <div 
                  key={t.id || idx} 
                  className="group rounded-2xl bg-[#FFFFFF] border border-zinc-200/90 p-8 relative flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-1 text-[#D4AF37]">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} size={15} fill="#D4AF37" className="text-[#D4AF37]" />
                        ))}
                      </div>
                      <Quote className="text-zinc-300 w-8 h-8 group-hover:text-[#D4AF37]/40 transition-colors" />
                    </div>

                    <p className="text-zinc-800 text-sm leading-relaxed mb-6 italic font-light">
                      "{t.content}"
                    </p>

                    {t.projectRef && (
                      <div className="mb-6 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-zinc-200/80 text-[11px] font-mono text-[#54595F] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                        <span className="truncate">Ref: {t.projectRef}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3.5 border-t border-zinc-200 pt-5">
                    <div className="w-11 h-11 rounded-full bg-zinc-100 border-2 border-[#D4AF37]/60 overflow-hidden flex items-center justify-center font-bold text-[#D4AF37] text-xs shadow-xs shrink-0">
                      {t.avatarUrl ? (
                        <img src={t.avatarUrl} alt={t.clientName} className="w-full h-full object-cover" />
                      ) : (
                        (t.clientName || 'CL').slice(0, 2).toUpperCase()
                      )}
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="text-zinc-900 font-bold text-sm truncate">{t.clientName}</h5>
                      <p className="text-[#54595F] text-xs truncate">{t.clientRole}</p>
                      <span className="inline-block rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 px-2 py-0.5 text-[9px] font-mono text-[#D4AF37] uppercase tracking-wider mt-1 font-bold truncate max-w-full">
                        {t.clientCompany}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Consultation Prompt / Trust Banner */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200/90 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 className="text-base font-bold text-zinc-900">100% Capstone Defense & Structural Rigor Track Record</h4>
                <p className="text-xs text-[#54595F] mt-0.5">Every project engineered in strict compliance with Ethiopian Building Code Standards (EBCS), ERA Manuals, and Eurocodes.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-[#D4AF37] text-[#121417] px-6 py-3 text-xs font-extrabold tracking-widest uppercase hover:bg-[#c49f2c] transition-all shadow-sm shrink-0 inline-flex items-center gap-2"
            >
              Connect With Us <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. LATEST ENGINEERING INSIGHTS                                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-zinc-200/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                ASTU Student Research & Technical Notes
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
                Technical Notes & <span className="text-[#D4AF37]">Research Papers.</span>
              </h2>
              <p className="text-[#54595F] text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                EBCS code evaluations, expansive black cotton soil mitigation, and hydraulic design notes.
              </p>
            </div>
            <Link to="/insights" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-zinc-900 transition-colors flex items-center gap-2">
              Browse All Articles <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((article, i) => (
              <Link 
                key={i} 
                to={`/insights/${article.slug || 'mitigating-differential-settlement-expansive-soils'}`} 
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#FFFFFF] border border-zinc-200/80 hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              >
                <div>
                  <div className="p-3 bg-[#FFFFFF] text-[#D4AF37] border border-zinc-200 w-max mb-4 rounded-xl shadow-2xs">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest block mb-2 font-semibold">{article.category} • {article.date || 'Oct 2026'}</span>
                  <h5 className="text-base font-bold text-zinc-900 group-hover:text-[#D4AF37] transition-colors mb-4">{article.title}</h5>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#54595F] group-hover:text-[#D4AF37] flex items-center gap-1 pt-4 border-t border-zinc-200">
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
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-zinc-200/80 relative transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Optimization Feasibility Model
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Structural Material Optimization & <span className="text-[#D4AF37]">Cost Estimator.</span>
            </h2>
            <p className="text-[#54595F] text-sm md:text-base leading-relaxed">
              Estimate potential concrete volume savings and rebar optimization through advanced finite element redistribution and local Ethiopian material planning.
            </p>
          </div>

          <ValueEngineeringCalculator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CONTACT BENTO STRIP                                                   */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FFFFFF] border-t border-zinc-200/80 transition-colors" id="contact">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Academic & Graduate Opportunities
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Have Inquiries? <span className="text-[#D4AF37]">Connect with Our Team!</span>
            </h2>
            <p className="text-[#54595F] text-sm md:text-base leading-relaxed">
              Inquire about 2026 graduate engineer recruitment, B.Sc. capstone collaborations, or civil engineering consulting.
            </p>
          </div>

          {/* 3-Bento Contact Strip */}
          <div className="relative mb-10">
            <div aria-hidden="true" className="pointer-events-none absolute h-px bg-zinc-200 -top-px left-0 right-0"></div>
            <div className="grid gap-px overflow-hidden bg-zinc-200 rounded-2xl border border-zinc-200 md:grid-cols-3 shadow-md">
              {/* Card 1: Email */}
              <a 
                href="mailto:astu.civil.lemma@gmail.com" 
                className="flex items-center gap-3 bg-[#FFFFFF] p-5 shadow-xs transition-colors hover:bg-zinc-50 group"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5 overflow-hidden">
                  <h4 className="text-sm font-bold text-zinc-900">Send an Email</h4>
                  <p className="text-xs font-mono text-[#54595F] truncate group-hover:text-[#D4AF37] transition-colors">astu.civil.lemma@gmail.com</p>
                </div>
              </a>

              {/* Card 2: Phone */}
              <a 
                href="tel:+251911234567" 
                className="flex items-center gap-3 bg-[#FFFFFF] p-5 shadow-xs transition-colors hover:bg-zinc-50 group"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h4 className="text-sm font-bold text-zinc-900">Call Direct</h4>
                  <p className="text-xs font-mono text-[#54595F] group-hover:text-[#D4AF37] transition-colors">+251 91 123 4567</p>
                </div>
              </a>

              {/* Card 3: Location */}
              <div className="flex items-center gap-3 bg-[#FFFFFF] p-5 shadow-xs">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <h4 className="text-sm font-bold text-zinc-900">ASTU Main Campus</h4>
                  <p className="text-xs font-mono text-[#54595F]">School of Civil Eng & Architecture (EAT · UTC+3)</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute h-px bg-zinc-200 -bottom-px left-0 right-0"></div>
          </div>

          {/* Full Consultation Trigger Banner */}
          <div className="bg-[#FFFFFF] border border-zinc-200/90 p-8 sm:p-10 rounded-3xl text-center flex flex-col sm:flex-row justify-between items-center gap-6 shadow-md">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 mb-1.5">Interested in Collaborating on Civil Engineering Projects?</h3>
              <p className="text-xs sm:text-sm text-[#54595F]">Submit project inquiries, graduate opportunities, or academic research collaborations.</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] text-[#121417] hover:bg-[#c49f2c] px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] shrink-0 flex items-center gap-2 active:scale-95"
            >
              Connect With Us <ArrowUpRight size={14} />
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
          <div className="relative w-full max-w-4xl bg-[#FFFFFF] border border-zinc-200 p-2 rounded-xl shadow-2xl">
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
