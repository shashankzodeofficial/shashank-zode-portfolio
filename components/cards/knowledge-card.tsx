import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/common/tag";
import type { KnowledgeArticlePreview } from "@/types";

export function KnowledgeCard({ article }: { article: KnowledgeArticlePreview }) {
  return (
    <div className="group border-border bg-card shadow-subtle hover:shadow-panel ease-out-quart flex h-full flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-center justify-between gap-3">
        <Badge variant="brand">{article.category}</Badge>
        <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
          <Clock className="size-3.5" aria-hidden />
          {article.readingTime}
        </span>
      </div>

      <h3 className="text-base font-semibold tracking-tight text-balance">
        {article.title}
      </h3>

      <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
        {article.summary}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {article.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <Link
        href="/knowledge"
        className="text-brand group/link mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold"
      >
        Read Article
        <ArrowUpRight
          className="ease-out-quart size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          aria-hidden
        />
      </Link>
    </div>
  );
}
