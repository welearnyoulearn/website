import Image from "next/image";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/marketing/section";
import { InvestorContactForm } from "@/components/marketing/investor-contact-form";
import { Hero } from "@/components/marketing/hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { TenantDiagram } from "@/components/marketing/graphics/tenant-diagram";
import { team } from "@/lib/team";
import {
  Database,
  ShieldCheck,
  Layers,
  Sparkles,
  GitCommit,
  Rocket,
  Wrench,
  Hammer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Technical depth, market opportunity, and an honest roadmap for WeLearnYouLearn — a multi-tenant school management platform for Indian schools.",
  alternates: { canonical: "/investors" },
  openGraph: { url: "/investors" },
};

const stats = [
  { value: "5", label: "Portals sharing one data model" },
  { value: "~221", label: "Database migrations shipped" },
  { value: "99", label: "Database indexes, incl. tenant-scoped" },
  { value: "13", label: "AI functions built (1 live today)" },
];

const techPoints = [
  {
    icon: Layers,
    title: "Multi-tenant from the ground up",
    description:
      "Every school's data is scoped by school_id and checked in application code on every request, centralized in one guard function rather than scattered ad hoc. Cross-school access — accidental or malicious — is explicitly rejected.",
  },
  {
    icon: Database,
    title: "A schema that's actually been through production cycles",
    description:
      "~221 idempotent migrations and 99 indexes, including tenant-scoped composite indexes and full-text search — the signature of a schema that's evolved under real feature pressure, not a weekend prototype.",
  },
  {
    icon: ShieldCheck,
    title: "Security treated as an ongoing practice",
    description:
      "Separate, isolated login sessions per portal. Bcrypt password hashing. Two real commits in project history are literally titled 'add missing auth/tenant checks' — evidence review happens with every feature, not as a one-time audit.",
  },
  {
    icon: GitCommit,
    title: "Feature control as a product, not a config file",
    description:
      "Every feature — Timetable, Fee Management, Watchline, WhatsApp credits — is independently switchable per pricing tier from an internal admin panel, with every change audit-logged with before/after state.",
  },
];

const aiPoints = [
  {
    title: "Doubt-answering",
    status: "Live",
    description:
      "Runs on Groq's Llama 3.3 70B. Generates a first-pass answer in the Teacher Doubt Center before a teacher replies.",
  },
  {
    title: "Daily Knowledge generation",
    status: "Built, dormant",
    description: "AI-curated article and quiz content for students.",
  },
  {
    title: "Lesson planning",
    status: "Built, dormant",
    description: "Drafts lesson plans for teachers from syllabus data.",
  },
  {
    title: "School health reports",
    status: "Built, dormant",
    description:
      "Composite analysis across attendance, marks, tasks and fees.",
  },
  {
    title: "Weekly AI test generation",
    status: "Built, dormant",
    description:
      "A scheduled job already generates an AI weekly MCQ test every Sunday — the student-facing screen to take it isn’t live yet.",
  },
  {
    title: "PDF syllabus extraction",
    status: "Built, dormant",
    description: "Extracts structured curriculum data from uploaded PDFs.",
  },
  {
    title: "Doubt-pattern analysis",
    status: "Built, dormant",
    description: "Surfaces recurring student confusion at the class level.",
  },
  {
    title: "General AI chat assistant",
    status: "Built, dormant",
    description: "A general-purpose assistant across the platform.",
  },
];

const roadmap = [
  {
    icon: Rocket,
    title: "Close to shipping — integration remaining",
    items: [
      "Online fee payments (Cashfree) — schema and transaction bookkeeping done; live API connection remaining",
      "WhatsApp fee reminders (Meta Business API) — schema and config UI done; live sending not yet connected",
      "AI Daily Knowledge, homework suggestions, lesson planning, school health reports — functions written and tested; need wiring into screens",
    ],
  },
  {
    icon: Hammer,
    title: "Designed, not yet started",
    items: [
      "School Health Score — single composite wellness metric",
      "Syllabus Predictor — AI-forecasted completion date per subject",
      "Anonymous Class Pulse — anonymous student feedback loop",
      "Printable report cards",
    ],
  },
  {
    icon: Wrench,
    title: "In progress / needs finishing",
    items: [
      "Persistent login for students and parents",
      "Surfacing the already-built Weekly AI Test to students",
      "Teacher performance analytics",
    ],
  },
];

export default function InvestorsPage() {
  return (
    <>
      <Hero
        eyebrow="For investors"
        title="A production-grade platform, with a lot of shipped work still to unlock"
        description="WeLearnYouLearn already runs five portals on one shared data model for Indian schools. Here’s the technical case, honestly, including what’s still ahead of us."
        glowClassName="bg-[radial-gradient(circle_at_70%_10%,theme(colors.brand-amber/.35),transparent_50%),radial-gradient(circle_at_10%_80%,theme(colors.primary/.3),transparent_45%)]"
      />

      {/* Stats */}
      <Section className="pb-0 sm:pb-0">
        <RevealGroup className="grid grid-cols-2 gap-6 sm:grid-cols-4" stagger={0.1}>
          {stats.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary tabular-nums">
                <Counter value={s.value} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Market opportunity */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Market"
            title="India's schools are still running on spreadsheets and paper"
            description="Attendance registers, fee ledgers and syllabus tracking are frequently manual or fragmented across disconnected tools — even where basic software exists, it rarely spans admin, teacher, student and parent in one system."
            align="left"
          />
        </Reveal>
      </Section>

      {/* Tech differentiation — stacked rows with left rail, not a card grid */}
      <Section className="bg-muted/30">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <SectionHeading
              eyebrow="Technical differentiation"
              title="What’s actually underneath the product"
              align="left"
            />
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <TenantDiagram />
          </Reveal>
        </div>
        <RevealGroup className="mt-14 divide-y border-t" stagger={0.08}>
          {techPoints.map((p) => (
            <RevealItem key={p.title}>
              <div className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-8">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* AI — dense list, not cards */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="AI"
            title="13 functions built, 1 switched on"
            description="The AI layer runs on Groq's Llama 3.3 70B. Most of it is completed engineering waiting on UI wiring, not unstarted work — a meaningfully smaller lift than building from scratch."
            align="left"
          />
        </Reveal>
        <RevealGroup className="mt-14 divide-y border-t" stagger={0.04}>
          {aiPoints.map((a) => (
            <RevealItem key={a.title}>
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                <div className="flex items-center gap-2 sm:w-64 sm:shrink-0">
                  <Sparkles className="size-3.5 text-primary" />
                  <h3 className="text-sm font-semibold">{a.title}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      a.status === "Live"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{a.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Roadmap — three text columns, not cards */}
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading
            eyebrow="Honest roadmap"
            title="What’s next, and why it’s a smaller lift than it looks"
            align="left"
          />
        </Reveal>
        <RevealGroup className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-3" stagger={0.1}>
          {roadmap.map((r) => (
            <RevealItem key={r.title}>
              <div className="flex items-center gap-2.5 border-b pb-4">
                <r.icon className="size-4 text-primary" />
                <h3 className="text-sm font-semibold">{r.title}</h3>
              </div>
              <ul className="mt-4 space-y-4">
                {r.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.2}>
          <p className="mt-14 max-w-2xl border-t pt-8 text-sm text-muted-foreground leading-relaxed">
            The pattern across nearly every &ldquo;not yet done&rdquo; item: the
            hard part — data model, backend logic, AI functions — is already
            built. What&rsquo;s outstanding is largely UI wiring and third-party API
            connections.
          </p>
        </Reveal>
      </Section>

      {/* Team */}
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading eyebrow="Team" title="Who's building this" align="left" />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-3" stagger={0.1}>
          {team.map((member) => (
            <RevealItem key={member.name} className="text-center">
              <div className="mx-auto size-28 overflow-hidden rounded-full ring-1 ring-border">
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

      {/* Contact / deck request */}
      <Section>
        <div className="mx-auto max-w-xl">
          <Reveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Request the deck or a walkthrough"
              description="Tell us a bit about yourself and we'll follow up directly."
            />
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <InvestorContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
