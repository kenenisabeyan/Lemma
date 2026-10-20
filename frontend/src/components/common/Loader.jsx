import React from 'react';
import { Layers } from 'lucide-react';

export const Loader = ({ label = 'Loading Structural Data...' }) => {
  return (
    <div className="py-16 flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12 border border-[#801834] dark:border-[#D4AF37] bg-[#FAF0F3] dark:bg-[#1E2125] flex items-center justify-center animate-spin rounded-xl shadow-sm">
        <Layers className="text-[#801834] dark:text-[#D4AF37] w-6 h-6" />
      </div>
      <p className="text-xs uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] font-mono font-bold animate-pulse">{label}</p>
    </div>
  );
};
