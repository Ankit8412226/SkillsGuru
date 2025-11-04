import { ArrowLeft, BookOpen, Calendar, CheckCircle, ChevronDown, Clock, Download, FileText, MessageSquare, Play, Send, Star, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [completedLessons, setCompletedLessons] = useState([]);
  const [activeTab, setActiveTab] = useState('content');
  const [reviews, setReviews] = useState([]);
  const [reviewSummary, setReviewSummary] = useState({ average: 0, count: 0 });
  const [myReview, setMyReview] = useState({ rating: 5, comment: '' });
  const [submittingReview, setSubmittingReview] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    loadCourseDetail();
    loadReviews();
    loadSubmissions();
  }, [courseId]);

  const loadReviews = async () => {
    try {
      const res = await api.get(`/reviews/courses/${courseId}`);
      const data = res.data?.data || {};
      setReviews(data.reviews || []);
      setReviewSummary(data.summary || { average: 0, count: 0 });
    } catch (err) {
      console.error('Error loading reviews:', err);
    }
  };

  const loadSubmissions = async () => {
    try {
      const res = await api.get(`/assignments/submissions/me`);
      const data = res.data?.data || res.data;
      // Filter submissions for this course
      const courseSubmissions = (Array.isArray(data) ? data : []).filter(
        sub => sub.course?.toString() === courseId || sub.course?._id?.toString() === courseId
      );
      setSubmissions(courseSubmissions);
    } catch (err) {
      console.error('Error loading submissions:', err);
    }
  };

  const submitReview = async () => {
    if (!myReview.comment.trim()) {
      alert('Please write a comment');
      return;
    }
    try {
      setSubmittingReview(true);
      await api.post(`/reviews/courses/${courseId}`, {
        rating: myReview.rating,
        comment: myReview.comment
      });
      setMyReview({ rating: 5, comment: '' });
      loadReviews(); // Reload reviews
      alert('Review submitted successfully!');
    } catch (err) {
      console.error('Error submitting review:', err);
      alert(err.response?.data?.message || 'Failed to submit review');
    } finally {
      setSubmittingReview(false);
    }
  };

  const loadCourseDetail = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/dashboard/courses/${courseId}`);
      const data = res.data?.data || res.data;
      setCourseData(data);

      // Load progress data if available
      if (data.progress) {
        setCompletedLessons(data.progress.completedLessons || []);
      }
    } catch (err) {
      console.error('Error loading course detail:', err);
      setError(err.response?.data?.message || 'Failed to load course details');
    } finally {
      setLoading(false);
    }
  };

  const toggleWeek = (weekIndex) => {
    setExpandedWeeks(prev => ({
      ...prev,
      [weekIndex]: !prev[weekIndex]
    }));
  };

  const toggleLessonComplete = async (lessonId) => {
    try {
      // Optimistically update UI
      const newCompleted = completedLessons.includes(lessonId)
        ? completedLessons.filter(id => id !== lessonId)
        : [...completedLessons, lessonId];

      setCompletedLessons(newCompleted);

      // Make API call
      await api.post(`/progress/${courseId}/toggle`, {
        lessonId
      });

      // Reload to get updated progress percentage
      setTimeout(() => loadCourseDetail(), 500);
    } catch (err) {
      console.error('Error toggling lesson:', err);
      // Revert on error
      loadCourseDetail();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const { enrollment, content, assignments } = courseData || {};
  const course = enrollment?.course || {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Course Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={course.thumbnailUrl || 'https://via.placeholder.com/300x200'}
              alt={course.title}
              className="w-full md:w-80 h-48 rounded-xl object-cover shadow-lg border-4 border-white/20"
            />
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{course.title}</h1>
              <p className="text-emerald-50 mb-4 text-lg">{course.shortDescription || course.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 mb-6">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                  <User className="w-4 h-4" />
                  {course.instructor?.name || 'Instructor'}
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4" />
                  {course.durationHours || 0} hours
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  Enrolled: {new Date(enrollment?.enrolledAt).toLocaleDateString()}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white/90">Course Progress</span>
                  <span className="text-lg font-bold text-white">{enrollment?.progress || 0}%</span>
                </div>
                <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all shadow-lg"
                    style={{ width: `${enrollment?.progress || 0}%` }}
                  ></div>
                </div>
              </div>

              {/* Live Class Link */}
              {content?.liveClassLink && (
                <a
                  href={content.liveClassLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-semibold shadow-lg"
                >
                  <Play className="w-5 h-5" />
                  Join Live Class
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6 flex gap-2 flex-wrap">
          {[
            { key: 'content', label: 'Course Content', icon: BookOpen },
            { key: 'submissions', label: 'My Submissions', icon: FileText },
            { key: 'reviews', label: 'Reviews', icon: MessageSquare }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-emerald-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Course Content Tab */}
            {activeTab === 'content' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
              </div>

              {content?.weeks && content.weeks.length > 0 ? (
                <div className="space-y-3">
                  {content.weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="border border-gray-200 rounded-lg overflow-hidden hover:border-emerald-400 transition-colors">
                      <button
                        onClick={() => toggleWeek(weekIndex)}
                        className="w-full px-5 py-4 bg-gradient-to-r from-gray-50 to-white hover:from-emerald-50 hover:to-white flex items-center justify-between transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                            <span className="text-sm font-bold text-emerald-600 group-hover:text-white">{week.weekNumber}</span>
                          </div>
                          <div className="text-left">
                            <p className="text-xs text-emerald-600 font-semibold">Week {week.weekNumber}</p>
                            <p className="font-semibold text-gray-900">{week.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 mr-2">
                            {week.topics?.length || 0} topics
                          </span>
                          <div className={`w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center transition-transform ${expandedWeeks[weekIndex] ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-4 h-4 text-emerald-600" />
                          </div>
                        </div>
                      </button>

                      {expandedWeeks[weekIndex] && (
                        <div className="p-5 bg-gray-50 space-y-4">
                          {week.topics?.map((topic, topicIndex) => (
                            <div key={topicIndex} className="bg-white rounded-lg p-4 border-l-4 border-emerald-400">
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-emerald-600" />
                                {topic.title}
                              </h4>
                              {topic.subtopics?.map((subtopic, subtopicIndex) => (
                                <div key={subtopicIndex} className="ml-7 mb-3">
                                  <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    {subtopic.title}
                                  </h5>
                                  <div className="space-y-1">
                                    {subtopic.classes?.map((cls, classIndex) => {
                                      const lessonId = `w${weekIndex}-t${topicIndex}-s${subtopicIndex}-c${classIndex}`;
                                      const isCompleted = completedLessons.includes(lessonId);

                                      return (
                                        <div
                                          key={classIndex}
                                          className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all cursor-pointer ${
                                            isCompleted
                                              ? 'bg-emerald-50 border border-emerald-200'
                                              : 'bg-white border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                                          }`}
                                          onClick={() => toggleLessonComplete(lessonId)}
                                        >
                                          <input
                                            type="checkbox"
                                            checked={isCompleted}
                                            onChange={(e) => {
                                              e.stopPropagation();
                                              toggleLessonComplete(lessonId);
                                            }}
                                            className="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500 cursor-pointer"
                                          />
                                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                            isCompleted ? 'bg-emerald-500' : 'bg-gray-200'
                                          }`}>
                                            {isCompleted ? (
                                              <CheckCircle className="w-5 h-5 text-white" />
                                            ) : (
                                              <Play className="w-4 h-4 text-gray-600" />
                                            )}
                                          </div>
                                          <div className="flex-1">
                                            <p className={`text-sm font-medium ${isCompleted ? 'text-emerald-700' : 'text-gray-900'}`}>
                                              {cls.title}
                                            </p>
                                            {cls.description && (
                                              <p className="text-xs text-gray-500 mt-0.5">{cls.description}</p>
                                            )}
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <Clock className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs text-gray-600 font-medium">{cls.durationMinutes}min</span>
                                          </div>
                                        </div>
                                      );
                                    })}
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
              ) : (
                <p className="text-gray-500 text-center py-8">No content available yet</p>
              )}
            </div>
            )}

            {/* Submissions Tab */}
            {activeTab === 'submissions' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">My Submissions</h2>
                </div>

                {submissions.length > 0 ? (
                  <div className="space-y-4">
                    {submissions.map(submission => (
                      <div key={submission._id} className="border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">{submission.assignment?.title || 'Assignment'}</h3>
                            <p className="text-sm text-gray-600">
                              Submitted: {new Date(submission.submittedAt).toLocaleDateString()}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            submission.status === 'graded'
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {submission.status}
                          </span>
                        </div>

                        {submission.marks !== null && submission.marks !== undefined && (
                          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700">Score</span>
                              <span className="text-2xl font-bold text-emerald-600">
                                {submission.marks}/{submission.assignment?.maxMarks || 100}
                              </span>
                            </div>
                            {submission.feedback && (
                              <div className="mt-3 pt-3 border-t border-emerald-200">
                                <p className="text-sm font-semibold text-gray-700 mb-1">Feedback:</p>
                                <p className="text-sm text-gray-600">{submission.feedback}</p>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="bg-gray-50 rounded-lg p-4 mb-3">
                          <p className="text-sm text-gray-700">{submission.content}</p>
                        </div>

                        {submission.attachments && submission.attachments.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-gray-600">Attachments:</p>
                            {submission.attachments.map((url, idx) => (
                              <a
                                key={idx}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
                              >
                                <FileText className="w-4 h-4" />
                                Attachment {idx + 1}
                              </a>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() => navigate(`/dashboard/assignment/${submission.assignment._id || submission.assignment}`)}
                          className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                        >
                          View Assignment Details
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">No submissions yet</p>
                    <p className="text-sm text-gray-500">Complete assignments to see your submissions here</p>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Course Reviews</h2>
                </div>

                {/* Review Summary */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-emerald-600 mb-2">
                        {reviewSummary.average.toFixed(1)}
                      </div>
                      <div className="flex items-center gap-1 justify-center mb-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star
                            key={star}
                            className={`w-5 h-5 ${star <= Math.round(reviewSummary.average) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{reviewSummary.count} reviews</p>
                    </div>
                    <div className="flex-1 text-sm text-gray-700">
                      <p className="mb-2">Share your experience with this course and help others make informed decisions.</p>
                    </div>
                  </div>
                </div>

                {/* Write Review */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Write a Review</h3>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          onClick={() => setMyReview(prev => ({ ...prev, rating: star }))}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-8 h-8 ${star <= myReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                    <textarea
                      value={myReview.comment}
                      onChange={(e) => setMyReview(prev => ({ ...prev, comment: e.target.value }))}
                      placeholder="Share your experience with this course..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                      rows={4}
                    />
                  </div>

                  <button
                    onClick={submitReview}
                    disabled={submittingReview}
                    className={`flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold transition-all ${
                      submittingReview
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-emerald-600 hover:shadow-lg'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    {submittingReview ? 'Submitting...' : 'Submit Review'}
                  </button>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg">Student Reviews</h3>
                  {reviews.length > 0 ? (
                    reviews.map(review => (
                      <div key={review._id} className="border border-gray-200 rounded-lg p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">
                              {review.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{review.user?.name || 'Anonymous'}</h4>
                              <span className="text-xs text-gray-500">
                                {new Date(review.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              {[1, 2, 3, 4, 5].map(star => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <p className="text-gray-700 text-sm">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Assignments */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Assignments</h3>
                  <p className="text-xs text-gray-500">{assignments?.length || 0} total</p>
                </div>
              </div>
              {assignments && assignments.length > 0 ? (
                <div className="space-y-3">
                  {assignments.map(assignment => (
                    <div key={assignment._id} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow-md transition-all group">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{assignment.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                        <Clock className="w-3 h-3" />
                        <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                      </div>
                      <button
                        onClick={() => navigate(`/dashboard/assignment/${assignment._id}`)}
                        className="w-full px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-all hover:shadow-lg hover:scale-105"
                      >
                        View Assignment →
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">No assignments yet</p>
                </div>
              )}
            </div>

            {/* Recordings */}
            {content?.recordings && content.recordings.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recorded Sessions</h3>
                <div className="space-y-3">
                  {content.recordings.map((recording, idx) => (
                    <a
                      key={idx}
                      href={recording.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-colors"
                    >
                      <Play className="w-5 h-5 text-emerald-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{recording.title}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(recording.addedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Course Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Course Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Hours</span>
                  <span className="font-semibold text-gray-900">{content?.totalDurationHours || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Classes</span>
                  <span className="font-semibold text-gray-900">{content?.totalClasses || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Completed</span>
                  <span className="font-semibold text-emerald-600">
                    {completedLessons.length} lessons
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
