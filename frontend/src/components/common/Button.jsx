import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline, danger
  size = 'md', // sm, md, lg
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const base = 'font-bold uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 border';

  const variants = {
    primary: 'bg-[#D4AF37] text-[#121417] border-[#D4AF37] hover:bg-white hover:border-white shadow-[0_0_15px_rgba(212,175,55,0.15)]',
    secondary: 'bg-[#1E2125] text-[#EAEAEA] border-[#333] hover:border-[#D4AF37]',
    outline: 'bg-transparent text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121417]',
    danger: 'bg-red-900/20 text-red-400 border-red-500/30 hover:bg-red-600 hover:text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
