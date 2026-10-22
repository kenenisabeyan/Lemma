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
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
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
    <div key={resetKey} className="absolute inset-0 pointer-events-none z-20 overflow-hidden hidden md:block">
      

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
            className={`absolute ${card.defaultPos} z-20 pointer-events-auto cursor-grab active:cursor-grabbing w-60 sm:w-64 lg:w-72 rounded-2xl bg-white/85 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/90 dark:border-white/20 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.55)] transition-all select-none group ${card.visibility || 'hidden md:block'}`}
          >
            {/* 3D Depth Card Inner Stage */}
            <div className="relative overflow-hidden rounded-xl bg-zinc-950/80 backdrop-blur-xs aspect-[16/10] border border-white/20 dark:border-white/10">
              
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
              <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white font-bold shadow-sm">
                <Move size={10} className="text-[#D4AF37] animate-pulse" />
                <span className="tracking-wider">MOVEABLE 3D</span>
              </div>

              {/* Upper Right Engineering Tag */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/20 text-[9px] font-mono text-emerald-400 font-bold">
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
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block truncate font-medium">
                  {card.project}
                </span>
                <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${card.accentBg}`}></span>
                  {card.metric}
                </span>
              </div>

              <div className="text-[9px] font-mono text-zinc-700 dark:text-zinc-300 border border-white/80 dark:border-white/20 px-2 py-1 rounded-md bg-white/70 dark:bg-white/10 backdrop-blur-md uppercase tracking-widest shrink-0 font-semibold shadow-2xs">
                FEA Verified
              </div>
            </div>

          </motion.div>
        );
      })}

    </div>
  );
};
