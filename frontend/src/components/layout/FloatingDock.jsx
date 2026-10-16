import React, { useState } from 'react';
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

  return (
    <div className="fixed bottom-6 inset-x-0 z-40 hidden md:flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1.5 p-2 rounded-full bg-[#181A1E]/85 backdrop-blur-xl border border-[#D4AF37]/25 shadow-[0_10px_35px_rgba(0,0,0,0.65)]">
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
                      ? 'bg-[#D4AF37] text-[#121417] shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105'
                      : 'text-[#9CA3AF] hover:text-[#EAEAEA] hover:bg-[#121417]/80 hover:scale-110'
                  }`
                }
              >
                <Icon size={18} />
              </NavLink>

              {/* Tooltip */}
              {activeTooltip === item.name && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-[#121417] border border-[#333] text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37] shadow-lg whitespace-nowrap animate-in fade-in duration-200 pointer-events-none">
                  {item.name}
                </div>
              )}
            </div>
          );
        })}

        <div className="w-[1px] h-6 bg-[#333] mx-1"></div>

        {/* Scroll To Top button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setActiveTooltip('Top')}
          onMouseLeave={() => setActiveTooltip(null)}
          title="Back to Top"
          className="flex items-center justify-center w-10 h-10 rounded-full text-[#9CA3AF] hover:text-[#D4AF37] hover:bg-[#121417]/80 hover:scale-110 transition-all duration-300"
        >
          <ChevronUp size={18} />
        </button>
      </nav>
    </div>
  );
};
