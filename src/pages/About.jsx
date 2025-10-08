import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const About = ({ onLearnMore }) => {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate("/learnmore");
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <div
        id="about"
        className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12 px-4 sm:px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative background image */}
            <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 lg:-top-16 lg:-left-16 opacity-80 sm:opacity-100">
              <img
                src="./image.png"
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-auto lg:h-auto object-contain"
              />
            </div>

            {/* Main image layout */}
            <div className="relative flex gap-2 sm:gap-3 lg:gap-4 items-start justify-center lg:justify-start">
              <img
                src="./About2.png"
                alt="About main image"
                className="block w-auto h-48 sm:h-56 md:h-64 lg:h-auto max-w-[45%] lg:max-w-none object-contain"
              />
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                <img
                  src="./About1.png"
                  alt="About secondary image"
                  className="w-auto h-20 sm:h-24 md:h-28 lg:h-auto max-w-full object-contain"
                />
                <img
                  src="./About3.png"
                  alt="About tertiary image"
                  className="w-auto h-20 sm:h-24 md:h-28 lg:h-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <img
                src="./icon.svg"
                alt="icon"
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-auto lg:h-auto"
              />
              <p className="text-[#FE543D] text-xs sm:text-sm lg:text-sm leading-6 sm:leading-8 font-medium">
                ABOUT US
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight text-[#0E2A46] font-bold text-center lg:text-left">
              Your Career Journey Starts at{" "}
              <span className="text-[#FE543D]">Suh Tech</span>
            </h2>

            <p className="text-base sm:text-lg leading-6 sm:leading-7 lg:leading-8 font-normal text-[#4D5756] text-center lg:text-left px-2 sm:px-0">
              Suh Tech delivers job-ready training with 200+ industry partners,
              placing 1200+ students in top organizations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mt-6 lg:mt-8">
              <div className="space-y-2 text-center sm:text-left">
                <p className="text-base sm:text-lg leading-6 sm:leading-7 lg:leading-8 text-[#0E2A46] font-bold">
                  OUR MISSION:
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 font-normal text-[#333931]">
                  Achieve 100% job placement success through industry-aligned
                  training and comprehensive skill development.
                </p>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <p className="text-base sm:text-lg leading-6 sm:leading-7 lg:leading-8 text-[#0E2A46] font-bold">
                  OUR VISION:
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 font-normal text-[#333931]">
                  Leading training institute delivering industry-ready skills and
                  guaranteed placement success for career transformation.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start mt-6 lg:mt-8">
              <button
                onClick={handleLearnMoreClick}
                className="flex items-center rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 sm:h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden cursor-pointer"
              >
                <span className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium">
                  Learn more
                </span>
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#35D7AE] rounded-full ml-1">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
