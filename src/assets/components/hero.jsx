import React from "react";

import { Search } from "lucide-react";

const Hero = () => {
    return (
        <section
            className="w-full bg-cover bg-center py-60 px-6 md:px-16 lg:px-24"
            style={{ backgroundImage: `url(./bg.jpg)` }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
                {/* Left Section */}
                <div className="space-y-6">
                    <span className="px-4 py-1 text-sm font-medium bg-green-100 text-teal-700 rounded-full">
                        Learn & Get Certificates
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
                        Transform your career <br /> With Certificates & <br /> and coures
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Lorem ipsum dolor sit amet.
                    </p>

                    {/* Search Bar */}
                    <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden max-w-md">
                        <input
                            type="text"
                            placeholder="What do you want to learn today?"
                            className="flex-1 px-4 py-3 outline-none text-gray-700"
                        />
                        <span className="flex items-center justify-center w-12 h-12 bg-[#35D7AE] rounded-full">
                            <Search size={22} color="white" />
                        </span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative flex justify-center md:justify-end items-center">
                    {/* Student Badge */}
                    <div className="absolute -top-6 -left-6 bg-white shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                        <div className="flex flex-col items-center mr-2">
                            <span className="text-teal-600 font-semibold">2k+</span>
                            <span className="text-teal-600 font-semibold -mt-1">Student</span>
                        </div>
                        <div className="flex -space-x-2">
                            <img
                                src="./Avtar.jpg"
                                alt="student"
                                className="w-40 h-10 rounded-full border border-none"
                            />
                        </div>
                    </div>

                    {/* Your Images */}
                    <div className="flex gap-6">
                        <div className="p-1 w-55 h-90 rounded-full border-2 border-orange-500 overflow-hidden">
                            <img
                                src="./Heroimg1.jpg"
                                alt="student1"
                                className="w-full h-full object-cover object-top translate-y-4"
                            />
                        </div>

                        <div className="p-1 w-55 h-90 rounded-full border-2 border-orange-500 overflow-hidden">
                            <img
                                src="./hero2.jpg"
                                alt="student2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    {/* Success Badge */}
                    <div className="absolute -bottom-6 right-0 bg-white shadow-lg px-5 py-3 rounded-full text-teal-600 font-semibold text-sm">
                        5.8k Success Courses
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
