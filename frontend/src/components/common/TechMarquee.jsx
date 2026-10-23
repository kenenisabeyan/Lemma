import React from 'react';

export const TechMarquee = ({ className = '' }) => {
  const techMarquee = [
    'Tekla Structures',
    'ANSYS Mechanical',
    'RISA-3D',
    'AutoCAD 2025',
    'IBC 2024',
    'ASCE 7-22',
    'ACI 318-19',
    'AISC 360-22',
    'ETABS v21',
    'SAP2000',
    'REVIT Structure',
    'SAFE Concrete',
    'FEMA P-58',
    'Eurocode 2 & 3'
  ];

  return (
    <section 
      aria-label="Software Stack & Standards" 
      className={`border-y border-zinc-200/80 dark:border-white/10 bg-white/90 dark:bg-[#0B0C0E]/90 py-4 overflow-hidden transition-colors ${className}`}
    >
      <div className="mx-auto max-w-7xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="overflow-hidden">
          <div className="animate-marquee flex items-center gap-10">
            {techMarquee.concat(techMarquee).map((tool, idx) => (
              <span 
                key={idx} 
                className="group flex items-center gap-2 whitespace-nowrap font-mono text-[#54595F] dark:text-zinc-400 text-xs uppercase tracking-wider transition-colors hover:text-[#D4AF37]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
