"use client";

import { motion } from "motion/react";

const tiers = [
  { label: "Basic", height: 64, color: "bg-muted-foreground/30" },
  { label: "Standard", height: 104, color: "bg-primary" },
  { label: "Premium", height: 144, color: "bg-brand-amber" },
];

export function TierSteps() {
  return (
    <div className="flex items-end justify-center gap-6 sm:gap-10">
      {tiers.map((t, i) => (
        <div key={t.label} className="flex flex-col items-center gap-3">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: t.height, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`w-14 rounded-t-lg sm:w-20 ${t.color}`}
          />
          <p className="text-xs font-medium text-muted-foreground sm:text-sm">
            {t.label}
          </p>
        </div>
      ))}
    </div>
  );
}
