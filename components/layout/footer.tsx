import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";

import { LinkedinIcon } from "@/components/common/icons";
import { navItems, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="container-executive flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-sm flex-col gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full">
                SZ
              </span>
              {siteConfig.name}
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.role} — building future-ready supply chains through leadership,
              technology, and AI.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-border flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
          <p className="text-muted-foreground text-xs">
            © {year} {siteConfig.name} · {siteConfig.location}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="size-4" aria-hidden />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs transition-colors"
            >
              Back to top <ArrowUp className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
