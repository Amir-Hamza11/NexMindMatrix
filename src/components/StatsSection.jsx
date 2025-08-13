import React from "react";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { value: 145, suffix: "+", label: "Clients" },
    { value: 43, suffix: "+", label: "Countries" },
    { value: 28000, suffix: "+", label: "Surveys" },
    { value: 14000, suffix: "+", label: "B2B Surveys" },
    { value: 11000, suffix: "+", label: "B2C Surveys" },
    { value: 3000, suffix: "+", label: "Health Care Surveys" },
  ];

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="bg-[url('/src/assets/img/mapdotted.jpg')] 
                     bg-contain bg-center bg-no-repeat 
                     w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-nm-900">
            Driving Insights, Delivering Results
          </h2>
          <p className="text-gray-600 mt-3">
            Our deep industry knowledge and research expertise empower businesses worldwide.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center justify-center"
            >
              <span className="text-3xl font-bold text-nm-900">
                <CountUp end={stat.value} duration={2.5} separator="," />
                {stat.suffix}
              </span>
              <p className="mt-2 text-sm font-medium text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
