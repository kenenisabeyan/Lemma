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
  const [activeCode, setActiveCode] = useState('EBCS EN 1998:2015');
  const [riskCategory, setRiskCategory] = useState('III'); // 'I', 'II', 'III', 'IV'
  const [seismicCategory, setSeismicCategory] = useState('D'); // 'A', 'B', 'C', 'D', 'E', 'F'

  const codesData = {
    'EBCS EN 1998:2015': {
      title: 'EBCS EN 1998:2015: Design of Structures for Earthquake Resistance (Ethiopia)',
      organization: 'Ethiopian Building Code Standards / MoUDC',
      primaryScope: 'Seismic Zoning (Rift Valley Zone 4), Lateral Storey Drift, Dual RC Shear Wall Detailing',
      parameters: [
        { label: 'Peak Ground Acceleration (ag)', value: '0.15g - 0.20g (Zone 4)', note: 'Calculated for Adama / Great Rift Valley active tectonic fault corridor' },
        { label: 'Allowable Storey Drift', value: 'dr · ν ≤ 0.010 h (1.0%)', note: 'Based on ductile non-structural element damage limitation' },
        { label: 'Behavior Factor (q)', value: riskCategory === 'IV' ? '3.0 (DCM Core)' : '3.6 (Dual System)', note: 'Ductility Class Medium RC frames with coupled shear walls' },
        { label: 'Torsional Sensitivity', value: 'rx/ls ≥ 1.0 Verified', note: 'Prevents excessive torsional vibration modes during seismic shock' }
      ],
      checklist: [
        'Modal response spectrum procedure verified with 90% participating mass',
        'Accidental eccentricity 5% diaphragm floor dimension included',
        'Shear wall boundary confinement ties detailed per Section 5.4.3',
        'P-Delta second order effects sensitivity coefficient θ < 0.10 confirmed'
      ]
    },
    'EBCS EN 1992:2015': {
      title: 'EBCS EN 1992:2015: Design of Reinforced Concrete Structures',
      organization: 'Ethiopian Standards Agency (ESA) & MoUDC',
      primaryScope: 'Ultimate Limit State (ULS), Serviceability (SLS), Rebar Anchorage, Crack Widths',
      parameters: [
        { label: 'Concrete Class', value: 'C25/30 to C35/45', note: 'Specified for columns, transfer beams, and floor slabs in Ethiopia' },
        { label: 'Steel Yield Strength (fyk)', value: '500 MPa (Grade 60 Ribbed)', note: 'Class B/C high-ductility ribbed rebar manufactured in Ethiopia' },
        { label: 'Max Crack Width (wk)', value: 'wk ≤ 0.30 mm', note: 'Serviceability limit for internal/external environmental exposure' },
        { label: 'Minimum Rebar Cover', value: 'c_nom = 35 - 50 mm', note: 'Foundation footings in contact with aggressive soil: 50mm' }
      ],
      checklist: [
        'Beam-column joint shear check verified per EBCS EN 1992-1-1',
        'Punching shear reinforcement rails installed around flat slab columns',
        'Bar curtailment and lap length lap stagger rules satisfied',
        'Long-term creep and shrinkage deflection calculated per Section 7.4'
      ]
    },
    'ERA Manual 2024': {
      title: 'ERA Manual 2024: Ethiopian Roads Administration Standards',
      organization: 'Ethiopian Roads Administration (ERA)',
      primaryScope: 'Geometric Route Alignment, Super-elevation, Culvert Hydraulics, Pavement Layers',
      parameters: [
        { label: 'Design Standard', value: 'DC6 / DC7 Asphalt Concrete', note: 'Standard for major federal highway links and arterial routes' },
        { label: 'Design Speed', value: '80 - 100 km/h (Flat/Rolling)', note: 'Reduced to 50 km/h in mountainous Rift Valley terrain' },
        { label: 'Max Super-elevation (e_max)', value: '8.0% ERA Standard', note: 'Transitioned smoothly along spiral easement curves' },
        { label: 'Stopping Sight Distance', value: 'SSD ≥ 160m (at 90 km/h)', note: 'Minimum sight clearance on both horizontal and crest vertical curves' }
      ],
      checklist: [
        'AutoCAD Civil 3D horizontal spiral curves meet ERA Table 4.1',
        'Vertical curve K-values verified for crest and sag headlight comfort',
        'Hydraulic design of standard reinforced concrete box culverts verified',
        'Mass-haul diagram balanced to minimize borrow pit haulage distance'
      ]
    },
    'EBCS EN 1997:2015': {
      title: 'EBCS EN 1997:2015: Geotechnical Foundation Design',
      organization: 'Ethiopian Standards Agency / MoUDC',
      primaryScope: 'Expansive Black Cotton Soil, Bearing Capacity, Differential Settlement, Strap Footings',
      parameters: [
        { label: 'Allowable Bearing (q_all)', value: '180 - 250 kPa', note: 'Typical dense gravelly silty strata underlying Adama town' },
        { label: 'Free Swell Index (FSI)', value: 'FSI > 80% (High Swell)', note: 'Requires soil replacement or moisture barrier isolation' },
        { label: 'Differential Settlement', value: 'δ/L ≤ 1/500 Limit', note: 'Controlled using reinforced grade tie beams & strap foundations' },
        { label: 'Safety Factor (ULS)', value: 'γ_R;v = 1.40 (Design Approach 1)', note: 'Geotechnical resistance factor against ground bearing failure' }
      ],
      checklist: [
        'Standard Penetration Test (SPT N-values) correlated with soil profiles',
        'Expansive soil chemical stabilization or 1.5m cut-and-replace verified',
        'Isolated footing strap beams designed to absorb overturning moments',
        'Groundwater table fluctuation evaluated for sub-base moisture stability'
      ]
    }
  };

  const currentCode = codesData[activeCode] || codesData['EBCS EN 1998:2015'];

  return (
    <div className="py-6 sm:py-8 relative overflow-hidden transition-colors duration-200">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-800 px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-xs font-semibold">
            <FileCheck2 size={13} className="text-[#D4AF37]" />
            Regulatory Building Code &amp; ERA Compliance Matrix
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#54595F] dark:text-zinc-100 tracking-tight">
            EBCS EN &amp; ERA <span className="text-[#D4AF37]">Compliance Auditor</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#54595F] dark:text-zinc-400 font-mono mt-1">
            Audit structural and infrastructure parameters against EBCS EN 1998, EBCS EN 1992, ERA 2024, and EBCS EN 1997 standards
          </p>
        </div>

        {/* Code Selector Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl">
          {Object.keys(codesData).map((codeKey) => (
            <button
              key={codeKey}
              onClick={() => setActiveCode(codeKey)}
              className={`rounded-xl px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCode === codeKey
                  ? 'bg-[#D4AF37] text-[#121417] shadow-xs'
                  : 'text-[#54595F] dark:text-zinc-400 hover:text-[#D4AF37]'
              }`}
            >
              {codeKey}
            </button>
          ))}
        </div>
      </div>

      {/* Risk Category & SDC Selectors */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8 relative z-10 font-mono text-xs">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[#54595F] dark:text-zinc-400 uppercase font-bold text-[10px]">Building Risk Category:</span>
          <div className="flex gap-1.5">
            {['I', 'II', 'III', 'IV'].map((rc) => (
              <button
                key={rc}
                onClick={() => setRiskCategory(rc)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  riskCategory === rc
                    ? 'text-[#D4AF37] font-extrabold'
                    : 'text-[#54595F] dark:text-zinc-400 hover:text-[#D4AF37]'
                }`}
              >
                Cat {rc}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-[#54595F] dark:text-zinc-400 uppercase font-bold text-[10px]">Seismic Design Category (SDC):</span>
          <div className="flex gap-1.5">
            {['A', 'B', 'C', 'D', 'E', 'F'].map((sdc) => (
              <button
                key={sdc}
                onClick={() => setSeismicCategory(sdc)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  seismicCategory === sdc
                    ? 'text-[#D4AF37] font-extrabold'
                    : 'text-[#54595F] dark:text-zinc-400 hover:text-[#D4AF37]'
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
            <h4 className="text-xl font-bold text-[#54595F] dark:text-zinc-100 mb-1">
              {currentCode.title}
            </h4>
            <p className="text-xs text-[#D4AF37] font-mono mb-4 font-semibold">
              Authorized Authority: {currentCode.organization} · Scope: {currentCode.primaryScope}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {currentCode.parameters.map((param, i) => (
              <div key={i} className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#54595F]/80 dark:text-zinc-400 block mb-1 font-semibold">
                    {param.label}
                  </span>
                  <span className="text-base font-extrabold text-[#54595F] dark:text-zinc-100 font-mono block">
                    {param.value}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37] font-medium block mt-2 pt-2">
                  {param.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Code Checklist & Certification Stamp (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <h5 className="text-xs font-mono font-bold uppercase text-[#D4AF37] tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck size={16} /> Engineering Verification Audit
            </h5>

            <div className="flex flex-col gap-2 font-mono text-xs mb-6">
              {currentCode.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 py-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-[#54595F] dark:text-zinc-300 text-[11px] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#54595F] dark:text-zinc-400">
            <span>Audit Status: <span className="text-emerald-600 font-bold">100% Code Verified</span></span>
            <span className="text-[#D4AF37] font-bold">ASTU SoCEA Verified · Class of 2026</span>
          </div>
        </div>

      </div>

    </div>
  );
};
