import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Twitter } from "lucide-react";
import { COMPANY, telLink, whatsappLink } from "@/lib/utils";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Cockroach Control",
  "Bed Bug Treatment",
  "Termite Treatment",
  "Rodent Control",
  "Commercial Fumigation",
  "General Pest Control",
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/15 blob" />
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="JNJ Fumigation Services logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full ring-1 ring-brand-500/20"
              />
              <span className="font-display text-lg font-bold tracking-tight">
                JNJ<span className="text-gradient"> Fumigation</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Premium pest control and fumigation services protecting homes, businesses and industries
              with safe, guaranteed solutions.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:border-brand-500/40 hover:text-brand-500"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-brand-500">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-brand-500">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={telLink} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-brand-500">
                  <Phone className="h-4 w-4 text-brand-500" /> {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-brand-500">
                  <Phone className="h-4 w-4 text-brand-500" /> WhatsApp: {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-brand-500" /> {COMPANY.address}
              </li>
            </ul>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary mt-5 !px-5 !py-2.5 text-xs">
              Get Free Quote
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with care for a healthier, pest-free environment.
          </p>
        </div>
      </div>
    </footer>
  );
}
