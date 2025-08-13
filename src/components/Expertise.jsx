import React from "react";
import { FaClock, FaChartLine, FaGlobe, FaClipboardCheck, FaUsersCog, FaFlag, FaMoneyBillWave, FaLightbulb } from "react-icons/fa";

export default function DifferentiatorsSection() {
  const features = [
    { icon: <FaClock />, title: "Round the Clock Service" },
    { icon: <FaClipboardCheck />, title: "Best in Quality Assurance for Projects" },
    { icon: <FaFlag />, title: "Global Coverage for Projects" },
    { icon: <FaChartLine />, title: "Market Research Industry Experience" },
    { icon: <FaUsersCog />, title: "Professional Project Management Team" },
    { icon: <FaGlobe />, title: "Domain Expertise for over a Decade" },
    { icon: <FaGlobe />, title: "Robust Online Panels for B2B, B2C, HealthCare" },
    { icon: <FaMoneyBillWave />, title: "Highly Competitive Pricing with Quick Turnaround Time" },
    { icon: <FaLightbulb />, title: "One-Stop Solutions to all your Research Needs" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nm-900">
            Our Key Differentiators & Expertise
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Why Clients work with Us
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg transition transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex-shrink-0 bg-nm-800 text-white rounded-full p-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
