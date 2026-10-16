import React, { useState } from 'react';
import { FileText, Download, FileCode, ShieldCheck, Search, Filter, CheckCircle2 } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';

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
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 border-b border-[#333] pb-10">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Engineering Documentation & Reference Material
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-6">
            Engineering <span className="text-[#D4AF37]">Resources.</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-3xl leading-relaxed">
            Download professional guides, technical checklists, code compliance reference documents, and structural calculation summaries prepared for engineers and architects.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#121417] border-[#D4AF37]'
                    : 'bg-[#181A1E] text-[#9CA3AF] border-[#333] hover:text-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181A1E] border border-[#333] focus:border-[#D4AF37] text-xs text-[#EAEAEA] pl-9 pr-4 py-2.5 outline-none font-mono"
            />
          </div>
        </div>

        {/* Download Notification Toast */}
        {downloadNotification && (
          <div className="mb-6 p-4 bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 size={16} /> {downloadNotification}
          </div>
        )}

        {/* Resource List */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {filteredResources.map((item, index) => (
            <div key={item.id || index} className="bg-[#1E2125] border border-[#333] p-8 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-[#121417] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center">
                    <FileText size={24} />
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 uppercase tracking-widest bg-[#121417]">
                    {item.format} • {item.fileSize || '1.8 MB'}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#9CA3AF] uppercase tracking-widest block mb-2">{item.category}</span>
                <h3 className="text-xl font-bold text-[#EAEAEA] mb-3">{item.title}</h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">{item.description}</p>
              </div>

              <button
                onClick={() => handleDownload(item)}
                className="bg-[#121417] text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#121417] transition-all py-3 px-6 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                Download Document <Download size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Request Custom Technical Guidance Box */}
        <div className="bg-[#181A1E] border border-[#333] p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider block mb-1">Tailored Specifications</span>
            <h4 className="text-xl font-bold text-[#EAEAEA]">Need Project-Specific Structural Calculations or CAD Details?</h4>
            <p className="text-xs text-[#9CA3AF] mt-1 max-w-xl">
              I provide custom finite element analysis models, calculation packages for municipal permit submittals, and site-specific seismic retrofitting plans.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-[#D4AF37] text-[#121417] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shrink-0"
          >
            Request Custom Calc Package
          </a>
        </div>

      </div>
    </div>
  );
};
