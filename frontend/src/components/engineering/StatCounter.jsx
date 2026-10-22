import React from 'react';
import { motion } from 'framer-motion';

export const StatCounter = ({ value, label, subtext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white/80 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/90 dark:border-white/20 p-8 text-center shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] relative group hover:border-[#D4AF37]/60 hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)] transition-all duration-300 overflow-hidden"
    >
      {/* Top subtle highlight glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>

      {/* Crosshair accents */}
      <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50"></div>
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50"></div>

      <h3 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 mb-2 font-mono tracking-tight group-hover:text-[#D4AF37] transition-colors">
        {value}
      </h3>
      <p className="text-xs text-[#54595F] uppercase tracking-[0.2em] font-bold">{label}</p>
      {subtext && <p className="text-[10px] text-[#D4AF37] mt-1.5 font-mono font-semibold">{subtext}</p>}
    </motion.div>
  );
};
