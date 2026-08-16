"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const spring = { type: "spring" as const, stiffness: 170, damping: 20, mass: 0.8 };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const meshVariants = {
  default: [
    "absolute left-[6%] -top-1/4 size-[46vw] max-w-[560px] min-w-[340px] rounded-full bg-primary/45 blur-[110px] animate-float",
    "absolute right-[10%] top-[8%] size-[38vw] max-w-[460px] min-w-[300px] rounded-full bg-wlyl-parent/35 blur-[110px] animate-pulse-glow",
    "absolute bottom-[-30%] left-1/2 size-[50vw] max-w-[600px] min-w-[360px] rounded-full bg-brand-amber/22 blur-[120px] animate-float",
  ],
  warm: [
    "absolute right-[8%] -top-1/4 size-[42vw] max-w-[520px] min-w-[320px] rounded-full bg-brand-amber/40 blur-[110px] animate-float",
    "absolute -left-1/4 -top-1/3 size-[55vw] max-w-[680px] min-w-[400px] rounded-full bg-primary/40 blur-[110px] animate-pulse-glow",
    "absolute bottom-[-25%] left-1/2 size-[45vw] max-w-[560px] min-w-[320px] rounded-full bg-wlyl-parent/25 blur-[120px] animate-float",
  ],
  cool: [
    "absolute -left-1/4 -top-1/4 size-[60vw] max-w-[720px] min-w-[420px] rounded-full bg-wlyl-parent/40 blur-[110px] animate-float",
    "absolute -right-1/4 -top-1/3 size-[50vw] max-w-[620px] min-w-[360px] rounded-full bg-primary/40 blur-[110px] animate-pulse-glow",
    "absolute bottom-[-20%] left-1/2 size-[45vw] max-w-[560px] min-w-[320px] rounded-full bg-wlyl-teacher/20 blur-[120px] animate-float",
  ],
} as const;

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
  variant?: keyof typeof meshVariants;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const blobs = meshVariants[variant];

  return (
    <section
      className={cn(
        "relative grain overflow-hidden bg-wlyl-hero",
        className
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className={blobs[0]} />
        <div className={blobs[1]} style={{ animationDelay: "-2s" }} />
        <div className={blobs[2]} style={{ animationDelay: "-4s" }} />
        <div className="absolute inset-0 bg-wlyl-hero/40" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <motion.div
        initial={reduceMotion ? undefined : "hidden"}
        animate="visible"
        variants={container}
        className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32"
      >
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.span
              variants={item}
              className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85 shadow-lg shadow-black/10"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              {eyebrow}
            </motion.span>
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
