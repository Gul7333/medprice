import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SearchSuggestions from "@/components/SearchSuggestions";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: "PakMedPrice – Latest Medicine Prices & Information in Pakistan | PakMedPrice",
  description:
    "PakMedPrice helps you find accurate, up-to-date medicine prices and details in Pakistan. Browse medicines by brand or company name with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <SearchSuggestions/>
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-KSE671R4WT" />
      </body>
    </html>
  );
}





 function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center gap-6">
        {/* Title */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">PakDrugPrice</h2>
          <p className="text-sm text-gray-400 mt-1">
            💊 The best site for the{" "}
            <span className="text-blue-400">latest & accurate medicine prices</span> in Pakistan.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm font-medium">
          <a href="/brandname" className="hover:text-blue-400 transition-colors">
            Brand Names
          </a>
          <a href="/company" className="hover:text-blue-400 transition-colors">
            Companies
          </a>
          <a href="/alternative" className="hover:text-blue-400 transition-colors">
            Alternatives
          </a>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PakDrugPrice. All rights reserved.
      </div>
    </footer>
  );
}
