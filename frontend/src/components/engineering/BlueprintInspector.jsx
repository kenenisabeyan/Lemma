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
      title: 'Dual System RC Coupled Shear Wall (L8)',
      spec: 'C30/37 Concrete & S500 Rebar (EBCS EN 1992)',
      code: 'EBCS EN 1998 Section 5.4 / Dual System',
      description: 'Couples the central RC shear wall core to perimeter portal frames, reversing bending moments and dissipating seismic base shear across the Rift Valley tectonic axis.',
      stressRatio: '0.74 (PASS)',
      capacity: '28,000 kN Shear Resistance'
    },
    {
      id: 2,
      x: '50%',
      y: '58%',
      title: 'Ductile Moment-Resisting Beam-Column Joints',
      spec: '135° Seismic Confinement Ties (Φ10 @ 100mm)',
      code: 'EBCS EN 1998 Ductility Class Medium (DCM)',
      description: 'Provides rotational ductility and confines column concrete core against high seismic axial loads, ensuring a strong-column weak-beam hierarchy.',
      stressRatio: '0.62 (PASS)',
      capacity: 'High Ductility Class DCM Compliance'
    },
    {
      id: 3,
      x: '30%',
      y: '72%',
      title: 'Reinforced Concrete Solid Two-Way Slab',
      spec: '200mm Thickness with Ribbed Grade 60 Rebar',
      code: 'EBCS EN 1992-1-1 Serviceability Deflection',
      description: 'Cast-in-place two-way solid slab with top and bottom reinforcement meshes, maintaining rigid diaphragm behavior under horizontal wind and earthquake loads.',
      stressRatio: '0.68 (PASS)',
      capacity: 'Deflection Limit: L/250 (Calculated: L/480)'
    },
    {
      id: 4,
      x: '50%',
      y: '90%',
      title: 'Dense Stratum Footing with Grade Tie Beams',
      spec: 'Reinforced Concrete Pad Footing (3.2m x 3.2m)',
      code: 'EBCS EN 1997 Geotechnical Standard',
      description: 'Isolated pad footings seated onto dense volcanic agglomerate / ignimbrite strata with strap beams to resist differential settlement in expansive soil.',
      stressRatio: '0.55 (PASS)',
      capacity: '220 kPa Allowable Ground Bearing'
    }
  ];

  const currentHotspot = hotspots.find((h) => h.id === selectedHotspot) || hotspots[0];

  return (
    <div className="py-6 relative overflow-hidden transition-colors duration-200">
      
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D4AF37] mb-2 font-semibold">
            <Compass size={13} className="text-[#D4AF37]" />
            Multi-Layer Engineering Drawing Inspector
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            CAD Elevation & Stress Layer Discretization
          </h3>
          <p className="text-xs sm:text-sm text-[#54595F] font-mono mt-1">
            Toggle between architectural render, structural FEA wireframe, and rebar post-tensioning placement.
          </p>
        </div>

        {/* Layer Switcher Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveLayer('render')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              activeLayer === 'render'
                ? 'bg-[#D4AF37] text-[#121417]'
                : 'text-[#54595F] hover:text-zinc-900'
            }`}
          >
            <Eye size={13} /> 1. Architecture
          </button>
          <button
            onClick={() => setActiveLayer('wireframe')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              activeLayer === 'wireframe'
                ? 'bg-[#D4AF37] text-[#121417]'
                : 'text-[#54595F] hover:text-zinc-900'
            }`}
          >
            <Layers size={13} /> 2. FEA Wireframe
          </button>
          <button
            onClick={() => setActiveLayer('rebar')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              activeLayer === 'rebar'
                ? 'bg-[#D4AF37] text-[#121417]'
                : 'text-[#54595F] hover:text-zinc-900'
            }`}
          >
            <Ruler size={13} /> 3. Rebar & PT
          </button>
        </div>
      </div>

      {/* Main Inspection Canvas & Detail Drawer (12-Col Grid) */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Column: Visual Canvas with Clickable Hotspots (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden relative min-h-[460px] flex items-center justify-center group bg-zinc-950">
          
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
                      ? 'w-9 h-9 bg-[#D4AF37] text-[#121417] scale-110'
                      : 'w-7 h-7 bg-white text-[#D4AF37] hover:scale-125'
                  }`}
                  title={h.title}
                >
                  <Crosshair size={isSelected ? 16 : 13} />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/90 text-white opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                    Node #{h.id}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Technical Corner Stamp Block */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[9px] font-mono text-zinc-300 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-xl z-20">
            <span>DRAWING: S-104 (SCHEMATIC ELEVATION)</span>
            <span className="text-[#D4AF37] font-bold">CLICK NODES 1-4 TO INSPECT</span>
            <span>SCALE: 1:500</span>
          </div>

        </div>

        {/* Right Column: Node Engineering Specification Telemetry (5 cols) */}
        <div className="lg:col-span-5 py-4 flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider">
                Inspection Node #{currentHotspot.id}
              </span>
              <span className="text-emerald-700 font-mono font-bold text-xs bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 size={12} /> {currentHotspot.stressRatio}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 leading-snug">
              {currentHotspot.title}
            </h4>

            <div className="text-xs font-mono text-[#D4AF37] mb-4 font-semibold">
              Spec: <span className="text-zinc-800">{currentHotspot.spec}</span>
            </div>

            <p className="text-xs text-[#54595F] leading-relaxed mb-6">
              {currentHotspot.description}
            </p>
          </div>

          {/* Technical Details Grid */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="py-2 flex justify-between items-center">
              <span className="text-[#54595F] text-[10px] uppercase font-semibold">Design Capacity</span>
              <span className="text-zinc-900 font-bold text-right text-[11px] truncate max-w-[200px]">
                {currentHotspot.capacity}
              </span>
            </div>

            <div className="py-2 flex justify-between items-center">
              <span className="text-[#54595F] text-[10px] uppercase font-semibold">Compliance Code</span>
              <span className="text-[#D4AF37] font-bold text-right text-[11px] truncate max-w-[200px]">
                {currentHotspot.code}
              </span>
            </div>

            {/* ASTU SoCEA Seal */}
            <div className="pt-4 flex items-center justify-between text-[11px] text-[#54595F]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#D4AF37]" /> ASTU SoCEA Capstone Detail
              </span>
              <span className="text-[#D4AF37] font-bold">EBCS EN VERIFIED</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
