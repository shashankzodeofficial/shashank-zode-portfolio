import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ExpertiseArea } from "@/types";

export function ExpertiseCard({
  area,
  className,
}: {
  area: ExpertiseArea;
  className?: string;
}) {
  const Icon = area.icon;

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
      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="text-base font-semibold tracking-tight">{area.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {area.description}
        </p>
      </div>
      <div className="border-border flex items-start gap-2 border-t pt-4">
        <ArrowUpRight className="text-gold mt-0.5 size-3.5 shrink-0" aria-hidden />
        <p className="text-foreground text-xs leading-relaxed font-medium">
          {area.impact}
        </p>
      </div>
    </div>
  );
}
