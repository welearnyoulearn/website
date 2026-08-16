import type { FeatureDetail } from "@/lib/features";

const accentMap: Record<
  FeatureDetail["accent"],
  { text: string; bg: string; tint: string; ring: string }
> = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    tint: "bg-primary/[0.04]",
    ring: "bg-primary/10",
  },
  teacher: {
    text: "text-wlyl-teacher",
    bg: "bg-wlyl-teacher",
    tint: "bg-wlyl-teacher/[0.05]",
    ring: "bg-wlyl-teacher/15",
  },
  student: {
    text: "text-wlyl-student",
    bg: "bg-wlyl-student",
    tint: "bg-wlyl-student/[0.05]",
    ring: "bg-wlyl-student/15",
  },
  parent: {
    text: "text-wlyl-parent",
    bg: "bg-wlyl-parent",
    tint: "bg-wlyl-parent/[0.05]",
    ring: "bg-wlyl-parent/15",
  },
  amber: {
    text: "text-brand-amber",
    bg: "bg-brand-amber",
    tint: "bg-brand-amber/[0.05]",
    ring: "bg-brand-amber/15",
  },
};

export function getFeatureAccent(accent: FeatureDetail["accent"]) {
  return accentMap[accent];
}
