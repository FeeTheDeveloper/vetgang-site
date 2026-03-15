"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/lib/motion";

const SESSION_KEY = "vetgang.introSeen";
const EXIT_DURATION_MS = 520;

type SplashState = "hidden" | "visible" | "exiting";

export default function IntroSplash() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState<SplashState>("hidden");
  const startPointer = useRef<{ x: number; y: number } | null>(null);
  const hasDismissed = useRef(false);

  const isActive = state === "visible" || state === "exiting";

  const dismiss = useMemo(
    () => () => {
      if (hasDismissed.current || state !== "visible") {
        return;
      }

      hasDismissed.current = true;
      setState("exiting");

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      }

      const finish = () => setState("hidden");

      if (prefersReducedMotion) {
        finish();
        return;
      }

      window.setTimeout(finish, EXIT_DURATION_MS);
    },
    [prefersReducedMotion, state],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const seen = window.sessionStorage.getItem(SESSION_KEY) === "1";
    if (!seen) {
      setState("visible");
    }
  }, []);

  useEffect(() => {
    if (!isActive) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isActive]);

  useEffect(() => {
    if (state !== "visible") {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      if (!startPointer.current) {
        startPointer.current = { x: event.clientX, y: event.clientY };
        return;
      }

      const deltaX = Math.abs(event.clientX - startPointer.current.x);
      const deltaY = Math.abs(event.clientY - startPointer.current.y);
      if (deltaX + deltaY >= 16) {
        dismiss();
      }
    };

    const handleTouchStart = () => dismiss();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchstart", handleTouchStart);
      startPointer.current = null;
    };
  }, [dismiss, state]);

  if (!isActive) {
    return null;
  }

  return (
    <div
      aria-hidden={state === "exiting"}
      className={[
        "fixed inset-0 z-[120] flex items-center justify-center overflow-hidden",
        "bg-ink-950/95 text-army-khaki",
        "transition-[opacity,filter,transform] duration-500 ease-out",
        state === "exiting" ? "scale-[1.015] opacity-0 blur-sm" : "scale-100 opacity-100 blur-0",
        prefersReducedMotion ? "duration-200" : "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(240,230,140,0.15),rgba(5,6,7,0.85)_45%,#050607_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(128,0,32,0.2),transparent_32%,transparent_68%,rgba(107,142,35,0.16))]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.95)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-10">
        <div
          className={[
            "relative w-full max-w-[760px]",
            !prefersReducedMotion ? "before:absolute before:inset-[-12%] before:-z-10 before:rounded-[999px] before:bg-[radial-gradient(circle,rgba(50,205,50,0.16),transparent_65%)] before:blur-3xl" : "",
            !prefersReducedMotion ? "animate-pulse [animation-duration:5.8s]" : "",
          ].join(" ")}
        >
          <Image
            src="/logo_main.png"
            alt="Vet Gang"
            width={1600}
            height={540}
            priority
            className="h-auto w-full drop-shadow-[0_18px_45px_rgba(0,0,0,0.9)]"
          />
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.32em] text-army-khaki/78 sm:text-sm">
          Verified. Veteran-Owned. Built for Execution.
        </p>

        <Button
          type="button"
          variant="secondary"
          onClick={dismiss}
          className="mt-10 min-w-44 border-army-khaki/75 bg-army-khaki/8 px-9 py-3 text-xs tracking-[0.28em] sm:text-sm"
        >
          Enter
        </Button>
      </div>
    </div>
  );
}
