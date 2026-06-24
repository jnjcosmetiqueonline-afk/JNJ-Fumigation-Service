import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#services", "#process", "#why", "#testimonials", "#faq", "#contact"];
  return sections.map((s) => ({
    url: `${COMPANY.url}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1 : 0.8,
  }));
}
