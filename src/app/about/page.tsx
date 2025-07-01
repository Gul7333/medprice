import { BASE_URL, SITE_NAME } from "@/constant/constant";
import { Metadata } from "next";

export default function AboutPage() {
    return (
      <main className="max-w-3xl mx-auto p-4" role="main">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
  
        <p className="text-gray-700 mb-4">
          This website provides detailed information about medicines available in Pakistan. Users can explore medicines
          by <strong>brand name</strong> or <strong>manufacturer</strong>, enabling easy access to organized, reliable data.
        </p>
  
        <p className="text-gray-700 mb-4">
          In addition to medicine details, the site also offers the <strong>latest and most accurate prices (MRPs)</strong>
          available from official pharmaceutical records and regulatory data sources.
        </p>
  
        <p className="text-gray-700 mb-4">
          This project is especially useful for patients, healthcare providers, and pharmacists who want quick and verified
          access to market information.
        </p>
  
        <p className="text-gray-700 mb-4">
        This service is made for the people of Pakistan, with love and care, to help them stay informed and safe.
      </p>
      </main>
    );
  }
  
  export const metadata: Metadata = {
  title: `About ${SITE_NAME} | ${SITE_NAME}`,
  description:
    `${SITE_NAME} is hub for finding latest accurate prices of medicine in pakistan| ${SITE_NAME}`,
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  creator: `${SITE_NAME}`,
};