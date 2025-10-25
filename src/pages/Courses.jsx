import axios from "axios";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CourseCard from "../assets/components/edcard";
import InternshipBanner from "../assets/components/InternshipBanner";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/courses`);
      setCoursesData(response.data.data || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);

  const categories = [
    "All",
    "Development",
    "Data Science",
    "Design",
    "Marketing",
    "Business",
  ];

  const filteredCourses = coursesData.filter((course) => {
    const title = (course?.title || "").toLowerCase();
    const instructorName =
      typeof course?.instructor === "string"
        ? course.instructor.toLowerCase()
        : (course?.instructor?.name || "").toLowerCase();
    const category = (course?.category || "").toLowerCase();
    const q = (searchTerm || "").trim().toLowerCase();

    const matchesSearch = !q || title.includes(q) || instructorName.includes(q);
    const matchesCategory =
      selectedCategory === "All" ||
      category === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) params.set("search", value);
      else params.delete("search");
      return params;
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (searchTerm) params.set("search", searchTerm);
      if (category !== "All") params.set("category", category);
      else params.delete("category");
      return params;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading courses…
      </div>
    );
  }

  return (
    <div className="mt-10 mb-10 bg-white">
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
                onChange={handleSearchChange}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
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
            {filteredCourses.map((course) => (
              <CourseCard key={course._id || course.slug} {...course} />
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
              onClick={() => navigate("/admission")}
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

      {/* Internship Banner */}
      <InternshipBanner />
    </div>
  );
};

export default CoursesPage;
