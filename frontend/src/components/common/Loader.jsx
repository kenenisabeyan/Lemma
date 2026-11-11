import React from 'react';
import { Layers } from 'lucide-react';

export const Loader = ({ label = 'Loading Structural Data...' }) => {
  return (
    <div className="py-16 flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12 border border-[#D3AE36] bg-[#FFFFFF] dark:bg-[#232936] flex items-center justify-center animate-spin rounded-xl shadow-sm">
        <Layers className="text-[#D3AE36] w-6 h-6" />
      </div>
      <p className="text-xs uppercase tracking-widest text-[#D3AE36] font-mono font-bold animate-pulse">{label}</p>
    </div>
  );
};
