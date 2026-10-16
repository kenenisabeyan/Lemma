import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Ruler, Building2 } from 'lucide-react';

export const ProjectCard = ({ project, onClick }) => {
  const softwareList = typeof project.softwareUsed === 'string'
    ? JSON.parse(project.softwareUsed || '[]')
    : (project.softwareUsed || []);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={() => onClick && onClick(project)}
      className="group cursor-pointer bg-[#181A1E] border border-[#333] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
    >
      <div>
        {/* Project Thumbnail Image with Blueprint Crosshairs Overlay */}
        <div className="relative aspect-[16/10] bg-[#1E2125] overflow-hidden border-b border-[#333]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Blueprint Hover Shimmer */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay pointer-events-none"></div>

          {/* Technical Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <span className="bg-[#121417]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          {/* Structural Blueprint Coordinates */}
          <div className="absolute bottom-3 right-3 text-[9px] font-mono text-[#9CA3AF] bg-[#121417]/90 px-2 py-0.5 border border-[#333]">
            LAT: {project.year} | PE-SE APPROVED
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-extrabold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-xs text-[#9CA3AF] flex items-center gap-1.5 mb-4 uppercase tracking-wider">
            <MapPin size={13} className="text-[#D4AF37]" /> {project.location}
          </p>

          {/* Structural System Highlight */}
          <div className="bg-[#121417] border border-[#2D3137] p-3 text-xs text-[#9CA3AF] mb-4">
            <span className="text-[#EAEAEA] font-semibold block text-[11px] uppercase tracking-wider mb-1">
              Structural System:
            </span>
            {project.structuralSystem}
          </div>

          {/* Challenge Snippet */}
          <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-2">
            <strong className="text-[#EAEAEA]">Challenge:</strong> {project.challenge}
          </p>
        </div>
      </div>

      {/* Footer Tags & Action Link */}
      <div className="px-6 py-4 border-t border-[#2D3137] bg-[#121417]/50 flex justify-between items-center">
        <div className="flex gap-1.5 flex-wrap">
          {softwareList.slice(0, 3).map((soft) => (
            <span key={soft} className="text-[9px] font-mono text-[#9CA3AF] bg-[#1E2125] px-2 py-0.5 border border-[#333]">
              {soft}
            </span>
          ))}
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Case Study <ArrowUpRight size={14} />
        </span>
      </div>
    </motion.div>
  );
};
