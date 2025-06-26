import { notFound } from "next/navigation";
import MedicineArticle from "@/components/MedicineArticle";
import { Metadata } from "next";
const data: Medicine[] = require("@/db/result.json");


type Props = {
  params: Promise<{
    brandname: string;
  }>;
};
export function generateStaticParams() {
  return data.map((item) => ({
    brandname: encodeURIComponent(item.BrandName),
  }));
}
// Optional: to support static generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedBrand = decodeURIComponent((await params).brandname);
  const baseUrl = "https://medprice.pk";

  return {
    title: `${decodedBrand} price | ${decodedBrand} price in pakistan | medprice.pk`,
    description: `${decodedBrand} Price | Latest Price of ${decodedBrand} in pakistan | medprice.pk`,
    creator: "Medprice.pk",
    alternates: {
      canonical: `${baseUrl}/brandname/${(await params).brandname}`,
    },
  };
}


type Medicine = {
  BrandName: string;
  Id: number;
  Formulation: string;
  CompanyName: string;
  PackSize: string;
  MRP: string;
  RegNoChar: string;
};

export default async function Page({
  params,
}: Props) {
  const brand = decodeURIComponent((await params).brandname).toLowerCase();

  const results: Medicine[] = data.filter(
    (item: Medicine) => item.BrandName.toLowerCase() === brand
  );

  if (results.length === 0) return notFound();

  // Get first result's index in full data list to find next medicines
  const firstIndex = data.findIndex(
    (item) => item.BrandName.toLowerCase() === brand
  );

  const nextFive = data.slice(
    firstIndex + results.length,
    firstIndex + results.length + 5
  );

  return (
    <main className="max-w-3xl mx-auto p-4" role="main">
      <header>
        <h1 className="text-3xl font-bold mb-4 capitalize">
          {brand} Price in Pakistan 
        </h1>
        <p className="text-gray-600">
          View latest Price, manufacturer, formulation, and pack details of
          {brand}.
        </p>
      </header>

      <section aria-labelledby="medicine-list" className="mt-6">
        <h2 id="medicine-list" className="sr-only">
          Available Products of {brand}
        </h2>
        {results.map((item) => (
          <MedicineArticle key={item.Id} medicine={item} />
        ))}
      </section>

      {nextFive.length > 0 && (
        <section className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Explore More Medicines
          </h2>
          <div className="grid gap-4">
            {nextFive.map((item) => (
              <a
                key={item.Id}
                href={`/brandname/${encodeURIComponent(item.BrandName)}`}
                className="border rounded-lg p-4 shadow-sm text-left"
              >
                <p className="font-medium text-gray-900">{item.BrandName}</p>
                <p className="text-sm text-gray-600">{item.CompanyName}</p>
                <p className="text-sm text-gray-700 mt-1">
                  MRP: Rs. {item.MRP}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
