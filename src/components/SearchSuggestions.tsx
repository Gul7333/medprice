"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function SearchSuggestions() {
  const [query, setQuery] = useState("");
  const [allNames, setAllNames] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [modeofsearch, setModeofsearch] = useState("brand");
  const router = useRouter();
  const handleChangemode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModeofsearch(e.target.value);
  };
  useEffect(() => {
    let url = "";
    switch (modeofsearch) {
      case "brand":
        url = "/medicineword.json";
        break;
      case "company":
        url = "/Companyword.json";
        break;

      default:
        url = "/medicineword.json";

        break;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllNames(data))
      .catch((err) => console.error("Failed to load medicine names:", err));
  }, [modeofsearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = allNames
      .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 10);
    setSuggestions(filtered);
  };

  const handleSelect = (name: string) => {
    setQuery(name);
    setSuggestions([]);
    modeofsearch === "brand"
      ? router.push(`/brandname/${encodeURIComponent(name)}`)
      : router.push(`/company/${encodeURIComponent(name)}`);
  };

  return (
    <div className="relative max-w-xl mx-auto mt-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search medicine..."
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
      <div className="flex justify-self-center gap-2">
        <label htmlFor="brand">Brand</label>
        <input
          type="radio"
          id="brand"
          value={"brand"}
          defaultChecked
          name="mode"
          onChange={handleChangemode}
        />
        <label htmlFor="company">Company</label>
        <input
          type="radio"
          id="company"
          value={"company"}
          name="mode"
          onChange={handleChangemode}
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="text-black absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-md shadow z-10 max-h-60 overflow-y-auto">
          {suggestions.map((name, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleSelect(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
