import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroSphere() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    // 2. Renderer with transparent background and antialiasing
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x0062ff, 5, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00c2ff, 4, 50);
    pointLight2.position.set(-5, -3, 3);
    scene.add(pointLight2);

    // 4. Main 3D Sphere with Texture
    const textureLoader = new THREE.TextureLoader();
    const sphereTexture = textureLoader.load('/hero-sphere.jpg');
    sphereTexture.colorSpace = THREE.SRGBColorSpace;

    const sphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: sphereTexture,
      roughness: 0.3,
      metalness: 0.4,
      emissive: new THREE.Color(0x081a36),
      emissiveIntensity: 0.5,
    });
    const mainSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(mainSphere);

    // 5. Outer Wireframe Cage / Tech Latitudes
    const wireframeGeometry = new THREE.SphereGeometry(1.58, 24, 24);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00c2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireframeSphere = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframeSphere);

    // 6. Glowing Particle Points on Sphere Surface
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 1.62;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0062ff,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleCloud);

    // 7. 3D Orbital Rings (Tilted Torus Rings)
    const ring1Geometry = new THREE.TorusGeometry(2.1, 0.016, 16, 100);
    const ring1Material = new THREE.MeshBasicMaterial({
      color: 0x0062ff,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(2.25, 0.014, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x00c2ff,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.x = -Math.PI / 3.5;
    ring2.rotation.y = -Math.PI / 4;
    scene.add(ring2);

    // 8. Mouse interaction (gentle tilt / drag responsiveness)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 0.5;
      mouseY = (y / rect.height) * 0.5;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 9. Animation Loop
    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Continuous 3D rotation of the sphere
      mainSphere.rotation.y = elapsedTime * 0.35;
      mainSphere.rotation.x = Math.sin(elapsedTime * 0.2) * 0.12;

      // Wireframe rotates slightly faster for depth effect
      wireframeSphere.rotation.y = elapsedTime * 0.25;
      wireframeSphere.rotation.z = elapsedTime * 0.15;

      // Particles rotation
      particleCloud.rotation.y = -elapsedTime * 0.2;
      particleCloud.rotation.x = elapsedTime * 0.1;

      // Rings rotating in 3D
      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.z = -elapsedTime * 0.22;

      // Gentle interactive mouse responsiveness
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;

      mainSphere.rotation.y += targetRotationY;
      mainSphere.rotation.x += targetRotationX;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 10. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 360;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ring1Geometry.dispose();
      ring1Material.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="three-sphere-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab'
      }}
      title="Interactive rotating 3D sphere"
    />
  );
}
