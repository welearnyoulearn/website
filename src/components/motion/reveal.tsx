"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const staticVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
}) {
  const Component = motion[as];
  const reduceMotion = useReducedMotion();
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px 100px 0px" }}
      variants={reduceMotion ? staticVariants : variants}
      transition={{ duration: 0.6, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px 100px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={reduceMotion ? staticVariants : variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
