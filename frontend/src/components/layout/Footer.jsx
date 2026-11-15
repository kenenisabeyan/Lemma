import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  ExternalLink,
  ChevronUp
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About & Brotherhood', path: '/about' },
    { name: 'Featured Projects', path: '/projects' },
    { name: 'Services & Modules', path: '/services' },
    { name: 'Experience & Milestones', path: '/experience' },
    { name: 'Contact & Consultation', path: '/contact' }
  ];

  return (
    <footer className="bg-[#12151C] text-[#F8F9FA] pt-14 pb-8 relative overflow-hidden transition-colors border-t border-[#232936]">
      {/* Subtle Ambient Studio Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-[#D3AE36]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-[#232936]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* INTEGRATED 3-COLUMN EXECUTIVE PERSONAL PORTFOLIO FOOTER                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10">
          
          {/* Column 1: Personal Brand, Profile & Social Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#232936] border border-[#D3AE36]/40 flex items-center justify-center text-[#D3AE36] shrink-0 shadow-inner group-hover:scale-105 group-hover:border-[#D3AE36] transition-all">
                <Building2 className="w-5 h-5 text-[#D3AE36]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#F8F9FA] leading-tight group-hover:text-[#D3AE36] transition-colors">
                  Lemma <span className="font-light text-[#F8F9FA]/80">Amensisa</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D3AE36] font-bold">
                  B.Sc. Civil Engineering · ASTU Class of 2026
                </span>
              </div>
            </Link>

            <p className="text-[#F8F9FA]/75 text-xs sm:text-sm leading-relaxed max-w-md">
              Specializing in reinforced concrete structures, ETABS non-linear seismic modeling, highway corridor alignments (ERA standards), and field quality supervision across Ethiopia.
            </p>

            {/* Direct Connect Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#232936] border border-[#31394D]/60 flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] hover:border-[#D3AE36] transition-all"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-xl bg-[#232936] border border-[#31394D]/60 flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] hover:border-[#D3AE36] transition-all"
              >
                <Send size={14} className="-translate-x-0.5" />
              </a>
              <a
                href="tel:+251934830919"
                aria-label="Call Direct"
                className="w-9 h-9 rounded-xl bg-[#232936] border border-[#31394D]/60 flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] hover:border-[#D3AE36] transition-all"
              >
                <Phone size={14} />
              </a>
              <a
                href="mailto:lemmayezedlij21@gmail.com"
                aria-label="Email Direct"
                className="w-9 h-9 rounded-xl bg-[#232936] border border-[#31394D]/60 flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] hover:border-[#D3AE36] transition-all"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Streamlined Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-[#F8F9FA] font-bold text-xs uppercase tracking-wider font-mono text-[#D3AE36]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#F8F9FA]/80">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="hover:text-[#D3AE36] transition-colors flex items-center gap-1.5 hover:translate-x-1 transition-transform"
                >
                  <span className="text-[#D3AE36]/60">→</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Academic Base & Direct Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <h4 className="text-[#F8F9FA] font-bold text-xs uppercase tracking-wider font-mono text-[#D3AE36]">
              Academic Base &amp; Contact
            </h4>

            <div className="space-y-2.5 text-xs text-[#F8F9FA]/85">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D3AE36] shrink-0 mt-0.5" />
                <span className="text-[#F8F9FA]/80">
                  School of Civil Engineering &amp; Architecture (SoCEA), ASTU Main Campus, Adama, Ethiopia
                </span>
              </div>

              <div className="flex items-center gap-2.5 font-mono">
                <Phone size={15} className="text-[#D3AE36] shrink-0" />
                <a href="tel:+251934830919" className="hover:underline hover:text-[#D3AE36] text-[#F8F9FA] font-semibold transition-colors">
                  +251 934 830 919 / 0934 830 919
                </a>
              </div>

              <div className="flex items-center gap-2.5 font-mono">
                <Mail size={15} className="text-[#D3AE36] shrink-0" />
                <a href="mailto:lemmayezedlij21@gmail.com" className="hover:underline hover:text-[#D3AE36] text-[#F8F9FA] transition-colors truncate">
                  lemmayezedlij21@gmail.com
                </a>
              </div>
            </div>

            {/* Recruiter & Capstone Status Pill */}
            <div className="mt-1 p-3 rounded-xl bg-[#232936] border border-[#31394D]/60 flex items-center gap-2.5 text-[11px] text-[#F8F9FA]/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Available for 2026 graduate structural roles &amp; capstone collaborations</span>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Back to Top */}
        <div className="pt-6 border-t border-[#232936] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F8F9FA]/65">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Lemma Amensisa &amp; Brotherhood Cohort. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs">
            <Link to="/about" className="hover:text-[#D3AE36] transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-[#D3AE36] transition-colors">
              Contact
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-[#D3AE36] transition-colors flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider cursor-pointer text-[#D3AE36]"
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
