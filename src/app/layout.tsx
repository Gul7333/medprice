import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SearchSuggestions from "@/components/SearchSuggestions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: "MedPrice – Latest Medicine Prices & Information in Pakistan | PakMedPrice",
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
      </body>
    </html>
  );
}
