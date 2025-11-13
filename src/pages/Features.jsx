import { ArrowRight, Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import React from 'react';
import CoachingCard from "../assets/components/CoachingCard";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero section with background image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-8 sm:py-12 flex-col gap-4 sm:gap-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
        style={{
          backgroundImage: 'url(./frame1.png)',
        }}
      >
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-4 sm:mb-8">
          {/* SubTech Features Heading with icons */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-3">
            <img src="./icon.svg" alt="icon" className="w-6 h-6 sm:w-8 sm:h-8" />
            <p className="text-[#2FC7A1] text-xs sm:text-sm font-medium leading-6 sm:leading-8">
              SuH Tech Features
            </p>
            <img src="./icon.svg" alt="icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* Title and Button Row */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full mb-2 sm:mb-3 gap-6 lg:gap-0">
            {/* Main heading */}
            <h1 className='text-[#0E2A46] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight text-center lg:max-w-2xl lg:ml-90'>
              Success-Driven Features<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
            </h1>
          </div>
        </div>

        {/* Course Cards Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div id="popularcourses" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10">
            {/* Card 1 - Best Coaching */}
            <CoachingCard
              icon={GraduationCap}
              title="Best Courses"
              description="One-on-one mentoring designed to maximize your learning potential."
              buttonText="View Details"
              onClick={() => navigate("/browsecourses")}
            />

            {/* Card 2 - Expert Teachers */}
            <CoachingCard
              icon={Users}
              title="Expert Faculties"
              description="Professional educators with years of experience in their respective fields."
              buttonText="Meet Faculties"
              onClick={() => navigate("/best-mentors")}
            />

            {/* Card 3 - Course Materials */}
            <CoachingCard
              icon={BookOpen}
              title="Course Materials"
              description="Complete learning resources including video lectures and digital practice materials."
              buttonText="Materials"
              onClick={() => navigate("/courses")}
            />

            {/* Card 4 - Certification */}
            <CoachingCard
              icon={Award}
              title="Certification"
              description="Professional certifications boosting career growth and opportunities."
              buttonText="Get Certified"
              onClick={() => navigate("/certification")}
            />
          </div>
        </div>

        {/* Admission Button  onClick={() => navigate("/admission")} */}
        <div className="flex-shrink-0 mt-2 sm:mt-2">
          <button
                onClick={() => navigate("/courses")}
                className="flex items-center gap-3 bg-[#2FC7A1] text-white font-semibold px-8 py-4 rounded-[200px] hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <span>Admission Open</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
