"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

export function NavLink({
  item,
  className,
  onClick,
}: {
  item: NavItem;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      target={item.href.endsWith(".pdf") ? "_blank" : undefined}
      rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
      className={cn(
        "text-muted-foreground hover:text-foreground relative text-sm font-medium transition-colors",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}
