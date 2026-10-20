import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const Hero3DCanvas = ({ className = '' }) => {
  const containerRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 42);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group holding the entire 3D structural tower
    const towerGroup = new THREE.Group();
    scene.add(towerGroup);

    // Color definitions based on dark / light mode
    const primaryColor = isDark ? 0xd4af37 : 0x801834; // Gold vs Wine
    const accentColor = isDark ? 0x38bdf8 : 0x0284c7;  // Cyan / Sky
    const slabColor = isDark ? 0x181a1f : 0xf4f4f5;
    const wireColor = isDark ? 0x3f444e : 0x71717a;

    // Build High-Rise Tower Geometry: 16 Stories with Outrigger Trusses
    const floorCount = 14;
    const floorWidth = 9;
    const floorDepth = 9;
    const storyHeight = 2.2;
    const totalHeight = floorCount * storyHeight;

    // Floor slabs
    const slabGeo = new THREE.BoxGeometry(floorWidth, 0.25, floorDepth);
    const slabMat = new THREE.MeshBasicMaterial({
      color: slabColor,
      transparent: true,
      opacity: isDark ? 0.4 : 0.35,
      wireframe: false
    });
    const slabEdgeMat = new THREE.LineBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: isDark ? 0.6 : 0.45
    });

    for (let i = 0; i < floorCount; i++) {
      const y = i * storyHeight - totalHeight / 2 + 2;
      const slabMesh = new THREE.Mesh(slabGeo, slabMat);
      slabMesh.position.y = y;
      towerGroup.add(slabMesh);

      // Floor slab edges
      const edges = new THREE.EdgesGeometry(slabGeo);
      const line = new THREE.LineSegments(edges, slabEdgeMat);
      line.position.y = y;
      towerGroup.add(line);
    }

    // 4 Corner Structural Columns
    const colHalfW = floorWidth / 2 - 0.2;
    const colHalfD = floorDepth / 2 - 0.2;
    const colCorners = [
      [-colHalfW, -colHalfD],
      [colHalfW, -colHalfD],
      [colHalfW, colHalfD],
      [-colHalfW, colHalfD]
    ];

    const colGeo = new THREE.CylinderGeometry(0.18, 0.22, totalHeight, 8);
    const colMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.85
    });

    colCorners.forEach(([x, z]) => {
      const colMesh = new THREE.Mesh(colGeo, colMat);
      colMesh.position.set(x, 2, z);
      towerGroup.add(colMesh);
    });

    // Central Core Shear Walls (Inner Elevator / Service Core)
    const coreGeo = new THREE.BoxGeometry(3.6, totalHeight, 3.6);
    const coreMat = new THREE.MeshBasicMaterial({
      color: slabColor,
      transparent: true,
      opacity: isDark ? 0.3 : 0.2,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 2;
    towerGroup.add(coreMesh);

    // Diagonal Outrigger X-Bracing Trusses (like iconic structural high-rises)
    const bracePoints = [];
    for (let f = 0; f < floorCount - 1; f += 2) {
      const y1 = f * storyHeight - totalHeight / 2 + 2;
      const y2 = (f + 2) * storyHeight - totalHeight / 2 + 2;

      // Front Face X
      bracePoints.push(
        new THREE.Vector3(-colHalfW, y1, colHalfD),
        new THREE.Vector3(colHalfW, y2, colHalfD),
        new THREE.Vector3(colHalfW, y1, colHalfD),
        new THREE.Vector3(-colHalfW, y2, colHalfD)
      );

      // Back Face X
      bracePoints.push(
        new THREE.Vector3(-colHalfW, y1, -colHalfD),
        new THREE.Vector3(colHalfW, y2, -colHalfD),
        new THREE.Vector3(colHalfW, y1, -colHalfD),
        new THREE.Vector3(-colHalfW, y2, -colHalfD)
      );

      // Left Face X
      bracePoints.push(
        new THREE.Vector3(-colHalfW, y1, -colHalfD),
        new THREE.Vector3(-colHalfW, y2, colHalfD),
        new THREE.Vector3(-colHalfW, y1, colHalfD),
        new THREE.Vector3(-colHalfW, y2, -colHalfD)
      );

      // Right Face X
      bracePoints.push(
        new THREE.Vector3(colHalfW, y1, -colHalfD),
        new THREE.Vector3(colHalfW, y2, colHalfD),
        new THREE.Vector3(colHalfW, y1, colHalfD),
        new THREE.Vector3(colHalfW, y2, -colHalfD)
      );
    }

    const braceGeo = new THREE.BufferGeometry().setFromPoints(bracePoints);
    const braceMat = new THREE.LineBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: isDark ? 0.7 : 0.55
    });
    const braces = new THREE.LineSegments(braceGeo, braceMat);
    towerGroup.add(braces);

    // Glowing Joint Nodes (FEA Mesh Nodes)
    const nodeCount = 36;
    const nodeGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: primaryColor
    });

    const nodeInstanced = new THREE.InstancedMesh(nodeGeo, nodeMat, nodeCount);
    const dummy = new THREE.Object3D();

    let nodeIdx = 0;
    for (let f = 0; f < floorCount && nodeIdx < nodeCount; f += 2) {
      const y = f * storyHeight - totalHeight / 2 + 2;
      colCorners.forEach(([cx, cz]) => {
        if (nodeIdx < nodeCount) {
          dummy.position.set(cx, y, cz);
          dummy.updateMatrix();
          nodeInstanced.setMatrixAt(nodeIdx++, dummy.matrix);
        }
      });
    }
    nodeInstanced.instanceMatrix.needsUpdate = true;
    towerGroup.add(nodeInstanced);

    // Foundation Isometric Grid Base
    const gridHelper = new THREE.GridHelper(30, 20, primaryColor, wireColor);
    gridHelper.position.y = -totalHeight / 2 + 1.8;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = isDark ? 0.35 : 0.25;
    scene.add(gridHelper);

    // Surrounding Floating Structural Particle Dust
    const particleCount = 70;
    const particlePoints = [];
    for (let i = 0; i < particleCount; i++) {
      particlePoints.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 45,
          (Math.random() - 0.5) * 35,
          (Math.random() - 0.5) * 40
        )
      );
    }
    const particleGeo = new THREE.BufferGeometry().setFromPoints(particlePoints);
    const particleMat = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.35,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking & Drag Orbit Controls
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0.5;
    let targetRotationX = 0.15;
    let currentRotationY = 0.5;
    let currentRotationX = 0.15;

    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -(((e.clientY - rect.top) / container.clientHeight) * 2 - 1);

      if (!isDragging) {
        targetRotationY = x * 0.75 + 0.5;
        targetRotationX = y * 0.35 + 0.15;
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

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleDragMove);

    // Touch support for mobile devices
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
    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth idle rotation plus interactive mouse follow
      if (!isDragging) {
        targetRotationY += 0.002;
      }

      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      towerGroup.rotation.y = currentRotationY;
      towerGroup.rotation.x = currentRotationX;

      // Subtle vertical breathing oscillation
      towerGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.4;

      // Rotate particle dust slowly in opposite direction
      particles.rotation.y = -elapsedTime * 0.03;

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
    <div 
      ref={containerRef} 
      className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none ${className}`}
      title="Click and drag to rotate 3D structural model"
    />
  );
};
