import { Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/courses?search=${encodeURIComponent(query)}`);
        } else {
            navigate(`/courses`);
        }
    };

    return (
        <section id="home"
            className="w-full bg-cover bg-center py-32 sm:py-40 md:py-48 lg:py-60 px-4 sm:px-6 md:px-16 lg:px-24 relative"
            style={{ backgroundImage: `url(./bg.jpg)` }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Mobile Layout - Centered */}
                <div className="md:hidden text-center space-y-6 mb-12">
                    <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-green-100 text-teal-700 rounded-full">
                        Learn , Implement & Achieve
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight px-2">
                        Launch Your Career with Industry-Ready Skills <br />
                        & Guaranteed Placement Support <br />
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg px-4">
                        Transform your future through comprehensive training programs designed with industry partners and backed by dedicated placement assistance
                    </p>

                    {/* Mobile Search Bar - Improved */}
                    <div className="relative bg-white rounded-full shadow-md max-w-xs sm:max-w-sm mx-auto p-1">
                        <input
                            type="text"
                            placeholder="Which career path interests you?"
                            className="w-full pl-4 pr-12 py-3 outline-none text-gray-700 text-sm placeholder:text-sm bg-transparent rounded-full"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute right-1 top-1 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#35D7AE] hover:bg-[#2FC7A1] rounded-full transition-colors duration-200"
                        >
                            <Search size={18} className="sm:w-[20px] sm:h-[20px]" color="white" />
                        </button>
                    </div>
                </div>

                {/* Desktop/Tablet Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 items-center gap-8 lg:gap-10">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1 text-sm font-medium bg-green-100 text-teal-700 rounded-full">
                            Learn , Implement & Achieve
                        </span>
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug">
                            Launch Your Career with Industry-Ready Skills <br />
                            & Guaranteed Placement Support<br />
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg">
                           Professional training with industry collaboration and job placement.
                        </p>

                        {/* Desktop Search Bar - Improved */}
                        <div className="relative bg-white rounded-full shadow-md max-w-sm lg:max-w-md p-1.5">
                            <input
                                type="text"
                                placeholder="Which career path interests you?"
                                className="w-full pl-5 pr-16 py-3.5 outline-none text-gray-700 bg-transparent rounded-full placeholder:text-gray-500"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            />
                            <button
                                onClick={handleSearch}
                                className="absolute right-1.5 top-1.5 flex items-center justify-center w-12 h-12 lg:w-13 lg:h-13 bg-[#35D7AE] hover:bg-[#2FC7A1] rounded-full transition-colors duration-200"
                            >
                                <Search size={22} color="white" />
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Desktop */}
                    <div className="relative flex justify-center md:justify-end items-center">
                        {/* Student Badge */}
                        <div className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6 bg-white shadow-lg px-3 lg:px-4 py-2 rounded-full flex items-center gap-2 text-xs lg:text-sm font-medium z-10">
                            <div className="flex flex-col items-center mr-1 lg:mr-2">
                                <span className="text-teal-600 font-semibold text-sm lg:text-base">100% Placement</span>
                                <span className="text-teal-600 font-semibold -mt-1 text-xs lg:text-sm">Assistance</span>
                            </div>
                            <div className="flex -space-x-1">
                                <img
                                    src="./Avtar.jpg"
                                    alt="student"
                                    className="w-32 lg:w-40 h-8 lg:h-10 rounded-full border border-none object-cover"
                                />
                            </div>
                        </div>

                        {/* Images Container */}
                        <div className="flex gap-4 lg:gap-6">
                            <div className="relative">
                                <div className="p-1 w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 lg:w-55 lg:h-80 xl:h-90 rounded-full border-2 border-orange-500 overflow-hidden">
                                    <img
                                        src="./Heroimg1.jpg"
                                        alt="student1"
                                        className="w-full h-full object-cover object-top"
                                        style={{ transform: 'translateY(16px)' }}
                                    />
                                </div>
                            </div>

                            <div className="relative mt-4 lg:mt-6">
                                <div className="p-1 w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 lg:w-55 lg:h-80 xl:h-90 rounded-full border-2 border-orange-500 overflow-hidden">
                                    <img
                                        src="./hero2.jpg"
                                        alt="student2"
                                        className="w-full h-full object-cover object-top"
                                        style={{ transform: 'translateY(12px)' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Success Badge */}
                        <div className="absolute -bottom-4 lg:-bottom-6 right-0 bg-white shadow-lg px-3 lg:px-5 py-2 lg:py-3 rounded-full text-teal-600 font-semibold text-xs lg:text-sm z-10">
                            5.8k Career Transformations
                        </div>
                    </div>
                </div>

                {/* Mobile Images Section - Centered */}
                <div className="md:hidden relative flex justify-center items-center mt-8">
                    {/* Mobile Student Badge */}
                    <div className="absolute -top-3 -left-2 bg-white shadow-lg px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium z-10">
                        <div className="flex flex-col items-center mr-1">
                            <span className="text-teal-600 font-semibold text-sm">100% Placement Assistance</span>
                            <span className="text-teal-600 font-semibold -mt-1 text-xs">with dedicated placement cell support</span>
                        </div>
                        <div className="flex -space-x-1">
                            <img
                                src="./Avtar.jpg"
                                alt="student"
                                className="w-24 h-6 rounded-full border border-none object-cover"
                            />
                        </div>
                    </div>

                    {/* Mobile Images Container */}
                    <div className="flex gap-3 justify-center">
                        <div className="relative">
                            <div className="p-1 w-32 h-44 sm:w-36 sm:h-48 rounded-full border-2 border-orange-500 overflow-hidden">
                                <img
                                    src="./Heroimg1.jpg"
                                    alt="student1"
                                    className="w-full h-full object-cover object-top"
                                    style={{ transform: 'translateY(12px)' }}
                                />
                            </div>
                        </div>

                        <div className="relative mt-3">
                            <div className="p-1 w-32 h-44 sm:w-36 sm:h-48 rounded-full border-2 border-orange-500 overflow-hidden">
                                <img
                                    src="./hero2.jpg"
                                    alt="student2"
                                    className="w-full h-full object-cover object-top"
                                    style={{ transform: 'translateY(8px)' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Success Badge */}
                    <div className="absolute -bottom-3 right-2 bg-white shadow-lg px-3 py-1.5 rounded-full text-teal-600 font-semibold text-xs z-10">
                        5.8k Career Transformations
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
