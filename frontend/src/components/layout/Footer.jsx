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
  Layers, 
  ArrowUpRight,
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
    <footer className="bg-[#0080C8] text-white pt-16 pb-8 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* MAIN 4-COLUMN FOOTER LAYOUT (MATCHING YOMTECH / AZURE CORPORATE DESIGN)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          
          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 1: BRAND LOGO, MISSION & SOCIAL CIRCLE BUTTONS (3.5 cols)        */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start gap-4">
            
            {/* Round Brand Badge & Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white/15 border border-white/35 flex items-center justify-center text-white shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black text-xl tracking-tight text-white leading-tight">
                  Lemma <span className="font-light text-white/95">Techane</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7DD3FC] font-extrabold">
                  CIVIL ENG · ASTU
                </span>
              </div>
            </Link>

            {/* Mission Statement */}
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-sm mt-1">
              Designing resilient reinforced concrete structures, highway transit corridors, and expansive soil foundations across Ethiopia. Graduating student engineer at ASTU SoCEA.
            </p>

            {/* Social Platform Circular Buttons */}
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0080C8] hover:border-white transition-all shadow-sm"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0080C8] hover:border-white transition-all shadow-sm"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0080C8] hover:border-white transition-all shadow-sm"
              >
                <Send size={14} className="-translate-x-0.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0080C8] hover:border-white transition-all shadow-sm"
              >
                <Facebook size={15} />
              </a>
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 2: CONTACT & UPDATES + NEWSLETTER BAR (3.5 cols)                 */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mb-1">
              <span className="text-[#38BDF8] font-black text-base">|</span> CONTACT &amp; UPDATES
            </h4>

            {/* Email */}
            <div className="flex items-center gap-2.5 text-xs text-white/90">
              <Mail size={15} className="text-[#38BDF8] shrink-0" />
              <a 
                href="mailto:lemmayezedlij21@gmail.com" 
                className="hover:underline transition-all truncate font-mono text-white/95"
              >
                lemmayezedlij21@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2.5 text-xs text-white/90 font-mono">
              <Phone size={15} className="text-[#38BDF8] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href="tel:+251934830919" className="hover:underline text-white font-semibold">
                  +251 934 830 919
                </a>
                <span className="text-white/75 text-[11px]">0934 830 919 (Direct &amp; Telegram)</span>
              </div>
            </div>

            {/* Academic Base Location */}
            <div className="flex items-start gap-2.5 text-xs text-white/90">
              <MapPin size={15} className="text-[#38BDF8] shrink-0 mt-0.5" />
              <span className="text-white/90 leading-relaxed">
                ASTU SoCEA Main Campus, Adama, Oromia, Ethiopia
              </span>
            </div>

            {/* Newsletter Subscription Bar */}
            <div className="mt-2 pt-2 border-t border-white/15">
              <span className="text-[10px] font-mono uppercase font-bold text-white tracking-wider block mb-2">
                SUBSCRIBE TO ENGINEERING BRIEFS
              </span>
              <form onSubmit={handleNewsletterSubmit} className="relative flex items-center max-w-sm">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email.."
                  className="w-full bg-[#006EA8]/90 border border-white/30 rounded-xl px-4 py-2 text-xs text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-[#006EA8] transition-all pr-11"
                />
                <button
                  type="submit"
                  className="absolute right-1 w-7 h-7 rounded-lg bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#004A75] flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  title="Subscribe to Engineering Briefs"
                >
                  <Send size={12} className="rotate-45" />
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] font-semibold text-[#7DD3FC] mt-1.5 block">
                  ✓ Subscribed! You will receive engineering insights.
                </span>
              )}
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 3: QUICK LINKS (SPLIT INTO 2 SUBCOLUMNS) (3.5 cols)              */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
            <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mb-3.5">
              <span className="text-[#38BDF8] font-black text-base">|</span> QUICK LINKS
            </h4>

            {/* Double Subcolumn List with Arrows */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-white/90">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Home
              </Link>
              <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Services
              </Link>

              <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Solutions
              </Link>
              <Link to="/resources" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Structural Codes
              </Link>

              <Link to="/projects" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Portfolio
              </Link>
              <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Our Methodology
              </Link>

              <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Why Choose Us
              </Link>
              <Link to="/#testimonials" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Faculty Mentors
              </Link>

              <Link to="/experience" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Supervisors
              </Link>
              <Link to="/experience" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Recruiter Hub
              </Link>

              <Link to="/about#brotherhood" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Brotherhood
              </Link>
              <Link to="/insights" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Technical Media
              </Link>

              <Link to="/projects" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Showreel
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Estimator <span className="text-[10px]">↗</span>
              </Link>

              <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> About Us
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-0.5 transition-transform">
                <span className="text-[#38BDF8]">→</span> Contact Us
              </Link>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* COLUMN 4: CAPABILITIES (2 cols)                                         */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
            <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mb-3.5">
              <span className="text-[#38BDF8] font-black text-base">|</span> CAPABILITIES
            </h4>

            <ul className="flex flex-col gap-2.5 text-xs text-white/90">
              <li className="hover:text-white transition-colors">Reinforced Concrete Design (EBCS EN 1992)</li>
              <li className="hover:text-white transition-colors">ETABS &amp; SAP2000 FEA Modeling</li>
              <li className="hover:text-white transition-colors">Highway Corridor Alignment (ERA 2024)</li>
              <li className="hover:text-white transition-colors">Expansive Soil Foundation Mitigation</li>
              <li className="hover:text-white transition-colors">Seismic &amp; Dynamic Response Analysis</li>
              <li className="hover:text-white transition-colors">Capstone Defense &amp; BBS Detailing</li>
              <li className="hover:text-white transition-colors">Quantity Surveying &amp; Site Supervision</li>
            </ul>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SUB-FOOTER STRIP (COPYRIGHT, LINKS & ADMIN ACCESS)                 */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/85">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Lemma Techane. All rights reserved. Built with precision civil engineering.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link 
              to="/admin/login" 
              className="hover:text-white transition-colors flex items-center gap-1.5 font-bold text-white"
            >
              <ShieldCheck size={14} className="text-[#38BDF8]" />
              <span>Admin Portal</span>
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider ml-2 cursor-pointer"
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
