import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://YOURDOMAIN.com";

  // Add your known static routes here (and keep adding as needed)
  const routes = [
    "",
    "/network",
    "/services",
    "/blog",
    "/apply",
    "/webinars",
    "/sponsors",
    "/artists",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}