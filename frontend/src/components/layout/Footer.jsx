import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, HardHat, Copy, CheckCircle2, ChevronUp } from 'lucide-react';

export const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('astu.civil.lemma@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#0B0F19] border-t border-zinc-200/90 dark:border-slate-800/80 pt-20 pb-12 relative overflow-hidden text-[#54595F] dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP BENTO CALLOUT: AVAILABLE FOR CONSULTING                                */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-[#FFFFFF] dark:bg-[#111827] backdrop-blur-xs border border-zinc-200/90 dark:border-slate-800/90 p-8 sm:p-12 mb-16 shadow-[0_10px_35px_rgba(0,0,0,0.04)] dark:shadow-2xl relative overflow-hidden group hover:border-[#D4AF37]/50 dark:hover:border-[#D4AF37]/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 dark:border-slate-700/80 bg-[#FEF9E7] dark:bg-[#0F172A] px-3.5 py-1 text-xs font-mono text-[#D4AF37] dark:text-[#D4AF37] mb-4 shadow-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Academic Collaborations, Capstone Research & Graduate Opportunities
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-slate-100 tracking-tight">
                Engineering Ethiopia's Future with <span className="text-[#D4AF37]">ASTU Excellence.</span>
              </h3>
              <p className="mt-3 text-sm text-[#54595F] dark:text-slate-400 leading-relaxed">
                Collaborating on reinforced concrete structural modeling, highway and transport corridors, geotechnical soil investigations, and innovative graduation capstone engineering.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/contact"
                className="rounded-full bg-[#D4AF37] text-[#121417] px-7 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-[#c49f2c] transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto text-center font-bold"
              >
                Connect With Us <ArrowUpRight size={14} />
              </Link>
              <button
                onClick={handleCopyEmail}
                className="rounded-full border border-zinc-300 dark:border-slate-700 bg-[#FFFFFF] dark:bg-[#0F172A] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] text-[#54595F] dark:text-slate-200 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] px-5 py-3.5 text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto shadow-sm"
              >
                <Copy size={13} className="text-[#D4AF37]" />
                <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BENTO FOOTER COLUMNS                                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-16 border-b border-zinc-200/80 dark:border-slate-800/80">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#0F172A]/90 border border-zinc-200/80 dark:border-slate-800/80 p-7 shadow-sm">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-[#D4AF37] dark:border-[#D4AF37] bg-[#FFFFFF] dark:bg-[#111827] flex items-center justify-center shadow-sm">
                <Layers className="text-[#D4AF37] dark:text-[#D4AF37] w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-wider uppercase text-zinc-900 dark:text-slate-100">
                Lemma & Brothers<span className="text-[#D4AF37]">.</span>
              </span>
            </Link>
            <p className="text-[#54595F] dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              5th Year Civil Engineering student cohort at Adama Science and Technology University (ASTU). Passionate brothers in structural finite element modeling, reinforced concrete design, highway infrastructure, and geotechnical foundations.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] border border-[#D4AF37]/30 bg-[#FEF9E7] dark:bg-[#D4AF37]/5 px-3 py-1 rounded-full shadow-xs font-bold">
                EBCS, ES EN & ERA Compliant
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#54595F] dark:text-slate-400 border border-zinc-300 dark:border-slate-700 bg-[#FFFFFF] dark:bg-transparent px-3 py-1 rounded-full shadow-xs">
                ASTU SoCEA · Class of 2026
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#FFFFFF] dark:bg-[#0F172A]/90 border border-zinc-200/80 dark:border-slate-800/80 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Navigation
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-[#54595F] dark:text-slate-400 font-mono">
                <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home Page</Link></li>
                <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Me</Link></li>
                <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link></li>
                <li><Link to="/projects" className="hover:text-[#D4AF37] transition-colors">Projects</Link></li>
                <li><Link to="/experience" className="hover:text-[#D4AF37] transition-colors">Experience</Link></li>
                <li><Link to="/insights" className="hover:text-[#D4AF37] transition-colors">Technical Notes</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Portal & Resources (2 cols) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#FFFFFF] dark:bg-[#0F172A]/90 border border-zinc-200/80 dark:border-slate-800/80 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Resources
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-[#54595F] dark:text-slate-400 font-mono">
                <li><Link to="/resources" className="hover:text-[#D4AF37] transition-colors">Downloads & Guides</Link></li>
                <li><Link to="/#testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonials</Link></li>
                <li><Link to="/faq" className="hover:text-[#D4AF37] transition-colors">Client FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Consultation</Link></li>
                <li><Link to="/admin/login" className="hover:text-[#D4AF37] transition-colors">Admin Login</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 rounded-2xl bg-[#FFFFFF] dark:bg-[#0F172A]/90 border border-zinc-200/80 dark:border-slate-800/80 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Campus Location
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs text-[#54595F] dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="text-[#D4AF37] w-4 h-4 mt-0.5 shrink-0" />
                  <span>School of Civil Engineering & Architecture<br/>ASTU Main Campus, Adama, Ethiopia</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="text-[#D4AF37] w-4 h-4 shrink-0" />
                  <a href="tel:+251911234567" className="hover:text-[#D4AF37] transition-colors font-mono">+251 91 123 4567</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="text-[#D4AF37] w-4 h-4 shrink-0" />
                  <a href="mailto:astu.civil.lemma@gmail.com" className="hover:text-[#D4AF37] transition-colors font-mono truncate">astu.civil.lemma@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#54595F] dark:text-[#9CA3AF]">
          <p>&copy; {new Date().getFullYear()} Lemma Techane & ASTU 5th Year Civil Engineering Brothers. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <button 
              onClick={scrollToTop} 
              className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider text-[11px] flex items-center gap-1 font-semibold"
            >
              Back to top <ChevronUp size={14} />
            </button>
            <Link 
              to="/admin/login" 
              className="text-[#D4AF37] rounded-full border border-[#D4AF37]/40 bg-[#FFFFFF] dark:bg-transparent px-3 py-1 hover:bg-[#D4AF37] hover:text-[#121417] transition-colors flex items-center gap-1 text-[11px] shadow-xs font-bold"
            >
              CMS Admin <ArrowUpRight size={11} />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
