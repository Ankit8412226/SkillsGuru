import { BookOpen, Clock, Eye, ShoppingCart, Star, Users } from 'lucide-react';
import React from 'react';

const CourseCard = ({
  imageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  category = "Development",
  rating = 4.7,
  title = "It Statistics Data Science And Business Analysis",
  lessonCount = 10,
  duration = "19h 30m",
  studentsCount = "20+",
  instructor = "Angela",
  instructorImage = "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  originalPrice = 120,
  currentPrice = 60,
  categoryColor = "bg-[#FE543D]"
}) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const handleViewDetails = () => {
    // Navigate to course-description page
    console.log('Navigating to course details for:', title);
    // You can implement your navigation logic here
    // For example: navigate('/course-description/' + courseId)
  };

  // Extract color from categoryColor prop
  const getBgColor = () => {
    return categoryColor.replace('bg-[', '').replace(']', '');
  };

  return (
    <div id='/Popularcourses' className="max-w-[424px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">

      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-4 left-4 ${categoryColor} text-[15px] text-[#fff] px-3 py-1 rounded-md font-normal`}>
          {category}
        </div>

        {/* View Details Button */}
        <button
          onClick={handleViewDetails}
          className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full text-white hover:scale-110 transition-transform duration-200"
          style={{ backgroundColor: getBgColor() }}
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {renderStars(rating)}
          <span className="text-gray-600 text-sm ml-1">({rating})</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#0E2A46] mb-4 leading-7">
          {title}
        </h3>

        {/* Course Details */}
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

        {/* Divider */}
        <hr
          className="mb-4"
          style={{ borderBottom: "1px dashed #4D5756", borderTop: "none" }}
        />

        {/* Instructor Section */}
        <div className="flex items-center gap-4 mb-4 w-full">
          <img
            src={instructorImage}
            alt={instructor}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className='flex items-center justify-center'>
            <p className="text-[#4D5756] font-normal text-sm">By {instructor}</p>
            <p className="text-[#0E2A46] font-normal text-sm ml-1">in {category}</p>
          </div>
        </div>

        {/* Price and Add to Cart Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">${currentPrice}</span>
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

export default CourseCard;
