import { Metadata } from "next";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-4" role="main">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="text-gray-700 mb-4">
        If you have any questions, suggestions, or feedback, feel free to
        contact us at:
      </p>

      <p className="text-blue-600 text-lg">
        <a
          href="mailto:prodevsolution.pk@gmail.com"
          className="hover:underline"
        >
          prodevsolution.pk@gmail.com
        </a>
      </p>
    </main>
  );
}
export const metadata: Metadata = {
  title: "Contact page of Medprice.pk | medprice.pk",
  description:
    "Medprice.pk is hub for finding latest accurate prices of medicine in pakistan | medprice.pk",
  alternates: {
    canonical: "https://medprice.pk/contact",
  },
  creator: "Medprice.pk",
};
