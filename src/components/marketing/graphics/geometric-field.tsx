"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const shapeVariants = {
  default: {
    ring1: "border-primary/45",
    ring2: "border-brand-amber/40",
    ring3: "border-wlyl-parent/35",
    ring4: "border-wlyl-teacher/25",
    fill1: "bg-primary/[0.08]",
    fill2: "bg-brand-amber/[0.06]",
  },
  warm: {
    ring1: "border-brand-amber/50",
    ring2: "border-primary/40",
    ring3: "border-wlyl-parent/30",
    ring4: "border-wlyl-student/25",
    fill1: "bg-brand-amber/[0.07]",
    fill2: "bg-primary/[0.06]",
  },
  cool: {
    ring1: "border-wlyl-parent/45",
    ring2: "border-primary/45",
    ring3: "border-wlyl-teacher/30",
    ring4: "border-brand-amber/20",
    fill1: "bg-wlyl-parent/[0.07]",
    fill2: "bg-wlyl-teacher/[0.06]",
  },
} as const;

type Shape = {
  className: string;
  radius: number; // orbit travel distance in px
  duration: number; // seconds per full drift cycle
  delay?: number;
  rotate?: [number, number, number]; // start, mid, end degrees, loops back to start
};

const shapes: Shape[] = [
  { className: "absolute -right-24 -top-24 size-[420px] rounded-full border", radius: 30, duration: 24 },
  { className: "absolute -right-8 top-8 size-[260px] rounded-full border", radius: -20, duration: 19, delay: 0.5 },
  {
    className: "absolute -left-20 bottom-[-140px] size-[320px] rounded-[56px] border",
    radius: 18,
    duration: 27,
    delay: 0.15,
    rotate: [12, 22, 4],
  },
  { className: "absolute left-[8%] top-[38%] size-24 rounded-full", radius: 22, duration: 15, delay: 0.2 },
  { className: "absolute right-[18%] bottom-[12%] size-16 rounded-full border", radius: -16, duration: 17, delay: 0.4 },
];

export function GeometricField({
  variant = "default",
  className,
}: {
  variant?: keyof typeof shapeVariants;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const c = shapeVariants[variant];
  const ringColors = [c.ring1, c.ring2, c.ring3, c.fill1, c.ring4];

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {shapes.map((shape, i) => {
        const [r0, r1, r2] = shape.rotate ?? [0, 6, -6];
        return (
          <motion.div
            key={i}
            className={cn(shape.className, ringColors[i])}
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
            animate={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    scale: 1,
                    x: [0, shape.radius, -shape.radius * 0.6, 0],
                    y: [0, -shape.radius * 0.7, shape.radius * 0.5, 0],
                    rotate: [r0, r1, r2, r0],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 1 }
                : {
                    opacity: { duration: 1, delay: shape.delay ?? 0, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 1, delay: shape.delay ?? 0, ease: [0.16, 1, 0.3, 1] },
                    x: { duration: shape.duration, delay: shape.delay ?? 0, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: shape.duration, delay: shape.delay ?? 0, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: shape.duration, delay: shape.delay ?? 0, repeat: Infinity, ease: "easeInOut" },
                  }
            }
          />
        );
      })}

      {/* Tiny breathing accent dot */}
      <motion.div
        className={cn("absolute left-[22%] top-[14%] size-3 rounded-full", c.fill2)}
        initial={reduceMotion ? undefined : { opacity: 0.6 }}
        animate={reduceMotion ? { opacity: 0.6 } : { opacity: [0.4, 0.9, 0.4], scale: [1, 1.4, 1] }}
        transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* Thin diagonal line accents that gently pulse */}
      <svg className="absolute inset-0 size-full" preserveAspectRatio="none">
        <motion.line
          x1="0%"
          y1="15%"
          x2="35%"
          y2="0%"
          className={cn("stroke-current", c.ring1)}
          strokeWidth={1}
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
          animate={
            reduceMotion ? { opacity: 0.5 } : { pathLength: 1, opacity: [0.3, 0.55, 0.3] }
          }
          transition={
            reduceMotion
              ? { duration: 1 }
              : {
                  pathLength: { duration: 1, delay: 0.3, ease: "easeOut" },
                  opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                }
          }
        />
        <motion.line
          x1="100%"
          y1="85%"
          x2="70%"
          y2="100%"
          className={cn("stroke-current", c.ring3)}
          strokeWidth={1}
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
          animate={
            reduceMotion ? { opacity: 0.5 } : { pathLength: 1, opacity: [0.3, 0.55, 0.3] }
          }
          transition={
            reduceMotion
              ? { duration: 1 }
              : {
                  pathLength: { duration: 1, delay: 0.35, ease: "easeOut" },
                  opacity: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.35 },
                }
          }
        />
      </svg>
    </div>
  );
}
