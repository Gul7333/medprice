import { notFound } from "next/navigation";
import MedicineArticle from "@/components/MedicineArticle";
const data: Medicine[] = require("@/db/result.json");
export function generateStaticParams() {
  return data.map((item) => ({
    brandname: item.BrandName,
  }));
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
}: {
  params: { brandname: string };
}) {
  const brand = decodeURIComponent((await params).brandname).toLowerCase();

  const results: Medicine[] = data.filter(
    (item: Medicine) => item.BrandName.toLowerCase() === brand
  );

  if (results.length === 0) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-4" role="main">
      <header>
        <h1 className="text-3xl font-bold mb-4 capitalize">
          {brand} Price in Pakistan
        </h1>
        <p className="text-gray-600">
          View latest MRP, manufacturer, formulation, and pack details of{" "}
          {brand}.
        </p>
      </header>

      <section aria-labelledby="medicine-list" className="mt-6">
        <h2 id="medicine-list" className="sr-only">
          Available Products
        </h2>
        {results.map((item) => (
          <MedicineArticle key={item.Id} medicine={item} />
        ))}
      </section>
    </main>
  );
}
