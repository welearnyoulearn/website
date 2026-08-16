"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const spring = { type: "spring" as const, stiffness: 300, damping: 22, mass: 0.6 };

export function HoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      whileHover={
        reduceMotion ? undefined : { y: -8, scale: 1.015 }
      }
      transition={spring}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
