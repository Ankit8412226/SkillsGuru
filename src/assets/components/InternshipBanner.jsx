import axios from "axios";
import { ArrowRight, Briefcase, GraduationCap, Users, Zap } from "lucide-react";
import { useState } from "react";
import Alert from "./Alert.jsx";

const InternshipBanner = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    agreeToTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      setErrorMessage("Please agree to the Terms and Policies before submitting.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/admission`,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          contact_no: formData.phoneNumber,
          messages: formData.message,
          form_name: "internship", // Adding form name as requested
        }
      );

      setSuccessMessage(`Thank you ${formData.firstName} ${formData.lastName}, your internship application has been submitted!`);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        agreeToTerms: false,
      });

      // Hide form after successful submission
      setTimeout(() => {
        setShowForm(false);
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting internship application:", error);
      setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      {/* Internship Banner */}
      <div className="bg-gradient-to-r from-[#0E2A46] via-[#1a3d5f] to-[#0E2A46] text-white py-16 animate-in slide-in-from-top duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-in slide-in-from-left duration-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2FC7A1] rounded-full flex items-center justify-center animate-pulse">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#2FC7A1] font-semibold text-lg">Internship Opportunities</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Launch Your Career with Our
                <span className="text-[#2FC7A1] block">Internship Program</span>
              </h2>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Gain real-world experience, work on live projects, and build your professional network.
                Our internship program offers hands-on learning opportunities in cutting-edge technologies.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3 group animate-in slide-in-from-bottom duration-500">
                  <div className="w-10 h-10 bg-[#2FC7A1]/20 rounded-lg flex items-center justify-center group-hover:bg-[#2FC7A1] transition-all duration-300">
                    <GraduationCap className="w-5 h-5 text-[#2FC7A1] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mentorship</h3>
                    <p className="text-sm text-gray-300">Expert guidance</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '100ms' }}>
                  <div className="w-10 h-10 bg-[#2FC7A1]/20 rounded-lg flex items-center justify-center group-hover:bg-[#2FC7A1] transition-all duration-300">
                    <Users className="w-5 h-5 text-[#2FC7A1] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Team Work</h3>
                    <p className="text-sm text-gray-300">Collaborative environment</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '200ms' }}>
                  <div className="w-10 h-10 bg-[#2FC7A1]/20 rounded-lg flex items-center justify-center group-hover:bg-[#2FC7A1] transition-all duration-300">
                    <Zap className="w-5 h-5 text-[#2FC7A1] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Projects</h3>
                    <p className="text-sm text-gray-300">Real-world experience</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-3 bg-[#2FC7A1] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Content - Visual */}
            <div className="animate-in slide-in-from-right duration-700">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#2FC7A1]/20 to-[#28B895]/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                      <div className="w-16 h-16 bg-[#2FC7A1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">3-6 Months</h3>
                      <p className="text-sm text-gray-300">Duration</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                      <div className="w-16 h-16 bg-[#2FC7A1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">50+</h3>
                      <p className="text-sm text-gray-300">Positions</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                      <div className="w-16 h-16 bg-[#2FC7A1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Certificate</h3>
                      <p className="text-sm text-gray-300">Completion</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                      <div className="w-16 h-16 bg-[#2FC7A1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Stipend</h3>
                      <p className="text-sm text-gray-300">Available</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2FC7A1] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#28B895] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-500">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2FC7A1] rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0E2A46]">Internship Application</h2>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              {/* Alerts */}
              {successMessage && (
                <div className="mb-4">
                  <Alert variant="success" title="Application Submitted!" message={successMessage} />
                </div>
              )}
              {errorMessage && (
                <div className="mb-4">
                  <Alert variant="error" title="Submission Failed" message={errorMessage} />
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Names */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about yourself
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Why are you interested in this internship? What skills do you bring?"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FC7A1] text-sm"
                    required
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#2FC7A1] border-gray-300 rounded focus:ring-[#2FC7A1] mt-0.5"
                    required
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    I agree to all the{" "}
                    <a href="/terms" className="text-[#2FC7A1] hover:text-[#28B895]">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-[#2FC7A1] hover:text-[#28B895]">
                      Privacy Policies
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#2FC7A1] text-white font-semibold py-3 rounded-lg hover:bg-[#28B895] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Briefcase className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InternshipBanner;
