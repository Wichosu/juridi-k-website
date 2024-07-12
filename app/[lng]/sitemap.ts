import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://juridi-k.lat',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://juridi-k.lat/es',
          en: 'https://juridi-k.lat/en',
          zh: 'https://juridi-k.lat/zh'
        }
      }
    },
  ]
}