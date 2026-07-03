"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NavLink } from "@/components/navigation/nav-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/types";

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel border-border shadow-elevated fixed inset-x-0 top-[var(--header-h,64px)] z-40 border-b px-6 py-6"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {items.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  onClick={() => setOpen(false)}
                  className="hover:bg-muted rounded-lg px-3 py-3"
                />
              ))}
            </nav>
            <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
              <span className="text-muted-foreground text-xs">Theme</span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
