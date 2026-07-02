"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

export function NavLink({
  item,
  className,
  onClick,
  active = false,
}: {
  item: NavItem;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      target={item.href.endsWith(".pdf") ? "_blank" : undefined}
      rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
      className={cn(
        "relative text-sm font-medium transition-colors",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {item.label}
      {active ? (
        <span className="bg-brand absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full" />
      ) : null}
    </Link>
  );
}
