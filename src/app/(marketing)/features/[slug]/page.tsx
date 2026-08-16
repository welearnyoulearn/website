import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/marketing/section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Hero } from "@/components/marketing/hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { features, getFeature } from "@/lib/features";
import { getFeatureAccent } from "@/lib/feature-accent";
import { ArrowLeft, ArrowRight, Check, AlertCircle } from "lucide-react";

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};
  return {
    title: `${feature.name} — how it works`,
    description: feature.summary,
    alternates: { canonical: `/features/${feature.slug}` },
    openGraph: { url: `/features/${feature.slug}` },
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const accent = getFeatureAccent(feature.accent);
  const otherFeatures = features.filter((f) => f.slug !== feature.slug);

  return (
    <>
      <Hero
        eyebrow={feature.tagline}
        title={feature.name}
        description={feature.summary}
        className="pb-16 sm:pb-20"
        actions={
          <Button
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
            render={<Link href="/features" />}
          >
            <ArrowLeft className="size-4" />
            All features
          </Button>
        }
      />

      {/* What it offers */}
      <Section className="pb-0 sm:pb-0">
        <Reveal>
          <SectionHeading
            eyebrow="What it offers"
            title="What you actually get"
            align="left"
          />
        </Reveal>
        <RevealGroup
          className="mt-12 grid gap-3 sm:grid-cols-2"
          stagger={0.04}
        >
          {feature.bullets.map((b) => (
            <RevealItem key={b}>
              <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                <div
                  className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${accent.ring}`}
                >
                  <Check className={`size-3 ${accent.text}`} />
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {b}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* How it works */}
      {feature.steps && (
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Step by step"
              align="left"
            />
          </Reveal>
          <RevealGroup
            className={`mt-14 grid gap-5 ${
              feature.steps.length >= 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"
            }`}
            stagger={0.08}
          >
            {feature.steps.map((s) => (
              <RevealItem key={s.step}>
                <div className={`h-full rounded-2xl border p-7 ${accent.tint}`}>
                  <span className={`font-mono text-sm font-semibold ${accent.text}`}>
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
        </Section>
      )}

      {/* Honest note, if any */}
      {feature.note && (
        <Section className="pt-0 sm:pt-0">
          <Reveal>
            <div className="flex items-start gap-3 rounded-xl border border-brand-amber/30 bg-brand-amber-bg p-5">
              <AlertCircle className="mt-0.5 size-5 shrink-0 text-brand-amber" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                {feature.note}
              </p>
            </div>
          </Reveal>
        </Section>
      )}

      {/* Other features */}
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading eyebrow="Explore more" title="Other parts of the platform" align="left" />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {otherFeatures.map((f) => {
            const a = getFeatureAccent(f.accent);
            return (
              <RevealItem key={f.slug}>
                <Link
                  href={`/features/${f.slug}`}
                  className="group flex h-full flex-col rounded-xl border bg-card p-5 transition-shadow hover:shadow-lg"
                >
                  <div className={`flex size-9 items-center justify-center rounded-lg text-white ${a.bg}`}>
                    <f.icon className="size-4" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{f.name}</h3>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    View
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      <CtaSection />
    </>
  );
}
