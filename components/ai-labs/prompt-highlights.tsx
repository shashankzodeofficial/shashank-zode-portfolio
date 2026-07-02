import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { prompts } from "@/content/ai-labs/prompts";

export function PromptHighlights() {
  const preview = prompts.slice(0, 3);

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
              Prompt Engineering Library
            </span>
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              Copy-ready prompts, built from real operating work
            </h2>
          </div>
          <Link
            href="/ai-labs/prompts"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            Browse the full library
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <form action="/ai-labs/prompts" method="GET" className="relative max-w-xl">
          <Search
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2"
            aria-hidden
          />
          <input
            type="search"
            name="q"
            placeholder="Search prompts by title, category, or tag…"
            aria-label="Search prompt library"
            className="border-border bg-card focus-visible:outline-brand w-full rounded-full border py-3 pr-4 pl-11 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
          />
        </form>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {preview.map((prompt) => (
            <Link
              key={prompt.slug}
              href="/ai-labs/prompts"
              className="group border-border bg-card shadow-subtle hover:shadow-panel flex flex-col gap-3 rounded-2xl border p-6 transition-shadow"
            >
              <Badge variant="brand" className="w-fit">
                {prompt.category}
              </Badge>
              <h3 className="text-sm font-semibold tracking-tight">{prompt.title}</h3>
              <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
                {prompt.businessObjective}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
