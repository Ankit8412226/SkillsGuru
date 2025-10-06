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
  Star
} from 'lucide-react';
import { useState } from 'react';

const CourseDescriptionPage = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Sample course data - replace with actual data from your API
  const courseData = {
    title: "Complete React Developer Course",
    shortDescription: "Master React from beginner to advanced with hands-on projects and real-world applications",
    instructor: {
      name: "Angela Yu",
      title: "Web Developer & Instructor",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8,
      students: "250,000+",
      courses: 15,
      bio: "I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming developers."
    },
    thumbnailUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    rating: 4.8,
    studentsCount: "15,420",
    price: 75,
    originalPrice: 150,
    level: "Beginner to Advanced",
    durationHours: 40.25,
    totalClasses: 156,
    language: "English",
    lastUpdated: "October 2024",
    category: "Development",
    tags: ["React", "JavaScript", "Web Development", "Frontend"],

    whatYouLearn: [
      "Build modern React applications from scratch",
      "Master React Hooks including useState, useEffect, useContext",
      "Understand React Router for single-page applications",
      "Work with Redux for state management",
      "Implement authentication and authorization",
      "Create responsive designs with modern CSS and Tailwind",
      "Deploy React applications to production",
      "Write clean, maintainable code following best practices"
    ],

    requirements: [
      "Basic understanding of HTML and CSS",
      "JavaScript fundamentals (ES6+ recommended)",
      "A computer with internet connection",
      "Eagerness to learn and build projects"
    ],

    description: `
      <h3>Master React Development</h3>
      <p>Welcome to the Complete React Developer Course! This comprehensive course is designed to take you from a complete beginner to an advanced React developer.</p>

      <h3>Why Learn React?</h3>
      <p>React is the most popular JavaScript library for building user interfaces. It's used by companies like Facebook, Instagram, Netflix, and Airbnb. Learning React opens doors to exciting career opportunities and allows you to build amazing web applications.</p>

      <h3>What Makes This Course Different?</h3>
      <p>This course is project-based, meaning you'll be building real-world applications throughout the course. You won't just watch videos - you'll actually code along and create portfolio-worthy projects.</p>

      <h3>Course Structure</h3>
      <p>The course is divided into weeks, each focusing on specific topics. You'll start with the fundamentals and gradually move to advanced concepts. Each week includes multiple topics with hands-on coding exercises.</p>
    `,

    weeks: [
      {
        weekNumber: 1,
        title: "React Fundamentals",
        description: "Get started with React basics",
        topics: [
          {
            title: "Introduction to React",
            description: "Understanding React and its ecosystem",
            subtopics: [
              {
                title: "What is React?",
                description: "React basics and philosophy",
                classes: [
                  { title: "Course Introduction", durationMinutes: 15, videoUrl: "", resources: [] },
                  { title: "Setting Up Your Environment", durationMinutes: 20, videoUrl: "", resources: [] },
                  { title: "Your First React Component", durationMinutes: 25, videoUrl: "", resources: [] }
                ]
              },
              {
                title: "JSX and Components",
                description: "Learn JSX syntax and component creation",
                classes: [
                  { title: "Understanding JSX", durationMinutes: 30, videoUrl: "", resources: [] },
                  { title: "Functional Components", durationMinutes: 35, videoUrl: "", resources: [] },
                  { title: "Props and Data Flow", durationMinutes: 40, videoUrl: "", resources: [] }
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "State Management & Hooks",
        description: "Master React state and hooks",
        topics: [
          {
            title: "React Hooks",
            description: "Deep dive into React Hooks",
            subtopics: [
              {
                title: "useState Hook",
                description: "Managing component state",
                classes: [
                  { title: "Introduction to useState", durationMinutes: 25, videoUrl: "", resources: [] },
                  { title: "State with Arrays and Objects", durationMinutes: 30, videoUrl: "", resources: [] }
                ]
              },
              {
                title: "useEffect Hook",
                description: "Side effects and lifecycle",
                classes: [
                  { title: "Understanding useEffect", durationMinutes: 35, videoUrl: "", resources: [] },
                  { title: "Cleanup Functions", durationMinutes: 20, videoUrl: "", resources: [] }
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        title: "Advanced React Patterns",
        description: "Learn advanced React concepts",
        topics: [
          {
            title: "Context API",
            description: "Global state management",
            subtopics: [
              {
                title: "React Context",
                description: "Using Context API",
                classes: [
                  { title: "Creating Context", durationMinutes: 30, videoUrl: "", resources: [] },
                  { title: "Context Provider Pattern", durationMinutes: 35, videoUrl: "", resources: [] }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  const toggleWeek = (weekNumber) => {
    setExpandedWeek(expandedWeek === weekNumber ? null : weekNumber);
  };

  const totalLessons = courseData.weeks.reduce((total, week) => {
    return total + week.topics.reduce((topicTotal, topic) => {
      return topicTotal + topic.subtopics.reduce((subtopicTotal, subtopic) => {
        return subtopicTotal + subtopic.classes.length;
      }, 0);
    }, 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0E2A46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="text-[#2FC7A1] text-sm font-medium">
                  {courseData.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {courseData.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                {courseData.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">{courseData.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(courseData.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">
                    ({courseData.studentsCount} students)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{courseData.durationHours}h total</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{totalLessons} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>{courseData.level}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={courseData.instructor.image}
                  alt={courseData.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-gray-400">Created by</p>
                  <p className="font-medium">{courseData.instructor.name}</p>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Course Card (Desktop) */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden sticky top-4">
                <img
                  src={courseData.thumbnailUrl}
                  alt={courseData.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-[#0E2A46]">
                      ${courseData.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${courseData.originalPrice}
                    </span>
                    <span className="text-[#2FC7A1] font-medium">
                      {Math.round((1 - courseData.price / courseData.originalPrice) * 100)}% off
                    </span>
                  </div>

                  <button className="w-full flex items-center justify-center rounded-lg bg-[#2FC7A1] text-white font-medium h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 mb-3">
                    <span className="px-6 py-2 text-sm font-medium">
                      Enroll Now
                    </span>
                  </button>

                  <button className="w-full flex items-center justify-center rounded-lg border-2 border-[#0E2A46] text-[#0E2A46] font-medium h-12 hover:bg-gray-50 transition-colors duration-200">
                    <span className="px-6 py-2 text-sm font-medium">
                      Add to Wishlist
                    </span>
                  </button>

                  <div className="mt-6 space-y-3">
                    <p className="font-semibold text-[#0E2A46]">This course includes:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Play className="w-4 h-4 text-gray-600" />
                        <span>{courseData.durationHours} hours on-demand video</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Infinity className="w-4 h-4 text-gray-600" />
                        <span>Full lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-gray-600" />
                        <span>Access on mobile and desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-600" />
                        <span>Certificate of completion</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t flex justify-center gap-4">
                    <button className="text-gray-600 hover:text-[#2FC7A1]">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-red-500">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#0E2A46]">
                ${courseData.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${courseData.originalPrice}
              </span>
            </div>
          </div>
          <button className="flex items-center rounded-lg bg-[#2FC7A1] text-white font-medium px-6 h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200">
            <span className="text-sm font-medium">Enroll Now</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b">
                <div className="flex gap-8 px-6">
                  {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 font-medium capitalize relative ${
                        activeTab === tab
                          ? 'text-[#2FC7A1]'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FC7A1]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* What You'll Learn */}
                    <div>
                      <h2 className="text-2xl font-bold text-[#0E2A46] mb-4">
                        What you'll learn
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {courseData.whatYouLearn.map((item, index) => (
                          <div key={index} className="flex gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#2FC7A1] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h2 className="text-2xl font-bold text-[#0E2A46] mb-4">
                        Description
                      </h2>
                      <div
                        className="prose prose-lg max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: courseData.description }}
                      />
                    </div>

                    {/* Requirements */}
                    <div>
                      <h2 className="text-2xl font-bold text-[#0E2A46] mb-4">
                        Requirements
                      </h2>
                      <ul className="space-y-2">
                        {courseData.requirements.map((req, index) => (
                          <li key={index} className="flex gap-2 text-gray-700">
                            <span className="text-[#2FC7A1]">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-[#0E2A46]">
                        Course Curriculum
                      </h2>
                      <div className="text-sm text-gray-600">
                        {courseData.weeks.length} weeks • {totalLessons} lessons • {courseData.durationHours}h total
                      </div>
                    </div>

                    <div className="space-y-3">
                      {courseData.weeks.map((week) => (
                        <div key={week.weekNumber} className="border rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleWeek(week.weekNumber)}
                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center gap-3 text-left">
                              <div className="w-8 h-8 rounded-full bg-[#2FC7A1] text-white flex items-center justify-center font-semibold text-sm">
                                {week.weekNumber}
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#0E2A46]">
                                  {week.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {week.description}
                                </p>
                              </div>
                            </div>
                            {expandedWeek === week.weekNumber ? (
                              <ChevronUp className="w-5 h-5 text-gray-600" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-600" />
                            )}
                          </button>

                          {expandedWeek === week.weekNumber && (
                            <div className="p-4 space-y-3 bg-white">
                              {week.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="pl-4">
                                  <h4 className="font-medium text-[#0E2A46] mb-2">
                                    {topic.title}
                                  </h4>
                                  {topic.subtopics.map((subtopic, subtopicIndex) => (
                                    <div key={subtopicIndex} className="pl-4 mb-3">
                                      <p className="text-sm font-medium text-gray-700 mb-2">
                                        {subtopic.title}
                                      </p>
                                      <div className="space-y-1">
                                        {subtopic.classes.map((cls, classIndex) => (
                                          <div
                                            key={classIndex}
                                            className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded text-sm"
                                          >
                                            <div className="flex items-center gap-2">
                                              <Play className="w-4 h-4 text-gray-400" />
                                              <span className="text-gray-700">{cls.title}</span>
                                            </div>
                                            <span className="text-gray-500 text-xs">
                                              {cls.durationMinutes} min
                                            </span>
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

                {/* Instructor Tab */}
                {activeTab === 'instructor' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#0E2A46] mb-6">
                      Your Instructor
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={courseData.instructor.image}
                        alt={courseData.instructor.name}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0E2A46] mb-1">
                          {courseData.instructor.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{courseData.instructor.title}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">{courseData.instructor.rating}</span>
                            </div>
                            <p className="text-sm text-gray-600">Instructor Rating</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">{courseData.instructor.students}</p>
                            <p className="text-sm text-gray-600">Students</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">{courseData.instructor.courses}</p>
                            <p className="text-sm text-gray-600">Courses</p>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                          {courseData.instructor.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#0E2A46] mb-6">
                      Student Reviews
                    </h2>
                    <div className="flex items-center gap-8 mb-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-[#0E2A46] mb-2">
                          {courseData.rating}
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(courseData.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">Course Rating</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Reviews will be displayed here once students complete the course.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar (Desktop only - sticky info) */}
          <div className="hidden lg:block">
            {/* Additional course info can go here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescriptionPage;
