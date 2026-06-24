"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { serviceAreas } from "@/lib/data";

export function ServiceAreas() {
  return (
    <section className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Service Areas"
          title={<>Proudly serving <span className="text-gradient">all of Karachi</span></>}
          subtitle="Fast, reliable pest control and fumigation across every Karachi neighbourhood — with same-day slots available."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {serviceAreas.map((city, i) => (
            <Reveal key={city} delay={i % 5}>
              <motion.div
                whileHover={{ y: -5, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="glass group flex items-center gap-2.5 rounded-2xl px-5 py-3.5 transition-colors hover:border-brand-500/40"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-500/15 text-brand-500 transition-transform group-hover:scale-110">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">{city}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
