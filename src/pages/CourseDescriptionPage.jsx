import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  Heart,
  Infinity,
  Play,
  Share2,
  Smartphone,
  Star,
  Users,
  Globe,
  TrendingUp
} from "lucide-react";
import { useEffect, useState } from "react";

const CourseDescriptionPage = () => {
  const [courseData, setCourseData] = useState(null);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Simulating API call with mock data
    const mockData = {
      course: {
        title: "Complete Web Development Bootcamp 2024",
        slug: "web-development-bootcamp",
        description: "Master web development from scratch with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and much more. Build real-world projects and launch your career as a full-stack developer. This course covers everything you need to know to become a professional web developer, from the fundamentals to advanced topics. You'll work on hands-on projects, learn industry best practices, and gain the confidence to build your own applications.",
        shortDescription: "Learn web development from beginner to advanced. Build 15+ real-world projects and master modern technologies.",
        category: "Web Development",
        price: 49.99,
        durationHours: 52,
        level: "beginner",
        tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
        thumbnailUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        published: true,
        metadata: {
          originalPrice: 199.99,
          language: "English",
          lastUpdated: "2024-01",
          certificateOffered: true
        },
        instructor: {
          _id: "123",
          name: "Dr. Sarah Johnson",
          title: "Senior Software Engineer & Educator",
          bio: "With over 10 years of experience in software development and 5 years in teaching, I've helped over 100,000 students launch their careers in tech. I'm passionate about making complex concepts simple and accessible to everyone.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
          rating: 4.8,
          students: "125,000",
          courses: 12
        }
      },
      content: {
        weeks: [
          {
            weekNumber: 1,
            title: "Getting Started with Web Development",
            description: "Learn the fundamentals of HTML and CSS",
            topics: [
              {
                title: "HTML Basics",
                description: "Introduction to HTML structure and elements",
                subtopics: [
                  {
                    title: "HTML Fundamentals",
                    description: "Core HTML concepts",
                    classes: [
                      {
                        title: "Introduction to HTML",
                        description: "What is HTML and why it matters",
                        videoUrl: "video1.mp4",
                        durationMinutes: 15,
                        resources: ["slides.pdf", "cheatsheet.pdf"]
                      },
                      {
                        title: "HTML Tags and Elements",
                        description: "Understanding tags and elements",
                        videoUrl: "video2.mp4",
                        durationMinutes: 20,
                        resources: ["examples.html"]
                      },
                      {
                        title: "Semantic HTML",
                        description: "Writing meaningful HTML",
                        videoUrl: "video3.mp4",
                        durationMinutes: 18,
                        resources: []
                      }
                    ]
                  },
                  {
                    title: "HTML Forms",
                    description: "Creating interactive forms",
                    classes: [
                      {
                        title: "Form Elements",
                        description: "Input types and form controls",
                        videoUrl: "video4.mp4",
                        durationMinutes: 25,
                        resources: ["form-template.html"]
                      },
                      {
                        title: "Form Validation",
                        description: "Client-side validation techniques",
                        videoUrl: "video5.mp4",
                        durationMinutes: 22,
                        resources: []
                      }
                    ]
                  }
                ]
              },
              {
                title: "CSS Styling",
                description: "Learn to style your web pages",
                subtopics: [
                  {
                    title: "CSS Fundamentals",
                    description: "Introduction to CSS",
                    classes: [
                      {
                        title: "CSS Syntax and Selectors",
                        description: "How to write CSS",
                        videoUrl: "video6.mp4",
                        durationMinutes: 20,
                        resources: ["css-guide.pdf"]
                      },
                      {
                        title: "Colors and Typography",
                        description: "Styling text and colors",
                        videoUrl: "video7.mp4",
                        durationMinutes: 18,
                        resources: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            weekNumber: 2,
            title: "JavaScript Essentials",
            description: "Master the programming language of the web",
            topics: [
              {
                title: "JavaScript Basics",
                description: "Core JavaScript concepts",
                subtopics: [
                  {
                    title: "Variables and Data Types",
                    description: "Understanding JavaScript data",
                    classes: [
                      {
                        title: "Variables: let, const, var",
                        description: "Variable declaration and scope",
                        videoUrl: "video8.mp4",
                        durationMinutes: 22,
                        resources: []
                      },
                      {
                        title: "Data Types and Operators",
                        description: "Working with different data types",
                        videoUrl: "video9.mp4",
                        durationMinutes: 25,
                        resources: ["exercises.js"]
                      }
                    ]
                  },
                  {
                    title: "Functions and Scope",
                    description: "Writing reusable code",
                    classes: [
                      {
                        title: "Function Declarations",
                        description: "Creating and calling functions",
                        videoUrl: "video10.mp4",
                        durationMinutes: 20,
                        resources: []
                      },
                      {
                        title: "Arrow Functions",
                        description: "Modern function syntax",
                        videoUrl: "video11.mp4",
                        durationMinutes: 18,
                        resources: []
                      },
                      {
                        title: "Scope and Closures",
                        description: "Understanding variable scope",
                        videoUrl: "video12.mp4",
                        durationMinutes: 30,
                        resources: ["scope-examples.js"]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            weekNumber: 3,
            title: "React Fundamentals",
            description: "Build modern user interfaces with React",
            topics: [
              {
                title: "React Basics",
                description: "Introduction to React library",
                subtopics: [
                  {
                    title: "Components and Props",
                    description: "Building blocks of React",
                    classes: [
                      {
                        title: "Your First Component",
                        description: "Creating React components",
                        videoUrl: "video13.mp4",
                        durationMinutes: 25,
                        resources: []
                      },
                      {
                        title: "Props and Data Flow",
                        description: "Passing data between components",
                        videoUrl: "video14.mp4",
                        durationMinutes: 28,
                        resources: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        totalDurationHours: 52,
        totalClasses: 156
      }
    };

    setCourseData({
      ...mockData.course,
      content: mockData.content
    });
  }, []);

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#2FC7A1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0E2A46] text-lg font-medium">Loading course details...</p>
        </div>
      </div>
    );
  }

  const totalLessons = courseData.content?.weeks?.reduce((total, week) => {
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
  const discountPercentage = courseData.metadata?.originalPrice
    ? Math.round(
        (1 - courseData.price / courseData.metadata.originalPrice) * 100
      )
    : 0;

  return (
    <div className=" bg-white w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0E2A46] via-[#0E2A46] to-[#1a3d5f] text-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#2FC7A1] text-white text-sm font-semibold rounded-full">
                  {courseData.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {courseData.title}
              </h1>
              
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                {courseData.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold text-lg">
                    {instructor.rating || 4.8}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(instructor.rating || 4)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">
                    ({instructor.students || "10,000+"} students)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[#2FC7A1]" />
                    <span className="text-sm text-gray-300">Duration</span>
                  </div>
                  <p className="text-xl font-bold">{courseData.durationHours}h</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-[#2FC7A1]" />
                    <span className="text-sm text-gray-300">Lessons</span>
                  </div>
                  <p className="text-xl font-bold">{totalLessons}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#2FC7A1]" />
                    <span className="text-sm text-gray-300">Level</span>
                  </div>
                  <p className="text-xl font-bold capitalize">{courseData.level}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#2FC7A1]" />
                    <span className="text-sm text-gray-300">Students</span>
                  </div>
                  <p className="text-xl font-bold">{instructor.students}</p>
                </div>
              </div>

              {instructor.name && (
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <img
                    src={instructor.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                    alt={instructor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#2FC7A1]"
                  />
                  <div>
                    <p className="text-sm text-gray-300">Created by</p>
                    <p className="font-semibold text-lg">{instructor.name}</p>
                    <p className="text-sm text-gray-400">{instructor.title}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden sticky top-4">
                <div className="relative">
                  <img
                    src={courseData.thumbnailUrl || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"}
                    alt={courseData.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-white rounded-full p-4">
                      <Play className="w-8 h-8 text-[#0E2A46]" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-[#0E2A46]">
                      ${courseData.price}
                    </span>
                    {courseData.metadata?.originalPrice && (
                      <>
                        <span className="text-xl text-gray-400 line-through">
                          ${courseData.metadata.originalPrice}
                        </span>
                        <span className="text-[#2FC7A1] font-semibold text-sm">
                          {discountPercentage}% off
                        </span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-sm text-red-500 font-medium mb-4">
                    🔥 Limited time offer!
                  </p>

                  <button className="w-full rounded-lg bg-[#2FC7A1] text-white font-semibold py-3.5 hover:bg-[#28B895] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-3">
                    Enroll Now
                  </button>
                  
                  <button className="w-full rounded-lg border-2 border-[#0E2A46] text-[#0E2A46] font-semibold py-3 hover:bg-[#0E2A46] hover:text-white transition-all">
                    Add to Wishlist
                  </button>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Infinity className="w-5 h-5 text-[#2FC7A1]" />
                      <span className="text-gray-700">Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Smartphone className="w-5 h-5 text-[#2FC7A1]" />
                      <span className="text-gray-700">Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Award className="w-5 h-5 text-[#2FC7A1]" />
                      <span className="text-gray-700">Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FileText className="w-5 h-5 text-[#2FC7A1]" />
                      <span className="text-gray-700">Downloadable resources</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Purchase Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-2xl font-bold text-[#0E2A46]">${courseData.price}</span>
            {courseData.metadata?.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ${courseData.metadata.originalPrice}
              </span>
            )}
          </div>
          <button className="flex-1 rounded-lg bg-[#2FC7A1] text-white font-semibold py-3 hover:bg-[#28B895] transition">
            Enroll Now
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
                      "Build responsive websites from scratch",
                      "Master HTML, CSS, and JavaScript fundamentals",
                      "Create modern web applications with React",
                      "Understand backend development with Node.js",
                      "Work with databases using MongoDB",
                      "Deploy applications to production",
                      "Best practices and industry standards",
                      "Build a professional portfolio"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#2FC7A1] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0E2A46] mb-4">
                    Technologies You'll Master
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

                <div className="bg-gradient-to-br from-[#0E2A46] to-[#1a3d5f] rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Course Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#2FC7A1] flex-shrink-0 mt-0.5" />
                      <span>No prior programming experience needed</span>
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
                    {courseData.content?.weeks?.length || 0} weeks • {totalLessons} lessons • {courseData.durationHours}h total length
                  </p>
                </div>

                <div className="space-y-4">
                  {courseData.content?.weeks?.map((week) => (
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
                              Week {week.weekNumber}: {week.title}
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
                    <img
                      src={instructor.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                      alt={instructor.name}
                      className="w-48 h-48 rounded-2xl object-cover shadow-xl border-4 border-white"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0E2A46] mb-2">
                        {instructor.name}
                      </h3>
                      <p className="text-[#2FC7A1] font-semibold mb-4">
                        {instructor.title}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="font-semibold text-gray-700">
                            {instructor.rating} Instructor Rating
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#2FC7A1]" />
                          <span className="font-semibold text-gray-700">
                            {instructor.students} Students
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-[#2FC7A1]" />
                          <span className="font-semibold text-gray-700">
                            {instructor.courses} Courses
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {instructor.bio}
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