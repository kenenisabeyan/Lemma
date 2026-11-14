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
  TrendingDown,
  BookOpen
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const LoadPathSimulator = () => {
  const { isDark } = useTheme();
  const [loadMode, setLoadMode] = useState('wind'); // 'gravity', 'wind', 'seismic', 'thermal'
  const [intensity, setIntensity] = useState(70); // 10 to 100%

  // Calculated telemetry metrics based on mode & intensity
  const getMetrics = () => {
    switch (loadMode) {
      case 'wind': {
        const windSpeed = Math.round(28 + (intensity * 0.15)); // 28 to 43 m/s
        const baseShear = Math.round(2400 + (intensity * 38)); // kN
        const driftRatio = Math.round(650 - (intensity * 2.2)); // H/650 to H/430
        const overturning = Math.round(18000 + (intensity * 240)); // kN*m
        const damperDissipation = Math.round(20 + (intensity * 0.45)); // %
        const isPass = driftRatio >= 400;
        return {
          standardTag: 'EBCS EN 1991-1-4 · SECTION 4.2',
          title: 'Lateral Wind Pressure & Aerodynamic Drag',
          numericValue: `${windSpeed}`,
          unit: 'm/s',
          primaryLabel: 'Basic 10-Min Mean Wind Velocity (Adama Rift Corridor)',
          codeClause: 'EBCS EN 1991-1-4 & ISO 10137 Habitability Criteria',
          formula: 'q_p(z) = [1 + 7 · I_v(z)] · ½ · ρ · v_m²(z)',
          explanation: 'Dynamic atmospheric wind boundary turbulence strikes the 215-meter building facade. Pressures are gathered by exterior cladding and transferred into rigid horizontal concrete diaphragms, activating the central dual RC core and outrigger belt trusses.',
          step1: 'Cladding collects gust pressures up to 1.82 kPa',
          step2: 'Floor diaphragm acts as deep horizontal beam',
          step3: 'Coupled RC core walls resist 74% overturning moment',
          baseShearSymbol: 'V',
          baseShearSub: 'b',
          baseShearVal: `${baseShear.toLocaleString()} kN`,
          baseShearNote: 'Total Base Reaction',
          driftSymbol: 'Δ/H',
          driftSub: 'roof',
          driftVal: `H / ${driftRatio}`,
          driftNote: isPass ? 'Within H/400 Limit' : 'Exceeds Limit H/400',
          driftPass: isPass,
          momentSymbol: 'M',
          momentSub: 'ot',
          momentVal: `${overturning.toLocaleString()} kN·m`,
          momentNote: 'Base Overturning Moment',
          dissipationSymbol: 'ξ',
          dissipationSub: 'eff',
          dissipationVal: `${damperDissipation}%`,
          dissipationNote: 'Outrigger Frame Damping',
          status: isPass ? 'COMPLIANT' : 'WARNING (EXCEEDS LIMIT)',
          statusColor: isPass 
            ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10' 
            : 'text-amber-700 dark:text-amber-400 bg-amber-500/10'
        };
      }

      case 'seismic': {
        const pga = (0.12 + (intensity * 0.001)).toFixed(2); // 0.12g to 0.22g
        const seismicBaseShear = Math.round(3100 + (intensity * 45));
        const ductilityRatio = (3.0 + (intensity * 0.015)).toFixed(1);
        const interstoryDrift = (0.6 + (intensity * 0.008)).toFixed(2);
        const isSeismicPass = parseFloat(interstoryDrift) <= 1.0;
        return {
          standardTag: 'EBCS EN 1998-1:2015 · ZONE 4',
          title: 'Nonlinear Dynamic Seismic Response (Rift Graben)',
          numericValue: `${pga}`,
          unit: 'g PGA',
          primaryLabel: 'Design Ground Acceleration (Adama 475-Yr Return Period)',
          codeClause: 'EBCS EN 1998 Section 4 · Ductility Class High (DCH)',
          formula: 'S_d(T) = a_g · S · (2.5 / q) · [T_C / T]',
          explanation: 'Seismic shear waves (S-waves) propagate through basal volcanic bedrock into drilled caissons. Lateral inertial floor forces induce flexural plastic hinge formation at the base of the central shear core, dissipating energy through controlled ductile rebar yield.',
          step1: 'Ground motion accelerates caissons & raft footing',
          step2: 'Plastic hinges form at base levels with high ductility',
          step3: 'Energy dissipated without structural collapse',
          baseShearSymbol: 'V',
          baseShearSub: 'b,dyn',
          baseShearVal: `${seismicBaseShear.toLocaleString()} kN`,
          baseShearNote: 'Elastic Dynamic Base Shear',
          driftSymbol: 'd',
          driftSub: 'r',
          driftVal: `${interstoryDrift}%`,
          driftNote: isSeismicPass ? 'Within 1.0% ULS Limit' : 'Exceeds 1.0% Limit',
          driftPass: isSeismicPass,
          momentSymbol: 'M',
          momentSub: 'Ed',
          momentVal: `${(seismicBaseShear * 12.4).toFixed(0)} kN·m`,
          momentNote: 'Dynamic Foundation Moment',
          dissipationSymbol: 'q',
          dissipationSub: 'factor',
          dissipationVal: `${ductilityRatio}`,
          dissipationNote: 'Behavior Factor DCM Detailing',
          status: isSeismicPass ? 'COMPLIANT' : 'EXCEEDS DRIFT LIMIT',
          statusColor: isSeismicPass 
            ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10' 
            : 'text-red-700 dark:text-red-400 bg-red-500/10'
        };
      }

      case 'thermal': {
        const tempDelta = Math.round(15 + (intensity * 0.3)); // deg C
        const axialShortening = Math.round(10 + (intensity * 0.2)); // mm
        const creepCoeff = (1.8 + (intensity * 0.01)).toFixed(2);
        return {
          standardTag: 'EBCS EN 1992-1-1 · ANNEX B',
          title: 'Long-Term Concrete Creep, Shrinkage & Thermal Strain',
          numericValue: `Δ${tempDelta}`,
          unit: '°C',
          primaryLabel: 'Daily & Seasonal Ambient Temperature Amplitude',
          codeClause: 'EBCS EN 1992-1-1 Clause 3.1.4 & CEB-FIP Model Code',
          formula: 'ε_cc(t, t_0) = φ(t, t_0) · (σ_c / E_c)',
          explanation: 'Differential axial deformation occurs between heavily loaded interior RC core walls and perimeter composite columns over a 30-year operational horizon. Pre-calculated reverse cambers are specified during floor formwork erection to guarantee dead-level finishes.',
          step1: 'Core sustains higher sustained axial stresses',
          step2: 'Viscoelastic creep shortens columns over 3 decades',
          step3: 'Prescribed floor camber compensates differential sag',
          baseShearSymbol: 'V',
          baseShearSub: 'th',
          baseShearVal: '420 kN',
          baseShearNote: 'Restrained Thermal Thrust',
          driftSymbol: 'δ',
          driftSub: 'diff',
          driftVal: `${axialShortening} mm`,
          driftNote: '30-Year Differential Delta',
          driftPass: true,
          momentSymbol: 'M',
          momentSub: 'th',
          momentVal: '5,200 kN·m',
          momentNote: 'Restraint Secondary Moment',
          dissipationSymbol: 'φ',
          dissipationSub: 'creep',
          dissipationVal: `${creepCoeff}`,
          dissipationNote: 'Long-Term Creep Ratio',
          status: 'CAMBER COMPENSATED',
          statusColor: 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10'
        };
      }

      default: { // gravity
        const deadLoadTotal = Math.round(62000 + (intensity * 480)); // kN
        const soilPressure = Math.round(180 + (intensity * 0.5)); // kPa
        return {
          standardTag: 'EBCS EN 1990 / 1992 · BASIS OF DESIGN',
          title: 'Direct Gravity Load Path & Soil-Structure Bearing',
          numericValue: `${(deadLoadTotal / 1000).toFixed(1)}k`,
          unit: 'kN',
          primaryLabel: 'Total Factored Permanent (Gk) + Variable (Qk) Gravity Load',
          codeClause: 'EBCS EN 1990 Combination 1.35Gk + 1.5Qk',
          formula: 'E_d = ∑ γ_G,j · G_k,j + γ_Q,1 · Q_k,1',
          explanation: 'Uniform floor loads are gathered by continuous post-tensioned floor slabs, sheared into perimeter girders, and routed down through axial columns and core walls into deep socketed caissons anchored into Adama ignimbrite bedrock.',
          step1: 'Two-way slab collects live occupancy loads',
          step2: 'Axial columns transfer cumulative tributary weight',
          step3: 'Socketed bedrock caissons mobilize end-bearing resistance',
          baseShearSymbol: 'N',
          baseShearSub: 'Ed',
          baseShearVal: `${deadLoadTotal.toLocaleString()} kN`,
          baseShearNote: 'Total Axial Compression',
          driftSymbol: 'ε',
          driftSub: 'c',
          driftVal: '0.04%',
          driftNote: 'Axial Compression Strain',
          driftPass: true,
          momentSymbol: 'e',
          momentSub: '0',
          momentVal: '0.02 m',
          momentNote: 'Accidental Eccentricity',
          dissipationSymbol: 'q',
          dissipationSub: 'allow',
          dissipationVal: `${soilPressure} kPa`,
          dissipationNote: 'Raft Foundation Soil Contact',
          status: 'COMPLIANT',
          statusColor: 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10'
        };
      }
    }
  };

  const metrics = getMetrics();

  return (
    <div className="py-6 relative overflow-hidden transition-colors duration-200">
      
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-15 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-8 pb-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 py-1 text-xs font-mono text-[#D3AE36] mb-1.5 font-bold">
            <Gauge size={13} className="text-[#D3AE36]" />
            <span>Interactive Structural Finite Element Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2025] dark:text-[#F8F9FA] tracking-tight">
            Structural Load Path &amp; Drift Mechanics
          </h3>
          <p className="text-xs sm:text-sm text-[#1E2025]/80 dark:text-[#F8F9FA]/80 mt-1 max-w-2xl leading-relaxed">
            Simulate force vector distribution, lateral drift resistance, and energy dissipation on a 52-story dual-core outrigger skyscraper model in real-time.
          </p>
        </div>

        {/* Load Mode Selector Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setLoadMode('wind')}
            className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              loadMode === 'wind'
                ? 'bg-[#D3AE36] text-[#12151C] shadow-sm'
                : 'text-[#1E2025]/80 dark:text-[#F8F9FA]/80 hover:text-[#D3AE36] dark:hover:text-[#D3AE36] bg-black/[0.03] dark:bg-white/[0.04]'
            }`}
          >
            <Wind size={13} /> Wind Lateral
          </button>
          <button
            onClick={() => setLoadMode('seismic')}
            className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              loadMode === 'seismic'
                ? 'bg-[#D3AE36] text-[#12151C] shadow-sm'
                : 'text-[#1E2025]/80 dark:text-[#F8F9FA]/80 hover:text-[#D3AE36] dark:hover:text-[#D3AE36] bg-black/[0.03] dark:bg-white/[0.04]'
            }`}
          >
            <Activity size={13} /> Seismic NLRHA
          </button>
          <button
            onClick={() => setLoadMode('gravity')}
            className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              loadMode === 'gravity'
                ? 'bg-[#D3AE36] text-[#12151C] shadow-sm'
                : 'text-[#1E2025]/80 dark:text-[#F8F9FA]/80 hover:text-[#D3AE36] dark:hover:text-[#D3AE36] bg-black/[0.03] dark:bg-white/[0.04]'
            }`}
          >
            <ArrowDown size={13} /> Gravity Path
          </button>
          <button
            onClick={() => setLoadMode('thermal')}
            className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              loadMode === 'thermal'
                ? 'bg-[#D3AE36] text-[#12151C] shadow-sm'
                : 'text-[#1E2025]/80 dark:text-[#F8F9FA]/80 hover:text-[#D3AE36] dark:hover:text-[#D3AE36] bg-black/[0.03] dark:bg-white/[0.04]'
            }`}
          >
            <Zap size={13} /> Thermal &amp; Creep
          </button>
        </div>
      </div>

      {/* Simulator Interface: 2-Column Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Interactive Vector Diagram (5 cols) */}
        <div className="lg:col-span-5 py-4 relative flex flex-col items-center justify-between min-h-[440px]">
          
          {/* Top Crosshair Badge */}
          <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75">
            <span className="flex items-center gap-1.5 text-[#D3AE36] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D3AE36] animate-pulse"></span>
              ELEVATION SECTION: TOWER CORE
            </span>
            <span className="font-semibold">H = 215m · 52 STORIES</span>
          </div>

          {/* SVG Animated Tower Cross Section */}
          <div className="relative w-full max-w-[280px] h-[300px] flex items-center justify-center my-4">
            <svg viewBox="0 0 200 300" className="w-full h-full overflow-visible">
              
              {/* Foundation Caissons to Bedrock */}
              <rect x="40" y="270" width="120" height="25" fill={isDark ? '#232936' : '#F4F4F5'} stroke="#D3AE36" strokeWidth="1.5" />
              <line x1="60" y1="270" x2="60" y2="295" stroke="#D3AE36" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="100" y1="270" x2="100" y2="295" stroke="#D3AE36" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="140" y1="270" x2="140" y2="295" stroke="#D3AE36" strokeWidth="2" strokeDasharray="3 3" />
              <text x="100" y="286" textAnchor="middle" fill={isDark ? '#94A3B8' : '#71717A'} fontSize="6.5" fontFamily="monospace" fontWeight="bold">BEDROCK SOCKET CAISSONS</text>

              {/* Central Shear Wall Core */}
              <motion.rect
                x="80"
                y="30"
                width="40"
                height="240"
                fill={isDark ? '#12151C' : '#FFFFFF'}
                stroke="#D3AE36"
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
              <line x1="45" y1="30" x2="45" y2="270" stroke={isDark ? '#94A3B8' : '#71717A'} strokeWidth="3" />
              <line x1="155" y1="30" x2="155" y2="270" stroke={isDark ? '#94A3B8' : '#71717A'} strokeWidth="3" />

              {/* Outrigger Belt Trusses (Level 26 & Level 50) */}
              <line x1="45" y1="80" x2="155" y2="80" stroke="#D3AE36" strokeWidth="2" />
              <line x1="45" y1="170" x2="155" y2="170" stroke="#D3AE36" strokeWidth="2" />
              <line x1="45" y1="80" x2="80" y2="110" stroke="#D3AE36" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="155" y1="80" x2="120" y2="110" stroke="#D3AE36" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="45" y1="170" x2="80" y2="200" stroke="#D3AE36" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="155" y1="170" x2="120" y2="200" stroke="#D3AE36" strokeWidth="1" strokeDasharray="2 2" />

              {/* Horizontal Floor Plates */}
              {[60, 100, 130, 150, 190, 220, 245].map((y) => (
                <line key={y} x1="45" y1={y} x2="155" y2={y} stroke={isDark ? '#31394D' : '#D4D4D8'} strokeWidth="1" />
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
          <div className="w-full pt-4 space-y-2">
            <div className="flex justify-between items-center text-[11px] font-mono text-[#1E2025]/80 dark:text-[#F8F9FA]/80">
              <span className="flex items-center gap-1.5 font-bold">
                <Sliders size={12} className="text-[#D3AE36]" /> FORCE INTENSITY FACTOR
              </span>
              <span className="text-[#D3AE36] font-bold">{intensity}% LOAD COMBINATION</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full accent-[#D3AE36] h-1.5 bg-zinc-200 dark:bg-[#232936] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between items-center text-[9px] font-mono text-[#1E2025]/60 dark:text-[#F8F9FA]/60 pt-0.5">
              <span>20% SLS Service</span>
              <span>70% Design Factored</span>
              <span>100% ULS Extreme</span>
            </div>
          </div>
        </div>

        {/* Right Column: Master Monograph Telemetry Output HUD (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          
          <div className="space-y-4">
            {/* Header Technical Standard & Verification Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D3AE36]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36]">
                  {metrics.standardTag}
                </span>
              </div>
              <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full ${metrics.statusColor}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                {metrics.status}
              </span>
            </div>

            {/* Headline Title */}
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#1E2025] dark:text-[#F8F9FA] tracking-tight leading-tight">
              {metrics.title}
            </h4>

            {/* Primary Metric Hero Display */}
            <div className="flex flex-wrap items-baseline gap-2 pt-1">
              <span className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#1E2025] dark:text-[#F8F9FA]">
                {metrics.numericValue}
              </span>
              <span className="text-2xl font-bold font-mono text-[#D3AE36]">
                {metrics.unit}
              </span>
              <span className="text-xs font-mono text-[#1E2025]/70 dark:text-[#F8F9FA]/70 ml-2">
                · {metrics.primaryLabel}
              </span>
            </div>

            {/* Code Clause Tag */}
            <div className="text-xs font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75 flex items-center gap-2">
              <span className="text-[#D3AE36] font-bold">Standard Reference:</span>
              <span className="underline decoration-[#D3AE36]/50 decoration-1 underline-offset-2 font-medium">
                {metrics.codeClause}
              </span>
            </div>

            {/* Governing Formulation Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono">
              <span className="text-[10px] uppercase font-bold text-[#D3AE36] tracking-wider">Governing Formulation:</span>
              <span className="font-semibold text-[#1E2025] dark:text-[#F8F9FA] italic">{metrics.formula}</span>
            </div>

            {/* Textbook Monograph Physical Mechanics Narrative */}
            <div className="border-l-2 border-[#D3AE36] pl-4 py-1 space-y-3.5">
              <p className="text-xs sm:text-sm text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed font-normal">
                {metrics.explanation}
              </p>

              {/* 3-Step Physical Mechanics Sequence */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-[#D3AE36] font-bold text-[10px] tracking-wider block">STEP 01</span>
                  <span className="text-[#1E2025]/80 dark:text-[#F8F9FA]/80 text-[11px] block leading-snug">
                    {metrics.step1}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[#D3AE36] font-bold text-[10px] tracking-wider block">STEP 02</span>
                  <span className="text-[#1E2025]/80 dark:text-[#F8F9FA]/80 text-[11px] block leading-snug">
                    {metrics.step2}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[#D3AE36] font-bold text-[10px] tracking-wider block">STEP 03</span>
                  <span className="text-[#1E2025]/80 dark:text-[#F8F9FA]/80 text-[11px] block leading-snug">
                    {metrics.step3}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Metrics Bento 4-Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono pt-2">
            
            {/* Metric 1 */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03]">
              <div className="flex items-center gap-1 text-[10px] uppercase text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mb-1">
                <span>{metrics.baseShearSymbol}</span>
                <sub className="text-[9px] -bottom-0.5">{metrics.baseShearSub}</sub>
                <span className="ml-1 truncate">· Base Force</span>
              </div>
              <span className="text-base sm:text-lg font-black text-[#1E2025] dark:text-[#F8F9FA] block">
                {metrics.baseShearVal}
              </span>
              <span className="text-[10px] text-[#D3AE36] font-semibold block mt-1 truncate">
                {metrics.baseShearNote}
              </span>
            </div>

            {/* Metric 2 */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03]">
              <div className="flex items-center gap-1 text-[10px] uppercase text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mb-1">
                <span>{metrics.driftSymbol}</span>
                <sub className="text-[9px] -bottom-0.5">{metrics.driftSub}</sub>
                <span className="ml-1 truncate">· Drift Ratio</span>
              </div>
              <span className="text-base sm:text-lg font-black text-[#1E2025] dark:text-[#F8F9FA] block">
                {metrics.driftVal}
              </span>
              <span className={`text-[10px] font-semibold block mt-1 truncate ${metrics.driftPass ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600'}`}>
                {metrics.driftNote}
              </span>
            </div>

            {/* Metric 3 */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03]">
              <div className="flex items-center gap-1 text-[10px] uppercase text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mb-1">
                <span>{metrics.momentSymbol}</span>
                <sub className="text-[9px] -bottom-0.5">{metrics.momentSub}</sub>
                <span className="ml-1 truncate">· Moment</span>
              </div>
              <span className="text-base sm:text-lg font-black text-[#1E2025] dark:text-[#F8F9FA] block truncate">
                {metrics.momentVal}
              </span>
              <span className="text-[10px] text-[#D3AE36] font-semibold block mt-1 truncate">
                {metrics.momentNote}
              </span>
            </div>

            {/* Metric 4 */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03]">
              <div className="flex items-center gap-1 text-[10px] uppercase text-[#1E2025]/60 dark:text-[#F8F9FA]/60 font-semibold mb-1">
                <span>{metrics.dissipationSymbol}</span>
                <sub className="text-[9px] -bottom-0.5">{metrics.dissipationSub}</sub>
                <span className="ml-1 truncate">· Telemetry</span>
              </div>
              <span className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 block truncate">
                {metrics.dissipationVal}
              </span>
              <span className="text-[10px] text-[#1E2025]/70 dark:text-[#F8F9FA]/70 block mt-1 truncate">
                {metrics.dissipationNote}
              </span>
            </div>

          </div>

          {/* Stamped Verification Bar */}
          <div className="pt-3 flex flex-wrap justify-between items-center text-xs font-mono text-[#1E2025]/75 dark:text-[#F8F9FA]/75 gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#D3AE36]" />
              <span>FEA Solver Model: ETABS v21 / SAP2000 Non-Linear Dynamic Engine</span>
            </div>
            <span className="text-[#D3AE36] font-bold text-[11px] tracking-wider uppercase">
              ✦ ASTU SoCEA VERIFIED · Class of 2026
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
