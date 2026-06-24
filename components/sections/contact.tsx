"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { COMPANY, telLink, whatsappLink } from "@/lib/utils";
import { services } from "@/lib/data";

type Errors = Partial<Record<"name" | "phone" | "email" | "location" | "service" | "message", string>>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });

  const update = (k: keyof typeof values, v: string) => {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[+]?[\d\s()-]{7,}$/.test(values.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "Enter a valid email address.";
    if (values.location.trim().length < 2) e.location = "Please enter your location.";
    if (!values.service) e.service = "Please select a service.";
    if (values.message.trim().length < 10) e.message = "Tell us a little more (10+ characters).";
    return e;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setSubmitted(true);
  };

  const fieldClass = (k: keyof Errors) =>
    `w-full rounded-2xl bg-transparent px-4 py-3 text-sm outline-none transition-colors glass focus:border-brand-500/60 ${
      errors[k] ? "!border-red-500/60" : ""
    }`;

  return (
    <section id="contact" className="section">
      <div className="container-px">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div>
            <SectionHeading
              center={false}
              eyebrow="Contact Us"
              title={<>Get your <span className="text-gradient">free quote</span></>}
              subtitle="Book a free inspection today. Our team responds within minutes during business hours."
            />

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Call us", value: COMPANY.phoneDisplay, href: telLink },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: whatsappLink() },
                { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: MapPin, label: "Office", value: COMPANY.address, href: "#" },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-brand-500/40"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">{c.label}</span>
                      <span className="block text-sm font-semibold">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={1}>
            <div className="glass-strong rounded-[2rem] p-6 shadow-soft sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-white shadow-glow">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">Request received!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you, {values.name.split(" ")[0]}. Our team will contact you shortly to confirm
                    your free inspection.
                  </p>
                  <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary mt-6">
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Full Name
                      </label>
                      <input id="name" value={values.name} onChange={(e) => update("name", e.target.value)} className={fieldClass("name")} placeholder="John Doe" />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Phone
                      </label>
                      <input id="phone" value={values.phone} onChange={(e) => update("phone", e.target.value)} className={fieldClass("phone")} placeholder="+92 300 1234567" />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Email
                      </label>
                      <input id="email" type="email" value={values.email} onChange={(e) => update("email", e.target.value)} className={fieldClass("email")} placeholder="you@email.com" />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="location" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Location
                      </label>
                      <input id="location" value={values.location} onChange={(e) => update("location", e.target.value)} className={fieldClass("location")} placeholder="City / Area" />
                      {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Service Required
                    </label>
                    <select id="service" value={values.service} onChange={(e) => update("service", e.target.value)} className={fieldClass("service")}>
                      <option value="" className="bg-background">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title} className="bg-background">
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Message
                    </label>
                    <textarea id="message" rows={4} value={values.message} onChange={(e) => update("message", e.target.value)} className={`${fieldClass("message")} resize-none`} placeholder="Tell us about your pest problem…" />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send className="h-4 w-4" /> Send Request
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
