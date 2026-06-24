"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-10 shadow-soft sm:p-14">
          <div className="grid-glow pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/25 blob" />
          <div className="relative grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-display text-4xl font-bold text-gradient sm:text-5xl lg:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
