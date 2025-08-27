// import React from "react";

// export default function AboutSection() {
//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
//             NexMindMatrix Provides High-Performance Solutions
//             <br />
//             For Multiple Industries & Technologies
//           </h2>
//           <p className="text-gray-500 mb-6">
//             We combine deep market expertise with cutting-edge analytics to
//             deliver actionable insights for your business. From market strategy
//             and innovation to operational execution, we help you make confident
//             decisions that drive growth.
//           </p>
//           <button className="bg-nm-700 text-white px-6 py-3 rounded-lg shadow hover:bg-nm-800 transition-colors">
//             View Our Portfolio
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1">
//           <img
//             src="/images/office.jpg"
//             alt="Business presentation"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Left Blob + Illustration */}
        <div className="flex-1 relative flex justify-center items-center z-10 mt-10 md:mt-0">
          {/* Blob SVG - absolute behind */}
          <svg
            className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#778da9" // nm-700 from your palette
              d="M56.4,-63.9C71.2,-54.9,80,-35.2,79.2,-17.2C78.5,0.8,68.3,17.1,57.3,30.2C46.3,43.2,34.5,52.9,19.8,61.2C5.1,69.5,-12.6,76.4,-30.8,74.3C-49,72.2,-67.7,61,-78.9,44.3C-90,27.5,-93.6,5.2,-88.9,-14.6C-84.1,-34.4,-71,-51.8,-54.8,-60.5C-38.6,-69.3,-19.3,-69.5,0.8,-70.4C20.8,-71.2,41.7,-72.9,56.4,-63.9Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Illustration Image */}
          <img
            src="/images/Design-team.svg"
            alt="Market Research Illustration"
            className="w-80 h-80 md:w-[400px] md:h-[400px] drop-shadow-2xl relative"
          />

          {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
        </div>

        {/* Right Text Content */}
        <div className="flex-1 z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            NexMindMatrix Provides High-Performance Solutions
            <br />
            For Multiple Industries & Technologies
          </h2>
          <p className="text-gray-500 mb-6 max-w-lg">
            We combine deep market expertise with cutting-edge analytics to
            deliver actionable insights for your business. From market strategy
            and innovation to operational execution, we help you make confident
            decisions that drive growth.
          </p>
          <button className="bg-nm-700 text-white px-6 py-3 rounded-lg shadow hover:bg-nm-800 transition-colors">
            View Our Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}




