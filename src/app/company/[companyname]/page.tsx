import { notFound } from "next/navigation";
import MedicineArticle from "@/components/MedicineArticle";
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

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ companyname: string }>;
}) {
  const companyParam = decodeURIComponent(
    (await params).companyname
  ).toLowerCase();

  const results: Medicine[] = data.filter(
    (item: Medicine) => item.CompanyName.toLowerCase() === companyParam
  );

  if (results.length === 0) return notFound();

  // Use the exact company name from the first match (for correct capitalization)
  const companyDisplayName = results[0].CompanyName;

  return (
    <main className="max-w-3xl mx-auto p-4" role="main">
      <header>
        <h1 className="text-3xl font-bold mb-4">
          Medicines by {companyDisplayName} in Pakistan
        </h1>
        <p className="text-gray-600">
          Complete list of medicines manufactured by {companyDisplayName}.
        </p>
      </header>

      <section className="mt-6" aria-labelledby="company-list">
        <h2 id="company-list" className="sr-only">
          Company Medicines
        </h2>
        {results.map((item) => (
          <MedicineArticle key={item.Id} medicine={item} />
        ))}
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const uniqueCompanies = Array.from(
    new Set(data.map((item) => item.CompanyName))
  );

  return uniqueCompanies.map((company) => ({
    companyname: company, // ✅ match [companyname] in your route
  }));
}
