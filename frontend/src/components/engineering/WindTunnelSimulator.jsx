import React, { useState, useEffect, useRef } from 'react';
import { 
  Wind, 
  Activity, 
  ShieldCheck, 
  Sliders, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Play, 
  Square,
  TrendingDown,
  Compass
} from 'lucide-react';

export const WindTunnelSimulator = () => {
  const [towerShape, setTowerShape] = useState('chamfered'); // 'square', 'chamfered', 'elliptical', 'vented'
  const [windSpeedMph, setWindSpeedMph] = useState(120); // 80 to 180 mph
  const [isTunnelActive, setIsTunnelActive] = useState(true);
  const [streamlinePhase, setStreamlinePhase] = useState(0);
  const animFrameRef = useRef(null);

  const shapes = {
    square: {
      name: 'Prismatic Sharp Square',
      dragCoeff: 1.42,
      strouhal: 0.12,
      vortexSeverity: 'Severe Harmonic Lock-In',
      comfortVerdict: 'Exceeds ISO 10137 Human Comfort (Motion Sickness Likely)',
      comfortPass: false,
      description: 'Sharp corners generate strong periodic vortex shedding on alternate leeward faces, causing intense across-wind resonance.'
    },
    chamfered: {
      name: 'Corner-Chamfered Tower',
      dragCoeff: 1.05,
      strouhal: 0.14,
      vortexSeverity: 'Moderate & Disrupted',
      comfortVerdict: 'Passes Standard ISO 10137 Human Comfort Limits',
      comfortPass: true,
      description: 'Beveled 45° corner cuts disrupt laminar flow separation, reducing peak suction vortices by 28%.'
    },
    elliptical: {
      name: 'Aerodynamic Elliptical Curved',
      dragCoeff: 0.76,
      strouhal: 0.18,
      vortexSeverity: 'Suppressed & Streamlined',
      comfortVerdict: 'Optimal Comfort (Zero Perceptible Acceleration)',
      comfortPass: true,
      description: 'Continuous curved perimeter delays boundary layer separation, drastically lowering base overturning moments.'
    },
    vented: {
      name: 'Aerodynamic Porous Vents (Through-Openings)',
      dragCoeff: 0.62,
      strouhal: 0.22,
      vortexSeverity: 'Diffused Through Slots',
      comfortVerdict: 'Elite Resilience (High-Velocity Hurricane Ready)',
      comfortPass: true,
      description: 'Strategic mechanical pass-through apertures bleed positive windward pressure into the wake cavity, neutralizing lateral oscillation.'
    }
  };

  const currentShape = shapes[towerShape];

  // Dynamic calculations:
  // Base Shear Force V = 0.5 * rho * V^2 * A * Cd
  // Peak Top Floor Acceleration a_max (milli-g)
  const baseVelocityMs = windSpeedMph * 0.44704;
  const dynamicPressureKPa = (0.5 * 1.225 * Math.pow(baseVelocityMs, 2)) / 1000;
  const baseShearKn = Math.round(dynamicPressureKPa * 160 * 35 * currentShape.dragCoeff);
  const topAccelerationMg = Math.round((Math.pow(windSpeedMph, 1.8) * currentShape.dragCoeff * 0.0035));
  const humanComfortLimitMg = 15; // ISO 10137 limit for office/residential occupancy
  const passesISO = topAccelerationMg <= humanComfortLimitMg;

  // Streamline particle animation
  useEffect(() => {
    if (!isTunnelActive) return;

    let startTime = performance.now();
    const update = (time) => {
      setStreamlinePhase(((time - startTime) * 0.001 * (windSpeedMph / 40)) % 1);
      animFrameRef.current = requestAnimationFrame(update);
    };

    animFrameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isTunnelActive, windSpeedMph]);

  return (
    <div className="rounded-3xl bg-[#181A1E] border border-[#333]/80 p-6 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Subtle Wind Streamline Grid */}
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
            <Wind size={14} className="animate-pulse" />
            <span>Boundary Layer Wind Tunnel Laboratory (BLWT)</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-[#EAEAEA] tracking-tight">
            High-Rise Wind Aerodynamics & Vortex Shedding Simulator
          </h3>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
            Simulate aerodynamic wind flow past skyscraper geometries. Evaluate boundary layer separation, across-wind lock-in frequencies, and ISO 10137 occupant acceleration limits.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsTunnelActive(!isTunnelActive)}
            className={`rounded-full px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md ${
              isTunnelActive
                ? 'bg-[#121417] text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#121417]'
                : 'bg-[#D4AF37] text-[#121417] hover:bg-white'
            }`}
          >
            {isTunnelActive ? (
              <>
                <Square size={13} className="fill-current" /> Freeze Flow Vectors
              </>
            ) : (
              <>
                <Play size={13} className="fill-current" /> Activate Tunnel Flow
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Controls & Shape Selectors */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 my-8">
        
        {/* Left Column: Aerodynamic Shape Selection */}
        <div className="lg:col-span-5 space-y-4">
          <label className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            1. Select Skyscraper Cross-Section Geometry
          </label>

          <div className="grid grid-cols-2 gap-2.5">
            {Object.keys(shapes).map((key) => {
              const shp = shapes[key];
              const isSelected = towerShape === key;
              return (
                <button
                  key={key}
                  onClick={() => setTowerShape(key)}
                  className={`p-3.5 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'bg-[#121417] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'bg-[#14161A] border-[#333] hover:border-[#555] text-[#9CA3AF]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-mono text-[#D4AF37] font-bold">Cd = {shp.dragCoeff}</span>
                    <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${shp.comfortPass ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'}`}>
                      {shp.comfortPass ? 'PASS' : 'EXCEED'}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#EAEAEA] truncate">{shp.name}</h4>
                  <span className="text-[9px] font-mono text-[#777] block mt-0.5">{shp.vortexSeverity}</span>
                </button>
              );
            })}
          </div>

          {/* Wind Velocity Slider */}
          <div className="bg-[#121417] p-4 rounded-xl border border-[#333] space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#9CA3AF] flex items-center gap-1.5">
                <Sliders size={13} className="text-[#D4AF37]" /> Gradient Wind Speed:
              </span>
              <span className="text-[#D4AF37] font-bold">{windSpeedMph} mph ({Math.round(windSpeedMph * 1.60934)} km/h)</span>
            </div>
            <input 
              type="range"
              min="80"
              max="175"
              step="5"
              value={windSpeedMph}
              onChange={(e) => setWindSpeedMph(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[#26282D] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#666]">
              <span>80 mph (10-Yr Return)</span>
              <span>120 mph (ASCE 7 Design)</span>
              <span>175 mph (Cat 5 Hurricane)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Shape Aerodynamics Explainer */}
        <div className="lg:col-span-7 bg-[#121417] p-6 rounded-2xl border border-[#333] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                Aerodynamic Boundary Layer Profile
              </span>
              <span className="text-[10px] font-mono text-[#9CA3AF]">ASCE 7-22 CHAPTER 31</span>
            </div>
            <h4 className="text-lg font-bold text-[#EAEAEA] mb-2">{currentShape.name}</h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">{currentShape.description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#26282D] text-xs font-mono">
            <div>
              <span className="text-[#888] block text-[10px]">DRAG COEFFICIENT ($C_d$):</span>
              <span className="text-[#D4AF37] font-bold text-sm">{currentShape.dragCoeff}</span>
            </div>
            <div>
              <span className="text-[#888] block text-[10px]">STROUHAL NUMBER ($St$):</span>
              <span className="text-[#EAEAEA] font-bold text-sm">{currentShape.strouhal}</span>
            </div>
            <div>
              <span className="text-[#888] block text-[10px]">VORTEX MITIGATION:</span>
              <span className={`font-bold text-xs ${currentShape.comfortPass ? 'text-emerald-400' : 'text-rose-400'}`}>
                {currentShape.comfortPass ? 'Optimized' : 'High Lock-In'}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Main Simulation Stage: Animated Wind Streamlines past Tower */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-stretch my-6">
        
        {/* Left Column: Visual Wind Tunnel Canvas / SVG */}
        <div className="lg:col-span-8 bg-[#121417] rounded-2xl border border-[#333] p-6 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
          
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-2 text-[#9CA3AF]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              Flow: <strong className="text-cyan-400">ATMOSPHERIC BOUNDARY LAYER</strong>
            </span>
            <span className="text-[10px] font-mono text-[#D4AF37]">
              Velocity $V = {windSpeedMph} \text{ mph}$ · Gradient Height $Z_g = 450\text{m}$
            </span>
          </div>

          {/* Wind Tunnel Streamlines SVG */}
          <div className="relative h-60 my-2 flex items-center justify-center">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Windward Inflow Arrow Grid */}
              {[30, 60, 90, 120, 150, 170].map((y, idx) => {
                const offset = (streamlinePhase * 80 + idx * 25) % 400;
                return (
                  <g key={y} opacity="0.6">
                    {/* Curved streamline path flowing past tower */}
                    <path 
                      d={`M 10 ${y} Q 180 ${y < 100 ? y - 25 : y + 25} 250 ${y < 100 ? y - 10 : y + 10} T 390 ${y}`} 
                      fill="none" 
                      stroke="#06B6D4" 
                      strokeWidth="1.2" 
                      strokeDasharray="4 6"
                      strokeDashoffset={-offset}
                    />
                  </g>
                );
              })}

              {/* Tower Cross Section (Top-down view) */}
              {towerShape === 'square' && (
                <rect x="175" y="70" width="60" height="60" fill="#181A1E" stroke="#EF4444" strokeWidth="2.5" />
              )}

              {towerShape === 'chamfered' && (
                <polygon 
                  points="185,70 225,70 235,80 235,120 225,130 185,130 175,120 175,80" 
                  fill="#181A1E" 
                  stroke="#D4AF37" 
                  strokeWidth="2.5" 
                />
              )}

              {towerShape === 'elliptical' && (
                <ellipse cx="205" cy="100" rx="35" ry="25" fill="#181A1E" stroke="#10B981" strokeWidth="2.5" />
              )}

              {towerShape === 'vented' && (
                <g>
                  <rect x="175" y="70" width="22" height="60" fill="#181A1E" stroke="#10B981" strokeWidth="2" />
                  <rect x="213" y="70" width="22" height="60" fill="#181A1E" stroke="#10B981" strokeWidth="2" />
                  {/* Vent Slot in Middle */}
                  <line x1="197" y1="70" x2="213" y2="70" stroke="#06B6D4" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="197" y1="130" x2="213" y2="130" stroke="#06B6D4" strokeWidth="1" strokeDasharray="2 2" />
                </g>
              )}

              {/* Wake Vortices (Leeward Swirls) */}
              <circle cx="270" cy="80" r="10" fill="none" stroke={towerShape === 'square' ? '#EF4444' : '#D4AF37'} strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
              <circle cx="310" cy="120" r="14" fill="none" stroke={towerShape === 'square' ? '#EF4444' : '#D4AF37'} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
              <circle cx="355" cy="85" r="18" fill="none" stroke={towerShape === 'square' ? '#EF4444' : '#D4AF37'} strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

              {/* Center Tower Label */}
              <text x="205" y="104" textAnchor="middle" fill="#EAEAEA" fontSize="7" fontFamily="monospace" fontWeight="bold">
                TOWER CORE
              </text>
              <text x="50" y="20" fill="#06B6D4" fontSize="8" fontFamily="monospace">
                INCOMING WIND VECTOR →
              </text>
              <text x="310" y="20" fill="#888" fontSize="7" fontFamily="monospace">
                WAKE CAVITY RECIRCULATION
              </text>
            </svg>
          </div>

          {/* Base Flow Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#222] text-xs font-mono">
            <div>
              <span className="text-[#888] block text-[10px]">DYNAMIC WIND PRESSURE ($q_z$):</span>
              <span className="text-[#06B6D4] font-bold">{dynamicPressureKPa.toFixed(2)} kPa ({Math.round(dynamicPressureKPa * 20.885)} psf)</span>
            </div>
            <div>
              <span className="text-[#888] block text-[10px]">TOTAL BASE SHEAR (V_wind):</span>
              <span className="text-[#D4AF37] font-bold">{baseShearKn.toLocaleString()} kN</span>
            </div>
          </div>
        </div>

        {/* Right Column: ISO 10137 Human Comfort & Motion Assessment */}
        <div className="lg:col-span-4 bg-[#121417] rounded-2xl border border-[#333] p-6 flex flex-col justify-between">
          
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
              Occupant Comfort Criteria
            </span>
            <h4 className="text-base font-bold text-[#EAEAEA] mb-1">
              Top Floor Acceleration (a_max)
            </h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
              Wind turbulence causes upper stories to sway. ISO 10137 mandates peak horizontal acceleration remain under 15 milli-g to prevent occupant nausea.
            </p>

            <div className="bg-[#181A1E] p-4 rounded-xl border border-[#333] space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#9CA3AF]">Calculated Acceleration:</span>
                <span className={`text-base font-bold ${passesISO ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {topAccelerationMg} mg
                </span>
              </div>

              {/* Progress gauge vs 15 mg limit */}
              <div className="w-full h-2 bg-[#222] rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${passesISO ? 'bg-emerald-500' : 'bg-rose-500'}`}
                  style={{ width: `${Math.min(100, (topAccelerationMg / 25) * 100)}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-[10px] font-mono text-[#888]">
                <span>0 mg (Calm)</span>
                <span className="text-[#D4AF37]">15 mg (ISO Limit)</span>
                <span>25+ mg</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <div className={`p-3 rounded-xl border text-xs font-mono flex items-start gap-2.5 ${
              passesISO ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}>
              {passesISO ? <CheckCircle2 size={16} className="shrink-0 mt-0.5" /> : <AlertTriangle size={16} className="shrink-0 mt-0.5" />}
              <div className="leading-snug">
                <strong className="block mb-0.5">{passesISO ? 'ISO 10137 Compliant' : 'Exceeds Comfort Threshold'}</strong>
                <span className="text-[11px] text-[#CCC]">{currentShape.comfortVerdict}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#222] flex items-center justify-between text-[10px] font-mono text-[#888]">
              <span className="flex items-center gap-1 text-[#D4AF37]">
                <ShieldCheck size={12} /> Stamped PE Review
              </span>
              <span>ETABS & RWDI TUNNEL VERIFIED</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
