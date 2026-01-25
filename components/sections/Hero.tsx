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

export default function Hero() {
  return (
    <section aria-label="VET GANG hero" className="flex flex-1 items-center py-24">
      <Container>
        <div className="max-w-3xl">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300/80"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Force Multiplier
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            VET GANG
          </motion.h1>
          <motion.p
            className="mt-4 text-base text-slate-200 sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Veteran-Owned Exclusive Network
          </motion.p>
          <motion.p
            className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            Secure the edge with an always-on network of veteran operators, strategic partners, and mission-ready
            collaborators.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <Button as={Link} href="/join" aria-label="Join VET GANG">
              Join
            </Button>
            <Button as={Link} href="/partners" variant="ghost" aria-label="Partner with VET GANG">
              Partner
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
