import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Layers, 
  Ruler, 
  Sparkles, 
  ShieldCheck, 
  Info, 
  Crosshair, 
  CheckCircle2, 
  Compass, 
  Maximize2 
} from 'lucide-react';

export const BlueprintInspector = () => {
  const [activeLayer, setActiveLayer] = useState('wireframe'); // 'render', 'wireframe', 'rebar'
  const [selectedHotspot, setSelectedHotspot] = useState(1);

  const hotspots = [
    {
      id: 1,
      x: '50%',
      y: '35%',
      title: 'Multistage Belt Outrigger Truss (L32)',
      spec: 'Grade 65 Steel (AISC 360-22)',
      code: 'ASCE 7-22 Section 12.8 / AISC 341',
      description: 'Couples the central C80 concrete shear wall core to perimeter composite megacolumns, reversing bending moments and reducing base overturning moment by 28%.',
      stressRatio: '0.74 (PASS)',
      capacity: '42,000 kN Tension/Compression Couple'
    },
    {
      id: 2,
      x: '50%',
      y: '58%',
      title: 'Viscoelastic Fluid Viscous Dampers (FVD)',
      spec: 'Taylor Devices 850 kN Capacity',
      code: 'ASCE 7-22 Chapter 18 Supplemental Damping',
      description: 'Provides velocity-dependent supplemental damping that suppresses vortex-shedding accelerations below ISO 10137 occupant comfort limits during 140mph wind events.',
      stressRatio: '0.62 (PASS)',
      capacity: '24% Equivalent Viscous Damping'
    },
    {
      id: 3,
      x: '30%',
      y: '72%',
      title: 'Post-Tensioned Unbonded Flat Plate',
      spec: '0.6" Grade 270 Low-Relaxation Tendons',
      code: 'ACI 318-19 Chapter 24 Serviceability',
      description: 'Extends column-free clear span to 14.5 meters while maintaining a slender 220mm floor plate thickness, eliminating falsework deflection.',
      stressRatio: '0.68 (PASS)',
      capacity: 'Deflection Limit: L/480 (Calculated: L/620)'
    },
    {
      id: 4,
      x: '50%',
      y: '90%',
      title: 'Drilled Shaft Bedrock Socket Caissons',
      spec: '2.4m Diameter Cast-in-Place Concrete',
      code: 'IBC 2024 Section 1810 & Geotechnical Standard',
      description: 'Deep foundation caissons socketed 6.5 meters into Manhattan Schist bedrock providing 48 MPa end-bearing capacity and overturning uplift resistance.',
      stressRatio: '0.55 (PASS)',
      capacity: '85,000 kN Ultimate Axial Compression'
    }
  ];

  const currentHotspot = hotspots.find((h) => h.id === selectedHotspot) || hotspots[0];

  return (
    <div className="rounded-3xl bg-white/95 dark:bg-[#14171C]/95 backdrop-blur-xs border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-10 shadow-lg dark:shadow-2xl relative overflow-hidden transition-colors duration-200">
      
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-[#F4F5F7] dark:bg-[#0E1014] px-3.5 py-1 text-xs font-mono text-[#801834] dark:text-[#D4AF37] mb-2 shadow-xs">
            <Compass size={13} className="text-[#801834] dark:text-[#D4AF37]" />
            Multi-Layer Engineering Drawing Inspector
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
            CAD Elevation & Stress Layer Discretization
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#9CA3AF] font-mono mt-1">
            Toggle between architectural render, structural FEA wireframe, and rebar post-tensioning placement.
          </p>
        </div>

        {/* Layer Switcher Tabs */}
        <div className="flex bg-[#F4F5F7] dark:bg-[#0E1014] p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setActiveLayer('render')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              activeLayer === 'render'
                ? 'bg-[#801834] text-white shadow-sm dark:bg-[#D4AF37] dark:text-[#121417] dark:shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
            }`}
          >
            <Eye size={13} /> 1. Architecture
          </button>
          <button
            onClick={() => setActiveLayer('wireframe')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              activeLayer === 'wireframe'
                ? 'bg-[#801834] text-white shadow-sm dark:bg-[#D4AF37] dark:text-[#121417] dark:shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
            }`}
          >
            <Layers size={13} /> 2. FEA Wireframe
          </button>
          <button
            onClick={() => setActiveLayer('rebar')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              activeLayer === 'rebar'
                ? 'bg-[#801834] text-white shadow-sm dark:bg-[#D4AF37] dark:text-[#121417] dark:shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
            }`}
          >
            <Ruler size={13} /> 3. Rebar & PT
          </button>
        </div>
      </div>

      {/* Main Inspection Canvas & Detail Drawer (12-Col Grid) */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Column: Visual Canvas with Clickable Hotspots (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-zinc-950 dark:bg-[#121417] border border-zinc-300 dark:border-[#2D3137] overflow-hidden relative min-h-[460px] flex items-center justify-center shadow-md dark:shadow-2xl group">
          
          {/* Layer 1: Architecture Image */}
          {activeLayer === 'render' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                alt="Nexus Tower Architecture"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
            </motion.div>
          )}

          {/* Layer 2: FEA Wireframe Simulation */}
          {activeLayer === 'wireframe' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#0E1013] p-8 flex items-center justify-center"
            >
              {/* Blueprint Grid Lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>

              {/* Wireframe Vector Skyscraper Model */}
              <svg viewBox="0 0 300 420" className="w-full h-full max-w-[260px] overflow-visible">
                {/* Outrigger Trusses */}
                <rect x="70" y="40" width="160" height="340" fill="none" stroke="#262A30" strokeWidth="1.5" />
                <rect x="110" y="40" width="80" height="340" fill="#181A1E" stroke="#D4AF37" strokeWidth="2" />
                
                {/* Horizontal Belt Trusses */}
                <line x1="70" y1="130" x2="230" y2="130" stroke="#D4AF37" strokeWidth="2.5" />
                <line x1="70" y1="240" x2="230" y2="240" stroke="#D4AF37" strokeWidth="2.5" />
                <line x1="70" y1="130" x2="110" y2="170" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="230" y1="130" x2="190" y2="170" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* Floor Slabs */}
                {[70, 100, 160, 190, 220, 270, 310, 340].map((y) => (
                  <line key={y} x1="70" y1={y} x2="230" y2={y} stroke="#333842" strokeWidth="1" />
                ))}

                {/* Axial Load Compression Vectors */}
                <line x1="150" y1="45" x2="150" y2="375" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="150" y="30" textAnchor="middle" fill="#D4AF37" fontSize="8" fontFamily="monospace">ETABS WIREFRAME DISCRETIZATION</text>
              </svg>
            </motion.div>
          )}

          {/* Layer 3: Rebar Detailing & PT Layout */}
          {activeLayer === 'rebar' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#0B0C0E] p-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
              
              {/* Rebar Cage CAD Vector */}
              <svg viewBox="0 0 300 420" className="w-full h-full max-w-[260px] overflow-visible">
                <rect x="90" y="50" width="120" height="320" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />
                {[70, 100, 130, 160, 190, 220, 250, 280, 310, 340].map((y) => (
                  <g key={y}>
                    <line x1="90" y1={y} x2="210" y2={y} stroke="#D4AF37" strokeWidth="2" />
                    <circle cx="95" cy={y} r="2.5" fill="#D4AF37" />
                    <circle cx="205" cy={y} r="2.5" fill="#D4AF37" />
                  </g>
                ))}
                {/* Post tensioning parabolic tendon */}
                <path d="M 60,200 Q 150,225 240,200" stroke="#38BDF8" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
                <text x="150" y="35" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace">POST-TENSIONED TENDON DRAPE PROFILE</text>
              </svg>
            </motion.div>
          )}

          {/* Clickable Inspection Hotspots */}
          <div className="absolute inset-0 z-20 pointer-events-auto">
            {hotspots.map((h) => {
              const isSelected = selectedHotspot === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setSelectedHotspot(h.id)}
                  style={{ top: h.y, left: h.x, transform: 'translate(-50%, -50%)' }}
                  className={`group/btn absolute flex items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'w-9 h-9 bg-[#801834] text-white shadow-[0_0_20px_rgba(128,24,52,0.7)] scale-110 ring-4 ring-[#801834]/30 dark:bg-[#D4AF37] dark:text-[#121417] dark:ring-[#D4AF37]/30'
                      : 'w-7 h-7 bg-white/90 dark:bg-[#121417]/90 border border-[#801834] dark:border-[#D4AF37] text-[#801834] dark:text-[#D4AF37] hover:scale-125 shadow-md'
                  }`}
                  title={h.title}
                >
                  <Crosshair size={isSelected ? 16 : 13} />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/90 border border-zinc-700 text-white opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                    Node #{h.id}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Technical Corner Stamp Block */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[9px] font-mono text-zinc-300 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-700 z-20">
            <span>DRAWING: S-104 (SCHEMATIC ELEVATION)</span>
            <span className="text-[#F3E5AB] font-bold">CLICK NODES 1-4 TO INSPECT</span>
            <span>SCALE: 1:500</span>
          </div>

        </div>

        {/* Right Column: Node Engineering Specification Telemetry (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#F4F5F7] dark:bg-[#0E1014] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-xs dark:shadow-xl">
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="rounded-full bg-white dark:bg-[#14171C] border border-[#801834]/30 dark:border-[#D4AF37]/40 text-[#801834] dark:text-[#D4AF37] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider shadow-2xs">
                Inspection Node #{currentHotspot.id}
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-mono font-bold text-xs bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 size={12} /> {currentHotspot.stressRatio}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-2 leading-snug">
              {currentHotspot.title}
            </h4>

            <div className="text-xs font-mono text-[#801834] dark:text-[#D4AF37] mb-4 font-semibold">
              Spec: <span className="text-zinc-800 dark:text-[#EAEAEA]">{currentHotspot.spec}</span>
            </div>

            <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed bg-white dark:bg-[#14171C] p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-6 shadow-2xs">
              {currentHotspot.description}
            </p>
          </div>

          {/* Technical Details Grid */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-white dark:bg-[#14171C] border border-zinc-200 dark:border-zinc-800 flex justify-between items-center shadow-2xs">
              <span className="text-zinc-500 dark:text-[#9CA3AF] text-[10px] uppercase font-semibold">Design Capacity</span>
              <span className="text-zinc-900 dark:text-[#EAEAEA] font-bold text-right text-[11px] truncate max-w-[200px]">
                {currentHotspot.capacity}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-[#14171C] border border-zinc-200 dark:border-zinc-800 flex justify-between items-center shadow-2xs">
              <span className="text-zinc-500 dark:text-[#9CA3AF] text-[10px] uppercase font-semibold">Compliance Code</span>
              <span className="text-[#801834] dark:text-[#D4AF37] font-bold text-right text-[11px] truncate max-w-[200px]">
                {currentHotspot.code}
              </span>
            </div>

            {/* PE / SE Seal */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 dark:text-[#9CA3AF]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#801834] dark:text-[#D4AF37]" /> Licensed Stamped Detail
              </span>
              <span className="text-[#801834] dark:text-[#D4AF37] font-bold">PE #84729-SE</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
