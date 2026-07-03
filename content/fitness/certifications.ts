import { fitnessCertificates } from "@/lib/media";
import type { FitnessCertification } from "@/types/fitness";

export const fitnessCertifications: FitnessCertification[] = [
  {
    title: "Personal Fitness Coach",
    issuer: "CPD Accreditation Group",
    credentialId: "Course #1008742",
    credits: "10 CPD Credits",
    year: "Accredited Provider #776938",
    image: fitnessCertificates[0],
    whatItCovers: [
      "Exercise programming and progressive overload principles",
      "Habit formation and behavior change for sustainable training",
      "Injury prevention and safe training progression",
    ],
    leadershipConnection:
      "Formal study of how habits actually form — not just willpower — reframed how I design change management inside operations: build the system first, and the outcome follows.",
  },
  {
    title: "Diet & Nutrition Coach",
    issuer: "CPD Accreditation Group",
    credentialId: "Course #1000658",
    credits: "10 CPD Credits",
    year: "Accredited Provider #776938",
    image: fitnessCertificates[1],
    whatItCovers: [
      "Nutritional fundamentals and sustainable dietary structure",
      "Energy balance and long-term weight management principles",
      "Coaching frameworks for guiding consistent behavior change",
    ],
    leadershipConnection:
      "Nutrition coaching is fundamentally about sustainable systems over short-term restriction — the exact same principle I apply to operational change: durable process beats a one-time push.",
  },
];
