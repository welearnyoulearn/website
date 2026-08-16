import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/marketing/cta-section";
import { Hero } from "@/components/marketing/hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PortalNetwork } from "@/components/marketing/graphics/portal-network";
import {
  BookOpenCheck,
  Wallet,
  Receipt,
  Fingerprint,
  HeartHandshake,
  Users,
  ArrowRight,
  ArrowUpRight,
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
    icon: Fingerprint,
    title: "Teacher attendance, with hardware",
    description:
      "Biometric/RFID-based staff attendance that syncs automatically into the platform — no manual registers, no end-of-month reconciliation.",
  },
  {
    n: "03",
    icon: Wallet,
    title: "Fee management",
    description:
      "Structures, ledger, payments and waivers — a complete view of fee collection for the whole school, without spreadsheets.",
  },
  {
    n: "04",
    icon: Receipt,
    title: "Expense management",
    description:
      "Every school expense tracked, categorized and searchable, with bills attached and a full audit trail — no more lost paperwork.",
  },
  {
    n: "05",
    icon: BookOpenCheck,
    title: "Syllabus organizing & tracking",
    description:
      "Subscribe to a shared curriculum library once — it flows automatically into teacher assignments and coverage tracking across the school.",
  },
  {
    n: "06",
    icon: HeartHandshake,
    title: "Support you can rely on",
    description:
      "Hands-on onboarding and responsive support — we work with your school, not just your software license.",
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
        title={
          <>
            Smart school management,{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-amber-300 bg-clip-text text-transparent">
              one platform
            </span>
          </>
        }
        description="One platform for admins, teachers, students and parents. Simple. Fast. Reliable. Built for CBSE and State Board schools."
        actions={
          <>
            <Button size="lg" render={<Link href="/product" />}>
              Explore the product
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              render={<Link href="/contact?intent=demo" />}
            >
              Request a demo
            </Button>
          </>
        }
      />

      {/* Audience split — large asymmetric, text-led */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2">
            <Reveal className="group relative border-b py-16 pr-0 lg:border-r lg:border-b-0 lg:py-24 lg:pr-14">
              <Link href="/product" className="block">
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  For schools
                </p>
                <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] text-balance">
                  See what runs
                  <br />
                  in your school
                  <br />
                  <span className="text-primary">every single day.</span>
                </h3>
                <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                  The five portals, and how they cut manual work out of
                  attendance, fees, scheduling and communication — every day.
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore the product
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>

            <Reveal
              delay={0.1}
              className="group relative py-16 pl-0 lg:py-24 lg:pl-14"
            >
              <Link href="/investors" className="block">
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  For investors
                </p>
                <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] text-balance">
                  See what's built,
                  <br />
                  what's shipped, and
                  <br />
                  <span className="text-brand-amber">what's next.</span>
                </h3>
                <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
                  Technical depth, market opportunity, and an honest look at
                  what's shipped versus what's next.
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View investor overview
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Live today — large index list, not a card grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <Reveal className="max-w-xl">
              <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                <span className="h-px w-4 bg-primary/50" />
                Live today
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                Everything that used to be manual, isn&apos;t anymore
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                No pilots, no half-built modules — these run your school&apos;s
                daily operations right now.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="hidden lg:block">
              <PortalNetwork />
            </Reveal>
          </div>

          <RevealGroup className="mt-16 divide-y border-t" stagger={0.06}>
            {highlights.map((h) => (
              <RevealItem key={h.n}>
                <div className="group grid grid-cols-[auto_1fr] items-start gap-6 py-8 sm:grid-cols-[3.5rem_auto_1fr] sm:items-center sm:gap-10">
                  <span className="font-mono text-sm text-muted-foreground/60">
                    {h.n}
                  </span>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <h.icon className="size-5" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <h3 className="text-lg font-semibold">{h.title}</h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12">
            <Button variant="outline" render={<Link href="/product" />}>
              See the full product tour
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Bold single-idea moment — operational relief + student potential */}
      <section className="bg-wlyl-hero py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-wider text-white/50 uppercase">
              Why schools switch
            </p>
            <p className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance leading-[1.15]">
              Less time on registers, ledgers and paperwork —{" "}
              <span className="text-white/50">
                more room for teachers to teach and students to grow.
              </span>
            </p>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-white">
              <Link href="/product" className="group inline-flex items-center gap-1.5">
                See everything it runs
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </span>
          </Reveal>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 sm:py-24">
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
