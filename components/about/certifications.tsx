"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { certifications } from "@/lib/about-content";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-border scroll-mt-24 border-t py-20 sm:py-28"
    >
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="Certifications"
          title="Formal training behind the practice"
          description="Verified credentials, plus a few in progress — this section will grow as new certifications are completed."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const verified = cert.status === "verified";
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "flex h-full flex-col gap-4 rounded-2xl border p-6",
                  verified
                    ? "border-border bg-card shadow-subtle"
                    : "border-border/70 bg-surface border-dashed",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl",
                      verified
                        ? "bg-brand-muted text-brand"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {verified ? (
                      <BadgeCheck className="size-5" aria-hidden />
                    ) : (
                      <Clock className="size-5" aria-hidden />
                    )}
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      verified
                        ? "bg-brand-muted text-brand"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {verified ? "Verified" : "Coming Soon"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="text-base font-semibold tracking-tight">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
                <div className="border-border flex items-center justify-between border-t pt-4 text-xs">
                  <span className="text-muted-foreground">{cert.year}</span>
                  {verified ? (
                    <span className="text-muted-foreground">
                      Credential available on request
                    </span>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
