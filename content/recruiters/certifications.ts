import { fitnessCertificates, leanSixSigmaCertificate } from "@/lib/media";
import type { ProfessionalCertification } from "@/types/recruiter";

export const professionalCertifications: ProfessionalCertification[] = [
  {
    slug: "lean-six-sigma-green-belt",
    title: "Lean Six Sigma Green Belt",
    issuer: "KPMG in India",
    year: "March 2020",
    credentialId: "HY032020285",
    status: "verified",
    image: leanSixSigmaCertificate,
    methodologies: [
      "DMAIC",
      "Kaizen",
      "Value Stream Mapping",
      "Root Cause Analysis",
      "Continuous Improvement",
    ],
    narrative:
      "This is the methodology backbone behind every transformation on this site. DMAIC structured the debottlenecking work described in the Knowledge Hub; Value Stream Mapping and Root Cause Analysis drove the network-complexity and warehouse-throughput playbooks; and Kaizen's discipline of small, continuous change shaped how every AI platform here — NexusOne, SCS-Fabric, the control towers — was built incrementally rather than as one big-bang rollout.",
  },
  {
    slug: "personal-fitness-coach",
    title: "Personal Fitness Coach",
    issuer: "CPD Accreditation Group",
    year: "Accredited Provider #776938",
    credentialId: "Course #1008742",
    status: "verified",
    image: fitnessCertificates[0],
    narrative:
      "Formal study of habit formation and progressive overload — the same systems-over-willpower thinking applied to leading operational change. See the full Fitness Journey for the story behind it.",
  },
  {
    slug: "diet-nutrition-coach",
    title: "Diet & Nutrition Coach",
    issuer: "CPD Accreditation Group",
    year: "Accredited Provider #776938",
    credentialId: "Course #1000658",
    status: "verified",
    image: fitnessCertificates[1],
    narrative:
      "Coaching frameworks for sustainable behavior change — reinforcing that durable process beats short-term restriction, in nutrition and in operations alike.",
  },
  {
    slug: "ai-data-leadership",
    title: "AI & Data Leadership",
    issuer: "To be announced",
    year: "In progress",
    status: "upcoming",
    narrative:
      "Formal executive credential to complement the AI platforms already architected and shipped independently — this section will update once completed.",
  },
  {
    slug: "executive-leadership-program",
    title: "Executive Leadership Program",
    issuer: "To be announced",
    year: "Planned",
    status: "upcoming",
    narrative:
      "A planned executive education program to formalize sixteen-plus years of operating leadership — this section will update once scheduled.",
  },
];

export function getCertificationBySlug(slug: string): ProfessionalCertification | undefined {
  return professionalCertifications.find((cert) => cert.slug === slug);
}
