import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Tag } from "@/components/common/tag";
import { aiUseCases } from "@/content/knowledge/ai-use-cases";

export function AIUseCasesTeaser() {
  const preview = aiUseCases.slice(0, 3);

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
              AI Use Case Repository
            </span>
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              Where AI actually helps in operations
            </h2>
          </div>
          <Link
            href="/knowledge/ai-use-cases"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            View the repository
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {preview.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <Link
                key={useCase.slug}
                href="/knowledge/ai-use-cases"
                className="group border-border bg-card shadow-subtle hover:shadow-panel flex flex-col gap-3 rounded-2xl border p-6 transition-shadow"
              >
                <span className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-10 items-center justify-center rounded-xl transition-colors">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-sm font-semibold tracking-tight">{useCase.title}</h3>
                <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
                  {useCase.businessProblem}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {useCase.tags.slice(0, 2).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
