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
  formationOffset: Vector3;
  phaseOffset: number;
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
    /**
     * Patrol routes:
     * - Low sweeping arc for foreground helicopters (left-to-right entry/exit).
     * - Mid-altitude S-curve for cargo planes (steady patrol loop).
     * - High ridge line for drones (highest altitude, long exit).
     * Formations: roughly one-third of patrols fly as paired escorts with
     * slight phase + lateral offsets for subtle formation behavior.
     */
    const routes = [
      {
        asset: silhouettes[1],
        depthRange: [-0.4, -0.9],
        scaleRange: [0.45, 0.6],
        points: [
          new Vector3(-5.4, -0.9, 0),
          new Vector3(-2.2, 0.6, 0),
          new Vector3(1.2, -0.2, 0),
          new Vector3(5.6, 0.4, 0),
        ] as [Vector3, Vector3, Vector3, Vector3],
      },
      {
        asset: silhouettes[0],
        depthRange: [-1.5, -2.3],
        scaleRange: [0.32, 0.48],
        points: [
          new Vector3(-5.6, -0.4, 0),
          new Vector3(-1.4, 1.4, 0),
          new Vector3(1.6, -1.2, 0),
          new Vector3(5.8, 0.9, 0),
        ] as [Vector3, Vector3, Vector3, Vector3],
      },
      {
        asset: silhouettes[2],
        depthRange: [-2.6, -3.4],
        scaleRange: [0.24, 0.34],
        points: [
          new Vector3(-5.8, 1.2, 0),
          new Vector3(-2.4, 2.2, 0),
          new Vector3(1.8, 1.6, 0),
          new Vector3(5.9, 2.3, 0),
        ] as [Vector3, Vector3, Vector3, Vector3],
      },
    ];

    const baseMaterial = new MeshBasicMaterial({
      color: new Color("#9aa4b2"),
      transparent: true,
      opacity: 0.5,
    });

    const created: Patrol[] = [];
    let routeIndex = 0;

    while (created.length < count) {
      const route = routes[routeIndex % routes.length];
      const depth =
        route.depthRange[0] + Math.random() * (route.depthRange[1] - route.depthRange[0]);
      const scale =
        route.scaleRange[0] + Math.random() * (route.scaleRange[1] - route.scaleRange[0]);
      const offset = Math.random();
      const speed = 0.02 + Math.random() * 0.035;
      const path = route.points.map((point) => new Vector3(point.x, point.y, depth)) as [
        Vector3,
        Vector3,
        Vector3,
        Vector3,
      ];
      const basePatrol = {
        id: created.length,
        speed,
        offset,
        scale,
        depth,
        path,
        asset: route.asset,
        formationOffset: new Vector3(0, 0, 0),
        phaseOffset: 0,
      } satisfies Patrol;
      created.push(basePatrol);

      const shouldPair = Math.random() < 0.35 && created.length < count;
      if (shouldPair) {
        created.push({
          ...basePatrol,
          id: created.length,
          scale: basePatrol.scale * 0.98,
          speed: basePatrol.speed * 0.97,
          offset: (basePatrol.offset + 0.08 + Math.random() * 0.06) % 1,
          formationOffset: new Vector3(
            0.18 + Math.random() * 0.08,
            (Math.random() - 0.5) * 0.18,
            0.08
          ),
          phaseOffset: 0.05 + Math.random() * 0.04,
        });
      }
      routeIndex += 1;
    }

    return { patrols: created, material: baseMaterial };
  }, [count]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    patrols.forEach((patrol, index) => {
      const group = groupRefs.current[index];
      if (!group) return;
      const t =
        (elapsed * (MOTION_SPEEDS.patrol * 0.7 + patrol.speed) + patrol.offset + patrol.phaseOffset) %
        1;
      const point = cubicBezier(t, ...patrol.path);
      const nextPoint = cubicBezier((t + 0.01) % 1, ...patrol.path);
      group.position.copy(point).add(patrol.formationOffset);
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
