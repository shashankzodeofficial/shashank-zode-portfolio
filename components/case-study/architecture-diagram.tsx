import { ArrowDown, ArrowRight } from "lucide-react";

import type { ArchitectureDiagram as ArchitectureDiagramData } from "@/types/project";

export function ArchitectureDiagram({ diagram }: { diagram: ArchitectureDiagramData }) {
  return (
    <div className="border-border bg-card shadow-panel rounded-2xl border p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-2">
        <h3 className="text-base font-semibold tracking-tight">{diagram.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {diagram.description}
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-2">
        {diagram.nodes.map((node, i) => (
          <div
            key={node.label}
            className="flex items-center gap-3 lg:flex-1 lg:flex-col lg:items-center lg:gap-0"
          >
            <div className="flex flex-1 flex-row items-center gap-3 lg:flex-col lg:gap-2 lg:text-center">
              <span className="bg-brand-muted text-brand flex size-11 shrink-0 items-center justify-center rounded-xl">
                <node.icon className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col lg:items-center">
                <p className="text-sm font-semibold tracking-tight">{node.label}</p>
                {node.detail ? (
                  <p className="text-muted-foreground text-xs">{node.detail}</p>
                ) : null}
              </div>
            </div>

            {i < diagram.nodes.length - 1 ? (
              <div className="text-border flex shrink-0 items-center justify-center py-1 lg:w-full lg:py-0">
                <ArrowDown className="size-4 lg:hidden" aria-hidden />
                <ArrowRight className="hidden size-4 lg:block" aria-hidden />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
