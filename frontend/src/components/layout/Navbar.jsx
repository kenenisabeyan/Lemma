import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Layers, Menu, X, ArrowUpRight, ShieldCheck, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Insights', path: '/insights' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleHireMe = () => {
    navigate('/contact');
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 mx-auto z-50 w-[94%] max-w-7xl pointer-events-none transition-all duration-300">
      <nav className={`pointer-events-auto rounded-full transition-all duration-300 border ${
        scrolled 
          ? 'bg-[#121417]/92 backdrop-blur-xl border-[#D4AF37]/35 shadow-[0_12px_40px_rgba(0,0,0,0.7)] py-2 px-5 sm:px-6' 
          : 'bg-[#181A1E]/85 backdrop-blur-lg border-[#333]/80 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2.5 px-5 sm:px-6'
      } flex items-center justify-between`}>
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-[#D4AF37]/60 bg-[#121417] group-hover:border-white transition-colors">
            <Layers className="text-[#D4AF37] w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm sm:text-base font-extrabold tracking-wider uppercase text-[#EAEAEA] leading-none">
              Alexandre<span className="text-[#D4AF37]">.</span>
            </h1>
            <p className="text-[9px] font-mono tracking-widest text-[#9CA3AF] uppercase mt-0.5 hidden sm:block">
              Structural PE, SE
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links (Alazar pill bar) */}
        <div className="hidden xl:flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 font-bold shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                    : 'text-[#9CA3AF] hover:text-[#EAEAEA] hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right CTA & Admin Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          {user && (
            <Link
              to="/admin/dashboard"
              className="hidden md:flex rounded-full items-center gap-1.5 border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#121417] transition-all"
            >
              <User size={13} /> Admin
            </Link>
          )}

          <button
            onClick={handleHireMe}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-4 sm:px-5 py-2 text-xs font-mono font-extrabold tracking-wider uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center gap-1.5 active:scale-95"
          >
            Hire Me <ArrowUpRight size={13} />
          </button>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-[#EAEAEA] p-1.5 hover:text-[#D4AF37] transition-colors rounded-full hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay (Alazar floating card) */}
      {mobileOpen && (
        <div className="pointer-events-auto xl:hidden mt-2 rounded-2xl bg-[#181A1E]/95 backdrop-blur-2xl border border-[#D4AF37]/30 p-5 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                    isActive 
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 font-bold' 
                      : 'text-[#9CA3AF] hover:text-[#EAEAEA] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          {user && (
            <Link
              to="/admin/dashboard"
              onClick={() => setMobileOpen(false)}
              className="text-left text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider py-2 px-3 border border-[#D4AF37]/30 rounded-xl bg-[#D4AF37]/10"
            >
              Admin Dashboard CMS
            </Link>
          )}

          <button
            onClick={handleHireMe}
            className="rounded-xl bg-[#D4AF37] text-[#121417] px-4 py-3 text-xs font-mono font-extrabold tracking-widest uppercase mt-1 w-full text-center flex justify-center items-center gap-2 active:scale-98"
          >
            Hire Me / Request Consultation <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
};
