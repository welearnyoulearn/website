import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { href: "/product", label: "Product overview" },
  { href: "/features", label: "All features" },
  { href: "/features/syllabus-tracking", label: "Syllabus tracking" },
  { href: "/pricing", label: "Pricing" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/investors", label: "For investors" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3">
            <Image
              src="/logos/WLYL_website_logo_transparent.png"
              alt="WeLearnYouLearn"
              width={520}
              height={155}
              className="h-14 w-auto"
            />
            <p className="max-w-sm text-sm text-muted-foreground">
              One platform for school admins, teachers, students and parents.
              Built for CBSE and State Board schools across India.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WeLearnYouLearn. Built for Indian
            schools.
          </p>
        </div>
      </div>
    </footer>
  );
}
