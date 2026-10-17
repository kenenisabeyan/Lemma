import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import api from '../../services/api';

export const Contact = () => {
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
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24 relative overflow-hidden selection:bg-[#D4AF37] selection:text-[#121417]">
      
      {/* Background Radial Glow (like alazar.dev) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Available for Select Consultation & Advisory
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-4">
            Have Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Get in Touch.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base leading-relaxed">
            Available for new structural engineering design, high-rise wind & seismic peer reviews, structural health evaluations, and forensic advisory.
          </p>
        </div>

        {/* 3-Bento Contact Quick Strip (Alazar's exact hairline-divided grid pattern) */}
        <div className="relative mb-12">
          <div aria-hidden="true" className="pointer-events-none absolute h-px bg-[#333] -top-px left-0 right-0"></div>
          <div className="grid gap-px overflow-hidden bg-[#2D3137] rounded-2xl border border-[#333] md:grid-cols-3 shadow-2xl">
            {/* Card 1: Email */}
            <div className="flex items-center justify-between gap-3 bg-[#181A1E] p-6 transition-colors hover:bg-[#1f2227] group">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-y-0.5 overflow-hidden">
                  <h4 className="text-sm font-bold text-[#EAEAEA]">Send an Email</h4>
                  <p className="text-xs font-mono text-[#9CA3AF] truncate group-hover:text-[#D4AF37] transition-colors">consult@alexandre-structural.com</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] hover:text-white px-2.5 py-1 rounded-full bg-[#121417] border border-[#333] shrink-0 hover:border-[#D4AF37] transition-all"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Card 2: Phone */}
            <a
              href="tel:+15550198472"
              className="flex items-center gap-3 bg-[#181A1E] p-6 transition-colors hover:bg-[#1f2227] group"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-105 transition-transform">
                <Phone size={18} />
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h4 className="text-sm font-bold text-[#EAEAEA]">Call Direct</h4>
                <p className="text-xs font-mono text-[#9CA3AF] group-hover:text-[#D4AF37] transition-colors">+1 (555) 019-8472 (Mon-Fri 8am-6pm)</p>
              </div>
            </a>

            {/* Card 3: Location */}
            <div className="flex items-center gap-3 bg-[#181A1E] p-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h4 className="text-sm font-bold text-[#EAEAEA]">Office Headquarters</h4>
                <p className="text-xs font-mono text-[#9CA3AF]">New York, NY (EST · GMT-5)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute h-px bg-[#333] -bottom-px left-0 right-0"></div>
        </div>

        {/* Consultation Request Form Container */}
        <div className="rounded-2xl border border-[#333]/80 bg-[#181A1E] p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2D3137]">
            <div>
              <h3 className="text-2xl font-bold text-[#EAEAEA] mb-1">
                Structural Consultation Inquiry
              </h3>
              <p className="text-xs text-[#9CA3AF]">
                Provide your project specifications or scope below for a confidential engineering review.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] bg-[#121417] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30">
              <ShieldCheck size={14} /> NDA Confidentiality Assured
            </div>
          </div>

          {successMsg && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 size={18} /> {successMsg}
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-red-400 text-xs font-semibold flex items-center gap-2">
              <AlertCircle size={18} /> {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins, AIA"
                  className="w-full bg-[#121417] rounded-xl border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="s.jenkins@architech.com"
                  className="w-full bg-[#121417] rounded-xl border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#121417] rounded-xl border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                  Project Classification *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-[#121417] rounded-xl border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
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
              <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                Subject / Project Name
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Seismic lateral bracing audit for 20-story building"
                className="w-full bg-[#121417] rounded-xl border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                Structural Project Requirements *
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe building height, structural materials (concrete/steel), site location, timeline, or key technical challenges..."
                className="w-full bg-[#121417] rounded-xl border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all w-full flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              {loading ? 'Submitting Inquiry...' : 'Send Secure Consultation Inquiry'} <Send size={14} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
