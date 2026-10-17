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
  ArrowUpRight 
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

export const InsightDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

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
    <div className="relative min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24 overflow-hidden selection:bg-[#D4AF37] selection:text-[#121417]">
      {/* Alazar Signature Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#D4AF37]/15 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/10 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF] uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#444]" />
          <Link to="/insights" className="hover:text-[#D4AF37] transition-colors">Insights</Link>
          <ChevronRight size={14} className="text-[#444]" />
          <span className="text-[#D4AF37] font-bold line-clamp-1">{article.title}</span>
        </div>

        {/* Back and Action Bar */}
        <div className="flex justify-between items-center pb-6 mb-8 border-b border-[#333]">
          <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
            <ArrowLeft size={16} /> All Insights
          </Link>

          <button
            onClick={handleCopy}
            className="rounded-full bg-[#181A1E] text-[#9CA3AF] hover:text-[#D4AF37] border border-[#333] hover:border-[#D4AF37] px-4 py-2 text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
          >
            <Share2 size={13} /> {copied ? 'Link Copied!' : 'Share Article'}
          </button>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full bg-[#181A1E] border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono font-bold uppercase tracking-wider px-3.5 py-1">
              {article.category}
            </span>
            <span className="text-xs font-mono text-[#9CA3AF] flex items-center gap-1.5">
              <Calendar size={12} className="text-[#D4AF37]" /> {article.publishedAt}
            </span>
            <span>·</span>
            <span className="text-xs font-mono text-[#9CA3AF] flex items-center gap-1.5">
              <Clock size={12} className="text-[#D4AF37]" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#EAEAEA] tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          {/* Author Bento Badge (Alazar style) */}
          <div className="flex items-center gap-4 bg-[#181A1E] p-4 rounded-2xl border border-[#333]/80 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#121417] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-bold text-sm shadow-inner">
              AT
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#EAEAEA] flex items-center gap-1.5">
                Alexandre Techane, PE, SE
                <span className="text-[10px] text-[#D4AF37] font-mono">· Verified Author</span>
              </h4>
              <p className="text-xs text-[#9CA3AF]">Principal Structural Engineer & Technical Director</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {article.imageUrl && (
          <div className="aspect-[16/9] rounded-2xl bg-[#181A1E] border border-[#333]/80 overflow-hidden mb-12 shadow-2xl">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-700" />
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none text-base text-[#9CA3AF] leading-relaxed space-y-6 mb-16">
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-bold text-[#EAEAEA] text-left pt-6 pb-2 border-l-2 border-[#D4AF37] pl-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const bullets = paragraph.split('\n- ');
              return (
                <ul key={index} className="space-y-2 pl-4 list-disc text-sm text-[#EAEAEA]">
                  {bullets.map((b, i) => (
                    <li key={i}>{b.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article Footer & Consultation Link */}
        <div className="rounded-2xl bg-gradient-to-r from-[#181A1E] via-[#14161A] to-[#181A1E] border border-[#333]/80 p-8 mb-16 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-2xl">
          <div>
            <h4 className="text-lg font-bold text-[#EAEAEA] mb-1">Have questions about this engineering methodology?</h4>
            <p className="text-xs text-[#9CA3AF]">Directly discuss structural modeling or FEA review for your project.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-[#D4AF37] text-[#121417] px-7 py-3 text-xs font-extrabold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] shrink-0"
          >
            Inquire With Engineer
          </button>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="border-t border-[#333] pt-12">
            <h3 className="text-xl font-bold text-[#EAEAEA] mb-6">More Engineering Insights</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map(rel => (
                <Link
                  key={rel.id}
                  to={`/insights/${rel.slug}`}
                  className="rounded-2xl bg-[#181A1E] border border-[#333]/80 hover:border-[#D4AF37]/50 p-6 transition-all group shadow-xl hover:shadow-[0_10px_25px_rgba(212,175,55,0.08)] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">{rel.category}</span>
                    <h4 className="text-base font-bold text-[#EAEAEA] group-hover:text-[#D4AF37] transition-colors mb-2">{rel.title}</h4>
                  </div>
                  <span className="text-xs font-bold uppercase text-[#D4AF37] flex items-center gap-1 mt-4">
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
