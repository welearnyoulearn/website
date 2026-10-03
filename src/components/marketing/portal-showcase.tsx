"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const portals = [
  {
    id: "admin",
    label: "School Admin",
    stat: "1 dashboard",
    headline: "Your school's operations, all in one place.",
    description:
      "Everything that used to live in registers, Excel sheets, and separate software — attendance, fees, expenses, staff, exams, and announcements — unified in one screen.",
    items: [
      { title: "School-wide overview dashboard", detail: "See attendance, fees, and tasks at a glance — every morning, not end of month." },
      { title: "Fee collection, ledger & waivers", detail: "Grade-based structures, cash/cheque/UPI, full history. Outstanding dues visible in seconds." },
      { title: "Expense management & audit trail", detail: "Log, categorize, attach bills. Full trail of who logged what and when." },
      { title: "Exam schedule & marks release", detail: "Schedule exams, release marks — parents notified the moment results are out." },
      { title: "Anonymous feedback — QR codes, voice upload", detail: "Safe, structured feedback from students and parents. Categorized, tracked, resolved." },
      { title: "Targeted announcements with read receipts", detail: "Send to a class, a grade, or the whole school. Know who read it." },
    ],
  },
  {
    id: "teacher",
    label: "Teachers",
    stat: "One tab, full day",
    headline: "Less admin, more teaching.",
    description:
      "A daily snapshot that tells teachers exactly what's on — attendance to mark, syllabus coverage, marks to enter, and the school calendar — without opening five tabs.",
    items: [
      { title: "One-tap attendance marking per class", detail: "Mark a class in under 30 seconds. Admin sees the update in real time." },
      { title: "Syllabus coverage tracking by topic", detail: "Mark topics covered as you go. Students and parents see progress automatically." },
      { title: "Marks entry & exam schedule view", detail: "Enter marks directly from the exam schedule — no separate spreadsheet." },
      { title: "Digital library access by grade & subject", detail: "School-managed resources, always current, accessible from anywhere." },
      { title: "Academic calendar — holidays, events", detail: "One calendar. No version mismatch between teachers, admin, or parents." },
      { title: "School announcements", detail: "Receive targeted school-wide or grade-specific notices instantly." },
    ],
  },
  {
    id: "student",
    label: "Students",
    stat: "Zero paper needed",
    headline: "Everything you need, current.",
    description:
      "Students see their syllabus progress, exam marks, attendance record, library resources, and the school calendar — everything current, no printing required.",
    items: [
      { title: "Syllabus progress by subject & chapter", detail: "See exactly where you are in every subject — chapter by chapter." },
      { title: "Exam results & subject-wise marks", detail: "Results visible the moment the teacher releases them." },
      { title: "Attendance record by date", detail: "Full history, always accurate. No calling the office." },
      { title: "Digital library — browse by grade & subject", detail: "Study materials exactly when you need them, on any device." },
      { title: "Academic calendar — holidays, events, exams", detail: "Holidays, exams, events — all in one place." },
      { title: "School announcements", detail: "Never miss a notice. All school communication, in one feed." },
    ],
  },
  {
    id: "parent",
    label: "Parents",
    stat: "0 phone calls needed",
    headline: "Full visibility. Zero phone calls.",
    description:
      "Parents see exactly what's happening with their child — attendance, marks, fee balance, syllabus, and school announcements — without calling the office or waiting for a report card.",
    items: [
      { title: "Child's daily attendance, updated same day", detail: "Know if your child was present — by end of day, not end of term." },
      { title: "Exam marks & results the moment they're released", detail: "No waiting for a physical report card. Results land on your phone." },
      { title: "Fee ledger, payment history & waivers", detail: "See exactly what's owed, what's paid, and any active waivers." },
      { title: "Syllabus coverage — what's been taught so far", detail: "Follow your child's learning week by week, not just at parent-teacher meetings." },
      { title: "Academic calendar", detail: "Holidays, exams, and events — always the current version." },
      { title: "School announcements", detail: "Targeted notices from the school, delivered directly." },
    ],
  },
];

export function PortalShowcase() {
  const [active, setActive] = useState("admin");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const current = portals.find((p) => p.id === active)!;

  return (
    <div>
      {/* Tab strip */}
      <div className="flex gap-0 border-b overflow-x-auto">
        {portals.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={cn(
              "relative shrink-0 px-5 py-3 text-sm transition-colors whitespace-nowrap",
              active === p.id
                ? "font-semibold text-foreground"
                : "font-normal text-muted-foreground hover:text-foreground"
            )}
          >
            {p.label}
            {active === p.id && (
              <motion.span
                layoutId="portal-underline"
                className="absolute inset-x-0 -bottom-px h-[2px] bg-primary"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content — stacked, not grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="pt-10"
        >
          {/* Header — full width */}
          <div className="flex items-start justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-balance">
                {current.headline}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {current.description}
              </p>
            </div>
            <div className="hidden sm:block shrink-0 text-right">
              <span className="font-mono text-xs tracking-wider uppercase text-muted-foreground/50">
                Result
              </span>
              <p className="mt-1 text-lg font-semibold text-primary">{current.stat}</p>
            </div>
          </div>

          {/* Feature items — full width, interactive */}
          <ul className="border-t">
            {current.items.map((item) => (
              <li
                key={item.title}
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "group border-b transition-colors duration-150",
                  hoveredItem === item.title ? "bg-muted/50" : ""
                )}
              >
                <div className="flex items-center justify-between gap-6 py-4 px-1 cursor-default">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={cn(
                      "shrink-0 size-1.5 rounded-full transition-colors duration-150",
                      hoveredItem === item.title ? "bg-primary" : "bg-muted-foreground/30"
                    )} />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <AnimatePresence>
                    {hoveredItem === item.title && (
                      <motion.p
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.15 }}
                        className="hidden sm:block shrink-0 max-w-xs text-xs text-muted-foreground text-right leading-relaxed"
                      >
                        {item.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
