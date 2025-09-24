// src/components/Explore_event.jsx
import React from "react";
import { ArrowRight } from "lucide-react";




const ExploreEvent = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-white">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-6">
            
                <div className="text-left mb-6">
                
                    <img
                        src={"./Explore_arrow.png"}
                        alt="Explore Arrow"
                        className="w-45 mb-4 translate-x-96 translate-y-10"
                    />

                    {/* Icon */}
                    <div className="flex items-center gap-2">
                        <img src={"./icon.svg"} alt="icon" className="w-5 h-5" />
                        <p className="text-[#2FC7A1] text-sm leading-8">
                            EXPLORE EVENT
                        </p>

                    </div>

                    {/* Title */}
                    <h2 className="text-[#0E2A46] text-[45px] font-bold leading-[55px] mt-2">
                        Lorem ipsum dolor sit amet consectetur.
                    </h2>
                </div>

                {/* Sub-heading */}
                <p className="text-[#0E2A46] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore.
                </p>

                {/* Paragraph */}
                <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate.
                </p>

                {/* Button */}
                <button className="flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 pl-8 pr-0 overflow-hidden gap-4">
                    <span className="text-sm leading-8 font-medium text-white">
                        Admission open
                    </span>
                    <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full">
                        <ArrowRight size={20} />
                    </span>
                </button>
            </div>

            {/* Right Side - Image */}
            <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img
                    src={"./eventImg.png"}
                    alt="Upcoming Event"
                    className="rounded-xl  w-[400px] h-auto object-cover"
                />


            </div>

            {/* Decorative Images */}
            <img
                src={"./org_semicircle.png"}
                alt="semi_circle"
                className="absolute top-20 left-8 w-10 h-10 z-10"
            />
            <img
                src="./flower.png"
                alt="flower"
                className="absolute top-15 right-20 w-15"
            />
            <img
                src={"./topi.png"}
                alt="topi"
                className="absolute bottom-12 left-1/3 w-25 h-25 z-10"
            />
        </section>
    );
};

export default ExploreEvent;
