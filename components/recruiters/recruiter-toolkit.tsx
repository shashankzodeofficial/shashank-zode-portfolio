import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { toolkitItems } from "@/content/recruiters/toolkit";

export function RecruiterToolkit() {
  return (
    <section id="toolkit" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="Recruiter Toolkit"
          title="Everything in one place"
          description="Quick links to every artifact you might need for a shortlisting or interview panel."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toolkitItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-10 items-center justify-center rounded-xl transition-colors">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
                <span className="text-brand mt-auto inline-flex items-center gap-1.5 pt-1 text-xs font-semibold">
                  {item.actionLabel}
                  <ArrowRight
                    className="size-3.5 transition-transform duration-200 ease-out-quart group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </>
            );

            const className =
              "group border-border bg-card shadow-subtle hover:shadow-panel flex flex-col gap-3 rounded-2xl border p-6 transition-shadow";

            return item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
