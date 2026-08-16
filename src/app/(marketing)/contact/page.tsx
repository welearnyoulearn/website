import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, SectionHeading } from "@/components/marketing/section";
import { ContactForm } from "@/components/marketing/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { DotField } from "@/components/marketing/graphics/dot-field";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WeLearnYouLearn — request a demo, ask about pricing, or say hello.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <Section className="relative overflow-hidden pt-16 sm:pt-20">
      <DotField className="pointer-events-none absolute -left-10 top-24 h-56 w-56 opacity-50" />
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Whether you're evaluating the platform for your school or just have a question, we'll get back to you quickly."
        />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-5">
        <Reveal delay={0.1} className="lg:col-span-3">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border bg-card p-6 transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="size-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <a
                  href="mailto:admin@welearnyoulearn.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  admin@welearnyoulearn.com
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6 transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Based in</p>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Looking to invest? Visit our{" "}
            <a href="/investors" className="underline underline-offset-2">
              investor page
            </a>{" "}
            for a dedicated form.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
