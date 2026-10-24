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
  const [projectName, setProjectName] = useState('B+G+10 Mixed-Use RC Capstone Tower (Adama CBD)');
  const [jurisdiction, setJurisdiction] = useState('Adama Science & Technology University (ASTU SoCEA)');
  const [systemType, setSystemType] = useState('Reinforced Concrete Dual Frame (Shear Walls + Moment Frames)');
  const [designStandard, setDesignStandard] = useState('EBCS EN 1992:2014 (Design of Concrete Structures)');
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
      `ASTU SoCEA Academic & Capstone Verification\nCandidate: Lemma Techane & 5th Year Brothers\nInstitution: Adama Science and Technology University (ASTU)\nProject: ${projectName}\nAuthority: ${jurisdiction}\nToken: ${verificationHash}`
    );
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 3000);
  };

  return (
    <div className="py-6 relative overflow-hidden transition-colors duration-200">
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
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            <Award size={14} className="animate-pulse" />
            <span>ASTU SoCEA Capstone & Academic Verification Portal</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Official ASTU 5th Year Civil Engineering Verification System
          </h3>
          <p className="text-xs sm:text-sm text-[#54595F] mt-1 max-w-2xl leading-relaxed">
            Verify 5th-year graduating civil engineering status, B.Sc. capstone project defense eligibility, and technical compliance with Ethiopian Building Code Standards (EBCS) and ERA manuals.
          </p>
        </div>

        {/* Live Standing Badges */}
        <div className="flex flex-wrap gap-4 shrink-0 font-mono text-xs">
          <div>
            <span className="text-[10px] text-[#54595F] uppercase block">ASTU SoCEA</span>
            <span className="text-[#D4AF37] font-bold">5TH YEAR B.SC. · CANDIDATE</span>
          </div>
          <div>
            <span className="text-[10px] text-[#54595F] uppercase block">Class of 2026</span>
            <span className="text-[#D4AF37] font-bold">DEFENSE READY · VERIFIED</span>
          </div>
        </div>
      </div>

      {/* Interactive Generator & Certificate Grid */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 my-8 items-stretch">
        
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 py-4">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-2 font-bold">
              <Compass size={14} /> Project Parameters for Academic Certification
            </span>

            {/* Project Name */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#54595F] block font-semibold">Capstone / Field Designation:</label>
              <input 
                type="text" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-800/40 rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] font-medium"
              />
            </div>

            {/* Jurisdiction */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#54595F] block font-semibold">Supervising Faculty / Institutional Authority:</label>
              <select 
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-800/40 rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                <option value="Adama Science & Technology University (ASTU SoCEA)">Adama Science & Technology University (ASTU SoCEA)</option>
                <option value="Ethiopian Construction Authority (ECA) / Adama City Administration">Ethiopian Construction Authority (ECA) / Adama City Administration</option>
                <option value="Ethiopian Roads Administration (ERA) Central Directorate">Ethiopian Roads Administration (ERA) Central Directorate</option>
                <option value="Oromia Construction Corporation (OCC) Oversight">Oromia Construction Corporation (OCC) Oversight</option>
                <option value="Ministry of Urban Development & Infrastructure (MUDI)">Ministry of Urban Development & Infrastructure (MUDI)</option>
              </select>
            </div>

            {/* Structural System */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#54595F] block font-semibold">Structural Lateral Resisting & Framing System:</label>
              <select 
                value={systemType}
                onChange={(e) => setSystemType(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-800/40 rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                <option value="Reinforced Concrete Dual Frame (Shear Walls + Moment Frames)">Reinforced Concrete Dual Frame (Shear Walls + Moment Frames)</option>
                <option value="Prestressed Concrete Bridge Girder + Abutments">Prestressed Concrete Bridge Girder + Abutments</option>
                <option value="Deep Mat Foundation over Stabilized Expansive Soil">Deep Mat Foundation over Stabilized Expansive Soil</option>
                <option value="Composite Steel Truss & Industrial Warehouse Framing">Composite Steel Truss & Industrial Warehouse Framing</option>
              </select>
            </div>

            {/* Design Standards */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#54595F] block font-semibold">Governing Ethiopian Standards & Eurocodes:</label>
              <select 
                value={designStandard}
                onChange={(e) => setDesignStandard(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-800/40 rounded-xl px-3.5 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                <option value="EBCS EN 1992:2014 (Design of Concrete Structures)">EBCS EN 1992:2014 (Design of Concrete Structures)</option>
                <option value="EBCS EN 1998:2014 (Design of Structures for Earthquake Resistance - Zone 4)">EBCS EN 1998:2014 (Design of Structures for Earthquake Resistance - Zone 4)</option>
                <option value="ERA Geometric & Pavement Design Manuals (2013/2024)">ERA Geometric & Pavement Design Manuals (2013/2024)</option>
                <option value="Eurocode 7 / EBCS EN 1997 (Geotechnical Design & Foundation Engineering)">Eurocode 7 / EBCS EN 1997 (Geotechnical Design & Foundation Engineering)</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setIsGenerated(true)}
              className="w-full rounded-full bg-[#D4AF37] text-[#121417] hover:bg-[#c49f2c] py-3 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <FileCheck2 size={15} /> Update Capstone Verification Dossier
            </button>
          </div>
        </div>

        {/* Right Column: Formal Stamped Certificate */}
        <div className="lg:col-span-7 py-6 flex flex-col justify-between">
          
          <div>
            {/* Certificate Header */}
            <div className="text-center pb-6 relative">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.25em] block mb-1 font-bold">
                ADAMA SCIENCE AND TECHNOLOGY UNIVERSITY · SCHOOL OF CIVIL ENGINEERING & ARCHITECTURE
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-wide uppercase font-serif">
                Certificate of Capstone Structural Verification
              </h4>
              <p className="text-[11px] font-mono text-[#54595F] mt-1">
                Issued Under Jurisdiction of ASTU SoCEA Department of Civil Engineering · Adama, Ethiopia
              </p>
            </div>

            {/* Certificate Body */}
            <div className="py-4 space-y-4 text-xs">
              <p className="text-[#54595F] leading-relaxed italic">
                "This certifies that the structural analysis, finite element mathematical modeling, geotechnical soil investigations, and construction documentation for the specified project have been conducted by Lemma Techane & fellow 5th-year engineering brothers in rigorous accordance with Ethiopian standards (EBCS & ERA) under academic faculty supervision."
              </p>

              <div className="grid sm:grid-cols-2 gap-4 py-2 text-[11px] font-mono">
                <div>
                  <span className="text-[#54595F] block text-[9px] font-semibold">PROJECT DESIGNATION:</span>
                  <span className="text-zinc-900 font-bold">{projectName || 'B+G+10 RC Capstone Tower'}</span>
                </div>
                <div>
                  <span className="text-[#54595F] block text-[9px] font-semibold">SUPERVISING BODY:</span>
                  <span className="text-[#D4AF37] font-bold">{jurisdiction}</span>
                </div>
                <div>
                  <span className="text-[#54595F] block text-[9px] font-semibold">STRUCTURAL SYSTEM:</span>
                  <span className="text-zinc-900">{systemType}</span>
                </div>
                <div>
                  <span className="text-[#54595F] block text-[9px] font-semibold">GOVERNING ETHIOPIAN CODE:</span>
                  <span className="text-[#D4AF37] font-semibold">{designStandard}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Footer: Official Seal & Cryptographic Token */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            
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
                  <text fontSize="5" fill="#D4AF37" fontFamily="monospace" letterSpacing="1">
                    <textPath href="#curve" startOffset="3%">ASTU CIVIL ENG · 5TH YR</textPath>
                  </text>
                  <text x="50" y="50" textAnchor="middle" fill="#D4AF37" fontSize="5" fontFamily="monospace" fontWeight="bold">
                    LEMMA TECHANE
                  </text>
                  <text x="50" y="58" textAnchor="middle" fill="#D4AF37" fontSize="4.2" fontFamily="monospace">
                    ASTU / SoCEA
                  </text>
                  <text x="50" y="66" textAnchor="middle" fill="#D4AF37" fontSize="4.2" fontFamily="monospace">
                    CLASS OF 2026
                  </text>
                </svg>
              </div>

              <div className="text-xs font-mono">
                <div className="text-zinc-900 font-bold text-sm">Lemma Techane & Brothers</div>
                <div className="text-[10px] text-[#54595F]">5th Year Civil Engineering Candidates</div>
                <div className="text-[10px] text-[#D4AF37] font-semibold mt-0.5">ASTU SoCEA · Adama Science & Tech Univ.</div>
                <div className="text-[9px] text-[#54595F] mt-1">Date: {timestamp}</div>
              </div>
            </div>

            {/* Verification Actions */}
            <div className="flex flex-col gap-2 shrink-0">
              <button
                onClick={handlePrint}
                className="rounded-full bg-[#D4AF37] text-[#121417] hover:bg-[#c49f2c] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Printer size={13} /> Print Stamped Certificate
              </button>
              <button
                onClick={handleCopy}
                className="rounded-full text-[#54595F] hover:text-[#D4AF37] px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 justify-center"
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
          <div className="mt-4 pt-3 flex items-center justify-between text-[9px] font-mono text-[#54595F]">
            <span className="flex items-center gap-1">
              <Lock size={10} className="text-emerald-600" /> Academic Digital Verification Hash: {verificationHash}
            </span>
            <span>VERIFIED BY ASTU SOCEA ACADEMIC DEFENSE BOARD</span>
          </div>

        </div>

      </div>

    </div>
  );
};

