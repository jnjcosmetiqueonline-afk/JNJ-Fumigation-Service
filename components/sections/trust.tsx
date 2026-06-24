"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock, FlaskConical, HandCoins, Headphones, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { trustBadges } from "@/lib/data";

const icons = [BadgeCheck, FlaskConical, Clock, HandCoins, Headphones, ShieldCheck];

export function Trust() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.map((b, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={b.title} delay={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass group flex items-start gap-4 rounded-3xl p-6 transition-shadow hover:shadow-glow"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
