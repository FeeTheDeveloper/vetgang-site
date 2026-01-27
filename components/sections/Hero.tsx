"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const trustItems = [
  "Verified Members",
  "National Network",
  "Partnerships",
  "Execution Culture",
];

export default function Hero() {
  const launchMode = process.env.NEXT_PUBLIC_LAUNCH_MODE ?? "live";
  const isPreLaunch = launchMode === "pre";

  return (
    <section aria-label="VET GANG hero" className="flex flex-1 items-center py-section lg:py-section-lg">
      <Container>
        <div className="max-w-4xl">
          {isPreLaunch ? (
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.35em] text-white"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Now Accepting Applications
            </motion.p>
          ) : null}
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={isPreLaunch ? 0.1 : 0}
          >
            Veteran-Owned Exclusive Network
          </motion.p>
          <motion.h1
            className="mt-5 text-display-xl font-semibold tracking-tight text-white sm:text-display-2xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={isPreLaunch ? 0.2 : 0.1}
          >
            VET GANG
          </motion.h1>
          <motion.p
            className="mt-4 text-headline-lg font-medium text-white/90"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={isPreLaunch ? 0.3 : 0.2}
          >
            Force Multiplier
          </motion.p>
          <motion.p
            className="mt-6 max-w-2xl text-body-md text-slate-200"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={isPreLaunch ? 0.4 : 0.3}
          >
            A unified, verified ecosystem of veteran founders, operators, and partners built for decisive execution and
            trusted collaboration.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={isPreLaunch ? 0.5 : 0.4}
          >
            <Button as={Link} href="/join" aria-label="Join VET GANG">
              Join
            </Button>
            {isPreLaunch ? null : (
              <Button as={Link} href="/partners" variant="secondary" aria-label="Partner with VET GANG">
                Partner
              </Button>
            )}
          </motion.div>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={isPreLaunch ? 0.6 : 0.5}
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/80"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" aria-hidden="true">
                  <path
                    d="M12 3l7 4v5c0 4.1-2.9 7.8-7 9-4.1-1.2-7-4.9-7-9V7l7-4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M9.5 12.5l2 2 3.5-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
