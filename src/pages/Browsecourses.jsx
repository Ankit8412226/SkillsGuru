import { ArrowRight } from 'lucide-react';
import React from 'react';
import CourseCard from "../assets/components/edcard";

const BrowseCourses = () => {
 const coursesData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      category: "Development",
      rating: 4.8,
      title: "Complete React Developer Course",
      lessonCount: 25,
      duration: "40h 15m",
      studentsCount: "150+",
      instructor: "Ankit Kumar",
      instructorImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      originalPrice: 80,
      currentPrice: 50,
      categoryColor: "bg-[#FE543D]",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Data Science",
      rating: 4.6,
      title: "Python for Data Analysis & Machine Learning",
      lessonCount: 18,
      duration: "35h 20m",
      studentsCount: "220+",
      instructor: "Akriti Nanda",
      instructorImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      originalPrice: 90,
      currentPrice: 60,
      categoryColor: "bg-[#10B981]",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1564&q=80",
      category: "Design",
      rating: 4.9,
      title: "UI/UX Design Masterclass & Figma Complete Guide",
      lessonCount: 22,
      duration: "28h 45m",
      studentsCount: "180+",
      instructor: "Pulkit Pandey",
      instructorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      originalPrice: 70,
      currentPrice: 50,
      categoryColor: "bg-[#8B5CF6]",
    },

  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero section with background image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-6 sm:py-8 md:py-12 flex-col gap-4 sm:gap-6"
        style={{
          backgroundImage: 'url(./frame1.png)',
        }}
      >
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-4 sm:mb-6 md:mb-8">
          {/* Top Popular Course - Responsive alignment */}
          <div className='flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6'>
            <img
              src="./icon.svg"
              alt="icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <p className="text-sm sm:text-base md:text-lg text-gray-700">Job-Ready Training Program</p>
          </div>

          {/* Title and Button Row - Responsive Layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between w-full gap-4 lg:gap-8">
            {/* Main heading - Responsive typography and alignment */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className='text-[#0E2A46] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] font-bold leading-tight sm:leading-snug md:leading-normal lg:leading-12 max-w-none lg:max-w-2xl'>
                Professional Development with Guaranteed Career Support <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
              </h1>
            </div>

            {/* Button - Responsive sizing and positioning */}
            <div className="flex-shrink-0">
              <button className="flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 sm:h-11 md:h-12 pl-4 sm:pl-6 md:pl-8 pr-0 overflow-hidden gap-2 sm:gap-3 md:gap-4 hover:bg-[#28B895] transition-colors duration-200 shadow-md">
                <span className="text-xs sm:text-sm leading-6 sm:leading-8 font-medium text-white whitespace-nowrap">
                 Learn More
                </span>
                <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards Container - Responsive Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {coursesData.map(course => (
              <div key={course.id} className="w-full">
                <CourseCard
                  imageUrl={course.imageUrl}
                  category={course.category}
                  rating={course.rating}
                  title={course.title}
                  lessonCount={course.lessonCount}
                  duration={course.duration}
                  studentsCount={course.studentsCount}
                  instructor={course.instructor}
                  instructorImage={course.instructorImage}
                  originalPrice={course.originalPrice}
                  currentPrice={course.currentPrice}
                  categoryColor={course.categoryColor}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add some bottom spacing */}
        <div className="h-8 sm:h-12 md:h-16"></div>
      </div>
    </div>
  );
};

export default BrowseCourses;
