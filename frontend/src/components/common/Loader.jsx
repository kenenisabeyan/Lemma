import React from 'react';
import { Layers } from 'lucide-react';

export const Loader = ({ label = 'Loading Structural Data...' }) => {
  return (
    <div className="py-16 flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12 border border-[#D4AF37] bg-[#1E2125] flex items-center justify-center animate-spin">
        <Layers className="text-[#D4AF37] w-6 h-6" />
      </div>
      <p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-mono animate-pulse">{label}</p>
    </div>
  );
};
