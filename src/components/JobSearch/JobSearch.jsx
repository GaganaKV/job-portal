import React from "react";

export default function JobSearch() {
  return (
    <div className=" grow p-8 bg-white rounded-2xl shadow-lg border border-gray-100 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Advanced Job Search</h2>

      {/* Job title */}
      <input
        type="text"
        placeholder="Job title or keywords"
        className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-3 rounded-lg w-full mb-4 text-gray-700"
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-3 rounded-lg w-full mb-4 text-gray-700"
      />

      {/* Job Type */}
      <select className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-3 rounded-lg w-full mb-4 text-gray-700">
        <option>Job Type</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Internship</option>
        <option>Contract</option>
      </select>

      {/* Salary */}
      <input
        type="text"
        placeholder="Salary Range (e.g. 40k - 60k)"
        className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-3 rounded-lg w-full mb-6 text-gray-700"
      />

      {/* CTA */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
        Search Jobs
      </button>
    </div>
  );
}
