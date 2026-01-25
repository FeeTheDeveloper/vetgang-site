"use client";

import dynamic from "next/dynamic";
import { useMotionTier } from "@/lib/motion";

const AirspaceCanvas = dynamic(() => import("@/components/background/AirspaceCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" aria-hidden="true" />,
});

export default function AirspaceBackground() {
  const { tier, prefersReducedMotion } = useMotionTier();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {tier > 0 && !prefersReducedMotion ? (
        <AirspaceCanvas tier={tier} />
      ) : (
        <div className="absolute inset-0 bg-ink-950" aria-hidden="true" />
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/75 via-ink-950/45 to-ink-950/98"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(2,6,23,0.85)_100%)]"
        aria-hidden="true"
      />
    </div>
  );
}
