import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/common/tag";
import { cn } from "@/lib/utils";
import type { Article } from "@/types/knowledge";

const covers = [
  "from-brand/25 via-brand/10 to-transparent",
  "from-gold/25 via-gold/10 to-transparent",
  "from-brand/20 via-gold/10 to-transparent",
  "from-gold/20 via-brand/10 to-transparent",
];

export function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  const Icon = article.icon;
  const cover = covers[index % covers.length];

  return (
    <Link
      href={`/knowledge/${article.slug}`}
      className="group border-border bg-card shadow-subtle hover:shadow-elevated focus-visible:outline-brand flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 ease-out-quart hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <div className={cn("relative flex h-28 items-center justify-center bg-gradient-to-br", cover)}>
        <Icon
          className="text-foreground/70 size-10 transition-transform duration-300 ease-out-quart group-hover:scale-110"
          aria-hidden
          strokeWidth={1.25}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="brand">{article.category[0]}</Badge>
          <span className="text-muted-foreground inline-flex shrink-0 items-center gap-1 text-xs">
            <Clock className="size-3.5" aria-hidden />
            {article.readingTime}
          </span>
        </div>

        <h3 className="text-base font-semibold tracking-tight text-balance">{article.title}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          {article.subtitle}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {article.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <span className="text-brand group/link mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold">
          Read Article
          <ArrowUpRight
            className="size-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
