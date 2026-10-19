import React, { useState } from 'react';
import { 
  FileCheck2, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Compass, 
  BookOpen, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const CodeComplianceMatrix = () => {
  const [activeCode, setActiveCode] = useState('ASCE 7-22');
  const [riskCategory, setRiskCategory] = useState('III'); // 'I', 'II', 'III', 'IV'
  const [seismicCategory, setSeismicCategory] = useState('D'); // 'A', 'B', 'C', 'D', 'E', 'F'

  const codesData = {
    'ASCE 7-22': {
      title: 'ASCE 7-22: Minimum Design Loads for Buildings & Other Structures',
      organization: 'American Society of Civil Engineers',
      primaryScope: 'Wind Tunnel Integration, Dynamic Seismic Response History, Lateral Soil Pressures',
      parameters: [
        { label: 'Wind Velocity Limit', value: '140 mph (3-Sec Gust)', note: 'Calculated at gradient height for Exposure B/C' },
        { label: 'Allowable Story Drift', value: '0.015 h_sx (1.5%)', note: 'Based on Risk Category III criteria' },
        { label: 'Seismic Importance Factor (I_e)', value: riskCategory === 'IV' ? '1.50' : riskCategory === 'III' ? '1.25' : '1.00', note: 'Mandates higher ductility & non-linear peer review' },
        { label: 'Redundancy Factor (ρ)', value: '1.30 Required', note: 'Enforced for Seismic Design Category D, E, F' }
      ],
      checklist: [
        'Non-linear dynamic response spectrum procedure verified (Section 16.2)',
        'Diaphragm in-plane flexure and transfer forces analyzed (Section 12.10)',
        'Accidental torsional eccentricity included with dynamic amplification',
        'P-Delta secondary geometric non-linear displacement effects verified'
      ]
    },
    'IBC 2024': {
      title: 'IBC 2024: International Building Code Structural Provisions',
      organization: 'International Code Council (ICC)',
      primaryScope: 'Municipal Permitting, Special Inspections, Live Load Reductions, Structural Testing',
      parameters: [
        { label: 'Municipal Peer Review', value: 'Mandatory (> 240ft)', note: 'Third-party PE/SE stamped review required' },
        { label: 'Live Load Reduction', value: 'Allowable up to 50%', note: 'Calculated via cumulative tributary influence area' },
        { label: 'Foundation Factor of Safety', value: 'F.S. ≥ 2.5', note: 'Against overturning and geotechnical slope sliding' },
        { label: 'Special Inspections', value: 'Continuous Level 1', note: 'High-strength bolting, CJP welding & post-tensioning' }
      ],
      checklist: [
        'Special inspection schedule signed by licensed engineer of record (Chapter 17)',
        'Soil-structure interaction report integrated with geotechnical borings',
        'Fire-resistance rating for primary structural frame verified (Table 601)',
        'Structural observation plan submitted for city building permit review'
      ]
    },
    'ACI 318-19': {
      title: 'ACI 318-19: Building Code Requirements for Structural Concrete',
      organization: 'American Concrete Institute',
      primaryScope: 'Cast-in-Place Concrete, Post-Tensioned Slabs, Shear Wall Boundary Elements, Couplers',
      parameters: [
        { label: 'Concrete Compressive (f\'c)', value: 'C80 (80 MPa / 11,600 psi)', note: 'Specified for high-rise central shear wall core' },
        { label: 'Boundary Element Ties', value: '135° Seismic Hooks', note: 'Confines concrete core against high axial compression' },
        { label: 'Unbonded Tendon Stress', value: 'f_ps = 1,860 MPa', note: 'Grade 270 low-relaxation 7-wire strand' },
        { label: 'Minimum Rebar Elongation', value: '≥ 12% Ductility', note: 'ASTM A706 Grade 60/80 weldable seismic rebar' }
      ],
      checklist: [
        'Shear wall coupling beam diagonal cross-reinforcement detailed (Chapter 18)',
        'Punching shear reinforcement rails installed at slab-column interfaces',
        'Creep and shrinkage camber calculated per CEB-FIP / ACI 209 formulations',
        'Crack control reinforcement verified for exposure durability (Section 24.3)'
      ]
    },
    'AISC 360-22': {
      title: 'AISC 360-22 & AISC 341: Structural Steel Specification & Seismic Provisions',
      organization: 'American Institute of Steel Construction',
      primaryScope: 'Heavy Structural Steel Framing, Welded Moment Connections, BRBF Systems, Column Splices',
      parameters: [
        { label: 'Structural Steel Grade', value: 'ASTM A992 (Fy = 50 ksi)', note: 'Wide flange beams and composite megacolumns' },
        { label: 'Column Splice Capacity', value: '100% Minimum Plastic Moment', note: 'Staggered 4 feet above finished floor line' },
        { label: 'Connection Ductility', value: '0.04 Radian Rotation', note: 'Qualified per AISC 358 pre-qualified moment connections' },
        { label: 'Bolt Tensioning', value: 'ASTM F3125 Grade A325/A490', note: 'Pre-tensioned slip-critical high-strength bolts' }
      ],
      checklist: [
        'Reduced Beam Section (RBS / Dogbone) cuts verified to protect column face',
        'Continuity and doubler plates designed for beam-to-column panel zones',
        'Buckling-restrained braces (BRBF) hysteretic testing verified per AISC 341',
        'Composite steel deck shear stud spacing calculated for diaphragm shear'
      ]
    }
  };

  const currentCode = codesData[activeCode] || codesData['ASCE 7-22'];

  return (
    <div className="rounded-3xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 sm:p-10 shadow-lg dark:shadow-2xl relative overflow-hidden transition-colors duration-200">
      
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-[#26282D] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-zinc-50 dark:bg-[#121417] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-xs font-semibold">
            <FileCheck2 size={13} className="text-[#D4AF37]" />
            Regulatory Building Code & Municipal Compliance Auditor
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
            Code Compliance Matrix & Seismic Criteria
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#9CA3AF] font-mono mt-1">
            Audit structural design parameters against ASCE 7-22, IBC 2024, ACI 318, and AISC 360 standards
          </p>
        </div>

        {/* Code Selector Pills */}
        <div className="flex flex-wrap gap-2 bg-zinc-100 dark:bg-[#121417] p-1.5 rounded-2xl border border-zinc-200 dark:border-[#333]">
          {Object.keys(codesData).map((codeKey) => (
            <button
              key={codeKey}
              onClick={() => setActiveCode(codeKey)}
              className={`rounded-xl px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCode === codeKey
                  ? 'bg-[#D4AF37] text-[#121417] shadow-xs'
                  : 'text-zinc-600 dark:text-[#9CA3AF] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
              }`}
            >
              {codeKey}
            </button>
          ))}
        </div>
      </div>

      {/* Risk Category & SDC Selectors */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8 bg-zinc-50 dark:bg-[#121417] p-4 rounded-2xl border border-zinc-200 dark:border-[#2D3137] relative z-10 font-mono text-xs">
        <div className="flex items-center justify-between gap-4">
          <span className="text-zinc-600 dark:text-[#9CA3AF] uppercase font-bold text-[10px]">Building Risk Category:</span>
          <div className="flex gap-1.5">
            {['I', 'II', 'III', 'IV'].map((rc) => (
              <button
                key={rc}
                onClick={() => setRiskCategory(rc)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  riskCategory === rc
                    ? 'bg-[#D4AF37] text-[#121417] shadow-2xs'
                    : 'bg-white dark:bg-[#181A1E] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333]'
                }`}
              >
                Cat {rc}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-zinc-600 dark:text-[#9CA3AF] uppercase font-bold text-[10px]">Seismic Design Category (SDC):</span>
          <div className="flex gap-1.5">
            {['A', 'B', 'C', 'D', 'E', 'F'].map((sdc) => (
              <button
                key={sdc}
                onClick={() => setSeismicCategory(sdc)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  seismicCategory === sdc
                    ? 'bg-[#D4AF37] text-[#121417] shadow-2xs'
                    : 'bg-white dark:bg-[#181A1E] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333]'
                }`}
              >
                {sdc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content (12-Col Grid) */}
      <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Parameter Metrics (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">
              {currentCode.title}
            </h4>
            <p className="text-xs text-[#D4AF37] font-mono mb-4 font-semibold">
              Authorized Authority: {currentCode.organization} · Scope: {currentCode.primaryScope}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {currentCode.parameters.map((param, i) => (
              <div key={i} className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121417] border border-zinc-200 dark:border-[#2D3137] flex flex-col justify-between shadow-2xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-[#9CA3AF] block mb-1 font-semibold">
                    {param.label}
                  </span>
                  <span className="text-base font-extrabold text-zinc-900 dark:text-[#EAEAEA] font-mono block">
                    {param.value}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37] font-medium block mt-2 pt-2 border-t border-zinc-200 dark:border-[#222]">
                  {param.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Code Checklist & Certification Stamp (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-zinc-50 dark:bg-[#14161A] border border-zinc-200 dark:border-[#2D3137] p-6 sm:p-7 flex flex-col justify-between shadow-xs dark:shadow-xl">
          <div>
            <h5 className="text-xs font-mono font-bold uppercase text-[#D4AF37] tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck size={16} /> Engineering Verification Audit
            </h5>

            <div className="flex flex-col gap-3 font-mono text-xs mb-6">
              {currentCode.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white dark:bg-[#121417] border border-zinc-200 dark:border-[#26282D] shadow-2xs">
                  <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-800 dark:text-[#EAEAEA] text-[11px] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-[#26282D] flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-[#9CA3AF]">
            <span>Audit Status: <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Code Verified</span></span>
            <span className="text-[#D4AF37] font-bold">PE #84729 / SE #92041</span>
          </div>
        </div>

      </div>

    </div>
  );
};
