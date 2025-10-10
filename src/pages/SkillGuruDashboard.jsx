import { AlertCircle, Award, Bell, BookOpen, Calendar, CheckCircle, ChevronRight, Clock, MessageSquare, Moon, Play, Search, ShoppingCart, Sun, TrendingUp, Upload } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import api from '../utils/api';

const SkillGuruDashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { count } = useCart();
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  // Profile Dropdown
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [username, setUsername] = useState("User");
  const profileMenuRef = useRef(null);

  const navigate = useNavigate();

  // Fetch dashboard data
  const getDashboard = async () => {
    try {
      await api.get(`${import.meta.env.VITE_API_BASE_URL}/dashboard/me`);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    }
  };

  // Fetch profile data dynamically
  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/login');
        return;
      }

      const res = await api.get(`${import.meta.env.VITE_API_BASE_URL}/user/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setProfileData(res.data);
      setUsername(res.data.name || "User");
      localStorage.setItem('name', res.data.name || "User");
    } catch (err) {
      console.error("Error fetching profile:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/login');
      }
    }
  };

  // Toggle profile menu
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    getDashboard();
    getProfile();
  }, []);

  const courses = [
    {
      id: 1,
      title: "Advanced React & TypeScript",
      instructor: "Dr. Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      progress: 65,
      nextDeadline: "Oct 15, 2025",
      pendingAssignments: 2,
      liveNow: false
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Prof. Michael Chen",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      progress: 82,
      nextDeadline: "Oct 12, 2025",
      pendingAssignments: 1,
      liveNow: true
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emily Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      progress: 45,
      nextDeadline: "Oct 20, 2025",
      pendingAssignments: 3,
      liveNow: false
    }
  ];

  const upcomingClasses = [
    { course: "Data Science with Python", time: "Today, 3:00 PM", instructor: "Prof. Michael Chen" },
    { course: "Advanced React & TypeScript", time: "Tomorrow, 10:00 AM", instructor: "Dr. Sarah Johnson" },
    { course: "UI/UX Design Masterclass", time: "Oct 11, 2:00 PM", instructor: "Emily Rodriguez" }
  ];

  const assignments = [
    { id: 1, course: "Data Science with Python", title: "ML Model Implementation", deadline: "Oct 12, 2025", status: "pending" },
    { id: 2, course: "Advanced React & TypeScript", title: "Build E-commerce App", deadline: "Oct 15, 2025", status: "pending" },
    { id: 3, course: "UI/UX Design Masterclass", title: "Mobile App Redesign", deadline: "Oct 20, 2025", status: "submitted" }
  ];

  const instructors = [
    { name: "Dr. Sarah Johnson", expertise: "Full-Stack Development", courses: 2, avatar: "SJ" },
    { name: "Prof. Michael Chen", expertise: "Data Science & AI", courses: 3, avatar: "MC" },
    { name: "Emily Rodriguez", expertise: "UI/UX Design", courses: 1, avatar: "ER" }
  ];

  return (
    <div className={`min-h-screen relative`}>
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 pt-35">
        {/* Header */}
        <header className={`${darkMode ? 'bg-slate-800/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} border-b ${darkMode ? 'border-slate-700' : 'border-gray-200'} fixed top-0 left-0 w-full h-26 z-50`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-26 pt-5">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img
                  src="./Skill Guru Logo Teal.svg"
                  alt="Skill Guru Logo"
                  className="h-10 w-auto"
                />
                <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}></span>
              </div>

              {/* Search (compact) */}
              <div className="flex-1 max-w-md mx-6">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className={`w-full pl-9 pr-3 py-1.5 text-sm rounded-md ${darkMode ? 'bg-slate-700 text-white placeholder-slate-400 border-slate-600' : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-emerald-400`}
                  />
                </div>
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-4">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                  {darkMode ? <Sun className="w-5 h-5 text-slate-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
                </button>

                <button
                  onClick={() => navigate(isAuthenticated ? '/cart' : '/login')}
                  className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} relative`}
                  title="Cart"
                >
                  <ShoppingCart className={`w-5 h-5 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`} />
                  {count > 0 && (
                    <span className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 bg-emerald-500 text-white text-[10px] leading-[18px] font-semibold rounded-full text-center">
                      {count}
                    </span>
                  )}
                </button>

                <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} relative`}>
                  <Bell className={`w-5 h-5 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full"></span>
                </button>

                {/* Profile */}
                <div className="flex items-center space-x-2 pl-4 border-l border-slate-700 relative" ref={profileMenuRef}>
                  <div 
                    className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={toggleProfileMenu}
                  >
                    <span className="text-white text-sm font-semibold">{username.charAt(0).toUpperCase()}</span>
                  </div>
                  <span 
                    className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} cursor-pointer`}
                    onClick={toggleProfileMenu}
                  >
                    {username}
                  </span>

                  {/* Dropdown */}
                  {showProfileMenu && (
                    <div className="absolute top-12 right-0 w-64 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 z-50 border border-gray-200 dark:border-slate-700">
                      {profileData ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-slate-700">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-lg font-semibold">{profileData.name?.charAt(0).toUpperCase()}</span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{profileData.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{profileData.email}</p>
                            </div>
                          </div>
                          
                          <button 
                            className="w-full text-left text-sm px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded flex items-center gap-2 text-gray-700 dark:text-gray-300"
                            onClick={() => {
                              setShowProfileMenu(false);
                              navigate('/dashboard/profile');
                            }}
                          >
                            <span>👤</span>
                            View Profile
                          </button>
                          
                          <button 
                            className="w-full text-left text-sm px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded flex items-center gap-2 text-gray-700 dark:text-gray-300"
                            onClick={() => {
                              setShowProfileMenu(false);
                              navigate('/cart');
                            }}
                          >
                            <span>🛒</span>
                            My Cart
                          </button>
                          
                          <button
                            className="w-full text-left text-sm px-3 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded flex items-center gap-2 text-red-600 dark:text-red-400 border-t border-gray-200 dark:border-slate-700 mt-2 pt-3"
                            onClick={() => {
                              localStorage.removeItem('token');
                              localStorage.removeItem('name');
                              navigate('/login');
                            }}
                          >
                            <span>🚪</span>
                            Logout
                          </button>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-black' : 'text-gray-900'}`}>
              Hi {username} 👋, here's your learning progress!
            </h1>
            <p className={`${darkMode ? 'text-black' : 'text-black'}`}>Keep up the great work and continue your journey to success</p>
          </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8 text-emerald-400" />
            </div>
            <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>12</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Total Courses</p>
          </div>

          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>3</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>In Progress</p>
          </div>

          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-yellow-400" />
            </div>
            <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>9</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Completed</p>
          </div>

          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-orange-400" />
            </div>
            <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>6</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Pending Tasks</p>
          </div>

          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-purple-400" />
            </div>
            <p className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>3</p>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Upcoming Classes</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Courses */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Courses */}
            <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
              <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Courses</h2>
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className={`${darkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50 border-gray-200'} rounded-lg p-4 border hover:border-emerald-400 transition-all`}>
                    <div className="flex gap-4">
                      <img src={course.thumbnail} alt={course.title} className="w-32 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{course.title}</h3>
                            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{course.instructor}</p>
                          </div>
                          {course.liveNow && (
                            <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full animate-pulse">
                              LIVE
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Progress</span>
                            <span className={`text-sm font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>{course.progress}%</span>
                          </div>
                          <div className={`w-full h-2 ${darkMode ? 'bg-slate-600' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" style={{ width: `${course.progress}%` }}></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm">
                            <span className={`${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                              {course.pendingAssignments} Pending
                            </span>
                            <span className={`${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                              Due: {course.nextDeadline}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {course.liveNow && (
                              <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
                                <Play className="w-4 h-4" />
                                Join Now
                              </button>
                            )}
                            <button className={`px-4 py-2 ${darkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-gray-200 hover:bg-gray-300'} text-sm font-medium rounded-lg transition-colors flex items-center gap-2`}>
                              View Course
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignments */}
            <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
              <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Upcoming Assignments</h2>
              <div className="space-y-3">
                {assignments.map(assignment => (
                  <div key={assignment.id} className={`${darkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50 border-gray-200'} rounded-lg p-4 border flex items-center justify-between hover:border-emerald-400 transition-all`}>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{assignment.title}</h3>
                      <p className={`text-sm mb-2 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{assignment.course}</p>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs flex items-center gap-1 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                          <Clock className="w-3 h-3" />
                          Due: {assignment.deadline}
                        </span>
                        {assignment.status === 'pending' ? (
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded">
                            Pending
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Submitted
                          </span>
                        )}
                      </div>
                    </div>
                    {assignment.status === 'pending' && (
                      <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Submit
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructors */}
            <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
              <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Your Instructors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {instructors.map((instructor, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50 border-gray-200'} rounded-lg p-4 border text-center hover:border-emerald-400 transition-all`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-lg font-bold">{instructor.avatar}</span>
                    </div>
                    <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{instructor.name}</h3>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{instructor.expertise}</p>
                    <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-gray-500'}`}>{instructor.courses} Courses</p>
                    <button className="mt-3 w-full px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-lg transition-colors">
                      Message
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Classes */}
            <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Upcoming Classes</h2>
                <Calendar className={`w-5 h-5 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`} />
              </div>
              <div className="space-y-4">
                {upcomingClasses.map((cls, idx) => (
                  <div key={idx} className={`${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'} rounded-lg p-4`}>
                    <p className={`text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{cls.course}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className={`w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`} />
                      <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{cls.time}</span>
                    </div>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{cls.instructor}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Chart */}
            <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
              <h2 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Overall Progress</h2>
              <div className="flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <svg className="transform -rotate-90 w-40 h-40">
                    <circle cx="80" cy="80" r="70" stroke={darkMode ? '#334155' : '#e5e7eb'} strokeWidth="12" fill="none" />
                    <circle cx="80" cy="80" r="70" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>75%</span>
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Complete</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
              <h2 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Achievements</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>5 Courses Completed</p>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Keep going!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>30 Day Streak</p>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Amazing consistency!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Top Contributor</p>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>Active in discussions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`${darkMode ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-emerald-400 to-teal-500'} rounded-xl p-6`}>
              <h3 className="text-white font-bold text-lg mb-4">Ready to Learn?</h3>
              <p className="text-emerald-50 text-sm mb-4">Explore new courses and expand your skills</p>
              <button className="w-full px-4 py-2 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors" onClick={() => navigate('/dashboard/course')}>
                Browse Courses
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGuruDashboard;