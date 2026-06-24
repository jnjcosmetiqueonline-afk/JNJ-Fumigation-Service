"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIndex((p) => (p + d + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section id="testimonials" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Trusted by <span className="text-gradient">1,200+ clients</span></>}
          subtitle="Real results from homeowners, restaurants, hotels and industrial facilities across Pakistan."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[20rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="glass-strong rounded-[2rem] p-8 shadow-soft sm:p-10"
              >
                <Quote className="h-10 w-10 text-brand-500/40" />
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-relaxed text-foreground/90">&ldquo;{t.review}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-500/40"
                  />
                  <div>
                    <p className="font-display font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="glass grid h-11 w-11 place-items-center rounded-full transition-colors hover:border-brand-500/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-brand-gradient" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="glass grid h-11 w-11 place-items-center rounded-full transition-colors hover:border-brand-500/40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
