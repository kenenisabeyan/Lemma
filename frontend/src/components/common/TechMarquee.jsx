import React from 'react';

export const TechMarquee = ({ className = '' }) => {
  const techMarquee = [
    'ASTU SoCEA Brotherhood · Class of 2026',
    'ETABS 3D Seismic Analysis',
    'EBCS EN 1992 Reinforced Concrete',
    'EBCS EN 1998 Earthquake Ductility',
    'AutoCAD Civil 3D Road Corridors',
    'ERA 2024 Geometric Alignment',
    'OCC Practical Site Supervision',
    'Digital Total Station Surveying',
    'Concrete Slump & Cube Crushing QC',
    'Rebar Detailing & BBS Inspection',
    'Field Density Sand Cone (FDT)',
    'Expansive Clay Soil Mitigation',
    'SAP2000 Bridge Girder Modeling',
    'Multidisciplinary Capstone Defense'
  ];

  return (
    <section 
      aria-label="Software Stack & Standards" 
      className={`border-y border-zinc-200/80 dark:border-[#232936] bg-[#FFFFFF]/90 dark:bg-[#12151C]/95 py-4 overflow-hidden transition-colors ${className}`}
    >
      <div className="mx-auto max-w-7xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="overflow-hidden">
          <div className="animate-marquee flex items-center gap-10">
            {techMarquee.concat(techMarquee).map((tool, idx) => (
              <span 
                key={idx} 
                className="group flex items-center gap-2 whitespace-nowrap font-mono text-[#1E2025] dark:text-[#F8F9FA]/80 text-xs uppercase tracking-wider transition-colors hover:text-[#D3AE36] dark:hover:text-[#D3AE36]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36] group-hover:scale-125 transition-transform" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
