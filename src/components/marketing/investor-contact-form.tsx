"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ENDPOINT = process.env.NEXT_PUBLIC_INVESTOR_FORM_ENDPOINT;

export function InvestorContactForm() {
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
        <p className="font-medium">Thanks — we&apos;ll be in touch.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We typically respond within a couple of business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inv-name">Name</Label>
          <Input id="inv-name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inv-firm">Firm / fund</Label>
          <Input id="inv-firm" name="firm" autoComplete="organization" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="inv-email">Email</Label>
        <Input
          id="inv-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          spellCheck={false}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="inv-message">What are you interested in?</Label>
        <Textarea
          id="inv-message"
          name="message"
          rows={4}
          placeholder="e.g. requesting the deck, a product walkthrough, or a call…"
        />
      </div>
      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending…" : "Request deck / walkthrough"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-destructive" aria-live="polite">
          Something went wrong. Please email us directly instead.
        </p>
      )}
    </form>
  );
}
