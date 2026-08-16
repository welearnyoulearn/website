import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/marketing/section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Hero } from "@/components/marketing/hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card";
import { PortalNetwork } from "@/components/marketing/graphics/portal-network";
import { features } from "@/lib/features";
import { getFeatureAccent } from "@/lib/feature-accent";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  ClipboardCheck,
  LineChart,
  Megaphone,
  Trophy,
  MessageCircleQuestion,
  FileText,
  Tv,
  BellRing,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product — one platform for your whole school",
  description:
    "A quick look at the 5 portals, syllabus tracking, fee and expense management, and hardware-based teacher attendance — with a deep dive on every feature.",
};

const glanceFeatures = [
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
        description="School Admin, Teacher, Student and Parent all work off the same data — cutting manual work out of attendance, fees, expenses, scheduling and more."
        className="pb-16 sm:pb-20"
        actions={
          <Button
            size="lg"
            render={<Link href="/features" />}
          >
            Explore every feature
            <ArrowRight className="size-4" />
          </Button>
        }
      />

      {/* Network glimpse */}
      <section className="border-b py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex justify-center">
            <PortalNetwork />
          </Reveal>
        </div>
      </section>

      {/* Flagship features — cards driving to detail pages */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Live today"
            title="Five things that change how your school runs"
            description="A quick look — click through to see exactly how each one works."
            align="left"
          />
        </Reveal>
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.06}>
          {features.map((f) => {
            const accent = getFeatureAccent(f.accent);
            return (
              <RevealItem key={f.slug}>
                <HoverCard className="h-full">
                  <Link
                    href={`/features/${f.slug}`}
                    className="group flex h-full flex-col rounded-2xl border bg-card p-7 transition-shadow hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl text-white ${accent.bg}`}
                    >
                      <f.icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{f.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                      {f.glimpse}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      See how it works
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Link>
                </HoverCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
        <Reveal delay={0.15} className="mt-10">
          <Button variant="outline" render={<Link href="/features" />}>
            View all features in detail
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </Section>

      {/* At a glance — dense list, not the full story */}
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading
            eyebrow="Also included"
            title="Everything else a school day needs"
          />
        </Reveal>
        <RevealGroup
          className="mt-14 grid divide-y border-t sm:grid-cols-2 sm:divide-x sm:divide-y-0"
          stagger={0.04}
        >
          {glanceFeatures.map((f, i) => (
            <RevealItem key={f.title}>
              <div
                className={`flex items-start gap-4 py-5 ${
                  i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                } ${i >= 2 ? "sm:border-t" : ""}`}
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
      <Section>
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
