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
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#54595F] pt-28 pb-24 selection:bg-[#D4AF37] selection:text-[#121417] overflow-hidden">
      {/* Ambient subtle glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[8%] h-[55vh] w-[55vh] rounded-full bg-[#D4AF37]/5 blur-[130px]"></div>
        <div className="absolute bottom-0 right-[4%] h-[45vh] w-[45vh] rounded-full bg-[#D4AF37]/5 blur-[110px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 border-b border-zinc-200 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/90 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-xl px-4 py-1.5 text-xs font-mono font-semibold text-[#D4AF37] shadow-[0_2px_12px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Engineering Documentation & Reference Library
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tight leading-[1.08] mb-5">
            <span className="text-[#D4AF37]">Engineering</span> Resources.
          </h1>
          <div className="rounded-2xl bg-white/80 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/90 dark:border-white/20 p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] max-w-3xl">
            <p className="text-[#54595F] text-base lg:text-lg leading-relaxed">
              Download professional guides, technical checklists, code compliance reference documents, and structural calculation summaries prepared for engineers and architects.
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 bg-[#FFFFFF] p-3 rounded-2xl border border-zinc-200 shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#121417] shadow-sm scale-105'
                    : 'bg-[#FFFFFF] text-[#54595F] border border-zinc-200 hover:border-[#D4AF37]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={15} />
            <input
              type="text"
              placeholder="Search guides, specs, math..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FFFFFF] rounded-full border border-zinc-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs text-[#54595F] placeholder:text-[#54595F]/50 pl-9 pr-4 py-2 outline-none font-mono transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Download Notification Toast */}
        {downloadNotification && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md">
            <CheckCircle2 size={16} /> {downloadNotification}
          </div>
        )}

        {/* Resource List */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {filteredResources.map((item, index) => (
            <div 
              key={item.id || index} 
              className="group rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-8 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <FileText size={22} />
                  </div>
                  <span className="rounded-full text-[10px] font-mono font-bold text-[#D4AF37] border border-[#D4AF37]/40 px-3 py-1 uppercase tracking-wider bg-[#FFFFFF] shadow-sm">
                    {item.format} • {item.fileSize || '1.8 MB'}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-2 font-bold">{item.category}</span>
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">{item.title}</h3>
                <p className="text-xs text-[#54595F] leading-relaxed mb-6">{item.description}</p>
              </div>

              <button
                onClick={() => handleDownload(item)}
                className="rounded-full bg-[#FFFFFF] hover:bg-[#D4AF37] hover:text-[#121417] text-[#54595F] border border-[#D4AF37] transition-all py-3 px-6 text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm font-bold"
              >
                Download Document <Download size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Value Engineering Estimator */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Live Cost & Material Optimization Tool
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              <span className="text-[#D4AF37]">Value Engineering</span> & Carbon Offset Estimator.
            </h2>
            <p className="text-[#54595F] text-sm md:text-base leading-relaxed">
              Estimate potential structural cost reductions, concrete volume conservation, and schedule acceleration achieved through advanced finite element redistribution and post-tensioning.
            </p>
          </div>

          <ValueEngineeringCalculator />
        </div>

        {/* Interactive Beam Mechanics Laboratory */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-[#FFFFFF] px-4 py-1.5 text-xs font-mono text-[#D4AF37] shadow-xs mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Computational Structural Analysis
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              <span className="text-[#D4AF37]">Beam Shear, Moment</span> & Deflection Laboratory.
            </h2>
            <p className="text-[#54595F] text-sm md:text-base leading-relaxed">
              Solve indeterminate and determinate structural framing spans. Evaluate live shear force envelopes, bending moments, and elastic deflections against AISC 360-22 and IBC limits.
            </p>
          </div>

          <BeamShearMomentSolver />
        </div>

        {/* Request Custom Technical Guidance Box */}
        <div className="rounded-2xl bg-[#FFFFFF] border border-zinc-200 p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider block mb-1 font-bold">Tailored Specifications</span>
            <h4 className="text-xl font-bold text-zinc-900"><span className="text-[#D4AF37]">Need</span> Project-Specific Structural Calculations or CAD Details?</h4>
            <p className="text-xs text-[#54595F] mt-1 max-w-xl leading-relaxed">
              I provide custom finite element analysis models, calculation packages for municipal permit submittals, and site-specific seismic retrofitting plans.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest hover:bg-[#c49f2c] transition-all shadow-md shrink-0"
          >
            Request Custom Calc Package
          </a>
        </div>

      </div>
    </div>
  );
};
