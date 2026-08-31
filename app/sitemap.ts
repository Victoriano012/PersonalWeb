import type { MetadataRoute } from "next";
import { sections } from "@/src/data/sections";
import { siteUrl } from "@/src/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...sections.map((section) => section.href)].map((path) => ({
    url: new URL(path, siteUrl).href,
    lastModified: new Date(),
  }));
}
