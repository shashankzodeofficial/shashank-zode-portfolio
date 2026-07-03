"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { useSearchPalette } from "@/components/search/search-provider";
import { cn } from "@/lib/utils";

function useIsMac() {
  const [isMac, setIsMac] = React.useState(false);
  React.useEffect(() => {
    setIsMac(/Mac|iPhone|iPod|iPad/.test(window.navigator.userAgent));
  }, []);
  return isMac;
}

/**
 * Compact, icon-only search trigger — used at every breakpoint so it sits
 * quietly alongside the theme toggle instead of competing with nav links or
 * the primary CTA. The keyboard shortcut still works globally; it's surfaced
 * here only as a native tooltip, not as inline text.
 */
export function SearchTriggerButton({ className }: { className?: string }) {
  const { setOpen } = useSearchPalette();
  const isMac = useIsMac();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Search the site"
      title={`Search (${isMac ? "⌘K" : "Ctrl K"})`}
      className={cn(
        "border-border bg-secondary/60 text-foreground hover:bg-secondary focus-visible:outline-brand inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      )}
    >
      <Search className="size-4" aria-hidden />
    </button>
  );
}
