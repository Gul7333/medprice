// /alternative/[brandname]/page.tsx

// app/alternative/[brandname]/page.tsx

import { BASE_URL, SITE_NAME } from "@/constant/constant";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

type Props = {
  params: Promise<{
    brandname: string;
  }>;
};

// Optional: to support static generation
export async function generateStaticParams() {
  const uniqueBrands = [...new Set(data.map((item) => item.BrandName))];
  return uniqueBrands.map((brand) => ({
    brandname: brand,
  }));
}
// Optional: to support static generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedBrand = decodeURIComponent((await params).brandname);
  const baseUrl = BASE_URL

  return {
    title: `${decodedBrand} Alternatives | Alternative of ${decodedBrand} in pakistan | ${SITE_NAME}`,
    description: `${decodedBrand} Alternatives | Alternative of ${decodedBrand} in pakistan | ${SITE_NAME}`,
    creator: SITE_NAME,
    alternates: {
      canonical: `${baseUrl}/alternative/${(await params).brandname}`,
    },
  };
}

export default async function AlternativePage({ params }: Props) {
  //   const decodedBrand = decodeURIComponent(params.brandname).replace(/-/g, " ");
  const decodedBrand = decodeURIComponent((await params).brandname);

  const currentMedicine = data.find(
    (item) => item.BrandName.toLowerCase() === decodedBrand.toLowerCase()
  );

  if (!currentMedicine) return notFound();

  // Use RegNoChar or another field like GenericName if available
  const identifier = currentMedicine.Formulation;

  const alternatives = data.filter((item) =>
    item.Formulation.toLowerCase().includes(identifier.toLowerCase())
  );

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <header>
        <h1>
          {decodedBrand} Alternative | Alternatives of {decodedBrand} in pakistan
        </h1>
        <p>
          Alternative of {decodedBrand} in Pakistan | Latest Price of
          Alternative of {decodedBrand} in Pakistan | {SITE_NAME}
        </p>
      </header>

      <hr />

      <h2>Available Alternatives</h2>
      {alternatives.length === 0 ? (
        <p>No alternatives found.</p>
      ) : (
        <section style={{ paddingLeft: 0, listStyle: "none" }}>
          {alternatives.map((alt) => (
            <Link
              key={alt.Id}
              href={`/brandname/${encodeURIComponent(alt.BrandName)}`}
              className="mb-4 block rounded-xl border p-4 shadow-sm hover:shadow-md transition duration-200 bg-white hover:bg-blue-50"
            >
              <h3 className="text-blue-700 font-semibold text-lg">
                {alt.BrandName}
              </h3>
              <p className="text-sm text-gray-600">{alt.Formulation}</p>
              <p className="text-sm text-gray-500 mt-1">Pack: {alt.PackSize}</p>
              <p className="mt-2 font-medium text-green-700">
                MRP: Rs. {alt.MRP}
              </p>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
