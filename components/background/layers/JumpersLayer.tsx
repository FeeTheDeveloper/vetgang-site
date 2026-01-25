"use client";

import { Svg } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group, MeshBasicMaterial, Vector3 } from "three";
import { MOTION_SPEEDS, TIER_SETTINGS } from "@/lib/constants";

const jumperAsset = "/assets/silhouettes/jumper.svg";
const chuteAsset = "/assets/silhouettes/parachute.svg";

type Jumper = {
  id: number;
  x: number;
  baseX: number;
  y: number;
  speed: number;
  driftAmplitude: number;
  driftSpeed: number;
  driftPhase: number;
  driftBias: number;
  deployAfter: number;
  spawnTime: number;
  deployed: boolean;
  depth: number;
  active: boolean;
};

export default function JumpersLayer({ tier }: { tier: 1 | 2 }) {
  const count = TIER_SETTINGS[tier].jumperCount;
  const jumperRefs = useRef<Group[]>([]);
  const chuteRefs = useRef<Group[]>([]);
  const jumperState = useRef<Jumper[]>([]);
  const waveState = useRef({ nextWave: 6 + Math.random() * 4 });

  const { jumperMaterial, chuteMaterial, targetScale } = useMemo(() => {
    /**
     * Drop waves:
     * - New wave every ~12–20s with 3–6 jumpers clustered by a shared x-center.
     * - Each jumper freefalls for a clear duration, then chutes deploy with a
     *   scale pop + slower descent and wind-driven drift.
     * - After exiting, jumpers reset fully offscreen until the next wave.
     */
    jumperState.current = Array.from({ length: count }, (_, index) => ({
      id: index,
      x: 0,
      baseX: 0,
      y: 4.5,
      speed: 0.32 + Math.random() * 0.25,
      driftAmplitude: 0.12 + Math.random() * 0.18,
      driftSpeed: 0.35 + Math.random() * 0.3,
      driftPhase: Math.random() * Math.PI * 2,
      driftBias: (Math.random() - 0.5) * 0.08,
      deployAfter: 1.8 + Math.random() * 1.4,
      spawnTime: 0,
      deployed: false,
      depth: -0.8 - Math.random() * 1.6,
      active: false,
    }));

    return {
      jumperMaterial: new MeshBasicMaterial({ color: "#cbd5f5", transparent: true, opacity: 0.6 }),
      chuteMaterial: new MeshBasicMaterial({ color: "#d1d5db", transparent: true, opacity: 0.5 }),
      targetScale: new Vector3(1.1, 1.1, 1.1),
    };
  }, [count]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (time > waveState.current.nextWave) {
      const available = jumperState.current.filter((jumper) => !jumper.active);
      const waveSize = Math.min(available.length, 3 + Math.floor(Math.random() * 4));
      const clusterCenter = -1.8 + Math.random() * 3.6;
      const clusterSpread = 0.6 + Math.random() * 0.5;

      available.slice(0, waveSize).forEach((jumper, idx) => {
        const offset = ((idx - (waveSize - 1) / 2) / waveSize) * clusterSpread;
        jumper.active = true;
        jumper.baseX = clusterCenter + offset + (Math.random() - 0.5) * 0.15;
        jumper.x = jumper.baseX;
        jumper.y = 3.2 + Math.random() * 0.8;
        jumper.speed = 0.35 + Math.random() * 0.25;
        jumper.deployAfter = 2.0 + Math.random() * 1.4;
        jumper.spawnTime = time;
        jumper.deployed = false;
      });

      waveState.current.nextWave = time + 12 + Math.random() * 8;
    }

    jumperState.current.forEach((jumper, index) => {
      const group = jumperRefs.current[index];
      const chute = chuteRefs.current[index];
      if (!group || !chute) return;
      if (!jumper.active) {
        group.position.set(jumper.x, jumper.y, jumper.depth);
        chute.scale.set(0.15, 0.15, 0.15);
        chute.visible = false;
        return;
      }

      const elapsed = time - jumper.spawnTime;
      const driftMultiplier = jumper.deployed ? 1.4 : 0.8;
      const wind =
        Math.sin(time * jumper.driftSpeed + jumper.driftPhase) * jumper.driftAmplitude * driftMultiplier;
      jumper.baseX += delta * jumper.driftBias;
      jumper.x = jumper.baseX + wind;

      if (!jumper.deployed && elapsed >= jumper.deployAfter) {
        jumper.deployed = true;
      }

      if (jumper.deployed) {
        jumper.y -= delta * 0.12;
        chute.scale.lerp(targetScale, 0.12);
        chute.position.y = 0.25;
        chute.visible = true;
      } else {
        jumper.y -= delta * MOTION_SPEEDS.jumpers * jumper.speed;
        chute.scale.set(0.15, 0.15, 0.15);
        chute.visible = false;
      }

      group.position.set(jumper.x, jumper.y, jumper.depth);

      if (jumper.y < -3.8) {
        jumper.y = 4.6;
        jumper.x = 0;
        jumper.baseX = 0;
        jumper.active = false;
        jumper.deployAfter = 2.0 + Math.random() * 1.4;
        jumper.deployed = false;
      }
    });
  });

  if (count === 0) return null;

  return (
    <group>
      {jumperState.current.map((jumper, index) => (
        <group
          key={jumper.id}
          ref={(node) => {
            if (node) jumperRefs.current[index] = node;
          }}
          scale={[0.35, 0.35, 0.35]}
        >
          <group
            ref={(node) => {
              if (node) chuteRefs.current[index] = node;
            }}
            scale={[0.2, 0.2, 0.2]}
            position={[0, 0.3, 0]}
            visible={false}
          >
            <Svg src={chuteAsset} fillMaterial={chuteMaterial} strokeMaterial={chuteMaterial} />
          </group>
          <Svg src={jumperAsset} fillMaterial={jumperMaterial} strokeMaterial={jumperMaterial} />
        </group>
      ))}
    </group>
  );
}
