import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ShieldCheck, 
  ChevronRight, 
  ExternalLink, 
  HelpCircle, 
  Sparkles,
  Layers,
  Activity,
  CheckCircle2
} from 'lucide-react';

export const EngineeringGlossary = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState(null);

  const glossaryItems = [
    {
      term: 'Base Shear (Fb)',
      category: 'Seismic Dynamics',
      formula: 'F_b = S_d(T_1) · m · λ',
      code: 'EBCS EN 1998-1:2015 §4.3.3.2',
      summary: 'The total maximum expected lateral earthquake force occurring at the foundation base of the structure.',
      explanation: 'Base shear represents the total horizontal inertia load generated when earthquake ground acceleration shakes the building mass (m) within the Great Rift Valley seismic zone. Civil engineers calculate this to size foundation footings, shear wall thicknesses, and column sections.',
      significance: 'Governs structural foundation requirements and dictates whether ductile coupled shear walls or moment frames are required.'
    },
    {
      term: 'Storey Drift Ratio (dr · ν)',
      category: 'High-Rise & Wind',
      formula: 'd_r · ν ≤ 0.010 h (Damage Limitation)',
      code: 'EBCS EN 1998 §4.4.3.2 / EBCS EN 1990',
      summary: 'The relative horizontal displacement between consecutive floor levels divided by the storey height.',
      explanation: 'Under extreme wind or earthquake shaking, multi-story buildings sway laterally. If the drift ratio exceeds EBCS limitations, masonry infill walls crack, glazing shatters, elevator shafts misalign, and non-structural damage occurs.',
      significance: 'Governs high-rise lateral stiffness and dictates shear wall layout in multi-story RC framing across Ethiopia.'
    },
    {
      term: 'P-Delta Interstorey Sensitivity (θ)',
      category: 'High-Rise & Wind',
      formula: 'θ = (P_tot · d_r) / (V_tot · h) ≤ 0.10',
      code: 'EBCS EN 1998 Section 4.4.2.2',
      summary: 'Second-order bending moments caused by heavy vertical gravity loads acting on laterally displaced columns.',
      explanation: 'When a column deflects sideways by distance dr while carrying heavy building weight (Ptot), an additional overturning moment is created. If θ exceeds 0.10, second-order effects must be explicitly included in ETABS models.',
      significance: 'Ensures geometric non-linear stability for buildings above 8 stories throughout urban centers in Ethiopia.'
    },
    {
      term: 'Behavior Factor (q)',
      category: 'Seismic Dynamics',
      formula: 'q = q_0 · k_w ≥ 1.5',
      code: 'EBCS EN 1998 Section 5.2.2.2',
      summary: 'Numerical coefficient that reduces elastic earthquake forces to account for structural ductility and plastic dissipation.',
      explanation: 'Structures are rarely designed to remain purely elastic during design earthquakes. EBCS EN 1998 allows reducing elastic seismic spectra by factor q (e.g., q=3.6 for Ductility Class Medium DCM dual systems) because ductile rebar yields safely.',
      significance: 'Directly dictates longitudinal and confinement tie reinforcement detailing mandated on structural bar bending schedules.'
    },
    {
      term: 'RC Solid Slab Span-to-Depth (l/d)',
      category: 'Concrete & Highway Structures',
      formula: 'l/d ≤ K · [11 + 1.5 · √(f_ck) · ρ_0/ρ]',
      code: 'EBCS EN 1992-1-1 Section 7.4',
      summary: 'Limiting span-to-effective-depth ratio ensuring deflection compliance without onerous finite element time-step calculation.',
      explanation: 'Controls long-term deflection, creep, and cracking in two-way solid floor slabs. If the actual l/d ratio satisfies EBCS EN 1992 limits, deflection will not damage partitions or ceiling finishes.',
      significance: 'Enables rapid, safe preliminary slab sizing in Ethiopian building projects, keeping slab thickness optimal.'
    },
    {
      term: 'Highway Super-Elevation (e)',
      category: 'Highway & Transportation',
      formula: 'e + f = V² / (127 · R)',
      code: 'ERA Geometric Design Manual 2024 Table 4.5',
      summary: 'Cross-slope banking along horizontal curves designed to counteract centrifugal force on vehicles traveling at design speed.',
      explanation: 'On Ethiopian federal highways, horizontal curves are banked up to a maximum super-elevation (e_max = 8.0%) along spiral transition easements to guarantee vehicle stability and driver comfort.',
      significance: 'Determines AutoCAD Civil 3D corridor cross-sections, runoff lengths, and safe traveling speeds on mountainous terrain.'
    },
    {
      term: 'Expansive Clay Free Swell (FSI)',
      category: 'Geotechnical Foundations',
      formula: 'FSI = [(V_f - V_i) / V_i] · 100%',
      code: 'EBCS EN 1997 & ERA Geotechnical Manual',
      summary: 'The percentage volume expansion of dry clay soil subgrade when submerged in distilled water without surcharge.',
      explanation: 'Black cotton soils common in Adama and the Great Rift Valley exhibit FSI > 80%, indicating extreme swelling potential that causes heave in ground slabs and foundations upon wetting.',
      significance: 'Dictates whether foundation soil requires 1.5m cut-and-replace, lime/cement chemical stabilization, or grade strap beams.'
    },
    {
      term: 'Rigid Diaphragm In-Plane Action',
      category: 'Concrete & Highway Structures',
      formula: 'δ_diaphragm ≤ 2 · δ_vertical',
      code: 'EBCS EN 1998-1:2015 Section 4.3.1',
      summary: 'The capacity of reinforced concrete floor slabs to transfer horizontal lateral loads to vertical shear walls without excessive in-plane deformation.',
      explanation: 'Solid RC floor slabs act as infinitely rigid horizontal deep plates, ensuring that lateral wind and earthquake forces distribute to shear walls and frames in direct proportion to their lateral stiffness.',
      significance: 'Permits the use of 3D modal response spectrum analysis in ETABS and guarantees uniform structural integrity.'
    }
  ];

  const categories = ['All', 'Seismic Dynamics', 'High-Rise & Wind', 'Concrete & Highway Structures', 'Highway & Transportation', 'Geotechnical Foundations'];

  const filtered = glossaryItems.filter((item) => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchQuery = searchQuery === '' || 
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="rounded-3xl bg-[#FFFFFF] border border-zinc-200 p-6 lg:p-10 shadow-xl relative overflow-hidden">
      
      {/* Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-zinc-200">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
            <BookOpen size={14} className="animate-pulse" />
            <span>Authoritative Structural Engineering Knowledge Base</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-[#54595F] tracking-tight">
            Structural Engineering Glossary & <span className="text-[#D4AF37]">Code Formula</span> Reference
          </h3>
          <p className="text-xs sm:text-sm text-[#54595F] mt-1 max-w-2xl leading-relaxed">
            Plain-English explanations, governing mathematical formulas, and legal building code citations for architects, developers, and project teams.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={15} />
          <input 
            type="text"
            placeholder="Search formulas or terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FFFFFF] rounded-full border border-zinc-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs text-[#54595F] placeholder:text-[#54595F]/50 pl-9 pr-4 py-2.5 outline-none font-mono transition-colors shadow-sm"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="relative z-10 flex flex-wrap gap-2 my-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105'
                : 'bg-[#FFFFFF] text-[#54595F] border border-zinc-200 hover:border-[#D4AF37]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Glossary Cards */}
      <div className="relative z-10 grid md:grid-cols-2 gap-4 my-6">
        {filtered.map((item, idx) => {
          const isExpanded = selectedTerm === item.term;
          return (
            <div
              key={idx}
              className={`rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${
                isExpanded
                  ? 'bg-[#FFFFFF] border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-sm'
                  : 'bg-[#FFFFFF] border-zinc-200 hover:border-[#D4AF37]'
              }`}
            >
              <div>
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1 font-bold">
                      {item.category}
                    </span>
                    <h4 className="text-base font-bold text-[#54595F] hover:text-[#D4AF37] transition-colors">
                      {item.term}
                    </h4>
                  </div>
                  <span className="rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 text-[9px] font-mono text-[#D4AF37] px-2.5 py-1 shrink-0 font-bold">
                    {item.code.split(' ')[0]}
                  </span>
                </div>

                {/* Formula Callout Box */}
                <div className="bg-[#FFFFFF] px-3.5 py-2 rounded-xl border border-zinc-200 my-3 font-mono text-xs text-[#D4AF37] font-bold flex items-center justify-between">
                  <span>{item.formula}</span>
                  <span className="text-[9px] text-[#54595F]/75 uppercase">{item.code}</span>
                </div>

                <p className="text-xs text-[#54595F] leading-relaxed mb-3">
                  {item.summary}
                </p>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-zinc-200 space-y-3 animate-in fade-in duration-200 text-xs">
                    <div>
                      <strong className="text-[#54595F] block mb-1">Engineering Mechanics:</strong>
                      <p className="text-[#54595F] leading-relaxed">{item.explanation}</p>
                    </div>
                    <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#D4AF37]/40 text-[11px]">
                      <strong className="text-[#D4AF37] block mb-0.5 font-bold">Practical Impact on Job Site:</strong>
                      <p className="text-[#54595F] leading-relaxed">{item.significance}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedTerm(isExpanded ? null : item.term)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] hover:underline transition-colors flex items-center gap-1"
                >
                  {isExpanded ? 'Collapse Details' : 'Deep Technical Breakdown →'}
                </button>
                <span className="text-[10px] font-mono text-[#54595F]/75">
                  {item.code}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#54595F]/75 gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-[#D4AF37]" />
          <span>Curated under EBCS EN 1990 to 1998 and ERA 2024 Standards</span>
        </div>
        <div className="text-[#D4AF37] font-bold">
          ASTU SoCEA 5th Year Brotherhood Verified
        </div>
      </div>

    </div>
  );
};
