import React, { useState } from 'react';
import { FileText, Download, FileCode, ShieldCheck, Search, Filter, CheckCircle2 } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { ValueEngineeringCalculator } from '../../components/engineering/ValueEngineeringCalculator';
import { BeamShearMomentSolver } from '../../components/engineering/BeamShearMomentSolver';

export const ResourcesPage = () => {
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

  const resources = data?.resources || defaultResources;

  const categories = ['All', 'Design Guides', 'Technical Specifications', 'CAD / BIM Templates', 'Engineering Calculations'];

  const filteredResources = resources.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (item) => {
    // Generate an engineering document download simulation
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
    <div className="relative min-h-screen bg-transparent text-inherit pt-28 pb-24 selection:bg-[#801834] selection:text-white overflow-hidden">
      {/* Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#801834]/10 dark:bg-[#801834]/15 blur-[130px] animate-aurora-drift motion-reduce:animate-none"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#801834]/8 dark:bg-[#801834]/12 blur-[110px] animate-aurora-drift-2 motion-reduce:animate-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 border-b border-zinc-200/80 dark:border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#801834] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#801834]"></span>
            </span>
            Engineering Documentation & Reference Library
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.08] mb-5">
            Engineering <span className="text-[#801834] dark:text-[#E84855]">Resources.</span>
          </h1>
          <div className="rounded-2xl bg-white/95 dark:bg-[#181A1E]/80 backdrop-blur-md border border-rose-100/90 dark:border-zinc-800 p-6 shadow-[0_8px_30px_rgba(128,24,52,0.04)] max-w-3xl">
            <p className="text-zinc-700 dark:text-zinc-300 text-base lg:text-lg leading-relaxed">
              Download professional guides, technical checklists, code compliance reference documents, and structural calculation summaries prepared for engineers and architects.
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 bg-white dark:bg-[#181A1E] p-3 rounded-2xl border border-zinc-200/90 dark:border-[#333]/80 shadow-sm dark:shadow-xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] shadow-sm scale-105'
                    : 'bg-zinc-100 dark:bg-[#121417] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333] hover:text-zinc-900 dark:hover:text-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-[#9CA3AF]" size={15} />
            <input
              type="text"
              placeholder="Search guides, specs, math..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-[#121417] rounded-full border border-zinc-200 dark:border-[#333] focus:border-[#801834] dark:focus:border-[#D4AF37] text-xs text-zinc-900 dark:text-[#EAEAEA] placeholder:text-zinc-400 dark:placeholder:text-[#666] pl-9 pr-4 py-2 outline-none font-mono transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Download Notification Toast */}
        {downloadNotification && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2 animate-in fade-in shadow-md">
            <CheckCircle2 size={16} /> {downloadNotification}
          </div>
        )}

        {/* Resource List */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {filteredResources.map((item, index) => (
            <div 
              key={item.id || index} 
              className="group rounded-2xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 hover:border-[#801834]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/40 text-[#801834] dark:text-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <FileText size={22} />
                  </div>
                  <span className="rounded-full text-[10px] font-mono font-bold text-[#801834] dark:text-[#D4AF37] border border-zinc-200 dark:border-[#D4AF37]/30 px-3 py-1 uppercase tracking-wider bg-zinc-100 dark:bg-[#121417] shadow-sm">
                    {item.format} • {item.fileSize || '1.8 MB'}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#801834] dark:text-[#D4AF37] uppercase tracking-widest block mb-2 font-bold">{item.category}</span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA] group-hover:text-[#801834] dark:group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">{item.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] leading-relaxed mb-6">{item.description}</p>
              </div>

              <button
                onClick={() => handleDownload(item)}
                className="rounded-full bg-zinc-100 hover:bg-[#801834] hover:text-white dark:bg-[#121417] dark:hover:bg-[#D4AF37] dark:hover:text-[#121417] text-[#801834] dark:text-[#D4AF37] border border-zinc-200 dark:border-[#D4AF37]/40 transition-all py-3 px-6 text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm font-bold"
              >
                Download Document <Download size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Value Engineering Estimator */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-white dark:bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-sm mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37] animate-pulse"></span>
              Live Cost & Material Optimization Tool
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Value Engineering & <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">Carbon Offset Estimator.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Estimate potential structural cost reductions, concrete volume conservation, and schedule acceleration achieved through advanced finite element redistribution and post-tensioning.
            </p>
          </div>

          <ValueEngineeringCalculator />
        </div>

        {/* Interactive Beam Mechanics Laboratory */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-[#D4AF37]/40 bg-white dark:bg-[#181A1E] px-4 py-1.5 text-xs font-mono text-[#801834] dark:text-[#D4AF37] shadow-sm mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#801834] dark:bg-[#D4AF37] animate-pulse"></span>
              Computational Structural Analysis
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight mb-4">
              Beam Shear, Moment & <span className="text-[#801834] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#D4AF37] dark:via-[#F3E5AB] dark:to-[#D4AF37]">Deflection Laboratory.</span>
            </h2>
            <p className="text-zinc-600 dark:text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              Solve indeterminate and determinate structural framing spans. Evaluate live shear force envelopes, bending moments, and elastic deflections against AISC 360-22 and IBC limits.
            </p>
          </div>

          <BeamShearMomentSolver />
        </div>

        {/* Request Custom Technical Guidance Box */}
        <div className="rounded-2xl bg-white dark:bg-gradient-to-r dark:from-[#181A1E] dark:via-[#14161A] dark:to-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl dark:shadow-2xl">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#801834] dark:text-[#D4AF37] tracking-wider block mb-1 font-bold">Tailored Specifications</span>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-[#EAEAEA]">Need Project-Specific Structural Calculations or CAD Details?</h4>
            <p className="text-xs text-zinc-600 dark:text-[#9CA3AF] mt-1 max-w-xl leading-relaxed">
              I provide custom finite element analysis models, calculation packages for municipal permit submittals, and site-specific seismic retrofitting plans.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest hover:bg-zinc-900 dark:hover:bg-white transition-all shadow-md shrink-0"
          >
            Request Custom Calc Package
          </a>
        </div>

      </div>
    </div>
  );
};
