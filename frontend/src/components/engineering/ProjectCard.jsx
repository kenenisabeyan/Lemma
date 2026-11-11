import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Building2, ShieldCheck } from 'lucide-react';

export const ProjectCard = ({ project, onClick }) => {
  const softwareList = typeof project.softwareUsed === 'string'
    ? JSON.parse(project.softwareUsed || '[]')
    : (project.softwareUsed || []);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={() => onClick && onClick(project)}
      className="group cursor-pointer rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D] p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Project Thumbnail Image with Blueprint Crosshairs Overlay */}
        <div className="relative aspect-[16/10] bg-[#12151C] border border-[#31394D]/30 dark:border-[#31394D] overflow-hidden rounded-2xl mb-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Hover Shimmer */}
          <div className="absolute inset-0 bg-[#D3AE36]/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay pointer-events-none" />

          {/* Technical Badge Overlay */}
          <div className="absolute top-3 left-3 z-10 flex gap-2">
            <span className="rounded-full bg-black/65 backdrop-blur-md text-[#D3AE36] border border-[#D3AE36]/30 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Structural Blueprint Coordinates */}
          <div className="absolute bottom-3 right-3 text-[9px] font-mono text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold">
            {project.year} · ASTU CAPSTONE
          </div>
        </div>

        {/* Card Body */}
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#1E2025]/70 dark:text-[#F8F9FA]/70 flex items-center gap-1 font-semibold">
              <MapPin size={12} className="text-[#D3AE36]" /> {project.location}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          {/* Structured Technical Spec DIV Box */}
          <div className="p-3.5 rounded-2xl bg-[#12151C]/5 dark:bg-[#12151C] border border-[#31394D]/25 dark:border-[#31394D] space-y-1.5 my-3 text-xs">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#D3AE36] font-bold">
              <span>✦</span>
              <span className="truncate">{project.structuralSystem}</span>
            </div>
            <p className="text-[11px] text-[#1E2025]/80 dark:text-[#F8F9FA]/75 line-clamp-2 leading-relaxed">
              <strong className="text-[#1E2025] dark:text-[#F8F9FA] font-semibold">Scope:</strong> {project.challenge || project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Tags & Action Link */}
      <div className="mt-4 pt-3.5 border-t border-[#31394D]/15 dark:border-[#31394D]/50 flex justify-between items-center gap-3">
        <div className="flex gap-1.5 flex-wrap">
          {softwareList.slice(0, 3).map((soft) => (
            <span key={soft} className="text-[10px] font-mono text-[#D3AE36] font-bold px-2 py-0.5 rounded-md bg-[#12151C]/5 dark:bg-[#12151C] border border-[#31394D]/25 dark:border-[#31394D]">
              #{soft}
            </span>
          ))}
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] group-hover:text-[#C29F2F] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
          Case Study <ArrowUpRight size={13} />
        </span>
      </div>
    </motion.div>
  );
};
