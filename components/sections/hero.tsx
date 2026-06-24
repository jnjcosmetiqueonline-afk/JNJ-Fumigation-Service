"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { COMPANY, telLink, whatsappLink } from "@/lib/utils";

const floatCards = [
  { icon: ShieldCheck, label: "Certified & Insured", sub: "Licensed technicians", className: "left-0 top-10" },
  { icon: Star, label: "4.9 / 5 Rating", sub: "1,200+ reviews", className: "right-0 top-24" },
  { icon: Sparkles, label: "Eco-Safe Chemicals", sub: "Child & pet friendly", className: "bottom-6 left-8" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      {/* Ambient background */}
      <div className="grid-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-brand-400/30 blob animate-float-slow" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-600/25 blob animate-float" />

      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mx-auto lg:mx-0"
            >
              <Sparkles className="h-3.5 w-3.5" /> Premium Pest Control & Fumigation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="heading-balance mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Professional Pest Control &{" "}
              <span className="text-gradient">Fumigation Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0"
            >
              Protecting homes, offices, restaurants, warehouses and industries with safe,
              effective and guaranteed pest control solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Magnetic>
                <a href="#contact" className="btn-primary">
                  <CalendarCheck className="h-4 w-4" /> Book Inspection
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="btn-ghost">
                  Get Free Quote
                </a>
              </Magnetic>
              <Magnetic>
                <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-ghost !text-brand-600 dark:!text-brand-400">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-500" /> 100% Satisfaction Guarantee
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-500" /> {COMPANY.phoneDisplay}
              </span>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[32rem]">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-glow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=900&q=75"
                alt="JNJ technician performing professional pest control fumigation"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <div className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3">
                  <div>
                    <p className="text-xs text-white/70">Same-day service</p>
                    <p className="text-sm font-semibold text-white">Book in under 60 seconds</p>
                  </div>
                  <a href={telLink} className="grid h-11 w-11 place-items-center rounded-full bg-brand-gradient shadow-glow">
                    <Phone className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>

            {floatCards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                className={`glass-strong absolute hidden items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-soft sm:flex ${c.className} animate-float`}
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/15 text-brand-500">
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold leading-tight">{c.label}</span>
                  <span className="block text-[11px] text-muted-foreground">{c.sub}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
