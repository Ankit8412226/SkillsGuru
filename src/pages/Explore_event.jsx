import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ExploreEvent = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 py-8 sm:py-12 lg:py-16 -mt-6 sm:-mt-8 lg:-mt-10 bg-white overflow-hidden">
      {/* Left Side */}
      <div className="w-full lg:w-[45%] space-y-3 sm:space-y-5">
        <div className="text-left mb-4 sm:mb-5 relative">
          <img
            src="./Explore_arrow.png"
            alt="Explore Arrow"
            className="w-28 sm:w-32 md:w-36 absolute -top-8 sm:-top-10 right-0 sm:right-8 opacity-80 hidden sm:block"
          />

          {/* Icon */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <img src="./icon.svg" alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-[#2FC7A1] text-xs sm:text-sm font-medium">
              EXPLORE EVENT
            </p>
          </div>

          {/* Title */}
          <h2 className="text-[#0E2A46] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight sm:leading-snug lg:leading-[50px] mt-2">
            Launch Your Dream Career
          </h2>
        </div>

        {/* Sub-heading */}
        <p className="text-[#0E2A46] font-semibold text-sm sm:text-base leading-relaxed">
          From classroom to corporate — we prepare you for every step.
        </p>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Our programs are designed for students who want to transition smoothly
          from campus to corporate life. From resume building and aptitude
          training to mock interviews and real-world projects, we help you stand
          out in the job market. Join us and unlock your pathway to success.
        </p>
        {/* onClick={() => navigate("/explore-learn-more")} */}
        <div className="pt-2 sm:pt-3">
          <button
            onClick={() => navigate("/explore-learn-more")}
            className="flex items-center gap-3 bg-[#2FC7A1] text-white font-semibold px-8 py-4 rounded-[200px] hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative w-full lg:w-[45%] flex justify-center mt-8 sm:mt-10 lg:mt-0 bg-transparent">
        <div className="relative">
          <img
            src="./Explore event.svg"
            alt="Upcoming Event"
            className="rounded-2xl w-full max-w-[300px] sm:max-w-[340px] md:max-w-[370px] lg:max-w-[400px] xl:max-w-[420px] h-auto object-cover bg-none"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <img
        src="./org_semicircle.png"
        alt="semi_circle"
        className="absolute top-10 sm:top-14 left-4 sm:left-8 w-6 sm:w-8 md:w-10 opacity-70 hidden sm:block"
      />
      <img
        src="./flower.png"
        alt="flower"
        className="absolute top-6 sm:top-10 right-6 sm:right-10 w-8 sm:w-10 md:w-12 opacity-80 hidden md:block"
      />
      <img
        src="./topi.png"
        alt="topi"
        className="absolute bottom-4 sm:bottom-8 left-1/4 sm:left-1/3 w-14 sm:w-16 md:w-20 opacity-70 hidden sm:block"
      />

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2FC7A1]/5 to-transparent rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#0E2A46]/5 to-transparent rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default ExploreEvent;
