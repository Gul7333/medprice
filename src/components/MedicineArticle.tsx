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
    <article
    itemScope
    itemType="https://schema.org/Product"
    className="border rounded-lg shadow p-4 mb-6 bg-white"
  >
    <header>
      <h2 className="text-xl font-bold text-blue-700" itemProp="name">
        {medicine.BrandName} {medicine.PackSize}
      </h2>
      <p className="text-sm text-gray-500">
        Reg#: <span itemProp="sku">{medicine.RegNoChar}</span>
      </p>
    </header>
  
    <section aria-labelledby={`desc-${medicine.Id}`}>
      <h3 id={`desc-${medicine.Id}`} className="sr-only">Description</h3>
      <p className="text-gray-700" itemProp="description">
        {medicine.Formulation}
      </p>
    </section>
  
    <section className="mt-2" aria-labelledby={`info-${medicine.Id}`}>
      <h3 id={`info-${medicine.Id}`} className="sr-only">Medicine Info</h3>
      <p className="text-sm text-gray-500">
        Pack Size: <span itemProp="size">{medicine.PackSize}</span>
      </p>
      <p className="text-sm text-gray-500">
        Company:{" "}
        <span itemProp="manufacturer" itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">{medicine.CompanyName}</span>
        </span>
      </p>
    </section>
  
    <section
      className="mt-3"
      itemProp="offers"
      itemScope
      itemType="https://schema.org/Offer"
      aria-labelledby={`price-${medicine.Id}`}
    >
      <h3 id={`price-${medicine.Id}`} className="sr-only">Price</h3>
      <p className="text-lg font-semibold text-green-700">
        Price: Rs. <span itemProp="price">{parseFloat(medicine.MRP).toFixed(2)}</span>
      </p>
      <meta itemProp="priceCurrency" content="PKR" />
      <link itemProp="availability" href="https://schema.org/InStock" />
    </section>
  
    <section className="mt-4 text-sm text-gray-600">
      <h3 className="font-semibold mb-1">Related Keywords</h3>
      <ul className="list-disc pl-4">
        {[
          `${medicine.BrandName} price in Pakistan`,
          `${medicine.BrandName} tablet price`,
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
