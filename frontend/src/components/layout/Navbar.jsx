import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ArrowUpRight, 
  ShieldCheck, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../context/ThemeContext';
import { useFetch } from '../../hooks/useFetch';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { theme, toggleTheme, isDark } = useTheme();

  // Fetch settings for dynamic name & avatar
  const { data: settingsData } = useFetch('/settings', {
    settings: {
      engineerName: 'Lemma',
      title: 'Civil Eng 5th Year | ASTU',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
    }
  });

  const settings = settingsData?.settings || settingsData || {};
  const brandName = 'Lemma';
  const brandSubtitle = 'CIVIL ENG | ASTU';
  const avatarImage = settings.avatarUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { num: '01', name: 'Home', path: '/' },
    { num: '02', name: 'About', path: '/about' },
    { num: '03', name: 'Services', path: '/services' },
    { num: '04', name: 'Projects', path: '/projects' },
    { num: '05', name: 'Experience', path: '/experience' },
    { num: '06', name: 'Insights', path: '/insights' },
    { num: '07', name: 'Testimonials', path: '/#testimonials' },
    { num: '08', name: 'Resources', path: '/resources' },
    { num: '09', name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Header Bar */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#FFFFFF]/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl border-b border-zinc-200/90 dark:border-slate-800/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.4)] py-3 sm:py-3.5' 
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Left Brand: Avatar + Online Dot + Name & Subtitle */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Home"
          >
            {/* Avatar with Live Green Status Dot */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700/80 shadow-sm group-hover:scale-105 transition-transform">
                <img 
                  src={avatarImage} 
                  alt={brandName}
                  className="w-full h-full object-cover" 
                />
              </div>
              {/* Online Green Indicator Dot */}
              <span className="absolute bottom-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-[#121417]"></span>
              </span>
            </div>

            {/* Name + Subtitle in Gold */}
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-wider text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37] transition-colors leading-tight">
                {brandName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#D4AF37] dark:text-[#D4AF37] uppercase mt-0.5 leading-none">
                {brandSubtitle}
              </span>
            </div>
          </Link>

          {/* Right Action Buttons: Circular Theme Toggle + Circular Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Theme Toggle Circular Pill */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white dark:bg-zinc-800/90 border border-zinc-200/90 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all focus:outline-none"
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? (
                <Sun size={17} className="text-amber-400" />
              ) : (
                <Moon size={17} className="text-zinc-700" />
              )}
            </button>

            {/* Menu Toggle Circular Pill */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white dark:bg-zinc-800/90 border border-zinc-200/90 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all focus:outline-none"
              title="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </div>
      </header>

      {/* Modern High-End Slide-Over Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm"
            />

            {/* Slide-in Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative z-10 w-full max-w-md bg-[#FFFFFF] dark:bg-[#0F172A] border-l border-zinc-200 dark:border-slate-800 shadow-2xl h-full flex flex-col justify-between overflow-y-auto p-6 sm:p-8"
            >
              {/* Drawer Top */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <img 
                      src={avatarImage} 
                      alt={brandName}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-300 dark:border-zinc-700" 
                    />
                    <div>
                      <h3 className="font-extrabold text-sm text-zinc-900 dark:text-zinc-100">{brandName}</h3>
                      <p className="text-[10px] font-bold tracking-wider text-[#D4AF37] dark:text-[#D4AF37] uppercase">
                        {brandSubtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:scale-105 active:scale-95 transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Status Badge */}
                <div className="my-5 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-[11px] font-medium text-emerald-800 dark:text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for 2026 Graduate Roles, Research & Projects</span>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1 mt-4">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => {
                          setMenuOpen(false);
                          if (link.path.includes('#')) {
                            const id = link.path.split('#')[1];
                            setTimeout(() => {
                              const el = document.getElementById(id);
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }}
                        className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-[#D4AF37]/15 dark:bg-[#D4AF37]/20 text-[#D4AF37] dark:text-[#D4AF37] font-bold'
                            : 'text-[#54595F] dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-[#D4AF37]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs opacity-50">{link.num}</span>
                          <span className="text-base font-semibold tracking-wide uppercase">{link.name}</span>
                        </div>
                        <ChevronRight 
                          size={16} 
                          className={`transition-transform ${
                            isActive 
                              ? 'text-[#D4AF37] dark:text-[#D4AF37] translate-x-1' 
                              : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                          }`} 
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
                {user && (
                  <Link
                    to="/admin/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-[#FFFFFF] dark:bg-zinc-800 text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100"
                  >
                    <User size={14} /> Admin CMS Portal
                  </Link>
                )}

                <button
                  onClick={() => {
                    navigate('/contact');
                    setMenuOpen(false);
                  }}
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] py-3.5 px-6 font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2"
                >
                  Connect with Us <ArrowUpRight size={14} />
                </button>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-mono pt-2">
                  <span>ASTU Campus, Adama</span>
                  <span>EAT / UTC+3</span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
