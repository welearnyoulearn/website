import Image from "next/image";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/marketing/section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Hero } from "@/components/marketing/hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { DotField } from "@/components/marketing/graphics/dot-field";
import { team } from "@/lib/team";
import { Target, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "WeLearnYouLearn is building one shared platform for school admins, teachers, students and parents in India.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const values = [
  {
    n: "01",
    icon: Target,
    title: "Built for how Indian schools actually run",
    description:
      "CBSE and State Board curricula, offline-capable attendance, and workflows shaped around a real school day — not a generic template stretched to fit.",
  },
  {
    n: "02",
    icon: Layers,
    title: "One system, not five disconnected tools",
    description:
      "Admins, teachers, students and parents working off the same data means information entered once is correct everywhere, automatically.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Security as an ongoing discipline",
    description:
      "Every school's data is isolated by design, and access control is reviewed as new features ship — not treated as a box to tick once.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="One platform, built for schools first"
        description="WeLearnYouLearn started with a simple observation: schools juggle attendance registers, fee ledgers, and syllabus tracking across tools that don't talk to each other. We built one that does."
        glowClassName="bg-[radial-gradient(circle_at_50%_0%,theme(colors.primary/.45),transparent_55%)]"
      />

      {/* Mission — large pull-quote, not a card */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <DotField className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="h-px w-4 bg-primary/50" />
              Mission
            </p>
            <p className="mt-6 text-2xl sm:text-4xl font-semibold tracking-tight leading-[1.25] text-balance">
              Admins, teachers, students and parents each need something
              different from a school&apos;s day-to-day —{" "}
              <span className="text-muted-foreground">
                but they all need it to be the same underlying truth.
              </span>{" "}
              That&apos;s the problem we&apos;re solving.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How we build — numbered editorial list */}
      <section className="border-t bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="h-px w-4 bg-primary/50" />
              What we believe
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              How we build
            </h2>
          </Reveal>

          <RevealGroup className="mt-16 grid gap-x-12 gap-y-14 lg:grid-cols-3" stagger={0.1}>
            {values.map((v) => (
              <RevealItem key={v.n}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-primary/50">
                    {v.n}
                  </span>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <v.icon className="size-4" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Team" title="The people behind it" />
        </Reveal>
        <RevealGroup
          className="mt-12 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto"
          stagger={0.1}
        >
          {team.map((member) => (
            <RevealItem key={member.name} className="text-center">
              <div className="mx-auto size-28 overflow-hidden rounded-full ring-1 ring-border transition-transform hover:scale-105">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="size-full object-cover"
                />
              </div>
              <p className="mt-4 font-medium">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaSection
        title="Want to see it in action?"
        description="We’re happy to walk you through the product, whichever side of it you’re interested in."
      />
    </>
  );
}
