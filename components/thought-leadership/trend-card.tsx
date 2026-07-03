import { CheckCircle2, Compass } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { FutureTrend } from "@/types/thought-leadership";

export function TrendCard({ trend }: { trend: FutureTrend }) {
  const Icon = trend.icon;

  return (
    <div className="border-border bg-card shadow-panel flex flex-col gap-5 rounded-2xl border p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="bg-brand-muted text-brand flex size-11 shrink-0 items-center justify-center rounded-xl">
          <Icon className="size-5" aria-hidden />
        </span>
        <div className="flex flex-col gap-1.5">
          <Badge variant="outline" className="w-fit">
            {trend.category}
          </Badge>
          <h3 className="text-lg font-semibold tracking-tight">{trend.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {trend.executiveSummary}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-wide uppercase">
          Business Implications
        </span>
        <ul className="flex flex-col gap-1.5">
          {trend.businessImplications.map((implication) => (
            <li key={implication} className="text-muted-foreground flex gap-2 text-sm">
              <CheckCircle2 className="text-brand mt-0.5 size-4 shrink-0" aria-hidden />
              {implication}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-gold/25 bg-gold/8 flex flex-col gap-1.5 rounded-xl border p-4">
        <p className="text-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
          <Compass className="size-3.5" aria-hidden />
          Future Outlook
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">{trend.futureOutlook}</p>
      </div>
    </div>
  );
}
