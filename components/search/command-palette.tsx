"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";
import { ArrowRight, CornerDownLeft, Search, Sparkles, X } from "lucide-react";

import { getRecommendationsForPath, searchIndex } from "@/content/search/index";
import { useSearchPalette } from "@/components/search/search-provider";
import { useRecentlyViewed } from "@/hooks/use-recently-viewed";
import { cn } from "@/lib/utils";
import type { SearchRecord } from "@/types/search";

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "tags", weight: 0.3 },
    { name: "description", weight: 0.2 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

export function CommandPalette() {
  const { open, setOpen } = useSearchPalette();
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);

  const recentlyViewed = useRecentlyViewed(5, open);
  const recommendations = React.useMemo(
    () => getRecommendationsForPath(pathname, 4),
    [pathname],
  );

  const results: SearchRecord[] = React.useMemo(() => {
    if (query.trim().length < 2) return [];
    return fuse.search(query.trim()).slice(0, 20).map((r) => r.item);
  }, [query]);

  const showingResults = query.trim().length >= 2;

  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      const id = window.setTimeout(() => inputRef.current?.focus(), 10);
      return () => window.clearTimeout(id);
    }
    return undefined;
  }, [open]);

  const navigate = React.useCallback(
    (url: string) => {
      setOpen(false);
      router.push(url);
    },
    [router, setOpen],
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showingResults || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const active = results[activeIndex];
      if (active) navigate(active.url);
    }
  };

  React.useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector(`[data-index="${activeIndex}"]`);
    activeEl?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Search the site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="bg-primary/60 fixed inset-0 z-100 flex items-start justify-center p-4 pt-[10vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="border-border bg-card shadow-elevated flex w-full max-w-xl flex-col overflow-hidden rounded-2xl border"
          >
            <div className="border-border flex items-center gap-3 border-b px-4 py-3">
              <Search className="text-muted-foreground size-4 shrink-0" aria-hidden />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search articles, projects, prompts, frameworks…"
                aria-label="Search the site"
                aria-autocomplete="list"
                role="combobox"
                aria-expanded={showingResults}
                aria-controls="command-palette-results"
                autoComplete="off"
                spellCheck={false}
                className="text-foreground placeholder:text-muted-foreground flex-1 bg-transparent text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-6 shrink-0 items-center justify-center rounded-full transition-colors"
              >
                <X className="size-3.5" aria-hidden />
              </button>
            </div>

            <div id="command-palette-results" ref={listRef} className="max-h-[60vh] overflow-y-auto p-2">
              {showingResults ? (
                results.length > 0 ? (
                  <ResultsList
                    results={results}
                    activeIndex={activeIndex}
                    onHover={setActiveIndex}
                    onSelect={navigate}
                  />
                ) : (
                  <p className="text-muted-foreground px-3 py-8 text-center text-sm">
                    No results for &ldquo;{query}&rdquo;.
                  </p>
                )
              ) : (
                <div className="flex flex-col gap-4 py-1">
                  {recentlyViewed.length > 0 ? (
                    <PaletteGroup label="Recently Viewed" records={recentlyViewed} onSelect={navigate} />
                  ) : null}
                  {recommendations.length > 0 ? (
                    <PaletteGroup
                      label="Recommended For You"
                      icon={Sparkles}
                      records={recommendations}
                      onSelect={navigate}
                    />
                  ) : null}
                  {recentlyViewed.length === 0 && recommendations.length === 0 ? (
                    <p className="text-muted-foreground px-3 py-8 text-center text-sm">
                      Start typing to search the entire site.
                    </p>
                  ) : null}
                </div>
              )}
            </div>

            <div className="border-border bg-surface text-muted-foreground flex items-center justify-between border-t px-4 py-2.5 text-xs">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="border-border bg-card rounded border px-1.5 py-0.5 font-sans text-[0.7rem]">↑</kbd>
                  <kbd className="border-border bg-card rounded border px-1.5 py-0.5 font-sans text-[0.7rem]">↓</kbd>
                  Navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="border-border bg-card flex items-center rounded border px-1.5 py-0.5 font-sans text-[0.7rem]">
                    <CornerDownLeft className="size-3" aria-hidden />
                  </kbd>
                  Select
                </span>
              </div>
              {showingResults && results.length > 0 ? (
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  onClick={() => setOpen(false)}
                  className="text-brand inline-flex items-center gap-1 font-medium"
                >
                  View all results
                  <ArrowRight className="size-3" aria-hidden />
                </Link>
              ) : (
                <span>esc to close</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function PaletteGroup({
  label,
  records,
  onSelect,
  icon: Icon,
}: {
  label: string;
  records: SearchRecord[];
  onSelect: (url: string) => void;
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground flex items-center gap-1.5 px-3 text-[0.7rem] font-semibold tracking-wide uppercase">
        {Icon ? <Icon className="size-3" aria-hidden /> : null}
        {label}
      </span>
      {records.map((record) => (
        <ResultRow key={record.id} record={record} active={false} onClick={() => onSelect(record.url)} />
      ))}
    </div>
  );
}

function ResultsList({
  results,
  activeIndex,
  onHover,
  onSelect,
}: {
  results: SearchRecord[];
  activeIndex: number;
  onHover: (index: number) => void;
  onSelect: (url: string) => void;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      {results.map((record, i) => (
        <div key={record.id} data-index={i}>
          <ResultRow
            record={record}
            active={i === activeIndex}
            onMouseEnter={() => onHover(i)}
            onClick={() => onSelect(record.url)}
          />
        </div>
      ))}
    </div>
  );
}

function ResultRow({
  record,
  active,
  onClick,
  onMouseEnter,
}: {
  record: SearchRecord;
  active: boolean;
  onClick: () => void;
  onMouseEnter?: () => void;
}) {
  const Icon = record.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
        active ? "bg-brand-muted" : "hover:bg-muted",
      )}
    >
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-lg",
          active ? "bg-brand text-brand-foreground" : "bg-muted text-muted-foreground",
        )}
      >
        <Icon className="size-4" aria-hidden />
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-foreground truncate text-sm font-medium">{record.title}</span>
        <span className="text-muted-foreground truncate text-xs">{record.description}</span>
      </div>
      <span className="border-border bg-surface text-muted-foreground shrink-0 rounded-full border px-2 py-0.5 text-[0.65rem] font-medium">
        {record.type}
      </span>
    </button>
  );
}
