"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/investors", label: "For Investors" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          WeLearn<span className="text-primary">You</span>Learn
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 py-2 text-sm rounded-md transition-colors ${
                  active
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-px scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" render={<Link href="/contact" />}>
            Contact
          </Button>
          <Button render={<Link href="/contact?intent=demo" />}>
            Request a demo
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "md:hidden"
            )}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button
                  variant="outline"
                  render={
                    <Link href="/contact" onClick={() => setOpen(false)} />
                  }
                >
                  Contact
                </Button>
                <Button
                  render={
                    <Link
                      href="/contact?intent=demo"
                      onClick={() => setOpen(false)}
                    />
                  }
                >
                  Request a demo
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
