"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, ShieldCheck, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { COMPANY, cn, telLink } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-px">
        <motion.nav
          initial={{ y: -28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-4 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6",
            scrolled ? "glass-strong shadow-soft" : "bg-transparent"
          )}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
              <ShieldCheck className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              JNJ<span className="text-gradient"> Fumigation</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-500/10 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={telLink} className="hidden btn-primary !px-5 !py-2.5 text-xs sm:inline-flex">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="container-px lg:hidden"
          >
            <div className="glass-strong mt-2 flex flex-col gap-1 rounded-3xl p-4 shadow-soft">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-500/10 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a href={telLink} className="btn-primary mt-2">
                <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
