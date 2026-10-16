import React, { useState } from 'react';
import { ChevronDown, HelpCircle, HardHat } from 'lucide-react';

export const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the role of a Structural Engineer vs an Architect?',
      a: 'While architects design the visual aesthetics, interior layouts, spatial functionality, and exterior envelope of a building, structural engineers are responsible for calculating force vectors, gravity loads, wind shear, and seismic mechanics to ensure the building remains safe, rigid, and standing under extreme conditions.'
    },
    {
      q: 'When do I need to hire a licensed Structural Engineer (PE/SE)?',
      a: 'You require a licensed structural engineer whenever you build new high-rise or commercial structures, modify load-bearing walls, add additional stories to an existing building, perform seismic retrofitting, repair foundation cracks, or design bridge/infrastructure systems requiring city building permit approval.'
    },
    {
      q: 'What is non-linear dynamic seismic analysis?',
      a: 'Non-linear dynamic analysis is a sophisticated computerized finite element simulation (FEA) that models how a structural framework deforms and absorbs energy during a real earthquake ground motion recording. It allows us to optimize damper placement and save structural material.'
    },
    {
      q: 'How long does a typical structural peer review or evaluation take?',
      a: 'A standard peer review or structural assessment takes between 1 to 3 weeks depending on the complexity of the building drawings, finite element calculations, and whether non-destructive site testing (NDT) is required.'
    },
    {
      q: 'Can structural engineering lower construction material costs?',
      a: 'Yes. Through value engineering, advanced post-tensioning, and optimized steel member sizing, high-performance structural engineering frequently reduces concrete volume and structural steel weight by 15% to 30%, saving developers substantial capital.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#333] pb-10 text-center">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Client Education & FAQs
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#EAEAEA] tracking-tight mb-6">
            Understanding Structural <span className="text-[#D4AF37]">Engineering.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto leading-relaxed">
            Common questions answered in plain language to clarify engineering processes, compliance standards, and project expectations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-[#1E2125] border border-[#333] overflow-hidden transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left font-bold text-base text-[#EAEAEA] hover:text-[#D4AF37] flex justify-between items-center gap-4 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="text-[#D4AF37] shrink-0 w-5 h-5" />
                    {faq.q}
                  </span>
                  <ChevronDown size={20} className={`text-[#D4AF37] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#9CA3AF] leading-relaxed border-t border-[#2D3137] bg-[#121417]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
