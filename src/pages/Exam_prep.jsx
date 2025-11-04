import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Exam_prep = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/admission");
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 overflow-hidden">
      {/* Globe Image */}
      <img
        src="./globe.png"
        alt="globe"
        className="absolute top-8 sm:top-12 lg:top-15 left-2 sm:left-4 lg:left-8 w-16 sm:w-20 md:w-24 lg:w-30 opacity-60 sm:opacity-80 hidden sm:block"
      />

      {/* Flower Image */}
      <img
        src="./flower.png"
        alt="flower"
        className="absolute top-8 sm:top-12 lg:top-15 right-4 sm:right-8 lg:right-20 w-8 sm:w-10 md:w-12 lg:w-15 hidden md:block"
      />

      {/* Title Section */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 relative z-10">
        <div className="flex items-center justify-center gap-2">
          <img src="./icon.svg" alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
          <p className="text-[#FE543D] text-xs sm:text-sm font-medium tracking-wide leading-6 sm:leading-8">
            INTERVIEW PREPARATION
          </p>
          <img src="./icon.svg" alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <h2 className="text-[#0E2A46] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight sm:leading-tight lg:leading-12 mt-2 sm:mt-3">
          Your Gateway to Dream Jobs
        </h2>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">

        {/* Left Card */}
        <div
          className="rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between bg-no-repeat bg-cover bg-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] relative overflow-hidden"
          style={{ backgroundImage: `url(${"./left_card.jpeg"})` }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full relative z-10">
            <div className="max-w-xs text-white text-center sm:text-left mb-4 sm:mb-0">
              <p className="mb-2 sm:mb-3 text-sm sm:text-base opacity-90">
                Start Your Prep From Today
              </p>
              <h3 className="text-base sm:text-lg font-semibold leading-snug mb-4 sm:mb-6">
                Get expert guidance, structured study plans, and practice Mock tests designed to boost your confidence for interview.
              </h3>
              {/* onClick={handleJoinClick} */}
              <button
                onClick={handleJoinClick}
                className="flex items-center gap-3 bg-[#2FC7A1] text-white font-semibold px-8 py-4 rounded-[200px] hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Girl Image */}
            <div className="relative flex-shrink-0">
              <img
                src="./girl.png"
                alt="girl"
                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain transform scale-110 sm:scale-125 lg:scale-150 -translate-x-2 sm:-translate-x-4 lg:-translate-x-9"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent sm:from-black/20 sm:to-transparent"></div>
        </div>

        {/* Right Card */}
        <div
          className="rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between bg-no-repeat bg-cover bg-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] relative overflow-hidden"
          style={{ backgroundImage: `url(${"./right_card.jpeg"})` }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full relative z-10">
            <div className="max-w-xs text-white text-center sm:text-left mb-4 sm:mb-0">
              <p className="mb-2 sm:mb-3 text-sm sm:text-base opacity-90">
                Get Job-Ready Today
              </p>
              <h3 className="text-base sm:text-lg font-semibold leading-snug mb-4 sm:mb-6">
                Practice with mock interviews, industry-specific questions, and expert feedback to boost your confidence and secure offers.
              </h3>
              {/* [#17254E]bg-[#17254E]  [#0F1A38] hover:bg-[#0F1A38]*/}
              <button
                onClick={handleJoinClick}
                className="flex items-center gap-3 bg-[#17254E] text-white font-semibold px-8 py-4 rounded-[200px] hover:bg-[#0F1A38] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

            {/* Boy Image */}
            <div className="relative flex-shrink-0">
              <img
                src="./boy.png"
                alt="boy"
                className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain transform scale-105 sm:scale-115 lg:scale-125"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent sm:from-black/20 sm:to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Exam_prep;
