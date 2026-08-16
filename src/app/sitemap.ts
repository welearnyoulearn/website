import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { features } from "@/lib/features";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/product", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/features", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/investors", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const featureRoutes = features.map((f) => ({
    path: `/features/${f.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const now = new Date();

  return [...staticRoutes, ...featureRoutes].map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
