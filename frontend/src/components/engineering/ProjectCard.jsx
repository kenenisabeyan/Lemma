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
      className="group cursor-pointer rounded-2xl bg-[#181A1E] border border-[#333]/80 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)]"
    >
      <div>
        {/* Project Thumbnail Image with Blueprint Crosshairs Overlay */}
        <div className="relative aspect-[16/10] bg-[#141619] overflow-hidden border-b border-[#2D3137]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Blueprint Hover Shimmer */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay pointer-events-none"></div>

          {/* Technical Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <span className="rounded-full bg-[#121417]/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-md">
              {project.category}
            </span>
          </div>

          {/* Structural Blueprint Coordinates */}
          <div className="absolute bottom-3 right-3 text-[9px] font-mono text-[#9CA3AF] bg-[#121417]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#333]">
            {project.year} · PE-SE SEALED
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#9CA3AF] flex items-center gap-1">
              <MapPin size={12} className="text-[#D4AF37]" /> {project.location}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          {/* Structural System Highlight */}
          <div className="rounded-xl bg-[#121417]/90 border border-[#2D3137] p-3 text-xs text-[#9CA3AF] mb-4">
            <span className="text-[#EAEAEA] font-semibold block text-[10px] font-mono uppercase tracking-wider mb-1 text-[#D4AF37]">
              Structural Framing System:
            </span>
            {project.structuralSystem}
          </div>

          {/* Challenge Snippet */}
          <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-2">
            <span className="text-[#EAEAEA] font-semibold">Challenge:</span> {project.challenge}
          </p>
        </div>
      </div>

      {/* Footer Tags & Action Link */}
      <div className="px-6 py-4 border-t border-[#2D3137] bg-[#141619]/60 flex justify-between items-center gap-3">
        <div className="flex gap-1.5 flex-wrap">
          {softwareList.slice(0, 3).map((soft) => (
            <span key={soft} className="rounded-full text-[9px] font-mono text-[#9CA3AF] bg-[#181A1E] px-2.5 py-0.5 border border-[#333]">
              {soft}
            </span>
          ))}
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
          Case Study <ArrowUpRight size={13} />
        </span>
      </div>
    </motion.div>
  );
};
