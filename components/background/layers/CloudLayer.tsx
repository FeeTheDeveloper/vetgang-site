"use client";

import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { JSX, Ref } from "react";
import { Color, ShaderMaterial } from "three";
import { AIRSPACE_COLORS, MOTION_SPEEDS } from "@/lib/constants";

const CloudMaterial = shaderMaterial(
  {
    uTime: 0,
    uFlicker: 0,
    uColorA: new Color(AIRSPACE_COLORS.deep),
    uColorB: new Color(AIRSPACE_COLORS.mist),
  },
  /* glsl */ `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /* glsl */ `
    uniform float uTime;
    uniform float uFlicker;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.6;
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p *= 2.1;
        amplitude *= 0.5;
      }
      return value;
    }

    void main() {
      vec2 uv = vUv * vec2(2.2, 1.2);
      float drift = uTime * 0.035;
      float n = fbm(uv + vec2(drift, drift * 0.5));
      float haze = smoothstep(0.2, 0.85, n);
      vec3 color = mix(uColorA, uColorB, haze);
      float lightning = uFlicker * smoothstep(0.6, 0.9, n);
      color += lightning * vec3(0.4, 0.45, 0.7);
      gl_FragColor = vec4(color, 0.85);
    }
  `
);

extend({ CloudMaterial });

type CloudMaterialImpl = ShaderMaterial & {
  uTime: number;
  uFlicker: number;
};

declare module "@react-three/fiber" {
  interface ThreeElements {
    cloudMaterial: JSX.IntrinsicElements["shaderMaterial"] & {
      ref?: Ref<CloudMaterialImpl>;
    };
  }
}

export default function CloudLayer({ tier }: { tier: 1 | 2 }) {
  const { viewport } = useThree();
  const materialRef = useRef<CloudMaterialImpl>(null);
  const flickerState = useRef({ next: 0, value: 0 });

  useFrame((state, delta) => {
    if (!materialRef.current) return;
    materialRef.current.uTime += delta * MOTION_SPEEDS.clouds;
    const time = state.clock.getElapsedTime();
    if (time > flickerState.current.next) {
      flickerState.current.value = 0.35 + Math.random() * 0.4;
      flickerState.current.next = time + 4 + Math.random() * 6;
    }
    flickerState.current.value *= 0.92;
    materialRef.current.uFlicker = flickerState.current.value;
  });

  const planeScale = useMemo(() => [viewport.width * 1.2, viewport.height * 1.2, 1] as const, [
    viewport.width,
    viewport.height,
  ]);

  return (
    <mesh scale={planeScale} position={[0, 0, -1]}>
      <planeGeometry args={[1, 1, tier === 2 ? 32 : 16, tier === 2 ? 32 : 16]} />
      <cloudMaterial ref={materialRef} />
    </mesh>
  );
}
