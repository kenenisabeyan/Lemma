import React from 'react';
import { motion } from 'framer-motion';

export const StatCounter = ({ value, label, subtext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#121417] border border-[#333] p-8 text-center border-b-2 border-b-[#D4AF37] shadow-xl relative group hover:border-[#D4AF37]/40 transition-colors"
    >
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#D4AF37]"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#D4AF37]"></div>

      <h3 className="text-4xl lg:text-5xl font-extrabold text-[#EAEAEA] mb-2 tracking-tight group-hover:text-[#D4AF37] transition-colors">
        {value}
      </h3>
      <p className="text-xs text-[#9CA3AF] uppercase tracking-[0.2em] font-medium">{label}</p>
      {subtext && <p className="text-[10px] text-[#D4AF37] mt-1 font-mono">{subtext}</p>}
    </motion.div>
  );
};
