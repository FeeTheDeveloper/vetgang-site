import { useEffect, useMemo, useState } from "react";

export type MotionTier = 0 | 1 | 2;

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

function detectLowPowerDevice() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const { hardwareConcurrency, deviceMemory, userAgent } = navigator as Navigator & {
    deviceMemory?: number;
  };

  const isLowCore = hardwareConcurrency !== undefined && hardwareConcurrency <= 4;
  const isLowMemory = deviceMemory !== undefined && deviceMemory <= 4;
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);

  return Boolean(isLowCore || isLowMemory || isMobile);
}

export function useMotionTier() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [tier, setTier] = useState<MotionTier>(2);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTier(0);
      return;
    }

    const lowPower = detectLowPowerDevice();
    setTier(lowPower ? 1 : 2);
  }, [prefersReducedMotion]);

  return useMemo(() => ({ tier, prefersReducedMotion }), [tier, prefersReducedMotion]);
}
