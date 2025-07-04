import { notFound } from "next/navigation";
import MedicineArticle from "@/components/MedicineArticle";
import { Metadata } from "next";
import { BASE_URL, SITE_NAME } from "@/constant/constant";
import Link from "next/link";
const data: Medicine[] = require("@/db/result.json");


type Props = {
  params: Promise<{
    brandname: string;
  }>;
};
export function generateStaticParams() {
  return data.map((item) => ({
    brandname: item.BrandName,
  }));
}
// Optional: to support static generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedBrand = decodeURIComponent((await params).brandname);
  

  return {
    title: `${decodedBrand} price | ${decodedBrand} price in pakistan | ${SITE_NAME}`,
    description: `${decodedBrand} Price | Latest Price of ${decodedBrand} in pakistan | ${SITE_NAME}`,
    creator: SITE_NAME,
    alternates: {
      canonical: `${BASE_URL}/brandname/${(await params).brandname}`,
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
  const brand = decodeURIComponent((await params).brandname).toLowerCase().trim();

  const results: Medicine[] = data.filter(
    (item: Medicine) => item.BrandName.toLowerCase().trim() === brand
  );

  if (results.length === 0) return notFound();

  // Get first result's index in full data list to find next medicines
  const lastID = results[results.length - 1].Id
  const firstIndex = data.findIndex(
    (item) => item.Id === lastID
  );

  const nextFive = data.slice(
    firstIndex + results.length,
    firstIndex + results.length + 5
  );

  return (
    <main className="max-w-3xl mx-auto p-4" role="main">
      <header>
        <h1 className="text-3xl font-bold mb-4 capitalize">
          {brand} Price in Pakistan </h1>
        <p className="text-gray-600">
          View latest Price, manufacturer, formulation, and pack details of {brand}.
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
      <section>
        <h2>
        Alternateves Brand of {brand} are available in the list below.
        </h2>
        <Link href={`/alternative/${encodeURIComponent(brand)}`} className="mt-4">
          Alternative brand of {brand}
        </Link>  
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
                <p className="font-medium text-gray-900 dark:text-gray-300">{item.BrandName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.CompanyName}</p>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
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
