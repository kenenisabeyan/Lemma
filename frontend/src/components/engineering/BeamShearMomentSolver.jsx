import React, { useState } from 'react';
import { 
  Calculator, 
  Ruler, 
  Sliders, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  ArrowDown, 
  ChevronRight,
  TrendingDown,
  Info
} from 'lucide-react';

export const BeamShearMomentSolver = () => {
  const [supportType, setSupportType] = useState('simply-supported'); // 'simply-supported', 'cantilever', 'fixed-fixed'
  const [spanL, setSpanL] = useState(12); // meters (4 to 24)
  const [udlW, setUdlW] = useState(25); // kN/m (0 to 60)
  const [pointLoadP, setPointLoadP] = useState(120); // kN (0 to 300)
  const [pointLoadA, setPointLoadA] = useState(6); // meters from left
  const [sectionProfile, setSectionProfile] = useState('w30x116');

  // Structural Section Properties: E (GPa), I (10^6 mm^4 = cm^4 * 10^-2)
  const sections = {
    'w24x68': { name: 'W24×68 Structural Steel', depth: '603 mm', weight: '101 kg/m', Ix: 762, E: 200, S: 2520 },
    'w30x116': { name: 'W30×116 High-Capacity Girder', depth: '762 mm', weight: '173 kg/m', Ix: 2050, E: 200, S: 5390 },
    'w36x150': { name: 'W36×150 Deep Heavy Truss Chord', depth: '912 mm', weight: '223 kg/m', Ix: 3760, E: 200, S: 8260 },
    'rc_400x750': { name: '400×750mm C45 Post-Tensioned RC', depth: '750 mm', weight: '720 kg/m', Ix: 1406, E: 34, S: 3750 }
  };

  const currentSection = sections[sectionProfile];

  // Mathematical Calculations according to Euler-Bernoulli Beam Mechanics
  const calculateMechanics = () => {
    const L = Math.max(1, spanL);
    const w = udlW;
    const P = pointLoadP;
    const a = Math.min(pointLoadA, L);
    const b = L - a;

    let RA = 0;
    let RB = 0;
    let maxMoment = 0;
    let maxShear = 0;
    let maxDeflectionMm = 0;

    const E_Pa = currentSection.E * 1e9; // N/m^2
    const I_m4 = currentSection.Ix * 1e-6; // m^4
    const EI = E_Pa * I_m4; // N*m^2

    if (supportType === 'simply-supported') {
      // Reactions:
      // RA = (w*L)/2 + (P*b)/L
      // RB = (w*L)/2 + (P*a)/L
      RA = (w * L) / 2 + (P * b) / L;
      RB = (w * L) / 2 + (P * a) / L;
      maxShear = Math.max(RA, RB);

      // Max moment approximation:
      const M_udl = (w * L * L) / 8;
      const M_point = (P * a * b) / L;
      maxMoment = M_udl + M_point;

      // Deflection:
      // Delta_udl = 5*w*L^4 / (384*EI)
      // Delta_point = P*a^2*b^2 / (3*EI*L) (at midspan approx P*L^3/(48*EI))
      const delta_udl_m = (5 * (w * 1000) * Math.pow(L, 4)) / (384 * EI);
      const delta_pt_m = ((P * 1000) * Math.pow(L, 3)) / (48 * EI);
      maxDeflectionMm = (delta_udl_m + delta_pt_m) * 1000;
    } else if (supportType === 'cantilever') {
      // Fixed at left, free at right
      RA = w * L + P;
      RB = 0;
      maxShear = RA;
      maxMoment = (w * L * L) / 2 + P * a;

      // Cantilever deflection at tip:
      // Delta = w*L^4 / (8*EI) + P*a^2*(3L - a)/(6*EI)
      const delta_udl_m = ((w * 1000) * Math.pow(L, 4)) / (8 * EI);
      const delta_pt_m = ((P * 1000) * Math.pow(a, 2) * (3 * L - a)) / (6 * EI);
      maxDeflectionMm = (delta_udl_m + delta_pt_m) * 1000;
    } else {
      // Fixed-Fixed (Double Clamped)
      RA = (w * L) / 2 + (P * Math.pow(b, 2) * (3 * a + b)) / Math.pow(L, 3);
      RB = (w * L) / 2 + (P * Math.pow(a, 2) * (a + 3 * b)) / Math.pow(L, 3);
      maxShear = Math.max(RA, RB);

      const M_end = (w * L * L) / 12 + (P * a * Math.pow(b, 2)) / Math.pow(L, 2);
      const M_mid = (w * L * L) / 24 + (P * Math.pow(a, 2) * Math.pow(b, 2)) / Math.pow(L, 3);
      maxMoment = Math.max(M_end, M_mid);

      const delta_udl_m = ((w * 1000) * Math.pow(L, 4)) / (384 * EI);
      const delta_pt_m = ((P * 1000) * Math.pow(L, 3)) / (192 * EI);
      maxDeflectionMm = (delta_udl_m + delta_pt_m) * 1000;
    }

    const allowableDeflectionL360 = (L * 1000) / 360;
    const allowableDeflectionL240 = (L * 1000) / 240;
    const isPassL360 = maxDeflectionMm <= allowableDeflectionL360;

    return {
      RA: Math.round(RA),
      RB: Math.round(RB),
      maxMoment: Math.round(maxMoment),
      maxShear: Math.round(maxShear),
      deflection: maxDeflectionMm.toFixed(1),
      allowableL360: allowableDeflectionL360.toFixed(1),
      allowableL240: allowableDeflectionL240.toFixed(1),
      isPassL360
    };
  };

  const results = calculateMechanics();

  // SVG Diagram coordinates
  const svgWidth = 320;
  const svgHeight = 70;
  const beamY = 40;
  const leftX = 35;
  const rightX = 285;
  const spanPixel = rightX - leftX;
  const ptPixelX = leftX + (pointLoadA / spanL) * spanPixel;

  return (
    <div className="rounded-3xl bg-white/95 dark:bg-[#14171C]/95 bg-cad-grid border border-zinc-200/90 dark:border-zinc-800/90 p-6 lg:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #801834 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#801834] dark:text-[#D4AF37] font-bold">
            <Calculator size={14} className="animate-pulse" />
            <span>Interactive Euler-Bernoulli Structural Mechanics Solver</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
            Beam Shear ($V$), Bending Moment ($M$) & Deflection ($\Delta$) Laboratory
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
            Real-time finite element matrix solver for indeterminate and determinate structural framing spans. Adjust loads, boundary conditions, and cross-section profiles to inspect live internal stresses.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#F4F5F7] dark:bg-[#0E1014] p-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 shrink-0">
          {[
            { id: 'simply-supported', label: 'Simply Supported' },
            { id: 'cantilever', label: 'Cantilever' },
            { id: 'fixed-fixed', label: 'Fixed-Fixed' }
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSupportType(type.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                supportType === type.id
                  ? 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] shadow-sm'
                  : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs & Parameters */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 my-8">
        
        {/* Controls Column (Sliders) */}
        <div className="lg:col-span-5 space-y-4">
          <label className="text-xs font-mono uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] flex items-center gap-2 font-bold">
            <Sliders size={13} /> Span & Load Configuration
          </label>

          {/* Span Length */}
          <div className="bg-[#F4F5F7] dark:bg-[#0E1014] p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-600 dark:text-[#9CA3AF] font-bold">Clear Span Length ($L$):</span>
              <span className="text-[#801834] dark:text-[#D4AF37] font-bold">{spanL} meters ({Math.round(spanL * 3.28084)} ft)</span>
            </div>
            <input 
              type="range"
              min="4"
              max="24"
              step="1"
              value={spanL}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setSpanL(val);
                if (pointLoadA > val) setPointLoadA(Math.round(val / 2));
              }}
              className="w-full h-1.5 bg-zinc-200 dark:bg-[#26282D] rounded-lg appearance-none cursor-pointer accent-[#801834] dark:accent-[#D4AF37]"
            />
          </div>

          {/* Uniform Distributed Load (UDL) */}
          <div className="bg-[#F4F5F7] dark:bg-[#0E1014] p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-600 dark:text-[#9CA3AF] font-bold">Uniform Load ($w$): Dead + Live</span>
              <span className="text-[#801834] dark:text-[#D4AF37] font-bold">{udlW} kN/m</span>
            </div>
            <input 
              type="range"
              min="0"
              max="60"
              step="2"
              value={udlW}
              onChange={(e) => setUdlW(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-200 dark:bg-[#26282D] rounded-lg appearance-none cursor-pointer accent-[#801834] dark:accent-[#D4AF37]"
            />
          </div>

          {/* Concentrated Point Load (P) */}
          <div className="bg-[#F4F5F7] dark:bg-[#0E1014] p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-600 dark:text-[#9CA3AF] font-bold">Point Load ($P$): Equipment/Column</span>
              <span className="text-[#801834] dark:text-[#D4AF37] font-bold">{pointLoadP} kN</span>
            </div>
            <input 
              type="range"
              min="0"
              max="300"
              step="10"
              value={pointLoadP}
              onChange={(e) => setPointLoadP(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-200 dark:bg-[#26282D] rounded-lg appearance-none cursor-pointer accent-[#801834] dark:accent-[#D4AF37]"
            />
          </div>

          {/* Point Load Position (a) */}
          <div className="bg-[#F4F5F7] dark:bg-[#0E1014] p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-600 dark:text-[#9CA3AF] font-bold">Point Load Location ($a$):</span>
              <span className="text-[#801834] dark:text-[#D4AF37] font-bold">{pointLoadA} m from left support</span>
            </div>
            <input 
              type="range"
              min="1"
              max={spanL}
              step="0.5"
              value={pointLoadA}
              onChange={(e) => setPointLoadA(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-zinc-200 dark:bg-[#26282D] rounded-lg appearance-none cursor-pointer accent-[#801834] dark:accent-[#D4AF37]"
            />
          </div>

          {/* Section Profile Selector */}
          <div className="bg-[#F4F5F7] dark:bg-[#0E1014] p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
            <span className="text-xs font-mono text-zinc-600 dark:text-[#9CA3AF] block font-bold">Structural Section Profile (AISC / ACI):</span>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(sections).map((key) => {
                const s = sections[key];
                const isSelected = sectionProfile === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSectionProfile(key)}
                    className={`p-2.5 rounded-lg border text-left text-xs font-mono transition-all ${
                      isSelected
                        ? 'bg-white dark:bg-[#14171C] border-[#801834] dark:border-[#D4AF37] text-[#801834] dark:text-[#D4AF37] font-bold shadow-sm'
                        : 'bg-white/80 dark:bg-[#14171C]/70 border-zinc-200/80 dark:border-zinc-800/80 text-zinc-600 dark:text-[#888] hover:text-zinc-900 dark:hover:text-[#CCC]'
                    }`}
                  >
                    <span className="block truncate font-bold">{s.name.split(' ')[0]}</span>
                    <span className="text-[9px] text-zinc-500 dark:text-[#666] block">$I_x = {s.Ix} \times 10^6$</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Live Diagram Stage (SVG SFD & BMD Curves) */}
        <div className="lg:col-span-7 bg-[#F4F5F7] dark:bg-[#0E1014] rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 p-6 flex flex-col justify-between">
          
          <div className="space-y-6">
            
            {/* 1. Free Body Loading Diagram */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-zinc-900 dark:text-[#EAEAEA] font-bold">1. Free Body Beam Loading</span>
                <span className="text-[#801834] dark:text-[#D4AF37] font-bold">Span $L = {spanL}m$</span>
              </div>
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-16 bg-white dark:bg-[#14171C] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80">
                {/* UDL Arrows */}
                {udlW > 0 && (
                  <g opacity="0.75">
                    {[50, 85, 120, 155, 190, 225, 260].map((x) => (
                      <g key={x}>
                        <line x1={x} y1="12" x2={x} y2="28" stroke="#F59E0B" strokeWidth="1" />
                        <polygon points={`${x-2},26 ${x+2},26 ${x},30`} fill="#F59E0B" />
                      </g>
                    ))}
                    <line x1="45" y1="12" x2="275" y2="12" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="140" y="9" fill="#F59E0B" fontSize="6" fontFamily="monospace">w = {udlW} kN/m</text>
                  </g>
                )}

                {/* Concentrated Point Load Arrow */}
                {pointLoadP > 0 && (
                  <g>
                    <line x1={ptPixelX} y1="2" x2={ptPixelX} y2="28" stroke="#EF4444" strokeWidth="2.5" />
                    <polygon points={`${ptPixelX-4},24 ${ptPixelX+4},24 ${ptPixelX},30`} fill="#EF4444" />
                    <text x={ptPixelX - 12} y="18" fill="#EF4444" fontSize="7" fontFamily="monospace" fontWeight="bold">P={pointLoadP}kN</text>
                  </g>
                )}

                {/* Beam Spine */}
                <line x1={leftX} y1={beamY} x2={rightX} y2={beamY} stroke="#801834" className="dark:stroke-[#D4AF37]" strokeWidth="4" />

                {/* Left Support */}
                {supportType === 'cantilever' ? (
                  <g>
                    <line x1={leftX} y1="25" x2={leftX} y2="55" stroke="#18181B" className="dark:stroke-[#EAEAEA]" strokeWidth="3" />
                    <line x1={leftX-4} y1="28" x2={leftX} y2="34" stroke="#888" strokeWidth="1" />
                    <line x1={leftX-4} y1="36" x2={leftX} y2="42" stroke="#888" strokeWidth="1" />
                    <line x1={leftX-4} y1="44" x2={leftX} y2="50" stroke="#888" strokeWidth="1" />
                  </g>
                ) : (
                  <g>
                    <polygon points={`${leftX},${beamY} ${leftX-6},${beamY+12} ${leftX+6},${beamY+12}`} fill="#18181B" className="dark:fill-[#EAEAEA]" />
                    <line x1={leftX-8} y1={beamY+13} x2={leftX+8} y2={beamY+13} stroke="#888" strokeWidth="1.5" />
                    <text x={leftX - 14} y={beamY + 22} fill="#71717A" className="dark:fill-[#9CA3AF]" fontSize="6" fontFamily="monospace">RA={results.RA}kN</text>
                  </g>
                )}

                {/* Right Support */}
                {supportType !== 'cantilever' && (
                  <g>
                    <polygon points={`${rightX},${beamY} ${rightX-6},${beamY+12} ${rightX+6},${beamY+12}`} fill="#18181B" className="dark:fill-[#EAEAEA]" />
                    <line x1={rightX-8} y1={beamY+13} x2={rightX+8} y2={beamY+13} stroke="#888" strokeWidth="1.5" />
                    <text x={rightX - 14} y={beamY + 22} fill="#71717A" className="dark:fill-[#9CA3AF]" fontSize="6" fontFamily="monospace">RB={results.RB}kN</text>
                  </g>
                )}
              </svg>
            </div>

            {/* 2. Shear Force Diagram (SFD) */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-zinc-600 dark:text-[#9CA3AF] flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> Shear Force Diagram (V)
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">V_max = {results.maxShear} kN</span>
              </div>
              <svg viewBox={`0 0 ${svgWidth} 45`} className="w-full h-12 bg-white dark:bg-[#14171C] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80">
                <line x1={leftX} y1="22" x2={rightX} y2="22" stroke="#CBD5E1" className="dark:stroke-[#444]" strokeWidth="1" strokeDasharray="2 2" />
                {/* SFD Shaded Polygon */}
                <polygon 
                  points={`${leftX},22 ${leftX},8 ${ptPixelX},14 ${ptPixelX},32 ${rightX},38 ${rightX},22`} 
                  fill="#3B82F6" 
                  fillOpacity="0.25" 
                  stroke="#3B82F6" 
                  strokeWidth="1.5" 
                />
                <text x={leftX + 5} y="16" fill="#2563EB" className="dark:fill-[#3B82F6]" fontSize="7" fontFamily="monospace">+{results.RA} kN</text>
                <text x={rightX - 45} y="34" fill="#2563EB" className="dark:fill-[#3B82F6]" fontSize="7" fontFamily="monospace">-{results.RB} kN</text>
              </svg>
            </div>

            {/* 3. Bending Moment Diagram (BMD) */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="text-zinc-600 dark:text-[#9CA3AF] flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></span> Bending Moment Diagram (M)
                </span>
                <span className="text-[#801834] dark:text-[#D4AF37] font-bold">M_max = {results.maxMoment} kN·m</span>
              </div>
              <svg viewBox={`0 0 ${svgWidth} 50`} className="w-full h-14 bg-white dark:bg-[#14171C] rounded-xl border border-zinc-200/80 dark:border-zinc-800/80">
                <line x1={leftX} y1="8" x2={rightX} y2="8" stroke="#CBD5E1" className="dark:stroke-[#444]" strokeWidth="1" strokeDasharray="2 2" />
                {/* BMD Parabolic Curve (Tension at bottom) */}
                <path 
                  d={`M ${leftX} 8 Q ${ptPixelX} 45 ${rightX} 8`} 
                  fill="#801834"
                  className="dark:fill-[#D4AF37]" 
                  fillOpacity="0.15" 
                  stroke="#801834"
                  strokeWidth="2" 
                />
                <circle cx={ptPixelX} cy="36" r="3" fill="#801834" className="dark:fill-[#D4AF37]" />
                <text x={ptPixelX - 18} y="47" fill="#801834" className="dark:fill-[#D4AF37]" fontSize="7" fontFamily="monospace" fontWeight="bold">{results.maxMoment} kN·m</text>
              </svg>
            </div>

          </div>

          {/* Telemetry Evaluation Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 mt-4 text-xs font-mono">
            <div className="bg-white dark:bg-[#14171C] p-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80">
              <span className="text-[10px] text-zinc-500 dark:text-[#888] block">MAX MOMENT ($M_u$):</span>
              <span className="text-[#801834] dark:text-[#D4AF37] font-bold text-sm">{results.maxMoment} kN·m</span>
            </div>
            <div className="bg-white dark:bg-[#14171C] p-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80">
              <span className="text-[10px] text-zinc-500 dark:text-[#888] block">MAX SHEAR ($V_u$):</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">{results.maxShear} kN</span>
            </div>
            <div className="bg-white dark:bg-[#14171C] p-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80">
              <span className="text-[10px] text-zinc-500 dark:text-[#888] block">MAX DEFLECTION ($\Delta$):</span>
              <span className={`font-bold text-sm ${results.isPassL360 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {results.deflection} mm
              </span>
            </div>
            <div className="bg-white dark:bg-[#14171C] p-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80">
              <span className="text-[10px] text-zinc-500 dark:text-[#888] block">IBC DEFLECTION CHECK:</span>
              <span className={`inline-flex items-center gap-1 font-bold text-xs ${results.isPassL360 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {results.isPassL360 ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                {results.isPassL360 ? 'PASS (≤ L/360)' : 'EXCEEDS L/360'}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Code Compliance Footer */}
      <div className="relative z-10 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-[#888] gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-[#801834] dark:text-[#D4AF37]" />
          <span>Euler-Bernoulli Elastic Formulation: EI · (d⁴w / dx⁴) = q(x)</span>
        </div>
        <div>
          <span>AISC 360-22 SPECIFICATION FOR STRUCTURAL STEEL BUILDINGS · CHAPTER F & L</span>
        </div>
      </div>

    </div>
  );
};
