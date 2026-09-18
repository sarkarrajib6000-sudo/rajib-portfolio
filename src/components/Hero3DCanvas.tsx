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

    // 2. WebGL Renderer with graceful fallback for JSDOM/environments without WebGL
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(container.clientWidth || 400, container.clientHeight || 400);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      container.appendChild(renderer.domElement);
    } catch (err) {
      // If WebGL is unavailable (e.g. unit testing in JSDOM), exit gracefully
      return;
    }

    // 3. Lighting Setup - Functional Accents: Teal (#22D3AA) and Amber (#FF7A45)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const tealPointLight = new THREE.PointLight(0x22d3aa, 4, 20);
    tealPointLight.position.set(4, 4, 4);
    scene.add(tealPointLight);

    const amberPointLight = new THREE.PointLight(0xff7a45, 4, 20);
    amberPointLight.position.set(-4, -4, 4);
    scene.add(amberPointLight);

    // 4. Main 3D Core Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Core Geometry - TorusKnot
    const coreGeometry = new THREE.TorusKnotGeometry(1.4, 0.45, 128, 32, 2, 3);

    // Inner Solid Dark Metallic Material
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x151a22,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(coreGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // Outer Wireframe Material (Teal accent)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3aa,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireframeMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    wireframeMesh.scale.set(1.03, 1.03, 1.03);
    mainGroup.add(wireframeMesh);

    // 5. Orbiting Satellites (Amber accent)
    const satellitesGroup = new THREE.Group();
    mainGroup.add(satellitesGroup);

    const satCount = 6;
    const satGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const satMaterial = new THREE.MeshStandardMaterial({
      color: 0xff7a45,
      emissive: 0xff7a45,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
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

    // 6. Floating Data Points
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8a93a1,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 7. Mouse Parallax Tracking
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

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      mainGroup.rotation.x = elapsedTime * 0.2 + mouseY;
      mainGroup.rotation.y = elapsedTime * 0.3 + mouseX;

      satellitesGroup.rotation.z = -elapsedTime * 0.4;
      particleSystem.rotation.y = elapsedTime * 0.04;

      tealPointLight.position.x = Math.sin(elapsedTime * 0.8) * 5;
      tealPointLight.position.z = Math.cos(elapsedTime * 0.8) * 5;
      amberPointLight.position.x = -Math.sin(elapsedTime * 0.6) * 5;
      amberPointLight.position.y = Math.cos(elapsedTime * 0.6) * 5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      if (renderer) renderer.dispose();
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
      className="w-full h-[350px] md:h-[450px] lg:h-[500px] relative pointer-events-auto"
    />
  );
};


