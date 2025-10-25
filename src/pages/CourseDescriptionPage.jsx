import axios from "axios";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  Infinity,
  Play,
  Smartphone,
  Star,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const CourseDescriptionPage = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [buying, setBuying] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/courses/${id}/details`);

        if (response.data.success) {
          setCourseData(response.data.data);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load course details");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center animate-in fade-in duration-500">
          <div className="w-16 h-16 border-4 border-[#2FC7A1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0E2A46] text-lg font-medium animate-pulse">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center animate-in fade-in duration-500">
          <p className="text-red-600 text-lg font-medium animate-bounce">{error || "Course not found"}</p>
        </div>
      </div>
    );
  }

  const totalLessons = courseData.content?.reduce((total, week) => {
    return (
      total +
      week.topics.reduce((t, topic) => {
        return (
          t +
          topic.subtopics.reduce(
            (s, sub) => s + (sub.classes?.length || 0),
            0
          )
        );
      }, 0)
    );
  }, 0);

  const toggleWeek = (weekNumber) => {
    setExpandedWeek(expandedWeek === weekNumber ? null : weekNumber);
  };

  const instructor = courseData.instructor || {};

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0E2A46] via-[#0E2A46] to-[#1a3d5f] text-white animate-in slide-in-from-top duration-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 animate-in slide-in-from-left duration-700">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#2FC7A1] text-white text-sm font-semibold rounded-full animate-in fade-in duration-500 animate-pulse">
                  {courseData.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-in fade-in duration-700">
                {courseData.title}
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed animate-in fade-in duration-900">
                {courseData.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8 animate-in fade-in duration-1000">
                <div className="flex items-center gap-2 group">
                  <span className="text-yellow-400 font-bold text-lg transition-transform duration-300 group-hover:scale-110">4.8</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 transition-transform duration-300 hover:scale-110 ${
                          i < 4
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-400"
                        }`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-yellow-400">
                    (1,234 students)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[#2FC7A1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="text-sm text-gray-300">Duration</span>
                  </div>
                  <p className="text-xl font-bold">{courseData.durationHours}h</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-[#2FC7A1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="text-sm text-gray-300">Lessons</span>
                  </div>
                  <p className="text-xl font-bold">{totalLessons || courseData.totalClasses}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#2FC7A1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="text-sm text-gray-300">Level</span>
                  </div>
                  <p className="text-xl font-bold capitalize">{courseData.level}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '300ms' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#2FC7A1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="text-sm text-gray-300">Students</span>
                  </div>
                  <p className="text-xl font-bold">1.2k+</p>
                </div>
              </div>

              {instructor.name && (
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-bottom duration-700">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2FC7A1] to-[#28B895] flex items-center justify-center text-white font-bold text-xl border-2 border-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {instructor.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Created by</p>
                    <p className="font-semibold text-lg transition-colors duration-300 group-hover:text-[#2FC7A1]">{instructor.name}</p>
                    <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-[#28B895]">{instructor.email}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block animate-in slide-in-from-right duration-700">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden sticky top-4 hover:shadow-3xl transition-all duration-300">
                <div className="relative group">
                  <img
                    src={courseData.thumbnailUrl}
                    alt={courseData.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-white rounded-full p-4 transition-transform duration-300 hover:scale-110">
                      <Play className="w-8 h-8 text-[#0E2A46] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-[#0E2A46]">
                      ₹{courseData.price}
                    </span>
                  </div>

                  <p className="text-sm text-red-500 font-medium mb-4">
                    🔥 Limited time offer!
                  </p>

                  <button
                    onClick={async () => {
                      if (!localStorage.getItem("token")) {
                        navigate("/login");
                        return;
                      }
                      navigate(`/checkout?courseId=${id}`);
                    }}
                    className="w-full rounded-lg bg-[#2FC7A1] text-white font-semibold py-3.5 hover:bg-[#28B895] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-3 hover:scale-105 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Enroll Now
                      <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1" />
                    </span>
                  </button>

                  <button
                    onClick={async () => {
                      if (!localStorage.getItem("token")) {
                        navigate("/login");
                        return;
                      }
                      const ok = await addToCart(id);
                      if (ok) {
                        // optional toast
                      }
                    }}
                    className="w-full rounded-lg border-2 border-[#0E2A46] text-[#0E2A46] font-semibold py-3 hover:bg-[#0E2A46] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Add to Cart
                      <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    </span>
                  </button>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-3 text-sm hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 group">
                      <Infinity className="w-5 h-5 text-[#2FC7A1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="text-gray-700 transition-colors duration-300 group-hover:text-[#2FC7A1]">Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 group">
                      <Smartphone className="w-5 h-5 text-[#2FC7A1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="text-gray-700 transition-colors duration-300 group-hover:text-[#2FC7A1]">Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 group">
                      <Award className="w-5 h-5 text-[#2FC7A1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="text-gray-700 transition-colors duration-300 group-hover:text-[#2FC7A1]">Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 group">
                      <FileText className="w-5 h-5 text-[#2FC7A1] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="text-gray-700 transition-colors duration-300 group-hover:text-[#2FC7A1]">Downloadable resources</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Purchase Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50 animate-in slide-in-from-bottom duration-500">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-2xl font-bold text-[#0E2A46] animate-pulse">₹{courseData.price}</span>
          </div>
          <button
            onClick={() => {
              if (!localStorage.getItem("token")) {
                navigate("/login");
                return;
              }
              navigate(`/checkout?courseId=${id}`);
            }}
            className="flex-1 rounded-lg bg-[#2FC7A1] text-white font-semibold py-3 hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <span className="flex items-center justify-center gap-2">
              Enroll Now
              <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b">
            <div className="flex gap-8 px-6 overflow-x-auto">
              {["overview", "curriculum", "instructor"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-semibold capitalize relative whitespace-nowrap ${
                    activeTab === tab
                      ? "text-[#2FC7A1]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2FC7A1] rounded-t" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Overview */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#0E2A46] mb-4">
                    Course Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {courseData.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0E2A46] mb-4">
                    What You'll Learn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Master the fundamentals covered in this course",
                      "Build real-world projects and applications",
                      "Learn industry best practices and standards",
                      "Gain hands-on experience with modern tools",
                      "Develop problem-solving skills",
                      "Create a professional portfolio",
                      "Prepare for career opportunities",
                      "Get lifetime access to course materials"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#2FC7A1] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {courseData.tags && courseData.tags.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-[#0E2A46] mb-4">
                      Course Topics
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {courseData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-[#2FC7A1] hover:text-white transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-br from-[#0E2A46] to-[#1a3d5f] rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Course Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#2FC7A1] flex-shrink-0 mt-0.5" />
                      <span>Suitable for {courseData.level} level learners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#2FC7A1] flex-shrink-0 mt-0.5" />
                      <span>A computer with internet connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#2FC7A1] flex-shrink-0 mt-0.5" />
                      <span>Willingness to learn and practice</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Curriculum */}
            {activeTab === "curriculum" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-[#0E2A46] mb-2">
                    Course Curriculum
                  </h2>
                  <p className="text-gray-600">
                    {courseData.content?.length || 0} weeks • {totalLessons || courseData.totalClasses} lessons • {courseData.totalDurationHours || courseData.durationHours}h total length
                  </p>
                </div>

                <div className="space-y-4">
                  {courseData.content?.map((week) => (
                    <div
                      key={week.weekNumber}
                      className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#2FC7A1] transition-colors"
                    >
                      <button
                        onClick={() => toggleWeek(week.weekNumber)}
                        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2FC7A1] to-[#28B895] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                            {week.weekNumber}
                          </div>
                          <div>
                            <h3 className="font-bold text-[#0E2A46] text-lg mb-1">
                              {week.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {week.description}
                            </p>
                          </div>
                        </div>
                        {expandedWeek === week.weekNumber ? (
                          <ChevronUp className="w-6 h-6 text-[#2FC7A1] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        )}
                      </button>

                      {expandedWeek === week.weekNumber && (
                        <div className="p-6 bg-white border-t-2 border-gray-200">
                          {week.topics.map((topic, tIndex) => (
                            <div key={tIndex} className="mb-6 last:mb-0">
                              <h4 className="font-bold text-[#0E2A46] text-lg mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-[#2FC7A1]" />
                                {topic.title}
                              </h4>
                              {topic.description && (
                                <p className="text-gray-600 mb-4 ml-7">{topic.description}</p>
                              )}
                              {topic.subtopics.map((sub, sIndex) => (
                                <div key={sIndex} className="ml-7 mb-4">
                                  <p className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#2FC7A1]"></div>
                                    {sub.title}
                                  </p>
                                  <div className="space-y-2">
                                    {sub.classes.map((cls, cIndex) => (
                                      <div
                                        key={cIndex}
                                        className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer"
                                      >
                                        <div className="flex items-center gap-3">
                                          <Play className="w-4 h-4 text-gray-400 group-hover:text-[#2FC7A1] transition-colors" />
                                          <span className="text-gray-700 group-hover:text-[#0E2A46] font-medium">
                                            {cls.title}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          {cls.resources && cls.resources.length > 0 && (
                                            <FileText className="w-4 h-4 text-gray-400" />
                                          )}
                                          <span className="text-gray-500 text-sm font-medium">
                                            {cls.durationMinutes} min
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructor */}
            {activeTab === "instructor" && instructor.name && (
              <div>
                <h2 className="text-3xl font-bold text-[#0E2A46] mb-8">
                  Your Instructor
                </h2>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#2FC7A1] to-[#28B895] flex items-center justify-center text-white font-bold text-6xl shadow-xl border-4 border-white">
                      {instructor.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0E2A46] mb-2">
                        {instructor.name}
                      </h3>
                      <p className="text-[#2FC7A1] font-semibold mb-4">
                        {instructor.email}
                      </p>

                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="font-semibold text-gray-700">
                            4.8 Instructor Rating
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#2FC7A1]" />
                          <span className="font-semibold text-gray-700">
                            1,234 Students
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-[#2FC7A1]" />
                          <span className="font-semibold text-gray-700">
                            5+ Courses
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-lg">
                        {instructor.name} is an experienced educator passionate about helping students achieve their learning goals. With expertise in {courseData.category.toLowerCase()}, they bring real-world knowledge and practical insights to every lesson.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescriptionPage;
