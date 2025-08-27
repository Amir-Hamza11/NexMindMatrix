// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const HeroSection = () => {
//   const slides = [
//     {
//       image: "/images/collab.jpg",
//       title:
//         "Adaptable technology and expertise tailored to your business needs",
//       text: "We blend innovation with deep industry insight to deliver actionable intelligence.",
//     },
//     {
//       image: "/images/team.jpg",
//       title: "At NexMindMatrix, quality and service drive everything we do",
//       text: "Your goals power our process — we deliver results you can trust.",
//     },
//     {
//       image: "/images/kampus.jpg",
//       title: "Your trusted partner for growth, from insights to action",
//       text: "We transform data into strategies that accelerate your business growth.",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [prev, setPrev] = useState(0);

//   const changeSlide = (newIndex) => {
//     setPrev(current);
//     setCurrent(newIndex);
//   };

//   const prevSlide = () => {
//     changeSlide(current === 0 ? slides.length - 1 : current - 1);
//   };

//   const nextSlide = () => {
//     changeSlide(current === slides.length - 1 ? 0 : current + 1);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [current]);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Previous image (for fading transition) */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-0 scale-105 transition duration-1000 ease-out"
//         style={{ backgroundImage: `url(${slides[prev].image})` }}
//       />

//       {/* Current image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-100 scale-100 transition duration-1000 ease-in"
//         style={{ backgroundImage: `url(${slides[current].image})` }}
//       />

//       {/* Gradient overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 flex items-center h-full px-6 md:px-16">
//         <div className="max-w-3xl text-white text-center md:text-left">
//           <h1
//             key={slides[current].title}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn"
//           >
//             {slides[current].title}
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fadeIn delay-200">
//             {slides[current].text}
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-nm-800 hover:bg-nm-900 text-white font-semibold rounded-lg shadow-lg transition">
//               Get Free Consultation
//             </button>
//             <button className="px-6 py-3 border border-white/80 hover:bg-white/20 rounded-lg text-white transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Left arrow */}
//       <button
//         onClick={prevSlide}
//         aria-label="Previous Slide"
//         className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full"
//       >
//         <ChevronLeft className="text-white w-6 h-6" />
//       </button>

//       {/* Right arrow */}
//       <button
//         onClick={nextSlide}
//         aria-label="Next Slide"
//         className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full"
//       >
//         <ChevronRight className="text-white w-6 h-6" />
//       </button>

//       {/* Pagination dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => changeSlide(index)}
//             className={`w-4 h-4 rounded-full transition-all ${
//               current === index
//                 ? "bg-nm-800 scale-125 shadow-md animate-pulse"
//                 : "bg-white/60 hover:bg-white"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] overflow-hidden px-8 md:px-20 py-16">
      {/* Custom Blob 1 - Organic shape */}
      <svg
        className="absolute top-10 right-0 w-96 h-96 opacity-30 pointer-events-none"
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

      {/* Bottom Wave Blob */}
      <svg
        className="absolute bottom-0 left-0 w-full h-48 opacity-40 pointer-events-none"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        fill="#1b263b" // nm-800 from your palette
      >
        <path d="M0,256L80,245.3C160,235,320,213,480,192C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>

      {/* Left Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-nm-600 text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Market Research, Simplified & Strategic
        </h1>
        <p className="text-nm-700 text-lg md:text-xl max-w-xl mb-10">
          Transform your data into actionable insights. Our research methodology blends proven strategies with innovative tools tailored to drive your business forward.
        </p>
        <div className="flex gap-6">
          <button className="bg-gradient-to-r from-[#ff7e6b] to-[#f6e27e] text-nm-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-[#f6e27e] hover:to-[#ff7e6b] transition">
            Get Started
          </button>
          <button className="border-2 border-nm-600 text-nm-600 px-8 py-3 rounded-lg hover:bg-nm-800 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Media */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
        <img
          src="/images/Group-discussion.svg"
          alt="Market Research Graphic"
          className="w-80 h-80 md:w-[400px] md:h-[400px] drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;


