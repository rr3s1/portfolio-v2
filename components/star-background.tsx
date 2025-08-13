"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useMemo } from "react";
import { AdditiveBlending, CanvasTexture, Color, type Points as PointsType, type PointsMaterial } from "three";

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Simple warm/cool palette for per-vertex colors
  const palette = useMemo(
    () => [
      0xff1744, // vivid red
      0xff9100, // vivid orange
      0xffea00, // vivid yellow
      0x00e676, // neon green
      0x1de9b6, // teal/cyan
      0x2979ff, // electric blue
      0x7c4dff, // indigo/violet
      0xd500f9, // magenta
      0xff4081, // pink
    ].map((hex) => new Color(hex)),
    []
  );

  const colors = useMemo(() => {
    const arr = new Float32Array(sphere.length);
    for (let i = 0; i < arr.length; i += 3) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      arr[i] = c.r;
      arr[i + 1] = c.g;
      arr[i + 2] = c.b;
    }
    return arr;
  }, [palette, sphere.length]);

  // Generate a small star-shaped sprite texture once
  const starTexture = useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.clearRect(0, 0, size, size);
    ctx.translate(size / 2, size / 2);
    const spikes = 5;
    const outerRadius = size * 0.45;
    const innerRadius = size * 0.2;
    let rot = Math.PI / 2 * 3;
    let x = 0;
    let y = 0;
    ctx.beginPath();
    ctx.moveTo(0, -outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = Math.cos(rot) * outerRadius;
      y = Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += Math.PI / 5;
      x = Math.cos(rot) * innerRadius;
      y = Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += Math.PI / 5;
    }
    ctx.lineTo(0, -outerRadius);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.shadowColor = "rgba(255,255,255,1)";
    ctx.shadowBlur = 14; // stronger glow
    ctx.fill();

    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Clear vertical drift perception: move points downward and wrap
  const RADIUS = 1.2;
  const SPEED_Z = 0.8; // forward towards camera per second
  const EXPAND = 0.35; // radial expansion per second

  const matRef = useRef<PointsMaterial | null>(null);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const geom = ref.current.geometry;
      const posAttr = geom.getAttribute("position");
      const arr = posAttr.array as Float32Array;
      const stepZ = SPEED_Z * delta;
      const expand = 1 + EXPAND * delta;
      for (let i = 0; i < arr.length; i += 3) {
        // Radially expand X/Y from center to create streak feeling
        arr[i] *= expand; // x
        arr[i + 1] *= expand; // y
        // Move forward along Z towards camera
        arr[i + 2] += stepZ;

        // Respawn behind camera or if outside bounds
        if (
          arr[i + 2] > RADIUS ||
          Math.abs(arr[i]) > RADIUS ||
          Math.abs(arr[i + 1]) > RADIUS
        ) {
          arr[i] = (Math.random() - 0.5) * 0.1; // near center
          arr[i + 1] = (Math.random() - 0.5) * 0.1;
          arr[i + 2] = -RADIUS; // far back
        }
      }
      posAttr.needsUpdate = true;

      // Minimize rotation so drift is clearly downward
      ref.current.rotation.x = 0;
      ref.current.rotation.y = 0;
    }

    // Twinkle: pulse size subtly using a phase so not all sync
    if (matRef.current) {
      const base = 0.005; // current doubled size
      const pulse = 0.35; // 35% variation
      const t = state.clock.getElapsedTime();
      matRef.current.size = base * (1 + pulse * Math.sin(t * 1.5 + phase));
      matRef.current.needsUpdate = true;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        colors={colors}
        frustumCulled
        {...props}
      >
        <PointMaterial
          ref={matRef as any}
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
          // Use star sprite texture for star-shaped points
          map={starTexture ?? undefined}
          alphaTest={0.1}
          blending={AdditiveBlending}
          vertexColors
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
