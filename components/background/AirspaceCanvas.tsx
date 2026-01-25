"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AIRSPACE_COLORS } from "@/lib/constants";
import CloudLayer from "@/components/background/layers/CloudLayer";
import PatrolLayer from "@/components/background/layers/PatrolLayer";
import JumpersLayer from "@/components/background/layers/JumpersLayer";
import EmbersLayer from "@/components/background/layers/EmbersLayer";

export default function AirspaceCanvas({ tier }: { tier: 1 | 2 }) {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: tier === 2 ? "high-performance" : "low-power" }}
      dpr={tier === 2 ? [1, 1.5] : [1, 1.25]}
    >
      <color attach="background" args={[AIRSPACE_COLORS.deep]} />
      <Suspense fallback={null}>
        <CloudLayer tier={tier} />
        <PatrolLayer tier={tier} />
        <JumpersLayer tier={tier} />
        <EmbersLayer tier={tier} />
      </Suspense>
    </Canvas>
  );
}
