import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard } from "@/components/motion/hover-card";
import { cn } from "@/lib/utils";

export function PricingCard({
  name,
  tagline,
  price = "Contact us",
  priceNote,
  features,
  highlighted = false,
}: {
  name: string;
  tagline: string;
  price?: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <HoverCard className="h-full">
      <div
        className={cn(
          "flex h-full flex-col rounded-3xl border p-7 transition-shadow duration-300",
          highlighted
            ? "border-primary/40 bg-accent/30 shadow-lg shadow-primary/10 ring-1 ring-primary/20 hover:shadow-xl hover:shadow-primary/15"
            : "bg-card hover:shadow-lg"
        )}
      >
        {highlighted && (
          <Badge className="mb-3 w-fit bg-brand-amber text-white">
            Most popular
          </Badge>
        )}
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>

        <div className="mt-6">
          <span className="text-3xl font-semibold tracking-tight">{price}</span>
          {priceNote && (
            <span className="ml-1.5 text-sm text-muted-foreground">
              {priceNote}
            </span>
          )}
        </div>

        <Button
          className="mt-6"
          variant={highlighted ? "default" : "outline"}
          render={<Link href="/contact?intent=pricing" />}
        >
          Talk to us
        </Button>

        <ul className="mt-7 space-y-3 border-t pt-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-foreground/90">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </HoverCard>
  );
}
