import { Metadata } from "next";
import Link from "next/link";
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

export default function CompanyRootPage() {
  const uniqueCompanies = Array.from(
    new Set(data.map((item: Medicine) => item.CompanyName))
  );

  return (
    <main className="max-w-3xl mx-auto p-4" role="main">
      <h1 className="text-3xl font-bold mb-4">All Pharmaceutical Companies in Pakistan | medprice.pk</h1>
      <p>Here is List of all pharmaceutical companies of pakistan </p>
      
      <ul className="space-y-2">
        {uniqueCompanies.map((company) => (
          <li key={company}>
            <Link
              href={`/company/${encodeURIComponent(company)}`}
              className="text-blue-600 hover:underline"
            >
              {company}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Complete List of pharmaceutical Companies | Find all Companies of Pakistan | medprice.pk",
  description:
    "Here is the complete list of pharmaceutical companies in Pakistan. Find medicines manufactured in Pakistan. | medprice.pk",
  alternates: {
    canonical: "https://medprice.pk/company",
  },
  creator: "Medprice.pk", // optional: adds consistency
};