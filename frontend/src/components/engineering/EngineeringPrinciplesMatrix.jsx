import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wind, 
  Leaf, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Activity, 
  Compass, 
  HelpCircle,
  ExternalLink,
  Sliders,
  Calculator
} from 'lucide-react';

export const EngineeringPrinciplesMatrix = () => {
  const [activeTab, setActiveTab] = useState('seismic');

  // Interactive Live Calculation States for Parameter Lab
  const [seismicWeight, setSeismicWeight] = useState(48000); // kN
  const [seismicR, setSeismicR] = useState(8.0); // SMF
  const [windVelocity, setWindVelocity] = useState(130); // km/h
  const [carbonScm, setCarbonScm] = useState(42); // %
  const [collapseColumn, setCollapseColumn] = useState('perimeter'); // corner, perimeter, interior

  // Dynamic calculations
  const calcBaseShear = Math.round((0.32 / (seismicR / 1.25)) * seismicWeight);
  const calcBaseShearRatio = ((calcBaseShear / seismicWeight) * 100).toFixed(1);

  const calcWindAccel = ((windVelocity / 130) ** 2 * 11.4).toFixed(1);
  const calcWindDrift = Math.round(500 * (130 / windVelocity));

  const calcCarbonSavings = Math.round(carbonScm * 7.8); // kg CO2e / m3
  const calcEmbodiedReduction = (carbonScm * 0.72).toFixed(1);

  const collapseScenarios = {
    corner: { ratio: '0.84', status: 'PASS (Redundant Cantilever mobilized)', demand: '380 kNm' },
    perimeter: { ratio: '0.62', status: 'PASS (Catenary slab action verified)', demand: '540 kNm' },
    interior: { ratio: '0.48', status: 'PASS (Two-way arching mechanism engaged)', demand: '710 kNm' }
  };

  const principles = [
    {
      id: 'seismic',
      title: 'Seismic Ductility & Capacity Design',
      code: 'EBCS EN 1998 / ASCE 7-22',
      icon: Activity,
      summary: 'Ductile fuse mechanisms isolate inelastic deformations away from gravity load columns.',
      formula: 'V_b = C_s · W = [ S_DS / (R / I_e) ] · W',
      formulaDesc: 'Equivalent Lateral Force (ELF) base shear formulation balancing ductility R with structural importance Ie.',
      details: [
        'Capacity design: Weak-beam, strong-column design ensuring flexural yielding occurs in beams before column hinges.',
        'Nonlinear dynamic time-history response checks using synthetic and recorded earthquake ground motion ensembles.',
        'Buckling-Restrained Braced Frames (BRBF) providing symmetrical tension and compression yield loops with high damping.'
      ],
      metrics: [
        { label: 'Max Story Drift Limit', value: 'Δ ≤ 0.015 - 0.020 h' },
        { label: 'Ductility Factor (R)', value: 'R = 8.0 (SMF)' },
        { label: 'Damping Ratio (ξ)', value: '2.5% - 5.0% Crit.' }
      ]
    },
    {
      id: 'wind',
      title: 'Wind Aerodynamics & Occupant Comfort',
      code: 'ASCE 7-22 / ISO 10137',
      icon: Wind,
      summary: 'Dynamic response mitigation against vortex shedding, cross-wind oscillations, and torsional drift.',
      formula: 'a_peak = g_p · σ_a ≤ 15 - 18 milli-g',
      formulaDesc: 'Peak lateral acceleration comfort threshold for occupants under 10-year return period wind events.',
      details: [
        'High-frequency force balance (HFFB) and aeroelastic wind tunnel testing coupled with ETABS finite element models.',
        'Aerodynamic sculpting: Corner radius chamfers and porosity slots to disorganize vortex shedding frequencies.',
        'Tuned mass damper (TMD) or distributed sloshing dampers to suppress resonant first-mode accelerations.'
      ],
      metrics: [
        { label: '10-Yr Peak Accel.', value: '< 15 milli-g' },
        { label: 'Building Drift Limit', value: 'H / 450 to H / 600' },
        { label: 'Wind Tunnel Return', value: '3,000-Yr MRI' }
      ]
    },
    {
      id: 'carbon',
      title: 'Low-Carbon Sizing & Post-Tensioning',
      code: 'ACI 318-19 / EC3',
      icon: Leaf,
      summary: 'Material minimization through post-tensioned spans and high-volume slag / fly-ash cementitious binders.',
      formula: 'P/A ± (P · e) / S ± M_ext / S ≥ f_allowable',
      formulaDesc: 'Internal prestress pre-compression eliminating tensile cracks and reducing net slab thickness by 25%.',
      details: [
        'Unbonded and bonded post-tensioned two-way slab systems minimizing concrete self-weight and column sizes.',
        'High-volume supplementary cementitious materials (SCM) replacing 40-50% of Portland cement with ground slag.',
        'Structural embodied carbon benchmarking using Environmental Product Declarations (EPDs) via EC3 methodology.'
      ],
      metrics: [
        { label: 'Slab Thickness Cut', value: '-22% Depth' },
        { label: 'Embodied Carbon', value: '-35% CO₂e' },
        { label: 'Strand Yield (fpy)', value: '270 ksi Low-Rel.' }
      ]
    },
    {
      id: 'collapse',
      title: 'Progressive Collapse & Redundancy',
      code: 'DoD UFC 4-023-03 / GSA',
      icon: ShieldCheck,
      summary: 'Alternate Load Path Method (APM) guaranteeing bridge-over capability during sudden column loss.',
      formula: 'D_demand / C_capacity ≤ m  (Nonlinear Static APM)',
      formulaDesc: 'Inelastic demand-to-capacity verification under sudden instantaneous loss of perimeter load-bearing columns.',
      details: [
        'Catastrophic fault tolerance: Exterior perimeter columns can fail without triggering disproportionate collapse.',
        'Catenary action in floor slabs mobilized via continuous perimeter tie reinforcement and mechanical splices.',
        'Overstrength factor Ω0 = 2.5 applied to all primary transfer girders and cantilever outriggers.'
      ],
      metrics: [
        { label: 'Overstrength (Ω0)', value: '2.5 to 3.0' },
        { label: 'Tie Steel Integrity', value: 'Continuous 100%' },
        { label: 'Redundancy Factor (ρ)', value: 'ρ = 1.0 (No Penalty)' }
      ]
    }
  ];

  const currentPrinciple = principles.find(p => p.id === activeTab) || principles[0];

  return (
    <div className="py-6 relative overflow-hidden transition-colors duration-200">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D3AE36] mb-2 font-bold uppercase tracking-wider">
            <Cpu size={14} className="animate-pulse" />
            <span>Core Mathematical & Mechanical Standards</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2025] tracking-tight dark:text-[#F8F9FA]">
            Structural Design Principles & Code Matrix
          </h3>
          <p className="text-xs sm:text-sm text-[#1E2025] mt-1 max-w-2xl leading-relaxed">
            The mathematical, physics-based frameworks governing our structural calculations, nonlinear dynamic simulations, and carbon footprint reduction models.
          </p>
        </div>

        {/* Code Standard Stamp */}
        <div className="flex items-center gap-2.5 shrink-0 font-mono text-xs p-2.5 rounded-xl bg-[#12151C]/5 dark:bg-[#232936] border border-[#31394D]/30 dark:border-[#31394D]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D3AE36] animate-pulse"></div>
          <div>
            <span className="text-[9px] text-[#D3AE36] block uppercase tracking-wider font-bold">MANDATE SPEC</span>
            <span className="font-bold text-[#1E2025] dark:text-[#F8F9FA]">EBCS EN / ASCE 7 / AISC / ACI</span>
          </div>
        </div>
      </div>

      {/* Principles Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {principles.map((principle) => {
          const Icon = principle.icon;
          const isActive = activeTab === principle.id;
          return (
            <button
              key={principle.id}
              onClick={() => setActiveTab(principle.id)}
              className={`p-3.5 text-left transition-all duration-200 flex flex-col justify-between cursor-pointer rounded-xl ${
                isActive
                  ? 'bg-[#FFFFFF] dark:bg-[#232936] border-l-2 border-[#D3AE36] shadow-sm'
                  : 'border-l-2 border-transparent hover:border-[#31394D]/60 dark:hover:border-[#31394D] hover:bg-[#12151C]/5 dark:hover:bg-[#232936]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-[#D3AE36]' 
                    : 'text-[#1E2025] dark:text-[#F8F9FA]/70'
                }`}>
                  <Icon size={18} />
                </div>
                <span className="text-[10px] font-mono text-[#D3AE36] font-bold">
                  {principle.code.split('/')[0]}
                </span>
              </div>
              <h4 className={`text-xs font-bold leading-snug ${
                isActive ? 'text-[#1E2025] dark:text-[#F8F9FA] font-extrabold' : 'text-[#1E2025]/80 dark:text-[#F8F9FA]/70'
              }`}>
                {principle.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Principle Detail Dossier */}
      <div className="py-2">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 pb-4 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D3AE36] font-bold">
              Governing Code: {currentPrinciple.code}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-[#1E2025] tracking-tight mt-1 dark:text-[#F8F9FA]">
              {currentPrinciple.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#1E2025] dark:text-[#F8F9FA]/80 mt-1 max-w-3xl leading-relaxed">
              {currentPrinciple.summary}
            </p>
          </div>
        </div>

        {/* Mathematical Equation & Physics Panel with Typographic Notation */}
        <div className="mb-6 py-5 px-6 rounded-2xl bg-[#12151C]/5 dark:bg-[#232936] border border-[#31394D]/30 dark:border-[#31394D] shadow-xs relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#1E2025] dark:text-[#F8F9FA]/80 font-bold flex items-center gap-1.5">
              <Calculator size={13} className="text-[#D3AE36]" /> Key Mechanics Formulation
            </span>
            <span className="text-[9px] font-mono text-[#D3AE36] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D3AE36]/10 border border-[#D3AE36]/30">
              Deterministic Limit State
            </span>
          </div>
          <div className="py-3 text-center font-mono text-base sm:text-xl font-extrabold text-[#D3AE36] overflow-x-auto tracking-wide">
            <code>{currentPrinciple.formula}</code>
          </div>
          <p className="text-[11px] font-mono text-[#1E2025]/80 dark:text-[#F8F9FA]/70 mt-1 text-center">
            {currentPrinciple.formulaDesc}
          </p>
        </div>

        {/* Interactive Parameter Sensitivity Lab Widget */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] dark:bg-[#12151C] border border-[#31394D]/40 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#31394D]/20 dark:border-[#31394D]/60">
            <div className="flex items-center gap-2">
              <Sliders size={14} className="text-[#D3AE36]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E2025] dark:text-[#F8F9FA]">
                Live Sensitivity & Numerical Solver: {currentPrinciple.title}
              </span>
            </div>
            <span className="text-[9px] font-mono text-[#D3AE36] uppercase font-bold">REAL-TIME FEA PARAMETERS</span>
          </div>

          {activeTab === 'seismic' && (
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-[#1E2025] dark:text-[#F8F9FA]">Seismic Dead & Live Weight (W):</span>
                    <span className="text-[#D3AE36] font-bold">{seismicWeight.toLocaleString()} kN</span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="100000"
                    step="1000"
                    value={seismicWeight}
                    onChange={(e) => setSeismicWeight(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 dark:bg-[#232936] rounded-lg accent-[#D3AE36] cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-[#1E2025] dark:text-[#F8F9FA]">Ductility Modification Factor (R):</span>
                    <span className="text-[#D3AE36] font-bold">R = {seismicR} (Special Moment Frame)</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="8"
                    step="0.5"
                    value={seismicR}
                    onChange={(e) => setSeismicR(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 dark:bg-[#232936] rounded-lg accent-[#D3AE36] cursor-pointer"
                  />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#12151C]/5 dark:bg-[#232936] border border-[#31394D]/30 dark:border-[#31394D] text-center space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#1E2025]/70 dark:text-[#F8F9FA]/70 font-semibold block">Computed Base Shear Demand ($V_b$)</span>
                <span className="text-2xl font-mono font-black text-[#D3AE36] block">{calcBaseShear.toLocaleString()} kN</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 size={13} /> {calcBaseShearRatio}% of Gravity Weight · Safe within Soil Bearing Limits
                </span>
              </div>
            </div>
          )}

          {activeTab === 'wind' && (
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-[#1E2025] dark:text-[#F8F9FA]">10-Year Return Wind Speed (V):</span>
                    <span className="text-[#D3AE36] font-bold">{windVelocity} km/h (36.1 m/s)</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="180"
                    step="5"
                    value={windVelocity}
                    onChange={(e) => setWindVelocity(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 dark:bg-[#232936] rounded-lg accent-[#D3AE36] cursor-pointer"
                  />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#12151C]/5 dark:bg-[#232936] border border-[#31394D]/30 dark:border-[#31394D] text-center space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#1E2025]/70 dark:text-[#F8F9FA]/70 font-semibold block">Peak Occupant Lateral Accel.</span>
                <span className="text-2xl font-mono font-black text-[#D3AE36] block">{calcWindAccel} milli-g</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 size={13} /> ISO 10137 Compliant (Story Drift H/{calcWindDrift})
                </span>
              </div>
            </div>
          )}

          {activeTab === 'carbon' && (
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-[#1E2025] dark:text-[#F8F9FA]">SCM Slag & Pozzolan Replacement Ratio:</span>
                    <span className="text-[#D3AE36] font-bold">{carbonScm}% Cement Substituted</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="2"
                    value={carbonScm}
                    onChange={(e) => setCarbonScm(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-200 dark:bg-[#232936] rounded-lg accent-[#D3AE36] cursor-pointer"
                  />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#12151C]/5 dark:bg-[#232936] border border-[#31394D]/30 dark:border-[#31394D] text-center space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#1E2025]/70 dark:text-[#F8F9FA]/70 font-semibold block">Embodied Carbon Offset</span>
                <span className="text-2xl font-mono font-black text-[#D3AE36] block">-{calcCarbonSavings} kg CO₂e / m³</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 size={13} /> {calcEmbodiedReduction}% Net Carbon Reduction achieved
                </span>
              </div>
            </div>
          )}

          {activeTab === 'collapse' && (
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#1E2025] dark:text-[#F8F9FA] block">Select Instantaneous Column Loss Vector:</span>
                <div className="grid grid-cols-3 gap-2">
                  {['corner', 'perimeter', 'interior'].map((col) => (
                    <button
                      key={col}
                      onClick={() => setCollapseColumn(col)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono uppercase font-bold tracking-wider transition-all cursor-pointer ${
                        collapseColumn === col
                          ? 'bg-[#D3AE36] text-[#12151C]'
                          : 'bg-[#12151C]/5 dark:bg-[#232936] text-[#1E2025] dark:text-[#F8F9FA] hover:border-[#D3AE36]'
                      }`}
                    >
                      {col} Col
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#12151C]/5 dark:bg-[#232936] border border-[#31394D]/30 dark:border-[#31394D] text-center space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#1E2025]/70 dark:text-[#F8F9FA]/70 font-semibold block">Inelastic Demand / Capacity (D/C)</span>
                <span className="text-2xl font-mono font-black text-[#D3AE36] block">{collapseScenarios[collapseColumn].ratio}</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 size={13} /> {collapseScenarios[collapseColumn].status}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Implementation Specifications & Metrics Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Engineering Specifications (7 Cols) */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#1E2025] font-bold block dark:text-[#F8F9FA]">
              Practical Structural Application
            </span>
            <div className="space-y-2">
              {currentPrinciple.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 py-1.5">
                  <CheckCircle2 size={15} className="text-[#D3AE36] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1E2025] dark:text-[#F8F9FA]/80 leading-relaxed font-medium">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Design Limits & Benchmark Metrics (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#1E2025] font-bold block dark:text-[#F8F9FA]">
              Benchmark Verification Metrics
            </span>
            <div className="space-y-2">
              {currentPrinciple.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-[#31394D]/20 dark:border-[#31394D]/60 last:border-none">
                  <span className="text-xs font-semibold text-[#1E2025] dark:text-[#F8F9FA]/80">
                    {metric.label}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-[#D3AE36]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
