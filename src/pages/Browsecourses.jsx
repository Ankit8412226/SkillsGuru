import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../assets/components/edcard";

const BrowseCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 text-lg font-medium">Loading courses…</p>
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
            {/*  onClick={() => navigate("/courses")} */}
            <div className="flex-shrink-0">
              <button
                onClick={() => navigate("/courses")}
                className="flex items-center gap-3 bg-[#2FC7A1] text-white font-semibold px-8 py-4 rounded-[200px] hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
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
