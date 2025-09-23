import { ArrowRight, Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import React from 'react';
import CoachingCard from "../assets/components/CoachingCard";

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero section with background image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-8 sm:py-12 flex-col gap-4 sm:gap-6"
        style={{
          backgroundImage: 'url(./frame1.png)',
        }}
      >
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-4 sm:mb-8">
          {/* Top Popular Course - Left aligned */}
          <div className='flex items-start justify-start gap-2 mb-4 sm:mb-6'>
            <img src="./icon.svg" alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-sm sm:text-base">Top Popular Course</p>
          </div>

          {/* SubTech Features Heading with icons */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <img src="./icon.svg" alt="icon" className="w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className='text-[#0E2A46] text-xl sm:text-2xl lg:text-[32px] font-bold text-center'>
              SuHTech Features
            </h2>
            <img src="./icon.svg" alt="icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* Title and Button Row */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full mb-8 sm:mb-12 gap-6 lg:gap-0">
            {/* Main heading */}
            <h1 className='text-[#0E2A46] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold leading-tight text-center lg:text-left max-w-none lg:max-w-2xl'>
              Check out educate features<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>win any exam
            </h1>

            {/* Button */}
            <div className="flex-shrink-0">
              <button className="flex items-center justify-between rounded-full bg-[#2FC7A1] text-white font-medium h-10 sm:h-12 pl-4 sm:pl-8 pr-0 overflow-hidden gap-2 sm:gap-4 hover:bg-[#26A085] transition-colors">
                <span className="text-xs sm:text-sm leading-6 sm:leading-8 font-medium text-white whitespace-nowrap">
                  Admission open
                </span>
                <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1 - Best Coaching */}
            <CoachingCard
              icon={GraduationCap}
              title="Best Coaching"
              description="In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet."
              buttonText="View Details"
            />

            {/* Card 2 - Expert Teachers */}
            <CoachingCard
              icon={Users}
              title="Expert Teachers"
              description="Professional educators with years of experience in their respective fields."
              buttonText="Meet Teachers"
            />

            {/* Card 3 - Course Materials */}
            <CoachingCard
              icon={BookOpen}
              title="Course Materials"
              description="Comprehensive study materials and resources for effective learning."
              buttonText="Browse Materials"
            />

            {/* Card 4 - Certification */}
            <CoachingCard
              icon={Award}
              title="Certification"
              description="Get certified upon course completion with industry-recognized credentials."
              buttonText="Get Certified"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
