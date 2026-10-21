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
    <div className="min-h-screen bg-[#FFFFFF] text-[#54595F] pt-28 pb-24 relative overflow-hidden selection:bg-[#D4AF37] selection:text-[#121417]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-[#FFFFFF] px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-[#54595F] shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Available for Select Consultation & Advisory
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#54595F] tracking-tight leading-[1.08] mb-5">
            <span className="text-[#D4AF37]">Have Questions?</span> Get in Touch.
          </h1>
          <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 sm:p-7 shadow-sm max-w-2xl mx-auto">
            <p className="text-[#54595F] text-base leading-relaxed">
              Available for new structural engineering design, high-rise wind & seismic peer reviews, structural health evaluations, and forensic advisory.
            </p>
          </div>
        </div>

        {/* 3-Bento Contact Quick Strip */}
        <div className="relative mb-12">
          <div className="grid gap-px overflow-hidden bg-zinc-200 rounded-2xl border border-zinc-200 md:grid-cols-3 shadow-lg">
            {/* Card 1: Email */}
            <div className="flex items-center justify-between gap-3 bg-[#FFFFFF] p-6 transition-colors hover:bg-zinc-50 group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#FFFFFF] text-[#D4AF37] group-hover:scale-105 transition-transform shadow-sm">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5 overflow-hidden">
                  <h4 className="text-sm font-bold text-[#54595F]">Send an Email</h4>
                  <p className="text-xs font-mono text-[#54595F]/80 truncate group-hover:text-[#D4AF37] transition-colors">consult@alexandre-structural.com</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[10px] font-mono uppercase tracking-wider text-[#54595F] hover:text-[#121417] px-2.5 py-1 rounded-full bg-[#FFFFFF] hover:bg-[#D4AF37] border border-[#D4AF37] shrink-0 transition-all font-bold"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Card 2: Phone */}
            <a
              href="tel:+15550198472"
              className="flex items-center gap-3 bg-[#FFFFFF] p-6 transition-colors hover:bg-zinc-50 group"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#FFFFFF] text-[#D4AF37] group-hover:scale-105 transition-transform shadow-sm">
                <Phone size={18} />
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h4 className="text-sm font-bold text-[#54595F]">Call Direct</h4>
                <p className="text-xs font-mono text-[#54595F]/80 group-hover:text-[#D4AF37] transition-colors">+1 (555) 019-8472 (Mon-Fri 8am-6pm)</p>
              </div>
            </a>

            {/* Card 3: Location */}
            <div className="flex items-center gap-3 bg-[#FFFFFF] p-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#FFFFFF] text-[#D4AF37] shadow-sm">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h4 className="text-sm font-bold text-[#54595F]">Office Headquarters</h4>
                <p className="text-xs font-mono text-[#54595F]/80">New York, NY (EST · GMT-5)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scope & Deliverables Matrix */}
        <div className="mb-14">
          <StructuralScopeEstimator onApplyScope={handleApplyEstimatorScope} />
        </div>

        {/* Consultation Request Form Container */}
        <div 
          ref={formRef}
          className="rounded-3xl border border-zinc-200 bg-[#FFFFFF] p-8 lg:p-12 shadow-xl relative transition-colors"
        >
          {/* Engineering Coordinates Strip */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#54595F]/60 uppercase tracking-widest pb-3 mb-6 border-b border-zinc-200">
            <span>MANDATE: DIRECT CLIENT INQUIRY</span>
            <span className="hidden sm:inline">REF: NY-PE-84729 / CA-SE-92041</span>
            <span>SECURE 256-BIT SSL</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#54595F] mb-1 tracking-tight">
                Structural Consultation Inquiry Brief
              </h3>
              <p className="text-xs text-[#54595F]">
                Provide your project specifications or scope below for a confidential engineering review.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 font-bold shrink-0">
              <ShieldCheck size={14} /> NDA Confidentiality Assured
            </div>
          </div>

          {estimatorApplied && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-bounce">
              <Check size={18} /> Parameters from Scope Estimator loaded into consultation brief!
            </div>
          )}

          {successMsg && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 size={18} /> {successMsg}
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs font-semibold flex items-center gap-2">
              <AlertCircle size={18} /> {errorMsg}
            </div>
          )}

          {/* Fast Scope Preset Wizard */}
          <div className="mb-8 p-5 bg-[#FFFFFF] rounded-xl border border-zinc-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-1.5 font-bold">
                <Sparkles size={13} /> Quick Scope Builder (Select Mandate to Auto-Fill)
              </span>
              <span className="text-[10px] font-mono text-[#54595F]/75">Click any preset to initialize inquiry brief</span>
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
                        ? 'bg-[#FFFFFF] border-[#D4AF37] text-[#D4AF37] ring-1 ring-[#D4AF37] shadow-sm'
                        : 'bg-[#FFFFFF] border-zinc-200 text-[#54595F] hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="font-bold block truncate mb-1">{preset.title}</span>
                    <span className="text-[9px] text-[#54595F]/70 block">{preset.type}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#54595F] mb-2 font-mono font-bold">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins, AIA"
                  className="w-full bg-[#FFFFFF] rounded-xl border border-zinc-200 text-[#54595F] p-3.5 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#54595F] mb-2 font-mono font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="s.jenkins@architech.com"
                  className="w-full bg-[#FFFFFF] rounded-xl border border-zinc-200 text-[#54595F] p-3.5 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors shadow-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#54595F] mb-2 font-mono font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#FFFFFF] rounded-xl border border-zinc-200 text-[#54595F] p-3.5 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#54595F] mb-2 font-mono font-bold">
                  Project Classification *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF] rounded-xl border border-zinc-200 text-[#54595F] p-3.5 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors shadow-sm"
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
              <label className="block text-[10px] uppercase tracking-widest text-[#54595F] mb-2 font-mono font-bold">
                Subject / Project Name
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Seismic lateral bracing audit for 20-story building"
                className="w-full bg-[#FFFFFF] rounded-xl border border-zinc-200 text-[#54595F] p-3.5 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors shadow-sm"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#54595F] mb-2 font-mono font-bold">
                Structural Project Requirements *
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe building height, structural materials (concrete/steel), site location, timeline, or key technical challenges..."
                className="w-full bg-[#FFFFFF] rounded-xl border border-zinc-200 text-[#54595F] p-3.5 text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors resize-none shadow-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-[#c49f2c] transition-all w-full flex justify-center items-center gap-2 shadow-lg"
            >
              {loading ? 'Submitting Inquiry...' : 'Send Secure Consultation Inquiry'} <Send size={14} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
