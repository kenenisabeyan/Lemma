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
      <div className={`relative w-full ${maxWidth} rounded-3xl bg-[#FFFFFF] dark:bg-[#12151C] border border-zinc-200 dark:border-[#232936] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col`}>
        {/* Technical Top Border Accent */}
        <div className="h-1 w-full bg-[#D3AE36]"></div>

        {/* Header */}
        <div className="p-6 border-b border-zinc-200 dark:border-[#232936] flex items-center justify-between bg-[#FFFFFF] dark:bg-[#12151C]">
          <h3 className="text-base sm:text-lg font-mono font-extrabold uppercase tracking-wider text-[#1E2025] dark:text-[#F8F9FA] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D3AE36]"></span>
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="rounded-full w-9 h-9 flex items-center justify-center bg-[#FFFFFF] dark:bg-[#232936] border border-zinc-200 dark:border-[#232936] text-[#1E2025] dark:text-[#F8F9FA] hover:text-[#D3AE36] dark:hover:text-[#D3AE36] hover:border-[#D3AE36] transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 text-[#1E2025] dark:text-[#F8F9FA] bg-[#FFFFFF] dark:bg-[#12151C]">
          {children}
        </div>
      </div>
    </div>
  );
};
