import React from 'react';
import { motion } from 'framer-motion';

export const BlueprintReveal = ({ children, className = '' }) => {
  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.6, 
      transition: { duration: 1.8, ease: "easeInOut" } 
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Decorative Blueprint Vector Frame */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 0,0 L 40,0 M 0,0 L 0,40"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={drawLine}
        />
        <motion.path
          d="M 100%,0 L calc(100% - 40px),0 M 100%,0 L 100%,40"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={drawLine}
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
