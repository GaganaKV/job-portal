import { Search, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 text-center">
      {/* App Name + Logo (center) */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <Briefcase className="w-8 h-8 text-yellow-400" />
        <span className="text-2xl font-bold tracking-wide">HireHub</span>
      </div>

      {/* Login & Register (top-right corner) */}
      <div className="absolute top-6 right-6 flex gap-4">
        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          Login
        </button>
        <button className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
          Register
        </button>
      </div>

      {/* Hero Content */}
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Find Your <span className="text-yellow-400">Dream Job</span> Today
        </h1>
        <p className="mt-4 text-lg text-blue-100">
          Search from thousands of opportunities tailored to your skills
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search jobs, companies..."
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 transition-colors">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
