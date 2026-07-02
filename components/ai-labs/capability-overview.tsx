import Link from "next/link";
import {
  Bot,
  FileSearch,
  FlaskConical,
  LayoutDashboard,
  MapPinned,
  MessageSquareCode,
  Rocket,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

interface Capability {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    href: "/ai-labs/projects",
    icon: Rocket,
    title: "AI Projects Portfolio",
    description: "Five live AI platforms, each with a working demo.",
  },
  {
    href: "/ai-labs/experiments",
    icon: FlaskConical,
    title: "AI Experiments",
    description: "Real business problems approached with AI.",
  },
  {
    href: "/ai-labs/prompts",
    icon: Wand2,
    title: "Prompt Library",
    description: "Searchable, copy-ready prompts across 14 categories.",
  },
  {
    href: "/ai-labs/agents",
    icon: Bot,
    title: "AI Agents",
    description: "Reference architectures for autonomous workflows.",
  },
  {
    href: "/ai-labs/automation",
    icon: Workflow,
    title: "Automation Projects",
    description: "Real workflow and reporting automation, with KPIs.",
  },
  {
    href: "/ai-labs/rag",
    icon: FileSearch,
    title: "Retrieval-Augmented Generation",
    description: "How grounded, cited enterprise AI assistants work.",
  },
  {
    href: "/ai-labs/architecture",
    icon: LayoutDashboard,
    title: "AI Architecture Library",
    description: "Diagrams for LLM, agent, and enterprise AI systems.",
  },
  {
    href: "/ai-labs/llm-applications",
    icon: MessageSquareCode,
    title: "LLM Applications",
    description: "Where large language models create business value.",
  },
  {
    href: "/ai-labs/roadmap",
    icon: MapPinned,
    title: "AI Roadmap",
    description: "From AI-assisted operations to executive copilots.",
  },
  {
    href: "/ai-labs/demos",
    icon: Wand2,
    title: "Interactive Demos",
    description: "Try the prompt playground with simulated responses.",
  },
];

export function CapabilityOverview() {
  return (
    <section id="capabilities" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
          Explore the AI Innovation Center
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {capabilities.map(({ href, icon: Icon, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group border-border bg-card shadow-subtle hover:shadow-panel hover:border-brand/30 flex flex-col gap-3 rounded-2xl border p-5 transition-all duration-300 ease-out-quart"
            >
              <span className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-9 items-center justify-center rounded-xl transition-colors">
                <Icon className="size-4" aria-hidden />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold tracking-tight">{title}</span>
                <span className="text-muted-foreground text-xs leading-relaxed">
                  {description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
