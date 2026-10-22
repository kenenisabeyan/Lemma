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
      className="group cursor-pointer rounded-2xl bg-white/80 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/90 dark:border-white/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)]"
    >
      <div>
        {/* Project Thumbnail Image with Blueprint Crosshairs Overlay */}
        <div className="relative aspect-[16/10] bg-white/50 overflow-hidden border-b border-white/80 dark:border-white/10">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Hover Shimmer */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay pointer-events-none"></div>

          {/* Technical Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <span className="rounded-full bg-white/85 dark:bg-zinc-900/80 backdrop-blur-xl text-[#D4AF37] border border-white/90 dark:border-white/20 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider shadow-[0_2px_10px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]">
              {project.category}
            </span>
          </div>

          {/* Structural Blueprint Coordinates */}
          <div className="absolute bottom-3 right-3 text-[9px] font-mono text-[#54595F] dark:text-zinc-300 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/90 dark:border-white/20 shadow-xs font-semibold">
            {project.year} · PE-SE SEALED
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#54595F] flex items-center gap-1 font-semibold">
              <MapPin size={12} className="text-[#D4AF37]" /> {project.location}
            </span>
          </div>

          <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          {/* Structural System Highlight */}
          <div className="rounded-xl bg-white/70 dark:bg-white/[0.05] backdrop-blur-md border border-white/80 dark:border-white/10 p-3 text-xs text-[#54595F] mb-4 shadow-2xs">
            <span className="text-[#D4AF37] font-semibold block text-[10px] font-mono uppercase tracking-wider mb-1">
              Structural Framing System:
            </span>
            {project.structuralSystem}
          </div>

          {/* Challenge Snippet */}
          <p className="text-xs text-[#54595F] leading-relaxed line-clamp-2">
            <span className="text-zinc-900 font-semibold">Challenge:</span> {project.challenge}
          </p>
        </div>
      </div>

      {/* Footer Tags & Action Link */}
      <div className="px-6 py-4 border-t border-zinc-200/80 bg-[#FFFFFF] flex justify-between items-center gap-3">
        <div className="flex gap-1.5 flex-wrap">
          {softwareList.slice(0, 3).map((soft) => (
            <span key={soft} className="rounded-full text-[9px] font-mono text-[#54595F] bg-[#FFFFFF] px-2.5 py-0.5 border border-zinc-200 shadow-2xs font-semibold">
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
