import { ArrowRight, ShieldCheck, TriangleAlert } from "lucide-react";

import type { ChallengeMitigation } from "@/types/project";

export function ChallengesMitigation({ items }: { items: ChallengeMitigation[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div
          key={item.challenge}
          className="border-border bg-card shadow-subtle grid grid-cols-1 gap-4 rounded-2xl border p-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6"
        >
          <div className="flex gap-3">
            <TriangleAlert
              className="text-destructive mt-0.5 size-4 shrink-0"
              aria-hidden
            />
            <p className="text-foreground text-sm leading-relaxed">{item.challenge}</p>
          </div>
          <ArrowRight
            className="text-muted-foreground hidden size-4 shrink-0 lg:block"
            aria-hidden
          />
          <div className="flex gap-3">
            <ShieldCheck className="text-brand mt-0.5 size-4 shrink-0" aria-hidden />
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.mitigation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
