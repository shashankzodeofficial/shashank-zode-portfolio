import type { BusinessChallenge } from "@/types";

const rows: { key: keyof BusinessChallenge; label: string }[] = [
  { key: "situation", label: "Situation" },
  { key: "approach", label: "Approach" },
  { key: "outcome", label: "Outcome" },
];

export function ChallengeCard({ challenge }: { challenge: BusinessChallenge }) {
  const Icon = challenge.icon;

  return (
    <div className="group border-border bg-card shadow-subtle hover:shadow-panel ease-out-quart flex h-full flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <div className="bg-brand-muted text-brand group-hover:bg-brand group-hover:text-brand-foreground flex size-9 shrink-0 items-center justify-center rounded-xl transition-colors">
          <Icon className="size-4" aria-hidden />
        </div>
        <h3 className="text-sm font-semibold tracking-tight">{challenge.title}</h3>
      </div>

      <dl className="flex flex-col gap-3">
        {rows.map(({ key, label }) => (
          <div key={key} className="flex flex-col gap-0.5">
            <dt className="text-muted-foreground text-[0.65rem] font-semibold tracking-wide uppercase">
              {label}
            </dt>
            <dd className="text-foreground text-sm leading-relaxed">
              {challenge[key] as string}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-border mt-auto border-t pt-4">
        <p className="text-gold text-xs leading-relaxed font-medium">
          {challenge.takeaway}
        </p>
      </div>
    </div>
  );
}
