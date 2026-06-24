"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, MapPin, MessageCircle, Phone, Send, X } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { COMPANY, telLink, whatsappLink } from "@/lib/utils";
import { services } from "@/lib/data";
import { supabase } from "@/lib/supabase";

type Toast = { type: "success" | "error"; message: string } | null;

type Errors = Partial<Record<"name" | "phone" | "email" | "location" | "service" | "message", string>>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
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
    return e;
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      setToast({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    setSubmitting(true);
    setToast(null);

    const payload = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      location: values.location.trim(),
      service: values.service,
      message: values.message.trim() || null,
    };

    try {
      const { data, error, status, statusText } = await supabase
        .from("leads")
        .insert(payload);

      setSubmitting(false);

      if (error) {
        console.error("Supabase insert failed");
        console.error("status:", status, statusText);
        console.error("code:", error.code);
        console.error("message:", error.message);
        console.error("details:", error.details);
        console.error("hint:", error.hint);
        console.error("payload:", payload);
        setToast({
          type: "error",
          message:
            process.env.NODE_ENV === "development"
              ? `Insert failed: [${error.code || status}] ${error.message || statusText || "Unknown error"}`
              : "Something went wrong while sending your request. Please try again or WhatsApp us.",
        });
        return;
      }

      console.log("Supabase insert OK:", data);
    } catch (err) {
      setSubmitting(false);
      console.error("Insert threw an exception:", err);
      setToast({
        type: "error",
        message:
          process.env.NODE_ENV === "development"
            ? `Exception: ${err instanceof Error ? err.message : String(err)}`
            : "Something went wrong while sending your request. Please try again or WhatsApp us.",
      });
      return;
    }

    setToast({ type: "success", message: "Request sent! We'll be in touch shortly." });
    setSubmitted(true);
  };

  const fieldClass = (k: keyof Errors) =>
    `w-full rounded-2xl bg-transparent px-4 py-3 text-sm outline-none glass input-bordered ${
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
                { icon: MapPin, label: "Service Area", value: COMPANY.address, href: "#" },
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
                      <input id="phone" value={values.phone} onChange={(e) => update("phone", e.target.value)} className={fieldClass("phone")} placeholder="0312 22007498" />
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

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            role="status"
            aria-live="polite"
            className="glass-strong fixed bottom-6 left-1/2 z-[60] flex w-[min(92vw,26rem)] -translate-x-1/2 items-start gap-3 rounded-2xl p-4 shadow-soft"
          >
            <span
              className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full text-white ${
                toast.type === "success" ? "bg-brand-gradient" : "bg-red-500"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
            </span>
            <p className="flex-1 text-sm font-medium leading-snug">{toast.message}</p>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setToast(null)}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
