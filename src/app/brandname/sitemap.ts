import type { MetadataRoute } from 'next';
const BASE_URL = "https://medprice.pk"
const drugs: Medicine[] = require("@/db/result.json")

// // Generate sitemap IDs based on total items divided into 30,000 chunks
// export async function generateSitemaps() {
//   const totalItems = drugs.length;
//   // const totalSitemaps = Math.ceil(totalItems / 30000);

//   return Array.from({ length: totalSitemaps }, (_, idx) => ({
//     id: idx.toString(),
//   }));
// }

// Generate individual sitemap based on the chunk ID
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  

  return drugs.map((item) => ({
    url: `${BASE_URL}/brandname/${encodeURIComponent(item.BrandName)}`,
    lastModified: new Date().toISOString(), // better format for sitemaps
    priority: 0.9
  }));
}
