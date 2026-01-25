"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferAttribute, Points } from "three";
import { AIRSPACE_COLORS, MOTION_SPEEDS, TIER_SETTINGS } from "@/lib/constants";

export default function EmbersLayer({ tier }: { tier: 1 | 2 }) {
  const count = TIER_SETTINGS[tier].emberCount;
  const pointsRef = useRef<Points>(null);

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      data[i * 3] = -4 + Math.random() * 8;
      data[i * 3 + 1] = -3 + Math.random() * 6;
      data[i * 3 + 2] = -2 - Math.random() * 3;
    }
    return data;
  }, [count]);

  useFrame((_state, delta) => {
    const points = pointsRef.current;
    if (!points) return;
    const positionAttr = points.geometry.getAttribute("position") as BufferAttribute;
    for (let i = 0; i < count; i += 1) {
      const yIndex = i * 3 + 1;
      let y = positionAttr.array[yIndex] as number;
      y += delta * MOTION_SPEEDS.embers * 0.5;
      if (y > 3.2) {
        y = -3.2;
      }
      positionAttr.array[yIndex] = y;
    }
    positionAttr.needsUpdate = true;
  });

  if (count === 0) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={AIRSPACE_COLORS.ember}
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.35}
      />
    </points>
  );
}
