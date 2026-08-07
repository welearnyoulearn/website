"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export function Hero({
  eyebrow,
  title,
  description,
  actions,
  glowClassName,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  glowClassName?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-wlyl-hero",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 animate-gradient bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/.55),transparent_55%),radial-gradient(circle_at_80%_10%,theme(colors.brand-amber/.28),transparent_45%)]",
          glowClassName
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32"
      >
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
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
            className="mt-6 text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-white text-balance leading-[1.05]"
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
