"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function PointField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 140;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 6;
      positions[i3 + 2] = (Math.random() - 0.5) * 4;
      velocities[i3] = (Math.random() - 0.5) * 0.004;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.003;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    return { positions, velocities };
  }, []);

  useFrame(() => {
    const points = pointsRef.current;
    if (!points) return;
    const attr = points.geometry.attributes.position as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] += velocities[i3];
      arr[i3 + 1] += velocities[i3 + 1];
      arr[i3 + 2] += velocities[i3 + 2];

      if (Math.abs(arr[i3]) > 5) velocities[i3] *= -1;
      if (Math.abs(arr[i3 + 1]) > 3) velocities[i3 + 1] *= -1;
      if (Math.abs(arr[i3 + 2]) > 2) velocities[i3 + 2] *= -1;
    }

    attr.needsUpdate = true;
    points.rotation.y += 0.0008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#080807"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.35}
        depthWrite={false}
      />
    </points>
  );
}

function ConnectingLines() {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: number[] = [];
    const rings = 4;
    const segments = 28;

    for (let r = 0; r < rings; r++) {
      const radius = 1.4 + r * 0.7;
      for (let i = 0; i < segments; i++) {
        const a0 = (i / segments) * Math.PI * 2;
        const a1 = ((i + 1) / segments) * Math.PI * 2;
        points.push(
          Math.cos(a0) * radius,
          Math.sin(a0) * radius * 0.45,
          -r * 0.2,
          Math.cos(a1) * radius,
          Math.sin(a1) * radius * 0.45,
          -r * 0.2,
        );
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.elapsedTime * 0.03;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#080807" transparent opacity={0.12} />
    </lineSegments>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <PointField />
      <ConnectingLines />
    </>
  );
}

export function HeroCanvas() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);

    const onVisibility = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      media.removeEventListener("change", onChange);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(8,8,7,0.06),transparent_55%)]"
      />
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {visible ? (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ width: "100%", height: "100%" }}
        >
          <Scene />
        </Canvas>
      ) : null}
    </div>
  );
}
