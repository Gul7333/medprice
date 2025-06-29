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
  
 const uniqueCompanies = Array.from(
    new Set(drugs.map((item: Medicine) => item.CompanyName))
  );
  return uniqueCompanies.map((CompanyName) => ({
    url: `${BASE_URL}/company/${encodeURIComponent(CompanyName)}`,
    lastModified: new Date().toISOString(), // better format for sitemaps
    priority: 0.9
  }));
}
