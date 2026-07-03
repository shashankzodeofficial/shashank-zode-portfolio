import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { mediaItems } from "@/content/thought-leadership/media";

export function MediaCoverageTeaser() {
  const preview = mediaItems.slice(0, 4);

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
              Media Coverage
            </span>
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              Press, podcasts, and conference features
            </h2>
          </div>
          <Link
            href="/thought-leadership/media"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            Visit the Media Center
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {preview.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="border-border bg-card shadow-subtle flex flex-col gap-3 rounded-2xl border p-5"
              >
                <span className="bg-brand-muted text-brand flex size-9 items-center justify-center rounded-xl">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="text-sm font-semibold tracking-tight">{item.category}</span>
                {item.isPlaceholder ? (
                  <Badge variant="outline" className="w-fit text-[0.65rem]">
                    Coming Soon
                  </Badge>
                ) : (
                  <Badge variant="brand" className="w-fit text-[0.65rem]">
                    Featured
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
