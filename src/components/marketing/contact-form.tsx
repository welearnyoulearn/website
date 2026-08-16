"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

const intentLabels: Record<string, string> = {
  demo: "Request a demo",
  pricing: "Pricing question",
  general: "General inquiry",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialIntent = searchParams.get("intent") ?? "general";
  const [intent, setIntent] = useState(
    initialIntent in intentLabels ? initialIntent : "general"
  );
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ENDPOINT) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border bg-card p-8 text-center">
        <p className="font-medium">Message sent — thank you.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-school">School / organization</Label>
          <Input id="c-school" name="school" autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-email">Email</Label>
          <Input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-phone">Phone (optional)</Label>
          <Input id="c-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-reason">What&rsquo;s this about?</Label>
        <input type="hidden" name="intent" value={intent} />
        <Select
          value={intent}
          onValueChange={(value) => setIntent(value ?? "general")}
        >
          <SelectTrigger id="c-reason" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(intentLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-message">Message</Label>
        <Textarea id="c-message" name="message" rows={5} required />
      </div>

      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-destructive" aria-live="polite">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
