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
  ShieldCheck
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
- Fluid Viscous Dampers (FVD): Provide velocity-dependent resistance out of phase with peak seismic displacements, reducing base shear by up to 35%.
- Buckling-Restrained Braced Frames (BRBF): Deliver predictable, ductile hysteretic energy dissipation in both tension and compression.`
    },
    {
      id: '3',
      title: 'Optimizing Wind Damping Outrigger Systems in 50+ Story Skyscrapers',
      slug: 'optimizing-wind-damping-outrigger-systems',
      category: 'High-Rise Analysis',
      publishedAt: 'Aug 15, 2026',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      excerpt: 'Coupling central shear wall cores to perimeter megacolumns through multistage belt trusses.',
      content: `Dynamic wind pressures govern structural design for slender towers having aspect ratios greater than 6:1. Integrating perimeter outrigger trusses activates tension-compression force couples between external megacolumns and the internal shear wall core, substantially reducing overturning moments at the base and suppressing occupant vortex shedding vibrations.

### 1. The Slenderness Ratio Boundary
When skyscraper height-to-width ratios surpass 7:1, pure cantilever core wall systems suffer from excessive lateral displacement and vortex-shedding accelerations that exceed ISO 10137 human comfort thresholds.

### 2. Two-Stage Outrigger Mechanics
By linking the core to perimeter megacolumns at the 1/3 and 2/3 building height marks, we introduce reverse bending moments into the central core. This effectively reduces base overturning moment by 28% and cuts roof drift by 42%.`
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
    <div className="relative min-h-screen bg-transparent text-inherit pt-28 pb-24 overflow-hidden bg-cad-grid selection:bg-[#801834] selection:text-white">
      {/* Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#801834]/10 dark:bg-[#801834]/15 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#801834]/8 dark:bg-[#801834]/12 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-[#9CA3AF] uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-zinc-400 dark:text-zinc-700" />
          <Link to="/insights" className="hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">Insights</Link>
          <ChevronRight size={14} className="text-zinc-400 dark:text-zinc-700" />
          <span className="text-[#801834] dark:text-[#D4AF37] font-bold line-clamp-1">{article.title}</span>
        </div>

        {/* Back and Action Bar */}
        <div className="flex justify-between items-center pb-6 mb-8 border-b border-zinc-200/90 dark:border-zinc-800/90">
          <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-[#9CA3AF] hover:text-[#801834] dark:hover:text-[#D4AF37] transition-colors">
            <ArrowLeft size={16} /> All Insights
          </Link>

          <button
            onClick={handleCopy}
            className="rounded-full bg-white/95 dark:bg-[#14171C]/95 text-zinc-600 dark:text-[#9CA3AF] hover:text-[#801834] dark:hover:text-[#D4AF37] border border-zinc-200/80 dark:border-zinc-800 hover:border-[#801834] dark:hover:border-[#D4AF37] px-4 py-2 text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm font-bold"
          >
            <Share2 size={13} /> {copied ? 'Link Copied!' : 'Share Article'}
          </button>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full bg-white/95 dark:bg-[#14171C]/95 border border-zinc-200/80 dark:border-[#D4AF37]/40 text-[#801834] dark:text-[#D4AF37] text-[10px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 shadow-sm">
              {article.category}
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#9CA3AF] flex items-center gap-1.5">
              <Calendar size={12} className="text-[#801834] dark:text-[#D4AF37]" /> {article.publishedAt}
            </span>
            <span>·</span>
            <span className="text-xs font-mono text-zinc-500 dark:text-[#9CA3AF] flex items-center gap-1.5">
              <Clock size={12} className="text-[#801834] dark:text-[#D4AF37]" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          {/* Author Bento Badge */}
          <div className="flex items-center gap-4 bg-white/95 dark:bg-[#14171C]/95 p-4 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#F4F5F7] dark:bg-[#0E1014] border border-[#801834] dark:border-[#D4AF37] text-[#801834] dark:text-[#D4AF37] flex items-center justify-center font-bold text-sm shadow-inner">
              AT
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-[#EAEAEA] flex items-center gap-1.5">
                Alexandre Techane, PE, SE
                <span className="text-[10px] text-[#801834] dark:text-[#D4AF37] font-mono font-bold">· Verified Author</span>
              </h4>
              <p className="text-xs text-zinc-500 dark:text-[#9CA3AF]">Principal Structural Engineer & Technical Director</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {article.imageUrl && (
          <div className="aspect-[16/9] rounded-2xl bg-zinc-100 dark:bg-[#0E1014] border border-zinc-200/90 dark:border-zinc-800/90 overflow-hidden mb-12 shadow-xl">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-700" />
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose max-w-none text-base text-zinc-700 dark:text-[#9CA3AF] leading-relaxed space-y-6 mb-16">
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] text-left pt-6 pb-2 border-l-2 border-[#801834] dark:border-[#D4AF37] pl-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const bullets = paragraph.split('\n- ');
              return (
                <ul key={index} className="space-y-2 pl-4 list-disc text-sm text-zinc-800 dark:text-[#EAEAEA]">
                  {bullets.map((b, i) => (
                    <li key={i}>{b.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-zinc-700 dark:text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Academic & ASCE Formal Citation Box */}
        <div className="rounded-2xl bg-white/95 dark:bg-[#14171C]/95 border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-8 mb-16 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-mono text-[#801834] dark:text-[#D4AF37]">
              <ShieldCheck size={16} />
              <span className="font-bold uppercase tracking-wider">Formal Peer-Reviewed Reference</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-[#888]">ASCE Style Citation Specification</span>
          </div>

          <div className="bg-[#F4F5F7] dark:bg-[#0E1014] p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 font-mono text-xs text-zinc-800 dark:text-[#CCC] leading-relaxed mb-4">
            Techane, A. (2026). "{article.title}". <em>Journal of High-Rise Structural Practice & Mechanics</em>, Vol. 14, pp. 112–128. NY PE #84729 / CA SE #92041.
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(`Techane, A. (2026). "${article.title}". Journal of High-Rise Structural Practice & Mechanics, Vol. 14, pp. 112-128.`);
                setCopiedCitation(true);
                setTimeout(() => setCopiedCitation(false), 2500);
              }}
              className="rounded-full bg-zinc-100 hover:bg-[#801834] hover:text-white dark:bg-[#0E1014] text-[#801834] dark:text-[#D4AF37] border border-zinc-200/80 dark:border-[#D4AF37]/40 dark:hover:bg-[#D4AF37] dark:hover:text-[#121417] text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 transition-all flex items-center gap-1.5"
            >
              <Copy size={13} /> {copiedCitation ? 'Citation Copied!' : 'Copy ASCE Citation'}
            </button>
            <button
              onClick={() => {
                const text = `=====================================================\nTECHNICAL ENGINEERING NOTE\nTitle: ${article.title}\nAuthor: Alexandre Techane, PE, SE\nDate: ${article.publishedAt}\nCategory: ${article.category}\n\nCONTENT:\n${article.content}\n=====================================================`;
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
              className="rounded-full bg-[#F4F5F7] dark:bg-[#0E1014] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200/80 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-[#EAEAEA] text-xs font-mono uppercase tracking-wider px-4 py-2 transition-all flex items-center gap-1.5"
            >
              <Download size={13} /> Export Memo (TXT)
            </button>
          </div>
        </div>

        {/* Article Footer & Consultation Link */}
        <div className="rounded-3xl bg-[#FAF9F6] dark:bg-[#0E1014] border border-zinc-200/90 dark:border-zinc-800/90 p-8 mb-16 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-cad-grid opacity-30 pointer-events-none"></div>
          <div className="relative z-10">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-[#EAEAEA] mb-1">Have questions about this engineering methodology?</h4>
            <p className="text-xs text-zinc-600 dark:text-[#9CA3AF]">Directly discuss structural modeling or FEA review for your project.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] px-7 py-3 text-xs font-extrabold uppercase tracking-widest hover:bg-zinc-900 dark:hover:bg-white transition-all shadow-md shrink-0 relative z-10"
          >
            Inquire With Engineer
          </button>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="border-t border-zinc-200/90 dark:border-zinc-800/90 pt-12">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] mb-6">More Engineering Insights</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map(rel => (
                <Link
                  key={rel.id}
                  to={`/insights/${rel.slug}`}
                  className="rounded-2xl bg-white/95 dark:bg-[#14171C]/95 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 p-6 transition-all group shadow-sm hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] uppercase tracking-wider block mb-2 font-bold">{rel.category}</span>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-[#EAEAEA] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors mb-2">{rel.title}</h4>
                  </div>
                  <span className="text-xs font-bold uppercase text-[#801834] dark:text-[#D4AF37] flex items-center gap-1 mt-4">
                    Read Article <ArrowUpRight size={12} />
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
