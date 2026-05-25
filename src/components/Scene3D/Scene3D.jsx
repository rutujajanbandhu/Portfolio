import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Scene3D.module.css';


/* ---------- Subtle neural particle field ---------- */
function Particles({ count = 1200 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ---------- Mouse parallax rig ---------- */
function ParallaxRig() {
  const target = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  useFrame((state) => {
    state.camera.position.x += (target.current.x - state.camera.position.x) * 0.03;
    state.camera.position.y += (-target.current.y - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ---------- Public component ---------- */
export default function Scene3D() {
  const [enabled, setEnabled] = useState(true);
  const [dpr, setDpr] = useState([1, 1.5]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const small = window.innerWidth < 640;
    if (reduce) setEnabled(false);
    if (lowEnd || small) setDpr([1, 1.25]);
  }, []);

  if (!enabled) {
    return <div className={`${styles.wrap} ${styles.fallback}`} aria-hidden="true" />;
  }

  return (
    <div className={styles.wrap} aria-hidden="true">
      <Canvas
        dpr={dpr}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 6], fov: 55 }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} color="#a5b4fc" />
          <pointLight position={[-4, -2, 3]} intensity={0.8} color="#22d3ee" />

          <Particles count={900} />
          <ParallaxRig />
        </Suspense>
      </Canvas>
      <div className={styles.vignette} />
      <div className={styles.grid} />
    </div>
  );
}
