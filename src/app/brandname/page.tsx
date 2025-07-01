import { BASE_URL, SITE_NAME } from "@/constant/constant";
import { Metadata } from "next";

const data: Medicine[] = require("@/db/result.json");

type Medicine = {
  BrandName: string;
  Id: number;
  Formulation: string;
  CompanyName: string;
  PackSize: string;
  MRP: string;
  RegNoChar: string;
};

export default function BrandnameRootPage() {
  const uniqueBrands = Array.from(
    new Set(data.map((item: Medicine) => item.BrandName))
  );

  return (
    <main className="max-w-3xl mx-auto p-4" role="main">
      <h1 className="text-3xl font-bold mb-4">Complete List of Medicines made in Pakistan | {SITE_NAME}</h1>
      <p>Find all medicine by name , brandname ,or company name made in pakistan</p>
      <ul className="space-y-2">
        {uniqueBrands.map((brand) => (
          <li key={brand}>
            <a
              href={`/brandname/${encodeURIComponent(brand)}`}
              className="text-blue-600 hover:underline"
            >
              {brand}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const metadata : Metadata = {
  title : `Complete List of medicines made in pakistan | Find all Medicines made in pakistan | ${SITE_NAME}`,
  description : `Here is Complete List of medicines made in pakistan | Find Medicines made in pakistan | ${SITE_NAME}`,
  alternates: {
    canonical: `${BASE_URL}/brandname`
  },
  creator: SITE_NAME,
}