import React, { useState, useId } from 'react';
import { 
  Building2, 
  Layers, 
  Wind, 
  Activity, 
  FileSpreadsheet, 
  Clock, 
  Leaf, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Sliders
} from 'lucide-react';

export const StructuralScopeEstimator = ({ onApplyScope }) => {
  const [buildingType, setBuildingType] = useState('high-rise');
  const [grossArea, setGrossArea] = useState(250000);
  const [stories, setStories] = useState(28);
  const [framingSystem, setFramingSystem] = useState('pt-concrete');
  const [windZone, setWindZone] = useState('130mph');
  const [seismicCategory, setSeismicCategory] = useState('SDC-D');
  const [activeTab, setActiveTab] = useState('deliverables');

  // Building type presets
  const buildingTypes = [
    {
      id: 'high-rise',
      name: 'High-Rise Tower',
      icon: Building2,
      defaultStories: 32,
      defaultArea: 320000,
      desc: 'Commercial or residential towers requiring 3D ETABS lateral drift & wind acceleration optimization.'
    },
    {
      id: 'bridge',
      name: 'Bridge / Civil Span',
      icon: Activity,
      defaultStories: 1,
      defaultArea: 85000,
      desc: 'Cable-stayed, post-tensioned segmental box, or steel truss infrastructure under AASHTO LRFD.'
    },
    {
      id: 'long-span',
      name: 'Long-Span Roof / Dome',
      icon: Layers,
      defaultStories: 2,
      defaultArea: 140000,
      desc: 'Column-free space frames, sports arenas, tensile fabric roofs, and custom architectural steel nodes.'
    },
    {
      id: 'retrofit',
      name: 'Seismic Retrofit Audit',
      icon: ShieldCheck,
      defaultStories: 14,
      defaultArea: 180000,
      desc: 'Nonlinear pushover analysis (ASCE 41), buckling-restrained braces (BRBs), and base isolation.'
    }
  ];

  const handleTypeChange = (typeId) => {
    setBuildingType(typeId);
    const selected = buildingTypes.find(t => t.id === typeId);
    if (selected) {
      setStories(selected.defaultStories);
      setGrossArea(selected.defaultArea);
    }
  };

  // Dynamic calculations based on parameters
  const calcPages = Math.round(80 + (stories * 3.5) + (grossArea / 20000));
  const calcDrawings = Math.round(18 + (stories * 1.2) + (grossArea / 30000));
  const estimatedWeeks = Math.max(4, Math.round(5 + (stories * 0.18) + (grossArea / 200000)));
  const embodiedCarbonSavings = framingSystem === 'pt-concrete' ? 18.5 : framingSystem === 'mass-timber' ? 34.0 : 12.0;
  const steelTonnageEst = Math.round((grossArea * 0.0075 * (framingSystem === 'structural-steel' ? 1.4 : 0.75)));

  const handleApply = () => {
    const selectedTypeObj = buildingTypes.find(t => t.id === buildingType);
    const scopeData = {
      projectType: buildingType === 'high-rise' ? 'Commercial High-Rise' 
        : buildingType === 'bridge' ? 'Infrastructure & Bridges' 
        : buildingType === 'long-span' ? 'Special Structure / Dome' 
        : 'Seismic Retrofit Audit',
      subject: `${selectedTypeObj?.name || 'Structural'} - ${stories > 1 ? `${stories} Stories, ` : ''}${grossArea.toLocaleString()} GSF Preliminary Design`,
      message: `Project Scope Estimator Summary:
• Archetype: ${selectedTypeObj?.name}
• Scale: ${stories} Stories / ${grossArea.toLocaleString()} Gross Sq Ft
• Framing System: ${framingSystem === 'pt-concrete' ? 'Post-Tensioned High-Strength Concrete' : framingSystem === 'structural-steel' ? 'Structural Steel Frame with Composite Deck' : 'Mass Timber & Glulam Hybrid'}
• Environmental Mandates: Wind ${windZone} | Seismic ${seismicCategory}
• Expected Deliverables: ~${calcPages} Pages Stamped Calcs, ~${calcDrawings} Revit Sheets, ~${estimatedWeeks} Weeks Engineering Schedule
• Key Objectives: Code compliance review (IBC/ASCE 7), 3D FEA modal analysis, foundation design, and embodied carbon / value engineering optimization.`
    };

    if (onApplyScope) {
      onApplyScope(scopeData);
    }
  };

  const areaSliderId = useId();
  const storiesSliderId = useId();

  return (
    <div className="rounded-3xl bg-[#FFFFFF] border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden transition-colors duration-200">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-200">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#FFFFFF] px-3.5 py-1 text-xs font-mono text-[#D4AF37] shadow-xs mb-2 font-bold">
            <Sliders size={13} />
            <span>Interactive Feasibility Telemetry</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#54595F] tracking-tight">
            Instant Structural Scope & <span className="text-[#D4AF37]">Deliverables</span> Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#54595F] mt-1 max-w-2xl leading-relaxed">
            Configure your project parameters to estimate calculation package volume, BIM model deliverables, design timeline, and material optimization opportunities.
          </p>
        </div>

        {/* Live Stamp Badge */}
        <div className="flex items-center gap-3 bg-[#FFFFFF] px-4 py-2.5 rounded-2xl border border-zinc-200 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <div className="text-left font-mono">
            <span className="text-[9px] text-[#54595F]/70 block uppercase">CALC ENGINE</span>
            <span className="text-xs font-bold text-[#54595F]">ASCE 7-22 / IBC 2024</span>
          </div>
        </div>
      </div>

      {/* Archetype Selector Strip */}
      <div className="mb-8">
        <label className="block text-[11px] font-mono uppercase tracking-widest text-[#54595F] mb-3 font-semibold">
          Step 1: Select Structural Archetype
        </label>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {buildingTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = buildingType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => handleTypeChange(type.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-sm'
                    : 'bg-[#FFFFFF] border-zinc-200 hover:border-[#D4AF37]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl transition-colors ${
                    isSelected 
                      ? 'bg-[#D4AF37] text-[#121417]' 
                      : 'bg-[#FFFFFF] border border-zinc-200 text-[#54595F] group-hover:text-[#D4AF37]'
                  }`}>
                    <Icon size={18} />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                  )}
                </div>
                <div>
                  <h4 className={`text-xs font-bold mb-1 ${
                    isSelected ? 'text-[#D4AF37]' : 'text-[#54595F]'
                  }`}>
                    {type.name}
                  </h4>
                  <p className="text-[10px] text-[#54595F] line-clamp-2 leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Parameters Grid */}
      <div className="grid lg:grid-cols-12 gap-8 mb-8 items-start">
        
        {/* Sliders & Spec Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-6 bg-[#FFFFFF] p-6 rounded-2xl border border-zinc-200">
          
          {/* Gross Floor Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={areaSliderId} className="text-xs font-bold text-[#54595F] flex items-center gap-2">
                <Compass size={14} className="text-[#D4AF37]" />
                Gross Floor Area (GSF)
              </label>
              <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#D4AF37]/40 shadow-2xs">
                {grossArea.toLocaleString()} sq ft
              </span>
            </div>
            <input
              id={areaSliderId}
              type="range"
              min="15000"
              max="1200000"
              step="10000"
              value={grossArea}
              onChange={(e) => setGrossArea(Number(e.target.value))}
              aria-label="Gross Floor Area in square feet"
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#54595F]/70 mt-1">
              <span>15,000 sq ft</span>
              <span>600,000 sq ft</span>
              <span>1,200,000 sq ft</span>
            </div>
          </div>

          {/* Stories Slider (if applicable) */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={storiesSliderId} className="text-xs font-bold text-[#54595F] flex items-center gap-2">
                <Building2 size={14} className="text-[#D4AF37]" />
                Structural Stories / Height
              </label>
              <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#D4AF37]/40 shadow-2xs">
                {stories} {stories === 1 ? 'Level' : 'Stories'} (~{Math.round(stories * 13.5)} ft)
              </span>
            </div>
            <input
              id={storiesSliderId}
              type="range"
              min="1"
              max="65"
              step="1"
              value={stories}
              onChange={(e) => setStories(Number(e.target.value))}
              aria-label="Structural Stories or Height"
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#54595F]/70 mt-1">
              <span>1 Story</span>
              <span>30 Stories</span>
              <span>65+ Stories</span>
            </div>
          </div>

          {/* Framing System & Environmental Codes */}
          <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-200">
            
            <div>
              <label className="block text-[10px] font-mono uppercase text-[#54595F] mb-1.5 font-semibold">
                Structural System
              </label>
              <select
                value={framingSystem}
                onChange={(e) => setFramingSystem(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-zinc-200 rounded-xl px-2.5 py-2 text-xs text-[#54595F] font-medium focus:border-[#D4AF37] focus:outline-none shadow-2xs"
              >
                <option value="pt-concrete">Post-Tensioned Concrete</option>
                <option value="structural-steel">Composite Steel Frame</option>
                <option value="mass-timber">Mass Timber / Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#54595F] mb-1.5 font-semibold">
                Wind Velocity Zone
              </label>
              <select
                value={windZone}
                onChange={(e) => setWindZone(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-zinc-200 rounded-xl px-2.5 py-2 text-xs text-[#54595F] font-medium focus:border-[#D4AF37] focus:outline-none shadow-2xs"
              >
                <option value="115mph">115 mph (Standard Urban)</option>
                <option value="130mph">130 mph (Coastal / Inland)</option>
                <option value="160mph">160+ mph (Hurricane Category 4/5)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#54595F] mb-1.5 font-semibold">
                Seismic Design Cat.
              </label>
              <select
                value={seismicCategory}
                onChange={(e) => setSeismicCategory(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-zinc-200 rounded-xl px-2.5 py-2 text-xs text-[#54595F] font-medium focus:border-[#D4AF37] focus:outline-none shadow-2xs"
              >
                <option value="SDC-B">SDC B (Low Hazard)</option>
                <option value="SDC-C">SDC C (Moderate)</option>
                <option value="SDC-D">SDC D (High Hazard / Active Fault)</option>
                <option value="SDC-E/F">SDC E/F (Near-Fault Rupture)</option>
              </select>
            </div>

          </div>

        </div>

        {/* Live Calculated Deliverables Panel (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFFFFF] p-6 rounded-2xl border-2 border-[#D4AF37]/50 shadow-md">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#54595F] flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#D4AF37]" />
                Calculated Deliverables & Timeline
              </span>
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-300 font-bold">
                FEA Calibrated
              </span>
            </div>

            <div className="space-y-3.5">
              
              {/* Calculation Package */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-zinc-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                    <FileSpreadsheet size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#54595F]">Structural Calculation Book</h5>
                    <p className="text-[10px] text-[#54595F]">Wind drift, P-Delta, foundation caissons</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold text-[#D4AF37]">
                  ~{calcPages} pages
                </span>
              </div>

              {/* BIM / Revit Sheets */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-zinc-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Layers size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#54595F]">BIM Drawings (LOD 350-400)</h5>
                    <p className="text-[10px] text-[#54595F]">Revit 2026 3D structural model</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold text-[#D4AF37]">
                  ~{calcDrawings} sheets
                </span>
              </div>

              {/* Delivery Timeline */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-zinc-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#54595F]">Estimated Engineering Phase</h5>
                    <p className="text-[10px] text-[#54595F]">Schematic through stamped permit set</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold text-[#54595F]">
                  {estimatedWeeks} – {estimatedWeeks + 3} weeks
                </span>
              </div>

              {/* Embodied Carbon & Optimization */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
                    <Leaf size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-emerald-900">Embodied Carbon Savings</h5>
                    <p className="text-[10px] text-emerald-700/80">Via material reduction & slag blends</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold text-emerald-800">
                  ~{embodiedCarbonSavings}% CO₂
                </span>
              </div>

            </div>
          </div>

          {/* Action Button: Load into Form */}
          <div className="pt-6 mt-6 border-t border-zinc-200">
            <button
              type="button"
              onClick={handleApply}
              className="w-full rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] text-[#121417] py-3.5 px-6 text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              Apply Scope to Consultation Brief <ArrowRight size={14} />
            </button>
            <p className="text-[10px] font-mono text-center text-[#54595F]/80 mt-2">
              Populates your parameters directly into the confidential inquiry form below.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
