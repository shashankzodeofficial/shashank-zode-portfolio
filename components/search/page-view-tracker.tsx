"use client";

import { useTrackPageView } from "@/hooks/use-recently-viewed";

/** Renders nothing — mounted once globally to record page visits for "Recently Viewed". */
export function PageViewTracker() {
  useTrackPageView();
  return null;
}
