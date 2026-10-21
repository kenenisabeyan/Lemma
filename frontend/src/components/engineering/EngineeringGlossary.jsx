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
      term: 'Base Shear (Vb)',
      category: 'Seismic Dynamics',
      formula: 'V_b = C_s · W',
      code: 'ASCE 7-22 Section 12.8.1',
      summary: 'The total maximum expected lateral earthquake force occurring at the base of the structure.',
      explanation: 'Base shear represents the total horizontal inertia load generated when earthquake ground acceleration shakes the building mass (W). Structural engineers calculate this to size foundation anchor bolts, shear wall thickness, and column base plates.',
      significance: 'Governs the fundamental foundation requirements and dictates whether ductile shear walls or moment frames are required.'
    },
    {
      term: 'Drift Ratio (H / Δ)',
      category: 'High-Rise & Wind',
      formula: 'Δ_roof ≤ H / 400 (Wind) | Δ_story ≤ 0.020 h_sx (Seismic)',
      code: 'ASCE 7-22 Table 12.12-1 / IBC 2024 §1604.3',
      summary: 'The relative lateral displacement between two floors or total roof sway divided by building height.',
      explanation: 'Under extreme wind or earthquake shaking, tall buildings sway horizontally. If the drift ratio is too high, glass facades shatter, interior drywall tears, elevator rails jam, and occupants experience motion sickness.',
      significance: 'Governs skyscraper lateral stiffness; often requires outrigger belt trusses even if structural strength capacity is sufficient.'
    },
    {
      term: 'P-Delta Secondary Effect',
      category: 'High-Rise & Wind',
      formula: 'θ = (P_x · Δ) / (V_x · h_sx · C_d)',
      code: 'ASCE 7-22 Section 12.8.7',
      summary: 'Second-order bending moments caused by heavy gravity loads acting on a laterally deflected column.',
      explanation: 'When a column deflects sideways by distance Δ while carrying heavy vertical building weight (P), an additional overturning moment (P × Δ) is created. If secondary P-Delta moments are ignored, catastrophic instability can occur.',
      significance: 'Forces engineers to perform rigorous second-order non-linear geometric matrix analyses for buildings taller than 10 stories.'
    },
    {
      term: 'Response Modification Factor (R)',
      category: 'Seismic Dynamics',
      formula: 'C_s = S_DS / (R / I_e)',
      code: 'ASCE 7-22 Table 12.2-1',
      summary: 'A numerical factor that reduces elastic earthquake forces to account for structural ductility and energy dissipation.',
      explanation: 'Buildings are rarely designed to remain fully elastic during massive earthquakes because members would become impractically gigantic. Instead, codes allow reducing design forces by R (e.g., R=8 for Special RC Shear Walls) because ductile reinforcing rebar yields and safely dissipates energy.',
      significance: 'Directly dictates how much rebar confinement detailing is legally mandated on structural construction drawings.'
    },
    {
      term: 'Post-Tensioned Balancing Load (wb)',
      category: 'Concrete & Post-Tensioning',
      formula: 'w_b = (8 · P · e) / L²',
      code: 'ACI 318-19 Chapter 24 / PTI Manual 6th Ed',
      summary: 'Upward force exerted by parabolic high-strength steel tendons that counteracts downward slab dead loads.',
      explanation: 'Unbonded steel tendons tensioned inside plastic ducts curve upward like a draped hammock. When pulled to 30,000 psi, they push upward against the concrete, balancing 60% to 80% of the concrete dead weight and virtually eliminating sagging and cracking.',
      significance: 'Allows floor slabs to be 30% thinner, reducing building total weight, foundation caisson costs, and concrete carbon footprints.'
    },
    {
      term: 'Buckling-Restrained Braced Frame (BRBF)',
      category: 'Steel & Connections',
      formula: 'β = P_max,comp / P_max,tens ≤ 1.30',
      code: 'AISC 341-22 Section F4',
      summary: 'Special structural steel diagonal braces encased in mortar to prevent buckling under high compression.',
      explanation: 'Conventional steel braces buckle immediately under compression during earthquakes. BRBFs encase a ductile steel core in a steel tube filled with non-adhesive mortar, allowing the steel core to yield symmetrically in both tension and compression without buckling.',
      significance: 'Dissipates massive seismic energy, minimizing damage to main structural columns and speeding post-earthquake re-occupancy.'
    },
    {
      term: 'Diaphragm Flexibility & Chord Tension',
      category: 'Concrete & Post-Tensioning',
      formula: 'T_chord = M_diaphragm / d_depth',
      code: 'ASCE 7-22 Section 12.10',
      summary: 'The ability of a horizontal concrete floor slab to collect lateral facade wind loads and distribute them to the core.',
      explanation: 'Floors act as horizontal deep beams. Perimeter edges act as tensile chords and compressive flanges. If chord rebar is undersized, the concrete slab tears away from the exterior columns during lateral shaking.',
      significance: 'Critical for irregular L-shaped, T-shaped, or podium buildings where large lateral forces transfer between offsets.'
    },
    {
      term: 'Liquefaction Potential Index (LPI)',
      category: 'Geotechnical Foundations',
      formula: 'CSR = 0.65 · (a_max / g) · (σ_vo / σ\'_vo) · r_d',
      code: 'ASCE 7-22 Chapter 20 / IBC 2024 §1803.5.11',
      summary: 'A metric measuring the risk that saturated loose soil transforms into a temporary liquid slurry during an earthquake.',
      explanation: 'Saturated sandy soils lose all shear strength under cyclic ground shaking as pore water pressure rises to equal overburden pressure. Buildings on unreinforced shallow footings can tilt or sink several meters into the liquefied ground.',
      significance: 'Mandates driving deep drilled shaft caissons or pre-stressed concrete piles down into solid bedrock below the liquefiable layer.'
    }
  ];

  const categories = ['All', 'Seismic Dynamics', 'High-Rise & Wind', 'Concrete & Post-Tensioning', 'Steel & Connections', 'Geotechnical Foundations'];

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
          <span>Curated under ASCE 7-22, IBC 2024, ACI 318-19, and AISC 360-22 standards</span>
        </div>
        <div className="text-[#D4AF37] font-bold">
          PE/SE Certified Technical Guidance
        </div>
      </div>

    </div>
  );
};
