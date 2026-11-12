import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Twitter, 
  Facebook, 
  ShieldCheck, 
  ChevronUp
} from 'lucide-react';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12151C] text-[#F8F9FA] pt-16 pb-8 relative overflow-hidden transition-colors border-t border-[#232936]">
      {/* Subtle Metallic Gold & Obsidian Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-[#D3AE36]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-[#232936]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* MAIN 4-COLUMN FOOTER LAYOUT (EXECUTIVE CIVIL ENGINEERING CONSULTANT)       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          
          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 1: CORPORATE BRAND LOGO, MISSION & SOCIAL CIRCLE BUTTONS (3 cols) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start gap-4">
            
            {/* Corporate Brand Badge & Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-[#232936] border border-[#D3AE36]/50 flex items-center justify-center text-[#D3AE36] shrink-0 shadow-inner group-hover:scale-105 group-hover:border-[#D3AE36] transition-all">
                <Building2 className="w-6 h-6 text-[#D3AE36]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black text-xl tracking-tight text-[#F8F9FA] leading-tight group-hover:text-[#D3AE36] transition-colors">
                  AMENSISA <span className="font-light text-[#F8F9FA]/80">&amp; PARTNERS</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D3AE36] font-extrabold">
                  CIVIL &amp; STRUCTURAL PRACTICE
                </span>
              </div>
            </Link>

            {/* Corporate Mission Statement */}
            <p className="text-[#F8F9FA]/75 text-xs sm:text-sm leading-relaxed max-w-sm mt-1">
              Delivering resilient reinforced concrete structures, transportation corridors, and geotechnical solutions across Ethiopia. Operating as a unified multidisciplinary engineering practice from ASTU School of Civil Engineering &amp; Architecture.
            </p>

            {/* Social Platform Circular Buttons */}
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#232936] border border-[#232936] flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] hover:border-[#D3AE36] transition-all shadow-sm"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-[#232936] border border-[#232936] flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] hover:border-[#D3AE36] transition-all shadow-sm"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-full bg-[#232936] border border-[#232936] flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] hover:border-[#D3AE36] transition-all shadow-sm"
              >
                <Send size={14} className="-translate-x-0.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#232936] border border-[#232936] flex items-center justify-center text-[#F8F9FA]/80 hover:bg-[#D3AE36] hover:text-[#12151C] hover:border-[#D3AE36] transition-all shadow-sm"
              >
                <Facebook size={15} />
              </a>
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 2: HEADQUARTERS & PRACTICE DISPATCH (3 cols)                     */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-[#F8F9FA] font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mb-1">
              <span className="text-[#D3AE36] font-black text-base">|</span> PRACTICE DISPATCH
            </h4>

            {/* Email */}
            <div className="flex items-center gap-2.5 text-xs text-[#F8F9FA]/85">
              <Mail size={15} className="text-[#D3AE36] shrink-0" />
              <a 
                href="mailto:lemmayezedlij21@gmail.com" 
                className="hover:underline hover:text-[#D3AE36] transition-all truncate font-mono text-[#F8F9FA]"
              >
                lemmayezedlij21@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2.5 text-xs text-[#F8F9FA]/85 font-mono">
              <Phone size={15} className="text-[#D3AE36] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href="tel:+251934830919" className="hover:underline hover:text-[#D3AE36] text-[#F8F9FA] font-semibold transition-colors">
                  +251 934 830 919
                </a>
                <span className="text-[#F8F9FA]/60 text-[11px]">Direct Executive &amp; Telegram Desk</span>
              </div>
            </div>

            {/* Academic Base Location */}
            <div className="flex items-start gap-2.5 text-xs text-[#F8F9FA]/85">
              <MapPin size={15} className="text-[#D3AE36] shrink-0 mt-0.5" />
              <span className="text-[#F8F9FA]/80 leading-relaxed">
                ASTU SoCEA Campus, Adama / Addis Ababa Corridor, Ethiopia
              </span>
            </div>

            {/* Newsletter Subscription Bar */}
            <div className="mt-2 pt-2 border-t border-[#232936]">
              <span className="text-[10px] font-mono uppercase font-bold text-[#F8F9FA] tracking-wider block mb-2">
                SUBSCRIBE TO PRACTICE WHITEPAPERS
              </span>
              <form onSubmit={handleNewsletterSubmit} className="relative flex items-center max-w-sm">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter corporate email.."
                  className="w-full bg-[#232936] border border-[#232936] focus:border-[#D3AE36] rounded-xl px-4 py-2 text-xs text-[#F8F9FA] placeholder:text-[#F8F9FA]/40 focus:outline-none transition-all pr-11"
                />
                <button
                  type="submit"
                  className="absolute right-1 w-7 h-7 rounded-lg bg-[#D3AE36] hover:bg-[#C29F2F] text-[#12151C] flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  title="Subscribe to Practice Briefs"
                >
                  <Send size={12} className="rotate-45" />
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] font-semibold text-[#D3AE36] mt-1.5 block">
                  ✓ Subscribed! You will receive engineering briefs.
                </span>
              )}
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 3: PRACTICE DIVISIONS (3 cols)                                   */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
            <h4 className="text-[#F8F9FA] font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mb-3.5">
              <span className="text-[#D3AE36] font-black text-base">|</span> PRACTICE DIVISIONS
            </h4>

            {/* Double Subcolumn List with Arrows */}
            <div className="grid grid-cols-1 gap-y-2.5 text-xs text-[#F8F9FA]/80">
              <Link to="/services" className="hover:text-[#D3AE36] transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#D3AE36]">→</span> Structural RC &amp; High-Rise Design (ETABS)
              </Link>
              <Link to="/services" className="hover:text-[#D3AE36] transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#D3AE36]">→</span> Highway Corridors &amp; Pavements (ERA 2024)
              </Link>
              <Link to="/services" className="hover:text-[#D3AE36] transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#D3AE36]">→</span> Geotechnical &amp; Soil Mechanics (EBCS 7)
              </Link>
              <Link to="/experience" className="hover:text-[#D3AE36] transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#D3AE36]">→</span> Field Operations &amp; Site QA/QC (OCC Sites)
              </Link>
              <Link to="/projects" className="hover:text-[#D3AE36] transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#D3AE36]">→</span> Infrastructure Commissions Archive
              </Link>
              <Link to="/resources" className="hover:text-[#D3AE36] transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#D3AE36]">→</span> Structural Calculators &amp; Code Manuals
              </Link>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 4: CODE ACCREDITATIONS & VERIFICATION (3 cols)                   */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
            <h4 className="text-[#F8F9FA] font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mb-3.5">
              <span className="text-[#D3AE36] font-black text-base">|</span> ACCREDITATIONS &amp; CODES
            </h4>

            <ul className="flex flex-col gap-2.5 text-xs text-[#F8F9FA]/80">
              <li className="hover:text-[#D3AE36] transition-colors">✦ EBCS EN 1990 — Basis of Structural Design</li>
              <li className="hover:text-[#D3AE36] transition-colors">✦ EBCS EN 1992 — Reinforced Concrete Framing</li>
              <li className="hover:text-[#D3AE36] transition-colors">✦ EBCS EN 1998 — Seismic Ductility (Zone 4)</li>
              <li className="hover:text-[#D3AE36] transition-colors">✦ ERA 2024 — Geometric &amp; Pavement Manuals</li>
              <li className="hover:text-[#D3AE36] transition-colors">✦ Total Station Coordinate Setting-Out</li>
              <li className="hover:text-[#D3AE36] transition-colors">✦ ASTM Concrete Slump &amp; Cube Testing</li>
              <li className="hover:text-[#D3AE36] transition-colors">✦ ASTU SoCEA Certified Defense Ready</li>
            </ul>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SUB-FOOTER STRIP (COPYRIGHT, LINKS & ADMIN ACCESS)                 */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-[#232936] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F8F9FA]/70">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Amensisa &amp; Partners. All rights reserved. ASTU School of Civil Engineering &amp; Architecture.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <Link to="/about" className="hover:text-[#D3AE36] transition-colors">
              Practice Governance
            </Link>
            <Link to="/about" className="hover:text-[#D3AE36] transition-colors">
              Code Compliance
            </Link>
            <Link 
              to="/admin/login" 
              className="hover:text-[#D3AE36] transition-colors flex items-center gap-1.5 font-bold text-[#F8F9FA]"
            >
              <ShieldCheck size={14} className="text-[#D3AE36]" />
              <span>Executive Portal</span>
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-[#D3AE36] transition-colors flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider ml-2 cursor-pointer text-[#D3AE36]"
              title="Back to Top"
            >
              <span>Top</span>
              <ChevronUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
