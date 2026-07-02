"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Dumbbell, Flame } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { fitnessJourney } from "@/lib/site-config";

const stats = [
  { icon: Flame, value: fitnessJourney.frequency, label: "Training frequency" },
  { icon: CalendarCheck, value: fitnessJourney.streakYears, label: "Unbroken streak" },
  { icon: Dumbbell, value: "Compounding", label: "Mindset, not a milestone" },
];

export function FitnessPreview() {
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
            No shortcuts, no crash programs — just structured, compounding effort over
            years. It&apos;s the clearest personal proof I have that consistency beats
            intensity, in the gym and in the boardroom.
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
          className="from-brand/15 via-gold/10 border-border relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border bg-gradient-to-br to-transparent p-8"
        >
          <div className="flex items-end justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground text-xs font-medium">Then</span>
              <span className="text-3xl font-semibold tracking-tight">
                {fitnessJourney.startWeight}
                {fitnessJourney.unit}
              </span>
            </div>
            <ArrowRight className="text-brand size-5 shrink-0" aria-hidden />
            <div className="flex flex-col items-end gap-1">
              <span className="text-muted-foreground text-xs font-medium">Now</span>
              <span className="text-3xl font-semibold tracking-tight">
                {fitnessJourney.currentWeight}
                {fitnessJourney.unit}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <stat.icon className="text-brand size-4" aria-hidden />
                <span className="text-sm font-semibold tracking-tight">{stat.value}</span>
                <span className="text-muted-foreground text-xs leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
