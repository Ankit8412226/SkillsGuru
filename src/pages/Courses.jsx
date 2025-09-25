import {
  BookOpen,
  Clock,
  ShoppingCart,
  Star,
  Users,
  Search,
  ArrowRight,
  Filter,
} from "lucide-react";
import React, { useState } from "react";

const CourseCard = ({
  imageUrl,
  category,
  rating,
  title,
  lessonCount,
  duration,
  studentsCount,
  instructor,
  instructorImage,
  originalPrice,
  currentPrice,
  categoryColor,
}) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div
          className={`absolute top-4 left-4 ${categoryColor} text-[15px] text-white px-3 py-1 rounded-md font-normal`}
        >
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {renderStars(rating)}
          <span className="text-gray-600 text-sm ml-1">({rating})</span>
        </div>

        <h3 className="text-xl font-semibold text-[#0E2A46] mb-4 leading-7 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center justify-between text-[#4D5756] text-sm mb-4 font-normal">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Lesson {lessonCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Students {studentsCount}</span>
          </div>
        </div>

        <hr
          className="mb-4"
          style={{ borderBottom: "1px dashed #4D5756", borderTop: "none" }}
        />

        <div className="flex items-center gap-3 mb-4">
          <img
            src={instructorImage}
            alt={instructor}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex items-center gap-1 text-sm">
            <p className="text-[#4D5756] font-normal">By {instructor}</p>
            <p className="text-[#0E2A46] font-normal">in {category}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${currentPrice}
            </span>
            <span className="text-gray-500 line-through">${originalPrice}</span>
          </div>

          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#4D5756] px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            <ShoppingCart className="w-4 h-4" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      instructor: "Angela",
      instructorImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      originalPrice: 150,
      currentPrice: 75,
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
      instructor: "Sarah",
      instructorImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      originalPrice: 180,
      currentPrice: 90,
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
      instructor: "Michael",
      instructorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      originalPrice: 140,
      currentPrice: 70,
      categoryColor: "bg-[#8B5CF6]",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Development",
      rating: 4.7,
      title: "Full Stack JavaScript Development Bootcamp",
      lessonCount: 30,
      duration: "45h 30m",
      studentsCount: "300+",
      instructor: "David",
      instructorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      originalPrice: 200,
      currentPrice: 100,
      categoryColor: "bg-[#FE543D]",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Marketing",
      rating: 4.5,
      title: "Digital Marketing Strategy & Social Media",
      lessonCount: 16,
      duration: "24h 15m",
      studentsCount: "250+",
      instructor: "Emma",
      instructorImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      originalPrice: 120,
      currentPrice: 60,
      categoryColor: "bg-[#F59E0B]",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Business",
      rating: 4.8,
      title: "Project Management Professional Certification",
      lessonCount: 20,
      duration: "32h 40m",
      studentsCount: "190+",
      instructor: "James",
      instructorImage:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      originalPrice: 160,
      currentPrice: 80,
      categoryColor: "bg-[#EF4444]",
    },
  ];

  const categories = [
    "All",
    "Development",
    "Data Science",
    "Design",
    "Marketing",
    "Business",
  ];

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className=" mt-10 mb-10 bg-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-[#FE543D] font-medium mb-4">
              <div className="w-8 h-0.5 bg-[#FE543D]"></div>
              <span>Our Courses</span>
              <div className="w-8 h-0.5 bg-[#FE543D]"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0E2A46] mb-4">
              Explore Our Best Courses
            </h1>
            <p className="text-lg text-[#4D5756] max-w-2xl mx-auto">
              Discover a wide range of courses designed to help you master new
              skills and advance your career with expert-led instruction.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FE543D] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-[#2FC7A1] text-white"
                      : "bg-white text-[#4D5756] border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-[#0E2A46] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who have transformed their careers with
            our courses.
          </p>
          <div className="flex justify-center">
          <button
            // onClick={handleContactClick}
            className="hidden md:flex items-center rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 lg:h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
          >
            <span className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium">
              Get Admission
            </span>
            <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#35D7AE] rounded-full ml-1">
              <ArrowRight size={16} className="lg:w-5 lg:h-5" />
            </div>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
