import React from "react";
import { Sparkles, Code, Brain, Users, Award, Rocket } from "lucide-react";
import AdmissionForm from "./AdmissionForm";

const Explore_Learn_more = () => {
    const features = [
        { icon: Code, text: "Interactive Learning: Hands-on projects, quizzes, and live sessions." },
        { icon: Users, text: "Career-Focused Paths: Tailored tracks from beginner to professional." },
        { icon: Brain, text: "AI-Powered Assistance: Personalized feedback and guidance." },
        { icon: Award, text: "Certifications that Matter: Recognized by top employers." }
    ];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Section - Modern Card Design */}
            <div className="lg:w-[35%] w-full bg-gradient-to-b from-[#0A1F35] to-[#0E2A46] text-white flex flex-col justify-center px-6 lg:px-10 py-16 relative overflow-hidden">
                {/* Floating shapes */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2FC7A1] rounded-full opacity-5"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#2FC7A1] rounded-full opacity-5"></div>

                <div className="relative z-10 space-y-8">
                    {/* Header Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Rocket className="w-6 h-6 text-[#2FC7A1]" />
                            <span className="text-[#2FC7A1] text-sm font-semibold uppercase tracking-wide">Start Your Journey</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                            Explore.<br />
                            Learn.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2FC7A1] to-[#4FE3C1]">Grow.</span>
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed text-gray-300">
                        Discover a world of learning designed for the future.
                        From coding and AI to design and data science explore
                        courses built by industry experts to help you gain real-world
                        skills and stand out in your career.
                    </p>

                    {/* Feature Pills */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-base">
                            <Sparkles className="text-[#2FC7A1] w-6 h-6 flex-shrink-0" />
                            <span className="font-bold text-xl">What You'll Find</span>
                        </div>

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-15 transition-all duration-300 border border-white border-opacity-10"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#2FC7A1] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-5 h-5 text-[#2FC7A1]" />
                                </div>
                                <span className="text-sm text-black font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-6 border-t border-white border-opacity-10">
                        <p className="text-gray-300 text-lg">
                            <span className="text-[#2FC7A1] font-semibold">Start exploring.</span> Start achieving.<br />
                            Your journey to success begins here.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div
                className="lg:w-[65%] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-screen"
                style={{ backgroundImage: "url('/bg.jpg')" }}
            >
                <div className="mb-90 transform scale-110">
                    <AdmissionForm />
                </div>
            </div>
        </div>
    );
};

export default Explore_Learn_more;