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

export const Contact = () => {
  const formRef = useRef(null);
  const [estimatorApplied, setEstimatorApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Commercial High-Rise',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activePreset, setActivePreset] = useState(null);

  const scopePresets = [
    {
      id: 'high-rise',
      title: 'High-Rise Tower Lateral Design',
      type: 'Commercial High-Rise',
      subject: 'New High-Rise Tower Lateral Stability (Wind & Seismic Analysis)',
      msg: 'We require structural design for a proposed high-rise development. Scope includes 3D ETABS modeling, lateral force resisting system (shear walls + outriggers), ASCE 7-22 wind drift verification, and deep foundation caissons.'
    },
    {
      id: 'peer-review',
      title: 'Third-Party Independent Peer Review',
      type: 'Peer Review / Value Engineering',
      subject: 'Independent Structural Peer Review & IBC Code Verification',
      msg: 'We are seeking an independent third-party structural engineer to audit the structural calculation package, member sizing, and lateral wind/seismic response spectrum calculations prior to municipal permit submittal.'
    },
    {
      id: 'retrofit',
      title: 'Seismic Vulnerability & Retrofit Audit',
      type: 'Seismic Retrofit Audit',
      subject: 'Seismic Evaluation & Non-Linear Retrofit Design (ASCE 41)',
      msg: 'We need a seismic assessment and rehabilitation design for an existing commercial building. Scope includes non-destructive testing verification, pushover analysis, and supplemental damping/brace specifications.'
    },
    {
      id: 'value-eng',
      title: 'Value Engineering & Quantity Optimization',
      type: 'Peer Review / Value Engineering',
      subject: 'Value Engineering Review for Concrete & Steel Reductions',
      msg: 'We are evaluating the structural design to identify material optimizations. We would like a review of floor slab post-tensioning, column rebar ratios, and transfer girder configurations to reduce embodied carbon and overall construction costs.'
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
          projectType: 'Commercial High-Rise',
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
    navigator.clipboard.writeText('consult@alexandre-structural.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC CONTACT & CONSULTATION HERO SECTION                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/80 dark:border-white/10 bg-white/75 dark:bg-[#0B0C0E]/85 backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Ambient Sheen & Radiance */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white/85 dark:from-[#0B0C0E]/85 dark:via-[#0B0C0E]/50 dark:to-[#0B0C0E]/90 pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/8 dark:bg-[#801834]/20 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/8 dark:bg-[#D4AF37]/15 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

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
                  Principal Direct Access · Accepting Q4 2026 Mandates
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
                  Let's Engineer Your{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    Next
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Structural Landmark.
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
                  Available for new commercial tower designs, seismic retrofit assessments, independent third-party calculation peer reviews, and forensic engineering consultations.
                </p>

                {/* Response SLA Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-zinc-200/80 dark:border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <Clock size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">24h Preliminary Response</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <ShieldCheck size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Strict NDA Confidentiality</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Direct PE/SE Principal Review</span>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <a
                  href="#consultation-form"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(128,24,52,0.3)] hover:scale-[1.02]"
                >
                  <Send size={14} className="text-[#D4AF37]" />
                  Submit Project Inquiry Brief
                </a>
                <a
                  href="#scope-estimator"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-white/20 backdrop-blur-xl px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider transition-all hover:scale-[1.02]"
                >
                  <Compass size={14} className="text-[#D4AF37]" />
                  Launch Scope Estimator
                </a>
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
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Direct Principal Channels</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">Online & Active</span>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Channel 1: Email */}
                  <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">Consultation Email</span>
                        <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 truncate block">
                          consult@alexandre-structural.com
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
                    href="tel:+15550198472"
                    className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] flex items-center gap-3 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">Direct Line</span>
                      <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 block">
                        +1 (555) 019-8472 (Mon–Fri 8am–6pm EST)
                      </span>
                    </div>
                  </a>

                  {/* Channel 3: Office Headquarters */}
                  <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">Principal Office</span>
                      <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 block">
                        Metropolis City, NY (EST · GMT-5)
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

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
            <span>MANDATE: DIRECT CLIENT INQUIRY</span>
            <span className="hidden sm:inline">REF: NY-PE-84729 / CA-SE-92041</span>
            <span>SECURE 256-BIT ENCRYPTION</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80 dark:border-white/10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-1 tracking-tight">
                Structural Consultation Inquiry Brief
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Provide your project specifications or scope below for a confidential engineering review.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 font-bold shrink-0">
              <ShieldCheck size={14} /> NDA Confidentiality Assured
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
                  placeholder="e.g. Sarah Jenkins, AIA"
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
                  placeholder="s.jenkins@architech.com"
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
                  placeholder="+1 (555) 000-0000"
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
                  <option value="Commercial High-Rise">Commercial High-Rise</option>
                  <option value="Infrastructure & Bridges">Infrastructure & Bridges</option>
                  <option value="Special Structure / Dome">Special Structure / Dome</option>
                  <option value="Seismic Retrofit Audit">Seismic Retrofit Audit</option>
                  <option value="Peer Review / Value Engineering">Peer Review / Value Engineering</option>
                  <option value="Forensic Structural Evaluation">Forensic Structural Evaluation</option>
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
                placeholder="e.g. Seismic lateral bracing audit for 20-story building"
                className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 mb-2 font-mono font-bold">
                Structural Project Requirements *
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe building height, structural materials (concrete/steel), site location, timeline, or key technical challenges..."
                className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-8 py-4 text-xs font-mono font-extrabold tracking-widest uppercase transition-all w-full flex justify-center items-center gap-2 shadow-[0_10px_25px_rgba(128,24,52,0.3)] hover:scale-[1.01]"
            >
              {loading ? 'Submitting Inquiry...' : 'Send Secure Consultation Inquiry'} <Send size={14} className="text-[#D4AF37]" />
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};
