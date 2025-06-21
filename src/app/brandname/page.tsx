import { notFound } from "next/navigation";
import MedicineArticle from "@/components/MedicineArticle";
const data = require("@/db/result.json");

type Medicine = {
  BrandName: string;
  Id: number;
  Formulation: string;
  CompanyName: string;
  PackSize: string;
  MRP: string;
  RegNoChar: string;
};

export default function BrandPage({ params }: { params: { brandname: string } }) {
  const brand = decodeURIComponent(params.brandname).toLowerCase();

  const results: Medicine[] = data.filter((item: Medicine) =>
    item.BrandName.toLowerCase().includes(brand)
  );

  if (results.length === 0) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Results for: {params.brandname}</h1>
      {results.map((item) => (
        <MedicineArticle key={item.Id} medicine={item} />
      ))}
    </main>
  );
}
