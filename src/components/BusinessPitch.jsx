import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            NexMindMatrix Provides High-Performance Solutions
            <br />
            For Multiple Industries & Technologies
          </h2>
          <p className="text-gray-500 mb-6">
            We combine deep market expertise with cutting-edge analytics to
            deliver actionable insights for your business. From market strategy
            and innovation to operational execution, we help you make confident
            decisions that drive growth.
          </p>
          <button className="bg-nm-700 text-white px-6 py-3 rounded-lg shadow hover:bg-nm-800 transition-colors">
            View Our Portfolio
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/images/office.jpg"
            alt="Business presentation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
