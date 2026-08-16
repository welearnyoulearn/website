import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { CtaSection } from "@/components/marketing/cta-section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card";
import { features } from "@/lib/features";
import { getFeatureAccent } from "@/lib/feature-accent";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Features — every part of the platform, in detail",
  description:
    "How each part of WeLearnYouLearn works — the 5 portals, syllabus tracking, fee management, expense management, and hardware-based teacher attendance.",
  alternates: { canonical: "/features" },
  openGraph: { url: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <Hero
        eyebrow="Live today"
        title="Every feature, in detail."
        description="A glimpse isn't enough when you're evaluating a platform for your school — here's exactly how each part works."
        className="pb-16 sm:pb-20"
      />

      <Section>
        <RevealGroup className="grid gap-6 sm:grid-cols-2" stagger={0.08}>
          {features.map((f) => {
            const accent = getFeatureAccent(f.accent);
            return (
              <RevealItem key={f.slug}>
                <HoverCard className="h-full">
                  <Link
                    href={`/features/${f.slug}`}
                    className="group flex h-full flex-col rounded-2xl border bg-card p-8 transition-shadow hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl text-white ${accent.bg}`}
                    >
                      <f.icon className="size-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {f.name}
                    </h3>
                    <p className={`mt-1 text-sm font-medium ${accent.text}`}>
                      {f.tagline}
                    </p>
                    <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
                      {f.glimpse}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      See how it works
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Link>
                </HoverCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      <CtaSection />
    </>
  );
}
