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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`relative w-full ${maxWidth} rounded-3xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#D4AF37]/35 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col`}>
        {/* Technical Top Border Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#801834] via-[#D4AF37] to-[#801834]"></div>

        {/* Header */}
        <div className="p-6 border-b border-zinc-200/90 dark:border-[#2D3137] flex items-center justify-between bg-zinc-50/95 dark:bg-[#121417]/95">
          <h3 className="text-base sm:text-lg font-mono font-extrabold uppercase tracking-wider text-zinc-900 dark:text-[#EAEAEA] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span>
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="rounded-full w-9 h-9 flex items-center justify-center bg-white dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] text-zinc-600 dark:text-[#9CA3AF] hover:text-[#801834] dark:hover:text-[#D4AF37] hover:border-[#801834] dark:hover:border-[#D4AF37] transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 text-zinc-800 dark:text-[#EAEAEA]">
          {children}
        </div>
      </div>
    </div>
  );
};
