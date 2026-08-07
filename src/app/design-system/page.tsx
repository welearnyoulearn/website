import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const colorSwatches = [
  { name: "Background", cls: "bg-background border" },
  { name: "Foreground", cls: "bg-foreground" },
  { name: "Primary", cls: "bg-primary" },
  { name: "Secondary", cls: "bg-secondary" },
  { name: "Muted", cls: "bg-muted" },
  { name: "Accent", cls: "bg-accent" },
  { name: "Border", cls: "bg-border" },
];

const portalSwatches = [
  { name: "Hero / Dark", cls: "bg-wlyl-hero" },
  { name: "Teacher accent", cls: "bg-wlyl-teacher" },
  { name: "Student accent", cls: "bg-wlyl-student" },
  { name: "Parent accent", cls: "bg-wlyl-parent" },
];

const type = [
  { label: "Display", cls: "text-6xl font-semibold tracking-tight" },
  { label: "H1", cls: "text-5xl font-semibold tracking-tight" },
  { label: "H2", cls: "text-4xl font-semibold tracking-tight" },
  { label: "H3", cls: "text-2xl font-semibold tracking-tight" },
  { label: "H4", cls: "text-xl font-semibold" },
  { label: "Body large", cls: "text-lg" },
  { label: "Body", cls: "text-base" },
  { label: "Small", cls: "text-sm text-muted-foreground" },
  { label: "Micro / label", cls: "text-xs uppercase tracking-wider text-muted-foreground" },
];

const spacing = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32];

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-20">
      <header className="space-y-2">
        <Badge variant="secondary">Internal review — not linked in nav</Badge>
        <h1 className="text-4xl font-semibold tracking-tight">Design system</h1>
        <p className="text-muted-foreground max-w-2xl">
          Color palette, typography scale, spacing, and core components for the
          WeLearnYouLearn marketing site. Reused across every page — nothing is
          restyled per-page.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Color — core</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {colorSwatches.map((c) => (
            <div key={c.name} className="space-y-2">
              <div className={`h-16 rounded-lg ${c.cls}`} />
              <p className="text-sm text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Color — brand / portal accents</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Carried over from the live product&apos;s visual language. Hero/Dark is
          used sparingly for high-impact sections (homepage hero, investor page).
          Portal accents identify Teacher / Student / Parent contexts on the
          Product page only.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {portalSwatches.map((c) => (
            <div key={c.name} className="space-y-2">
              <div className={`h-16 rounded-lg ${c.cls}`} />
              <p className="text-sm text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Typography</h2>
        <div className="space-y-4">
          {type.map((t) => (
            <div key={t.label} className="flex items-baseline gap-6 border-b pb-4">
              <span className="w-32 shrink-0 text-xs text-muted-foreground uppercase tracking-wider">
                {t.label}
              </span>
              <span className={t.cls}>WeLearnYouLearn</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spacing scale</h2>
        <div className="space-y-2">
          {spacing.map((s) => (
            <div key={s} className="flex items-center gap-4">
              <span className="w-10 text-xs text-muted-foreground font-mono">{s}</span>
              <div className="bg-primary h-3 rounded" style={{ width: `${s * 4}px` }} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="lg">Large</Button>
          <Button size="sm">Small</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Card</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Feature card</CardTitle>
              <CardDescription>A short supporting description line.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Body content area for feature detail or pricing detail.
            </CardContent>
          </Card>
          <Card className="border-primary/30 bg-accent/40">
            <CardHeader>
              <CardTitle>Highlighted card</CardTitle>
              <CardDescription>Used for &quot;most popular&quot; tiers.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Slightly tinted background, tinted border.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Radius &amp; shadow</h2>
        <div className="flex gap-4">
          <div className="size-20 rounded-lg bg-secondary shadow-sm flex items-center justify-center text-xs">sm</div>
          <div className="size-20 rounded-xl bg-secondary shadow-md flex items-center justify-center text-xs">md</div>
          <div className="size-20 rounded-2xl bg-secondary shadow-lg flex items-center justify-center text-xs">lg</div>
        </div>
      </section>
    </main>
  );
}
