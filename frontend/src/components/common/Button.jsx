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
  const base = 'rounded-full font-mono font-extrabold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 border active:scale-95 shadow-md';

  const variants = {
    primary: 'bg-[#D4AF37] text-[#121417] border-[#D4AF37] hover:bg-white hover:border-white hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]',
    secondary: 'bg-[#181A1E] text-[#EAEAEA] border-[#333]/80 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:scale-105',
    outline: 'bg-transparent text-[#D4AF37] border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:scale-105',
    danger: 'bg-red-950/30 text-red-400 border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-3.5 text-sm'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${
        disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
