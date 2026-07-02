import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-label text-brand font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-title leading-[var(--text-title--line-height)] font-semibold tracking-[var(--text-title--letter-spacing)] text-balance">
        {title}
      </h2>
      {description ? (
        <p className="text-lead text-muted-foreground leading-[var(--text-lead--line-height)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
