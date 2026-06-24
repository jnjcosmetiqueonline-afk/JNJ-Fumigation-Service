"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { pests } from "@/lib/data";

export function Gallery() {
  return (
    <section className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Pest Gallery"
          title={<>Pests we <span className="text-gradient">eliminate</span></>}
          subtitle="If it crawls, flies, bites or chews — we have a proven protocol to remove it and keep it away."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {pests.map((p, i) => (
            <Reveal key={p.name} delay={i % 4}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="group glow-card relative aspect-square overflow-hidden rounded-3xl"
              >
                <img
                  src={p.image}
                  alt={`${p.name} control`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex translate-y-1 items-center rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white opacity-90 shadow-glow transition-transform group-hover:translate-y-0">
                    {p.name}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
