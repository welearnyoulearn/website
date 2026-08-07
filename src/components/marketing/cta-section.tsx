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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-wlyl-hero px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 animate-gradient bg-[radial-gradient(circle_at_top,theme(colors.primary/.4),transparent_60%),radial-gradient(circle_at_bottom_right,theme(colors.brand-amber/.2),transparent_50%)]"
            />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-balance">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-balance leading-relaxed">
                {description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" render={<Link href={primaryHref} />}>
                  {primaryLabel}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  render={<Link href={secondaryHref} />}
                >
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
