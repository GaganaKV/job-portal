import React from "react";
import { Compass } from "lucide-react";

export default function GuidedTour() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 max-w-md mx-auto text-center hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <Compass className="w-12 h-12 text-blue-500 animate-bounce" />
      </div>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Welcome Tour</h2>
      <p className="text-gray-600 mb-6">
        We’ll walk you through the platform features <span className="font-semibold text-blue-500">step by step</span>.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
        Start Tour
      </button>
    </div>
  );
}
