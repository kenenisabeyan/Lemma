import React from 'react';
import { motion } from 'framer-motion';

export const StatCounter = ({ value, label, subtext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 text-center relative group transition-all duration-300"
    >
      <h3 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 mb-2 font-mono tracking-tight group-hover:text-[#D3AE36] transition-colors dark:text-[#F8F9FA]">
        {value}
      </h3>
      <p className="text-xs text-[#1E2025] uppercase tracking-[0.2em] font-bold">{label}</p>
      {subtext && <p className="text-[10px] text-[#D3AE36] mt-1.5 font-mono font-semibold">{subtext}</p>}
    </motion.div>
  );
};
