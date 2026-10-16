import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, HardHat } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0B0D] border-t border-[#333] pt-16 pb-12 relative overflow-hidden">
      {/* Background blueprint grid styling */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-blueprint-gold"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#222]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#D4AF37] bg-[#1E2125] flex items-center justify-center">
                <Layers className="text-[#D4AF37] w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-widest uppercase text-[#EAEAEA]">
                Alexandre<span className="text-[#D4AF37]">.</span>
              </span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-md">
              Licensed Senior Structural Engineer (PE, SE). Specializing in high-rise lateral stability design, seismic resilience retrofits, bridge infrastructure, and forensic structural evaluations.
            </p>
            <div className="flex gap-4 items-center">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-3 py-1">
                IBC & ACI Code Compliant
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF] border border-[#333] px-3 py-1">
                PE & SE Licensed
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[#EAEAEA] text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4AF37]"></span> Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#9CA3AF]">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Me</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Engineering Services</Link></li>
              <li><Link to="/projects" className="hover:text-[#D4AF37] transition-colors">Portfolio & Case Studies</Link></li>
              <li><Link to="/experience" className="hover:text-[#D4AF37] transition-colors">Career Experience</Link></li>
              <li><Link to="/insights" className="hover:text-[#D4AF37] transition-colors">Technical Insights</Link></li>
            </ul>
          </div>

          {/* Resources & FAQs */}
          <div>
            <h4 className="text-[#EAEAEA] text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4AF37]"></span> Engineering Portal
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#9CA3AF]">
              <li><Link to="/resources" className="hover:text-[#D4AF37] transition-colors">Downloads & Guides</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#D4AF37] transition-colors">Client Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-[#D4AF37] transition-colors">Client FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Request Consultation</Link></li>
              <li><Link to="/admin/login" className="hover:text-[#D4AF37] transition-colors">Admin Portal Login</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[#EAEAEA] text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4AF37]"></span> Office Headquarters
            </h4>
            <ul className="flex flex-col gap-4 text-xs text-[#9CA3AF]">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#D4AF37] w-4 h-4 mt-0.5 shrink-0" />
                <span>Suite 400, Iron Building<br/>Metropolis City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#D4AF37] w-4 h-4 shrink-0" />
                <span>+1 (555) 019-8472</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#D4AF37] w-4 h-4 shrink-0" />
                <span>consult@alexandre-structural.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#9CA3AF]">
          <p>&copy; {new Date().getFullYear()} Alexandre Structural Engineering Professional Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={scrollToTop} className="hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-[10px]">
              Back to top ↑
            </button>
            <Link to="/admin/login" className="text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 hover:bg-[#D4AF37] hover:text-[#121417] transition-colors flex items-center gap-1">
              CMS Admin Access <ArrowUpRight size={10} />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
