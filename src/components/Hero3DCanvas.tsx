import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const indigoPointLight = new THREE.PointLight(0x6366f1, 4, 20);
    indigoPointLight.position.set(4, 4, 4);
    scene.add(indigoPointLight);

    const purplePointLight = new THREE.PointLight(0xa855f7, 4, 20);
    purplePointLight.position.set(-4, -4, 4);
    scene.add(purplePointLight);

    const cyanPointLight = new THREE.PointLight(0x06b6d4, 3, 20);
    cyanPointLight.position.set(0, 5, -2);
    scene.add(cyanPointLight);

    // 4. Main 3D Core Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Core Geometry - TorusKnot / Icosahedron
    const coreGeometry = new THREE.TorusKnotGeometry(1.4, 0.45, 128, 32, 2, 3);

    // Inner Metallic Solid Material
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f46e5,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(coreGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // Outer Glowing Wireframe Material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    wireframeMesh.scale.set(1.03, 1.03, 1.03);
    mainGroup.add(wireframeMesh);

    // 5. Orbiting Nodes (Satellites)
    const satellitesGroup = new THREE.Group();
    mainGroup.add(satellitesGroup);

    const satCount = 6;
    const satGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const satMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });

    for (let i = 0; i < satCount; i++) {
      const satMesh = new THREE.Mesh(satGeometry, satMaterial);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 2.6;
      satMesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.sin(angle * 3) * 0.5)
      );
      satellitesGroup.add(satMesh);
    }

    // 6. Floating Particle Dust Cloud
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      particleScales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc084fc,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 7. Mouse Interaction Parallax Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (e.clientX - windowHalfX) * 0.001;
      targetMouseY = (e.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Group Rotations
      mainGroup.rotation.x = elapsedTime * 0.25 + mouseY;
      mainGroup.rotation.y = elapsedTime * 0.35 + mouseX;

      satellitesGroup.rotation.z = -elapsedTime * 0.5;
      particleSystem.rotation.y = elapsedTime * 0.05;

      // Pulse Light Positions
      indigoPointLight.position.x = Math.sin(elapsedTime * 0.8) * 5;
      indigoPointLight.position.z = Math.cos(elapsedTime * 0.8) * 5;
      purplePointLight.position.x = -Math.sin(elapsedTime * 0.6) * 5;
      purplePointLight.position.y = Math.cos(elapsedTime * 0.6) * 5;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Window Resize Handling
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      innerMaterial.dispose();
      wireframeMaterial.dispose();
      satGeometry.dispose();
      satMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[550px] lg:h-[650px] relative pointer-events-auto cursor-grab active:cursor-grabbing"
    />
  );
};
