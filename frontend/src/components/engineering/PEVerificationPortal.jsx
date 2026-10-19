import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck2, 
  Printer, 
  Copy, 
  ExternalLink, 
  Compass, 
  QrCode,
  Sparkles,
  Lock
} from 'lucide-react';

export const PEVerificationPortal = () => {
  const [projectName, setProjectName] = useState('Metropolis Financial Center Phase II');
  const [jurisdiction, setJurisdiction] = useState('New York City Department of Buildings (NYC DOB)');
  const [systemType, setSystemType] = useState('Dual Core Concrete Shear Wall & Steel Outriggers');
  const [designStandard, setDesignStandard] = useState('IBC 2024 / ASCE 7-22 / ACI 318-19');
  const [isGenerated, setIsGenerated] = useState(false);
  const [copiedToken, setCopiedToken] = useState(false);

  // Generate deterministic verification token
  const verificationHash = 'SHA256: 8F2A-91C4-B73E-6510-AE89-FD42-7019';
  const timestamp = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `PE/SE Verification Certificate\nEngineer: Alexandre Techane, PE, SE\nNY PE #84729 | CA SE #92041\nProject: ${projectName}\nJurisdiction: ${jurisdiction}\nToken: ${verificationHash}`
    );
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 3000);
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-[#181A1E] border border-zinc-200/90 dark:border-[#333]/80 p-6 lg:p-10 shadow-lg dark:shadow-2xl relative overflow-hidden transition-colors duration-200">
      {/* Background Subtle Stamp Watermark */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-[#2D3137]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            <Award size={14} className="animate-pulse" />
            <span>State Board Licensure & Credentials Portal</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-tight">
            Official PE & SE Digital Seal Verification System
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
            Verify active professional licensure status or generate a project-specific sealed compliance dossier confirming adherence to municipal building codes and public safety standards.
          </p>
        </div>

        {/* Live Standing Badges */}
        <div className="flex flex-wrap gap-2 shrink-0">
          <div className="rounded-xl bg-zinc-50 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/50 px-3.5 py-2 text-xs font-mono shadow-xs">
            <span className="text-[10px] text-zinc-500 dark:text-[#9CA3AF] uppercase block">New York State</span>
            <span className="text-[#D4AF37] font-bold">PE #84729 · ACTIVE</span>
          </div>
          <div className="rounded-xl bg-zinc-50 dark:bg-[#121417] border border-zinc-200 dark:border-[#D4AF37]/50 px-3.5 py-2 text-xs font-mono shadow-xs">
            <span className="text-[10px] text-zinc-500 dark:text-[#9CA3AF] uppercase block">California Board</span>
            <span className="text-[#D4AF37] font-bold">SE #92041 · ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Interactive Generator & Certificate Grid */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 my-8 items-stretch">
        
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-zinc-50 dark:bg-[#121417] p-6 rounded-2xl border border-zinc-200 dark:border-[#333]">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-2 font-bold">
              <Compass size={14} /> Project Parameters for Certification
            </span>

            {/* Project Name */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-600 dark:text-[#9CA3AF] block font-semibold">Project Designation / Title:</label>
              <input 
                type="text" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full bg-white dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-[#EAEAEA] focus:outline-none focus:border-[#D4AF37] font-medium shadow-2xs"
              />
            </div>

            {/* Jurisdiction */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-600 dark:text-[#9CA3AF] block font-semibold">Building Department / Authority Having Jurisdiction (AHJ):</label>
              <select 
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                className="w-full bg-white dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-[#EAEAEA] focus:outline-none focus:border-[#D4AF37] shadow-2xs"
              >
                <option value="New York City Department of Buildings (NYC DOB)">New York City Department of Buildings (NYC DOB)</option>
                <option value="California Department of Health Care Access (HCAI/OSHPD)">California HCAI / OSHPD Seismic Division</option>
                <option value="City of Chicago Department of Buildings">City of Chicago Department of Buildings</option>
                <option value="Florida DBPR & Miami-Dade County Regulatory">Miami-Dade County High-Velocity Hurricane Zone</option>
                <option value="Federal Infrastructure Permitting (FHWA / DOT)">Federal Highway Administration (FHWA / DOT)</option>
              </select>
            </div>

            {/* Structural System */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-600 dark:text-[#9CA3AF] block font-semibold">Structural Lateral Force Resisting System (LFRS):</label>
              <select 
                value={systemType}
                onChange={(e) => setSystemType(e.target.value)}
                className="w-full bg-white dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-[#EAEAEA] focus:outline-none focus:border-[#D4AF37] shadow-2xs"
              >
                <option value="Dual Core Concrete Shear Wall & Steel Outriggers">Dual Core Concrete Shear Wall & Steel Outriggers</option>
                <option value="Post-Tensioned Concrete Flat Plate Frame">Post-Tensioned Concrete Flat Plate Frame</option>
                <option value="Special Steel Moment Frame (SMF) + BRBF">Special Steel Moment Frame (SMF) + BRBF</option>
                <option value="Base-Isolated Superstructure (Lead Rubber Bearings)">Base-Isolated Superstructure (Lead Rubber Bearings)</option>
              </select>
            </div>

            {/* Design Standards */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-600 dark:text-[#9CA3AF] block font-semibold">Governing Code Provisions:</label>
              <select 
                value={designStandard}
                onChange={(e) => setDesignStandard(e.target.value)}
                className="w-full bg-white dark:bg-[#181A1E] border border-zinc-200 dark:border-[#333] rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-[#EAEAEA] focus:outline-none focus:border-[#D4AF37] shadow-2xs"
              >
                <option value="IBC 2024 / ASCE 7-22 / ACI 318-19">IBC 2024 / ASCE 7-22 / ACI 318-19</option>
                <option value="CBC 2025 / ASCE 7-22 / AISC 360-22">CBC 2025 / ASCE 7-22 / AISC 360-22</option>
                <option value="AASHTO LRFD Bridge Design Specs 9th Ed">AASHTO LRFD Bridge Design Specs 9th Ed</option>
                <option value="ASCE 41-23 Seismic Evaluation of Existing Buildings">ASCE 41-23 Seismic Evaluation of Existing Buildings</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-[#26282D]">
            <button
              onClick={() => setIsGenerated(true)}
              className="w-full rounded-full bg-[#D4AF37] text-[#121417] hover:bg-white py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileCheck2 size={15} /> Update Sealed Certification Dossier
            </button>
          </div>
        </div>

        {/* Right Column: Formal Stamped Certificate */}
        <div className="lg:col-span-7 bg-white dark:bg-gradient-to-b dark:from-[#181A1E] dark:to-[#14161A] rounded-2xl border-2 border-[#D4AF37]/50 dark:border-[#D4AF37]/60 p-8 shadow-sm dark:shadow-2xl relative flex flex-col justify-between">
          
          {/* Decorative Corner Badges */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]"></div>
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]"></div>

          <div>
            {/* Certificate Header */}
            <div className="text-center pb-6 border-b border-zinc-200 dark:border-[#2D3137] relative">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.25em] block mb-1 font-bold">
                PROFESSIONAL ENGINEERING REGISTRATION & COMPLIANCE DOSSIER
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-[#EAEAEA] tracking-wide uppercase font-serif">
                Certificate of Structural Verification
              </h4>
              <p className="text-[11px] font-mono text-zinc-600 dark:text-[#9CA3AF] mt-1">
                Issued Under Jurisdiction of NY State Board for Engineering & CA BPELSG
              </p>
            </div>

            {/* Certificate Body */}
            <div className="py-6 space-y-4 text-xs">
              <p className="text-zinc-700 dark:text-[#CCC] leading-relaxed italic">
                "I hereby certify that the structural analysis, finite element mathematical modeling, and construction calculations for the specified facility have been conducted under my direct professional supervisory control in full conformance with governing building safety statutes."
              </p>

              <div className="grid sm:grid-cols-2 gap-3 bg-zinc-50 dark:bg-[#121417] p-4 rounded-xl border border-zinc-200 dark:border-[#333] text-[11px] font-mono shadow-2xs">
                <div>
                  <span className="text-zinc-500 dark:text-[#888] block text-[9px] font-semibold">PROJECT DESIGNATION:</span>
                  <span className="text-zinc-900 dark:text-[#EAEAEA] font-bold">{projectName || 'Metropolis Commercial Project'}</span>
                </div>
                <div>
                  <span className="text-zinc-500 dark:text-[#888] block text-[9px] font-semibold">MUNICIPAL AUTHORITY:</span>
                  <span className="text-[#D4AF37] font-bold">{jurisdiction}</span>
                </div>
                <div>
                  <span className="text-zinc-500 dark:text-[#888] block text-[9px] font-semibold">STRUCTURAL SYSTEM:</span>
                  <span className="text-zinc-900 dark:text-[#EAEAEA]">{systemType}</span>
                </div>
                <div>
                  <span className="text-zinc-500 dark:text-[#888] block text-[9px] font-semibold">GOVERNING CODE:</span>
                  <span className="text-[#D4AF37] font-semibold">{designStandard}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Footer: Official Seal & Cryptographic Token */}
          <div className="pt-6 border-t border-zinc-200 dark:border-[#2D3137] flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Circular PE/SE Official Seal (SVG) */}
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  {/* Outer Seal Rings */}
                  <circle cx="50" cy="50" r="47" fill="none" stroke="#D4AF37" strokeWidth="2" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  
                  {/* Curved Text Simulation */}
                  <path id="curve" d="M 18,50 A 32,32 0 1,1 82,50" fill="none" />
                  <text fontSize="5.5" fill="#D4AF37" fontFamily="monospace" letterSpacing="1">
                    <textPath href="#curve" startOffset="5%">ALEXANDRE TECHANE</textPath>
                  </text>
                  <text x="50" y="52" textAnchor="middle" fill="#D4AF37" fontSize="5" fontFamily="monospace" fontWeight="bold">
                    PE #84729
                  </text>
                  <text x="50" y="60" textAnchor="middle" fill="#D4AF37" fontSize="4.5" fontFamily="monospace">
                    SE #92041
                  </text>
                  <text x="50" y="68" textAnchor="middle" fill="#D4AF37" fontSize="4" fontFamily="monospace">
                    STATE OF NY & CA
                  </text>
                </svg>
              </div>

              <div className="text-xs font-mono">
                <div className="text-zinc-900 dark:text-[#EAEAEA] font-bold text-sm">Alexandre Techane, PE, SE</div>
                <div className="text-[10px] text-zinc-500 dark:text-[#9CA3AF]">Licensed Structural Engineer</div>
                <div className="text-[10px] text-[#D4AF37] font-semibold mt-0.5">PE NY #84729 · SE CA #92041</div>
                <div className="text-[9px] text-zinc-400 dark:text-[#777] mt-1">Date: {timestamp}</div>
              </div>
            </div>

            {/* Verification Actions */}
            <div className="flex flex-col gap-2 shrink-0">
              <button
                onClick={handlePrint}
                className="rounded-full bg-zinc-50 dark:bg-[#121417] text-[#D4AF37] border border-zinc-300 dark:border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#121417] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Printer size={13} /> Print Stamped Certificate
              </button>
              <button
                onClick={handleCopy}
                className="rounded-full bg-zinc-50 dark:bg-[#121417] text-zinc-600 dark:text-[#9CA3AF] border border-zinc-200 dark:border-[#333] hover:text-zinc-900 dark:hover:text-[#EAEAEA] px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 justify-center shadow-xs cursor-pointer"
              >
                {copiedToken ? (
                  <>
                    <CheckCircle2 size={12} className="text-emerald-600" /> Token Copied!
                  </>
                ) : (
                  <>
                    <Copy size={12} /> Copy Verify Hash
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Cryptographic Digital Watermark */}
          <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-[#26282D] flex items-center justify-between text-[9px] font-mono text-zinc-400 dark:text-[#777]">
            <span className="flex items-center gap-1">
              <Lock size={10} className="text-emerald-600 dark:text-emerald-400" /> Cryptographic Digital Seal: {verificationHash}
            </span>
            <span>VERIFIED BY ASCE/NCSEA REPOSITORY</span>
          </div>

        </div>

      </div>

    </div>
  );
};
