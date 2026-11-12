import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export const TechMarquee = ({ className = '' }) => {
  const marqueeItems = [
    { category: 'PRACTICE', title: 'Amensisa & Partners · Civil & Structural Consultancy' },
    { category: 'FEA / ETABS', title: 'ETABS 3D Non-Linear Seismic Dynamic Analysis' },
    { category: 'EBCS CODES', title: 'EBCS EN 1990–1998 Structural Compliance Certified' },
    { category: 'SEISMIC', title: 'Ductility Class High (DCH) Drift Ratio < 0.015h Verification' },
    { category: 'HIGHWAYS', title: 'AutoCAD Civil 3D Highway Corridors & Profiles' },
    { category: 'ERA 2024', title: 'ERA Geometric & Flexible Pavement Design Manuals' },
    { category: 'FIELD QA/QC', title: 'OCC Industrial Site Supervision & Pre-Pour Certification' },
    { category: 'GEODESY', title: 'Digital Total Station Coordinate Setting-Out & Topography' },
    { category: 'MATERIALS', title: 'Concrete Slump (80–120mm) & 28-Day Compressive Strength QC' },
    { category: 'REBAR / BBS', title: 'Bar Bending Schedules (BBS) & Ductile Joint Detailing' },
    { category: 'GEOTECH', title: 'Expansive Black Cotton Clay Chemical Lime Stabilization' },
    { category: 'FOUNDATIONS', title: 'Mat Raft Sizing & Deep Drilled Caisson Foundations' },
    { category: 'COMMISSIONS', title: '25+ Multidisciplinary Infrastructure Capstones & Engagements' },
    { category: 'ACCREDITATION', title: 'ASTU SoCEA Verified Civil Engineering Division' }
  ];

  return (
    <section 
      aria-label="Software Stack, Engineering Standards & Credentials" 
      className={`relative border-y border-[#31394D]/30 dark:border-[#31394D] bg-[#F8F9FA] dark:bg-[#12151C] py-3 sm:py-3.5 overflow-hidden transition-colors ${className}`}
    >
      {/* Precision Top & Bottom Hairline Gold Accents */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D3AE36]/35 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#D3AE36]/35 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 flex items-center gap-4">
        
        {/* Fixed Left Live Telemetry Stamp */}
        <div className="hidden lg:flex items-center gap-2 shrink-0 pr-4 border-r border-[#31394D]/30 dark:border-[#31394D]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3AE36] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D3AE36]"></span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-extrabold text-[#D3AE36] whitespace-nowrap">
            ASTU CAD / FEA
          </span>
        </div>

        {/* Marquee Track with Masked Fade Edges */}
        <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="animate-marquee flex items-center gap-8 sm:gap-10 py-1">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <div 
                key={idx} 
                className="group flex items-center gap-2.5 whitespace-nowrap cursor-default transition-all"
              >
                {/* Category Micro-Badge */}
                <span className="px-2 py-0.5 rounded-sm bg-[#D3AE36]/10 dark:bg-[#D3AE36]/15 border border-[#D3AE36]/30 text-[#D3AE36] font-mono text-[9px] font-bold tracking-widest uppercase">
                  {item.category}
                </span>

                {/* Engineering Title */}
                <span className="font-mono text-xs text-[#1E2025] dark:text-[#F8F9FA] tracking-wide group-hover:text-[#D3AE36] transition-colors font-medium">
                  {item.title}
                </span>

                {/* Precision CAD Separator Crosshair */}
                <span className="text-[#31394D] dark:text-[#31394D] font-mono text-xs ml-4 select-none">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
