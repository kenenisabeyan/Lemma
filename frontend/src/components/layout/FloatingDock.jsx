import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  User, 
  Layers, 
  FolderKanban, 
  Briefcase, 
  FileText, 
  Download, 
  Mail,
  ChevronUp
} from 'lucide-react';

export const FloatingDock = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dockLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Services', path: '/services', icon: Layers },
    { name: 'Projects', path: '/projects', icon: FolderKanban },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Insights', path: '/insights', icon: FileText },
    { name: 'Resources', path: '/resources', icon: Download },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 inset-x-0 z-40 hidden md:flex justify-center pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
      <nav className="pointer-events-auto flex items-center gap-1.5 p-2 rounded-full bg-white/95 dark:bg-[#181A1E]/95 backdrop-blur-xl border border-rose-100/90 dark:border-zinc-700/80 shadow-[0_10px_30px_rgba(128,24,52,0.08)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.65)]">
        {dockLinks.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="relative">
              <NavLink
                to={item.path}
                onMouseEnter={() => setActiveTooltip(item.name)}
                onMouseLeave={() => setActiveTooltip(null)}
                className={({ isActive }) =>
                  `flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#801834] text-white shadow-[0_0_15px_rgba(128,24,52,0.4)] scale-105'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:scale-110'
                  }`
                }
              >
                <Icon size={18} />
              </NavLink>

              {/* Tooltip */}
              {activeTooltip === item.name && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-zinc-900 dark:bg-[#121417] border border-zinc-700 dark:border-[#333] text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 dark:text-[#D4AF37] shadow-lg whitespace-nowrap animate-in fade-in duration-200 pointer-events-none">
                  {item.name}
                </div>
              )}
            </div>
          );
        })}

        <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-700 mx-1"></div>

        {/* Scroll To Top button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setActiveTooltip('Top')}
          onMouseLeave={() => setActiveTooltip(null)}
          title="Back to Top"
          className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-[#801834] dark:hover:text-[#D4AF37] hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:scale-110 transition-all duration-300"
        >
          <ChevronUp size={18} />
        </button>
      </nav>
    </div>
  );
};
