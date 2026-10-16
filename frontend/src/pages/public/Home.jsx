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
  X
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
    }
  ];

  const services = servicesData?.services || [
    { icon: 'Building2', title: 'Structural Analysis & Design', summary: 'Advanced linear & non-linear 3D modeling for high-rise towers, commercial centers, and civic buildings.' },
    { icon: 'Layers', title: 'Reinforced Concrete & Steel', summary: 'Specialized connection detailing, post-tensioned slab calculations, and structural steel optimization.' },
    { icon: 'ShieldCheck', title: 'Seismic Retrofit & Evaluation', summary: 'Structural integrity auditing, non-destructive testing, dynamic pushover analysis, and dampening retrofits.' },
    { icon: 'Ruler', title: 'Peer Review & Consultation', summary: 'Third-party calculation verification, cost value engineering, and constructability advisory.' }
  ];

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center py-16 overflow-hidden bg-[#121417] border-b border-[#222]">
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
              <HardHat size={14} /> Professional Structural Engineer PE, SE
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#EAEAEA] leading-[1.08] tracking-tight">
              Precision in <br />
              Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Structure.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl leading-relaxed border-l-2 border-[#D4AF37] pl-4">
              {settings.heroBio || 'Ensuring structural integrity, seismic safety, and architectural elegance for high-rise towers, infrastructure bridges, and complex developments.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => navigate('/contact')}
                className="bg-[#D4AF37] text-[#121417] px-8 py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center gap-2"
              >
                Request Consultation <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="border border-[#333] bg-[#1E2125] text-[#EAEAEA] px-8 py-4 text-xs font-bold tracking-widest uppercase hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
              >
                View Portfolio <ChevronRight size={16} />
              </button>
            </div>

            {/* Micro Badges */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-[#222] text-xs text-[#9CA3AF]">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4AF37]" /> IBC 2024 & ASCE 7 Code Master</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4AF37]" /> Advanced Finite Element Modeling</span>
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
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Professional Intro Video
                  </span>
                  <span className="text-[#D4AF37] font-bold">Watch 2 min</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* STATISTICS ROW */}
      <section className="py-12 bg-[#1E2125] border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter value={settings.yearsExp || '14+'} label="Years Experience" subtext="PE & SE Certified" />
          <StatCounter value={settings.projectsCount || '180+'} label="Projects Completed" subtext="High-Rise & Infrastructure" />
          <StatCounter value={settings.safetyRecord || '100%'} label="Structural Safety Record" subtext="Zero Critical Audit Failures" />
          <StatCounter value={settings.clientsCount || '50+'} label="Corporate Clients" subtext="Architects & Developers" />
        </div>
      </section>

      {/* SERVICES / EXPERTISE SECTION */}
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
              View All Services <ChevronRight size={16} />
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
                  Learn More <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS CASE STUDIES */}
      <section className="py-24 bg-[#1E2125] border-t border-b border-[#333] relative">
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

      {/* TESTIMONIALS & INSIGHTS ROW */}
      <section className="py-24 bg-[#121417]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Testimonials */}
          <div>
            <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Client Trust & Endorsements
            </h2>

            <div className="bg-[#1E2125] border border-[#333] p-10 relative">
              <Quote className="text-[#333] w-16 h-16 absolute top-6 right-6 pointer-events-none" />
              <p className="text-[#EAEAEA] text-base leading-relaxed mb-8 relative z-10 italic">
                "Alexandre's structural core redesign saved our commercial tower 4 months of schedule time while significantly improving dynamic seismic performance. Unmatched engineering rigor."
              </p>
              <div className="flex items-center gap-4 border-t border-[#333] pt-6">
                <div className="w-12 h-12 bg-[#121417] border border-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#D4AF37]">
                  SJ
                </div>
                <div>
                  <h5 className="text-[#EAEAEA] font-bold text-sm">Sarah Jenkins, AIA</h5>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider">Principal Architect, ArchiTech Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Engineering Insights */}
          <div>
            <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Technical Notes & Articles
            </h2>

            <div className="flex flex-col gap-4">
              {[
                { date: 'Oct 12, 2026', title: 'Innovations in High-Strength C80 Concrete Formulations', category: 'Materials Science' },
                { date: 'Sep 28, 2026', title: 'Seismic Retrofitting Strategies for Pre-1980 Structural Steel Frame Buildings', category: 'Seismic Design' },
                { date: 'Aug 15, 2026', title: 'Optimizing Wind Damping Outrigger Systems in 50+ Story Skyscrapers', category: 'High-Rise Analysis' }
              ].map((article, i) => (
                <Link key={i} to="/insights" className="flex gap-4 items-center p-5 bg-[#1E2125] border border-[#333] hover:border-[#D4AF37]/50 transition-all group">
                  <div className="p-3 bg-[#121417] text-[#D4AF37] border border-[#333]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-widest">{article.category} • {article.date}</span>
                    <h5 className="text-sm font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors">{article.title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#1E2125] via-[#16181C] to-[#1E2125] border-t border-[#333] relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#EAEAEA] mb-6 tracking-tight">Ready to Engineer Your Project?</h2>
          <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto mb-8">
            Available for structural consultations, peer reviews, dynamic seismic evaluations, and structural project lead engineering.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#D4AF37] text-[#121417] px-10 py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_25px_rgba(212,175,55,0.25)] inline-flex items-center gap-2"
          >
            Initiate Consultation Inquiry <ArrowUpRight size={16} />
          </button>
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
