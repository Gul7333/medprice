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

  const companyDisplayName = results[0].CompanyName;

  return (
    <main className="max-w-5xl mx-auto p-4" role="main">
      <header>
        <h1 className="text-3xl font-bold mb-4">
          Medicines by {companyDisplayName} in Pakistan | {companyDisplayName} medicines
        </h1>
        <p className="text-gray-600">
          A complete list of medicines manufactured by {companyDisplayName},
          including brand names, formulations, and latest prices.
        </p>
      </header>

      <section className="mt-8" aria-labelledby="company-medicine-list">
        <h2 id="company-medicine-list" className="sr-only">
          List of Medicines
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((item) => (
            <Link
              key={item.Id}
              href={`/brandname/${encodeURIComponent(item.BrandName)}`}
              className="block rounded-xl border p-4 shadow-sm hover:shadow-md transition duration-200 bg-white hover:bg-blue-50"
            >
              <h3 className="text-blue-700 font-semibold text-lg">
                {item.BrandName}
              </h3>
              <p className="text-sm text-gray-600">{item.Formulation}</p>
              <p className="text-sm text-gray-500 mt-1">
                Pack: {item.PackSize}
              </p>
              <p className="text-sm text-gray-500">Reg#: {item.RegNoChar}</p>
              <p className="mt-2 font-medium text-green-700">
                MRP: Rs. {item.MRP}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const uniqueCompanies = Array.from(
    new Set(data.map((item) => item.CompanyName))
  );

  return uniqueCompanies.map((company) => ({
    companyname: encodeURIComponent(company),
  }));
}

type Props = {
  params: Promise<{ companyname: string }>
}

// Optional: to support static generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedCompanyName = decodeURIComponent((await params).companyname);
  const baseUrl = "https://medprice.pk";

  return {
    title: `${decodedCompanyName} | All Medicine manufactred by ${decodedCompanyName} in pakistan | medprice.pk`,
    description: `A complete list of medicines manufactured by ${decodedCompanyName} ,including brand names, formulations, and latest prices.`,
    creator: "Medprice.pk",
    alternates: {
      canonical: `${baseUrl}/company/${(await params).companyname}`,
    },
  };
}