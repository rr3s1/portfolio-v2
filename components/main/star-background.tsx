// ./components/main/star-background.tsx
"use client";
import { Canvas, useFrame, type PointsProps } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { Suspense, useMemo, useRef, useState } from "react";
import { AdditiveBlending, CanvasTexture, Color, Group, type Points as PointsType, type PointsMaterial } from "three";

const FLOATS = 3_000; // Reduced from 6,000 for better performance
const STAR_SIZE = 0.006; // doubled for bigger stars

export const StarBackground = (props: PointsProps) => {
  const groupRef = useRef<Group | null>(null);

  const [positions] = useState<Float32Array>(() => {
    const buf = new Float32Array(FLOATS);
    const n = Math.floor(FLOATS / 3);
    const phi = 2.399963229728653; // golden angle in radians (~137.5deg)
    for (let i = 0; i < n; i++) {
      // Fibonacci sphere direction (even angular spread)
      const z = 1 - (2 * (i + 0.5)) / n;
      const rXY = Math.sqrt(Math.max(0, 1 - z * z));
      const theta = i * phi;
      const dirX = Math.cos(theta) * rXY;
      const dirY = Math.sin(theta) * rXY;
      const dirZ = z;
      // Volume-aware radius: cbrt ensures uniform density in a sphere
      const r = 1.2 * Math.cbrt(Math.random());
      // Small blue-noise jitter to avoid perfect lattice
      const jitter = (Math.random() - 0.5) * 0.02 * 1.2;
      buf[i * 3 + 0] = (dirX * r) + jitter;
      buf[i * 3 + 1] = (dirY * r) + jitter;
      buf[i * 3 + 2] = (dirZ * r) + jitter;
    }
    return buf;
  });

  // Per-star speed factors to break uniform bands (entropy enhancement)
  const [speedFactors] = useState<Float32Array>(() => {
    const n = Math.floor(FLOATS / 3);
    const f = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      f[i] = 0.85 + Math.random() * 0.5; // 0.85 .. 1.35
    }
    return f;
  });

  const palette = [
    0xff1744, // vivid red
    0xff9100, // vivid orange
    0xffea00, // vivid yellow
    0x00e676, // neon green
    0x1de9b6, // teal/cyan
    0x2979ff, // electric blue
    0x7c4dff, // indigo/violet
    0xd500f9, // magenta
    0xff4081, // pink
  ].map((hex) => new Color(hex));

  const [colors] = useState<Float32Array>(() => {
    const arr = new Float32Array(FLOATS);
    for (let i = 0; i < FLOATS; i += 3) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      arr[i] = c.r;
      arr[i + 1] = c.g;
      arr[i + 2] = c.b;
    }
    return arr; // This is fine, arr is clearly Float32Array
  });

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

  const RADIUS = 1.2;
  const SPEED_Z = 0.4; // forward towards camera per second
  const EXPAND = 0.55; // radial expansion per second

  // Refs for each layer's geometry to flag updates
  const smallRef = useRef<PointsType | null>(null);
  const medRef = useRef<PointsType | null>(null);
  const largeRef = useRef<PointsType | null>(null);

  // Twinkle: material refs and phases per layer
  const smallMatRef = useRef<PointsMaterial | null>(null);
  const medMatRef = useRef<PointsMaterial | null>(null);
  const largeMatRef = useRef<PointsMaterial | null>(null);
  const smallPhase = useMemo(() => Math.random() * Math.PI * 2, []);
  const medPhase = useMemo(() => Math.random() * Math.PI * 2, []);
  const largePhase = useMemo(() => Math.random() * Math.PI * 2, []);

  // Golden-angle index for respawns to avoid temporal clustering
  const respawnIndex = useRef(0);
  const GOLDEN = 2.399963229728653;

  useFrame((_state, delta) => {
    const stepZ = SPEED_Z * delta;
    const expand = 1 + EXPAND * delta;
    const update = (ref: React.MutableRefObject<PointsType | null>) => {
      if (!ref.current) return;
      const geom = ref.current.geometry;
      const posAttr = geom.getAttribute("position");
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < arr.length; i += 3) {
        const j = (i / 3) | 0; // star index
        const sf = speedFactors[j] || 1;
        const stepZsf = stepZ * sf;
        // Depth-scaled expansion: more expansion as stars approach camera
        const depthNorm = (arr[i + 2] + RADIUS) / (2 * RADIUS); // 0..1
        const expandDepth = 1 + (EXPAND * sf * (0.3 + 0.7 * depthNorm)) * delta;
        // Radially expand X/Y from center to create warp streaks
        arr[i] *= expandDepth;     // x
        arr[i + 1] *= expandDepth; // y
        // Move forward along Z towards the camera
        arr[i + 2] += stepZsf;  // z

        // Respawn at back or if outside bounds
        if (
          arr[i + 2] > RADIUS ||
          Math.abs(arr[i]) > RADIUS ||
          Math.abs(arr[i + 1]) > RADIUS
        ) {
          // place near center using golden-angle ring to reduce clumping
          const k = respawnIndex.current++;
          const a = k * GOLDEN;
          const rr = 0.05 + Math.random() * 0.07; // 0.05..0.12 radius
          arr[i] = Math.cos(a) * rr;
          arr[i + 1] = Math.sin(a) * rr;
          arr[i + 2] = -RADIUS; // far back
          // new speed factor on respawn keeps field dynamic
          if (j < speedFactors.length) {
            speedFactors[j] = 0.85 + Math.random() * 0.5;
          }
        }
      }
      posAttr.needsUpdate = true;
    };

    update(smallRef);
    update(medRef);
    update(largeRef);

    // Twinkle per layer
    const t = _state.clock.getElapsedTime();
    if (smallMatRef.current) {
      smallMatRef.current.size = STAR_SIZE * 0.8 * (1 + 0.35 * Math.sin(t * 1.7 + smallPhase));
      smallMatRef.current.needsUpdate = true;
    }
    if (medMatRef.current) {
      medMatRef.current.size = STAR_SIZE * 1.1 * (1 + 0.35 * Math.sin(t * 1.5 + medPhase));
      medMatRef.current.needsUpdate = true;
    }
    if (largeMatRef.current) {
      largeMatRef.current.size = STAR_SIZE * 1.5 * (1 + 0.35 * Math.sin(t * 1.3 + largePhase));
      largeMatRef.current.needsUpdate = true;
    }
  });

  // Split into 3 layers for varied sizes
  const { smallPos, smallCol, medPos, medCol, largePos, largeCol } = useMemo(() => {
    const sPos: number[] = [];
    const sCol: number[] = [];
    const mPos: number[] = [];
    const mCol: number[] = [];
    const lPos: number[] = [];
    const lCol: number[] = [];
    for (let i = 0; i < positions.length; i += 3) {
      const r = Math.random();
      if (r < 0.5) {
        sPos.push(positions[i], positions[i + 1], positions[i + 2]);
        sCol.push(colors[i], colors[i + 1], colors[i + 2]);
      } else if (r < 0.85) {
        mPos.push(positions[i], positions[i + 1], positions[i + 2]);
        mCol.push(colors[i], colors[i + 1], colors[i + 2]);
      } else {
        lPos.push(positions[i], positions[i + 1], positions[i + 2]);
        lCol.push(colors[i], colors[i + 1], colors[i + 2]);
      }
    }
    return {
      smallPos: new Float32Array(sPos),
      smallCol: new Float32Array(sCol),
      medPos: new Float32Array(mPos),
      medCol: new Float32Array(mCol),
      largePos: new Float32Array(lPos),
      largeCol: new Float32Array(lCol),
    };
  }, [positions, colors]);

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      <Points ref={smallRef} stride={3} positions={smallPos} colors={smallCol} frustumCulled {...props}>
        <PointMaterial
          ref={smallMatRef as any}
          transparent
          size={STAR_SIZE * 0.8}
          sizeAttenuation
          depthWrite={false}
          map={starTexture ?? undefined}
          alphaTest={0.1}
          blending={AdditiveBlending}
          vertexColors
        />
      </Points>
      <Points ref={medRef} stride={3} positions={medPos} colors={medCol} frustumCulled {...props}>
        <PointMaterial
          ref={medMatRef as any}
          transparent
          size={STAR_SIZE * 1.1}
          sizeAttenuation
          depthWrite={false}
          map={starTexture ?? undefined}
          alphaTest={0.1}
          blending={AdditiveBlending}
          vertexColors
        />
      </Points>
      <Points ref={largeRef} stride={3} positions={largePos} colors={largeCol} frustumCulled {...props}>
        <PointMaterial
          ref={largeMatRef as any}
          transparent
          size={STAR_SIZE * 1.5}
          sizeAttenuation
          depthWrite={false}
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
      gl={{ alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);