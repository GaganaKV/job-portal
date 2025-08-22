import React from "react";
import { Briefcase, Users, Building2 } from "lucide-react";

const companies = [
  {
    name: "Google",
    logo: "/images/google_icon.svg",
    culture:
      "We believe in innovation, collaboration, and creating impact together.",
    jobs: [
      { title: "UI Designer", location: "Remote" },
      { title: "DevOps Engineer", location: "Chennai" },
    ],
  },
  {
    name: "Amazon",
    logo:"/images/amazon_icon.svg",
    culture: "Customer-centric, fast-paced, and data-driven.",
    jobs: [
      { title: "Backend Engineer", location: "Bangalore" },
      { title: "Frontend Developer", location: "Hyderabad" },
    ],
  },
];

export default function CompanyProfile() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Company Showcase
        </h2>
        <p className="text-gray-500 mb-10">
          Discover top companies, explore their culture, and apply directly.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {companies.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Logo and Name */}
              <div className="flex items-center gap-4 mb-6">
                {c.logo ? (
                  <img src={c.logo} alt={c.name} className="h-12 w-12 object-contain" />
                ) : (
                  <Building2 className="w-12 h-12 text-gray-400" />
                )}
                <h3 className="text-2xl font-bold text-gray-800">{c.name}</h3>
              </div>

              {/* Open Positions */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-700 mb-3">Open Positions</h4>
                <div className="space-y-3">
                  {c.jobs.map((j, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:shadow hover:bg-gray-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-semibold text-gray-800">{j.title}</p>
                          <span className="text-gray-500">{j.location}</span>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1 rounded-lg transition-colors">
                        Apply
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Culture */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">Our Culture</h4>
                <p className="text-gray-600 text-center">{c.culture}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
