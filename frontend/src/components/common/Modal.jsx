import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-3xl' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`relative w-full ${maxWidth} rounded-3xl bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-2xl border border-white/90 dark:border-white/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col`}>
        {/* Technical Top Border Accent */}
        <div className="h-1 w-full bg-[#D4AF37]"></div>

        {/* Header */}
        <div className="p-6 border-b border-white/80 dark:border-white/10 flex items-center justify-between bg-white/70 dark:bg-white/[0.04] backdrop-blur-md">
          <h3 className="text-base sm:text-lg font-mono font-extrabold uppercase tracking-wider text-[#54595F] dark:text-zinc-200 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="rounded-full w-9 h-9 flex items-center justify-center bg-white/80 dark:bg-white/10 border border-white/90 dark:border-white/20 text-[#54595F] dark:text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all shadow-xs"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 text-[#54595F] dark:text-zinc-300 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md">
          {children}
        </div>
      </div>
    </div>
  );
};
