
import React from "react";

import { ArrowRight } from "lucide-react";

const Exam_prep = () => {
    return (
        <div className="relative bg-gradient-to-b from-white to-gray-50 py-16 px-6 lg:px-20">

            {/* Globe Image*/}
            <img
                src="./globe.png"
                alt="globe"
                className="absolute top-15 left-8 w-30 opacity-80"
            />

            {/* Flower Image */}
            <img
                src="./flower.png"
                alt="flower"
                className="absolute top-15 right-20 w-15"
            />

            {/* Title Section */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2">
                    <img src="./icon.svg" alt="icon" className="w-5 h-5" />
                    <p className="text-[#FE543D] text-sm leading-8">EXAM PREPARATION</p>
                    <img src="./icon.svg" alt="icon" className="w-5 h-5" />
                </div>
                <h2 className="text-[#0E2A46] text-[45px] font-bold leading-12 ">
                    Annual Exam Preparation
                </h2>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">

                {/* Left Card */}
                <div
                    className="rounded-xl p-8 flex flex-col md:flex-row items-center justify-between bg-no-repeat bg-cover h-full"
                    style={{ backgroundImage: `url(${"./left_card.jpeg"})` }}
                >
                    <div className="max-w-sm text-white">
                        <p className="mb-3">Start From Today</p>
                        <h3 className="text-lg font-semibold leading-snug">
                            Lorem ipsum dolor sit amet.
                        </h3>

                        <button className="mt-6 flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 pl-6 pr-0 overflow-hidden">
                            <span className="text-sm leading-8 font-medium text-white">
                                Join Now
                            </span>
                            <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full">
                                <ArrowRight size={20} />
                            </span>
                        </button>
                    </div>
                    <img
                        src="./girl.png"
                        alt="girl"
                        className="mt-6 md:mt-0 md:ml-2 w-48 md:w-56 transform scale-150 -translate-x-9 object-contain"
                    />
                </div>

                {/* Right Card */}
                <div
                    className="rounded-xl p-8 flex flex-col md:flex-row items-center justify-between bg-no-repeat bg-cover h-full"
                    style={{ backgroundImage: `url(${"./right_card.jpeg"})` }}
                >
                    <div className="max-w-sm text-white">
                        <p className="mb-3">Start From Today</p>
                        <h3 className="text-lg font-semibold leading-snug">
                            Lorem ipsum dolor sit amet.
                        </h3>

                        <button className="mt-6 flex items-center justify-between rounded-[200px] bg-[#17254E] text-white font-medium h-12 pl-6 pr-0 overflow-hidden">
                            <span className="text-sm leading-8 font-medium text-white">
                                Join Now
                            </span>
                            <span className="flex items-center justify-center h-full aspect-square bg-[#1F3061] rounded-full">
                                <ArrowRight size={20} />
                            </span>
                        </button>
                    </div>
                    <img
                        src="./girl.png"
                        alt="boy"
                        className="mt-6 md:mt-0 md:ml-6 w-44 md:w-52 transform scale-125 object-contain"
                    />
                </div>
            </div>

        </div>
    );
};

export default Exam_prep;
