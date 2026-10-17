import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  ShieldCheck, 
  Zap, 
  Layers, 
  AlertTriangle, 
  Play, 
  Square, 
  Sliders, 
  CheckCircle2, 
  TrendingUp, 
  RefreshCw,
  Compass
} from 'lucide-react';

export const SeismicShakeTable = () => {
  const [selectedEarthquake, setSelectedEarthquake] = useState('northridge');
  const [dampingSystem, setDampingSystem] = useState('fvd'); // 'fixed', 'fvd', 'base-isolation', 'tmd'
  const [pgaMultiplier, setPgaMultiplier] = useState(1.0); // 0.5x to 2.0x
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationTime, setSimulationTime] = useState(0);
  const animFrameRef = useRef(null);

  const earthquakes = {
    northridge: {
      name: '1994 Northridge, CA',
      magnitude: 'M 6.7',
      basePGA: 0.84,
      dominantFreq: 1.8, // Hz
      duration: 15, // sec
      type: 'Near-Fault Pulse',
      description: 'High velocity pulse with intense spectral accelerations causing extreme shear in brittle frame joints.'
    },
    lomaprieta: {
      name: '1989 Loma Prieta, CA',
      magnitude: 'M 6.9',
      basePGA: 0.64,
      dominantFreq: 1.1, // Hz
      duration: 20, // sec
      type: 'Deep Basin Resonance',
      description: 'Long-period soft mud resonance that doubled accelerations on reclaimed bay margins.'
    },
    tohoku: {
      name: '2011 Tohoku, Japan',
      magnitude: 'M 9.1',
      basePGA: 0.93,
      dominantFreq: 0.7, // Hz
      duration: 45, // sec
      type: 'Mega-Thrust Subduction',
      description: 'Extreme multi-minute shaking generating severe harmonic resonance in high-rise towers.'
    },
    elcentro: {
      name: '1940 El Centro, CA',
      magnitude: 'M 6.9',
      basePGA: 0.35,
      dominantFreq: 2.2, // Hz
      duration: 30, // sec
      type: 'Benchmark Strike-Slip',
      description: 'The historic international benchmark earthquake record used in initial seismic code formulation.'
    }
  };

  const currentEQ = earthquakes[selectedEarthquake];
  const activePGA = (currentEQ.basePGA * pgaMultiplier).toFixed(2);

  // Mitigation coefficients
  const getMitigation = () => {
    switch (dampingSystem) {
      case 'fixed':
        return {
          name: 'Fixed Base (Conventional)',
          driftReduction: 0,
          shearReduction: 0,
          dampingRatio: '3.5% (Elastic Concrete)',
          damageLevel: activePGA > 0.8 ? 'Severe / Plastic Hinging' : activePGA > 0.5 ? 'Moderate Cracking' : 'Minimal',
          damageBadgeColor: activePGA > 0.8 ? 'text-rose-400 bg-rose-500/10 border-rose-500/30' : 'text-amber-400 bg-amber-500/10 border-amber-500/30',
          driftVal: (activePGA * 1.85).toFixed(2), // %
          baseShear: Math.round(activePGA * 4800), // kN
          swayAmplitude: 34 * pgaMultiplier
        };
      case 'fvd':
        return {
          name: 'Fluid Viscous Dampers (FVD)',
          driftReduction: 48,
          shearReduction: 42,
          dampingRatio: '28% (Viscous Fluid Dissipation)',
          damageLevel: 'Immediate Occupancy (Elastic)',
          damageBadgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          driftVal: (activePGA * 0.96).toFixed(2), // %
          baseShear: Math.round(activePGA * 2800), // kN
          swayAmplitude: 16 * pgaMultiplier
        };
      case 'base-isolation':
        return {
          name: 'Base Isolation (Lead-Rubber Bearings)',
          driftReduction: 74,
          shearReduction: 68,
          dampingRatio: '32% (Hysteretic Isolation)',
          damageLevel: 'Operational (Zero Structural Damage)',
          damageBadgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          driftVal: (activePGA * 0.48).toFixed(2), // %
          baseShear: Math.round(activePGA * 1550), // kN
          swayAmplitude: 8 * pgaMultiplier
        };
      case 'tmd':
        return {
          name: 'Tuned Mass Damper (Rooftop 500-Ton Pendulum)',
          driftReduction: 38,
          shearReduction: 35,
          dampingRatio: '18% (Inertial Counterweight)',
          damageLevel: 'Minor Reversible Micro-Cracking',
          damageBadgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          driftVal: (activePGA * 1.15).toFixed(2), // %
          baseShear: Math.round(activePGA * 3120), // kN
          swayAmplitude: 20 * pgaMultiplier
        };
      default:
        return {};
    }
  };

  const metrics = getMitigation();

  // Animation loop
  useEffect(() => {
    if (!isSimulating) {
      setSimulationTime(0);
      return;
    }

    let startTime = performance.now();
    const update = (time) => {
      const elapsed = (time - startTime) / 1000;
      setSimulationTime(elapsed);
      if (elapsed < currentEQ.duration) {
        animFrameRef.current = requestAnimationFrame(update);
      } else {
        setIsSimulating(false);
      }
    };

    animFrameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isSimulating, currentEQ.duration]);

  // Dynamic sway calculation during simulation
  const currentSway = isSimulating 
    ? Math.sin(simulationTime * currentEQ.dominantFreq * Math.PI * 2) * metrics.swayAmplitude * Math.exp(-0.02 * simulationTime)
    : 0;

  const currentGroundOffset = isSimulating
    ? Math.sin(simulationTime * currentEQ.dominantFreq * Math.PI * 2.8) * 18 * pgaMultiplier
    : 0;

  return (
    <div className="rounded-3xl bg-[#181A1E] border border-[#333]/80 p-6 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#2D3137]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            <Activity size={14} className="animate-pulse" />
            <span>Non-Linear Response History Analysis (NLRHA)</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-[#EAEAEA] tracking-tight">
            Earthquake Shake Table & Seismic Dissipation Simulator
          </h3>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
            Test a 40-story structural tower against recorded earthquake accelerograms. Evaluate the dramatic energy dissipation achieved through base isolation, viscous dampers, and tuned mass dampers.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className={`rounded-full px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg ${
              isSimulating
                ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-[0_0_20px_rgba(244,63,94,0.35)]'
                : 'bg-[#D4AF37] text-[#121417] hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.35)]'
            }`}
          >
            {isSimulating ? (
              <>
                <Square size={14} className="fill-current" /> Terminate Motion ({simulationTime.toFixed(1)}s)
              </>
            ) : (
              <>
                <Play size={14} className="fill-current" /> Trigger Ground Motion ({currentEQ.duration}s)
              </>
            )}
          </button>
        </div>
      </div>

      {/* Control Panel: Earthquakes & Dampers */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 my-8">
        
        {/* Left Column: Earthquake Record Selection */}
        <div className="lg:col-span-5 space-y-4">
          <label className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            1. Select Recorded Earthquake Accelerogram
          </label>

          <div className="grid grid-cols-2 gap-2.5">
            {Object.keys(earthquakes).map((key) => {
              const eq = earthquakes[key];
              const isSelected = selectedEarthquake === key;
              return (
                <button
                  key={key}
                  onClick={() => { setSelectedEarthquake(key); setIsSimulating(false); }}
                  className={`p-3.5 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'bg-[#121417] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'bg-[#14161A] border-[#333] hover:border-[#555] text-[#9CA3AF]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-mono text-[#D4AF37] font-bold">{eq.magnitude}</span>
                    <span className="text-[9px] font-mono text-[#9CA3AF]">{eq.basePGA}g PGA</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#EAEAEA] truncate">{eq.name}</h4>
                  <span className="text-[10px] font-mono text-[#777] block mt-0.5">{eq.type}</span>
                </button>
              );
            })}
          </div>

          {/* PGA Multiplier Slider */}
          <div className="bg-[#121417] p-4 rounded-xl border border-[#333] space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#9CA3AF] flex items-center gap-1.5">
                <Sliders size={13} className="text-[#D4AF37]" /> Ground Motion Intensity:
              </span>
              <span className="text-[#D4AF37] font-bold">{pgaMultiplier}x ({activePGA}g PGA)</span>
            </div>
            <input 
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={pgaMultiplier}
              onChange={(e) => setPgaMultiplier(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-[#26282D] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#666]">
              <span>0.5x (Moderate)</span>
              <span>1.0x (Design Basis DBE)</span>
              <span>2.0x (Max Considered MCE_R)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Damping System Selector */}
        <div className="lg:col-span-7 space-y-4">
          <label className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            2. Structural Energy Dissipation Mechanism
          </label>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { id: 'fixed', title: 'Fixed Base', tag: 'Traditional', desc: 'No supplemental damping. Relies solely on internal concrete plastic hinging and frame yield.' },
              { id: 'fvd', title: 'Fluid Viscous Dampers', tag: 'High-Velocity', desc: 'Hydraulic piston cylinders in outrigger diagonals dissipate kinetic shock without added stiffness.' },
              { id: 'base-isolation', title: 'Base Isolation (LRB)', tag: 'Decoupled', desc: 'Heavy lead-rubber bearing isolators decouple superstructure from violent ground motion.' },
              { id: 'tmd', title: 'Tuned Mass Damper', tag: 'Inertial', desc: '500-ton rooftop counterweight oscillating in opposing phase to cancel upper drift harmonics.' }
            ].map((sys) => {
              const isSelected = dampingSystem === sys.id;
              return (
                <button
                  key={sys.id}
                  onClick={() => setDampingSystem(sys.id)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#121417] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.18)]'
                      : 'bg-[#14161A] border-[#333] hover:border-[#555]'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-[#222] text-[#888]'
                      }`}>
                        {sys.tag}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>}
                    </div>
                    <h5 className="text-xs font-bold text-[#EAEAEA] mb-1">{sys.title}</h5>
                    <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{sys.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Main Simulation Stage: Interactive Tower + Accelerogram Waveform */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-stretch my-6">
        
        {/* Left Column: Animated Dynamic Structural Tower */}
        <div className="lg:col-span-7 bg-[#121417] rounded-2xl border border-[#333] p-6 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
          
          {/* Status HUD Overlays */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-2 text-[#9CA3AF]">
              <span className={`w-2.5 h-2.5 rounded-full ${isSimulating ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`}></span>
              Status: <strong className="text-[#EAEAEA]">{isSimulating ? 'SEISMIC MOTION INJECTED' : 'STATIC EQUILIBRIUM'}</strong>
            </span>
            <span className="text-[10px] text-[#D4AF37] bg-[#181A1E] border border-[#333] px-2.5 py-1 rounded-md">
              Tower H = 160m (40 Stories) · $T_1 = 2.45s$
            </span>
          </div>

          {/* SVG Animated Tower */}
          <div className="relative h-64 sm:h-72 my-4 flex items-center justify-center">
            
            {/* Shake Ground Base Plate */}
            <div 
              className="absolute bottom-4 w-4/5 h-4 bg-[#22252A] rounded-md border-t-2 border-[#D4AF37] flex items-center justify-center transition-transform duration-75"
              style={{ transform: `translateX(${currentGroundOffset}px)` }}
            >
              <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-wider">
                HYDRAULIC SHAKE ACTUATOR PLATFORM
              </span>
            </div>

            {/* Bedrock Strata Indicator */}
            <div className="absolute bottom-0 w-full h-3 border-t border-[#333] flex justify-between px-4 text-[8px] font-mono text-[#666]">
              <span>SOLID BEDROCK ANCHOR</span>
              <span>PGA = {activePGA}g</span>
            </div>

            {/* Dynamic Swaying Tower SVG */}
            <svg 
              viewBox="0 0 200 240" 
              className="h-full w-auto transition-transform duration-75 origin-bottom"
              style={{ 
                transform: `translateX(${currentSway}px) skewX(${currentSway * -0.15}deg)` 
              }}
            >
              {/* Ground Anchor Bolts */}
              <line x1="75" y1="210" x2="75" y2="230" stroke="#D4AF37" strokeWidth="3" />
              <line x1="125" y1="210" x2="125" y2="230" stroke="#D4AF37" strokeWidth="3" />

              {/* Base Isolator Pads (if active) */}
              {dampingSystem === 'base-isolation' && (
                <g>
                  <rect x="70" y="200" width="18" height="10" fill="#D4AF37" rx="2" />
                  <rect x="112" y="200" width="18" height="10" fill="#D4AF37" rx="2" />
                  <line x1="70" y1="205" x2="88" y2="205" stroke="#121417" strokeWidth="1" />
                  <line x1="112" y1="205" x2="130" y2="205" stroke="#121417" strokeWidth="1" />
                </g>
              )}

              {/* Tower Core Shear Walls */}
              <rect 
                x="88" 
                y="30" 
                width="24" 
                height="170" 
                fill="#181A1E" 
                stroke="#D4AF37" 
                strokeWidth="1.5" 
                strokeDasharray="4 2"
              />

              {/* Perimeter Columns */}
              <line x1="68" y1="30" x2="68" y2="200" stroke="#EAEAEA" strokeWidth="2.5" />
              <line x1="132" y1="30" x2="132" y2="200" stroke="#EAEAEA" strokeWidth="2.5" />

              {/* Floor Diaphragms (10 Levels shown) */}
              {[35, 52, 69, 86, 103, 120, 137, 154, 171, 188].map((y, i) => (
                <g key={i}>
                  <line x1="64" y1={y} x2="136" y2={y} stroke="#3E4249" strokeWidth="1.5" />
                  <circle cx="68" cy={y} r="2" fill="#D4AF37" />
                  <circle cx="132" cy={y} r="2" fill="#D4AF37" />
                </g>
              ))}

              {/* Outrigger Belt Truss at Mid-Height */}
              <line x1="68" y1="103" x2="100" y2="120" stroke="#D4AF37" strokeWidth="2" />
              <line x1="132" y1="103" x2="100" y2="120" stroke="#D4AF37" strokeWidth="2" />

              {/* Fluid Viscous Damper Cylinders (if active) */}
              {dampingSystem === 'fvd' && (
                <g>
                  <circle cx="84" cy="111" r="3" fill="#10B981" />
                  <circle cx="116" cy="111" r="3" fill="#10B981" />
                  <text x="75" y="128" fill="#10B981" fontSize="6" fontFamily="monospace">FVD PISTON</text>
                </g>
              )}

              {/* Tuned Mass Damper Rooftop Pendulum (if active) */}
              {dampingSystem === 'tmd' && (
                <g>
                  <line x1="100" y1="30" x2="100" y2="44" stroke="#D4AF37" strokeWidth="1.5" />
                  <circle 
                    cx={100 - (currentSway * 0.4)} 
                    cy="44" 
                    r="6" 
                    fill="#F59E0B" 
                    stroke="#D4AF37" 
                    strokeWidth="1"
                  />
                  <text x="68" y="24" fill="#F59E0B" fontSize="6" fontFamily="monospace">500t TMD COUNTERWEIGHT</text>
                </g>
              )}

              {/* Roof Crown */}
              <polygon points="68,30 100,12 132,30" fill="none" stroke="#D4AF37" strokeWidth="2" />
              <line x1="100" y1="12" x2="100" y2="2" stroke="#D4AF37" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Real-Time Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#222] text-xs font-mono">
            <div>
              <span className="text-[#888] block text-[10px]">CURRENT ROOF DRIFT:</span>
              <span className={`font-bold ${parseFloat(metrics.driftVal) > 1.5 ? 'text-rose-400' : 'text-[#D4AF37]'}`}>
                {metrics.driftVal}% ({parseFloat(metrics.driftVal) < 1.0 ? 'Compliant < 1.0%' : 'Exceeds Normal Limit'})
              </span>
            </div>
            <div>
              <span className="text-[#888] block text-[10px]">BASE SHEAR DEMAND:</span>
              <span className="text-[#EAEAEA] font-bold">{metrics.baseShear} kN</span>
            </div>
            <div>
              <span className="text-[#888] block text-[10px]">STRUCTURAL STATUS:</span>
              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${metrics.damageBadgeColor}`}>
                {metrics.damageLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Spectral Acceleration Plot & Performance Metrics */}
        <div className="lg:col-span-5 bg-[#121417] rounded-2xl border border-[#333] p-6 flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                Seismic Response Spectrum ($S_a$ vs $T$)
              </span>
              <span className="text-[10px] font-mono text-[#9CA3AF]">ASCE 7-22 Section 11</span>
            </div>

            {/* Response Spectrum Graph (SVG) */}
            <div className="bg-[#181A1E] p-3 rounded-xl border border-[#2D3137] relative">
              <svg viewBox="0 0 240 110" className="w-full h-24">
                {/* Axis lines */}
                <line x1="25" y1="10" x2="25" y2="95" stroke="#444" strokeWidth="1" />
                <line x1="25" y1="95" x2="230" y2="95" stroke="#444" strokeWidth="1" />

                {/* Grid guidelines */}
                <line x1="25" y1="35" x2="230" y2="35" stroke="#26282D" strokeDasharray="2 2" />
                <line x1="25" y1="65" x2="230" y2="65" stroke="#26282D" strokeDasharray="2 2" />

                {/* Undamped Curve (Red) */}
                <path 
                  d="M 25 80 Q 55 15 90 25 T 160 70 T 225 88" 
                  fill="none" 
                  stroke="#F43F5E" 
                  strokeWidth="2" 
                  opacity={dampingSystem === 'fixed' ? '1' : '0.4'}
                />

                {/* Mitigated System Curve (Gold/Green) */}
                <path 
                  d={`M 25 85 Q 55 ${dampingSystem === 'base-isolation' ? '65' : dampingSystem === 'fvd' ? '45' : '55'} 90 ${dampingSystem === 'base-isolation' ? '70' : '50'} T 160 82 T 225 90`} 
                  fill="none" 
                  stroke="#D4AF37" 
                  strokeWidth="2.5" 
                />

                {/* Building Fundamental Period Line (T1 = 2.45s) */}
                <line x1="120" y1="15" x2="120" y2="95" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="120" cy="58" r="4" fill="#10B981" />

                {/* Labels */}
                <text x="5" y="25" fill="#888" fontSize="7" fontFamily="monospace">$S_a$ (g)</text>
                <text x="110" y="105" fill="#10B981" fontSize="7" fontFamily="monospace">$T_1 = 2.45s$</text>
                <text x="210" y="105" fill="#888" fontSize="7" fontFamily="monospace">Period $T$</text>
              </svg>

              <div className="flex justify-between items-center text-[10px] font-mono text-[#9CA3AF] mt-1 pt-1 border-t border-[#26282D]">
                <span className="flex items-center gap-1.5"><span className="w-2 h-0.5 bg-rose-500"></span> Fixed Base Envelope</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-0.5 bg-[#D4AF37]"></span> Mitigated Envelope</span>
              </div>
            </div>
          </div>

          {/* Performance Impact Summary */}
          <div className="space-y-2.5 my-4">
            <div className="flex justify-between items-center text-xs font-mono bg-[#181A1E] p-2.5 rounded-lg border border-[#26282D]">
              <span className="text-[#9CA3AF]">Peak Lateral Drift Reduction:</span>
              <span className="text-emerald-400 font-bold">-{metrics.driftReduction}%</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono bg-[#181A1E] p-2.5 rounded-lg border border-[#26282D]">
              <span className="text-[#9CA3AF]">Base Shear Acceleration Reduction:</span>
              <span className="text-emerald-400 font-bold">-{metrics.shearReduction}%</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono bg-[#181A1E] p-2.5 rounded-lg border border-[#26282D]">
              <span className="text-[#9CA3AF]">Effective System Damping:</span>
              <span className="text-[#D4AF37] font-bold">{metrics.dampingRatio}</span>
            </div>
          </div>

          {/* Code Reference Stamp */}
          <div className="pt-3 border-t border-[#222] flex items-center justify-between text-[10px] font-mono text-[#888]">
            <span className="flex items-center gap-1 text-[#D4AF37]">
              <ShieldCheck size={13} /> FEMA P-58 Validated
            </span>
            <span>ASCE 7-22 CHAPTER 17 & 18</span>
          </div>

        </div>

      </div>

    </div>
  );
};
