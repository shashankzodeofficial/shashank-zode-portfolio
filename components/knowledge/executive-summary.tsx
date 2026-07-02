import { BookOpen, Target, Users, Zap } from "lucide-react";

interface ExecutiveSummaryProps {
  overview: string;
  whyItMatters: string;
  whoShouldRead: string;
  keyTakeaway: string;
}

const rows = [
  { key: "overview", icon: BookOpen, label: "What This Covers" },
  { key: "whyItMatters", icon: Zap, label: "Why It Matters" },
  { key: "whoShouldRead", icon: Users, label: "Who Should Read This" },
  { key: "keyTakeaway", icon: Target, label: "Key Takeaway" },
] as const;

export function ExecutiveSummary(props: ExecutiveSummaryProps) {
  return (
    <div className="border-border bg-card shadow-panel grid grid-cols-1 gap-6 rounded-2xl border p-6 sm:grid-cols-2 sm:p-8">
      {rows.map(({ key, icon: Icon, label }) => (
        <div key={key} className="flex flex-col gap-2">
          <div className="text-brand flex items-center gap-2">
            <Icon className="size-4" aria-hidden />
            <span className="text-xs font-semibold tracking-wide uppercase">{label}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{props[key]}</p>
        </div>
      ))}
    </div>
  );
}
