import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import CourseCard from "../assets/components/edcard";

const BrowseCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/courses/popular`
        );
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading courses...</p>
      </div>
    );
  }

  return (
    <div id="Popularcourses" className="min-h-screen bg-gray-100">
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-6 sm:py-8 md:py-12 flex-col gap-4 sm:gap-6"
        style={{ backgroundImage: "url(./frame1.png)" }}
      >
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6">
            <img
              src="./icon.svg"
              alt="icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Job-Ready Training Program
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between w-full gap-4 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[#0E2A46] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] font-bold leading-tight sm:leading-snug md:leading-normal lg:leading-12 max-w-none lg:max-w-2xl">
                Professional Development with Guaranteed Career Support
              </h1>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => navigate("/courses")}
                className="flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 sm:h-11 md:h-12 pl-4 sm:pl-6 md:pl-8 pr-0 overflow-hidden gap-2 sm:gap-3 md:gap-4 hover:bg-[#28B895] transition-colors duration-200 shadow-md"
              >
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

        {/* Courses Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div 
                key={course._id} 
                className="w-full cursor-pointer"
                onClick={() => navigate(`/Course-DescriptionPage/${course._id}`)}
              >
                <CourseCard
                  _id={course._id}
                  title={course.title}
                  slug={course.slug}
                  description={course.description}
                  shortDescription={course.shortDescription}
                  instructor={course.instructor}
                  category={course.category}
                  price={course.price}
                  durationHours={course.durationHours}
                  level={course.level}
                  tags={course.tags}
                  thumbnailUrl={course.thumbnailUrl}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-8 sm:h-12 md:h-16"></div>
      </div>
    </div>
  );
};

export default BrowseCourses;
