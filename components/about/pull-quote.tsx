import { Quote } from "lucide-react";

export function PullQuote({ quote }: { quote: string }) {
  return (
    <blockquote className="border-border relative border-y py-10">
      <div className="container-executive flex flex-col items-center gap-4 text-center">
        <Quote className="text-brand size-8" aria-hidden strokeWidth={1.5} />
        <p className="text-title leading-[var(--text-title--line-height)] font-semibold tracking-[var(--text-title--letter-spacing)] text-balance">
          {quote}
        </p>
        <cite className="text-muted-foreground text-sm font-medium not-italic">
          — Shashank Zode
        </cite>
      </div>
    </blockquote>
  );
}
