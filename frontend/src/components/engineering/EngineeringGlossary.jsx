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
    <div className="py-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D3AE36] font-bold">
            <BookOpen size={14} className="animate-pulse" />
            <span>Authoritative Structural Engineering Knowledge Base</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-[#1E2025] tracking-tight dark:text-[#F8F9FA]">
            Structural Engineering Glossary &amp; <span className="text-[#D3AE36]">Code Formula</span> Reference
          </h3>
          <p className="text-xs sm:text-sm text-[#1E2025]/80 dark:text-[#F8F9FA]/80 mt-1 max-w-2xl leading-relaxed">
            Plain-English explanations, governing mathematical formulas, and legal building code citations for architects, developers, and project teams.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={15} />
          <input 
            type="text"
            placeholder="Search formulas or terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-[#232936] border border-[#31394D]/30 rounded-full focus:border-[#D3AE36] focus:ring-1 focus:ring-[#D3AE36] text-xs text-[#1E2025] dark:text-[#F8F9FA] placeholder:text-zinc-400 dark:placeholder:text-[#F8F9FA]/40 pl-9 pr-4 py-2.5 outline-none font-mono transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="relative z-10 flex flex-wrap gap-2 my-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#D3AE36] text-[#12151C] shadow-[0_4px_14px_rgba(211,174,54,0.3)] font-extrabold'
                : 'bg-zinc-100 dark:bg-[#232936] text-zinc-600 dark:text-[#F8F9FA]/70 border border-zinc-200/60 dark:border-[#31394D] hover:border-[#D3AE36]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Glossary Items */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6 my-6">
        {filtered.map((item, idx) => {
          const isExpanded = selectedTerm === item.term;
          return (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-[#12151C] text-[10px] font-mono text-[#D3AE36] uppercase tracking-wider inline-block mb-1.5 font-bold border border-zinc-200/50 dark:border-[#31394D]">
                      {item.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#1E2025] group-hover:text-[#D3AE36] dark:group-hover:text-[#D3AE36] transition-colors dark:text-[#F8F9FA] leading-snug">
                      {item.term}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#D3AE36]/10 text-[10px] font-mono text-[#D3AE36] shrink-0 font-bold border border-[#D3AE36]/30">
                    {item.code.split(' ')[0]}
                  </span>
                </div>

                {/* Formula Callout */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#12151C]/60 border border-zinc-200/60 dark:border-[#31394D]/40 font-mono text-xs text-[#D3AE36] font-extrabold flex items-center justify-between mb-3 shadow-2xs">
                  <span>{item.formula}</span>
                  <span className="text-[9px] text-zinc-500 dark:text-[#F8F9FA]/60 uppercase">{item.code}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#1E2025]/85 dark:text-[#F8F9FA]/85 leading-relaxed mb-3">
                  {item.summary}
                </p>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-[#31394D]/50 space-y-3 animate-in fade-in duration-200 text-xs">
                    <div className="p-3.5 rounded-xl bg-zinc-50/80 dark:bg-[#12151C]/40 border border-zinc-200/50 dark:border-[#31394D]/30">
                      <strong className="text-[#D3AE36] block mb-1 font-bold">✦ Engineering Mechanics:</strong>
                      <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed">{item.explanation}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-50/80 dark:bg-[#12151C]/40 border border-zinc-200/50 dark:border-[#31394D]/30">
                      <strong className="text-[#D3AE36] block mb-1 font-bold">✦ Practical Impact on Job Site:</strong>
                      <p className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed">{item.significance}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3.5 border-t border-zinc-100 dark:border-[#31394D]/50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedTerm(isExpanded ? null : item.term)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] hover:underline transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {isExpanded ? 'Collapse Details' : 'Deep Technical Breakdown →'}
                </button>
                <span className="text-[10px] font-mono text-zinc-500 dark:text-[#F8F9FA]/60">
                  {item.code}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-6 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-[#F8F9FA]/70 gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-[#D3AE36]" />
          <span>Curated under EBCS EN 1990 to 1998 and ERA 2024 Standards</span>
        </div>
        <div className="text-[#D3AE36] font-bold">
          ASTU SoCEA 5th Year Brotherhood Verified
        </div>
      </div>

    </div>
  );
};
