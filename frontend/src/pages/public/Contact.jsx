import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  Linkedin
} from 'lucide-react';
import api from '../../services/api';
import { StructuralScopeEstimator } from '../../components/engineering/StructuralScopeEstimator';

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
  const [showEstimator, setShowEstimator] = useState(false);

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
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. TOP HERO BANNER (Rich Emerald / Forest Green Gradient Banner)          */}
      {/* ========================================================================= */}
      <section className="relative bg-gradient-to-r from-[#072716] via-[#0D4425] to-[#082E19] text-white pt-36 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Subtle Geometric Overlay & Radial Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (Badge, Heading, Description, Quick Contact Pills) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-4">
              
              {/* Connect With Us Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide">
                <MessageSquare size={13} className="text-emerald-400" />
                <span>CONNECT WITH US</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.15]">
                <span className="text-[#FBBF24]">Contact Lemma</span>{' '}
                <span className="text-[#4ADE80]">Techane &amp; Brothers</span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base text-zinc-200/90 max-w-2xl leading-relaxed">
                Have questions about our civil engineering designs, structural calculations, capstone research, or site consultations? Send us a message or call our offices directly.
              </p>

              {/* Quick Contact Action Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+251934830919"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0B351E]/90 hover:bg-[#0E4226] border border-emerald-500/50 text-emerald-200 text-xs font-mono font-bold transition-all shadow-sm"
                >
                  <Phone size={13} className="text-emerald-400" />
                  <span>+251 934 830 919</span>
                </a>
                <a
                  href="mailto:lemmayezedlij21@gmail.com"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0B351E]/90 hover:bg-[#0E4226] border border-amber-500/50 text-amber-200 text-xs font-mono font-bold transition-all shadow-sm"
                >
                  <Mail size={13} className="text-amber-400" />
                  <span>lemmayezedlij21@gmail.com</span>
                </a>
              </div>

            </div>

            {/* Right Side: 2x2 Semi-Transparent Dark Glowing Glass Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              
              {/* Location Mini Card */}
              <div className="p-4 rounded-2xl bg-[#082E19]/70 backdrop-blur-md border border-emerald-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)] flex flex-col items-center text-center justify-center transition-all hover:border-emerald-400">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-2.5">
                  <MapPin size={17} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-bold">Location</span>
                <span className="text-xs font-semibold text-zinc-100 mt-1">ASTU Campus, Adama</span>
              </div>

              {/* Phone Mini Card */}
              <div className="p-4 rounded-2xl bg-[#082E19]/70 backdrop-blur-md border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.1)] flex flex-col items-center text-center justify-center transition-all hover:border-amber-400">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center mb-2.5">
                  <Phone size={17} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold">Phone</span>
                <span className="text-xs font-semibold text-zinc-100 mt-1">+251 934 830 919</span>
              </div>

              {/* Email Mini Card */}
              <div className="p-4 rounded-2xl bg-[#082E19]/70 backdrop-blur-md border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.1)] flex flex-col items-center text-center justify-center transition-all hover:border-orange-400">
                <div className="w-9 h-9 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center mb-2.5">
                  <Mail size={17} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-300 font-bold">Email</span>
                <span className="text-xs font-semibold text-zinc-100 mt-1 truncate max-w-full">lemmayezedlij21@gmail.com</span>
              </div>

              {/* Hours Mini Card */}
              <div className="p-4 rounded-2xl bg-[#082E19]/70 backdrop-blur-md border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)] flex flex-col items-center text-center justify-center transition-all hover:border-purple-400">
                <div className="w-9 h-9 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center mb-2.5">
                  <Clock size={17} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold">Hours</span>
                <span className="text-xs font-semibold text-zinc-100 mt-1">8:30 AM – 5:30 PM</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUR OVERLAPPING FLOATING CONTACT CARDS                                 */}
      {/* ========================================================================= */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Our Location */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 text-center border border-zinc-100 dark:border-zinc-800 transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                Our Location
              </span>
              <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug">
                ASTU SoCEA Campus, Office 412
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Adama, Oromia, Ethiopia
              </p>
            </div>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 text-center border border-zinc-100 dark:border-zinc-800 transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Phone size={22} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold block mb-1">
                Phone Numbers
              </span>
              <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug">
                +251 934 830 919
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                0934 830 919 (Direct &amp; Telegram)
              </p>
            </div>
          </div>

          {/* Card 3: Email Address */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 text-center border border-zinc-100 dark:border-zinc-800 transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
              <Mail size={22} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-bold block mb-1">
                Email Address
              </span>
              <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug truncate max-w-full">
                lemmayezedlij21@gmail.com
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 truncate max-w-full">
                Lemma Techane Civil Engineering
              </p>
            </div>
          </div>

          {/* Card 4: Office Hours */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 text-center border border-zinc-100 dark:border-zinc-800 transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <Clock size={22} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold block mb-1">
                Office Hours
              </span>
              <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug">
                Mon – Sat: 8:30 AM – 5:30 PM
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Sunday: Closed
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LOWER SECTION: SPLIT GRID (LEFT: SOCIAL & MAP, RIGHT: FORM)            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT COLUMN: SOCIAL PLATFORMS & GOOGLE MAPS CARD                        */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Social Media Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-7 border border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold block mb-1">
                Social Platforms
              </span>
              <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
                Follow Us
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-6">
                Stay updated with our latest civil engineering programs and news.
              </p>

              {/* 4 Social Buttons Grid */}
              <div className="grid grid-cols-4 gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 transition-all border border-zinc-100 dark:border-zinc-800 text-center group"
                >
                  <Facebook size={18} className="group-hover:scale-110 transition-transform mb-1.5 text-blue-600" />
                  <span className="text-[10px] font-bold">Facebook</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 transition-all border border-zinc-100 dark:border-zinc-800 text-center group"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform mb-1.5 text-pink-600" />
                  <span className="text-[10px] font-bold">Instagram</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 transition-all border border-zinc-100 dark:border-zinc-800 text-center group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform mb-1.5 text-blue-700" />
                  <span className="text-[10px] font-bold">LinkedIn</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 transition-all border border-zinc-100 dark:border-zinc-800 text-center group"
                >
                  <Youtube size={18} className="group-hover:scale-110 transition-transform mb-1.5 text-red-600" />
                  <span className="text-[10px] font-bold">YouTube</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 relative">
              
              {/* "Open in Maps" Link Overlay in Top-Left */}
              <div className="absolute top-3 left-3 z-10">
                <a
                  href="https://maps.google.com/?q=Adama+Science+and+Technology+University"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:text-emerald-600 shadow-sm border border-zinc-200 dark:border-zinc-700 transition-colors"
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
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 sm:p-10 border border-zinc-100 dark:border-zinc-800">
              
              {/* Send a Message Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide mb-3">
                <Send size={12} className="text-emerald-600 dark:text-emerald-400" />
                <span>SEND A MESSAGE</span>
              </div>

              {/* Form Heading & Subtitle */}
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
                We'd Love to Hear From You
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 mb-8">
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
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-bold">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Abebe Kebede"
                    className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 px-4 py-3 text-xs sm:text-sm focus:border-emerald-600 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-zinc-400"
                  />
                </div>

                {/* Email & Phone 2-Col Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-bold">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abebe@example.com"
                      className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 px-4 py-3 text-xs sm:text-sm focus:border-emerald-600 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-bold">
                      PHONE *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09XXXXXXXX"
                      className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 px-4 py-3 text-xs sm:text-sm focus:border-emerald-600 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                {/* Project Specialization Selector */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-bold">
                    ENGINEERING SPECIALIZATION *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 px-4 py-3 text-xs sm:text-sm focus:border-emerald-600 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all"
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
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 font-bold">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you with structural calculations, site supervision, or capstone collaboration..."
                    className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 p-4 text-xs sm:text-sm focus:border-emerald-600 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-zinc-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                  <Send size={15} className="text-white" />
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXPANDABLE STRUCTURAL SCOPE ESTIMATOR (OPTIONAL POWER FEATURE)          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center">
          <button
            onClick={() => setShowEstimator(!showEstimator)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-sm transition-all"
          >
            <Compass size={14} className="text-emerald-500" />
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
      </section>

    </div>
  );
};
