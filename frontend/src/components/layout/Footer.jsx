import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, HardHat, Copy, CheckCircle2, ChevronUp } from 'lucide-react';

export const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('consult@alexandre-structural.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="bg-[#FAFAFC] dark:bg-[#101215] border-t border-zinc-200/90 dark:border-zinc-800 pt-20 pb-12 relative overflow-hidden text-zinc-900 dark:text-[#EAEAEA] transition-colors duration-200">
      {/* Background subtle styling */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-blueprint-gold"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP BENTO CALLOUT: AVAILABLE FOR CONSULTING                                */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-zinc-800 p-8 sm:p-12 mb-16 shadow-[0_10px_35px_rgba(0,0,0,0.04)] dark:shadow-2xl relative overflow-hidden group hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#801834]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-[#D4AF37]/40 bg-white dark:bg-[#121417] px-3.5 py-1 text-xs font-mono text-[#801834] dark:text-[#D4AF37] mb-4 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Select Consultations & High-Rise Peer Reviews
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
                Let's Engineer Something <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">Resilient & Enduring.</span>
              </h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-[#9CA3AF] leading-relaxed">
                Whether you are designing a 60-story commercial tower, evaluating seismic retrofit strategies, or requiring an independent calculation verification.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/contact"
                className="rounded-full bg-[#801834] text-white dark:bg-[#D4AF37] dark:text-[#121417] px-7 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-[#68132a] dark:hover:bg-white transition-all shadow-[0_4px_15px_rgba(128,24,52,0.3)] dark:shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto text-center"
              >
                Request Consultation <ArrowUpRight size={14} />
              </Link>
              <button
                onClick={handleCopyEmail}
                className="rounded-full border border-zinc-300 dark:border-[#333] bg-white dark:bg-[#121417] hover:border-[#801834] dark:hover:border-[#D4AF37] text-zinc-800 dark:text-[#EAEAEA] hover:text-[#801834] dark:hover:text-[#D4AF37] px-5 py-3.5 text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto shadow-sm"
              >
                <Copy size={13} className="text-[#801834] dark:text-[#D4AF37]" />
                <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BENTO FOOTER COLUMNS                                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-16 border-b border-zinc-200 dark:border-[#222]">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 rounded-2xl bg-zinc-50/80 dark:bg-[#121417]/60 border border-zinc-200/80 dark:border-[#26282D] p-7 shadow-sm">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-[#801834] dark:border-[#D4AF37] bg-white dark:bg-[#1E2125] flex items-center justify-center shadow-sm">
                <Layers className="text-[#801834] dark:text-[#D4AF37] w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-wider uppercase text-zinc-900 dark:text-[#EAEAEA]">
                Alexandre<span className="text-[#801834] dark:text-[#D4AF37]">.</span>
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-xs sm:text-sm leading-relaxed">
              Licensed Senior Structural Engineer (PE, SE). Specializing in high-rise lateral stability design, seismic resilience retrofits, bridge infrastructure, and forensic structural evaluations.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#801834] dark:text-[#D4AF37] border border-[#801834]/30 dark:border-[#D4AF37]/30 bg-white dark:bg-[#D4AF37]/5 px-3 py-1 rounded-full shadow-xs">
                IBC 2024 & ACI 318 Compliant
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-600 dark:text-[#9CA3AF] border border-zinc-300 dark:border-[#333] bg-white dark:bg-transparent px-3 py-1 rounded-full shadow-xs">
                PE #84729 · SE #92041
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 rounded-2xl bg-zinc-50/80 dark:bg-[#121417]/60 border border-zinc-200/80 dark:border-[#26282D] p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-zinc-900 dark:text-[#EAEAEA] text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-[#801834] dark:text-[#D4AF37]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span> Navigation
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-zinc-600 dark:text-[#9CA3AF] font-mono">
                <li><Link to="/" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Home Page</Link></li>
                <li><Link to="/about" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">About Me</Link></li>
                <li><Link to="/services" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Services</Link></li>
                <li><Link to="/projects" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Projects</Link></li>
                <li><Link to="/experience" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Experience</Link></li>
                <li><Link to="/insights" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Technical Notes</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Portal & Resources (2 cols) */}
          <div className="lg:col-span-2 rounded-2xl bg-zinc-50/80 dark:bg-[#121417]/60 border border-zinc-200/80 dark:border-[#26282D] p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-zinc-900 dark:text-[#EAEAEA] text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-[#801834] dark:text-[#D4AF37]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span> Resources
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-zinc-600 dark:text-[#9CA3AF] font-mono">
                <li><Link to="/resources" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Downloads & Guides</Link></li>
                <li><Link to="/#testimonials" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Testimonials</Link></li>
                <li><Link to="/faq" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Client FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Consultation</Link></li>
                <li><Link to="/admin/login" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Admin Login</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 rounded-2xl bg-zinc-50/80 dark:bg-[#121417]/60 border border-zinc-200/80 dark:border-[#26282D] p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-zinc-900 dark:text-[#EAEAEA] text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-[#801834] dark:text-[#D4AF37]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span> Headquarters
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs text-zinc-600 dark:text-[#9CA3AF]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="text-[#801834] dark:text-[#D4AF37] w-4 h-4 mt-0.5 shrink-0" />
                  <span>Suite 400, Iron Building<br/>Metropolis City, NY 10001</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="text-[#801834] dark:text-[#D4AF37] w-4 h-4 shrink-0" />
                  <a href="tel:+15550198472" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors font-mono">+1 (555) 019-8472</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="text-[#801834] dark:text-[#D4AF37] w-4 h-4 shrink-0" />
                  <a href="mailto:consult@alexandre-structural.com" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors font-mono truncate">consult@alexandre-structural.com</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500 dark:text-[#9CA3AF]">
          <p>&copy; {new Date().getFullYear()} Alexandre Structural Engineering Professional Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <button 
              onClick={scrollToTop} 
              className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors uppercase tracking-wider text-[11px] flex items-center gap-1"
            >
              Back to top <ChevronUp size={14} />
            </button>
            <Link 
              to="/admin/login" 
              className="text-[#801834] dark:text-[#D4AF37] rounded-full border border-zinc-300 dark:border-[#D4AF37]/30 bg-white dark:bg-transparent px-3 py-1 hover:bg-[#801834] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#121417] transition-colors flex items-center gap-1 text-[11px] shadow-xs"
            >
              CMS Admin <ArrowUpRight size={11} />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
