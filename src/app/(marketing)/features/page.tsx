import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { CtaSection } from "@/components/marketing/cta-section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { features } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features — every part of the platform, in detail",
  description:
    "How each part of WeLearnYouLearn works — the 5 portals, syllabus tracking, attendance, exam marks, fee management, expense management, feedback management, digital library, and more.",
  alternates: { canonical: "/features" },
  openGraph: { url: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <Hero
        eyebrow="Live today"
        title="Every feature, in detail."
        description="A glimpse isn’t enough when you’re evaluating a platform for your school — here’s exactly how each part works."
        className="pb-16 sm:pb-20"
      />

      <div className="mx-auto max-w-5xl px-6 pb-32">
        <RevealGroup className="divide-y border-t" stagger={0.04}>
          {features.map((f, i) => (
            <RevealItem key={f.slug}>
              <Link
                href={`/features/${f.slug}`}
                className="group flex items-start gap-6 py-8 sm:items-center sm:gap-10 sm:py-9"
              >
                <span className="w-7 shrink-0 font-mono text-xs text-muted-foreground/40 sm:pt-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-6">
                  <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl shrink-0">
                    {f.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed sm:truncate">
                    {f.tagline}
                  </p>
                </div>
                <span className="shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5 hidden sm:inline">
                  →
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <CtaSection />
    </>
  );
}
