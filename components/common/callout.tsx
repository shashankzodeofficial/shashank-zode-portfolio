import { Info, Lightbulb, TriangleAlert } from "lucide-react";

import { cn } from "@/lib/utils";

const icons = {
  info: Info,
  idea: Lightbulb,
  warning: TriangleAlert,
} as const;

interface CalloutProps extends React.ComponentProps<"div"> {
  variant?: keyof typeof icons;
  title?: string;
}

export function Callout({
  variant = "info",
  title,
  className,
  children,
  ...props
}: CalloutProps) {
  const Icon = icons[variant];

  return (
    <div
      className={cn(
        "border-border bg-surface flex gap-3 rounded-xl border px-4 py-3.5",
        variant === "idea" && "border-gold/25 bg-gold/8",
        variant === "warning" && "border-destructive/25 bg-destructive/5",
        className,
      )}
      {...props}
    >
      <Icon className="text-brand mt-0.5 size-4 shrink-0" aria-hidden />
      <div className="flex flex-col gap-1 text-sm">
        {title ? <p className="text-foreground font-medium">{title}</p> : null}
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
