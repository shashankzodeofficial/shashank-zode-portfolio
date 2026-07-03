import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import { executiveQuotes } from "@/content/thought-leadership/quotes";

export function ExecutiveQuotesShowcase({ limit }: { limit?: number }) {
  const quotes = limit ? executiveQuotes.slice(0, limit) : executiveQuotes;

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        {limit ? (
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="flex flex-col gap-2">
              <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
                Executive Quotes
              </span>
              <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
                Principles worth quoting
              </h2>
            </div>
            <Link
              href="/thought-leadership/quotes"
              className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
            >
              View the full quotes library
              <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((item) => (
            <figure
              key={item.quote}
              className="border-border bg-card shadow-subtle flex flex-col gap-4 rounded-2xl border p-6"
            >
              <Quote className="text-brand size-6" aria-hidden strokeWidth={1.5} />
              <blockquote className="text-foreground text-sm leading-relaxed font-medium text-balance">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="text-muted-foreground mt-auto text-xs font-semibold tracking-wide uppercase">
                {item.theme}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
