import Link from "next/link";
import {
  Bot,
  Brain,
  Compass,
  Cpu,
  Gauge,
  Handshake,
  Lightbulb,
  LineChart,
  Network,
  RefreshCw,
  Target,
  Users,
  Wand2,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

import { getCategoryCounts } from "@/content/knowledge/articles";
import type { KnowledgeCategory } from "@/types/knowledge";

const categoryIcons: Record<KnowledgeCategory, LucideIcon> = {
  "Supply Chain": Network,
  "Warehouse Operations": Warehouse,
  "Inventory Management": Gauge,
  "Planning & Forecasting": LineChart,
  Logistics: Network,
  Leadership: Users,
  AI: Brain,
  Automation: Bot,
  Analytics: LineChart,
  "Digital Transformation": Cpu,
  "Operations Excellence": Target,
  "Prompt Engineering": Wand2,
  "Executive Leadership": Compass,
  "Supply Chain Strategy": Network,
  "AI Leadership": Brain,
  "Business Transformation": Cpu,
  "Customer Experience": Handshake,
  Innovation: Lightbulb,
  "Digital Strategy": Cpu,
  "Organizational Change": RefreshCw,
  "Continuous Improvement": RefreshCw,
};

export function CategoryCards() {
  const categories = getCategoryCounts();

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map(({ category, count }) => {
            const Icon = categoryIcons[category];
            return (
              <Link
                key={category}
                href={`/knowledge?category=${encodeURIComponent(category)}#library`}
                className="group border-border bg-card shadow-subtle hover:shadow-panel hover:border-brand/30 flex flex-col gap-3 rounded-2xl border p-5 transition-all duration-300 ease-out-quart"
              >
                <span className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-9 items-center justify-center rounded-xl transition-colors">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold tracking-tight">{category}</span>
                  <span className="text-muted-foreground text-xs">
                    {count} {count === 1 ? "article" : "articles"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
