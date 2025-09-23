import { ArrowRight } from 'lucide-react';
import React from 'react';
import CourseCard from "../assets/components/edcard";

const BrowseCourses = () => {
  const coursesData = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      category: "Development",
      rating: 4.8,
      title: "Complete React Developer Course",
      lessonCount: 25,
      duration: "40h 15m",
      studentsCount: "150+",
      instructor: "John Doe",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      originalPrice: 199,
      currentPrice: 99,
      categoryColor: "bg-red-500" // Red for Development
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      category: "Data Science",
      rating: 4.6,
      title: "Python for Data Analysis & Machine Learning",
      lessonCount: 18,
      duration: "25h 45m",
      studentsCount: "89+",
      instructor: "Jane Smith",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      originalPrice: 149,
      currentPrice: 79,
      categoryColor: "bg-[#2FC7A1]" // Teal green for Data Science
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      category: "Design",
      rating: 4.9,
      title: "UI/UX Design Masterclass & Figma Complete Guide",
      lessonCount: 30,
      duration: "35h 20m",
      studentsCount: "200+",
      instructor: "Mike Johnson",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      originalPrice: 179,
      currentPrice: 89,
      categoryColor: "bg-purple-500" // Purple for Design
    }
  ];

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

          {/* Title and Button Row */}
          <div className="flex items-center justify-between w-full">
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coursesData.map(course => (
              <CourseCard
                key={course.id}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCourses;
