import React from "react";
import { Rocket } from "lucide-react";

export default function GettingStarted() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 max-w-md mx-auto text-center hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <Rocket className="w-12 h-12 text-green-500 animate-bounce" />
      </div>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Getting Started</h2>
      <p className="text-gray-600 mb-6">
        Personalized <span className="font-semibold text-green-500">recommendations</span> will be available after you complete your profile.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
        Complete Profile
      </button>
    </div>
  );
}
