import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/marketing/cta-section";
import { Hero } from "@/components/marketing/hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PortalNetwork } from "@/components/marketing/graphics/portal-network";
import { PortalShowcase } from "@/components/marketing/portal-showcase";
import {
  BookOpenCheck,
  Wallet,
  Receipt,
  HeartHandshake,
  Users,
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  ClipboardCheck,
  Megaphone,
  MessageSquare,
  Zap,
  CreditCard,
  BookMarked,
  CalendarDays,
  FileDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "School management software for CBSE & State Board schools",
  description:
    "One platform for admins, teachers, students and parents that cuts manual work out of daily school operations — built for Indian schools.",
};

const highlights = [
  {
    n: "01",
    icon: Users,
    title: "All 5 portals, live today",
    description:
      "School Admin, Teacher, Student, Parent and Platform Admin — one system instead of five disconnected tools, so nothing gets re-entered twice.",
  },
  {
    n: "02",
    icon: Wallet,
    title: "Fee management",
    description:
      "Grade-based fee structures, a complete ledger, cash/cheque/UPI payment recording, and waivers — school-wide collection status in real time.",
  },
  {
    n: "03",
    icon: Receipt,
    title: "Expense management",
    description:
      "Every school expense tracked, categorized, searchable, and auditable — bills attached, full trail of who logged what and when.",
  },
  {
    n: "04",
    icon: BookOpenCheck,
    title: "Syllabus tracking",
    description:
      "Subscribe to a shared CBSE/State Board curriculum library — it flows into teacher assignments, coverage tracking, and what parents see.",
  },
  {
    n: "05",
    icon: ClipboardCheck,
    title: "Attendance tracking",
    description:
      "Teachers mark attendance per class in seconds — admin sees school-wide status in real time, parents see their child's record daily.",
  },
  {
    n: "06",
    icon: CalendarClock,
    title: "Exam schedule & marks",
    description:
      "Admin schedules exams, teachers enter marks per subject, results release to students and parents with a single action.",
  },
  {
    n: "07",
    icon: Megaphone,
    title: "Announcements",
    description:
      "Targeted by grade, section, or role. Full send history and read receipts — no more wondering if the message landed.",
  },
  {
    n: "08",
    icon: MessageSquare,
    title: "Anonymous feedback (QR + voice)",
    description:
      "Generate QR codes for anonymous student or parent feedback — voice upload option, category tagging, and issue tracking for admin.",
  },
  {
    n: "09",
    icon: BookMarked,
    title: "Digital library",
    description:
      "School-managed resources by grade and subject — accessible to teachers, students, and parents from their own portals.",
  },
  {
    n: "10",
    icon: CalendarDays,
    title: "Academic calendar",
    description:
      "Admin sets holidays, events, and term dates once — teachers, students, and parents all see the same calendar with no version mismatch.",
  },
  {
    n: "11",
    icon: FileDown,
    title: "Data export",
    description:
      "Structured exports for every module — student records, attendance, fees, expenses — downloadable any time for offline use or compliance.",
  },
  {
    n: "12",
    icon: HeartHandshake,
    title: "Hands-on support",
    description:
      "Onboarding that works with your school's actual systems, not a generic onboarding checklist. Responsive support from the team that built it.",
  },
];

const aiItems = [
  { title: "Doubt answering", status: "Live", description: "Llama 3.3 70B via Groq — instant first-pass answers to student questions." },
  { title: "Lesson planning", status: "Built", description: "Drafts lesson plans from your syllabus data — ready to activate." },
  { title: "Daily Knowledge", status: "Built", description: "AI-curated articles and quizzes pushed to students daily." },
  { title: "Weekly AI tests", status: "Built", description: "MCQ tests auto-generated every Sunday from the curriculum." },
  { title: "School health reports", status: "Built", description: "Composite analytics across attendance, marks, tasks, and fees." },
  { title: "Homework suggestions", status: "Built", description: "Auto-suggests homework when a teacher marks a topic covered." },
];

const comingSoon = [
  {
    icon: MessageSquare,
    title: "WhatsApp fee reminders",
    description: "Automated WhatsApp messages for outstanding fees — schema and config UI done, live sending in final integration.",
    badge: "In integration",
  },
  {
    icon: CreditCard,
    title: "Online fee payments",
    description: "Parents pay fees online via Cashfree — transaction bookkeeping and ledger done, live API connection remaining.",
    badge: "In integration",
  },
  {
    icon: Zap,
    title: "AI functions, activating soon",
    description: "13 AI functions already built and tested — lesson planning, daily knowledge, weekly tests, and more. Being wired to screens.",
    badge: "Activating soon",
  },
];

const trustedSchools = [
  { name: "Gitanjali English Medium School", logo: "/schools/gems.png" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Now live — powering schools across India"
        title={<>Replace registers, Excel, and WhatsApp.<br className="hidden sm:block" /> Run everything from one platform.</>}
        description="School Admin, Teacher, Student, and Parent — each with their own portal, all reading from the same data. Built for CBSE and State Board schools."
        actions={
          <>
            <Button size="lg" render={<Link href="/contact?intent=demo" />}>
              Request a demo
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              render={<Link href="/product" />}
            >
              See how it works
            </Button>
          </>
        }
      />

      {/* Problem statement strip */}
      <section className="border-b bg-muted/30 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">The problem</p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance max-w-2xl leading-[1.2]">
                Most Indian schools run on 5+ disconnected tools, paper registers, and WhatsApp groups.
                <span className="text-muted-foreground font-normal"> WLYL replaces all of it.</span>
              </p>
              <Reveal delay={0.1}>
                <Link href="/product" className="group inline-flex items-center gap-1.5 shrink-0 text-sm font-medium text-primary">
                  See how it works
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Audience split — stacked, asymmetric */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="group relative border-b py-16 lg:py-20">
            <Link href="/product" className="block">
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                For schools
              </p>
              <h3 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-balance max-w-3xl">
                See what runs in your school{" "}
                <span className="text-primary">every single day.</span>
              </h3>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Five portals — Admin, Teacher, Student, Parent, Platform Admin — all reading from the same data. Attendance, fees, expenses, exams, and announcements. Nothing re-entered twice.
              </p>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Explore the product
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="group relative py-10 lg:py-12">
            <Link href="/investors" className="block">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                    For investors
                  </p>
                  <h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-balance max-w-xl">
                    What&apos;s built, what&apos;s shipped,{" "}
                    <span className="text-brand-amber">what&apos;s next.</span>
                  </h3>
                </div>
                <span className="mt-8 shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  View investor overview
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Quick stats strip */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
          <RevealGroup className="flex flex-wrap gap-x-12 gap-y-6" stagger={0.07}>
            {[
              { value: "5", label: "portals in one platform" },
              { value: "11+", label: "live modules today" },
              { value: "13", label: "AI functions built" },
              { value: "0", label: "paper registers needed" },
            ].map((s) => (
              <RevealItem key={s.label}>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight tabular-nums">{s.value}</span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Portal showcase — role-by-role */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Built for every role</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              One platform. Every person in your school covered.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
              School Admin, Teachers, Students, and Parents each get their own purpose-built portal — all reading from the same shared data, so nothing gets re-entered.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <PortalShowcase />
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <Button variant="outline" render={<Link href="/product" />}>
              See the full product tour
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Live today — full feature list */}
      <section className="border-t py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Live today</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                Everything that used to be manual, isn&apos;t anymore
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                No pilots, no half-built modules — these run your school&apos;s
                daily operations right now.
              </p>
            </div>
            <Reveal delay={0.1} className="hidden lg:block shrink-0">
              <PortalNetwork />
            </Reveal>
          </Reveal>

          <RevealGroup className="mt-14 divide-y border-t" stagger={0.04}>
            {highlights.map((h) => (
              <RevealItem key={h.n}>
                <div className="grid grid-cols-[2.5rem_1fr] items-baseline gap-6 py-6 sm:grid-cols-[3rem_1fr_2fr] sm:gap-8">
                  <span className="font-mono text-xs text-muted-foreground/40">
                    {h.n}
                  </span>
                  <h3 className="text-sm font-semibold sm:text-base">{h.title}</h3>
                  <p className="col-span-2 -mt-1 text-sm text-muted-foreground leading-relaxed sm:col-span-1 sm:mt-0">
                    {h.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12">
            <Button variant="outline" render={<Link href="/features" />}>
              See every feature in detail
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Bold statement moment */}
      <section className="bg-wlyl-hero py-24 sm:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-wider text-white/50 uppercase mb-8">
              Why schools switch
            </p>
            <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance leading-[1.15] max-w-3xl">
              Less time on registers, ledgers, and paperwork.{" "}
              <span className="text-white/50">
                More room for teachers to teach and students to grow.
              </span>
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                render={<Link href="/contact?intent=demo" />}
              >
                Request a demo
                <ArrowRight className="size-4" />
              </Button>
              <Link
                href="/product"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                See every feature
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">AI layer</p>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance max-w-xl">
                AI built in from day one. Not bolted on later.
              </h2>
              <Button className="shrink-0" render={<Link href="/investors#ai" />}>
                See the full AI roadmap
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              13 AI functions — written, tested, and built on Llama 3.3 70B via Groq.{" "}
              <span className="font-medium text-foreground">Live today:</span> The Doubt Center AI answers student questions in seconds — a teacher reviews and confirms before the student sees a final reply. No raw AI output, no hallucination risk.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="divide-y border-t">
              {aiItems.map((item) => (
                <div key={item.title} className="flex items-baseline gap-6 py-5 sm:gap-10">
                  <span className={`shrink-0 w-12 font-mono text-xs ${item.status === "Live" ? "text-primary font-semibold" : "text-muted-foreground/40"}`}>
                    {item.status}
                  </span>
                  <div className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-6">
                    <p className="text-sm font-semibold shrink-0">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/investors#ai"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Full AI roadmap in the investor overview
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coming soon */}
      <section className="border-t py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12">
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">What&apos;s coming</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              Building openly. Here&apos;s what&apos;s next.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              The hard parts — data models, backend logic, AI functions — are already built. What&apos;s left is connecting the live APIs and wiring functions to their screens.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 divide-y border-t" stagger={0.06}>
            {comingSoon.map((item) => (
              <RevealItem key={item.title}>
                <div className="flex items-baseline gap-6 py-6 sm:gap-10">
                  <span className="shrink-0 font-mono text-[10px] tracking-wider uppercase text-muted-foreground/50 w-24">
                    {item.badge}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.15} className="mt-8">
            <Button variant="outline" render={<Link href="/investors" />}>
              See the full roadmap
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-sm font-medium text-muted-foreground">
              Trusted by schools across India
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {trustedSchools.map((school) => (
                <div
                  key={school.name}
                  className="flex h-16 items-center justify-center"
                  title={school.name}
                >
                  <Image
                    src={school.logo}
                    alt={school.name}
                    width={120}
                    height={64}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
