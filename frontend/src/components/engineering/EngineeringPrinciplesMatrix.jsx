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
  ExternalLink
} from 'lucide-react';

export const EngineeringPrinciplesMatrix = () => {
  const [activeTab, setActiveTab] = useState('seismic');

  const principles = [
    {
      id: 'seismic',
      title: 'Seismic Ductility & Capacity Design',
      code: 'ASCE 7-22 / AISC 341',
      icon: Activity,
      summary: 'Ductile fuse mechanisms isolate inelastic deformations away from gravity load columns.',
      formula: 'V_b = C_s \\cdot W = \\left[ \\frac{S_{DS}}{(R / I_e)} \\right] \\cdot W',
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
      formula: 'a_{peak} = g_p \\cdot \\sigma_a \\le 15\\text{ to }18\\text{ milli-g}',
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
      formula: 'P/A \\pm \\frac{P \\cdot e}{S} \\pm \\frac{M_{ext}}{S} \\ge f_{allowable}',
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
      formula: 'D_{demand} / C_{capacity} \\le m \\quad (\\text{Nonlinear Static APM})',
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
    <div className="rounded-3xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-200">
      
      {/* Decorative Technical Corner Marks */}
      <div className="absolute top-3 left-3 text-[10px] font-mono text-zinc-300 dark:text-zinc-700 pointer-events-none select-none">+</div>
      <div className="absolute top-3 right-3 text-[10px] font-mono text-zinc-300 dark:text-zinc-700 pointer-events-none select-none">+</div>
      <div className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-300 dark:text-zinc-700 pointer-events-none select-none">+</div>
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-zinc-300 dark:text-zinc-700 pointer-events-none select-none">+</div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200/90 dark:border-[#2D3137]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-[#801834]/40 bg-zinc-50 dark:bg-[#261219] px-3.5 py-1 text-xs font-mono text-[#801834] dark:text-[#E84855] shadow-xs mb-2 font-bold">
            <Cpu size={13} />
            <span>Core Mathematical & Mechanical Standards</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
            Structural Design Principles & Code Matrix
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
            The mathematical, physics-based frameworks governing our structural calculations, nonlinear dynamic simulations, and carbon footprint reduction models.
          </p>
        </div>

        {/* Code Standard Stamp */}
        <div className="flex items-center gap-3 bg-zinc-50 dark:bg-[#121417] px-4 py-2 rounded-2xl border border-zinc-200 dark:border-[#333] shrink-0 font-mono text-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-[#801834] dark:bg-[#D4AF37]"></div>
          <div>
            <span className="text-[9px] text-zinc-400 dark:text-[#777] block uppercase">MANDATE</span>
            <span className="font-bold text-zinc-800 dark:text-zinc-200">ASCE 7 / AISC / ACI</span>
          </div>
        </div>
      </div>

      {/* Principles Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {principles.map((principle) => {
          const Icon = principle.icon;
          const isActive = activeTab === principle.id;
          return (
            <button
              key={principle.id}
              onClick={() => setActiveTab(principle.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'bg-[#FAF0F3] dark:bg-[#261219] border-[#801834] dark:border-[#D4AF37] shadow-sm'
                  : 'bg-zinc-50/70 dark:bg-[#14161A] border-zinc-200/80 dark:border-[#2C2E33] hover:border-zinc-300 dark:hover:border-[#444]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl transition-colors ${
                  isActive 
                    ? 'bg-[#801834] text-white dark:bg-[#D4AF37] dark:text-[#121417]' 
                    : 'bg-white dark:bg-[#1E2125] text-zinc-600 dark:text-zinc-300'
                }`}>
                  <Icon size={18} />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-bold">
                  {principle.code}
                </span>
              </div>
              <h4 className={`text-xs font-bold leading-snug ${
                isActive ? 'text-[#801834] dark:text-[#D4AF37]' : 'text-zinc-800 dark:text-zinc-200'
              }`}>
                {principle.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Principle Detail Dossier */}
      <div className="bg-zinc-50 dark:bg-[#14161A] rounded-2xl border border-zinc-200/90 dark:border-[#2C2E33] p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 pb-6 mb-6 border-b border-zinc-200/80 dark:border-[#26282D]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#801834] dark:text-[#D4AF37] font-bold">
              Governing Code: {currentPrinciple.code}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mt-1">
              {currentPrinciple.title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-3xl leading-relaxed">
              {currentPrinciple.summary}
            </p>
          </div>
        </div>

        {/* Mathematical Equation & Physics Panel */}
        <div className="mb-6 p-5 rounded-xl bg-white dark:bg-[#181A1E] border border-zinc-200/80 dark:border-[#333] shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold">
              Key Mechanics Formulation
            </span>
            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500">
              Deterministic Limit State
            </span>
          </div>
          <div className="p-4 rounded-lg bg-zinc-50 dark:bg-[#121417] border border-zinc-200/70 dark:border-[#25282E] text-center font-mono text-sm sm:text-base font-bold text-[#801834] dark:text-[#D4AF37] overflow-x-auto">
            <code>{currentPrinciple.formula}</code>
          </div>
          <p className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 mt-2 text-center">
            {currentPrinciple.formulaDesc}
          </p>
        </div>

        {/* Implementation Specifications & Metrics Grid */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          
          {/* Engineering Specifications (7 Cols) */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-bold block">
              Practical Structural Application
            </span>
            <div className="space-y-2.5">
              {currentPrinciple.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-[#181A1E] border border-zinc-200/70 dark:border-[#2C2E33]">
                  <CheckCircle2 size={16} className="text-[#801834] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Design Limits & Benchmark Metrics (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-bold block">
              Benchmark Verification Metrics
            </span>
            <div className="space-y-2.5">
              {currentPrinciple.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-[#181A1E] border border-zinc-200/70 dark:border-[#2C2E33]">
                  <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    {metric.label}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-[#801834] dark:text-[#D4AF37]">
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
