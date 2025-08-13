import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const slides = [
    {
      image: "/images/collab.jpg",
      title:
        "Adaptable technology and tools & expertise to match your business needs",
      text: "We blend innovation with deep industry insight to deliver actionable intelligence.",
    },
    {
      image: "/images/team.jpg",
      title: "In NexMindMatrix quality and service we thrive upon",
      text: "Your goals drive our process — we deliver results you can trust.",
    },
    {
      image: "/images/kampus.jpg",
      title: "Your trusted partners for growth, from insights to action",
      text: "Transforming data into strategies that accelerate your business growth",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);

  const changeSlide = (newIndex) => {
    setPrev(current);
    setCurrent(newIndex);
  };

  const prevSlide = () => {
    changeSlide(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    changeSlide(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Previous image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 animate-fadeOut"
        style={{ backgroundImage: `url(${slides[prev].image})` }}
      />

      {/* Current image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 animate-fadeIn"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Glassmorphic content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div
          className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 md:p-12 text-center text-white shadow-2xl animate-fadeIn flex flex-col justify-center"
          style={{
            width: "90%",
            maxWidth: "90%",
            height: "70%",
            minHeight: "500px",
          }}
        >
          <h1
            key={slides[current].title}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-slideIn"
          >
            {slides[current].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
            {slides[current].text}
          </p>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-1.5 sm:p-2 rounded-full"
      >
        <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-1.5 sm:p-2 rounded-full"
      >
        <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
              current === index
                ? "bg-nm-800 scale-110 shadow-md"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
