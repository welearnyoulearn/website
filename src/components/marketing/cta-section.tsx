import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection({
  title = "See it running in your school",
  description = "Talk to us about what a rollout would look like — no pressure, no obligation.",
  primaryHref = "/contact?intent=demo",
  primaryLabel = "Request a demo",
  secondaryHref = "/pricing",
  secondaryLabel = "View pricing",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-t py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
                {title}
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button size="lg" render={<Link href={primaryHref} />}>
                {primaryLabel}
              </Button>
              <Button size="lg" variant="outline" render={<Link href={secondaryHref} />}>
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
