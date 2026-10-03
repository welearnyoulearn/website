import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/marketing/section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Hero } from "@/components/marketing/hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PortalShowcase } from "@/components/marketing/portal-showcase";
import { features } from "@/lib/features";
import {
  ArrowRight,
  FileText,
  BellRing,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product — one platform for your whole school",
  description:
    "A quick look at the 5 portals, syllabus tracking, fee and expense management, attendance, exam marks, announcements, feedback management, and the digital library.",
  alternates: { canonical: "/product" },
  openGraph: { url: "/product" },
};

const remainingFeatures = [
  {
    icon: FileText,
    title: "Exams & marks",
    description: "Track marks-entry status per subject and exam. Publish results with parent notification — parents see marks the moment they're released.",
  },
  {
    icon: BellRing,
    title: "Notification center",
    description: "Full send history for every announcement and notification — searchable, filterable, and auditable. Nothing gets lost.",
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
            Explore every feature in detail
            <ArrowRight className="size-4" />
          </Button>
        }
      />

      {/* Quick stats */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
          <RevealGroup className="flex flex-wrap gap-x-12 gap-y-6" stagger={0.07}>
            {[
              { value: "5", label: "purpose-built portals" },
              { value: "11+", label: "live feature modules" },
              { value: "13", label: "AI functions built" },
              { value: "2", label: "board curricula supported" },
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

      {/* Portal showcase — role by role */}
      <Section>
        <Reveal className="mb-12">
          <SectionHeading
            eyebrow="Every role covered"
            title="What each person in your school gets"
            description="Switch between portals below to see exactly what admins, teachers, students, and parents can do — all from the same shared platform."
            align="left"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <PortalShowcase />
        </Reveal>
      </Section>

      {/* All features — editorial list */}
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading
            eyebrow="Live today"
            title="Every module, in one place"
            description="Click through to see exactly how each one works."
            align="left"
          />
        </Reveal>
        <RevealGroup className="mt-12 divide-y border-t" stagger={0.04}>
          {features.map((f, i) => (
            <RevealItem key={f.slug}>
              <Link
                href={`/features/${f.slug}`}
                className="group flex items-start gap-6 py-7 sm:items-baseline sm:gap-10"
              >
                <span className="w-7 shrink-0 font-mono text-xs text-muted-foreground/40 sm:pt-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="text-base font-semibold shrink-0">{f.name}</span>
                  <span className="text-sm text-muted-foreground sm:truncate">{f.tagline}</span>
                </div>
                <span className="hidden shrink-0 text-muted-foreground/30 transition-all group-hover:text-foreground sm:inline">
                  →
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Also included */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Also included"
            title="More built into the platform"
          />
        </Reveal>
        <RevealGroup className="mt-10 divide-y border-t" stagger={0.05}>
          {remainingFeatures.map((f) => (
            <RevealItem key={f.title}>
              <div className="flex items-baseline gap-6 py-6">
                <h3 className="w-48 shrink-0 text-sm font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
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
            See which features are included at each tier — Basic, Standard, or Premium.
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
