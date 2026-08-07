"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
