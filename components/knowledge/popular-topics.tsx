import Link from "next/link";
import { Hash } from "lucide-react";

import { getAllTags } from "@/content/knowledge/articles";

export function PopularTopics() {
  const tags = getAllTags();

  return (
    <section className="border-border border-t py-14">
      <div className="container-executive flex flex-col gap-6">
        <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
          Popular Topics
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/knowledge?tag=${encodeURIComponent(tag)}#library`}
              className="border-border bg-card text-muted-foreground hover:border-brand/30 hover:text-foreground inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
            >
              <Hash className="size-3" aria-hidden />
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
