import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const accentMap = {
  admin: "bg-primary/10 text-primary",
  teacher: "bg-wlyl-teacher/15 text-wlyl-teacher",
  student: "bg-wlyl-student/15 text-wlyl-student",
  parent: "bg-wlyl-parent/15 text-wlyl-parent",
} as const;

export function PortalCard({
  icon: Icon,
  accent,
  name,
  description,
  features,
}: {
  icon: LucideIcon;
  accent: keyof typeof accentMap;
  name: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="h-full rounded-2xl border bg-card p-7 transition-shadow hover:shadow-lg">
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-xl",
          accentMap[accent]
        )}
      >
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <ul className="mt-5 space-y-2.5 border-t pt-5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <span
              className={cn(
                "mt-1.5 size-1.5 shrink-0 rounded-full",
                accentMap[accent].split(" ")[1]?.replace("text-", "bg-") ??
                  "bg-primary"
              )}
            />
            <span className="text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
