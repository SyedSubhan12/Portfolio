
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DataVisualizationBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    camera.position.z = 30;
    
    // Create particles for a network graph visualization
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    // Create random positions and colors for particles
    for (let i = 0; i < particlesCount * 3; i+=3) {
      // Positions - create a sphere-like distribution
      const radius = 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i+1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i+2] = radius * Math.cos(phi);
      
      // Colors - blue to purple gradient
      colorsArray[i] = 0.2 + Math.random() * 0.2; // R
      colorsArray[i+1] = 0.4 + Math.random() * 0.2; // G
      colorsArray[i+2] = 0.8 + Math.random() * 0.2; // B
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create connections between close particles to simulate a network
    const linesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x6C63FF,
      transparent: true,
      opacity: 0.2
    });
    
    const threshold = 5; // Connection distance threshold
    const linesGeometry = new THREE.BufferGeometry();
    const linesPositions: number[] = [];
    
    // Find close particles and create connections
    for (let i = 0; i < particlesCount; i++) {
      const x1 = posArray[i * 3];
      const y1 = posArray[i * 3 + 1];
      const z1 = posArray[i * 3 + 2];
      
      for (let j = i + 1; j < particlesCount; j++) {
        const x2 = posArray[j * 3];
        const y2 = posArray[j * 3 + 1];
        const z2 = posArray[j * 3 + 2];
        
        const distance = Math.sqrt(
          Math.pow(x1 - x2, 2) + 
          Math.pow(y1 - y2, 2) + 
          Math.pow(z1 - z2, 2)
        );
        
        if (distance < threshold) {
          linesPositions.push(x1, y1, z1);
          linesPositions.push(x2, y2, z2);
        }
      }
    }
    
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linesPositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);
    
    // Add event listener for mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      particlesMesh.rotation.x += mouseY * 0.001;
      particlesMesh.rotation.y += mouseX * 0.001;
      linesMesh.rotation.x += mouseY * 0.001;
      linesMesh.rotation.y += mouseX * 0.001;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      linesMesh.rotation.x += 0.0005;
      linesMesh.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />;
};

export default DataVisualizationBackground;
