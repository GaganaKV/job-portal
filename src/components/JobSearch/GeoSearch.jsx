import React from "react";
import { MapPin } from "lucide-react";

export default function GeoSearch() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        <MapPin className="w-10 h-10 text-blue-500 animate-bounce" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Find Jobs Near You</h2>
      <p className="text-gray-600">
        🔍 Location-based job discovery is coming soon. Stay tuned!
      </p>
    </div>
  );
}
