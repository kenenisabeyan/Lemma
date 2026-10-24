import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Ruler, Building2 } from 'lucide-react';

export const ProjectCard = ({ project, onClick }) => {
  const softwareList = typeof project.softwareUsed === 'string'
    ? JSON.parse(project.softwareUsed || '[]')
    : (project.softwareUsed || []);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={() => onClick && onClick(project)}
      className="group cursor-pointer py-4 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Project Thumbnail Image with Blueprint Crosshairs Overlay */}
        <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden rounded-2xl mb-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Hover Shimmer */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay pointer-events-none"></div>

          {/* Technical Badge Overlay */}
          <div className="absolute top-3 left-3 z-10 flex gap-2">
            <span className="rounded-full bg-black/60 backdrop-blur-md text-[#D4AF37] text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Structural Blueprint Coordinates */}
          <div className="absolute bottom-3 right-3 text-[9px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold">
            {project.year} · ASTU SoCEA
          </div>
        </div>

        {/* Card Body */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1 font-semibold">
              <MapPin size={12} className="text-[#D4AF37]" /> {project.location}
            </span>
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
            {project.title}
          </h3>

          {/* Structural System Highlight */}
          <p className="text-xs text-[#801834] dark:text-[#E84855] font-mono font-semibold mb-2">
            Framing: {project.structuralSystem}
          </p>

          {/* Challenge Snippet */}
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Challenge:</span> {project.challenge}
          </p>
        </div>
      </div>

      {/* Footer Tags & Action Link */}
      <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800 flex justify-between items-center gap-3">
        <div className="flex gap-1.5 flex-wrap">
          {softwareList.slice(0, 3).map((soft) => (
            <span key={soft} className="text-[9px] font-mono text-zinc-500 font-semibold">
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
