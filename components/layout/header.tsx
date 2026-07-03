"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileMenu } from "@/components/navigation/mobile-menu";
import { NavLink } from "@/components/navigation/nav-link";
import { ScrollProgress } from "@/components/navigation/scroll-progress";
import { SearchTriggerButton } from "@/components/search/search-trigger-button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { navItems, sectionAnchors, siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const activeSectionId = useActiveSection(sectionAnchors);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const primaryItems = navItems.filter((item) => item.label !== "Contact");
  const contactItem = navItems.find((item) => item.label === "Contact");

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeSectionId === href.slice(2);
    }
    if (href === "/") {
      return pathname === "/" && activeSectionId === "top";
    }
    if (href.endsWith(".pdf")) return false;
    const [hrefPath] = href.split("#");
    return pathname === hrefPath;
  };

  return (
    <header
      className={cn(
        "ease-out-quart relative sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass-panel border-border shadow-subtle border-b"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-executive flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full">
            SZ
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {primaryItems.map((item) => (
            <NavLink key={item.href} item={item} active={isActive(item.href)} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <SearchTriggerButton />
          <ThemeToggle />
          {contactItem ? (
            <>
              <span aria-hidden className="bg-border mx-1 h-5 w-px" />
              <Button
                variant="brand"
                size="sm"
                render={<Link href={contactItem.href}>Let&apos;s talk</Link>}
              />
            </>
          ) : null}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <SearchTriggerButton />
          <MobileMenu items={navItems} />
        </div>
      </div>

      <ScrollProgress />
    </header>
  );
}
