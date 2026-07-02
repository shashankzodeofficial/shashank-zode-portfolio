import { CheckCircle2, Download } from "lucide-react";

import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { Badge } from "@/components/ui/badge";
import type { Framework } from "@/types/knowledge";

export function FrameworkCard({ framework }: { framework: Framework }) {
  const Icon = framework.icon;

  return (
    <div className="border-border bg-card shadow-panel flex flex-col gap-6 rounded-2xl border p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <span className="bg-brand-muted text-brand flex size-11 shrink-0 items-center justify-center rounded-xl">
            <Icon className="size-5" aria-hidden />
          </span>
          <div className="flex flex-col gap-1.5">
            <Badge variant="brand" className="w-fit">
              {framework.category}
            </Badge>
            <h3 className="text-lg font-semibold tracking-tight">{framework.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{framework.description}</p>
          </div>
        </div>

        <button
          type="button"
          disabled
          className="border-border bg-surface text-muted-foreground inline-flex shrink-0 items-center gap-2 self-start rounded-full border px-4 py-2 text-xs font-medium disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Download className="size-3.5" aria-hidden />
          Download — Coming Soon
        </button>
      </div>

      <p className="text-muted-foreground text-xs">
        <span className="text-foreground font-semibold">When to use: </span>
        {framework.whenToUse}
      </p>

      <ArchitectureDiagram diagram={framework.steps} />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-wide uppercase">Outcomes</span>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {framework.outcomes.map((outcome) => (
            <li key={outcome} className="text-muted-foreground flex gap-2 text-sm">
              <CheckCircle2 className="text-brand mt-0.5 size-4 shrink-0" aria-hidden />
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
