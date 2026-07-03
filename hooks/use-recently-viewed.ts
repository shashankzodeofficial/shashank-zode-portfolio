"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { searchIndex } from "@/content/search/index";
import type { SearchRecord } from "@/types/search";

const STORAGE_KEY = "sz-recently-viewed";
const MAX_ENTRIES = 8;

/** Pages that aren't meaningful "recently viewed" content on their own. */
const EXCLUDED_PATHS = new Set(["/", "/search"]);

function readStoredUrls(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/** Mounted once, globally — records the current route into recently-viewed history. */
export function useTrackPageView() {
  const pathname = usePathname();

  React.useEffect(() => {
    if (!pathname || EXCLUDED_PATHS.has(pathname)) return;
    const existing = readStoredUrls().filter((url) => url !== pathname);
    const next = [pathname, ...existing].slice(0, MAX_ENTRIES);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // localStorage can fail in private browsing — recently-viewed is a nice-to-have, not critical.
    }
  }, [pathname]);
}

/**
 * Resolves stored URLs back into full search records for display.
 * Accepts a `refreshKey` (e.g. the command palette's `open` state) so callers
 * that stay mounted across open/close cycles still pick up localStorage writes
 * from navigation that happened while they were closed.
 */
export function useRecentlyViewed(limit = 5, refreshKey?: unknown): SearchRecord[] {
  const pathname = usePathname();
  const [records, setRecords] = React.useState<SearchRecord[]>([]);

  React.useEffect(() => {
    const urls = readStoredUrls().filter((url) => url !== pathname);
    const resolved = urls
      .map((url) => searchIndex.find((record) => record.url === url))
      .filter((record): record is SearchRecord => Boolean(record))
      .slice(0, limit);
    setRecords(resolved);
  }, [limit, refreshKey, pathname]);

  return records;
}
