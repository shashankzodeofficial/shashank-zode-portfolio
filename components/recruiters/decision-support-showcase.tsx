"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/common/section-header";
import { KpiDashboardIllustration } from "@/components/illustrations/kpi-dashboard-illustration";
import { easeOutExpo } from "@/lib/motion";

export function DecisionSupportShowcase() {
  return (
    <section id="decision-support" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-center lg:gap-16">
        <SectionHeader
          eyebrow="Decision-Support Tooling"
          title="I don't just request dashboards — I build them"
          description="A representative example of the kind of executive decision-support view I architect: live trend lines, throughput by period, and service-level tracking in one place."
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <KpiDashboardIllustration />
        </motion.div>
      </div>
    </section>
  );
}
