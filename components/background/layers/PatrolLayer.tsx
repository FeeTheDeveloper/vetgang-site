"use client";

import { Svg } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, Group, MeshBasicMaterial, Vector3 } from "three";
import { MOTION_SPEEDS, TIER_SETTINGS } from "@/lib/constants";

const silhouettes = [
  "/assets/silhouettes/plane.svg",
  "/assets/silhouettes/heli.svg",
  "/assets/silhouettes/drone.svg",
];

type Patrol = {
  id: number;
  speed: number;
  offset: number;
  scale: number;
  depth: number;
  path: [Vector3, Vector3, Vector3, Vector3];
  asset: string;
};

function cubicBezier(t: number, p0: Vector3, p1: Vector3, p2: Vector3, p3: Vector3) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  const point = new Vector3();
  point.addScaledVector(p0, uuu);
  point.addScaledVector(p1, 3 * uu * t);
  point.addScaledVector(p2, 3 * u * tt);
  point.addScaledVector(p3, ttt);
  return point;
}

export default function PatrolLayer({ tier }: { tier: 1 | 2 }) {
  const count = TIER_SETTINGS[tier].patrolCount;
  const groupRefs = useRef<Group[]>([]);

  const { patrols, material } = useMemo(() => {
    const baseMaterial = new MeshBasicMaterial({
      color: new Color("#9aa4b2"),
      transparent: true,
      opacity: 0.5,
    });

    const created = Array.from({ length: count }, (_, index) => {
      const depth = -1 - Math.random() * 2.5;
      const scale = 0.3 + Math.random() * 0.4;
      const offset = Math.random();
      const speed = 0.05 + Math.random() * 0.08;
      const path: [Vector3, Vector3, Vector3, Vector3] = [
        new Vector3(-4.5, -1.5 + Math.random() * 2.5, depth),
        new Vector3(-1, 1.5 + Math.random() * 1.5, depth),
        new Vector3(1, -1.5 + Math.random() * 2, depth),
        new Vector3(4.5, 1 + Math.random() * 2.5, depth),
      ];
      return {
        id: index,
        speed,
        offset,
        scale,
        depth,
        path,
        asset: silhouettes[index % silhouettes.length],
      } satisfies Patrol;
    });

    return { patrols: created, material: baseMaterial };
  }, [count]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    patrols.forEach((patrol, index) => {
      const group = groupRefs.current[index];
      if (!group) return;
      const t = (elapsed * (MOTION_SPEEDS.patrol + patrol.speed) + patrol.offset) % 1;
      const point = cubicBezier(t, ...patrol.path);
      const nextPoint = cubicBezier((t + 0.01) % 1, ...patrol.path);
      group.position.copy(point);
      const direction = nextPoint.clone().sub(point).normalize();
      group.rotation.z = Math.atan2(direction.y, direction.x);
    });
  });

  if (count === 0) return null;

  return (
    <group>
      {patrols.map((patrol, index) => (
        <group
          key={patrol.id}
          ref={(node) => {
            if (node) groupRefs.current[index] = node;
          }}
          scale={[patrol.scale, patrol.scale, patrol.scale]}
        >
          <Svg src={patrol.asset} fillMaterial={material} strokeMaterial={material} />
        </group>
      ))}
    </group>
  );
}
