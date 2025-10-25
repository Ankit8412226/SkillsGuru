import axios from "axios";
import { ArrowLeft, CheckCircle2, CreditCard, Lock, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Alert from "../assets/components/Alert.jsx";

const CheckoutPage = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const courseId = searchParams.get("courseId");

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) {
        setError("No course selected");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/courses/${courseId}/details`);

        if (response.data.success) {
          setCourseData(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching course:", err);
        setError("Failed to load course details");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handlePayment = async () => {
    if (!courseId) return;

    setProcessing(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/orders`,
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const order = response.data?.data || response.data;

      if (order?.paymentLink) {
        window.location.href = order.paymentLink;
      } else {
        setSuccess("Order created successfully! Redirecting to dashboard...");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError(err?.response?.data?.message || "Payment failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#2FC7A1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0E2A46] text-lg font-medium">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (error && !courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <X className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <p className="text-red-600 text-lg font-medium">{error}</p>
          <button
            onClick={() => navigate("/courses")}
            className="mt-4 px-6 py-2 bg-[#2FC7A1] text-white rounded-lg hover:bg-[#28B895] transition-colors"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#2FC7A1] transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold text-[#0E2A46] mb-2">Complete Your Purchase</h1>
                <p className="text-gray-600">Review your course details and proceed to payment</p>
              </div>

              {courseData && (
                <div className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={courseData.thumbnailUrl}
                      alt={courseData.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-[#0E2A46] mb-2">
                        {courseData.title}
                      </h2>
                      <p className="text-gray-600 mb-2">{courseData.shortDescription}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>By {courseData.instructor?.name}</span>
                        <span>•</span>
                        <span>{courseData.durationHours}h</span>
                        <span>•</span>
                        <span className="capitalize">{courseData.level}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Alerts */}
              {error && (
                <div className="px-6 pb-4">
                  <Alert variant="error" title="Payment Error" message={error} />
                </div>
              )}
              {success && (
                <div className="px-6 pb-4">
                  <Alert variant="success" title="Success" message={success} />
                </div>
              )}
            </div>

            {/* Course Benefits */}
            <div className="bg-white rounded-xl shadow-lg mt-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0E2A46] mb-4">What's Included</h3>
                <div className="space-y-3">
                  {[
                    "Lifetime access to course materials",
                    "Certificate of completion",
                    "Access on mobile and desktop",
                    "Downloadable resources",
                    "Community support",
                    "30-day money-back guarantee"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2FC7A1] flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg sticky top-4">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0E2A46] mb-4">Order Summary</h3>

                {courseData && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Course Price</span>
                      <span className="font-semibold">₹{courseData.price?.toLocaleString("en-IN")}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tax (18%)</span>
                      <span className="font-semibold">₹{Math.round(courseData.price * 0.18).toLocaleString("en-IN")}</span>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-[#0E2A46]">Total</span>
                      <span className="text-[#2FC7A1]">₹{(courseData.price * 1.18).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handlePayment}
                  disabled={processing || !courseData}
                  className="w-full mt-6 flex items-center justify-center gap-2 bg-[#2FC7A1] text-white font-semibold py-4 rounded-lg hover:bg-[#28B895] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard size={20} />
                      Complete Payment
                    </>
                  )}
                </button>

                {/* Security Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Lock size={16} />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield size={16} />
                      <span>Protected</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
