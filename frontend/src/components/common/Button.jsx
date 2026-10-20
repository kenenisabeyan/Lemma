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
    primary: 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] border-[#801834] dark:border-[#D4AF37] hover:bg-[#68132a] dark:hover:bg-white hover:scale-105 shadow-[0_4px_16px_rgba(128,24,52,0.25)] dark:shadow-[0_0_20px_rgba(212,175,55,0.25)]',
    secondary: 'bg-white dark:bg-[#181A1E] text-zinc-900 dark:text-[#EAEAEA] border-zinc-200/90 dark:border-[#333]/80 hover:border-[#801834] dark:hover:border-[#D4AF37] hover:text-[#801834] dark:hover:text-[#D4AF37] hover:scale-105 shadow-sm',
    outline: 'bg-transparent text-[#801834] dark:text-[#D4AF37] border-[#801834]/50 dark:border-[#D4AF37]/50 hover:border-[#801834] dark:hover:border-[#D4AF37] hover:bg-[#801834]/10 dark:hover:bg-[#D4AF37]/10 hover:scale-105',
    danger: 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105'
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
