import type { MetadataRoute } from "next"

import { site } from "@/content/site"

const paths = [
  "",
  "/turbines",
  "/services",
  "/company",
  "/sustainability",
  "/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.siteUrl}${path || "/"}`,
    lastModified: new Date(),
  }))
}
