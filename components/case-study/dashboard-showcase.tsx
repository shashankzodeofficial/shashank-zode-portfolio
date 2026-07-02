import { LayoutDashboard } from "lucide-react";

const barHeights = [40, 65, 50, 85, 60, 95, 45, 70];

export function DashboardShowcase({ highlights }: { highlights: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_18rem]">
      <div className="glass-panel border-border shadow-elevated flex flex-col gap-5 rounded-2xl border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-brand size-4" aria-hidden />
            <span className="text-xs font-semibold tracking-wide uppercase">
              Dashboard Concept
            </span>
          </div>
          <div className="flex gap-1.5" aria-hidden>
            <span className="bg-border size-2 rounded-full" />
            <span className="bg-border size-2 rounded-full" />
            <span className="bg-brand size-2 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-border bg-surface rounded-xl border p-3">
              <div className="bg-muted mb-2 h-2 w-3/5 rounded-full" aria-hidden />
              <div className="bg-brand/70 h-4 w-2/5 rounded" aria-hidden />
            </div>
          ))}
        </div>

        <div className="border-border bg-surface flex h-32 items-end gap-2 rounded-xl border p-4">
          {barHeights.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="bg-brand/60 flex-1 rounded-t"
              aria-hidden
            />
          ))}
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed"
          >
            <span className="bg-brand mt-2 size-1 shrink-0 rounded-full" aria-hidden />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
