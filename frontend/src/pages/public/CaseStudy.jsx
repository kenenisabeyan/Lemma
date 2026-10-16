import React from 'react';
import { MapPin, Calendar, Building, Layers, CheckCircle2, FileText, ArrowLeft, ExternalLink } from 'lucide-react';
import { Modal } from '../../components/common/Modal';

export const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  const softwareList = typeof project.softwareUsed === 'string'
    ? JSON.parse(project.softwareUsed || '[]')
    : (project.softwareUsed || []);

  return (
    <Modal isOpen={!!project} onClose={onClose} title={`Case Study: ${project.title}`} maxWidth="max-w-4xl">
      <div className="flex flex-col gap-8">
        
        {/* Banner Header Image */}
        <div className="relative aspect-[16/9] bg-[#121417] border border-[#333] overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-[#121417]/90 text-[#D4AF37] border border-[#D4AF37] text-xs font-bold px-3 py-1 uppercase tracking-widest">
            {project.category}
          </div>
        </div>

        {/* Structural Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#121417] p-4 border border-[#333] text-xs">
          <div>
            <span className="text-[#9CA3AF] uppercase block text-[10px]">Location</span>
            <span className="text-[#EAEAEA] font-semibold flex items-center gap-1"><MapPin size={12} className="text-[#D4AF37]"/> {project.location}</span>
          </div>
          <div>
            <span className="text-[#9CA3AF] uppercase block text-[10px]">Completion Year</span>
            <span className="text-[#EAEAEA] font-semibold">{project.year}</span>
          </div>
          <div>
            <span className="text-[#9CA3AF] uppercase block text-[10px]">Structural Role</span>
            <span className="text-[#EAEAEA] font-semibold">{project.role || 'Lead Structural Engineer'}</span>
          </div>
          <div>
            <span className="text-[#9CA3AF] uppercase block text-[10px]">Client / Owner</span>
            <span className="text-[#EAEAEA] font-semibold">{project.client || 'Confidential'}</span>
          </div>
        </div>

        {/* System & Materials */}
        <div className="grid sm:grid-cols-2 gap-6 bg-[#181A1E] p-6 border border-[#333]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2 flex items-center gap-2">
              <Layers size={14} /> Structural System
            </h4>
            <p className="text-sm text-[#EAEAEA] leading-relaxed">{project.structuralSystem}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2 flex items-center gap-2">
              <Building size={14} /> Key Structural Materials
            </h4>
            <p className="text-sm text-[#EAEAEA] leading-relaxed">{project.materials}</p>
          </div>
        </div>

        {/* NARRATIVE SECTION: Project -> Challenge -> Approach -> Solution -> Result */}
        <div className="flex flex-col gap-6 text-sm">
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-[#EAEAEA] border-l-2 border-[#D4AF37] pl-3 mb-2">
              1. Project Overview & Scope
            </h4>
            <p className="text-[#9CA3AF] leading-relaxed">{project.description}</p>
          </div>

          <div className="bg-red-950/10 border border-red-500/20 p-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2">
              2. Structural Challenge
            </h4>
            <p className="text-[#EAEAEA] leading-relaxed">{project.challenge}</p>
          </div>

          <div className="bg-[#121417] border border-[#333] p-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
              3. Engineering Approach & FEA Modeling
            </h4>
            <p className="text-[#9CA3AF] leading-relaxed">{project.engineeringApproach}</p>
          </div>

          <div className="bg-[#121417] border border-[#333] p-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-2">
              4. Innovative Solution Implemented
            </h4>
            <p className="text-[#EAEAEA] leading-relaxed">{project.solution}</p>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-500/30 p-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
              <CheckCircle2 size={16} /> 5. Quantified Performance Result
            </h4>
            <p className="text-[#EAEAEA] leading-relaxed">{project.result}</p>
          </div>
        </div>

        {/* Software Stack Used */}
        <div className="border-t border-[#333] pt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono text-[#9CA3AF]">Software Tools:</span>
            <div className="flex gap-2 flex-wrap">
              {softwareList.map((soft) => (
                <span key={soft} className="text-xs font-mono bg-[#121417] text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-1">
                  {soft}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-[#D4AF37] text-[#121417] px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </Modal>
  );
};
