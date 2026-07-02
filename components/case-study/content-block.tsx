import { cn } from "@/lib/utils";

interface ContentBlockProps {
  title: string;
  body?: string;
  bullets?: string[];
  className?: string;
}

export function ContentBlock({ title, body, bullets, className }: ContentBlockProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      {body ? (
        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
          {body}
        </p>
      ) : null}
      {bullets ? (
        <ul className="flex flex-col gap-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed"
            >
              <span className="bg-brand mt-2 size-1 shrink-0 rounded-full" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
