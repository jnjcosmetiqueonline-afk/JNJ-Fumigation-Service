"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whyChoose } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export function WhyChoose() {
  return (
    <section id="why" className="section">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Why Choose Us"
              title={<>The difference is in the <span className="text-gradient">detail</span></>}
              subtitle="We pair certified expertise with modern equipment and eco-friendly chemistry to deliver results that last."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {whyChoose.map((w, i) => (
                <Reveal key={w.title} delay={i}>
                  <div className="glow-card flex items-start gap-3 rounded-2xl p-4">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{w.title}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={2}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-500/20 blob" />
              <div className="glass-strong overflow-hidden rounded-[2.5rem] shadow-glow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=75"
                  alt="JNJ professional pest control team with modern equipment"
                  loading="lazy"
                  className="h-[26rem] w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-strong absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-3xl p-5 shadow-soft"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-semibold">Guaranteed Results</p>
                  <p className="text-xs text-muted-foreground">Free re-treatment if pests return.</p>
                </div>
                <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary !px-5 !py-2.5 text-xs">
                  Book Now
                </a>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
