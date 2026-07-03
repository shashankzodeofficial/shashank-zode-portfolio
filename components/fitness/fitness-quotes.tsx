import { Quote } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { fitnessQuotes } from "@/content/fitness/quotes";

export function FitnessQuotesShowcase() {
  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader eyebrow="Reflections" title="What the discipline taught me" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fitnessQuotes.map((item) => (
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
