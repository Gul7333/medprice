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
      <h1 className="text-3xl font-bold mb-4">
        Alternative of All Medicines in Pakistan | medprice.pk
      </h1>
      <p>Click on any brand name to find its alternative</p>
      <ul className="space-y-2">
        {uniqueBrands.map((brand) => (
          <li key={brand}>
            <a
              href={`/alternative/${encodeURIComponent(brand)}`}
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

export const metadata: Metadata = {
  title:
    "Alternative Brands | Find alternative brand of Medicines made in pakistan | medprice.pk",
  description:
    "Here is Complete List of medicines made in pakistan | Find alternatives of Medicines made in pakistan | medprice.pk",
  alternates: {
    canonical: "https://medprice.pk/alternative",
  },
  creator: "Medprice.pk",
};
