"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";

import { Breadcrumb } from "@/components/common/breadcrumb";
import { Tag } from "@/components/common/tag";
import { HeroBackground } from "@/components/hero/hero-background";
import { Badge } from "@/components/ui/badge";
import { getArticleBySlug } from "@/content/knowledge/articles";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/** Takes a slug and resolves internally — icon fields can't cross the Server-to-Client prop boundary. */
export function ArticleHero({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug);
  if (!article) return null;
  const Icon = article.icon;

  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20">
      <HeroBackground />

      <div className="container-executive relative flex flex-col gap-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Knowledge Hub", href: "/knowledge" },
            { label: article.title },
          ]}
        />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_10rem] lg:gap-16">
          <motion.div initial="hidden" animate="visible" className="flex max-w-2xl flex-col gap-5">
            <motion.div custom={0} variants={fadeUp} className="flex flex-wrap items-center gap-2">
              {article.category.map((cat) => (
                <Badge key={cat} variant="brand">
                  {cat}
                </Badge>
              ))}
              <Badge variant="outline">{article.difficulty}</Badge>
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="text-display leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance"
            >
              {article.title}
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="text-subtitle text-muted-foreground leading-[var(--text-subtitle--line-height)]"
            >
              {article.subtitle}
            </motion.p>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              className="text-muted-foreground flex flex-wrap items-center gap-4 text-xs font-medium"
            >
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" aria-hidden />
                {article.readingTime} read
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" aria-hidden />
                {new Date(article.publishDate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>By Shashank Zode</span>
            </motion.div>

            <motion.div custom={0.4} variants={fadeUp} className="flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="from-brand/20 via-gold/10 border-border shadow-elevated mx-auto flex aspect-square w-full max-w-40 items-center justify-center rounded-3xl border bg-gradient-to-br to-transparent lg:mx-0 lg:max-w-none"
          >
            <Icon className="text-brand size-14" aria-hidden strokeWidth={1.25} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
