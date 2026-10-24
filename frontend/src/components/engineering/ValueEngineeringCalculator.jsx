import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  DollarSign, 
  Leaf, 
  TrendingDown, 
  Clock, 
  ArrowUpRight, 
  Building2, 
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';

export const ValueEngineeringCalculator = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState(38);
  const [floorArea, setFloorArea] = useState(18000); // sq ft
  const [structuralSystem, setStructuralSystem] = useState('post-tensioned'); // 'post-tensioned', 'outrigger', 'steel-composite', 'base-isolation'

  // Coefficients based on selected system
  const getSystemMultiplier = () => {
    switch (structuralSystem) {
      case 'outrigger': return { cost: 145, steel: 18.5, concrete: 22, carbon: 34, weeks: 14 };
      case 'steel-composite': return { cost: 120, steel: 24, concrete: 15, carbon: 28, weeks: 10 };
      case 'base-isolation': return { cost: 165, steel: 12, concrete: 18, carbon: 42, weeks: 16 };
      default: // 'post-tensioned'
        return { cost: 135, steel: 22, concrete: 26, carbon: 36, weeks: 12 };
    }
  };

  const mult = getSystemMultiplier();
  const totalArea = stories * floorArea; // total gross sq ft
  const estimatedSavingsUSD = Math.round((totalArea * (mult.cost / 1000)) / 10000) * 10000;
  const concreteSavedM3 = Math.round((totalArea * (mult.concrete / 1000)) * 0.0283);
  const steelSavedTons = Math.round((totalArea * (mult.steel / 1000)) * 0.045);
  const carbonOffsetTons = Math.round((totalArea * (mult.carbon / 1000)) * 0.08);
  const weeksSaved = Math.round(mult.weeks * (stories / 40));

  return (
    <div className="py-6 relative overflow-hidden transition-colors duration-200">
      
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#D4AF37] mb-2 font-semibold">
            <Calculator size={13} className="text-[#D4AF37]" />
            Value Engineering & Carbon Optimization Matrix
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Structural Capital & Carbon Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#54595F] font-mono mt-1">
            Calculate estimated material reduction, cost savings, and embodied carbon offsets through advanced FEA optimization
          </p>
        </div>
      </div>

      {/* Calculator Body: 2-Col Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Sliders & Controls (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Structural System Tabs */}
          <div>
            <label className="block text-[10px] font-mono uppercase text-[#54595F] tracking-wider mb-2 font-bold">
              Select Proposed Structural Framing System
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => setStructuralSystem('post-tensioned')}
                className={`p-3 rounded-xl text-left transition-all font-mono text-xs ${
                  structuralSystem === 'post-tensioned'
                    ? 'bg-[#D4AF37]/15 ring-2 ring-[#D4AF37] text-[#121417] font-bold'
                    : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <div className="font-semibold text-zinc-900 text-xs">Post-Tensioned Flat Slabs</div>
                <div className="text-[10px] text-[#54595F] mt-0.5">High clear-spans, low slab thickness</div>
              </button>

              <button
                onClick={() => setStructuralSystem('outrigger')}
                className={`p-3 rounded-xl text-left transition-all font-mono text-xs ${
                  structuralSystem === 'outrigger'
                    ? 'bg-[#D4AF37]/15 ring-2 ring-[#D4AF37] text-[#121417] font-bold'
                    : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <div className="font-semibold text-zinc-900 text-xs">Core & Outrigger Trusses</div>
                <div className="text-[10px] text-[#54595F] mt-0.5">Slender towers & high wind zones</div>
              </button>

              <button
                onClick={() => setStructuralSystem('steel-composite')}
                className={`p-3 rounded-xl text-left transition-all font-mono text-xs ${
                  structuralSystem === 'steel-composite'
                    ? 'bg-[#D4AF37]/15 ring-2 ring-[#D4AF37] text-[#121417] font-bold'
                    : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <div className="font-semibold text-zinc-900 text-xs">Composite Steel Moment Frame</div>
                <div className="text-[10px] text-[#54595F] mt-0.5">Seismic ductility & fast erection</div>
              </button>

              <button
                onClick={() => setStructuralSystem('base-isolation')}
                className={`p-3 rounded-xl text-left transition-all font-mono text-xs ${
                  structuralSystem === 'base-isolation'
                    ? 'bg-[#D4AF37]/15 ring-2 ring-[#D4AF37] text-[#121417] font-bold'
                    : 'text-[#54595F] hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <div className="font-semibold text-zinc-900 text-xs">Base Isolation & Viscous Dampers</div>
                <div className="text-[10px] text-[#54595F] mt-0.5">Critical facilities & maximum resilience</div>
              </button>
            </div>
          </div>

          {/* Slider 1: Stories */}
          <div className="py-2 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-[#54595F] mb-1">
              <span className="uppercase font-bold tracking-wider flex items-center gap-1.5 text-zinc-800">
                <Building2 size={14} className="text-[#D4AF37]" /> Building Height
              </span>
              <span className="text-[#D4AF37] font-bold text-sm">{stories} Stories ({Math.round(stories * 3.8)}m)</span>
            </div>
            <input
              type="range"
              min="10"
              max="75"
              step="1"
              value={stories}
              onChange={(e) => setStories(Number(e.target.value))}
              className="w-full accent-[#D4AF37] h-2 bg-zinc-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#54595F] mt-1">
              <span>10 Stories (Low-Rise)</span>
              <span>40 Stories (Tower)</span>
              <span>75 Stories (Supertall)</span>
            </div>
          </div>

          {/* Slider 2: Average Floor Plate */}
          <div className="py-2 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-[#54595F] mb-1">
              <span className="uppercase font-bold tracking-wider flex items-center gap-1.5 text-zinc-800">
                <Layers size={14} className="text-[#D4AF37]" /> Floor Plate Area
              </span>
              <span className="text-[#D4AF37] font-bold text-sm">{floorArea.toLocaleString()} SQ FT</span>
            </div>
            <input
              type="range"
              min="6000"
              max="35000"
              step="1000"
              value={floorArea}
              onChange={(e) => setFloorArea(Number(e.target.value))}
              className="w-full accent-[#D4AF37] h-2 bg-zinc-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#54595F] mt-1">
              <span>6,000 sq ft</span>
              <span>Total GFA: {(totalArea / 1000).toFixed(0)}k sq ft</span>
              <span>35,000 sq ft</span>
            </div>
          </div>

        </div>

        {/* Right Column: Calculated Results Bento (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          
          <div className="py-4">
            <span className="text-xs font-mono uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
              Estimated Construction Capital Savings
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold text-zinc-900 font-mono tracking-tight mb-2">
              ${(estimatedSavingsUSD / 1000000).toFixed(2)}M <span className="text-sm text-emerald-600 font-normal">USD</span>
            </div>
            <p className="text-xs text-[#54595F] font-mono leading-relaxed mb-6">
              Achieved through member slenderness optimization, post-tensioned tendon layout, and finite element stress redistribution.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="py-2">
                <div className="flex items-center gap-1 text-[10px] uppercase text-[#54595F] mb-1">
                  <TrendingDown size={11} className="text-emerald-600" /> Concrete Volume
                </div>
                <div className="text-lg font-extrabold text-zinc-900">
                  {concreteSavedM3.toLocaleString()} <span className="text-xs font-normal text-[#54595F]">m³</span>
                </div>
                <div className="text-[10px] text-[#D4AF37] font-semibold mt-0.5">Reduced Dead Load</div>
              </div>

              <div className="py-2">
                <div className="flex items-center gap-1 text-[10px] uppercase text-[#54595F] mb-1">
                  <TrendingDown size={11} className="text-emerald-600" /> Steel Tonnage
                </div>
                <div className="text-lg font-extrabold text-zinc-900">
                  {steelSavedTons.toLocaleString()} <span className="text-xs font-normal text-[#54595F]">tons</span>
                </div>
                <div className="text-[10px] text-[#D4AF37] font-semibold mt-0.5">Optimized Sections</div>
              </div>

              <div className="py-2">
                <div className="flex items-center gap-1 text-[10px] uppercase text-[#54595F] mb-1">
                  <Leaf size={11} className="text-emerald-600" /> Embodied Carbon
                </div>
                <div className="text-lg font-extrabold text-emerald-600">
                  {carbonOffsetTons.toLocaleString()} <span className="text-xs font-normal text-[#54595F]">t CO₂e</span>
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">LEED Carbon Credits</div>
              </div>

              <div className="py-2">
                <div className="flex items-center gap-1 text-[10px] uppercase text-[#54595F] mb-1">
                  <Clock size={11} className="text-[#D4AF37]" /> Schedule Offset
                </div>
                <div className="text-lg font-extrabold text-zinc-900">
                  {weeksSaved} <span className="text-xs font-normal text-[#54595F]">Weeks</span>
                </div>
                <div className="text-[10px] text-[#D4AF37] font-semibold mt-0.5">Earlier Substantial Date</div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-zinc-900 uppercase">
                Want a Capstone Quantity &amp; Value Engineering Review?
              </div>
              <div className="text-[11px] text-[#54595F] font-mono mt-0.5">
                Consult with our ASTU 5th-year student cohort for independent rebar tonnage and concrete volume audit.
              </div>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] text-[#121417] hover:bg-[#c49f2c] px-6 py-3 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1.5"
            >
              Connect With Brothers <ArrowUpRight size={13} />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
