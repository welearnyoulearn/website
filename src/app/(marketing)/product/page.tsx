import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/marketing/section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Hero } from "@/components/marketing/hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import {
  AdminMockup,
  TeacherMockup,
  StudentMockup,
  ParentMockup,
} from "@/components/marketing/portal-mockup";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BookOpenCheck,
  Users,
  CalendarClock,
  ClipboardCheck,
  Wallet,
  Fingerprint,
  LineChart,
  Megaphone,
  Tv,
  GraduationCap,
  MessageCircleQuestion,
  Trophy,
  FileText,
  HeartHandshake,
  BellRing,
  CheckCircle2,
} from "lucide-react";

const liveToday = [
  { icon: Users, label: "All 5 portals" },
  { icon: Fingerprint, label: "Teacher attendance, with hardware" },
  { icon: Wallet, label: "Fee management" },
  { icon: BookOpenCheck, label: "Syllabus organizing & tracking" },
  { icon: HeartHandshake, label: "Support that shows up" },
];

export const metadata: Metadata = {
  title: "Product — one platform for your whole school",
  description:
    "A deep dive on the School Admin, Teacher, Student and Parent portals — and everything they automate out of a school's daily operations.",
};

const syllabusSteps = [
  {
    step: "01",
    title: "Built once, at the platform level",
    description:
      "Subjects, chapters, topics and homework/quiz tasks are maintained centrally as a master curriculum library — for CBSE, APSSC/SSC (Andhra Pradesh State Board), or both.",
  },
  {
    step: "02",
    title: "A school subscribes, not retypes",
    description:
      "Your admin browses the library and subscribes to the subjects that apply to each grade. The full structure is copied into your school's own records for the academic year — yours to customize, with room to add chapters.",
  },
  {
    step: "03",
    title: "It flows everywhere automatically",
    description:
      "Assigning a teacher to a subject is what makes it appear correctly in their portal — no more \"Maths\" vs \"Mathematics\" mismatches. The same subscribed list populates onboarding, so a teacher's subject never drifts out of sync.",
  },
  {
    step: "04",
    title: "Coverage updates everyone at once",
    description:
      "When a teacher marks a topic covered, that single action updates the school's coverage analytics, the student's syllabus view, and what a parent sees — parents only ever see what's actually been taught.",
  },
];

const portals = [
  {
    icon: Users,
    accent: "text-primary",
    accentBg: "bg-primary",
    tint: "bg-primary/[0.03]",
    Mockup: AdminMockup,
    name: "School Admin",
    description:
      "Run the whole school from one dashboard — people, schedules, fees, and analytics.",
    features: [
      "Staff & student directories with bulk CSV/Excel import",
      "Auto-generated timetables with conflict detection",
      "Leave requests & one-click substitute assignment",
      "Fee management: structures, ledger, payments, waivers",
      "Class & year-in-review analytics",
      "Academic calendar, PDF export, command-bar navigation",
    ],
  },
  {
    icon: GraduationCap,
    accent: "text-wlyl-teacher",
    accentBg: "bg-wlyl-teacher",
    tint: "bg-wlyl-teacher/[0.04]",
    Mockup: TeacherMockup,
    name: "Teacher",
    description:
      "Everything for a class day, plus grading and syllabus tracking, in one snapshot.",
    features: [
      "Daily snapshot: schedule, pending submissions, open doubts",
      "Attendance marking that works offline and auto-saves",
      "Create, publish and grade tasks with feedback",
      "Doubt Center with an AI-assisted first-pass answer",
      "Mark syllabus topics covered as you teach",
      "Leave requests and profile management",
    ],
  },
  {
    icon: BookOpenCheck,
    accent: "text-wlyl-student",
    accentBg: "bg-wlyl-student",
    tint: "bg-wlyl-student/[0.04]",
    Mockup: StudentMockup,
    name: "Student",
    description:
      "A single place to see what's due, what's been taught, and how they're doing.",
    features: [
      "Dashboard with tasks, recent marks and open doubts",
      "Submit tasks as text or file uploads",
      "See what's been taught vs. what's coming, per subject",
      "Ask doubts and browse anonymized peer FAQs",
      "Daily AI-curated article and quiz",
      "Points, streaks and badges for engagement",
    ],
  },
  {
    icon: HeartHandshake,
    accent: "text-wlyl-parent",
    accentBg: "bg-wlyl-parent",
    tint: "bg-wlyl-parent/[0.04]",
    Mockup: ParentMockup,
    name: "Parent",
    description:
      "A clear, read-only view of how your child is doing — no app-hopping required.",
    features: [
      "Attendance percentage and month-view calendar",
      "Recent marks and pending tasks",
      "Fee ledger: outstanding balance, history, waivers",
      "Recent learning activity — tasks, doubts, reading, rewards",
      "Read-only class timetable",
    ],
  },
];

const moreFeatures = [
  {
    icon: CalendarClock,
    title: "Timetable management",
    description: "Auto-generate schedules, detect conflicts, swap periods.",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance",
    description: "Per-class, per-session, works offline and syncs automatically.",
  },
  {
    icon: Wallet,
    title: "Fee management",
    description: "Grade-based structures, full ledger, cash/cheque/DD/UPI.",
  },
  {
    icon: LineChart,
    title: "Academic analytics",
    description: "Marks, attendance %, task completion, pass rate.",
  },
  {
    icon: Megaphone,
    title: "Announcements",
    description: "Targeted by audience, with a dedicated TV-display mode.",
  },
  {
    icon: Trophy,
    title: "Rewards & leaderboard",
    description: "Points-based ranking with badges and streaks.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Doubt Center",
    description: "Live chat, resolved doubts promotable to a class FAQ.",
  },
  {
    icon: FileText,
    title: "Exams & marks",
    description: "Track marks-entry status, publish with parent notification.",
  },
  {
    icon: Tv,
    title: "TV display & kiosk",
    description: "No-login fullscreen display for lobbies.",
  },
  {
    icon: BellRing,
    title: "Notification center",
    description: "Full send history for every announcement sent.",
  },
];

export default function ProductPage() {
  return (
    <>
      <Hero
        eyebrow="Built for CBSE and State Board schools"
        title="One platform that runs your whole school."
        description="School Admin, Teacher, Student and Parent all work off the same data — cutting manual work out of attendance, fees, scheduling, communication and more."
        className="pb-16 sm:pb-20"
      />

      {/* Live today — inline strip, not cards */}
      <section className="border-b bg-muted/30 py-6">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {liveToday.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              >
                <f.icon className="size-4 text-primary" />
                {f.label}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Portals — mockup panels, alternating sides, real color identity */}
      <section id="portals" className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-xl">
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="h-px w-4 bg-primary/50" />
              The portals
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              Purpose-built for who&apos;s using it
            </h2>
          </Reveal>

          <div className="mt-16 space-y-4">
            {portals.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className={cn("rounded-3xl border p-8 sm:p-12", p.tint)}>
                  <div
                    className={cn(
                      "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                      i % 2 === 1 && "lg:[&>*:first-child]:order-2"
                    )}
                  >
                    <div>
                      <div
                        className={cn(
                          "flex size-12 items-center justify-center rounded-xl text-white",
                          p.accentBg
                        )}
                      >
                        <p.icon className="size-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                        {p.name}
                      </h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {p.description}
                      </p>
                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {p.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span
                              className={cn(
                                "mt-1.5 size-1 shrink-0 rounded-full",
                                p.accentBg
                              )}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p.Mockup accent={p.accentBg} accentBg={p.accentBg} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus system — one deep-dive among several, not the headline */}
      <section id="syllabus" className="border-t bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="h-px w-4 bg-primary/50" />
              A closer look
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              How syllabus tracking works, one part of the platform
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Curriculum is one piece of a much bigger picture — but it&apos;s
              worth showing in detail because of how little manual setup it
              takes.
            </p>
          </Reveal>

          <RevealGroup className="mt-16 grid gap-5 lg:grid-cols-2" stagger={0.08}>
            {syllabusSteps.map((s) => (
              <RevealItem key={s.step}>
                <div className="h-full rounded-2xl border bg-card p-7">
                  <span className="font-mono text-sm font-semibold text-primary">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2}>
            <div className="mt-14 flex items-start gap-3 border-t pt-8">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Supports <strong className="text-foreground">CBSE</strong> and{" "}
                <strong className="text-foreground">APSSC / SSC</strong>{" "}
                (Andhra Pradesh State Board) curricula, plus a combined option
                and a separate Extra Subjects category (Dance, Music, Art)
                using the same subscribe-assign-track mechanism.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* More features — dense list, not icon-card grid */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Beyond the portals"
            title="Everything else a school day needs"
          />
        </Reveal>
        <RevealGroup
          className="mt-14 grid divide-y border-t sm:grid-cols-2 sm:divide-x sm:divide-y-0"
          stagger={0.04}
        >
          {moreFeatures.map((f, i) => (
            <RevealItem key={f.title}>
              <div
                className={cn(
                  "flex items-start gap-4 py-5",
                  i % 2 === 0 ? "sm:pr-8" : "sm:pl-8",
                  i >= 2 && "sm:border-t"
                )}
              >
                <f.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Pricing teaser */}
      <Section className="bg-muted/30">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Every feature above is switchable per plan
          </h2>
          <p className="mt-3 text-muted-foreground">
            See which features are included at each tier.
          </p>
          <Button className="mt-6" render={<Link href="/pricing" />}>
            View pricing
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
