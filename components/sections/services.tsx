"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Complete protection for <span className="text-gradient">every space</span></>}
          subtitle="From a single cockroach treatment to full industrial fumigation contracts, our certified team has you covered."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i % 3}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group service-card relative flex h-full flex-col overflow-hidden rounded-3xl"
              >
                <img
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="service-watermark"
                />
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
                  <a
                    href={whatsappLink(`Hi JNJ, I'm interested in ${s.title}.`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-400"
                  >
                    Get a quote
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
