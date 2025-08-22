import React from "react";

const jobs = [
  { title: "Frontend Developer", company: "Google", location: "Remote" },
  { title: "Backend Engineer", company: "Amazon", location: "Bangalore" },
  { title: "UI/UX Designer", company: "Adobe", location: "San Francisco" },
  { title: "Data Scientist", company: "Microsoft", location: "New York" },
];

export default function JobResults() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Results</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 
            hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600 mt-1">
              {job.company} • <span className="font-medium">{job.location}</span>
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-colors">
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
