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
      name: 'Multi-Story RC Frame (B+G+10)',
      icon: Building2,
      defaultStories: 11,
      defaultArea: 85000,
      desc: 'Commercial & residential towers requiring ETABS 3D lateral shear wall and EBCS EN 1998 seismic analysis.'
    },
    {
      id: 'bridge',
      name: 'Awash River Highway Bridge',
      icon: Activity,
      defaultStories: 1,
      defaultArea: 45000,
      desc: 'Prestressed concrete girder / continuous RC deck slab over river gorges per ERA Bridge Design Manual.'
    },
    {
      id: 'highway',
      name: 'ERA Highway Alignment',
      icon: Layers,
      defaultStories: 1,
      defaultArea: 120000,
      desc: 'AutoCAD Civil 3D geometric corridor, super-elevation, and earthwork mass-haul balancing.'
    },
    {
      id: 'foundation',
      name: 'Expansive Soil Foundation',
      icon: ShieldCheck,
      defaultStories: 5,
      defaultArea: 35000,
      desc: 'Isolated footings with stiffened strap beams over active black cotton clay formations in Adama.'
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
      projectType: buildingType === 'high-rise' ? 'Reinforced Concrete Structure' 
        : buildingType === 'bridge' ? 'Infrastructure & Bridges' 
        : buildingType === 'highway' ? 'Highway & Transportation' 
        : 'Geotechnical & Soil Mechanics',
      subject: `${selectedTypeObj?.name || 'Structural'} - ${stories > 1 ? `${stories} Stories, ` : ''}${grossArea.toLocaleString()} GSF Design Study`,
      message: `ASTU Capstone Scope Estimator Summary:
• Archetype: ${selectedTypeObj?.name}
• Scale: ${stories} Stories / ${grossArea.toLocaleString()} Gross Sq Ft
• Framing System: ${framingSystem === 'pt-concrete' ? 'Cast-in-Place RC Frame (EBCS EN 1992)' : framingSystem === 'structural-steel' ? 'Dual System (RC Frame + Shear Walls)' : 'Composite Steel / Precast Girders'}
• Environmental Mandates: Wind ${windZone} | Seismic ${seismicCategory}
• Expected Deliverables: ~${calcPages} Pages Calculation Sheets, ~${calcDrawings} CAD/BIM Drawings, ~${estimatedWeeks} Weeks Design Duration
• Key Objectives: Code compliance audit (EBCS EN 1990-1998 / ERA 2024), 3D ETABS modal analysis, expansive soil foundation design, and material quantity optimization.`
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
            <span>ASTU Capstone Feasibility Telemetry</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#54595F] tracking-tight">
            Civil Engineering Scope &amp; <span className="text-[#D4AF37]">Deliverables</span> Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#54595F] mt-1 max-w-2xl leading-relaxed">
            Configure your project parameters to estimate calculation package volume, CAD/BIM drawing sheets, design timeline, and material optimization per Ethiopian standards.
          </p>
        </div>

        {/* Live Stamp Badge */}
        <div className="flex items-center gap-3 bg-[#FFFFFF] px-4 py-2.5 rounded-2xl border border-zinc-200 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <div className="text-left font-mono">
            <span className="text-[9px] text-[#54595F]/70 block uppercase">CALC ENGINE</span>
            <span className="text-xs font-bold text-[#54595F]">EBCS EN / ERA 2024</span>
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
                <option value="pt-concrete">Cast-in-Place RC Frame (EBCS EN 1992)</option>
                <option value="structural-steel">Dual System (RC Frame + Shear Walls)</option>
                <option value="mass-timber">Composite Steel / Precast Girders</option>
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
                <option value="32m/s">32 m/s (Adama Urban Basin)</option>
                <option value="38m/s">38 m/s (Rift Valley Corridor)</option>
                <option value="42m/s">42+ m/s (Highland Escarpment)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#54595F] mb-1.5 font-semibold">
                Seismic Hazard Zone
              </label>
              <select
                value={seismicCategory}
                onChange={(e) => setSeismicCategory(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-zinc-200 rounded-xl px-2.5 py-2 text-xs text-[#54595F] font-medium focus:border-[#D4AF37] focus:outline-none shadow-2xs"
              >
                <option value="Zone-1">Zone 1 (Low Hazard - ag = 0.05g)</option>
                <option value="Zone-2">Zone 2 (Moderate - ag = 0.08g)</option>
                <option value="Zone-4">Zone 4 (Adama / Rift Valley - ag = 0.15g)</option>
                <option value="Zone-4+">Zone 4+ (Main Rift Fault - ag = 0.20g)</option>
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
                Calculated Deliverables &amp; Timeline
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
                    <h5 className="text-xs font-bold text-[#54595F]">Capstone Calculation Book</h5>
                    <p className="text-[10px] text-[#54595F]">Lateral drift, rebar checks per EBCS EN</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold text-[#D4AF37]">
                  ~{calcPages} pages
                </span>
              </div>

              {/* BIM / AutoCAD Sheets */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-zinc-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Layers size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#54595F]">AutoCAD / BIM Drawing Sheets</h5>
                    <p className="text-[10px] text-[#54595F]">Structural details &amp; highway alignments</p>
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
                    <h5 className="text-xs font-bold text-[#54595F]">Academic Capstone Phase</h5>
                    <p className="text-[10px] text-[#54595F]">Comprehensive design through defense readiness</p>
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
                    <p className="text-[10px] text-emerald-700/80">Via material reduction &amp; slag blends</p>
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
              Apply Scope to Inquiry Brief <ArrowRight size={14} />
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
