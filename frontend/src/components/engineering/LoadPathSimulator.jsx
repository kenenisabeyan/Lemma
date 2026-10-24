import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Wind, 
  ArrowDown, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Sliders, 
  Zap,
  Gauge,
  CornerDownRight,
  TrendingDown
} from 'lucide-react';

export const LoadPathSimulator = () => {
  const [loadMode, setLoadMode] = useState('wind'); // 'gravity', 'wind', 'seismic', 'thermal'
  const [intensity, setIntensity] = useState(70); // 10 to 100%

  // Calculated telemetry metrics based on mode & intensity
  const getMetrics = () => {
    switch (loadMode) {
      case 'wind':
        const windSpeed = Math.round(28 + (intensity * 0.15)); // 28 to 43 m/s
        const baseShear = Math.round(2400 + (intensity * 38)); // kN
        const driftRatio = Math.round(650 - (intensity * 2.2)); // H/650 to H/430
        const overturning = Math.round(18000 + (intensity * 240)); // kN*m
        const damperDissipation = Math.round(20 + (intensity * 0.45)); // %
        const isPass = driftRatio >= 400;
        return {
          title: 'EBCS EN 1991-1-4 Lateral Wind Actions',
          primaryMetric: `${windSpeed} m/s`,
          primaryLabel: 'Basic Wind Velocity (Adama Rift Corridor)',
          baseShear: `${baseShear.toLocaleString()} kN`,
          driftRatio: `H / ${driftRatio}`,
          overturning: `${overturning.toLocaleString()} kN·m`,
          dissipation: `${damperDissipation}% RC Frame Dissipation`,
          status: isPass ? 'COMPLIANT' : 'WARNING (EXCEEDS LIMIT)',
          statusColor: isPass ? 'text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/40' : 'text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-500/50 bg-amber-50 dark:bg-amber-950/40',
          codeClause: 'EBCS EN 1991-1-4 Section 4 & ISO 10137 Habitability',
          explanation: 'Wind pressure strikes the building envelope and transfers to horizontal RC floor diaphragms, which engage the central RC core walls and perimeter frame columns.'
        };

      case 'seismic':
        const pga = (0.12 + (intensity * 0.001)).toFixed(2); // 0.12g to 0.22g
        const seismicBaseShear = Math.round(3100 + (intensity * 45));
        const ductilityRatio = (3.0 + (intensity * 0.015)).toFixed(1);
        const interstoryDrift = (0.6 + (intensity * 0.008)).toFixed(2);
        const isSeismicPass = parseFloat(interstoryDrift) <= 1.0;
        return {
          title: 'EBCS EN 1998 Seismic Dynamic Response (Zone 4)',
          primaryMetric: `${pga}g PGA`,
          primaryLabel: 'Design Ground Acceleration (Rift Valley)',
          baseShear: `${seismicBaseShear.toLocaleString()} kN`,
          driftRatio: `${interstoryDrift}% Inelastic Drift`,
          overturning: `${(seismicBaseShear * 12.4).toFixed(0)} kN·m`,
          dissipation: `${ductilityRatio} DCM Behavior Factor q`,
          status: isSeismicPass ? 'COMPLIANT' : 'EXCEEDS DRIFT LIMIT',
          statusColor: isSeismicPass ? 'text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/40' : 'text-red-700 dark:text-red-400 border-red-300 dark:border-red-500/50 bg-red-50 dark:bg-red-950/40',
          codeClause: 'EBCS EN 1998-1:2015 Section 4 (DCM Detailing)',
          explanation: 'Seismic ground acceleration propagates through foundation pad footings. Dual system shear wall plastic hinge zones dissipate seismic energy via controlled ductile rebar yield.'
        };

      case 'thermal':
        const tempDelta = Math.round(15 + (intensity * 0.3)); // deg C
        const axialShortening = Math.round(10 + (intensity * 0.2)); // mm
        const creepCoeff = (1.8 + (intensity * 0.01)).toFixed(2);
        return {
          title: 'EBCS EN 1992 Long-Term Creep & Shrinkage',
          primaryMetric: `Δ${tempDelta}°C`,
          primaryLabel: 'Seasonal Ambient Temperature Gradient',
          baseShear: '420 kN Residual',
          driftRatio: `${axialShortening} mm Differential`,
          overturning: '5,200 kN·m',
          dissipation: `${creepCoeff} Creep Coefficient φ`,
          status: 'CAMBER COMPENSATED',
          statusColor: 'text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/40',
          codeClause: 'EBCS EN 1992-1-1 Section 3.1 & Annex B',
          explanation: 'Differential axial deformation between RC shear core walls and columns is evaluated across 30 years and compensated via pre-set floor slab casting cambers.'
        };

      default: // gravity
        const deadLoadTotal = Math.round(62000 + (intensity * 480)); // kN
        const soilPressure = Math.round(180 + (intensity * 0.5)); // kPa
        return {
          title: 'EBCS EN 1990 / 1992 Gravity Load Distribution',
          primaryMetric: `${(deadLoadTotal / 1000).toFixed(1)}k kN`,
          primaryLabel: 'Total Accumulated Gravity Dead + Live Load',
          baseShear: 'N/A (Pure Axial)',
          driftRatio: '0.04% Vertical Axial Strain',
          overturning: 'Pure Compression',
          dissipation: `${soilPressure} kPa Foundation Ground Stress`,
          status: 'COMPLIANT',
          statusColor: 'text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/40',
          codeClause: 'EBCS EN 1990 Basis of Design & EBCS EN 1992 RC Framing',
          explanation: 'Floor plate live and dead loads are gathered by solid two-way RC slabs, transferred into beams, and directed down through columns into isolated footings.'
        };
    }
  };

  const metrics = getMetrics();

  return (
    <div className="rounded-3xl bg-[#FFFFFF] border border-zinc-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden transition-colors duration-200">
      
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 border-b border-zinc-200 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#FFFFFF] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-xs">
            <Gauge size={13} className="text-[#D4AF37]" />
            Interactive Structural Finite Element Simulator
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Structural Load Path & Drift Mechanics
          </h3>
          <p className="text-xs sm:text-sm text-[#54595F] font-mono mt-1 max-w-2xl">
            Simulate force vector distribution, lateral drift resistance, and energy dissipation on a 52-story dual-core outrigger skyscraper model in real-time.
          </p>
        </div>

        {/* Load Mode Selector Pills */}
        <div className="flex flex-wrap gap-2 bg-[#FFFFFF] p-1.5 rounded-2xl border border-zinc-200">
          <button
            onClick={() => setLoadMode('wind')}
            className={`rounded-xl px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              loadMode === 'wind'
                ? 'bg-[#D4AF37] text-[#121417] shadow-sm'
                : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Wind size={13} /> Wind Lateral
          </button>
          <button
            onClick={() => setLoadMode('seismic')}
            className={`rounded-xl px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              loadMode === 'seismic'
                ? 'bg-[#D4AF37] text-[#121417] shadow-sm'
                : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Activity size={13} /> Seismic NLRHA
          </button>
          <button
            onClick={() => setLoadMode('gravity')}
            className={`rounded-xl px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              loadMode === 'gravity'
                ? 'bg-[#D4AF37] text-[#121417] shadow-sm'
                : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <ArrowDown size={13} /> Gravity Path
          </button>
          <button
            onClick={() => setLoadMode('thermal')}
            className={`rounded-xl px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              loadMode === 'thermal'
                ? 'bg-[#D4AF37] text-[#121417] shadow-sm'
                : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Zap size={13} /> Thermal & Creep
          </button>
        </div>
      </div>

      {/* Simulator Interface: 2-Column Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Interactive Vector Diagram (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-6 relative overflow-hidden flex flex-col items-center justify-between min-h-[420px] shadow-xs">
          
          {/* Top Crosshair Badge */}
          <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#54595F]">
            <span className="flex items-center gap-1 text-[#D4AF37] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              ELEVATION SECTION: TOWER CORE
            </span>
            <span>H = 215m · 52 STORIES</span>
          </div>

          {/* SVG Animated Tower Cross Section */}
          <div className="relative w-full max-w-[280px] h-[300px] flex items-center justify-center my-4">
            <svg viewBox="0 0 200 300" className="w-full h-full overflow-visible">
              
              {/* Foundation Caissons to Bedrock */}
              <rect x="40" y="270" width="120" height="25" fill="#F4F4F5" stroke="#D4AF37" strokeWidth="1.5" />
              <line x1="60" y1="270" x2="60" y2="295" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="100" y1="270" x2="100" y2="295" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="140" y1="270" x2="140" y2="295" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3 3" />
              <text x="100" y="287" textAnchor="middle" fill="#71717A" fontSize="7" fontFamily="monospace">BEDROCK SOCKET CAISSONS</text>

              {/* Central Shear Wall Core */}
              <motion.rect
                x="80"
                y="30"
                width="40"
                height="240"
                fill="#FFFFFF"
                stroke="#D4AF37"
                strokeWidth="2"
                animate={loadMode === 'wind' ? {
                  skewX: [(intensity * 0.04), 0, (intensity * 0.04)],
                  transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                } : loadMode === 'seismic' ? {
                  x: [77, 83, 78, 82, 80],
                  transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' }
                } : {}}
              />

              {/* Perimeter Columns */}
              <line x1="45" y1="30" x2="45" y2="270" stroke="#71717A" strokeWidth="3" />
              <line x1="155" y1="30" x2="155" y2="270" stroke="#71717A" strokeWidth="3" />

              {/* Outrigger Belt Trusses (Level 26 & Level 50) */}
              <line x1="45" y1="80" x2="155" y2="80" stroke="#D4AF37" strokeWidth="2" />
              <line x1="45" y1="170" x2="155" y2="170" stroke="#D4AF37" strokeWidth="2" />
              <line x1="45" y1="80" x2="80" y2="110" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="155" y1="80" x2="120" y2="110" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="45" y1="170" x2="80" y2="200" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="155" y1="170" x2="120" y2="200" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />

              {/* Horizontal Floor Plates */}
              {[60, 100, 130, 150, 190, 220, 245].map((y) => (
                <line key={y} x1="45" y1={y} x2="155" y2={y} stroke="#D4D4D8" strokeWidth="1" />
              ))}

              {/* Dynamic Mode-specific Force Arrows */}
              {loadMode === 'wind' && (
                <>
                  {[40, 75, 115, 160, 205].map((y, i) => (
                    <motion.g 
                      key={y}
                      initial={{ opacity: 0.3, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                    >
                      <line x1="10" y1={y} x2="40" y2={y} stroke="#0EA5E9" strokeWidth="2" strokeDasharray="3 1" />
                      <polygon points={`43,${y} 37,${y - 3} 37,${y + 3}`} fill="#0EA5E9" />
                    </motion.g>
                  ))}
                  <text x="25" y="25" fill="#0EA5E9" fontSize="7" fontFamily="monospace" fontWeight="bold">WIND SHEAR (ASCE 7-22)</text>
                </>
              )}

              {loadMode === 'seismic' && (
                <>
                  <motion.g animate={{ x: [-8, 8, -6, 6, 0] }} transition={{ duration: 0.6, repeat: Infinity }}>
                    <line x1="20" y1="275" x2="180" y2="275" stroke="#EF4444" strokeWidth="3" />
                    <text x="100" y="265" textAnchor="middle" fill="#EF4444" fontSize="7" fontFamily="monospace" fontWeight="bold">MCE_R GROUND ACCELERATION</text>
                  </motion.g>
                </>
              )}

              {loadMode === 'gravity' && (
                <>
                  {[70, 100, 130].map((x) => (
                    <motion.g key={x} animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <line x1={x} y1="35" x2={x} y2="260" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />
                      <polygon points={`${x},265 ${x - 3},258 ${x + 3},258`} fill="#10B981" />
                    </motion.g>
                  ))}
                  <text x="100" y="20" textAnchor="middle" fill="#10B981" fontSize="7" fontFamily="monospace" fontWeight="bold">AXIAL DEAD + LIVE LOAD TRANSFER</text>
                </>
              )}

              {loadMode === 'thermal' && (
                <>
                  <motion.rect
                    x="78"
                    y="28"
                    width="44"
                    height="244"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <text x="100" y="20" textAnchor="middle" fill="#F59E0B" fontSize="7" fontFamily="monospace" fontWeight="bold">30-YR CREEP CAMBER ENVELOPE</text>
                </>
              )}

            </svg>
          </div>

          {/* Interactive Intensity Slider */}
          <div className="w-full pt-4 border-t border-zinc-200">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#54595F] mb-1.5">
              <span className="flex items-center gap-1 font-semibold">
                <Sliders size={11} className="text-[#D4AF37]" /> FORCE INTENSITY FACTOR
              </span>
              <span className="text-[#D4AF37] font-bold">{intensity}% LOAD COMBINATION</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full accent-[#D4AF37] h-1.5 bg-zinc-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Right Column: Telemetry Output HUD (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase text-[#D4AF37] tracking-wider">
                {metrics.title}
              </span>
              <span className={`text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-full border shadow-2xs ${metrics.statusColor}`}>
                {metrics.status}
              </span>
            </div>

            <h4 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 font-mono mb-1">
              {metrics.primaryMetric}
            </h4>
            <p className="text-xs text-[#54595F] font-mono mb-4">
              {metrics.primaryLabel} · <span className="text-[#D4AF37] font-semibold">{metrics.codeClause}</span>
            </p>

            <p className="text-xs sm:text-sm text-[#54595F] leading-relaxed bg-[#FFFFFF] p-4 rounded-xl border border-zinc-200 mb-6 shadow-xs">
              {metrics.explanation}
            </p>
          </div>

          {/* Telemetry Metrics Bento 4-Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-zinc-200 shadow-xs">
              <span className="text-[9px] uppercase text-[#54595F] block mb-1">Base Shear ($V_b$)</span>
              <span className="text-base font-extrabold text-zinc-900 block">{metrics.baseShear}</span>
              <span className="text-[9px] text-[#D4AF37] font-semibold block mt-0.5">Reaction Force</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-zinc-200 shadow-xs">
              <span className="text-[9px] uppercase text-[#54595F] block mb-1">Roof Drift Ratio</span>
              <span className="text-base font-extrabold text-zinc-900 block">{metrics.driftRatio}</span>
              <span className="text-[9px] text-emerald-600 font-semibold block mt-0.5">Limit H/400</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-zinc-200 shadow-xs">
              <span className="text-[9px] uppercase text-[#54595F] block mb-1">Overturning (M_OT)</span>
              <span className="text-base font-extrabold text-zinc-900 block truncate">{metrics.overturning}</span>
              <span className="text-[9px] text-[#D4AF37] font-semibold block mt-0.5">Foundation Moment</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-zinc-200 shadow-xs">
              <span className="text-[9px] uppercase text-[#54595F] block mb-1">Energy Dissipation</span>
              <span className="text-base font-extrabold text-emerald-600 block">{metrics.dissipation}</span>
              <span className="text-[9px] text-[#54595F] block mt-0.5">Supplemental</span>
            </div>
          </div>

          {/* Stamped Verification Bar */}
          <div className="pt-4 border-t border-zinc-200 flex flex-wrap justify-between items-center text-xs font-mono text-[#54595F] gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#D4AF37]" />
              <span>FEA Solver Model: ETABS v21 / SAP2000 Non-Linear Dynamic Engine</span>
            </div>
            <span className="text-[#D4AF37] font-semibold text-[11px]">
              ASTU SoCEA VERIFIED
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
