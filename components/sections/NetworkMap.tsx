"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { id: "pacific", left: "14%", top: "46%", delay: 0 },
  { id: "northwest", left: "22%", top: "28%", delay: 0.4 },
  { id: "southwest", left: "24%", top: "66%", delay: 0.8 },
  { id: "mountain", left: "36%", top: "50%", delay: 0.2 },
  { id: "central", left: "46%", top: "56%", delay: 1.1 },
  { id: "plains", left: "48%", top: "36%", delay: 0.6 },
  { id: "great-lakes", left: "60%", top: "38%", delay: 0.9 },
  { id: "mid-atlantic", left: "70%", top: "46%", delay: 0.3 },
  { id: "southeast", left: "68%", top: "66%", delay: 1.2 },
  { id: "atlantic", left: "78%", top: "52%", delay: 0.5 },
  { id: "gulf", left: "58%", top: "72%", delay: 0.7 },
  { id: "northeast", left: "76%", top: "32%", delay: 1.4 },
];

export default function NetworkMap() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),_transparent_60%)]" />
      <div className="relative">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
          <span>National Footprint</span>
          <span className="text-white/60">Verified nodes only</span>
        </div>
        <div className="relative mt-6 aspect-[5/3] w-full">
          <svg
            viewBox="0 0 800 480"
            className="h-full w-full"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="network-map" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#1f2937" />
                <stop offset="55%" stopColor="#111827" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="network-stroke" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M62 160l90-48 86 10 46-24 94 18 80-22 98 28 56 30 36 54-20 72-72 52-88 22-64-8-58 26-78-22-68 18-76-34-56-66-10-56z"
              fill="url(#network-map)"
              stroke="url(#network-stroke)"
              strokeWidth="2"
            />
            <path
              d="M116 214c120-54 256-62 386-32 88 20 158 64 214 108"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeOpacity="0.2"
              strokeDasharray="6 8"
            />
            <path
              d="M180 320c100-46 248-42 360 8 56 26 102 62 132 98"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeOpacity="0.16"
              strokeDasharray="6 10"
            />
          </svg>
          <div className="absolute inset-0">
            {nodes.map((node) => {
              const animation = reduceMotion
                ? {}
                : {
                    scale: [1, 1.35, 1],
                    opacity: [0.7, 1, 0.7],
                  };
              return (
                <motion.span
                  key={node.id}
                  className="absolute flex h-3 w-3 items-center justify-center"
                  style={{ left: node.left, top: node.top }}
                  animate={animation}
                  transition={{
                    duration: 4.5,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                    delay: node.delay,
                  }}
                >
                  <span className="absolute h-6 w-6 rounded-full bg-white/10 blur-sm" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </motion.span>
              );
            })}
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-200">
          Signals represent verified presence across multiple regions, visualized without exposing member locations.
        </p>
      </div>
    </div>
  );
}
