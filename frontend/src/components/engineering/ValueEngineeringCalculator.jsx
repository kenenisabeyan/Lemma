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
    <div className="rounded-3xl bg-[#181A1E] border border-[#333]/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#26282D] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#121417] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
            <Calculator size={13} className="text-[#D4AF37]" />
            Value Engineering & Carbon Optimization Matrix
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] tracking-tight">
            Structural Capital & Carbon Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#9CA3AF] font-mono mt-1">
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
            <label className="block text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider mb-2 font-bold">
              Select Proposed Structural Framing System
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setStructuralSystem('post-tensioned')}
                className={`p-3 rounded-xl border text-left transition-all font-mono text-xs ${
                  structuralSystem === 'post-tensioned'
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] shadow-sm font-bold'
                    : 'bg-[#121417] border-[#333] text-[#9CA3AF] hover:text-[#EAEAEA]'
                }`}
              >
                <div className="font-semibold text-[#EAEAEA] text-xs">Post-Tensioned Flat Slabs</div>
                <div className="text-[10px] text-[#9CA3AF] mt-0.5">High clear-spans, low slab thickness</div>
              </button>

              <button
                onClick={() => setStructuralSystem('outrigger')}
                className={`p-3 rounded-xl border text-left transition-all font-mono text-xs ${
                  structuralSystem === 'outrigger'
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] shadow-sm font-bold'
                    : 'bg-[#121417] border-[#333] text-[#9CA3AF] hover:text-[#EAEAEA]'
                }`}
              >
                <div className="font-semibold text-[#EAEAEA] text-xs">Core & Outrigger Trusses</div>
                <div className="text-[10px] text-[#9CA3AF] mt-0.5">Slender towers & high wind zones</div>
              </button>

              <button
                onClick={() => setStructuralSystem('steel-composite')}
                className={`p-3 rounded-xl border text-left transition-all font-mono text-xs ${
                  structuralSystem === 'steel-composite'
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] shadow-sm font-bold'
                    : 'bg-[#121417] border-[#333] text-[#9CA3AF] hover:text-[#EAEAEA]'
                }`}
              >
                <div className="font-semibold text-[#EAEAEA] text-xs">Composite Steel Moment Frame</div>
                <div className="text-[10px] text-[#9CA3AF] mt-0.5">Seismic ductility & fast erection</div>
              </button>

              <button
                onClick={() => setStructuralSystem('base-isolation')}
                className={`p-3 rounded-xl border text-left transition-all font-mono text-xs ${
                  structuralSystem === 'base-isolation'
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] shadow-sm font-bold'
                    : 'bg-[#121417] border-[#333] text-[#9CA3AF] hover:text-[#EAEAEA]'
                }`}
              >
                <div className="font-semibold text-[#EAEAEA] text-xs">Base Isolation & Viscous Dampers</div>
                <div className="text-[10px] text-[#9CA3AF] mt-0.5">Critical facilities & maximum resilience</div>
              </button>
            </div>
          </div>

          {/* Slider 1: Stories */}
          <div className="bg-[#121417] p-5 rounded-2xl border border-[#2D3137]">
            <div className="flex justify-between items-center text-xs font-mono text-[#9CA3AF] mb-2">
              <span className="uppercase font-bold tracking-wider flex items-center gap-1.5">
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
              className="w-full accent-[#D4AF37] h-2 bg-[#181A1E] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#666] mt-1.5">
              <span>10 Stories (Low-Rise)</span>
              <span>40 Stories (Tower)</span>
              <span>75 Stories (Supertall)</span>
            </div>
          </div>

          {/* Slider 2: Average Floor Plate */}
          <div className="bg-[#121417] p-5 rounded-2xl border border-[#2D3137]">
            <div className="flex justify-between items-center text-xs font-mono text-[#9CA3AF] mb-2">
              <span className="uppercase font-bold tracking-wider flex items-center gap-1.5">
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
              className="w-full accent-[#D4AF37] h-2 bg-[#181A1E] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#666] mt-1.5">
              <span>6,000 sq ft</span>
              <span>Total GFA: {(totalArea / 1000).toFixed(0)}k sq ft</span>
              <span>35,000 sq ft</span>
            </div>
          </div>

        </div>

        {/* Right Column: Calculated Results Bento (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          
          <div className="rounded-2xl bg-gradient-to-br from-[#1E2125] to-[#121417] border border-[#D4AF37]/40 p-6 sm:p-8 shadow-xl">
            <span className="text-xs font-mono uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
              Estimated Construction Capital Savings
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold text-[#EAEAEA] font-mono tracking-tight mb-2">
              ${(estimatedSavingsUSD / 1000000).toFixed(2)}M <span className="text-sm text-emerald-400 font-normal">USD</span>
            </div>
            <p className="text-xs text-[#9CA3AF] font-mono leading-relaxed">
              Achieved through member slenderness optimization, post-tensioned tendon layout, and finite element stress redistribution.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#2D3137] font-mono">
              <div className="p-3 bg-[#121417] rounded-xl border border-[#2D3137]">
                <div className="flex items-center gap-1 text-[10px] uppercase text-[#9CA3AF] mb-1">
                  <TrendingDown size={11} className="text-emerald-400" /> Concrete Volume
                </div>
                <div className="text-lg font-extrabold text-[#EAEAEA]">
                  {concreteSavedM3.toLocaleString()} <span className="text-xs font-normal text-[#9CA3AF]">m³</span>
                </div>
                <div className="text-[10px] text-[#D4AF37] mt-0.5">Reduced Dead Load</div>
              </div>

              <div className="p-3 bg-[#121417] rounded-xl border border-[#2D3137]">
                <div className="flex items-center gap-1 text-[10px] uppercase text-[#9CA3AF] mb-1">
                  <TrendingDown size={11} className="text-emerald-400" /> Steel Tonnage
                </div>
                <div className="text-lg font-extrabold text-[#EAEAEA]">
                  {steelSavedTons.toLocaleString()} <span className="text-xs font-normal text-[#9CA3AF]">tons</span>
                </div>
                <div className="text-[10px] text-[#D4AF37] mt-0.5">Optimized Sections</div>
              </div>

              <div className="p-3 bg-[#121417] rounded-xl border border-[#2D3137]">
                <div className="flex items-center gap-1 text-[10px] uppercase text-[#9CA3AF] mb-1">
                  <Leaf size={11} className="text-emerald-400" /> Embodied Carbon
                </div>
                <div className="text-lg font-extrabold text-emerald-400">
                  {carbonOffsetTons.toLocaleString()} <span className="text-xs font-normal text-[#9CA3AF]">t CO₂e</span>
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">LEED Carbon Credits</div>
              </div>

              <div className="p-3 bg-[#121417] rounded-xl border border-[#2D3137]">
                <div className="flex items-center gap-1 text-[10px] uppercase text-[#9CA3AF] mb-1">
                  <Clock size={11} className="text-[#D4AF37]" /> Schedule Offset
                </div>
                <div className="text-lg font-extrabold text-[#EAEAEA]">
                  {weeksSaved} <span className="text-xs font-normal text-[#9CA3AF]">Weeks</span>
                </div>
                <div className="text-[10px] text-[#D4AF37] mt-0.5">Earlier Substantial Date</div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#121417] border border-[#2D3137]">
            <div>
              <div className="text-xs font-mono font-bold text-[#EAEAEA] uppercase">
                Want a Certified Peer Review Feasibility Audit?
              </div>
              <div className="text-[11px] text-[#9CA3AF] font-mono mt-0.5">
                Send structural drawings for an independent quantity audit and stamp verification.
              </div>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-6 py-3 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] shrink-0 flex items-center gap-1.5"
            >
              Request Audit <ArrowUpRight size={13} />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
