import type { MetadataRoute } from "next";

const baseUrl = "https://nexora-technologies-mauve.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/founder",
    "/products",
    "/services",
    "/research",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

