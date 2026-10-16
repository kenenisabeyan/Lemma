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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`relative w-full ${maxWidth} rounded-3xl bg-[#181A1E] border border-[#D4AF37]/35 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden max-h-[90vh] flex flex-col`}>
        {/* Technical Top Border Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]"></div>

        {/* Header */}
        <div className="p-6 border-b border-[#2D3137] flex items-center justify-between bg-[#121417]/95">
          <h3 className="text-base sm:text-lg font-mono font-extrabold uppercase tracking-wider text-[#EAEAEA] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="rounded-full w-9 h-9 flex items-center justify-center bg-[#181A1E] border border-[#333] text-[#9CA3AF] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 text-[#EAEAEA]">
          {children}
        </div>
      </div>
    </div>
  );
};
