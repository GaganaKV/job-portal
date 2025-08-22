import { Briefcase, Monitor, DollarSign, Palette, Megaphone } from "lucide-react";

export default function JobCategories() {
  const categories = [
    { name: "Tech", icon: <Monitor className="w-8 h-8 text-indigo-600" /> },
    { name: "Finance", icon: <DollarSign className="w-8 h-8 text-green-600" /> },
    { name: "Design", icon: <Palette className="w-8 h-8 text-pink-600" /> },
    { name: "Marketing", icon: <Megaphone className="w-8 h-8 text-yellow-600" /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Popular Categories
        </h2>
        <p className="text-gray-500 mb-10">
          Discover jobs across various industries tailored to your skills
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
