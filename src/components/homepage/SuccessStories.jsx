import { Quote } from "lucide-react";

const stories = [
  { name: "Alice", story: "Landed my dream role in just 2 weeks!" },
  { name: "John", story: "Got hired at my favorite company!" },
  { name: "Sophia", story: "The process was smooth and quick!" },
  { name: "David", story: "I finally found a job that matches my skills!" },
];

export default function SuccessStories() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Success Stories
        </h2>
        <p className="text-gray-500 mb-10">
          Hear from people who found their dream jobs with us
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Quote className="w-10 h-10 text-blue-500 opacity-70" />
              </div>
              <p className="italic text-gray-700 text-lg">"{s.story}"</p>
              <p className="mt-4 font-semibold text-gray-900">- {s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
