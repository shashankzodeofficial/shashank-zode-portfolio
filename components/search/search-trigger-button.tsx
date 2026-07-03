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

export function SearchTriggerButton({ className }: { className?: string }) {
  const { setOpen } = useSearchPalette();
  const isMac = useIsMac();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Search the site"
      className={cn(
        "border-border bg-surface text-muted-foreground hover:border-brand/30 hover:text-foreground focus-visible:outline-brand hidden items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex",
        className,
      )}
    >
      <Search className="size-3.5" aria-hidden />
      <span>Search</span>
      <kbd className="border-border bg-card ml-1 rounded border px-1.5 py-0.5 font-sans text-[0.65rem]">
        {isMac ? "⌘K" : "Ctrl K"}
      </kbd>
    </button>
  );
}

export function SearchTriggerIconButton({ className }: { className?: string }) {
  const { setOpen } = useSearchPalette();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Search the site"
      className={cn(
        "border-border bg-surface text-muted-foreground hover:text-foreground focus-visible:outline-brand flex size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:hidden",
        className,
      )}
    >
      <Search className="size-4" aria-hidden />
    </button>
  );
}
