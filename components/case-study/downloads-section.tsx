import { Download, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import type { DownloadResource } from "@/types/project";

export function DownloadsSection({ resources }: { resources: DownloadResource[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {resources.map((resource) => {
        const available = Boolean(resource.href);
        const content = (
          <>
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-xl",
                available
                  ? "bg-brand-muted text-brand"
                  : "bg-muted text-muted-foreground",
              )}
            >
              <resource.icon className="size-5" aria-hidden />
            </div>
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm font-semibold tracking-tight">
                {resource.label}
              </span>
              <span className="text-muted-foreground text-xs">
                {resource.description}
              </span>
            </div>
            {available ? (
              <Download className="text-muted-foreground size-4 shrink-0" aria-hidden />
            ) : (
              <span className="border-border bg-surface text-muted-foreground inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium">
                <Lock className="size-3" aria-hidden />
                Coming Soon
              </span>
            )}
          </>
        );

        if (available) {
          return (
            <a
              key={resource.label}
              href={resource.href}
              download
              className="border-border bg-card shadow-subtle hover:shadow-panel flex items-center gap-4 rounded-2xl border p-5 transition-shadow"
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={resource.label}
            className="border-border/70 bg-surface flex items-center gap-4 rounded-2xl border border-dashed p-5"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
