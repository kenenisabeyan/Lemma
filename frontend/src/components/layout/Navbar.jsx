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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-[#121417]/95 backdrop-blur-md border-[#D4AF37]/20 py-3.5 shadow-2xl' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 border border-[#D4AF37] bg-[#1E2125] group-hover:border-white transition-colors">
            <Layers className="text-[#D4AF37] w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#D4AF37]"></span>
            <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#D4AF37]"></span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-widest uppercase text-[#EAEAEA] leading-none">
              Alexandre<span className="text-[#D4AF37]">.</span>
            </h1>
            <p className="text-[10px] tracking-[0.2em] text-[#9CA3AF] uppercase mt-1">Structural Engineer PE, SE</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-7">
          <div className="flex gap-6 text-xs font-semibold tracking-widest text-[#9CA3AF] uppercase">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:text-[#D4AF37] transition-colors py-1 relative ${
                    isActive ? 'text-[#D4AF37]' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]"></span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 border-l border-[#333] pl-6">
            {user ? (
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#121417] transition-colors"
              >
                <User size={14} /> Admin Portal
              </Link>
            ) : null}

            <button
              onClick={handleHireMe}
              className="bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center gap-2"
            >
              Hire Me <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-[#EAEAEA] p-2 hover:text-[#D4AF37] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#1E2125] border-b border-[#333] p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-left text-[#EAEAEA] text-base font-medium uppercase tracking-wider py-2.5 border-b border-[#333] ${
                location.pathname === link.path ? 'text-[#D4AF37] font-bold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {user && (
            <Link
              to="/admin/dashboard"
              onClick={() => setMobileOpen(false)}
              className="text-left text-[#D4AF37] text-base font-bold uppercase tracking-wider py-2"
            >
              Admin Dashboard CMS
            </Link>
          )}

          <button
            onClick={handleHireMe}
            className="bg-[#D4AF37] text-[#121417] px-6 py-3.5 text-xs font-bold tracking-widest uppercase mt-2 w-full text-center flex justify-center items-center gap-2"
          >
            Hire Me / Request Consultation <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
};
