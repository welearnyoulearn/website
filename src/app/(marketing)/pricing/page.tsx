import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/marketing/section";
import { PricingCard } from "@/components/marketing/pricing-card";
import { CtaSection } from "@/components/marketing/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three plans built around how much of the platform your school needs. Talk to us for current pricing.",
};

const tiers = [
  {
    name: "Basic",
    tagline: "Core school operations, nothing extra.",
    priceNote: "per month",
    features: [
      "School Admin, Teacher, Student & Parent portals",
      "Syllabus subscription & coverage tracking",
      "Timetable, attendance & fee management",
      "Academic analytics & reporting",
      "Email support",
    ],
  },
  {
    name: "Standard",
    tagline: "For schools ready to automate parent communication.",
    priceNote: "per month",
    highlighted: true,
    features: [
      "Everything in Basic",
      "WhatsApp messaging credits included*",
      "Online fee payments*",
      "Usage-based billing for overage",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    tagline: "Full platform, higher usage limits.",
    priceNote: "per month",
    features: [
      "Everything in Standard",
      "Higher WhatsApp messaging allowance*",
      "Watchline API request monitoring",
      "Dedicated onboarding",
      "Priority support with faster SLA",
    ],
  },
];

const comparisonRows = [
  { label: "Admin, Teacher, Student & Parent portals", basic: true, standard: true, premium: true },
  { label: "Syllabus subscription & coverage tracking", basic: true, standard: true, premium: true },
  { label: "Timetable & attendance management", basic: true, standard: true, premium: true },
  { label: "Fee management (offline payment tracking)", basic: true, standard: true, premium: true },
  { label: "Academic & school-wide analytics", basic: true, standard: true, premium: true },
  { label: "WhatsApp messaging credits*", basic: false, standard: true, premium: true },
  { label: "Online fee payments*", basic: false, standard: true, premium: true },
  { label: "Usage-based overage billing", basic: false, standard: true, premium: true },
  { label: "Watchline (API monitoring)", basic: false, standard: false, premium: true },
  { label: "Support level", basic: "Email", standard: "Priority", premium: "Priority + faster SLA" },
];

const faqs = [
  {
    q: "What determines which features my school gets?",
    a: "Every feature on the platform — Timetable, Fee Management, Watchline, WhatsApp credits and more — is independently switchable per plan from our own admin panel, so what you see above reflects exactly what's configurable today.",
  },
  {
    q: "Are WhatsApp reminders and online payments available right now?",
    a: "The underlying infrastructure for both is built. We're finishing the live connections to our messaging and payments providers and will confirm availability with you directly before you're billed for either.",
  },
  {
    q: "Can we switch plans later?",
    a: "Yes — talk to us about moving between tiers as your school's needs change.",
  },
  {
    q: "Is there a setup or onboarding fee?",
    a: "Onboarding details depend on your school's size and current systems. Get in touch and we'll walk you through it.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section className="pb-0 sm:pb-0">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Plans built around how much of the platform you need"
            description="All plans include the core portals and syllabus system. Higher tiers unlock messaging, payments and monitoring. Contact us for current pricing."
            align="left"
          />
        </Reveal>
      </Section>

      <Section>
        <RevealGroup className="grid gap-6 lg:grid-cols-3 lg:items-start" stagger={0.1}>
          {tiers.map((t) => (
            <RevealItem key={t.name} className={t.highlighted ? "lg:-mt-3" : ""}>
              <PricingCard {...t} />
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            *WhatsApp messaging and online payments are in final integration —
            see the note below before you plan around them.
          </p>
        </Reveal>
      </Section>

      {/* Comparison table */}
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading title="Compare plans" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto rounded-2xl border bg-card">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-5 py-4 text-left font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-5 py-4 text-left font-medium text-muted-foreground">
                    Basic
                  </th>
                  <th className="px-5 py-4 text-left font-medium text-muted-foreground">
                    Standard
                  </th>
                  <th className="px-5 py-4 text-left font-medium text-muted-foreground">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b last:border-0 transition-colors hover:bg-muted/40"
                  >
                    <td className="px-5 py-4 text-foreground/90">{row.label}</td>
                    {(["basic", "standard", "premium"] as const).map((k) => {
                      const val = row[k];
                      return (
                        <td key={k} className="px-5 py-4">
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="size-4 text-primary" />
                            ) : (
                              <Minus className="size-4 text-muted-foreground/40" />
                            )
                          ) : (
                            <span className="text-muted-foreground">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <Reveal>
          <SectionHeading title="Pricing FAQ" />
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
          <Accordion>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      <CtaSection
        title="Not sure which plan fits?"
        description="Tell us about your school and we'll recommend a plan — no pricing surprises."
        primaryLabel="Talk to us"
        primaryHref="/contact?intent=pricing"
      />
    </>
  );
}
