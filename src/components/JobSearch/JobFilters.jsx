import React from "react";

export default function JobFilters() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 w-full max-w-xs">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Filters</h3>

      {/* Work Mode */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Work Mode</h4>
        <label className="flex items-center gap-2 mb-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          Remote
        </label>
        <label className="flex items-center gap-2 mb-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          On-site
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          Hybrid
        </label>
      </div>

      {/* Job Type */}
      <div>
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Job Type</h4>
        <label className="flex items-center gap-2 mb-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          Full-time
        </label>
        <label className="flex items-center gap-2 mb-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          Part-time
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          Internship
        </label>
      </div>
    </div>
  );
}
