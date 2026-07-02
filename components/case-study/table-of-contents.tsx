"use client";

import Link from "next/link";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const ids = items.map((item) => item.id);
  const activeId = useActiveSection(ids);

  return (
    <nav
      aria-label="Case study sections"
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
    >
      {items.map((item) => {
        const active = activeId === item.id;
        return (
          <Link
            key={item.id}
            href={`#${item.id}`}
            aria-current={active ? "location" : undefined}
            className="group flex items-center gap-2"
          >
            <span
              className={cn(
                "border-border bg-card shadow-subtle rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                active && "text-brand opacity-100",
              )}
            >
              {item.label}
            </span>
            <span
              className={cn(
                "size-2 rounded-full transition-all duration-200",
                active
                  ? "bg-brand scale-125"
                  : "bg-border group-hover:bg-muted-foreground",
              )}
              aria-hidden
            />
          </Link>
        );
      })}
    </nav>
  );
}
