import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  ChevronRight, 
  HardHat, 
  Bookmark, 
  CheckCircle2, 
  FileText, 
  ArrowUpRight,
  Copy,
  Download,
  ShieldCheck,
  Building2,
  Check
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

export const InsightDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState(false);

  const { data, loading } = useFetch(`/insights/${slug}`);
  const { data: allData } = useFetch('/insights');

  const fallbackArticles = [
    {
      id: '1',
      title: 'Innovations in High-Strength C80 Concrete Formulations & Creep Mechanics',
      slug: 'innovations-high-strength-c80-concrete',
      category: 'Materials Science',
      publishedAt: 'Oct 12, 2026',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80',
      excerpt: 'Evaluating micro-silica and fly ash additives for high-performance concrete cores in supertall skyscrapers.',
      content: `High-strength concrete (HSC) with compressive strengths exceeding 80 MPa (C80/C90) has fundamentally altered supertall structural engineering. By refining the aggregate-paste interfacial transition zone with micro-silica silica fume and blast furnace slag, structural engineers can significantly decrease column cross-sections, maximizing leasable floor plate area while mitigating creep and shrinkage under massive vertical dead loads.

### 1. Interfacial Transition Zone (ITZ) Densification
Standard concrete mixes often develop micro-cracks at the transition boundary between coarse aggregate and cement paste. By incorporating condensed silica fume (particles averaging 0.1 µm in diameter, 100 times finer than cement grains), we achieve particle packing density that eliminates bleed-water channels and dramatically increases both compressive and shear moduli.

### 2. Creep & Differential Shortening Analysis
In buildings exceeding 50 stories, cumulative axial shortening of vertical concrete elements over 30 years can exceed 80-120mm. Without precise compensation during construction staging:
- Floor slabs slope noticeably towards the central shear wall core.
- Mechanical pipe risers experience severe shear strain.
- Exterior curtain wall anchor brackets bind and crack.

Using CEB-FIP Model Code formulation within our ETABS staged construction models, we forecast hydration heat dissipation, autogenous shrinkage, and long-term creep curves. This allows the structural engineering team to prescribe camber offsets for each floor level before casting.

### 3. Sustainability & Embodied Carbon Offsets
By replacing up to 45% of Ordinary Portland Cement (OPC) with ground granulated blast-furnace slag (GGBS) and class F fly ash, we reduced the embodied carbon footprint of the Nexus Tower core walls by 32% while attaining 90-day design strengths of 92 MPa.`
    },
    {
      id: '2',
      title: 'Seismic Retrofitting Strategies for Pre-1980 Structural Steel Frame Buildings',
      slug: 'seismic-retrofitting-pre-1980-steel-frames',
      category: 'Seismic Design',
      publishedAt: 'Sep 28, 2026',
      readTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
      excerpt: 'Modern nonlinear pushover assessment and viscous fluid damper retrofits to safeguard historic steel infrastructure.',
      content: `Welded unreinforced flange-bolted web (WUF-B) connections common prior to the 1994 Northridge earthquake present severe brittle fracture risks. Through three-dimensional non-linear response history analysis (NLRHA), engineers can identify high-strain plastic hinge locations and integrate fluid viscous dampers (FVD) or buckling-restrained braced frames (BRBF) to dissipate up to 70% of ground motion energy without destructive architectural demolition.

### 1. Vulnerability Assessment & ASCE 41-17 Protocols
Legacy moment-resisting frames designed in the 1960s and 1970s relied on E70T-4 flux-cored arc welding electrodes with low Charpy V-notch toughness. Under cyclic seismic excitation, stress concentrations at the root pass of complete-joint-penetration (CJP) bottom beam flange welds propagate sudden brittle fractures before plastic hinges develop.

### 2. Damping vs Bracing Intervention
Rather than excavating tenant finishes to replace hundreds of individual beam-to-column connections, our preferred engineering intervention integrates supplemental energy dissipation systems:
- Buckling-restrained braces installed along exterior facade bays.
- Fluid viscous dampers placed at perimeter moment frames to absorb seismic energy.
- Carbon fiber polymer (CFRP) composite wraps for local beam shear enhancement.`
    }
  ];

  const article = data?.insight || fallbackArticles.find(a => a.slug === slug) || fallbackArticles[0];
  const related = (allData?.insights || fallbackArticles).filter(a => a.slug !== slug).slice(0, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-transparent text-inherit relative pt-32 pb-24 overflow-hidden selection:bg-[#D3AE36] selection:text-white transition-colors duration-200">
      
      {/* Background Sheen & Ambient Aurora Lights */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#D3AE36]/8 dark:bg-[#D3AE36]/20 blur-[140px] animate-aurora-drift"></div>
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D3AE36]/8 dark:bg-[#D3AE36]/15 blur-[120px] animate-aurora-drift-2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-[#D3AE36] dark:hover:text-[#D3AE36] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-zinc-400" />
          <Link to="/insights" className="hover:text-[#D3AE36] dark:hover:text-[#D3AE36] transition-colors">Insights</Link>
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="text-[#D3AE36] font-bold line-clamp-1">{article.title}</span>
        </div>

        {/* Back and Action Bar */}
        <div className="flex justify-between items-center pb-4 mb-8">
          <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-[#D3AE36] dark:hover:text-[#D3AE36] transition-colors">
            <ArrowLeft size={16} /> All Insights
          </Link>

          <button
            onClick={handleCopy}
            className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 hover:text-[#D3AE36] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Share2 size={13} className="text-[#D3AE36]" /> {copied ? 'Link Copied!' : 'Share Article'}
          </button>
        </div>

        {/* Article Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[#D3AE36] text-xs font-mono font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <Calendar size={12} className="text-[#D3AE36]" /> {article.publishedAt}
            </span>
            <span>·</span>
            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <Clock size={12} className="text-[#D3AE36]" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight mb-6">
            <span className="text-[#D3AE36]">{article.title.split(' ')[0]}</span> {article.title.split(' ').slice(1).join(' ')}
          </h1>

          {/* Author Bento Badge */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 shadow-xs">
            <div className="w-11 h-11 rounded-full text-[#D3AE36] bg-[#D3AE36]/10 border-2 border-[#D3AE36] flex items-center justify-center font-bold text-sm shrink-0">
              LA
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#1E2025] dark:text-[#F8F9FA] flex items-center gap-1.5">
                Lemma Amensisa &amp; Brothers
                <span className="text-[10px] text-[#D3AE36] font-mono font-bold">· ASTU SoCEA 5th Year</span>
              </h4>
              <p className="text-xs text-zinc-500 dark:text-[#F8F9FA]/60">5th Year Civil Engineering Candidates · Class of 2026 · ASTU</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {article.imageUrl && (
          <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-12 relative border border-[#31394D]/20 shadow-md">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose max-w-none text-base text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed space-y-6 mb-16">
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl sm:text-2xl font-black text-[#1E2025] dark:text-[#F8F9FA] text-left pt-6 pb-2 border-l-4 border-[#D3AE36] pl-4">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const bullets = paragraph.split('\n- ');
              return (
                <ul key={index} className="space-y-2 pl-4 list-disc text-sm sm:text-base text-[#1E2025]/90 dark:text-[#F8F9FA]/90">
                  {bullets.map((b, i) => (
                    <li key={i}>{b.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Academic & ASTU Formal Citation Box */}
        <div className="rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/30 p-6 sm:p-8 shadow-sm my-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-100 dark:border-[#31394D]/50">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D3AE36]">
              <ShieldCheck size={16} />
              <span className="font-bold uppercase tracking-wider">Formal Capstone &amp; Academic Reference</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-[#F8F9FA]/60">ASTU SoCEA Reference Format</span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-[#12151C]/60 border border-zinc-200/60 dark:border-[#31394D]/40 font-mono text-xs text-[#1E2025]/90 dark:text-[#F8F9FA]/90 leading-relaxed mb-5">
            Amensisa, L. &amp; Brothers (2026). "{article.title}". <em>School of Civil Engineering &amp; Architecture (SoCEA)</em>, Adama Science and Technology University (ASTU), Capstone Research Archive, Adama, Ethiopia.
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                navigator.clipboard.writeText(`Amensisa, L. & Brothers (2026). "${article.title}". School of Civil Engineering & Architecture (SoCEA), Adama Science and Technology University (ASTU), Capstone Archive, Adama, Ethiopia.`);
                setCopiedCitation(true);
                setTimeout(() => setCopiedCitation(false), 2500);
              }}
              className="px-4 py-2 rounded-full bg-[#D3AE36]/10 border border-[#D3AE36]/40 text-xs font-mono font-bold uppercase tracking-wider text-[#D3AE36] hover:bg-[#D3AE36] hover:text-[#12151C] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Copy size={13} /> {copiedCitation ? 'Citation Copied!' : 'Copy ASTU Citation'}
            </button>
            <button
              onClick={() => {
                const text = `=====================================================\nASTU CIVIL ENGINEERING TECHNICAL NOTE\nTitle: ${article.title}\nAuthors: Lemma Amensisa & 5th Year Civil Engineering Brothers\nInstitution: Adama Science and Technology University (ASTU) - SoCEA\nDate: ${article.publishedAt}\nCategory: ${article.category}\n\nCONTENT:\n${article.content}\n=====================================================`;
                const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${article.slug || 'engineering-note'}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
              className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-[#12151C] border border-zinc-200 dark:border-[#31394D] text-xs font-mono font-bold uppercase tracking-wider text-[#1E2025] dark:text-[#F8F9FA] hover:border-[#D3AE36] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download size={13} className="text-[#D3AE36]" /> Export Memo (TXT)
            </button>
          </div>
        </div>

        {/* Article Footer & Consultation Link */}
        <div className="rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/30 p-6 sm:p-8 shadow-sm my-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-left max-w-xl">
            <h4 className="text-xl font-black text-[#1E2025] dark:text-[#F8F9FA] mb-1">
              Have questions about this <span className="text-[#D3AE36]">engineering methodology?</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#F8F9FA]/70 leading-relaxed">Directly discuss EBCS compliance, structural modeling, or capstone collaboration with our ASTU student team.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D3AE36] hover:bg-[#C29F2F] text-[#12151C] px-7 py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_8px_20px_rgba(211,174,54,0.3)] shrink-0 flex items-center gap-2 cursor-pointer border border-[#D3AE36]"
          >
            Connect With Brothers <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="pt-8 mb-16">
            <h3 className="text-2xl font-black text-[#1E2025] dark:text-[#F8F9FA] mb-6">
              More <span className="text-[#D3AE36]">Engineering Insights</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map(rel => (
                <Link
                  key={rel.id}
                  to={`/insights/${rel.slug}`}
                  className="rounded-3xl bg-white dark:bg-[#232936] border border-[#31394D]/25 dark:border-[#31394D]/60 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D3AE36]/60 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#D3AE36] uppercase tracking-wider block mb-2 font-bold">{rel.category}</span>
                    <h4 className="text-base font-bold text-[#1E2025] dark:text-[#F8F9FA] group-hover:text-[#D3AE36] dark:group-hover:text-[#D3AE36] transition-colors mb-2 leading-snug">{rel.title}</h4>
                  </div>
                  <span className="text-xs font-mono font-bold uppercase text-[#D3AE36] flex items-center gap-1.5 mt-4">
                    Read Article <ArrowUpRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
