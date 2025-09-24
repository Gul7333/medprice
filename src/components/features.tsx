
import Link from "next/link";
import { Search, Factory, RefreshCcw } from "lucide-react"; // modern icons

export default function Features() {
  const features = [
    {
      title: "Search by Brand Name",
      desc: "Quickly find accurate medicine prices by searching with the brand name.",
      icon: <Search className="w-8 h-8 text-blue-500" />,
      href: "/brandnames",
    },
    {
      title: "Explore All Companies",
      desc: "Browse through pharmaceutical companies and view their complete medicine lists.",
      icon: <Factory className="w-8 h-8 text-green-500" />,
      href: "/categories",
    },
    {
      title: "Find Alternatives",
      desc: "Discover cost-effective and reliable alternatives for your medicines.",
      icon: <RefreshCcw className="w-8 h-8 text-purple-500" />,
      href: "/alternatives",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <Link
              key={i}
              href={f.href}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
