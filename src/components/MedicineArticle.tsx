type Medicine = {
  Id: number;
  BrandName: string;
  Formulation: string;
  CompanyName: string;
  PackSize: string;
  MRP: string;
  RegNoChar: string;
};

export default function MedicineArticle({ medicine }: { medicine: Medicine }) {
  return (
    <article className="border rounded-lg shadow p-4 mb-6 bg-white dark:bg-gray-900">
      <header>
        <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400">
          {medicine.BrandName} {medicine.PackSize}
        </h2>
        <p className="text-sm">
          Reg#: <span>{medicine.RegNoChar}</span>
        </p>
      </header>

      <section>
        <h3 id={`desc-${medicine.Id}`} className="sr-only">
          Description of {medicine.BrandName}
        </h3>
        <p className="text-gray-700">
          {medicine.Formulation}
        </p>
      </section>

      <section className="mt-2" aria-labelledby={`info-${medicine.Id}`}>
        <h3 id={`info-${medicine.Id}`} className="sr-only">
          Medicine Info
        </h3>
        <p className="text-sm text-gray-500">
          Pack Size: <span>{medicine.PackSize}</span>
        </p>
        <p className="text-sm text-gray-500">
          Company: <span>{medicine.CompanyName}</span>
        </p>
      </section>

      <section className="mt-3">
        <h3 id={`price-${medicine.Id}`} className="sr-only">
          Price of {medicine.BrandName}
        </h3>
        <p className="text-lg font-semibold text-green-700 dark:text-green-400">
          Price: Rs. <span>{parseFloat(medicine.MRP).toFixed(2)}</span>
        </p>
      </section>

      <section className="mt-4 text-sm text-gray-600">
        <h3 className="font-semibold mb-1">Related Keywords</h3>
        <ul className="list-disc pl-4">
          {[
            `${medicine.BrandName} price in Pakistan`,
            `${medicine.BrandName} tablet price`,
            `${medicine.BrandName} Capsule price`,
            `${medicine.CompanyName} ${medicine.BrandName} price`,
            `Buy ${medicine.BrandName} online`,
            `${medicine.BrandName} ${
              medicine.Formulation.toLowerCase().replace(/[^\w\s]/gi, "").split(" ").find((w) => w.match(/\d+mg/)) || ""
            } uses`,
            `${medicine.BrandName} syrup price`,
            `${medicine.BrandName} pack ${medicine.PackSize} cost`,
          ].map((phrase, idx) => (
            <li key={idx}>{phrase}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
