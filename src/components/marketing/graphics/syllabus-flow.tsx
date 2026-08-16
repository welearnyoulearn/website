"use client";

import { motion, useReducedMotion } from "motion/react";
import { Library, School, Users, Eye } from "lucide-react";

const stages = [
  { icon: Library, label: "Platform library" },
  { icon: School, label: "School subscribes" },
  { icon: Users, label: "Teachers & students" },
  { icon: Eye, label: "Parents see coverage" },
];

export function SyllabusFlow() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4">
      {stages.map((s, i) => (
        <div key={s.label} className="flex flex-1 items-center">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-1 flex-col items-center gap-2 text-center"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-14">
              <s.icon className="size-5 sm:size-6" />
            </div>
            <p className="text-[11px] font-medium text-muted-foreground sm:text-xs">
              {s.label}
            </p>
          </motion.div>
          {i < stages.length - 1 && (
            <motion.div
              initial={reduceMotion ? undefined : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="mx-1 h-px flex-1 bg-gradient-to-r from-primary/40 to-primary/10 sm:mx-2"
            />
          )}
        </div>
      ))}
    </div>
  );
}
