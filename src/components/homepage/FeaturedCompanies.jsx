import React from "react";
import { Building2 } from "lucide-react";

export default function FeaturedCompanies() {
  const companies = [
    { name: "Google", logo: "/images/google_icon.svg" },
    { name: "Amazon", logo: "/images/amazon_icon.svg" },
    { name: "Microsoft", logo: "/images/Microsoft_Logo.svg" },
    { name: "Adobe", logo: "/images/adobe_icon.svg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Featured Companies
        </h2>
        <p className="text-gray-500 mb-10">
          Explore top companies hiring now
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((c, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100 
              hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-12 w-12 object-contain"
                  />
                ) : (
                  <Building2 className="w-12 h-12 text-gray-400" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-700">{c.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
