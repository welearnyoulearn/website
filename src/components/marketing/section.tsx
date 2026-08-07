import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-2 text-sm font-semibold text-primary mb-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-4 bg-primary/50" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground text-balance leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
