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
        <section
            id="home"
            className="relative w-full bg-cover bg-center px-4 sm:px-6 md:px-16 lg:px-24"
            style={{ backgroundImage: `url(./bg.jpg)` }}
        >
            {/* Internship Banner (Full Width at Top) */}
            <div className="w-full z-30 pt-10 sm:pt-8 md:pt-28 ">
                <img
                    src="./Internship_banner (2).png"
                    alt="We're Hiring Interns"
                    className="w-full h-auto rounded-[15px] object-contain cursor-pointer hover:opacity-95 transition-opacity duration-300"
                    onClick={() => navigate("/internship")}
                />
            </div>

            {/* Hero Content Section */}
            <div className="py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    {/* MOBILE LAYOUT */}
                    <div className="md:hidden text-center space-y-6 mb-12">
                        <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-green-100 text-teal-700 rounded-full">
                            Learn , Implement & Achieve
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight px-2">
                            Launch Your Career with Industry-Ready Skills <br />
                            & Guaranteed Placement Support <br />
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg px-4">
                            Transform your future through comprehensive training programs
                            designed with industry partners and backed by dedicated placement
                            assistance.
                        </p>

                        {/* Mobile Search Bar */}
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

                    {/* DESKTOP/TABLET LAYOUT */}
                    <div className="hidden md:grid md:grid-cols-2 items-center gap-8 lg:gap-10">
                        {/* LEFT SIDE */}
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1 text-sm font-medium bg-green-100 text-teal-700 rounded-full">
                                Learn , Implement & Achieve
                            </span>
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug">
                                Launch Your Career with Industry-Ready Skills <br />
                                & Guaranteed Placement Support
                            </h1>
                            <p className="text-gray-600 text-base lg:text-lg">
                                Professional training with industry collaboration and job
                                placement.
                            </p>

                            {/* Desktop Search Bar */}
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

                        {/* RIGHT SIDE (IMAGES) */}
                        <div className="relative flex justify-center md:justify-end items-center">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                                <img
                                    src="./Avatar1.svg"
                                    alt="students"
                                    className="w-80 h-10 lg:w-96 lg:h-20 object-cover rounded-[10px]"
                                />
                            </div>

                            <div className="flex gap-4 lg:gap-6">
                                <div className="relative">
                                    <div className="p-1 w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 lg:w-55 lg:h-80 xl:h-90 rounded-full border-2 border-orange-500 overflow-hidden">
                                        <img
                                            src="./Heroimg1.jpg"
                                            alt="student1"
                                            className="w-full h-full object-cover object-top"
                                            style={{ transform: "translateY(16px)" }}
                                        />
                                    </div>
                                </div>

                                <div className="relative mt-4 lg:mt-6">
                                    <div className="p-1 w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 lg:w-55 lg:h-80 xl:h-90 rounded-full border-2 border-orange-500 overflow-hidden">
                                        <img
                                            src="./hero2.jpg"
                                            alt="student2"
                                            className="w-full h-full object-cover object-top"
                                            style={{ transform: "translateY(12px)" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 lg:-bottom-6 right-0 bg-white shadow-lg px-3 lg:px-5 py-2 lg:py-3 rounded-full text-teal-600 font-semibold text-xs lg:text-sm z-10">
                                5.8k Career Transformations
                            </div>
                        </div>
                    </div>

                    {/* MOBILE IMAGE SECTION */}
                    <div className="md:hidden relative flex justify-center items-center mt-8">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                            <img
                                src="./Avatar1.svg"
                                alt="students"
                                className="w-60 h-10 lg:w-96 lg:h-20 object-cover rounded-[10px]"
                            />
                        </div>

                        <div className="flex gap-3 justify-center">
                            <div className="relative">
                                <div className="p-1 w-32 h-44 sm:w-36 sm:h-48 rounded-full border-2 border-orange-500 overflow-hidden">
                                    <img
                                        src="./Heroimg1.jpg"
                                        alt="student1"
                                        className="w-full h-full object-cover object-top"
                                        style={{ transform: "translateY(12px)" }}
                                    />
                                </div>
                            </div>

                            <div className="relative mt-3">
                                <div className="p-1 w-32 h-44 sm:w-36 sm:h-48 rounded-full border-2 border-orange-500 overflow-hidden">
                                    <img
                                        src="./hero2.jpg"
                                        alt="student2"
                                        className="w-full h-full object-cover object-top"
                                        style={{ transform: "translateY(8px)" }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-3 right-2 bg-white shadow-lg px-3 py-1.5 rounded-full text-teal-600 font-semibold text-xs z-10">
                            5.8k Career Transformations
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;