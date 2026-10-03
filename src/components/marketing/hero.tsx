"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroIllustration } from "@/components/marketing/graphics/hero-illustration";

const spring = { type: "spring" as const, stiffness: 170, damping: 20, mass: 0.8 };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: spring },
};

export function Hero({
  eyebrow,
  title,
  description,
  actions,
  variant = "default",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  variant?: "default" | "warm" | "cool";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-wlyl-hero",
        className
      )}
    >
      <HeroIllustration />
      <motion.div
        initial={reduceMotion ? undefined : "hidden"}
        animate="visible"
        variants={container}
        className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32"
      >
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.p
              variants={item}
              className="font-mono text-xs tracking-widest text-white/40 uppercase"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={item}
            className="mt-6 text-[clamp(2.5rem,6vw,4.75rem)] font-semibold tracking-tight text-white text-balance leading-[1.04]"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-xl text-lg text-white/70 text-balance leading-relaxed"
            >
              {description}
            </motion.p>
          )}
          {actions && (
            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {actions}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
