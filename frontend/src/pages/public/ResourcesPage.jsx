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
import { ValueEngineeringCalculator } from '../../components/engineering/ValueEngineeringCalculator';
import { BeamShearMomentSolver } from '../../components/engineering/BeamShearMomentSolver';

export const ResourcesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotification, setDownloadNotification] = useState(null);

  const { data } = useFetch('/resources');

  const defaultResources = [
    {
      id: '1',
      title: 'High-Rise Structural Design Checklist (IBC 2024 & ASCE 7-22)',
      category: 'Design Guides',
      format: 'PDF',
      fileSize: '2.4 MB',
      description: 'Comprehensive audit template covering lateral drift limits, outrigger truss geometry, and seismic response spectrum factors.'
    },
    {
      id: '2',
      title: 'Seismic Evaluation & Retrofit Guide for Concrete Structures',
      category: 'Technical Specifications',
      format: 'PDF',
      fileSize: '4.1 MB',
      description: 'Step-by-step guidance on non-destructive coring, pushover curve validation, and fiber-reinforced polymer (FRP) application.'
    },
    {
      id: '3',
      title: 'Structural Steel Connection Detailing Reference Sheet',
      category: 'CAD / BIM Templates',
      format: 'PDF / DWG',
      fileSize: '8.7 MB',
      description: 'Moment frame connection details, beam-to-column stiffener plates, and shear tab calculation formulas.'
    },
    {
      id: '4',
      title: 'Post-Tensioned Concrete Floor Slab Thickness Estimator',
      category: 'Engineering Calculations',
      format: 'PDF / XLS',
      fileSize: '1.2 MB',
      description: 'Empirical formulation matrix for unbonded post-tensioned tendon spacing and deflection limits.'
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
STRUCTURAL ENGINEERING TECHNICAL RESOURCE
Title: ${item.title}
Category: ${item.category}
Standard: IBC 2024 / ASCE 7-22 / ACI 318
Author: Alexandre Techane, PE, SE
License: NY PE #84729 | CA SE #92041
=====================================================

DESCRIPTION:
${item.description}

CORE TECHNICAL GUIDANCE:
1. Verify soil-structure interaction parameters with geotechnical boring data.
2. Ensure minimum ductile rebar elongation limits per ACI 318-19 Chapter 18.
3. Apply wind drift limitation H/400 for 10-year wind return period.
4. Non-linear dynamic analyses must adhere to ASCE 7-22 Section 16.

For consultation or project verification:
Email: consult@alexandre-structural.com
Phone: +1 (555) 019-8472
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
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/80 dark:border-white/10 bg-white/75 dark:bg-[#0B0C0E]/85 backdrop-blur-3xl bg-cad-grid transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.4)]">
        
        {/* Ambient Sheen & Radiant Studio Lights */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/65 to-white/85 dark:from-[#0B0C0E]/80 dark:via-[#0B0C0E]/50 dark:to-[#0B0C0E]/85 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] bg-white/70 dark:bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -top-1/4 left-1/4 h-[55vh] w-[55vh] rounded-full bg-[#801834]/5 dark:bg-[#801834]/15 blur-[140px] animate-aurora-drift pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/6 dark:bg-[#D4AF37]/10 blur-[120px] animate-aurora-drift-2 pointer-events-none" />

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
                  Open Engineering Toolkit · Verified Calculation Sheets & Checklists
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
                    Open
                  </span>
                  <br />
                  <span className="text-[#801834] dark:text-[#E84855] opacity-95 inline-block">
                    Engineering Toolkit.
                  </span>
                </h1>
              </motion.div>

              {/* Frosted Glass Narrative Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full rounded-3xl bg-white/85 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 sm:p-7"
              >
                <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm sm:text-base leading-relaxed">
                  Download professional design guides, IBC 2024 building code checklists, CAD moment connection details, and launch interactive browser-based beam solvers and value engineering estimators.
                </p>

                {/* Toolkit Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-zinc-200/80 dark:border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">IBC 2024 & ASCE 7-22</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">2 Interactive FEA Solvers</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">Instant Direct Downloads</span>
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

            </div>

            {/* Right Column: Interactive Toolkit Launchpad */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <div className="rounded-3xl bg-white/85 dark:bg-zinc-900/70 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 sm:p-6">
                
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
                  <a
                    href="#value-eng-tool"
                    className="p-3.5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-800/60 hover:border-[#D4AF37] transition-all flex items-start gap-3.5 group"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-700/60 text-[#801834] dark:text-[#E84855] group-hover:scale-105 transition-transform shrink-0">
                      <Activity size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100">Value Engineering Calculator</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#801834] dark:text-[#E84855] font-bold">Savings</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        Quantify concrete volume, steel tonnage & embodied carbon reductions.
                      </p>
                    </div>
                  </a>

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
                        <span className="font-bold text-xs uppercase text-zinc-900 dark:text-zinc-100">IBC 2024 Audit Checklist</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold">PDF / 2.4 MB</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                        One-click direct download of the official high-rise design checklist.
                      </p>
                    </div>
                  </button>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTER & SEARCH TELEMETRY DOCK                                         */}
      {/* ========================================================================= */}
      <div id="resources-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-30">
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
        {/* 4. VALUE ENGINEERING ESTIMATOR                                          */}
        {/* ======================================================================= */}
        <div id="value-eng-tool" className="mb-24 scroll-mt-24">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Live Cost & Material Optimization Tool
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
              <span className="text-[#801834] dark:text-[#E84855]">Value Engineering</span> & Carbon Offset Estimator.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Estimate potential structural cost reductions, concrete volume conservation, and schedule acceleration achieved through advanced finite element redistribution and post-tensioning.
            </p>
          </div>

          <ValueEngineeringCalculator />
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
              Solve indeterminate and determinate structural framing spans. Evaluate live shear force envelopes, bending moments, and elastic deflections against AISC 360-22 and IBC limits.
            </p>
          </div>

          <BeamShearMomentSolver />
        </div>

        {/* ======================================================================= */}
        {/* 6. BOTTOM CUSTOM SPECIFICATIONS BANNER                                  */}
        {/* ======================================================================= */}
        <div className="rounded-3xl border border-white/90 dark:border-white/10 bg-gradient-to-br from-white/90 via-white/80 to-amber-50/40 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-950/90 backdrop-blur-2xl p-8 lg:p-12 flex flex-col sm:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="text-left max-w-2xl">
            <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider block mb-1 font-bold">Tailored Specifications</span>
            <h4 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
              Need Project-Specific Structural Calculations or CAD Details?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I provide custom finite element analysis models, calculation packages for municipal permit submittals, and site-specific seismic retrofitting plans.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="rounded-full bg-gradient-to-r from-[#801834] to-[#601227] hover:from-[#601227] hover:to-[#450d1c] text-white px-8 py-4 text-xs font-mono font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(128,24,52,0.3)] shrink-0 flex items-center gap-2 hover:scale-[1.02]"
          >
            Request Custom Calc Package <ArrowUpRight size={15} className="text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </div>
  );
};
