import { cn } from "@/lib/utils";
import type { CareerMilestone } from "@/types";

export function MilestoneCard({
  milestone,
  className,
}: {
  milestone: CareerMilestone;
  className?: string;
}) {
  const Icon = milestone.icon;

  return (
    <div
      className={cn(
        "group border-border bg-card shadow-subtle hover:shadow-panel ease-out-quart flex h-full flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-10 items-center justify-center rounded-xl transition-colors">
        <Icon className="size-5" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="text-base font-semibold tracking-tight">{milestone.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {milestone.achievement}
        </p>
        <p className="text-foreground text-xs leading-relaxed">
          {milestone.significance}
        </p>
      </div>
      <div className="border-border border-t pt-4">
        <p className="text-foreground text-xs leading-relaxed font-medium">
          Lesson:{" "}
          <span className="text-muted-foreground font-normal">{milestone.lesson}</span>
        </p>
      </div>
    </div>
  );
}
