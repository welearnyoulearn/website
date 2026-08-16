"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const shapeVariants = {
  default: {
    ring1: "border-primary/40",
    ring2: "border-brand-amber/35",
    ring3: "border-wlyl-parent/30",
    fill: "bg-primary/[0.07]",
  },
  warm: {
    ring1: "border-brand-amber/45",
    ring2: "border-primary/35",
    ring3: "border-wlyl-parent/25",
    fill: "bg-brand-amber/[0.06]",
  },
  cool: {
    ring1: "border-wlyl-parent/40",
    ring2: "border-primary/40",
    ring3: "border-wlyl-teacher/25",
    fill: "bg-wlyl-parent/[0.06]",
  },
} as const;

export function GeometricField({
  variant = "default",
  className,
}: {
  variant?: keyof typeof shapeVariants;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const c = shapeVariants[variant];

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* Large outlined ring, upper right */}
      <motion.div
        className={cn("absolute -right-24 -top-24 size-[420px] rounded-full border", c.ring1)}
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Concentric ring inside it */}
      <motion.div
        className={cn("absolute -right-8 top-8 size-[260px] rounded-full border", c.ring2)}
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Rotated square outline, lower left */}
      <motion.div
        className={cn("absolute -left-20 bottom-[-140px] size-[320px] rounded-[56px] border", c.ring3)}
        initial={reduceMotion ? undefined : { opacity: 0, rotate: 20, scale: 0.9 }}
        animate={{ opacity: 1, rotate: 12, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Small filled dot cluster, left-center */}
      <motion.div
        className={cn("absolute left-[8%] top-[38%] size-24 rounded-full", c.fill)}
        initial={reduceMotion ? undefined : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      />
      {/* Thin diagonal line accent */}
      <svg className="absolute inset-0 size-full" preserveAspectRatio="none">
        <motion.line
          x1="0%"
          y1="15%"
          x2="35%"
          y2="0%"
          className={cn("stroke-current", c.ring1)}
          strokeWidth={1}
          strokeOpacity={0.5}
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
        <motion.line
          x1="100%"
          y1="85%"
          x2="70%"
          y2="100%"
          className={cn("stroke-current", c.ring3)}
          strokeWidth={1}
          strokeOpacity={0.5}
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
