import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Activity, Layers, Cpu, Eye, Compass, RotateCcw, ShieldCheck, Zap } from 'lucide-react';

export const Hero3DCanvas = ({ className = '' }) => {
  const containerRef = useRef(null);
  const { isDark } = useTheme();

  // Active engineering process visualization mode
  const [activeMode, setActiveMode] = useState('all'); // 'all' | 'fea' | 'loadpath' | 'crane' | 'scan'
  const activeModeRef = useRef(activeMode);
  activeModeRef.current = activeMode;

  // Real-time civil engineering telemetry metrics
  const [telemetry, setTelemetry] = useState({
    axialLoad: '24,850 kN',
    baseShear: '18,420 kN',
    driftRatio: 'H / 540',
    naturalPeriod: '2.42s',
    stressState: 'OPTIMAL (0.68 F_y)'
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();

    // Atmospheric depth fog that seamlessly dissolves the 3D model into the white glass background
    const bgColor = isDark ? 0x0B0C0E : 0xFFFFFF;
    scene.fog = new THREE.FogExp2(bgColor, 0.016);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // Adjusted camera perspective to frame full civil engineering scope: bedrock to crane peak
    camera.position.set(0, 2.5, 40);
    camera.lookAt(0, 1.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group holding entire Civil & Structural Engineering assembly
    const rootAssembly = new THREE.Group();
    scene.add(rootAssembly);

    // 2. PALETTE DEFINITIONS (Harmonized to match #FAF9F6 light and #0B0C0E dark backgrounds)
    const steelPrimary = isDark ? 0x94A3B8 : 0x475569;      // Slate architectural steel
    const accentWine = isDark ? 0xBE123C : 0x801834;        // Signature burgundy matching headline
    const champagneGold = isDark ? 0xD4AF37 : 0xB89745;     // Muted architectural gold/bronze
    const concreteColor = isDark ? 0x0F172A : 0xE8E5DE;     // Blends seamlessly into bedrock & floor
    const wireColor = isDark ? 0x334155 : 0xCBD5E1;         // Subterranean grid
    const bedrockColor = isDark ? 0x1E293B : 0xDDD8CF;      // Deep strata grid
    const braceColor = isDark ? 0x38BDF8 : 0x64748B;        // Tension cables

    // Stress gradient colors for FEA mode (refined architectural tone)
    const feaLow = isDark ? 0x38BDF8 : 0x64748B;      // Low stress: Slate
    const feaNominal = isDark ? 0x10B981 : 0x2E7D32;  // Nominal: Deep emerald
    const feaWarning = isDark ? 0xF59E0B : 0xB89745;  // High shear: Warm bronze
    const feaCritical = isDark ? 0xEF4444 : 0x801834; // Peak moment: Burgundy wine

    // Structural Geometry Parameters
    const floorCount = 14;
    const floorWidth = 9.2;
    const floorDepth = 9.2;
    const storyHeight = 2.2;
    const totalHeight = floorCount * storyHeight; // ~30.8 units
    const colHalfW = floorWidth / 2 - 0.25;
    const colHalfD = floorDepth / 2 - 0.25;

    // =========================================================================
    // 3. SUBSTRUCTURE & DEEP CIVIL FOUNDATION ENGINEERING (PILES + BEDROCK)
    // =========================================================================
    const substructureGroup = new THREE.Group();
    rootAssembly.add(substructureGroup);

    // Bedrock Geological Basal Grid (GL -28.0m)
    const bedrockGrid = new THREE.GridHelper(36, 18, isDark ? 0x334155 : 0xC7C1B5, bedrockColor);
    bedrockGrid.position.y = -totalHeight / 2 - 4.5;
    bedrockGrid.material.transparent = true;
    bedrockGrid.material.opacity = isDark ? 0.3 : 0.2;
    substructureGroup.add(bedrockGrid);

    // 4 Drilled Shaft Caissons (Deep Foundation Piles extending into bedrock)
    const pileRadius = 0.5;
    const pileHeight = 6.5;
    const pileGeo = new THREE.CylinderGeometry(pileRadius, pileRadius * 1.08, pileHeight, 16);
    const pileMat = new THREE.MeshBasicMaterial({
      color: concreteColor,
      transparent: true,
      opacity: isDark ? 0.25 : 0.14
    });
    const pileEdgeMat = new THREE.LineBasicMaterial({
      color: steelPrimary,
      transparent: true,
      opacity: isDark ? 0.5 : 0.28
    });

    const pilePositions = [
      [-colHalfW, colHalfD],
      [colHalfW, colHalfD],
      [colHalfW, -colHalfD],
      [-colHalfW, -colHalfD]
    ];

    pilePositions.forEach(([px, pz]) => {
      const pile = new THREE.Mesh(pileGeo, pileMat);
      pile.position.set(px, -totalHeight / 2 - pileHeight / 2 + 1.2, pz);
      substructureGroup.add(pile);

      const pileEdges = new THREE.LineSegments(new THREE.EdgesGeometry(pileGeo), pileEdgeMat);
      pileEdges.position.copy(pile.position);
      substructureGroup.add(pileEdges);

      // Helical rebar cage spiral line around pile
      const spiralPoints = [];
      const turns = 8;
      for (let t = 0; t <= 100; t++) {
        const theta = (t / 100) * Math.PI * 2 * turns;
        const y = (t / 100) * pileHeight - pileHeight / 2;
        const r = pileRadius + 0.04;
        spiralPoints.push(new THREE.Vector3(px + Math.cos(theta) * r, pile.position.y + y, pz + Math.sin(theta) * r));
      }
      const spiralGeo = new THREE.BufferGeometry().setFromPoints(spiralPoints);
      const spiralMat = new THREE.LineBasicMaterial({ color: accentWine, transparent: true, opacity: isDark ? 0.5 : 0.32 });
      substructureGroup.add(new THREE.Line(spiralGeo, spiralMat));
    });

    // Monolithic Reinforced Concrete Pile Cap / Raft Foundation Slab
    const raftWidth = floorWidth + 2.4;
    const raftGeo = new THREE.BoxGeometry(raftWidth, 1.4, raftWidth);
    const raftMat = new THREE.MeshBasicMaterial({
      color: concreteColor,
      transparent: true,
      opacity: isDark ? 0.25 : 0.14
    });
    const raftEdgeMat = new THREE.LineBasicMaterial({
      color: steelPrimary,
      transparent: true,
      opacity: isDark ? 0.6 : 0.35
    });
    const raftMesh = new THREE.Mesh(raftGeo, raftMat);
    raftMesh.position.y = -totalHeight / 2 + 1.4;
    substructureGroup.add(raftMesh);

    const raftEdges = new THREE.LineSegments(new THREE.EdgesGeometry(raftGeo), raftEdgeMat);
    raftEdges.position.copy(raftMesh.position);
    substructureGroup.add(raftEdges);

    // =========================================================================
    // 4. SUPERSTRUCTURE: COMPOSITE COLUMNS, CORE & POST-TENSIONED SLABS
    // =========================================================================
    const towerGroup = new THREE.Group();
    rootAssembly.add(towerGroup);

    // Floor slabs (translucent architectural glass floor plates with PT tendon lines)
    const slabGeo = new THREE.BoxGeometry(floorWidth, 0.22, floorDepth);
    const slabMat = new THREE.MeshBasicMaterial({
      color: concreteColor,
      transparent: true,
      opacity: isDark ? 0.14 : 0.08
    });
    const slabEdgeMat = new THREE.LineBasicMaterial({
      color: steelPrimary,
      transparent: true,
      opacity: isDark ? 0.5 : 0.3
    });

    for (let i = 0; i < floorCount; i++) {
      const y = i * storyHeight - totalHeight / 2 + 2;
      const slabMesh = new THREE.Mesh(slabGeo, slabMat);
      slabMesh.position.y = y;
      towerGroup.add(slabMesh);

      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(slabGeo), slabEdgeMat);
      edges.position.y = y;
      towerGroup.add(edges);

      // Post-Tensioned Tendon Strands (Visible parabolic lines on key structural floors)
      if (i % 3 === 0) {
        const tendonPoints = [];
        for (let s = -colHalfW; s <= colHalfW; s += 0.8) {
          const sag = Math.sin(((s + colHalfW) / (colHalfW * 2)) * Math.PI) * -0.09;
          tendonPoints.push(new THREE.Vector3(s, y + sag, 0));
        }
        const tendonGeo = new THREE.BufferGeometry().setFromPoints(tendonPoints);
        const tendonMat = new THREE.LineBasicMaterial({ 
          color: isDark ? 0x38BDF8 : accentWine, 
          transparent: true, 
          opacity: isDark ? 0.55 : 0.32 
        });
        towerGroup.add(new THREE.Line(tendonGeo, tendonMat));
      }
    }

    // 4 Composite Steel-Concrete Mega-Columns (Translucent architectural core with crisp outlines)
    const colGeo = new THREE.CylinderGeometry(0.18, 0.28, totalHeight, 8);
    const colMat = new THREE.MeshBasicMaterial({
      color: steelPrimary,
      transparent: true,
      opacity: isDark ? 0.45 : 0.26
    });
    const colEdgeMat = new THREE.LineBasicMaterial({
      color: isDark ? champagneGold : accentWine,
      transparent: true,
      opacity: isDark ? 0.5 : 0.34
    });

    pilePositions.forEach(([cx, cz]) => {
      const colMesh = new THREE.Mesh(colGeo, colMat);
      colMesh.position.set(cx, 2, cz);
      towerGroup.add(colMesh);

      const colEdges = new THREE.LineSegments(new THREE.EdgesGeometry(colGeo), colEdgeMat);
      colEdges.position.set(cx, 2, cz);
      towerGroup.add(colEdges);
    });

    // Central Core Shear Wall Box with Elevator / MEP Shaft Openings
    const coreWidth = 3.6;
    const coreGeo = new THREE.BoxGeometry(coreWidth, totalHeight, coreWidth);
    const coreMat = new THREE.MeshBasicMaterial({
      color: steelPrimary,
      transparent: true,
      opacity: isDark ? 0.16 : 0.08,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 2;
    towerGroup.add(coreMesh);

    // Outrigger Belt Trusses & Dynamic Fluid Dampers at Levels 6 & 12
    const bracePoints = [];
    const outriggerFloors = [4, 6, 10, 12];
    for (let f = 0; f < floorCount - 1; f += 2) {
      const y1 = f * storyHeight - totalHeight / 2 + 2;
      const y2 = (f + 2) * storyHeight - totalHeight / 2 + 2;

      // Outer Belt Truss X-braces
      bracePoints.push(
        new THREE.Vector3(-colHalfW, y1, colHalfD), new THREE.Vector3(colHalfW, y2, colHalfD),
        new THREE.Vector3(colHalfW, y1, colHalfD), new THREE.Vector3(-colHalfW, y2, colHalfD),
        new THREE.Vector3(-colHalfW, y1, -colHalfD), new THREE.Vector3(colHalfW, y2, -colHalfD),
        new THREE.Vector3(colHalfW, y1, -colHalfD), new THREE.Vector3(-colHalfW, y2, -colHalfD),
        new THREE.Vector3(-colHalfW, y1, -colHalfD), new THREE.Vector3(-colHalfW, y2, colHalfD),
        new THREE.Vector3(-colHalfW, y1, colHalfD), new THREE.Vector3(-colHalfW, y2, -colHalfD),
        new THREE.Vector3(colHalfW, y1, -colHalfD), new THREE.Vector3(colHalfW, y2, colHalfD),
        new THREE.Vector3(colHalfW, y1, colHalfD), new THREE.Vector3(colHalfW, y2, -colHalfD)
      );
    }
    const braceGeo = new THREE.BufferGeometry().setFromPoints(bracePoints);
    const braceMat = new THREE.LineBasicMaterial({
      color: braceColor,
      transparent: true,
      opacity: isDark ? 0.45 : 0.25
    });
    towerGroup.add(new THREE.LineSegments(braceGeo, braceMat));

    // Hydraulic Fluid Viscous Damper Cylinders connecting Core to Perimeter Megacolumns
    outriggerFloors.forEach((f) => {
      const dy = f * storyHeight - totalHeight / 2 + 2;
      const damperGeo = new THREE.CylinderGeometry(0.12, 0.12, colHalfW - 1.8, 8);
      const damperMat = new THREE.MeshBasicMaterial({ 
        color: accentWine, 
        transparent: true, 
        opacity: isDark ? 0.75 : 0.5 
      });
      
      const damperLeft = new THREE.Mesh(damperGeo, damperMat);
      damperLeft.position.set(-colHalfW / 2 - 0.9, dy + 0.3, 0);
      damperLeft.rotation.z = Math.PI / 2;
      towerGroup.add(damperLeft);

      const damperRight = new THREE.Mesh(damperGeo, damperMat);
      damperRight.position.set(colHalfW / 2 + 0.9, dy + 0.3, 0);
      damperRight.rotation.z = Math.PI / 2;
      towerGroup.add(damperRight);
    });

    // FEA Joint Nodes (Color-coded based on structural stress concentration)
    const nodeCount = 44;
    const nodeGeo = new THREE.SphereGeometry(0.18, 10, 10);
    const nodeMat = new THREE.MeshBasicMaterial({ 
      color: champagneGold, 
      transparent: true, 
      opacity: isDark ? 0.75 : 0.5 
    });
    const nodeInstanced = new THREE.InstancedMesh(nodeGeo, nodeMat, nodeCount);
    const dummy = new THREE.Object3D();

    let nodeIdx = 0;
    const nodeColors = [];
    for (let f = 0; f < floorCount && nodeIdx < nodeCount; f += 2) {
      const y = f * storyHeight - totalHeight / 2 + 2;
      // FEA stress gradient: base is critical wine, mid is nominal bronze/green, top is subtle slate
      const stressColor = f < 3 ? feaCritical : (f < 8 ? feaWarning : (f < 11 ? feaNominal : feaLow));
      const colObj = new THREE.Color(stressColor);

      pilePositions.forEach(([cx, cz]) => {
        if (nodeIdx < nodeCount) {
          dummy.position.set(cx, y, cz);
          dummy.updateMatrix();
          nodeInstanced.setMatrixAt(nodeIdx, dummy.matrix);
          nodeInstanced.setColorAt(nodeIdx, colObj);
          nodeColors.push({ idx: nodeIdx, color: colObj, stress: stressColor });
          nodeIdx++;
        }
      });
    }
    nodeInstanced.instanceMatrix.needsUpdate = true;
    if (nodeInstanced.instanceColor) nodeInstanced.instanceColor.needsUpdate = true;
    towerGroup.add(nodeInstanced);

    // =========================================================================
    // 5. CIVIL ENGINEERING PROCESS 1: ACTIVE ROOF TOWER CRANE & STAGING
    // =========================================================================
    const craneGroup = new THREE.Group();
    const roofY = (floorCount - 1) * storyHeight - totalHeight / 2 + 2 + 0.3; // Top roof surface
    craneGroup.position.set(0, roofY, 0);
    rootAssembly.add(craneGroup);

    // Crane Vertical Mast Tower (Lattice Truss Column)
    const mastHeight = 6.8;
    const mastGeo = new THREE.BoxGeometry(0.65, mastHeight, 0.65);
    const mastMat = new THREE.MeshBasicMaterial({ 
      color: steelPrimary, 
      wireframe: true, 
      transparent: true, 
      opacity: isDark ? 0.5 : 0.32 
    });
    const mastMesh = new THREE.Mesh(mastGeo, mastMat);
    mastMesh.position.y = mastHeight / 2;
    craneGroup.add(mastMesh);

    // Crane Slewing Ring & Operator Cab
    const cabGeo = new THREE.BoxGeometry(0.9, 0.7, 0.9);
    const cabMat = new THREE.MeshBasicMaterial({ 
      color: accentWine, 
      transparent: true, 
      opacity: isDark ? 0.7 : 0.45 
    });
    const cabMesh = new THREE.Mesh(cabGeo, cabMat);
    cabMesh.position.set(0.2, mastHeight, 0);
    craneGroup.add(cabMesh);

    // Rotating Crane Jib Arm & Hoist Assembly
    const slewingJib = new THREE.Group();
    slewingJib.position.set(0, mastHeight + 0.35, 0);
    craneGroup.add(slewingJib);

    // Horizontal Jib Boom (extending 11 units forward)
    const jibLength = 11.5;
    const jibPoints = [
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(jibLength, 0, 0),
      new THREE.Vector3(0, 0.8, 0), new THREE.Vector3(jibLength * 0.7, 0, 0),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1.6, 0), // Apex tower
      new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(jibLength * 0.85, 0, 0), // Guy wire
      new THREE.Vector3(0, 1.6, 0), new THREE.Vector3(-4.5, 0, 0) // Counter-guy wire
    ];
    // Counter-jib extending backwards with counterweight
    jibPoints.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(-4.5, 0, 0));
    const jibGeo = new THREE.BufferGeometry().setFromPoints(jibPoints);
    const jibMat = new THREE.LineBasicMaterial({ 
      color: isDark ? champagneGold : steelPrimary, 
      transparent: true, 
      opacity: isDark ? 0.6 : 0.38 
    });
    slewingJib.add(new THREE.LineSegments(jibGeo, jibMat));

    // Concrete Counterweight Block
    const cwGeo = new THREE.BoxGeometry(1.4, 0.8, 0.9);
    const cwMat = new THREE.MeshBasicMaterial({ 
      color: concreteColor, 
      transparent: true, 
      opacity: isDark ? 0.6 : 0.4 
    });
    const cwMesh = new THREE.Mesh(cwGeo, cwMat);
    cwMesh.position.set(-3.8, -0.2, 0);
    slewingJib.add(cwMesh);

    // Hoist Trolley Cable & Suspended Steel Truss Segment in Erection
    const hoistTrolley = new THREE.Group();
    hoistTrolley.position.set(7.5, 0, 0);
    slewingJib.add(hoistTrolley);

    const hoistCablePoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -3.8, 0)];
    const hoistCableGeo = new THREE.BufferGeometry().setFromPoints(hoistCablePoints);
    const hoistCableMat = new THREE.LineBasicMaterial({ 
      color: steelPrimary, 
      transparent: true, 
      opacity: 0.35 
    });
    hoistTrolley.add(new THREE.Line(hoistCableGeo, hoistCableMat));

    // Active Structural Steel Girder being lifted into place
    const girderGeo = new THREE.BoxGeometry(3.5, 0.35, 0.45);
    const girderMat = new THREE.MeshBasicMaterial({ 
      color: accentWine, 
      wireframe: true, 
      transparent: true, 
      opacity: isDark ? 0.7 : 0.45 
    });
    const girderMesh = new THREE.Mesh(girderGeo, girderMat);
    girderMesh.position.set(0, -3.8, 0);
    hoistTrolley.add(girderMesh);

    // =========================================================================
    // 6. CIVIL ENGINEERING PROCESS 2: REAL-TIME LOAD PATH TRANSFER VECTORS
    // =========================================================================
    // Glowing force packets stream down mega-columns demonstrating Newton load transfer
    const loadPulseCount = 32;
    const pulseGeo = new THREE.SphereGeometry(0.14, 8, 8);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xFFFBEB : accentWine,
      transparent: true,
      opacity: isDark ? 0.65 : 0.42
    });
    const pulseInstanced = new THREE.InstancedMesh(pulseGeo, pulseMat, loadPulseCount);
    const pulseDummy = new THREE.Object3D();

    const pulses = [];
    for (let p = 0; p < loadPulseCount; p++) {
      const colIdx = p % 4;
      const [colX, colZ] = pilePositions[colIdx];
      pulses.push({
        colX,
        colZ,
        progress: Math.random(), // 0 to 1
        speed: 0.28 + Math.random() * 0.15
      });
    }
    rootAssembly.add(pulseInstanced);

    // =========================================================================
    // 7. CIVIL ENGINEERING PROCESS 3: BIM / LIDAR 3D TELEMETRY SCANNER
    // =========================================================================
    // Laser grid plane that traverses vertically inspecting structural drift & deflection
    const scanPlaneGroup = new THREE.Group();
    rootAssembly.add(scanPlaneGroup);

    const scanWidth = floorWidth + 3.0;
    const scanPlaneGeo = new THREE.PlaneGeometry(scanWidth, scanWidth);
    const scanPlaneMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38BDF8 : accentWine,
      transparent: true,
      opacity: isDark ? 0.08 : 0.04,
      side: THREE.DoubleSide
    });
    const scanPlaneMesh = new THREE.Mesh(scanPlaneGeo, scanPlaneMat);
    scanPlaneMesh.rotation.x = Math.PI / 2;
    scanPlaneGroup.add(scanPlaneMesh);

    // High-intensity scanner perimeter laser ring
    const scanRingGeo = new THREE.EdgesGeometry(scanPlaneGeo);
    const scanRingMat = new THREE.LineBasicMaterial({
      color: isDark ? 0x38BDF8 : accentWine,
      transparent: true,
      opacity: isDark ? 0.4 : 0.22,
      linewidth: 1.5
    });
    const scanRing = new THREE.LineSegments(scanRingGeo, scanRingMat);
    scanRing.rotation.x = Math.PI / 2;
    scanPlaneGroup.add(scanRing);

    // Surrounding Ambient Structural Particles (Atmospheric airborne dust, delicate and fine)
    const particleCount = 50;
    const particlePoints = [];
    for (let i = 0; i < particleCount; i++) {
      particlePoints.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 45,
          (Math.random() - 0.5) * 38,
          (Math.random() - 0.5) * 40
        )
      );
    }
    const particleGeo = new THREE.BufferGeometry().setFromPoints(particlePoints);
    const particleMat = new THREE.PointsMaterial({
      color: isDark ? champagneGold : accentWine,
      size: 0.12,
      transparent: true,
      opacity: isDark ? 0.35 : 0.2
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // =========================================================================
    // 8. INTERACTIVE MOUSE ORBIT & TOUCH CONTROLS
    // =========================================================================
    let targetRotationY = 0.45;
    let targetRotationX = 0.12;
    let currentRotationY = 0.45;
    let currentRotationX = 0.12;
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -(((e.clientY - rect.top) / container.clientHeight) * 2 - 1);

      if (!isDragging) {
        targetRotationY = x * 0.75 + 0.45;
        targetRotationX = y * 0.3 + 0.12;
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleDragMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      prevMousePos = { x: e.clientX, y: e.clientY };

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.006;
      targetRotationX = Math.max(-0.4, Math.min(0.6, targetRotationX));
    };

    const handleWheel = (e) => {
      // Gentle zoom control with limits
      camera.position.z = Math.max(22, Math.min(50, camera.position.z + e.deltaY * 0.03));
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleDragMove);
    container.addEventListener('wheel', handleWheel, { passive: true });

    // Touch controls for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;
      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.006;
    };
    const handleTouchEnd = () => { isDragging = false; };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // =========================================================================
    // 9. ANIMATION LOOP: CIVIL ENGINEERING PROCESS HARMONICS & TELEMETRY
    // =========================================================================
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const currentMode = activeModeRef.current;

      // Smooth idle rotation
      if (!isDragging) {
        targetRotationY += 0.0018;
      }
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      rootAssembly.rotation.y = currentRotationY;
      rootAssembly.rotation.x = currentRotationX;

      // Realistic structural wind sway harmonic oscillation (Mode 1 Lateral Sway)
      const swayAmplitude = 0.25;
      towerGroup.position.x = Math.sin(elapsedTime * 1.2) * swayAmplitude;
      towerGroup.rotation.z = Math.sin(elapsedTime * 1.2) * 0.008; // 0.46 degree lateral tilt

      // PROCESS 1: Tower Crane Operation (Slewing and Hoist Girder Lift)
      const craneActive = currentMode === 'all' || currentMode === 'crane' || currentMode === 'staging';
      craneGroup.visible = craneActive;
      if (craneActive) {
        // Slewing boom oscillates as if placing steel in position
        slewingJib.rotation.y = Math.sin(elapsedTime * 0.5) * 0.55;
        // Hoist trolley moves along jib
        hoistTrolley.position.x = 6.2 + Math.sin(elapsedTime * 0.7) * 2.2;
        // Girder breathing micro-rotation
        girderMesh.rotation.y = Math.sin(elapsedTime * 1.5) * 0.15;
      }

      // PROCESS 2: Gravity Load Transfer Pulses streaming down mega-columns
      const loadpathActive = currentMode === 'all' || currentMode === 'loadpath';
      pulseInstanced.visible = loadpathActive;
      if (loadpathActive) {
        const topY = totalHeight / 2 + 1.2;
        const bottomY = -totalHeight / 2 - pileHeight + 1.5;
        const totalSpan = topY - bottomY;

        pulses.forEach((p, idx) => {
          p.progress = (p.progress + p.speed * 0.016) % 1.0;
          const currentY = topY - p.progress * totalSpan;
          
          pulseDummy.position.set(p.colX, currentY, p.colZ);
          // Scale pulses as they accumulate axial force near base
          const forceScale = 0.8 + p.progress * 0.7;
          pulseDummy.scale.set(forceScale, forceScale * 1.4, forceScale);
          pulseDummy.updateMatrix();
          pulseInstanced.setMatrixAt(idx, pulseDummy.matrix);
        });
        pulseInstanced.instanceMatrix.needsUpdate = true;
      }

      // PROCESS 3: LiDAR / BIM Vertical Telemetry Scanner
      const scanActive = currentMode === 'all' || currentMode === 'scan';
      scanPlaneGroup.visible = scanActive;
      if (scanActive) {
        // Laser plane traverses smoothly from bedrock to roof
        const scanY = Math.sin(elapsedTime * 0.8) * (totalHeight / 2 + 3) + 1.0;
        scanPlaneGroup.position.y = scanY;
        scanPlaneMesh.rotation.z = elapsedTime * 0.1;
      }

      // PROCESS 4: FEA Stress Tensor Nodes
      const feaActive = currentMode === 'all' || currentMode === 'fea';
      if (nodeInstanced.instanceColor) {
        nodeColors.forEach(({ idx, stress }) => {
          // In FEA mode, pulse critical stress concentration nodes
          let targetHex = stress;
          if (stress === feaCritical) {
            targetHex = Math.sin(elapsedTime * 5.0) > 0 ? feaCritical : feaWarning;
          }
          nodeInstanced.setColorAt(idx, new THREE.Color(targetHex));
        });
        nodeInstanced.instanceColor.needsUpdate = true;
      }

      // Rotate atmospheric particle dust slowly
      particles.rotation.y = -elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleDragMove);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* Three.js Canvas Mount */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Civil Engineering 3D Simulation: Click & drag to rotate, scroll to zoom"
      />

      {/* ========================================================================= */}
      {/* LIVE CIVIL ENGINEERING TELEMETRY HUD (FROSTED GLASS READOUT)             */}
      {/* ========================================================================= */}
      <div className="absolute bottom-4 right-4 sm:right-6 z-30 pointer-events-auto hidden sm:block">
        <div className="rounded-2xl bg-white/85 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/90 dark:border-white/20 p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] font-mono text-[10px] text-zinc-800 dark:text-zinc-200 space-y-1.5 max-w-xs transition-all">
          <div className="flex items-center justify-between gap-3 border-b border-white/30 dark:border-white/10 pb-1.5">
            <span className="text-[#D4AF37] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              FEA TELEMETRY
            </span>
            <span className="text-[9px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              ASCE 7-22 / IBC
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px]">
            <div>
              <span className="text-zinc-500 dark:text-zinc-400 block text-[9px]">AXIAL GRAVITY</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">{telemetry.axialLoad}</span>
            </div>
            <div>
              <span className="text-zinc-500 dark:text-zinc-400 block text-[9px]">BASE SHEAR V_b</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">{telemetry.baseShear}</span>
            </div>
            <div>
              <span className="text-zinc-500 dark:text-zinc-400 block text-[9px]">LATERAL DRIFT</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{telemetry.driftRatio} (PASS)</span>
            </div>
            <div>
              <span className="text-zinc-500 dark:text-zinc-400 block text-[9px]">1st MODE PERIOD</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">{telemetry.naturalPeriod}</span>
            </div>
          </div>

          {/* FEA Color Tensor Legend */}
          <div className="pt-1.5 border-t border-white/30 dark:border-white/10 flex items-center justify-between text-[9px]">
            <span className="text-zinc-500 dark:text-zinc-400">STRESS TENSOR:</span>
            <div className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2 rounded-xs bg-[#38bdf8]" title="Low: 45 MPa"></span>
              <span className="inline-block w-2.5 h-2 rounded-xs bg-[#10b981]" title="Nominal: 120 MPa"></span>
              <span className="inline-block w-2.5 h-2 rounded-xs bg-[#f59e0b]" title="Shear: 210 MPa"></span>
              <span className="inline-block w-2.5 h-2 rounded-xs bg-[#ef4444]" title="Peak Moment: 290 MPa"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
