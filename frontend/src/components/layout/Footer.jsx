import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  ChevronUp,
  Copy,
  Check
} from 'lucide-react';
import lemmaImg from '../../assets/lemma.JPG';

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lemmayezedlij21@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About & Brotherhood', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact#contact-form' }
  ];

  return (
    <footer className="w-full bg-[#12151C] text-[#F8F9FA] pt-14 pb-12 sm:pb-16 relative overflow-hidden transition-colors border-t border-white/5">
      {/* Subtle Ambient Studio Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-32 bg-[#D3AE36]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-32 bg-[#232936]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP: PERSONAL HERO CTA (WARM, DIRECT, RECRUITER-FRIENDLY)                 */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 border-b border-white/5">
          
          {/* Avatar + Personal Introduction */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#D3AE36] shadow-lg">
                <img 
                  src={lemmaImg} 
                  alt="Lemma Amensisa" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              {/* Online Green Indicator Dot */}
              <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#12151C]"></span>
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <h3 className="font-extrabold text-xl sm:text-2xl text-[#F8F9FA] tracking-tight">
                  Lemma Amensisa
                </h3>
                <span className="text-[10px] font-mono font-bold text-[#D3AE36] bg-[#D3AE36]/15 px-2.5 py-0.5 rounded-full uppercase">
                  Class of 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F8F9FA]/75 max-w-md leading-relaxed">
                Civil Engineering Student at ASTU SoCEA · Open for graduate engineering roles, B.Sc. capstone collaborations, and structural consultations.
              </p>
            </div>
          </div>

          {/* Quick Personal Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact#contact-form"
              onClick={() => {
                if (window.location.pathname === '/contact' || window.location.pathname.startsWith('/contact')) {
                  const el = document.getElementById('contact-form') || document.getElementById('contact-channels-and-form');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                  }
                }
              }}
              className="flex-1 sm:flex-initial rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] active:scale-95 text-[#12151C] px-6 py-3 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(211,174,54,0.3)] cursor-pointer"
            >
              <Mail size={14} />
              <span>Say Hello</span>
            </Link>

            <button
              onClick={handleCopyEmail}
              className="rounded-full bg-white/10 hover:bg-white/15 text-[#F8F9FA] px-5 py-3 font-mono text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-[#D3AE36]" />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MIDDLE: MINIMALIST PERSONAL DETAILS, SOCIALS & INLINE NAV                 */}
        {/* ========================================================================= */}
        <div className="py-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5">
          
          {/* Minimalist Horizontal Navigation */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#F8F9FA]/80">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  if (link.path.includes('#') && (window.location.pathname === '/contact' || window.location.pathname.startsWith('/contact'))) {
                    const id = link.path.split('#')[1];
                    const el = document.getElementById(id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                    }
                  }
                }}
                className="hover:text-[#D3AE36] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Personal Social & Communication Channels */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] transition-all"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] transition-all"
            >
              <Send size={14} className="-translate-x-0.5" />
            </a>
            <a
              href="tel:+251934830919"
              aria-label="Phone"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] transition-all"
            >
              <Phone size={14} />
            </a>
            <span className="text-zinc-700">|</span>
            <div className="flex items-center gap-1.5 text-xs text-[#F8F9FA]/70 font-mono">
              <MapPin size={13} className="text-[#D3AE36]" />
              <span>Adama, Ethiopia</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM: PERSONAL SIGNATURE, COPYRIGHT & BACK TO TOP                      */}
        {/* ========================================================================= */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F8F9FA]/60 font-mono">
          <p className="text-center sm:text-left">
            Designed &amp; Engineered by <strong className="text-[#F8F9FA] font-bold">Lemma Amensisa</strong> · &copy; {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#D3AE36]">
              ✦ ASTU SoCEA Civil Engineering
            </span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#D3AE36] transition-colors flex items-center gap-1 text-[11px] uppercase tracking-wider cursor-pointer text-[#F8F9FA]/80"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ChevronUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
