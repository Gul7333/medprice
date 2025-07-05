import Link from "next/link";



export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-4 text-center" role="main">
      <h1 className="text-4xl font-bold mb-6">Welcome to PakMedPrice</h1>
      <p className="text-gray-700 mb-6 text-lg">PakMedprice is hub for finding latest price and information of medicine in pakistan</p>
      <p className="text-gray-700 mb-6 text-lg">
        Find accurate and updated prices of medicines available in Pakistan.
        Browse by <strong>brand name</strong> or <strong>company</strong> and explore detailed information about each product.
      </p>

      <div className="flex flex-col gap-4 items-center">
        <Link
          href="/brandname"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Browse by Brand Name
        </Link>
        <Link
          href="/company"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Browse by Company
        </Link>
        <Link
          href="/about"
          className="text-blue-500 hover:underline mt-4"
        >
          Learn more about PakMedPrice
        </Link>
      </div>

      <section className="mt-10 text-left">
        <h2 className="text-2xl font-semibold mb-4">Medicine Price Lookup Made Easy</h2>
        <p className="text-gray-700 mb-4">
          PakMedPrice is your trusted source for checking the latest <strong>medicine prices in Pakistan</strong>.
          Whether you're looking for branded medicines or generic alternatives, our platform helps you compare
          and stay informed. We list prices according to the official Maximum Retail Price (MRP) provided by
          manufacturers and regulators.
        </p>

        <p className="text-gray-700 mb-4">
          With PakMedPrice, you can search medicines by brand name or by pharmaceutical company. This makes it easier for
          patients, doctors, and pharmacists to find the right medicine and ensure it's fairly priced.
          From antibiotics to painkillers, our database is growing with regularly updated information.
        </p>

        <p className="text-gray-700 mb-4">
          Our mission is to make <strong>medicine information in Pakistan</strong> more transparent and accessible.
          No more guessing or relying on outdated labels—use PakMedPrice to check the correct, updated MRP and product details.
        </p>
      </section>
    </main>
  );
}
