import { ArrowRight, Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import React from 'react';
import CoachingCard from "../assets/components/CoachingCard";

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero section with background image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-12 flex-col gap-6"
        style={{
          backgroundImage: 'url(./frame1.png)',
        }}
      >
        {/* Header Section */}
        <div className="container mx-auto px-4 max-w-7xl mb-8">
          {/* Top Popular Course - Left aligned */}
          <div className='flex items-start justify-start gap-2 mb-6'>
            <img src="./icon.svg" alt="icon" />
            <p>Top Popular Course</p>
          </div>

          {/* SubTech Features Heading with icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <img src="./icon.svg" alt="icon" className="w-8 h-8" />
            <h2 className='text-[#0E2A46] text-[32px] font-bold text-center'>
              SuHTech Features
            </h2>
            <img src="./icon.svg" alt="icon" className="w-8 h-8" />
          </div>

          {/* Title and Button Row */}
          <div className="flex items-center justify-between w-full mb-12">
            {/* Left side - Main heading */}
            <h1 className='text-[#0E2A46] text-[45px] font-bold leading-12 text-left'>
              Check out educate features<br />
              win any exam
            </h1>

            {/* Right side - Button */}
            <div>
              <button className="flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 pl-8 pr-0 overflow-hidden gap-4">
                <span className="text-sm leading-8 font-medium text-white">
                  Admission open
                </span>
                <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full">
                  <ArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards Container */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
