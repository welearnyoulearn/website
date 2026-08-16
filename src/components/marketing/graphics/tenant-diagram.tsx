"use client";

import { motion, useReducedMotion } from "motion/react";
import { School, Shield } from "lucide-react";

const schools = [
  { label: "School A", x: 20 },
  { label: "School B", x: 50 },
  { label: "School C", x: 80 },
];

export function TenantDiagram() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="rounded-2xl border bg-card p-8">
      <div className="relative mx-auto max-w-md">
        <svg viewBox="0 0 300 160" className="w-full">
          {schools.map((s, i) => (
            <motion.line
              key={s.label}
              x1={s.x * 3}
              y1={30}
              x2={150}
              y2={120}
              stroke="var(--primary)"
              strokeWidth={1.5}
              strokeOpacity={0.3}
              initial={reduceMotion ? undefined : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </svg>
        <div className="absolute inset-x-0 top-0 flex justify-between px-2">
          {schools.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="flex size-9 items-center justify-center rounded-lg border bg-muted/50">
                <School className="size-4 text-muted-foreground" />
              </div>
              <span className="text-[10px] text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Shield className="size-5" />
          </div>
          <span className="text-[10px] font-medium text-foreground">
            Tenant guard
          </span>
        </motion.div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Every request checks school_id before touching data — isolation
        enforced in one place, not scattered across routes.
      </p>
    </div>
  );
}
