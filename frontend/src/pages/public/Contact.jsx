import React, { useState, useRef, useEffect } from 'react';
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
  Sparkles
} from 'lucide-react';
import api from '../../services/api';
import { StructuralScopeEstimator } from '../../components/engineering/StructuralScopeEstimator';
import lemmaFour from '../../assets/lemma-four.jpg';
import lemmaTwo from '../../assets/lemma-two.jpg';

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

  // Animated background images alternation (lemma-four and lemma-two)
  const bgImages = [
    { src: lemmaFour, label: 'Lemma Techane — Structural Site Inspection' },
    { src: lemmaTwo, label: 'Lemma Techane — Civil Engineering Analysis' }
  ];
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

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
    <div className="min-h-screen bg-white dark:bg-[#0B0C0E] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC CONTACT HERO SECTION (MATCHING RESOURCESPAGE TOOLKIT DESIGN)  */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B0C0E] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Animated Background Layers (lemma-four and lemma-two) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {bgImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                opacity: activeBgIndex === idx ? 0.35 : 0,
                scale: activeBgIndex === idx ? 1.08 : 1.0,
              }}
              transition={{
                opacity: { duration: 1.8, ease: "easeInOut" },
                scale: { duration: 7, ease: "easeInOut" }
              }}
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{ backgroundImage: `url(${item.src})` }}
            />
          ))}

          {/* Ambient Sheen & Radiant Studio Lights (Matching ResourcesPage) */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white dark:from-[#0B0C0E] dark:via-[#0B0C0E]/85 dark:to-[#0B0C0E] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/[0.02] dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/[0.02] dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-[#0B0C0E] dark:via-[#0B0C0E]/90 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scope, Headline, Bio, Badges, Buttons, KPI Stats */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
              
              {/* Badge (Matching ResourcesPage) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · Direct Consultation &amp; Inquiries
                </span>
              </motion.div>

              {/* Headline (Matching ResourcesPage Grand Typography) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1.5"
              >
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-[2.2rem] xl:text-[2.45rem] tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
                  Contact Lemma.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    ASTU
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Techane &amp; Brothers.
                  </span>
                </h1>
              </motion.div>

              {/* Narrative Content & Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full space-y-4"
              >
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base leading-relaxed max-w-xl">
                  Have questions about our civil engineering designs, structural calculations, capstone research, or site consultations? Send us a message or call directly.
                </p>

                {/* Toolkit Checkmark Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">EBCS EN &amp; ERA Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Direct Mobile &amp; Telegram</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">24-Hour Response Time</span>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons (Matching ResourcesPage) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="tel:+251934830919"
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] border border-[#D4AF37] flex items-center gap-2 cursor-pointer font-mono"
                >
                  <span>Call +251 934 830 919</span>
                  <Phone size={15} />
                </a>
                <a
                  href="mailto:lemmayezedlij21@gmail.com"
                  className="rounded-full text-zinc-800 dark:text-zinc-200 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-6 py-3.5 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer font-mono"
                >
                  <span>Send Email</span>
                  <Mail size={14} className="text-[#D4AF37]" />
                </a>
              </motion.div>

              {/* Quick KPI Stats Row (Matching ResourcesPage) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg"
              >
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-zinc-900 dark:text-white font-mono">5th</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#801834] dark:text-[#E84855] font-mono">24h</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Direct Reply</span>
                </div>
                <div className="py-2 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-[#D4AF37] font-mono">ASTU</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">SoCEA Campus</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Direct Channels Launchpad (Matching ResourcesPage Launchpad) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <div className="w-full">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Direct Channels Launchpad</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">ASTU Live Base</span>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Channel 1: Phone */}
                  <a
                    href="tel:+251934830919"
                    className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] transition-all flex items-start gap-3.5 group shadow-xs"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] group-hover:scale-105 transition-transform shrink-0">
                      <Phone size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100">Direct Phone Line</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">FEA Live</span>
                      </div>
                      <p className="text-[11px] text-zinc-700 dark:text-zinc-300 font-mono font-bold">
                        +251 934 830 919 · 0934 830 919
                      </p>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Direct voice calls, SMS &amp; Telegram message channel.
                      </p>
                    </div>
                  </a>

                  {/* Channel 2: Email */}
                  <a
                    href="mailto:lemmayezedlij21@gmail.com"
                    className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] transition-all flex items-start gap-3.5 group shadow-xs"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] group-hover:scale-105 transition-transform shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100">Engineering Inquiries</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#801834] dark:text-[#E84855] font-bold">Official / 24h</span>
                      </div>
                      <p className="text-[11px] text-zinc-700 dark:text-zinc-300 font-mono font-bold truncate">
                        lemmayezedlij21@gmail.com
                      </p>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Full structural calculation packages &amp; capstone consultation.
                      </p>
                    </div>
                  </a>

                  {/* Channel 3: Campus Base */}
                  <div className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] transition-all flex items-start gap-3.5 group shadow-xs">
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] group-hover:scale-105 transition-transform shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100">Academic Base</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold">SoCEA Campus</span>
                      </div>
                      <p className="text-[11px] text-zinc-700 dark:text-zinc-300 font-bold">
                        School of Civil Engineering &amp; Architecture
                      </p>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        ASTU Main Campus, Adama, Oromia, Ethiopia.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Animated Scene Indicator */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-zinc-200/60 dark:border-white/10 text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5 truncate max-w-[260px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300 truncate">{bgImages[activeBgIndex].label}</span>
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {bgImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveBgIndex(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${activeBgIndex === idx ? 'w-5 bg-[#801834] dark:bg-[#D4AF37]' : 'w-1.5 bg-zinc-300 dark:bg-white/30'}`}
                        title={`Switch scene ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUR OVERLAPPING FLOATING CONTACT CARDS                                 */}
      {/* ========================================================================= */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Academic Base */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 text-center border border-zinc-100 dark:border-zinc-800 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#D4AF37]/50 flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 dark:bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-4">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                Academic Base
              </span>
              <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug">
                ASTU SoCEA Main Campus
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Adama, Oromia, Ethiopia
              </p>
            </div>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 text-center border border-zinc-100 dark:border-zinc-800 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-amber-400/50 flex flex-col items-center justify-between">
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
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 text-center border border-zinc-100 dark:border-zinc-800 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-orange-400/50 flex flex-col items-center justify-between">
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

          {/* Card 4: Availability */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 text-center border border-zinc-100 dark:border-zinc-800 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400/50 flex flex-col items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-yellow-50 dark:bg-yellow-950/50 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mb-4">
              <Clock size={22} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-600 dark:text-yellow-400 font-bold block mb-1">
                Availability
              </span>
              <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 leading-snug">
                Mon – Sat: 8:30 AM – 6:00 PM
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Study &amp; Project Consultations
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
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-amber-50 dark:hover:bg-amber-950/30 text-zinc-700 dark:text-zinc-300 hover:text-[#D4AF37] transition-all border border-zinc-100 dark:border-zinc-800 hover:border-[#D4AF37]/40 text-center group"
                >
                  <Facebook size={18} className="group-hover:scale-110 transition-transform mb-1.5 text-blue-600" />
                  <span className="text-[10px] font-bold">Facebook</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-amber-50 dark:hover:bg-amber-950/30 text-zinc-700 dark:text-zinc-300 hover:text-[#D4AF37] transition-all border border-zinc-100 dark:border-zinc-800 hover:border-[#D4AF37]/40 text-center group"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform mb-1.5 text-pink-600" />
                  <span className="text-[10px] font-bold">Instagram</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-amber-50 dark:hover:bg-amber-950/30 text-zinc-700 dark:text-zinc-300 hover:text-[#D4AF37] transition-all border border-zinc-100 dark:border-zinc-800 hover:border-[#D4AF37]/40 text-center group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform mb-1.5 text-blue-700" />
                  <span className="text-[10px] font-bold">LinkedIn</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-amber-50 dark:hover:bg-amber-950/30 text-zinc-700 dark:text-zinc-300 hover:text-[#D4AF37] transition-all border border-zinc-100 dark:border-zinc-800 hover:border-[#D4AF37]/40 text-center group"
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:text-[#D4AF37] shadow-sm border border-zinc-200 dark:border-zinc-700 transition-colors"
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
                    className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 px-4 py-3 text-xs sm:text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-zinc-400"
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
                      className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 px-4 py-3 text-xs sm:text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-zinc-400"
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
                      className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 px-4 py-3 text-xs sm:text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-zinc-400"
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
                    className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 px-4 py-3 text-xs sm:text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all"
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
                    className="w-full bg-[#F8FAFC] dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 p-4 text-xs sm:text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 focus:bg-white dark:focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-zinc-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button (Luxury Architectural Gold) */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#D4AF37] via-[#C9A227] to-[#B89628] hover:brightness-110 active:scale-[0.99] text-zinc-950 py-3.5 px-6 rounded-xl font-black text-sm tracking-wide transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                  <Send size={15} className="text-zinc-950" />
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
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] shadow-sm transition-all"
          >
            <Compass size={14} className="text-[#D4AF37]" />
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
