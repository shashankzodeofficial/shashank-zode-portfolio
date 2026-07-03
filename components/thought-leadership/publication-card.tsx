import { Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Publication } from "@/types/thought-leadership";

export function PublicationCard({ publication }: { publication: Publication }) {
  const Icon = publication.icon;
  const statusLabel = publication.status === "in-progress" ? "In Progress" : "Planned";

  return (
    <div className="border-border bg-card shadow-subtle flex flex-col gap-4 rounded-2xl border p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="bg-brand-muted text-brand flex size-10 shrink-0 items-center justify-center rounded-xl">
          <Icon className="size-5" aria-hidden />
        </span>
        <Badge variant="outline" className="shrink-0 text-[0.65rem]">
          {statusLabel}
        </Badge>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-brand text-xs font-semibold tracking-wide uppercase">
          {publication.category}
        </span>
        <h3 className="text-sm font-semibold tracking-tight">{publication.title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {publication.description}
        </p>
      </div>
      <button
        type="button"
        disabled
        className="border-border bg-surface text-muted-foreground mt-auto inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Lock className="size-3.5" aria-hidden />
        Download — Coming Soon
      </button>
    </div>
  );
}
