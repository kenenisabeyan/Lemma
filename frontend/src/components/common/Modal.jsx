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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative w-full ${maxWidth} bg-[#1E2125] border border-[#D4AF37]/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col`}>
        {/* Technical Top Border Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37]"></div>

        {/* Header */}
        <div className="p-6 border-b border-[#333] flex items-center justify-between bg-[#121417]">
          <h3 className="text-lg font-bold uppercase tracking-wider text-[#EAEAEA] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D4AF37]"></span>
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-[#9CA3AF] hover:text-[#D4AF37] p-1 transition-colors"
          >
            <X size={22} />
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
