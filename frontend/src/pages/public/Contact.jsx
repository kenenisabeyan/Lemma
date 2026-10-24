import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  Compass, 
  FileText, 
  Check, 
  Copy, 
  Building2, 
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import api from '../../services/api';
import { StructuralScopeEstimator } from '../../components/engineering/StructuralScopeEstimator';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const Contact = () => {
  const formRef = useRef(null);
  const [estimatorApplied, setEstimatorApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Reinforced Concrete Structure',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activePreset, setActivePreset] = useState(null);

  const scopePresets = [
    {
      id: 'capstone-rc',
      title: 'B+G+10 RC Capstone Design',
      type: 'Reinforced Concrete Structure',
      subject: 'ASTU B+G+10 Commercial Building Structural Analysis (EBCS EN 1992/1998)',
      msg: 'Inquiry regarding capstone analysis for a B+G+10 mixed-use building in Adama CBD. Scope includes 3D ETABS modeling, dual system shear walls, seismic response spectrum (Zone 4 Rift Valley), and expansive soil foundation design.'
    },
    {
      id: 'highway-era',
      title: 'ERA Highway Geometric Alignment',
      type: 'Highway & Transportation',
      subject: 'AutoCAD Civil 3D Highway Corridor Modeling per ERA Standards',
      msg: 'We require technical collaboration on highway horizontal/vertical geometry, earthwork mass-haul balancing, and drainage culvert hydraulic modeling per Ethiopian Roads Administration manuals.'
    },
    {
      id: 'soil-foundation',
      title: 'Rift Valley Soil Mechanics',
      type: 'Geotechnical Engineering',
      subject: 'Expansive Black Cotton Soil Investigation & Foundation Sizing',
      msg: 'Seeking consultation on soil stabilization methodologies, Atterberg limit evaluations, and isolated vs. strap footing designs over expansive Rift Valley clay formations.'
    },
    {
      id: 'grad-recruitment',
      title: 'Graduate Recruitment / Roles',
      type: 'Graduate Recruitment',
      subject: 'ASTU Civil Engineering 5th Year Graduate Opportunity',
      msg: 'We are looking to interview and recruit high-performing 5th-year graduating civil engineering candidates from ASTU SoCEA Class of 2026 for structural and site engineering positions.'
    },
    {
      id: 'practical-site',
      title: 'Practical Site Construction',
      type: 'Site Supervision & QC',
      subject: 'Practical Construction Site Supervision & Quality Control',
      msg: 'Inquiring regarding on-site construction supervision, concrete batching & slump testing, Total Station setting out, and structural rebar pre-pour inspection with our graduating student team.'
    }
  ];

  const handleApplyPreset = (preset) => {
    setActivePreset(preset.id);
    setFormData((prev) => ({
      ...prev,
      projectType: preset.type,
      subject: preset.subject,
      message: preset.msg
    }));
  };

  const handleApplyEstimatorScope = (scopeData) => {
    setActivePreset(null);
    setFormData((prev) => ({
      ...prev,
      projectType: scopeData.projectType,
      subject: scopeData.subject,
      message: scopeData.message
    }));
    setEstimatorApplied(true);
    setTimeout(() => setEstimatorApplied(false), 4000);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await api.post('/contact', formData);
      if (res.data.success) {
        setSuccessMsg(res.data.message || 'Consultation inquiry submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Reinforced Concrete Structure',
          subject: '',
          message: ''
        });
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('astu.civil.lemma@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC CONTACT & CONSULTATION HERO SECTION                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B0C0E] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Ambient Sheen & Radiant Studio Lights */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-[#0B0C0E] dark:via-[#0B0C0E] dark:to-[#0B0C0E] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/[0.02] dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/[0.02] dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-[#0B0C0E] dark:via-[#0B0C0E]/90 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scope, Headline, Guarantees */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · 5th Year Candidates Direct Access
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1.5"
              >
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                  Let's Engineer Ethiopia's{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    Next
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Infrastructure Landmark.
                  </span>
                </h1>
              </motion.div>

              {/* Frosted Glass Narrative Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 sm:p-7"
              >
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base leading-relaxed">
                  Connect directly with Lemma Techane and the 5th-year graduating civil engineering cohort at ASTU SoCEA for capstone collaboration, structural design reviews, and graduate recruitment.
                </p>

                {/* Response SLA Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-zinc-200/80 dark:border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <Clock size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">24h Student Response</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <ShieldCheck size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">ASTU SoCEA Verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Direct Candidate Access</span>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="#consultation-form"
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] border border-[#D4AF37] flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send size={14} className="text-[#121417]" />
                </a>
                <a
                  href="#scope-estimator"
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Scope Estimator</span>
                  <Compass size={14} className="text-[#D4AF37]" />
                </a>
              </motion.div>

              {/* Quick KPI Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg"
              >
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono">5th</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono">ASTU</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">SoCEA Brotherhood</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#D4AF37] font-mono">2026</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Graduating Class</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Direct Communication Channels & Telemetry */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/70 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 sm:p-6">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Direct Student Channels</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">Online &amp; Active</span>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Channel 1: Email */}
                  <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">Consultation &amp; Academic Email</span>
                        <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 truncate block">
                          astu.civil.lemma@gmail.com
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 hover:text-white px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-700 hover:bg-[#801834] dark:hover:bg-[#E84855] border border-zinc-200 dark:border-white/10 transition-all shrink-0"
                    >
                      {copiedEmail ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Channel 2: Phone */}
                  <a
                    href="tel:+251911234567"
                    className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] flex items-center gap-3 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">Direct Line</span>
                      <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 block">
                        +251 91 123 4567 (Mon–Sat 8am–6pm EAT)
                      </span>
                    </div>
                  </a>

                  {/* Channel 3: Office Headquarters */}
                  <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">Campus Headquarters</span>
                      <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 block">
                        ASTU Main Campus, SoCEA Building, Adama, Ethiopia
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE STRUCTURAL SCOPE ESTIMATOR                                 */}
      {/* ========================================================================= */}
      <div id="scope-estimator" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
        <StructuralScopeEstimator onApplyScope={handleApplyEstimatorScope} />
      </div>

      {/* ========================================================================= */}
      {/* 3. CONSULTATION REQUEST FORM CONTAINER                                    */}
      {/* ========================================================================= */}
      <div 
        id="consultation-form"
        ref={formRef}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 scroll-mt-24"
      >
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl p-8 lg:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)] relative transition-colors">
          
          {/* Engineering Coordinates Strip */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest pb-3 mb-6 border-b border-zinc-200/80 dark:border-white/10">
            <span>MANDATE: ASTU SoCEA 5TH YEAR COHORT</span>
            <span className="hidden sm:inline">REF: ASTU-CIVIL-2026 / EBCS-EN</span>
            <span>ADAMA, ETHIOPIA</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80 dark:border-white/10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-1 tracking-tight">
                ASTU Civil Engineering Consultation &amp; Inquiry Brief
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Connect with our student cohort for capstone design review, structural drafting, or industry opportunities.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 font-bold shrink-0">
              <ShieldCheck size={14} /> ASTU SoCEA Verification Assured
            </div>
          </div>

          {estimatorApplied && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
              <Check size={18} /> Parameters from Scope Estimator loaded into consultation brief!
            </div>
          )}

          {successMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 size={18} /> {successMsg}
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-700/60 text-red-800 dark:text-red-300 text-xs font-semibold flex items-center gap-2">
              <AlertCircle size={18} /> {errorMsg}
            </div>
          )}

          {/* Fast Scope Preset Wizard */}
          <div className="mb-8 p-5 bg-zinc-50/80 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200/80 dark:border-white/5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#801834] dark:text-[#E84855] flex items-center gap-1.5 font-bold">
                <Sparkles size={13} className="text-[#D4AF37]" /> Quick Scope Builder (Select Mandate to Auto-Fill)
              </span>
              <span className="text-[10px] font-mono text-zinc-500">Click any preset to initialize inquiry brief</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {scopePresets.map((preset) => {
                const isSelected = activePreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleApplyPreset(preset)}
                    className={`p-3 rounded-xl border text-left text-xs font-mono transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 border-transparent shadow-sm'
                        : 'bg-white/80 dark:bg-zinc-800/80 border-zinc-200/80 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="font-bold block truncate mb-1">{preset.title}</span>
                    <span className={`text-[9px] block ${isSelected ? 'text-zinc-300 dark:text-zinc-700' : 'text-zinc-500'}`}>{preset.type}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 mb-2 font-mono font-bold">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Eng. Dawit Kebede"
                  className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 mb-2 font-mono font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="d.kebede@consultancy.et"
                  className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 mb-2 font-mono font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+251 91 000 0000"
                  className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 mb-2 font-mono font-bold">
                  Project Classification *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                >
                  <option value="Reinforced Concrete Structure">Reinforced Concrete Structure</option>
                  <option value="Highway &amp; Transportation">Highway &amp; Transportation</option>
                  <option value="Hydraulic &amp; Water Resources">Hydraulic &amp; Water Resources</option>
                  <option value="Geotechnical &amp; Soil Mechanics">Geotechnical &amp; Soil Mechanics</option>
                  <option value="Graduate Recruitment">Graduate Recruitment</option>
                  <option value="Independent Capstone Review">Independent Capstone Review</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 mb-2 font-mono font-bold">
                Subject / Project Name
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. ASTU B+G+10 Capstone ETABS Model Review"
                className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 mb-2 font-mono font-bold">
                Project / Collaboration Details *
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project type, location in Ethiopia (e.g. Adama, Addis Ababa), applicable EBCS standards, or recruitment mandate..."
                className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 py-4 text-xs font-mono font-extrabold tracking-widest uppercase transition-all w-full flex justify-center items-center gap-2 shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Submitting Inquiry...' : 'Send Inquiry to ASTU Brothers'} <Send size={14} className="text-[#121417]" />
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};
