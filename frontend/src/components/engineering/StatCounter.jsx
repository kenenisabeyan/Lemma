import React from 'react';
import { motion } from 'framer-motion';

export const StatCounter = ({ value, label, subtext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-[#FFFFFF] border border-zinc-200/90 p-8 text-center shadow-sm relative group hover:border-[#D4AF37]/60 hover:shadow-md transition-all duration-300 overflow-hidden"
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
