import { Link } from "react-router-dom";

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
          <Link to="/contact" className="bg-gradient-to-r from-[#ff7e6b] to-[#f6e27e] text-nm-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-[#f6e27e] hover:to-[#ff7e6b] transition">
            Get Started
          </Link>
          <Link to="/services" className="border-2 border-nm-600 text-nm-600 px-8 py-3 rounded-lg hover:bg-nm-800 transition">
            Learn More
          </Link>
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


