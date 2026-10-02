import type { MetadataRoute } from "next";
import { eventCategories } from "@/content/eventos";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.leandrosantanacerimonial.com.br";
  const currentDate = new Date().toISOString().split("T")[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/quem-somos/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/eventos/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/servicos/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/galeria/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/orcamentos/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contato/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const eventRoutes: MetadataRoute.Sitemap = eventCategories.map((evento) => ({
    url: `${siteUrl}/eventos/${evento.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...eventRoutes];
}
