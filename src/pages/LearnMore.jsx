import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  Target,
  Eye,
  Users,
  Award,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const LearnMore = ({ onBack }) => {
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="mb-10 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0E2A46] to-[#1B4B73] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to About</span>
          </button> */}

          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img src="./icon.svg" alt="icon" className="w-6 h-6" />
              <p className="text-[#2FC7A1] text-sm font-medium uppercase tracking-wide">
                Learn More About Us
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Transforming Lives Through
              <span className="text-[#2FC7A1]"> Quality Education</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover how we're revolutionizing online learning with innovative
              approaches, expert instructors, and a commitment to student
              success.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2FC7A1]/20 to-[#FE543D]/20 blur-xl rounded-3xl"></div>
                <img
                  src="./About1.png"
                  alt="Our Mission"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#2FC7A1] rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A46]">
                  Our Mission
                </h2>
              </div>

              <p className="text-lg text-[#4D5756] leading-relaxed">
                At Suh Tech, we are dedicated to empowering learners worldwide
                through innovative online education and professional
                development. Our mission extends beyond traditional learning
                boundaries to create transformative educational experiences.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#2FC7A1]/10 rounded-lg mt-1">
                    <BookOpen className="w-5 h-5 text-[#2FC7A1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2A46] mb-2">
                      Accessible Learning
                    </h3>
                    <p className="text-[#4D5756]">
                      Making quality education accessible to everyone,
                      regardless of location or background.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#2FC7A1]/10 rounded-lg mt-1">
                    <Users className="w-5 h-5 text-[#2FC7A1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2A46] mb-2">
                      Community Building
                    </h3>
                    <p className="text-[#4D5756]">
                      Creating a supportive learning community that fosters
                      collaboration and growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#2FC7A1]/10 rounded-lg mt-1">
                    <Award className="w-5 h-5 text-[#2FC7A1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2A46] mb-2">
                      Excellence Standards
                    </h3>
                    <p className="text-[#4D5756]">
                      Maintaining the highest standards in curriculum design and
                      instruction delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#FE543D] rounded-xl">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A46]">
                  Our Vision
                </h2>
              </div>

              <p className="text-lg text-[#4D5756] leading-relaxed">
                To be the leading platform for accessible, quality education
                that transforms careers and lives. We envision a world where
                learning knows no boundaries and every individual has the
                opportunity to reach their full potential.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FE543D]/10 rounded-lg mt-1">
                    <TrendingUp className="w-5 h-5 text-[#FE543D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2A46] mb-2">
                      Global Impact
                    </h3>
                    <p className="text-[#4D5756]">
                      Creating a global impact through education that transcends
                      geographical boundaries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FE543D]/10 rounded-lg mt-1">
                    <Target className="w-5 h-5 text-[#FE543D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2A46] mb-2">
                      Future-Ready Skills
                    </h3>
                    <p className="text-[#4D5756]">
                      Preparing learners with skills that are relevant for the
                      rapidly evolving job market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FE543D]/10 rounded-lg mt-1">
                    <Users className="w-5 h-5 text-[#FE543D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E2A46] mb-2">
                      Lifelong Learning
                    </h3>
                    <p className="text-[#4D5756]">
                      Fostering a culture of continuous learning and
                      professional development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FE543D]/20 to-[#2FC7A1]/20 blur-xl rounded-3xl"></div>
              <img
                src="./About3.png"
                alt="Our Vision"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A46] mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-[#4D5756] max-w-2xl mx-auto">
              These numbers represent our commitment to delivering quality
              education and creating meaningful impact in the lives of our
              learners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2FC7A1] to-[#28B895] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">35+</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0E2A46] mb-2">
                Years Experience
              </h3>
              <p className="text-[#4D5756]">
                Decades of expertise in education and technology
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FE543D] to-[#E63E2E] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">10K+</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0E2A46] mb-2">
                Students Taught
              </h3>
              <p className="text-[#4D5756]">
                Learners from around the world have joined us
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0E2A46] to-[#1B4B73] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0E2A46] mb-2">
                Expert Instructors
              </h3>
              <p className="text-[#4D5756]">
                Industry professionals and academic experts
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2FC7A1] to-[#FE543D] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0E2A46] mb-2">
                Success Rate
              </h3>
              <p className="text-[#4D5756]">
                Students successfully complete their courses
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-[#0E2A46] to-[#1B4B73]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of learners who have transformed their careers with
            our comprehensive courses and expert guidance.
          </p>
          {/* // onClick={handleContactClick} */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              //onClick={handleContactClick}
              className="flex items-center gap-3 bg-[#2FC7A1] text-white font-semibold px-8 py-4 rounded-[200px] hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <span>Browse Courses</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              //onClick={handleContactClick}
              className="flex items-center gap-3 bg-[#2FC7A1] text-white font-semibold px-8 py-4 rounded-[200px] hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <span>Contact US</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
