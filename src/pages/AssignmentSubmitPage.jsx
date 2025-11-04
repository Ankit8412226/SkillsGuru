import { AlertCircle, ArrowLeft, Calendar, CheckCircle, Clock, FileText, Upload } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';

const AssignmentSubmitPage = () => {
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [assignment, setAssignment] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    content: '',
    attachments: []
  });

  useEffect(() => {
    loadAssignment();
  }, [assignmentId]);

  const loadAssignment = async () => {
    try {
      setLoading(true);
      // Get assignment details
      const assignmentRes = await api.get(`/assignments/${assignmentId}`);
      setAssignment(assignmentRes.data?.data || assignmentRes.data);

      // Try to get existing submission
      try {
        const submissionRes = await api.get(`/assignments/${assignmentId}/submission`);
        const existingSubmission = submissionRes.data?.data || submissionRes.data;
        if (existingSubmission) {
          setSubmission(existingSubmission);
          setFormData({
            content: existingSubmission.content || '',
            attachments: existingSubmission.attachments || []
          });
        }
      } catch (err) {
        // No submission yet, that's okay
        console.log('No existing submission');
      }
    } catch (err) {
      console.error('Error loading assignment:', err);
      setError(err.response?.data?.message || 'Failed to load assignment');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.content.trim()) {
      setError('Please enter your submission content');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const res = await api.post(`/assignments/${assignmentId}/submit`, formData);

      setSuccessMessage('Assignment submitted successfully!');
      setSubmission(res.data?.data || res.data);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      console.error('Error submitting assignment:', err);
      setError(err.response?.data?.message || 'Failed to submit assignment');
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddAttachment = () => {
    const url = prompt('Enter attachment URL:');
    if (url && url.trim()) {
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, url.trim()]
      }));
    }
  };

  const handleRemoveAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading assignment...</p>
        </div>
      </div>
    );
  }

  if (error && !assignment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-red-400 mx-auto mb-4" />
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

  const isLate = assignment?.dueDate && new Date() > new Date(assignment.dueDate);
  const isSubmitted = submission?.status === 'submitted' || submission?.status === 'graded';
  const isGraded = submission?.status === 'graded';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <p className="text-emerald-700">{successMessage}</p>
          </div>
        )}

        {/* Error Message */}
        {error && assignment && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Assignment Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{assignment?.title}</h1>
              <p className="text-gray-600 mb-4">{assignment?.description}</p>
            </div>
            {isSubmitted && (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isGraded
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {isGraded ? 'Graded' : 'Submitted'}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-gray-500">Due Date</p>
                <p className={`font-medium ${isLate ? 'text-red-600' : 'text-gray-900'}`}>
                  {new Date(assignment?.dueDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-gray-500">Status</p>
                <p className={`font-medium ${isLate && !isSubmitted ? 'text-red-600' : 'text-gray-900'}`}>
                  {isLate && !isSubmitted ? 'Late' : 'On Time'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-gray-500">Max Marks</p>
                <p className="font-medium text-gray-900">{assignment?.maxMarks || 100}</p>
              </div>
            </div>
          </div>

          {/* Assignment Attachments */}
          {assignment?.attachments && assignment.attachments.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Assignment Resources</h3>
              <div className="space-y-2">
                {assignment.attachments.map((url, idx) => (
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
            </div>
          )}
        </div>

        {/* Grading Info (if graded) */}
        {isGraded && (
          <div className="bg-emerald-50 rounded-xl shadow-sm border border-emerald-200 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Grading Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Marks Obtained</p>
                <p className="text-3xl font-bold text-emerald-600">
                  {submission.marks}/{assignment.maxMarks}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Percentage</p>
                <p className="text-3xl font-bold text-emerald-600">
                  {Math.round((submission.marks / assignment.maxMarks) * 100)}%
                </p>
              </div>
            </div>
            {submission.feedback && (
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Instructor Feedback</p>
                <p className="text-gray-700 bg-white p-4 rounded-lg border border-emerald-200">
                  {submission.feedback}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Submission Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {isSubmitted ? 'Your Submission' : 'Submit Assignment'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Submission Content *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                disabled={isSubmitted}
                rows={8}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none ${
                  isSubmitted ? 'bg-gray-50 cursor-not-allowed' : ''
                }`}
                placeholder="Enter your assignment submission here..."
                required
              />
            </div>

            {/* Attachments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments (Optional)
              </label>
              <div className="space-y-2">
                {formData.attachments.map((url, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-sm text-emerald-600 hover:text-emerald-700 truncate"
                    >
                      {url}
                    </a>
                    {!isSubmitted && (
                      <button
                        type="button"
                        onClick={() => handleRemoveAttachment(idx)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                {!isSubmitted && (
                  <button
                    type="button"
                    onClick={handleAddAttachment}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-emerald-600 hover:text-emerald-700 border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    Add Attachment URL
                  </button>
                )}
              </div>
            </div>

            {/* Submission Info */}
            {isSubmitted && submission.submittedAt && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  Submitted on: {new Date(submission.submittedAt).toLocaleString()}
                </p>
              </div>
            )}

            {/* Submit Button */}
            {!isSubmitted && (
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`flex-1 px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg transition-colors ${
                    submitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-emerald-600'
                  }`}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Upload className="w-5 h-5" />
                      Submit Assignment
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignmentSubmitPage;
