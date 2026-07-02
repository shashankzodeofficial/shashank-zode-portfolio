import type { ImplementationPhase } from "@/types/project";

export function ImplementationTimeline({ phases }: { phases: ImplementationPhase[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {phases.map((phase, i) => (
        <div
          key={phase.phase}
          className="border-border bg-card shadow-subtle relative flex flex-col gap-2 rounded-2xl border p-5"
        >
          <span className="text-brand text-xs font-semibold tracking-wide uppercase">
            {String(i + 1).padStart(2, "0")} · {phase.phase}
          </span>
          <h3 className="text-sm font-semibold tracking-tight">{phase.title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">
            {phase.description}
          </p>
        </div>
      ))}
    </div>
  );
}
