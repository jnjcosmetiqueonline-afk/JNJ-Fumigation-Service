"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="section">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-72 bg-radial-fade from-brand-500/10 to-transparent" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Process"
          title={<>A proven <span className="text-gradient">5-step method</span></>}
          subtitle="Every project follows the same rigorous workflow — transparent, documented and results-driven."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center"
              >
                <div className="relative mx-auto mb-5 grid h-18 w-18 place-items-center">
                  <span className="absolute inset-0 rounded-full bg-brand-500/20 animate-pulse-ring" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-full bg-brand-gradient font-display text-xl font-bold text-white shadow-glow">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
