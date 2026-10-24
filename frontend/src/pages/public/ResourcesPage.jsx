import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  FileCode, 
  ShieldCheck, 
  Search, 
  Filter, 
  CheckCircle2, 
  Calculator, 
  Activity, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  X,
  ArrowRight
} from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { BeamShearMomentSolver } from '../../components/engineering/BeamShearMomentSolver';
import { Hero3DCanvas } from '../../components/engineering/Hero3DCanvas';
import { TechMarquee } from '../../components/common/TechMarquee';

export const ResourcesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotification, setDownloadNotification] = useState(null);

  const { data } = useFetch('/resources');

  const defaultResources = [
    {
      id: '1',
      title: 'ASTU B+G+10 Capstone RC Design Checklist (EBCS EN 1992 & 1998)',
      category: 'Design Guides',
      format: 'PDF',
      fileSize: '2.4 MB',
      description: 'Comprehensive structural audit sheet covering lateral drift limits, ductility class medium (DCM) shear walls, and Great Rift Valley seismic spectrum.'
    },
    {
      id: '2',
      title: 'Rift Valley Expansive Black Cotton Soil Foundation Guide',
      category: 'Technical Specifications',
      format: 'PDF',
      fileSize: '3.8 MB',
      description: 'ASTU geotechnical lab procedures for free swell index, lime/cement stabilization, and isolated footing vs. strap beam design.'
    },
    {
      id: '3',
      title: 'ERA Highway Geometric & Cross-Section CAD/BIM Detail Sheets',
      category: 'CAD / BIM Templates',
      format: 'PDF / DWG',
      fileSize: '9.2 MB',
      description: 'AutoCAD Civil 3D templates for Ethiopian Roads Administration DC6 standard, super-elevation transitions, and standard box culverts.'
    },
    {
      id: '4',
      title: 'Reinforced Concrete Beam & Column Bar Bending Schedule (BBS) Calculator',
      category: 'Engineering Calculations',
      format: 'PDF / XLS',
      fileSize: '1.4 MB',
      description: 'Automated Excel formulation for rebar cutting lengths, lap lengths per EBCS EN 1992-1-1, and steel tonnage estimation.'
    }
  ];

  const resources = (data?.resources && data.resources.length > 0) ? data.resources : defaultResources;
  const categories = ['All', 'Design Guides', 'Technical Specifications', 'CAD / BIM Templates', 'Engineering Calculations'];

  const filteredResources = resources.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (item) => {
    const content = `=====================================================
ASTU CIVIL ENGINEERING TECHNICAL RESOURCE
Title: ${item.title}
Category: ${item.category}
Standard: EBCS EN 1990 / 1991 / 1992 / 1998 & ERA Standards 2024
Authors: Lemma Techane & 5th Year Civil Engineering Brothers
Institution: Adama Science and Technology University (ASTU) · SoCEA
Academic Year: 5th Year Graduating Candidates · Class of 2026
=====================================================

DESCRIPTION:
${item.description}

CORE TECHNICAL GUIDANCE (ETHIOPIAN PRACTICE):
1. Verify Rift Valley seismic zone design acceleration (Zone 4) per EBCS EN 1998-1:2015.
2. Ensure minimum ductile rebar elongation limits and confinement links per EBCS EN 1992-1-1.
3. Test expansive black cotton soil active clay swell index before final foundation footing sizing.
4. Highway horizontal and vertical curves must strictly satisfy ERA Geometric Design Manual 2024 specifications.

For academic consultation or capstone collaboration:
Email: astu.civil.lemma@gmail.com
Campus: ASTU Main Campus, SoCEA Building, Adama, Ethiopia
Phone: +251 91 123 4567
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadNotification(`Downloaded: ${item.title}`);
    setTimeout(() => setDownloadNotification(null), 3500);
  };

  return (
    <div className="min-h-screen bg-transparent text-inherit relative selection:bg-[#801834] selection:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC RESOURCES & TOOLKIT HERO SECTION                             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B0C0E] backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Ambient Sheen & Radiant Studio Lights */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-[#0B0C0E] dark:via-[#0B0C0E] dark:to-[#0B0C0E] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/[0.02] dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/[0.02] dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

        {/* Architectural CAD Blueprint & 3D Three.js Civil Engineering Simulation */}
        <div className="absolute inset-0 overflow-hidden select-none z-10 pointer-events-none">
          <Hero3DCanvas />
          {/* Precision Blueprint Vignette Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 dark:from-[#0B0C0E] dark:via-[#0B0C0E]/90 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Scope, Headline, Bio */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-white/95 dark:border-white/20 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                  ASTU Civil Engineering · 5th Year Capstone Toolkit &amp; Calculation Sheets
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1.5"
              >
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100 drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                  Calculated Precision.{' '}
                  <span className="text-[#801834] dark:text-[#E84855] drop-shadow-[0_4px_20px_rgba(128,24,52,0.3)]">
                    ASTU
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Engineering Toolkit.
                  </span>
                </h1>
              </motion.div>

              {/* Narrative Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full space-y-4"
              >
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base leading-relaxed">
                  Download our 5th-year capstone checklists, Ethiopian code sheets, and road design templates, or test our interactive beam calculator.
                </p>

                {/* Toolkit Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">EBCS EN &amp; ERA Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">2 Interactive FEA Solvers</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Instant Capstone Downloads</span>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="#resources-feed"
                  className="rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] active:scale-95 text-[#121417] px-8 sm:px-9 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_32px_rgba(212,175,55,0.5)] border border-[#D4AF37] flex items-center gap-2 cursor-pointer"
                >
                  <span>Download Resources</span>
                  <FileText size={15} />
                </a>
                <a
                  href="#beam-solver"
                  className="rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-2xl text-zinc-900 dark:text-zinc-100 border border-white/90 dark:border-white/20 hover:border-[#D4AF37] hover:bg-white/95 dark:hover:bg-white/20 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] active:scale-95 px-7 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Launch Beam Solver</span>
                  <Calculator size={14} className="text-[#D4AF37]" />
                </a>
              </motion.div>

              {/* Quick KPI Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-2.5 pt-1 w-full max-w-lg"
              >
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white font-mono">5th</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">Academic Year</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#801834] dark:text-[#E84855] font-mono">2</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">FEA Live Solvers</span>
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 text-left">
                  <span className="block text-base sm:text-lg font-black text-[#D4AF37] font-mono">EBCS</span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 font-medium">EN Code Verified</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Interactive Toolkit Launchpad */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <div className="w-full">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Interactive Tools Launchpad</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Live Solvers</span>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Tool 1 */}
                  <a
                    href="#beam-solver"
                    className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] transition-all flex items-start gap-3.5 group"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] group-hover:scale-105 transition-transform shrink-0">
                      <Calculator size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100">Beam Shear & Moment Solver</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">FEA Live</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        Calculate shear force envelopes, moment diagrams & elastic deflections.
                      </p>
                    </div>
                  </a>

                  {/* Tool 2 */}
                  <button
                    onClick={() => handleDownload(defaultResources[3])}
                    className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] transition-all flex items-start gap-3.5 text-left group"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] group-hover:scale-105 transition-transform shrink-0">
                      <FileText size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100">RC Bar Bending Schedule (BBS)</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#801834] dark:text-[#E84855] font-bold">XLSX / BBS</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        Practical on-site bar cutting lengths, lap lengths &amp; steel tonnage sheet.
                      </p>
                    </div>
                  </button>

                  {/* Tool 3 */}
                  <button
                    onClick={() => handleDownload(defaultResources[0])}
                    className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] transition-all flex items-start gap-3.5 text-left group"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] group-hover:scale-105 transition-transform shrink-0">
                      <Download size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100">EBCS EN Capstone Audit Checklist</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold">PDF / 2.4 MB</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        One-click direct download of the official ASTU 5th-year structural design checklist.
                      </p>
                    </div>
                  </button>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <TechMarquee />

      {/* ========================================================================= */}
      {/* 2. FILTER & SEARCH TELEMETRY DOCK                                         */}
      {/* ========================================================================= */}
      <div id="resources-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-30">
        <div className="bg-white/95 dark:bg-zinc-900/90 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl border border-white/90 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none items-center">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? resources.length
                : resources.filter(r => r.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-2xl px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#801834] to-[#601227] text-white shadow-md shadow-[#801834]/25 scale-[1.02]'
                      : 'bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/5 hover:border-[#D4AF37]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected 
                      ? 'bg-[#D4AF37] text-zinc-950 font-black' 
                      : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Reset */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search guides, specs, calculations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-white/10 pl-10 pr-9 py-2.5 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Download Notification Toast */}
      {downloadNotification && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-md">
            <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" /> 
            {downloadNotification}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. RESOURCE CARDS GRID                                                    */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-8 mb-24">
          {filteredResources.map((item, index) => (
            <div 
              key={item.id || index} 
              className="group rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 p-8 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-[#801834] dark:text-[#E84855] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <FileText size={24} />
                  </div>
                  <span className="rounded-full text-[10px] font-mono font-extrabold text-[#D4AF37] border border-[#D4AF37]/40 px-3 py-1 uppercase tracking-wider bg-amber-500/10 shadow-xs">
                    {item.format} • {item.fileSize || '1.8 MB'}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2 font-bold">{item.category}</span>
                <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100 group-hover:text-[#801834] dark:group-hover:text-[#E84855] transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => handleDownload(item)}
                className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-[#801834] dark:hover:bg-[#E84855] hover:text-white transition-all py-3.5 px-6 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                Download Document <Download size={14} className="text-[#D4AF37]" />
              </button>
            </div>
          ))}
        </div>



        {/* ======================================================================= */}
        {/* 5. INTERACTIVE BEAM MECHANICS LABORATORY                                */}
        {/* ======================================================================= */}
        <div id="beam-solver" className="mb-24 scroll-mt-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Computational Structural Analysis
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              <span className="text-[#801834] dark:text-[#E84855]">Beam Shear, Moment</span> & Deflection Laboratory.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Solve indeterminate and determinate structural framing spans. Evaluate live shear force envelopes, bending moments, and elastic deflections against EBCS EN 1992 and design standards.
            </p>
          </div>

          <BeamShearMomentSolver />
        </div>

        {/* ======================================================================= */}
        {/* 6. BOTTOM CUSTOM SPECIFICATIONS BANNER                                  */}
        {/* ======================================================================= */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-gradient-to-br from-white/90 via-white/80 to-amber-50/40 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-950/90 backdrop-blur-2xl p-8 lg:p-12 flex flex-col sm:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="text-left max-w-2xl">
            <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider block mb-1 font-bold">Academic Collaboration &amp; Capstones</span>
            <h4 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
              Need Capstone Calculations, Soil Test Reviews, or Civil 3D Corridors?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our ASTU 5th-year graduating civil engineering team provides finite element analysis models, EBCS compliant calculation sheets, and AutoCAD Civil 3D highway drawings.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(128,24,52,0.3)] shrink-0 flex items-center gap-2 hover:scale-[1.02]"
          >
            Connect With Brothers <ArrowUpRight size={15} className="text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </div>
  );
};
