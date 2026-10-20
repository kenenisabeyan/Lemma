import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Move, Sparkles, Building2, ShieldCheck, Activity, Compass, RotateCcw } from 'lucide-react';

export const Moveable3DHeroCards = () => {
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
      title: '52-Story Outrigger Core',
      project: 'Nexus Commercial Tower',
      tag: 'ELEVATION +420M',
      code: 'IBC 2024 / ASCE 7-22',
      metric: '140 MPH WIND PASS',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      icon: Building2,
      accent: 'border-[#801834] dark:border-[#D4AF37]',
      accentBg: 'bg-[#801834] dark:bg-[#D4AF37]',
      accentText: 'text-[#801834] dark:text-[#D4AF37]',
      defaultPos: 'top-8 left-4 2xl:left-12',
      visibility: 'hidden xl:block',
      depthMultiplier: 20,
      tiltFactor: 12
    },
    {
      id: 'bridge',
      title: 'Cable-Stayed Deck & Pylons',
      project: 'Avalon River Suspension',
      tag: 'SPAN 450M · SEISMIC ISOLATED',
      code: 'AASHTO / CALTRANS SEISMIC',
      metric: 'UHPC PYLONS · 120-YR LIFE',
      image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80',
      icon: Compass,
      accent: 'border-cyan-500',
      accentBg: 'bg-cyan-500',
      accentText: 'text-cyan-500',
      defaultPos: 'top-12 right-4 2xl:right-12',
      visibility: 'hidden xl:block',
      depthMultiplier: -18,
      tiltFactor: -10
    },
    {
      id: 'steel',
      title: 'High-Yield Truss Framework',
      project: 'Metropolis Trade Center',
      tag: 'FEA STRESS: 0.68 OK',
      code: 'AISC 360-22 MOMENT FRAME',
      metric: 'ASTM A992 · BUCKLING SAFE',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80',
      icon: ShieldCheck,
      accent: 'border-emerald-500',
      accentBg: 'bg-emerald-500',
      accentText: 'text-emerald-500',
      defaultPos: 'bottom-10 left-4 2xl:left-12',
      visibility: 'hidden md:block',
      depthMultiplier: 16,
      tiltFactor: -8
    },
    {
      id: 'damper',
      title: 'Viscous Fluid Damping Unit',
      project: 'Seismic Retrofit Assembly',
      tag: 'DAMPING: 18% CRITICAL',
      code: 'FEMA P-58 PERFORMANCE',
      metric: 'ENERGY DISSIPATION HARMONIC',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
      icon: Activity,
      accent: 'border-amber-500',
      accentBg: 'bg-amber-500',
      accentText: 'text-amber-500',
      defaultPos: 'bottom-8 right-4 2xl:right-12',
      visibility: 'hidden md:block',
      depthMultiplier: -18,
      tiltFactor: 10
    }
  ];

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <div key={resetKey} className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      
      {/* 3D Interaction Control HUD Bar */}
      <div className="absolute top-24 inset-x-0 flex justify-center pointer-events-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/85 dark:bg-[#181A1E]/85 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-700/80 shadow-md text-xs font-mono"
        >
          <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-200 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            3D Spatial Engine:
          </span>
          <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline">
            Drag cards anywhere in 3D space
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-300 font-semibold border border-zinc-200 dark:border-zinc-700">
            <Move size={11} className="text-[#801834] dark:text-[#D4AF37]" /> Interactive
          </span>

          {hasInteracted && (
            <button
              onClick={handleReset}
              className="text-[11px] font-bold text-[#801834] dark:text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer pl-1 border-l border-zinc-300 dark:border-zinc-700"
              title="Reset cards back to initial orbit"
            >
              <RotateCcw size={11} /> Reset
            </button>
          )}
        </motion.div>
      </div>

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
            dragConstraints={{ left: -160, right: 160, top: -140, bottom: 140 }}
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
              boxShadow: '0 30px 60px -12px rgba(128, 24, 52, 0.5)'
            }}
            className={`absolute ${card.defaultPos} z-20 pointer-events-auto cursor-grab active:cursor-grabbing w-60 sm:w-64 lg:w-72 rounded-2xl bg-white/95 dark:bg-[#181A1E]/95 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-700/80 p-3 shadow-xl transition-shadow select-none group hidden md:block`}
          >
            {/* 3D Depth Card Inner Stage */}
            <div className="relative overflow-hidden rounded-xl bg-zinc-950 aspect-[16/10] border border-zinc-200/40 dark:border-zinc-800">
              
              {/* Photorealistic Architectural Engineering Image */}
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-105"
                draggable={false}
              />

              {/* Blueprint & Specular 3D Holographic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Corner Technical Crosshair Reticles */}
              <span className="absolute top-2 left-2 text-[8px] font-mono text-white/50 tracking-widest">+</span>
              <span className="absolute top-2 right-2 text-[8px] font-mono text-white/50 tracking-widest">+</span>
              <span className="absolute bottom-2 left-2 text-[8px] font-mono text-white/50 tracking-widest">+</span>
              <span className="absolute bottom-2 right-2 text-[8px] font-mono text-white/50 tracking-widest">+</span>

              {/* Moveable Badge Chip with Grab Icon */}
              <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white font-bold shadow-sm">
                <Move size={10} className="text-[#D4AF37] animate-pulse" />
                <span className="tracking-wider">MOVEABLE 3D</span>
              </div>

              {/* Upper Right Engineering Tag */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono text-emerald-400 font-bold">
                {card.tag}
              </div>

              {/* Lower Inner Metadata */}
              <div className="absolute bottom-2.5 inset-x-2.5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] block font-bold tracking-wider">
                    {card.code}
                  </span>
                  <h4 className="text-xs font-extrabold text-white tracking-tight drop-shadow-sm">
                    {card.title}
                  </h4>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={14} />
                </div>
              </div>
            </div>

            {/* Bottom Card Footer Details */}
            <div className="pt-3 px-1 flex items-center justify-between text-xs">
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block truncate">
                  {card.project}
                </span>
                <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${card.accentBg}`}></span>
                  {card.metric}
                </span>
              </div>

              <div className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700/80 px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/60 uppercase tracking-widest shrink-0 font-semibold">
                FEA Verified
              </div>
            </div>

          </motion.div>
        );
      })}

      {/* Mobile Touch Draggable 3D Cards Carousel Strip */}
      <div className="md:hidden absolute bottom-3 inset-x-0 px-4 pointer-events-auto">
        <div className="flex items-center gap-1.5 mb-2 justify-center">
          <Move size={10} className="text-[#801834] dark:text-[#D4AF37]" />
          <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider">
            Swipe / Drag 3D Project Cards
          </span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
          {cards.map((card) => (
            <motion.div
              key={`mob-${card.id}`}
              whileTap={{ scale: 0.97 }}
              className="snap-center shrink-0 w-64 rounded-xl bg-white/95 dark:bg-[#181A1E]/95 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-700/80 p-2.5 shadow-xl select-none"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-zinc-950">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover" 
                  draggable={false} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/60 text-[8px] font-mono text-[#D4AF37] font-bold">
                  {card.code}
                </span>
                <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-white truncate">
                  {card.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};
