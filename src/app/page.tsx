import MedicineArticle from "@/components/MedicineArticle";
import Image from "next/image";
const data: any[] = require("@/db/result.json");

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      {data.slice(0, 10).map((item, idx) => (
        <MedicineArticle key={item.Id || idx} medicine={item} />
      ))}
    </main>
  );
}
