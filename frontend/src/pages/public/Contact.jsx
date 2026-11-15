import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Check, 
  Compass,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import api from '../../services/api';
import { StructuralScopeEstimator } from '../../components/engineering/StructuralScopeEstimator';
import lemmaFour from '../../assets/lemma-four.jpg';

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Reinforced Concrete Structure',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const location = useLocation();
  const [showEstimator, setShowEstimator] = useState(false);

  useEffect(() => {
    const targetHash = location.hash || window.location.hash;
    if (targetHash === '#contact-form' || targetHash === '#contact-channels-and-form' || targetHash === '#inquiry-form' || targetHash === '#contact') {
      const scrollToForm = () => {
        const el = document.getElementById('contact-form') || formRef.current;
        if (el) {
          const navbarHeight = 80;
          const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      };
      const timer = setTimeout(scrollToForm, 70);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

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
        setSuccessMsg(res.data.message || 'Thank you! Your message has been sent successfully. Our team will respond within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Reinforced Concrete Structure',
          message: ''
        });
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleApplyEstimatorScope = (scopeData) => {
    setFormData((prev) => ({
      ...prev,
      projectType: scopeData.projectType,
      message: `[Estimated Scope: ${scopeData.projectType}]\n${scopeData.message}`
    }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#12151C] text-[#1E2025] dark:text-[#F8F9FA] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC CONTACT HERO INTRO BANNER                                    */}
      {/* ========================================================================= */}
      <section id="contact-hero" className="relative pt-28 sm:pt-32 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8F9FA] dark:bg-[#12151C] backdrop-blur-3xl bg-cad-grid transition-colors">
        {/* Photographic Civil Engineering Site Background (lemma-four.jpg) */}
        <div className="absolute inset-0 overflow-hidden select-none z-0 pointer-events-none">
          <motion.div
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center will-change-transform opacity-30 dark:opacity-20"
            style={{ backgroundImage: `url(${lemmaFour})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/85 via-[#F8F9FA]/95 to-[#F8F9FA] dark:from-[#12151C]/90 dark:via-[#12151C]/95 dark:to-[#12151C] pointer-events-none" />
          <div className="absolute inset-0 bg-cad-grid opacity-20 dark:opacity-10 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            
            {/* Title & Badges */}
            <div className="space-y-3 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] backdrop-blur-xl">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · Direct Consultation &amp; Inquiries
                </span>
              </div>

              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
                Contact Lemma.{' '}
                <span className="text-[#D3AE36] drop-shadow-[0_4px_20px_rgba(211,174,54,0.3)]">
                  ASTU
                </span>{' '}
                <span className="text-[#D3AE36] opacity-95">
                  Civil Engineering
                </span>
              </h1>

              <p className="text-zinc-600 dark:text-[#F8F9FA]/75 font-medium text-xs sm:text-sm leading-relaxed max-w-xl">
                Connect directly with <strong className="text-[#D3AE36] font-bold">Lemma Amensisa &amp; ASTU SoCEA Civil Engineering Team</strong>. Available for graduate roles, B.Sc. capstone collaborations, and structural site consultations across Ethiopia.
              </p>
            </div>

            {/* Quick KPI Badges */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 font-mono text-xs">
              <div className="px-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] text-center">
                <span className="block text-base sm:text-lg font-black text-[#D3AE36]">5th Year</span>
                <span className="text-[10px] text-zinc-500 uppercase">ASTU SoCEA</span>
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] text-center">
                <span className="block text-base sm:text-lg font-black text-emerald-500">24h Direct</span>
                <span className="text-[10px] text-zinc-500 uppercase">Response</span>
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] text-center">
                <span className="block text-base sm:text-lg font-black text-[#D3AE36]">EBCS EN</span>
                <span className="text-[10px] text-zinc-500 uppercase">Codes</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIRECT CHANNELS & CONSULTATION INQUIRY (FULL-WIDTH SECTION)             */}
      {/* ========================================================================= */}
      <section id="contact-form" className="py-12 sm:py-16 bg-[#DFE2EB] dark:bg-[#1E2025] transition-colors relative z-20 scroll-mt-20">
        <span id="contact-channels-and-form" className="scroll-mt-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Split Grid: Left (Direct Contact Hub & Map) and Right (Inquiry Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ----------------------------------------------------------------------- */}
            {/* LEFT COLUMN: DIRECT CONTACT DOSSIER & CAMPUS MAP                       */}
            {/* ----------------------------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Personal Engineering Contact Card */}
              <div className="bg-transparent sm:bg-black/[0.02] sm:dark:bg-white/[0.03] rounded-3xl p-7 space-y-6">
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#D3AE36] uppercase tracking-wider font-bold block mb-0.5">
                      Direct Communication Hub
                    </span>
                    <h3 className="text-xl font-black text-[#1E2025] dark:text-[#F8F9FA] tracking-tight">
                      Lemma Amensisa
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available 2026
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Phone & Telegram */}
                  <a
                    href="tel:+251934830919"
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] transition-all group cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-[#D3AE36] group-hover:scale-105 transition-transform shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 dark:text-[#F8F9FA]/60">Direct Phone &amp; Telegram</span>
                        <span className="text-[9px] font-mono font-bold text-[#D3AE36]">Direct Voice</span>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA] font-mono">
                        +251 934 830 919 · 0934 830 919
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:lemmayezedlij21@gmail.com"
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] transition-all group cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-[#D3AE36] group-hover:scale-105 transition-transform shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 dark:text-[#F8F9FA]/60">Email Inquiries</span>
                        <span className="text-[9px] font-mono font-bold text-[#D3AE36]">24h Response</span>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA] font-mono truncate">
                        lemmayezedlij21@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Academic Base */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04]">
                    <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-[#D3AE36] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 dark:text-[#F8F9FA]/60 block mb-0.5">
                        Academic Department
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA]">
                        ASTU SoCEA Main Campus
                      </p>
                      <p className="text-[11px] text-zinc-500 dark:text-[#F8F9FA]/70 mt-0.5">
                        School of Civil Engineering &amp; Architecture · Adama, Ethiopia
                      </p>
                    </div>
                  </div>

                  {/* Consultation Hours */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04]">
                    <div className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-[#D3AE36] shrink-0">
                      <Clock size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 dark:text-[#F8F9FA]/60 block mb-0.5">
                        Consultation Hours
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-[#1E2025] dark:text-[#F8F9FA] font-mono">
                        Mon – Sat: 8:30 AM – 6:00 PM (EAT)
                      </p>
                      <p className="text-[11px] text-zinc-500 dark:text-[#F8F9FA]/70 mt-0.5">
                        B.Sc. Thesis Defense &amp; Project Collaborations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500 dark:text-[#F8F9FA]/60 font-medium">Connect Online:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] transition-colors font-bold"
                    >
                      <Linkedin size={14} className="text-[#D3AE36]" /> LinkedIn
                    </a>
                    <span className="text-zinc-300 dark:text-zinc-700">·</span>
                    <a
                      href="https://t.me/lemmaamensisa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] transition-colors font-bold"
                    >
                      <Send size={14} className="text-[#D3AE36]" /> Telegram
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map Embed Card */}
            <div className="bg-black/[0.03] dark:bg-white/[0.04] rounded-2xl overflow-hidden relative">
              
              {/* "Open in Maps" Link Overlay in Top-Left */}
              <div className="absolute top-3 left-3 z-10">
                <a
                  href="https://maps.google.com/?q=Adama+Science+and+Technology+University"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-bold hover:text-[#D3AE36] shadow-sm transition-colors"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Map View */}
              <div className="w-full h-64 sm:h-72">
                <iframe
                  title="ASTU Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.632483839818!2d39.2783852!3d8.5568582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe3c9e67cf5%3A0xe9f7cf918342b47f!2sAdama%20Science%20and%20Technology%20University!5e0!3m2!1sen!2set!4v1716382000000!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] contrast-[1.05]"
                />
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: "WE'D LOVE TO HEAR FROM YOU" CONTACT FORM                 */}
          {/* ----------------------------------------------------------------------- */}
          <div ref={formRef} className="lg:col-span-7">
            <div className="bg-transparent sm:bg-black/[0.02] sm:dark:bg-white/[0.03] rounded-2xl p-8 sm:p-10">
              
              {/* Form Heading & Subtitle */}
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E2025] dark:text-[#F8F9FA] tracking-tight">
                We'd Love to Hear From You
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-[#F8F9FA]/70 mt-1 mb-8">
                Fill in the form below and our team will respond within 24 hours.
              </p>

              {/* Status Alert Feedback */}
              {successMsg && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 size={18} /> {successMsg}
                </div>
              )}

              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-700/60 text-red-800 dark:text-red-300 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle size={18} /> {errorMsg}
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-[#F8F9FA]/90 mb-1.5 font-bold">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Abebe Kebede"
                    className="w-full bg-black/[0.04] dark:bg-white/[0.05] rounded-xl text-[#1E2025] dark:text-[#F8F9FA] px-4 py-3 text-xs sm:text-sm focus:ring-1 focus:ring-[#D3AE36] focus:outline-none transition-all placeholder:text-zinc-400"
                  />
                </div>

                {/* Email & Phone 2-Col Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-[#F8F9FA]/90 mb-1.5 font-bold">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abebe@example.com"
                      className="w-full bg-black/[0.04] dark:bg-white/[0.05] rounded-xl text-[#1E2025] dark:text-[#F8F9FA] px-4 py-3 text-xs sm:text-sm focus:ring-1 focus:ring-[#D3AE36] focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-[#F8F9FA]/90 mb-1.5 font-bold">
                      PHONE *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09XXXXXXXX"
                      className="w-full bg-black/[0.04] dark:bg-white/[0.05] rounded-xl text-[#1E2025] dark:text-[#F8F9FA] px-4 py-3 text-xs sm:text-sm focus:ring-1 focus:ring-[#D3AE36] focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                {/* Project Specialization Selector */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-[#F8F9FA]/90 mb-1.5 font-bold">
                    ENGINEERING SPECIALIZATION *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-black/[0.04] dark:bg-white/[0.05] rounded-xl text-[#1E2025] dark:text-[#F8F9FA] px-4 py-3 text-xs sm:text-sm focus:ring-1 focus:ring-[#D3AE36] focus:outline-none transition-all"
                  >
                    <option value="Reinforced Concrete Structure">Reinforced Concrete Structure (EBCS EN 1992)</option>
                    <option value="Highway & Transportation">Highway & Transportation Corridor (ERA 2024)</option>
                    <option value="Geotechnical & Soil Mechanics">Geotechnical & Expansive Soil Mechanics</option>
                    <option value="Hydraulic & Water Resources">Hydraulic & Water Resources Modeling</option>
                    <option value="Graduate Recruitment">ASTU Graduate Recruitment & Interview</option>
                    <option value="General Consultation">General Engineering Consultation</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-[#F8F9FA]/90 mb-1.5 font-bold">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you with structural calculations, site supervision, or capstone collaboration..."
                    className="w-full bg-black/[0.04] dark:bg-white/[0.05] rounded-xl text-[#1E2025] dark:text-[#F8F9FA] p-4 text-xs sm:text-sm focus:ring-1 focus:ring-[#D3AE36] focus:outline-none transition-all placeholder:text-zinc-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button (Luxury Architectural Gold) */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-[0.99] text-[#12151C] py-3.5 px-6 rounded-xl font-black text-sm tracking-wide transition-all shadow-lg shadow-[#D3AE36]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                  <Send size={15} className="text-[#12151C]" />
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>

      {/* ========================================================================= */}
      {/* 3. EXPANDABLE STRUCTURAL SCOPE ESTIMATOR (FULL-WIDTH SECTION)              */}
      {/* ========================================================================= */}
      <section id="scope-estimator" className="py-20 sm:py-24 bg-[#F8F9FA] dark:bg-[#12151C] transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <button
              onClick={() => setShowEstimator(!showEstimator)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-xs font-mono font-bold text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] transition-all cursor-pointer"
            >
              <Compass size={14} className="text-[#D3AE36]" />
              <span>{showEstimator ? 'Hide Interactive Scope Estimator' : 'Need Instant Calculations? Open Interactive Scope Estimator'}</span>
            </button>

            {showEstimator && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full mt-8"
              >
                <StructuralScopeEstimator onApplyScope={handleApplyEstimatorScope} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
