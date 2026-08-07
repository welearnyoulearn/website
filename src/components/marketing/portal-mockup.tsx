"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

function Chrome({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-xl shadow-black/5">
      <div className="flex items-center gap-1.5 border-b bg-muted/50 px-4 py-3">
        <span className="size-2.5 rounded-full bg-foreground/10" />
        <span className="size-2.5 rounded-full bg-foreground/10" />
        <span className="size-2.5 rounded-full bg-foreground/10" />
        <div className={cn("ml-3 h-1.5 w-24 rounded-full", accent)} />
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Bar({ w, accent, delay = 0 }: { w: string; accent: string; delay?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "left" }}
      className={cn("h-2 rounded-full origin-left", accent)}
    />
  );
}

export function AdminMockup({ accent, accentBg }: { accent: string; accentBg: string }) {
  return (
    <Chrome accent={accent}>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Fee collected", value: "82%" },
          { label: "Attendance", value: "94%" },
          { label: "Uncovered", value: "2" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border bg-muted/40 p-3">
            <p className="text-lg font-semibold">{s.value}</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2.5 rounded-lg border p-3">
        {["Class 6-A", "Class 7-B", "Class 8-C"].map((c, i) => (
          <div key={c} className="flex items-center gap-3">
            <span className="w-14 shrink-0 text-[11px] text-muted-foreground">{c}</span>
            <div className="h-2 flex-1 rounded-full bg-muted">
              <Bar w="" accent={accentBg} delay={i * 0.1} />
            </div>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

export function TeacherMockup({ accent, accentBg }: { accent: string; accentBg: string }) {
  return (
    <Chrome accent={accent}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold">Today&apos;s schedule</p>
        <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium", accentBg, "text-white")}>
          3 classes
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {["9:00 — Class 8, Maths", "11:00 — Class 9, Science", "1:30 — Class 7, Maths"].map((t) => (
          <div key={t} className="flex items-center gap-2.5 rounded-lg border bg-muted/40 px-3 py-2">
            <span className={cn("size-1.5 shrink-0 rounded-full", accent)} />
            <span className="text-[11px] text-foreground/80">{t}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border p-3">
        <p className="text-[11px] font-semibold">Open doubts</p>
        <div className="mt-2 flex -space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "size-6 rounded-full border-2 border-card",
                i % 2 === 0 ? accentBg : "bg-muted"
              )}
            />
          ))}
          <div className="flex size-6 items-center justify-center rounded-full border-2 border-card bg-muted text-[9px] text-muted-foreground">
            +5
          </div>
        </div>
      </div>
    </Chrome>
  );
}

export function StudentMockup({ accent, accentBg }: { accent: string; accentBg: string }) {
  return (
    <Chrome accent={accent}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold">Syllabus progress</p>
        <span className="text-[11px] font-semibold text-foreground/70">68%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-muted">
        <Bar w="" accent={accentBg} />
      </div>
      <div className="mt-4 space-y-2">
        {[
          { t: "Algebra — chapter 4", done: true },
          { t: "Photosynthesis quiz", done: true },
          { t: "History assignment", done: false },
        ].map((task) => (
          <div key={task.t} className="flex items-center gap-2.5 rounded-lg border bg-muted/40 px-3 py-2">
            <span
              className={cn(
                "flex size-4 shrink-0 items-center justify-center rounded-full text-[9px] text-white",
                task.done ? accentBg : "bg-muted-foreground/30"
              )}
            >
              {task.done ? "✓" : ""}
            </span>
            <span className="text-[11px] text-foreground/80">{task.t}</span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

export function ParentMockup({ accent, accentBg }: { accent: string; accentBg: string }) {
  return (
    <Chrome accent={accent}>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border bg-muted/40 p-3">
          <p className="text-[10px] text-muted-foreground">Attendance</p>
          <p className="mt-1 text-lg font-semibold">96%</p>
        </div>
        <div className="rounded-lg border bg-muted/40 p-3">
          <p className="text-[10px] text-muted-foreground">Fee due</p>
          <p className="mt-1 text-lg font-semibold">₹0</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border p-3">
        <p className="text-[11px] font-semibold">Recent marks</p>
        <div className="mt-2.5 flex items-end gap-2">
          {[60, 85, 72, 90, 78].map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: `${h * 0.4}px`, transformOrigin: "bottom" }}
              className={cn("w-5 rounded-t-sm", accentBg)}
            />
          ))}
        </div>
      </div>
    </Chrome>
  );
}

export const portalMockups: Record<string, typeof AdminMockup> = {
  admin: AdminMockup,
  teacher: TeacherMockup,
  student: StudentMockup,
  parent: ParentMockup,
};
