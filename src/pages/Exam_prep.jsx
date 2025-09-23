import { ArrowRight } from "lucide-react";
import React from "react";

const Exam_prep = () => {
    return (
        <div className="relative bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 overflow-hidden">

            {/* Globe Image - Responsive positioning */}
            <img
                src="./globe.png"
                alt="globe"
                className="absolute top-8 sm:top-12 lg:top-15 left-2 sm:left-4 lg:left-8 w-16 sm:w-20 md:w-24 lg:w-30 opacity-60 sm:opacity-80 hidden sm:block"
            />

            {/* Flower Image - Responsive positioning */}
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
                        EXAM PREPARATION
                    </p>
                    <img src="./icon.svg" alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h2 className="text-[#0E2A46] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight sm:leading-tight lg:leading-12 mt-2 sm:mt-3">
                    Annual Exam Preparation
                </h2>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">

                {/* Left Card */}
                <div
                    className="rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between bg-no-repeat bg-cover bg-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] relative overflow-hidden"
                    style={{ backgroundImage: `url(${"./left_card.jpeg"})` }}
                >
                    {/* Card Content */}
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full relative z-10">
                        <div className="max-w-xs text-white text-center sm:text-left mb-4 sm:mb-0">
                            <p className="mb-2 sm:mb-3 text-sm sm:text-base opacity-90">
                                Start From Today
                            </p>
                            <h3 className="text-base sm:text-lg font-semibold leading-snug mb-4 sm:mb-6">
                                Lorem ipsum dolor sit amet consectetur adipiscing.
                            </h3>

                            <button className="flex items-center justify-between rounded-full bg-[#2FC7A1] text-white font-medium h-10 sm:h-12 pl-4 sm:pl-6 pr-0 overflow-hidden hover:bg-[#26A085] transition-colors w-full sm:w-auto">
                                <span className="text-xs sm:text-sm leading-6 sm:leading-8 font-medium text-white whitespace-nowrap">
                                    Join Now
                                </span>
                                <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full ml-2">
                                    <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                                </span>
                            </button>
                        </div>

                        {/* Girl Image - Responsive positioning */}
                        <div className="relative flex-shrink-0">
                            <img
                                src="./girl.png"
                                alt="girl"
                                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain transform scale-110 sm:scale-125 lg:scale-150 -translate-x-2 sm:-translate-x-4 lg:-translate-x-9"
                            />
                        </div>
                    </div>

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent sm:from-black/20 sm:to-transparent"></div>
                </div>

                {/* Right Card */}
                <div
                    className="rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between bg-no-repeat bg-cover bg-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] relative overflow-hidden"
                    style={{ backgroundImage: `url(${"./right_card.jpeg"})` }}
                >
                    {/* Card Content */}
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full relative z-10">
                        <div className="max-w-xs text-white text-center sm:text-left mb-4 sm:mb-0">
                            <p className="mb-2 sm:mb-3 text-sm sm:text-base opacity-90">
                                Start From Today
                            </p>
                            <h3 className="text-base sm:text-lg font-semibold leading-snug mb-4 sm:mb-6">
                                Lorem ipsum dolor sit amet consectetur adipiscing.
                            </h3>

                            <button className="flex items-center justify-between rounded-full bg-[#17254E] text-white font-medium h-10 sm:h-12 pl-4 sm:pl-6 pr-0 overflow-hidden hover:bg-[#0F1A38] transition-colors w-full sm:w-auto">
                                <span className="text-xs sm:text-sm leading-6 sm:leading-8 font-medium text-white whitespace-nowrap">
                                    Join Now
                                </span>
                                <span className="flex items-center justify-center h-full aspect-square bg-[#1F3061] rounded-full ml-2">
                                    <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                                </span>
                            </button>
                        </div>

                        {/* Boy Image - Responsive positioning */}
                        <div className="relative flex-shrink-0">
                            <img
                                src="./boy.png"
                                alt="boy"
                                className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain transform scale-105 sm:scale-115 lg:scale-125"
                            />
                        </div>
                    </div>

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent sm:from-black/20 sm:to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default Exam_prep;
