import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/**
 * Generic content card used as the base pattern for future project,
 * knowledge-hub, and leadership cards — kept intentionally content-agnostic.
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group border-border bg-card shadow-subtle ease-out-quart hover:shadow-panel relative flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-10 items-center justify-center rounded-xl transition-colors">
        <Icon className="size-5" aria-hidden />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
