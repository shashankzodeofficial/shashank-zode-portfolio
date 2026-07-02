import Link from "next/link";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

import type { CaseStudy } from "@/types/project";

export function CaseStudyNav({
  previous,
  next,
}: {
  previous: CaseStudy | null;
  next: CaseStudy | null;
}) {
  return (
    <nav
      aria-label="Case study navigation"
      className="border-border grid grid-cols-1 gap-4 border-t pt-10 sm:grid-cols-3"
    >
      {previous ? (
        <Link
          href={`/projects/${previous.slug}`}
          className="border-border bg-card shadow-subtle hover:shadow-panel flex flex-col gap-1.5 rounded-2xl border p-5 transition-shadow"
        >
          <span className="text-muted-foreground inline-flex items-center gap-1.5 text-xs font-medium">
            <ArrowLeft className="size-3.5" aria-hidden />
            Previous
          </span>
          <span className="text-sm font-semibold tracking-tight">{previous.title}</span>
        </Link>
      ) : (
        <div />
      )}

      <Link
        href="/projects"
        className="border-border bg-surface hover:bg-muted flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-5 text-center transition-colors"
      >
        <LayoutGrid className="text-brand size-4" aria-hidden />
        <span className="text-sm font-semibold tracking-tight">All Projects</span>
      </Link>

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="border-border bg-card shadow-subtle hover:shadow-panel flex flex-col items-end gap-1.5 rounded-2xl border p-5 text-right transition-shadow"
        >
          <span className="text-muted-foreground inline-flex items-center gap-1.5 text-xs font-medium">
            Next
            <ArrowRight className="size-3.5" aria-hidden />
          </span>
          <span className="text-sm font-semibold tracking-tight">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
