import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ added

const ExploreEvent = () => {
    const navigate = useNavigate(); // ✅ added

    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <div className="text-left mb-4 sm:mb-6 relative">
                    {/* Explore Arrow - Responsive positioning */}
                    <img
                        src={"./Explore_arrow.png"}
                        alt="Explore Arrow"
                        className="w-32 sm:w-36 md:w-40 lg:w-45 mb-4 absolute -top-8 sm:-top-12 right-0 sm:right-8 md:right-16 lg:right-24 xl:right-32 opacity-80 hidden sm:block"
                    />

                    {/* Icon */}
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <img src={"./icon.svg"} alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                        <p className="text-[#2FC7A1] text-xs sm:text-sm font-medium leading-6 sm:leading-8">
                            EXPLORE EVENT
                        </p>
                    </div>

                    {/* Title */}
                    <h2 className="text-[#0E2A46] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight sm:leading-relaxed lg:leading-[55px] mt-2">
                        Launch Your Dream Career
                    </h2>
                </div>

                {/* Sub-heading */}
                <p className="text-[#0E2A46] font-semibold text-sm sm:text-base leading-relaxed">
                    From classroom to corporate — we prepare you for every step.
                </p>

                {/* Paragraph */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                   Our programs are designed for students who want to transition smoothly from campus to corporate life. From resume building and aptitude training to mock interviews and real-world projects, we help you stand out in the job market. Join us and unlock your pathway to success.
                </p>

                {/* ✅ Button with navigation */}
                <div className="pt-2 sm:pt-4">
                    <button
                        onClick={() => navigate("/explore-learn-more")} // ✅ added
                        className="flex items-center justify-between rounded-full bg-[#2FC7A1] text-white font-medium h-10 sm:h-12 md:h-14 pl-4 sm:pl-6 md:pl-8 pr-0 overflow-hidden gap-2 sm:gap-4 hover:bg-[#28B898] transition-colors duration-300 group"
                    >
                        <span className="text-xs sm:text-sm md:text-base font-medium text-white">
                            Learn More
                        </span>
                        <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full group-hover:bg-[#2FC7A1] transition-colors duration-300">
                            <ArrowRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative w-full lg:w-1/2 flex justify-center mt-8 sm:mt-10 lg:mt-0">
                <div className="relative">
                    <img
                        src={"./eventImg.png"}
                        alt="Upcoming Event"
                        className="rounded-xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                </div>
            </div>

            {/* Decorative Images */}
            <img
                src={"./org_semicircle.png"}
                alt="semi_circle"
                className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-2 sm:left-4 md:left-6 lg:left-8 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 z-10 opacity-70 hidden sm:block"
            />
            <img
                src="./flower.png"
                alt="flower"
                className="absolute top-4 sm:top-8 md:top-12 lg:top-15 right-4 sm:right-8 md:right-12 lg:right-20 w-8 sm:w-10 md:w-12 lg:w-15 h-auto z-10 opacity-80 hidden md:block"
            />
            <img
                src={"./topi.png"}
                alt="topi"
                className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-1/4 sm:left-1/3 w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 z-10 opacity-70 hidden sm:block"
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
