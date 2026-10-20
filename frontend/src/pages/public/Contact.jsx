import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2, Send, AlertCircle, Sparkles, Clock, Compass, FileText, Check } from 'lucide-react';
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
    <div className="min-h-screen bg-transparent bg-cad-grid text-inherit pt-28 pb-24 relative overflow-hidden selection:bg-[#801834] selection:text-white">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#801834]/8 dark:bg-[#801834]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/90 dark:bg-[#14171C]/90 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#801834] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#801834]"></span>
            </span>
            Available for Select Consultation & Advisory
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.08] mb-5">
            Have Questions? <span className="text-[#801834] dark:text-[#E84855]">Get in Touch.</span>
          </h1>
          <div className="rounded-2xl bg-white/95 dark:bg-[#14171C]/95 backdrop-blur-md border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-w-2xl mx-auto">
            <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
              Available for new structural engineering design, high-rise wind & seismic peer reviews, structural health evaluations, and forensic advisory.
            </p>
          </div>
        </div>

        {/* 3-Bento Contact Quick Strip */}
        <div className="relative mb-12">
          <div aria-hidden="true" className="pointer-events-none absolute h-px bg-zinc-200/80 dark:bg-zinc-800/80 -top-px left-0 right-0"></div>
          <div className="grid gap-px overflow-hidden bg-zinc-200/80 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 md:grid-cols-3 shadow-lg dark:shadow-2xl">
            {/* Card 1: Email */}
            <div className="flex items-center justify-between gap-3 bg-white/95 dark:bg-[#14171C]/95 p-6 transition-colors hover:bg-[#F4F5F7] dark:hover:bg-[#181B20] group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-[#F4F5F7] dark:bg-[#0E1014] text-[#801834] dark:text-[#D4AF37] group-hover:scale-105 transition-transform shadow-sm">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5 overflow-hidden">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-[#EAEAEA]">Send an Email</h4>
                  <p className="text-xs font-mono text-zinc-600 dark:text-[#9CA3AF] truncate group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">consult@alexandre-structural.com</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[10px] font-mono uppercase tracking-wider text-[#801834] dark:text-[#D4AF37] hover:text-white dark:hover:text-white px-2.5 py-1 rounded-full bg-[#F4F5F7] hover:bg-[#801834] dark:bg-[#0E1014] dark:hover:bg-[#D4AF37] dark:hover:text-[#121417] border border-zinc-200/80 dark:border-zinc-800/80 shrink-0 transition-all font-bold"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Card 2: Phone */}
            <a
              href="tel:+15550198472"
              className="flex items-center gap-3 bg-white/95 dark:bg-[#14171C]/95 p-6 transition-colors hover:bg-[#F4F5F7] dark:hover:bg-[#181B20] group"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-[#F4F5F7] dark:bg-[#0E1014] text-[#801834] dark:text-[#D4AF37] group-hover:scale-105 transition-transform shadow-sm">
                <Phone size={18} />
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-[#EAEAEA]">Call Direct</h4>
                <p className="text-xs font-mono text-zinc-600 dark:text-[#9CA3AF] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors">+1 (555) 019-8472 (Mon-Fri 8am-6pm)</p>
              </div>
            </a>

            {/* Card 3: Location */}
            <div className="flex items-center gap-3 bg-white/95 dark:bg-[#14171C]/95 p-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-[#F4F5F7] dark:bg-[#0E1014] text-[#801834] dark:text-[#D4AF37] shadow-sm">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-[#EAEAEA]">Office Headquarters</h4>
                <p className="text-xs font-mono text-zinc-600 dark:text-[#9CA3AF]">New York, NY (EST · GMT-5)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute h-px bg-zinc-200/80 dark:bg-zinc-800/80 -bottom-px left-0 right-0"></div>
        </div>

        {/* Interactive Scope & Deliverables Matrix */}
        <div className="mb-14">
          <StructuralScopeEstimator onApplyScope={handleApplyEstimatorScope} />
        </div>

        {/* Consultation Request Form Container */}
        <div 
          ref={formRef}
          className="rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-[#14171C]/95 p-8 lg:p-12 shadow-xl dark:shadow-2xl relative cad-bracket-corners transition-colors"
        >
          {/* Engineering Coordinates Strip */}
          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest pb-3 mb-6 border-b border-zinc-100 dark:border-zinc-800/80">
            <span>MANDATE: DIRECT CLIENT INQUIRY</span>
            <span className="hidden sm:inline">REF: NY-PE-84729 / CA-SE-92041</span>
            <span>SECURE 256-BIT SSL</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] mb-1 tracking-tight">
                Structural Consultation Inquiry Brief
              </h3>
              <p className="text-xs text-zinc-600 dark:text-[#9CA3AF]">
                Provide your project specifications or scope below for a confidential engineering review.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#801834] dark:text-[#D4AF37] bg-[#F4F5F7] dark:bg-[#0E1014] px-3.5 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 font-bold shrink-0">
              <ShieldCheck size={14} /> NDA Confidentiality Assured
            </div>
          </div>

          {estimatorApplied && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-bounce">
              <Check size={18} /> Parameters from Scope Estimator loaded into consultation brief!
            </div>
          )}

          {successMsg && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 size={18} /> {successMsg}
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/50 text-red-800 dark:text-red-400 text-xs font-semibold flex items-center gap-2">
              <AlertCircle size={18} /> {errorMsg}
            </div>
          )}

          {/* Fast Scope Preset Wizard */}
          <div className="mb-8 p-5 bg-[#F4F5F7] dark:bg-[#0E1014] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] flex items-center gap-1.5 font-bold">
                <Sparkles size={13} /> Quick Scope Builder (Select Mandate to Auto-Fill)
              </span>
              <span className="text-[10px] font-mono text-zinc-500 dark:text-[#888]">Click any preset to initialize inquiry brief</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {scopePresets.map((preset) => {
                const isSelected = activePreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleApplyPreset(preset)}
                    className={`p-3 rounded-lg border text-left text-xs font-mono transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white dark:bg-[#181A1E] border-[#801834] dark:border-[#D4AF37] text-[#801834] dark:text-[#D4AF37] shadow-sm'
                        : 'bg-white dark:bg-[#14171C] border-zinc-200/80 dark:border-zinc-800/80 text-zinc-600 dark:text-[#9CA3AF] hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
                    }`}
                  >
                    <span className="font-bold block truncate mb-1">{preset.title}</span>
                    <span className="text-[9px] text-zinc-500 dark:text-[#666] block">{preset.type}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-600 dark:text-[#9CA3AF] mb-2 font-mono font-bold">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins, AIA"
                  className="w-full bg-[#F4F5F7] dark:bg-[#0E1014] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-[#EAEAEA] p-3.5 text-xs focus:border-[#801834] dark:focus:border-[#D4AF37] focus:outline-none transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-600 dark:text-[#9CA3AF] mb-2 font-mono font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="s.jenkins@architech.com"
                  className="w-full bg-[#F4F5F7] dark:bg-[#0E1014] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-[#EAEAEA] p-3.5 text-xs focus:border-[#801834] dark:focus:border-[#D4AF37] focus:outline-none transition-colors shadow-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-600 dark:text-[#9CA3AF] mb-2 font-mono font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#F4F5F7] dark:bg-[#0E1014] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-[#EAEAEA] p-3.5 text-xs focus:border-[#801834] dark:focus:border-[#D4AF37] focus:outline-none transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-600 dark:text-[#9CA3AF] mb-2 font-mono font-bold">
                  Project Classification *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-[#F4F5F7] dark:bg-[#0E1014] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-[#EAEAEA] p-3.5 text-xs focus:border-[#801834] dark:focus:border-[#D4AF37] focus:outline-none transition-colors shadow-sm"
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
              <label className="block text-[10px] uppercase tracking-widest text-zinc-600 dark:text-[#9CA3AF] mb-2 font-mono font-bold">
                Subject / Project Name
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Seismic lateral bracing audit for 20-story building"
                className="w-full bg-[#F4F5F7] dark:bg-[#0E1014] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-[#EAEAEA] p-3.5 text-xs focus:border-[#801834] dark:focus:border-[#D4AF37] focus:outline-none transition-colors shadow-sm"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-600 dark:text-[#9CA3AF] mb-2 font-mono font-bold">
                Structural Project Requirements *
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe building height, structural materials (concrete/steel), site location, timeline, or key technical challenges..."
                className="w-full bg-[#F4F5F7] dark:bg-[#0E1014] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-900 dark:text-[#EAEAEA] p-3.5 text-xs focus:border-[#801834] dark:focus:border-[#D4AF37] focus:outline-none transition-colors resize-none shadow-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] px-8 py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-zinc-900 dark:hover:bg-white transition-all w-full flex justify-center items-center gap-2 shadow-lg"
            >
              {loading ? 'Submitting Inquiry...' : 'Send Secure Consultation Inquiry'} <Send size={14} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
