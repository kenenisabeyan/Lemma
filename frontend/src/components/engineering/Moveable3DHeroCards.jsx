import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Move, Building2, ShieldCheck, Activity, Compass, RotateCcw, CheckCircle2, X } from 'lucide-react';

export const Moveable3DHeroCards = ({ forceShow = false, onClose }) => {
  const [resetKey, setResetKey] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Mouse coordinate motion values for 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid 3D tilt
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      const y = (e.clientY / innerHeight) * 2 - 1; // -1 to 1
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Card definitions with high-res imagery, technical metadata, and initial 3D positions
  const cards = [
    {
      id: 'tower',
      title: 'B+G+10 RC Dual Frame Core',
      project: 'Adama CBD Capstone Tower',
      tag: 'ELEVATION +42M · ASTU SoCEA',
      code: 'EBCS EN 1998 / EBCS EN 1992',
      metric: 'RIFT VALLEY SEISMIC ZONE 4 PASS',
      formula: 'V_Ed ≤ V_Rd,c + V_Rd,s',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      icon: Building2,
      accentBg: 'bg-[#D3AE36]',
      defaultPos: 'top-8 left-4 2xl:left-12',
      visibility: 'hidden xl:block',
      depthMultiplier: 20,
      tiltFactor: 12
    },
    {
      id: 'bridge',
      title: 'Prestressed Concrete Girder Deck',
      project: 'Awash River Highway Bridge',
      tag: 'SPAN 85M · ERA STANDARD',
      code: 'ERA BRIDGE MANUAL / SAP2000',
      metric: 'HEAVY TRUCK AXLE HL-93 PASS',
      formula: 'σ_top ≤ 0.45 f_ck(t)',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80',
      icon: Compass,
      accentBg: 'bg-[#D3AE36]',
      defaultPos: 'top-12 right-4 2xl:right-12',
      visibility: 'hidden xl:block',
      depthMultiplier: -18,
      tiltFactor: -10
    },
    {
      id: 'steel',
      title: 'Highway Geometric Corridor',
      project: 'Adama-Wonji Express Link',
      tag: 'LENGTH 14.8 KM · CIVIL 3D',
      code: 'ERA GEOMETRIC MANUAL DC6',
      metric: 'MASS-HAUL BALANCED · 90 KM/H',
      formula: 'R_min = V² / [127(e + f)]',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
      icon: ShieldCheck,
      accentBg: 'bg-[#D3AE36]',
      defaultPos: 'bottom-10 left-4 2xl:left-12',
      visibility: 'hidden md:block',
      depthMultiplier: 16,
      tiltFactor: -8
    },
    {
      id: 'damper',
      title: 'Expansive Clay Foundation Pad',
      project: 'Rift Soil Stabilization',
      tag: 'FSI 85% · CHEMICAL LIME',
      code: 'EBCS EN 1997 GEOTECHNICAL',
      metric: 'ALLOWABLE BEARING: 220 KPA',
      formula: 'q_ult = c·N_c + q·N_q + 0.5γB·N_γ',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
      icon: Activity,
      accentBg: 'bg-[#D3AE36]',
      defaultPos: 'bottom-8 right-4 2xl:right-12',
      visibility: 'hidden md:block',
      depthMultiplier: -18,
      tiltFactor: 10
    }
  ];

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    setHasInteracted(false);
  };

  return (
    <div key={resetKey} className={`absolute inset-0 pointer-events-none z-20 overflow-hidden ${forceShow ? 'block' : 'hidden 2xl:block'}`}>
      
      {/* Live Interactive HUD Indicator (When User Has Dragged Cards or in forceShow mode) */}
      {(hasInteracted || forceShow) && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-6 2xl:right-10 z-50 pointer-events-auto flex items-center gap-2"
        >
          {hasInteracted && (
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12151C]/90 dark:bg-[#232936]/90 border border-[#D3AE36]/40 hover:border-[#D3AE36] text-[#D3AE36] text-[10px] font-mono font-bold uppercase tracking-widest backdrop-blur-md shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>Reset 3D Space</span>
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12151C]/90 dark:bg-[#232936]/90 border border-[#31394D] hover:border-[#D3AE36] text-[#F8F9FA] hover:text-[#D3AE36] text-[10px] font-mono font-bold uppercase tracking-widest backdrop-blur-md shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <X size={12} />
              <span>Close 3D View</span>
            </button>
          )}
        </motion.div>
      )}

      {/* Floating Moveable 3D Cards */}
      {cards.map((card, idx) => {
        const Icon = card.icon;

        // Custom parallax transformations per card based on mouse spring
        const rotateX = useTransform(smoothMouseY, [-1, 1], [card.tiltFactor, -card.tiltFactor]);
        const rotateY = useTransform(smoothMouseX, [-1, 1], [-card.tiltFactor, card.tiltFactor]);
        const translateX = useTransform(smoothMouseX, [-1, 1], [-card.depthMultiplier, card.depthMultiplier]);
        const translateY = useTransform(smoothMouseY, [-1, 1], [-card.depthMultiplier * 0.7, card.depthMultiplier * 0.7]);

        return (
          <motion.div
            key={card.id}
            drag
            dragConstraints={{ left: -180, right: 180, top: -160, bottom: 160 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            onDragStart={() => setHasInteracted(true)}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
            style={{
              x: translateX,
              y: translateY,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000
            }}
            whileHover={{ 
              scale: 1.05, 
              zIndex: 40,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)'
            }}
            whileDrag={{ 
              scale: 1.1, 
              zIndex: 50,
              cursor: 'grabbing',
              boxShadow: '0 30px 60px -12px rgba(211,174,54, 0.5)'
            }}
            className={`absolute ${card.defaultPos} z-20 pointer-events-auto cursor-grab active:cursor-grabbing w-64 lg:w-72 rounded-2xl bg-[#F8F9FA]/95 dark:bg-[#12151C]/95 backdrop-blur-2xl border border-[#31394D]/30 dark:border-[#31394D] hover:border-[#D3AE36]/80 dark:hover:border-[#D3AE36]/80 p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.65)] hover:shadow-[0_20px_50px_rgba(211,174,54,0.22)] dark:hover:shadow-[0_20px_50px_rgba(211,174,54,0.3)] transition-all select-none group ${forceShow ? 'block' : (card.visibility || 'hidden md:block')}`}
          >
            {/* 3D Depth Card Inner Stage */}
            <div className="relative overflow-hidden rounded-xl bg-[#12151C] aspect-[16/10] border border-[#31394D]/50">
              
              {/* Photorealistic Architectural Engineering Image */}
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-105"
                draggable={false}
              />

              {/* Specular Holographic Metallic Light Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-[#D3AE36]/20 to-transparent transition-transform pointer-events-none" />

              {/* Blueprint Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-[#12151C]/40 to-transparent pointer-events-none" />

              {/* Corner Technical Crosshair Reticles */}
              <span className="absolute top-2 left-2 text-[8px] font-mono text-[#D3AE36]/70 tracking-widest">+</span>
              <span className="absolute top-2 right-2 text-[8px] font-mono text-[#D3AE36]/70 tracking-widest">+</span>
              <span className="absolute bottom-2 left-2 text-[8px] font-mono text-[#D3AE36]/70 tracking-widest">+</span>
              <span className="absolute bottom-2 right-2 text-[8px] font-mono text-[#D3AE36]/70 tracking-widest">+</span>

              {/* Moveable Badge Chip with Grab Icon */}
              <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#12151C]/80 backdrop-blur-md border border-[#31394D] text-[10px] font-mono text-[#F8F9FA] font-bold shadow-sm">
                <Move size={10} className="text-[#D3AE36] animate-pulse" />
                <span className="tracking-wider">INTERACTIVE 3D</span>
              </div>

              {/* Upper Right Engineering Tag */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#12151C]/80 backdrop-blur-md border border-[#31394D] text-[9px] font-mono text-[#D3AE36] font-bold">
                {card.tag}
              </div>

              {/* Lower Inner Metadata */}
              <div className="absolute bottom-2.5 inset-x-2.5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D3AE36] block font-bold tracking-wider">
                    {card.code}
                  </span>
                  <h4 className="text-xs font-extrabold text-[#F8F9FA] tracking-tight drop-shadow-sm">
                    {card.title}
                  </h4>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#232936]/80 backdrop-blur-md border border-[#31394D] flex items-center justify-center text-[#D3AE36] shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                  <Icon size={14} />
                </div>
              </div>
            </div>

            {/* Bottom Card Footer Details */}
            <div className="pt-3 px-1 flex items-center justify-between text-xs">
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#1E2025]/70 dark:text-[#F8F9FA]/70 block truncate font-medium">
                  {card.project}
                </span>
                <span className="text-[11px] font-bold text-[#1E2025] dark:text-[#F8F9FA] flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${card.accentBg} animate-pulse`}></span>
                  {card.metric}
                </span>
              </div>

              <div className="text-[9px] font-mono text-[#D3AE36] border border-[#31394D]/30 dark:border-[#31394D] px-2 py-1 rounded-md bg-[#12151C]/5 dark:bg-[#232936] backdrop-blur-md uppercase tracking-widest shrink-0 font-bold shadow-2xs">
                EBCS VERIFIED
              </div>
            </div>

          </motion.div>
        );
      })}

    </div>
  );
};
