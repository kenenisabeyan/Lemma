import React from 'react';
import { FileText, Download, FileCode, ShieldCheck } from 'lucide-react';

export const ResourcesPage = () => {
  const resources = [
    {
      title: 'High-Rise Structural Design Checklist (IBC 2024 & ASCE 7-22)',
      category: 'Design Guides',
      format: 'PDF',
      size: '2.4 MB',
      description: 'Comprehensive audit template covering lateral drift limits, outrigger truss geometry, and seismic response spectrum factors.'
    },
    {
      title: 'Seismic Evaluation & Retrofit Guide for Concrete Structures',
      category: 'Technical Specifications',
      format: 'PDF',
      size: '4.1 MB',
      description: 'Step-by-step guidance on non-destructive coring, pushover curve validation, and fiber-reinforced polymer (FRP) application.'
    },
    {
      title: 'Structural Steel Connection Detailing Reference Sheet',
      category: 'CAD / BIM Templates',
      format: 'PDF / DWG',
      size: '8.7 MB',
      description: 'Moment frame connection details, beam-to-column stiffener plates, and shear tab calculation formulas.'
    },
    {
      title: 'Post-Tensioned Concrete Floor Slab Thickness Estimator',
      category: 'Engineering Calculations',
      format: 'PDF / XLS',
      size: '1.2 MB',
      description: 'Empirical formulation matrix for unbonded post-tensioned tendon spacing and deflection limits.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Engineering Documentation & Reference Material
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-6">
            Engineering <span className="text-[#D4AF37]">Resources.</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-3xl leading-relaxed">
            Download professional guides, technical checklists, code compliance reference documents, and structural calculation summaries.
          </p>
        </div>

        {/* Resource List */}
        <div className="grid sm:grid-cols-2 gap-6">
          {resources.map((item, index) => (
            <div key={index} className="bg-[#1E2125] border border-[#333] p-8 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-[#121417] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center">
                    <FileText size={24} />
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 uppercase tracking-widest bg-[#121417]">
                    {item.format} • {item.size}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#9CA3AF] uppercase tracking-widest block mb-2">{item.category}</span>
                <h3 className="text-xl font-bold text-[#EAEAEA] mb-3">{item.title}</h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">{item.description}</p>
              </div>

              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Downloading ${item.title} (${item.format})`);
                }}
                className="bg-[#121417] text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#121417] transition-all py-3 px-6 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                Download Document <Download size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
