"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Flame } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { fitnessPhotos } from "@/lib/media";
import { fitnessJourney } from "@/lib/site-config";

const stats = [
  { icon: Flame, value: fitnessJourney.frequency, label: "Training frequency" },
  { icon: CalendarCheck, value: fitnessJourney.streakYears, label: "Unbroken streak" },
];

export function FitnessPreview() {
  const [treadmill, training] = fitnessPhotos;

  return (
    <section id="fitness" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Fitness"
            title="Discipline compounds the same way leadership does."
            description={`A ${fitnessJourney.startWeight}${fitnessJourney.unit} to ${fitnessJourney.currentWeight}${fitnessJourney.unit} transformation, built one non-negotiable morning at a time — the same consistency I bring to running operations.`}
          />
          <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
            No shortcuts, no crash programs — just structured, compounding
            effort over years. It&apos;s the clearest personal proof I have
            that consistency beats intensity, in the gym and in the
            boardroom.
          </p>
          <Link
            href="/journey"
            className="text-brand group mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold"
          >
            Read My Journey
            <ArrowRight
              className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="border-border shadow-panel relative aspect-[3/4] overflow-hidden rounded-2xl border">
            <Image
              src={treadmill.src}
              alt={treadmill.alt}
              fill
              sizes="(min-width: 1024px) 20rem, 45vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="border-border shadow-panel relative aspect-[4/3] overflow-hidden rounded-2xl border">
              <Image
                src={training.src}
                alt={training.alt}
                fill
                sizes="(min-width: 1024px) 20rem, 45vw"
                className="object-cover"
              />
            </div>

            <div className="from-brand/15 via-gold/10 border-border flex flex-1 flex-col justify-between gap-4 rounded-2xl border bg-gradient-to-br to-transparent p-5">
              <div className="flex items-end justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-muted-foreground text-[0.65rem] font-medium">
                    Then
                  </span>
                  <span className="text-xl font-semibold tracking-tight">
                    {fitnessJourney.startWeight}
                    {fitnessJourney.unit}
                  </span>
                </div>
                <ArrowRight className="text-brand size-4 shrink-0" aria-hidden />
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-muted-foreground text-[0.65rem] font-medium">
                    Now
                  </span>
                  <span className="text-xl font-semibold tracking-tight">
                    {fitnessJourney.currentWeight}
                    {fitnessJourney.unit}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <stat.icon className="text-brand size-3.5" aria-hidden />
                    <span className="text-xs font-semibold tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
