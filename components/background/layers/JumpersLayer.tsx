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
  y: number;
  speed: number;
  drift: number;
  deployAt: number;
  deployed: boolean;
  depth: number;
};

export default function JumpersLayer({ tier }: { tier: 1 | 2 }) {
  const count = TIER_SETTINGS[tier].jumperCount;
  const jumperRefs = useRef<Group[]>([]);
  const chuteRefs = useRef<Group[]>([]);
  const jumperState = useRef<Jumper[]>([]);

  const { jumperMaterial, chuteMaterial, targetScale } = useMemo(() => {
    jumperState.current = Array.from({ length: count }, (_, index) => ({
      id: index,
      x: -2 + Math.random() * 4,
      y: 2 + Math.random() * 2,
      speed: 0.3 + Math.random() * 0.3,
      drift: (Math.random() - 0.5) * 0.15,
      deployAt: -0.2 - Math.random() * 1.2,
      deployed: false,
      depth: -0.5 - Math.random() * 1.5,
    }));

    return {
      jumperMaterial: new MeshBasicMaterial({ color: "#cbd5f5", transparent: true, opacity: 0.6 }),
      chuteMaterial: new MeshBasicMaterial({ color: "#d1d5db", transparent: true, opacity: 0.5 }),
      targetScale: new Vector3(1, 1, 1),
    };
  }, [count]);

  useFrame((_state, delta) => {
    jumperState.current.forEach((jumper, index) => {
      const group = jumperRefs.current[index];
      const chute = chuteRefs.current[index];
      if (!group || !chute) return;

      jumper.y -= delta * MOTION_SPEEDS.jumpers * jumper.speed;
      jumper.x += delta * jumper.drift;

      if (!jumper.deployed && jumper.y <= jumper.deployAt) {
        jumper.deployed = true;
      }

      if (jumper.deployed) {
        jumper.y -= delta * 0.05;
        chute.scale.lerp(targetScale, 0.08);
        chute.position.y = 0.25;
        chute.visible = true;
      } else {
        chute.scale.set(0.2, 0.2, 0.2);
        chute.visible = false;
      }

      group.position.set(jumper.x, jumper.y, jumper.depth);

      if (jumper.y < -3.5) {
        jumper.y = 2.5 + Math.random() * 2;
        jumper.x = -2 + Math.random() * 4;
        jumper.deployAt = -0.2 - Math.random() * 1.2;
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
