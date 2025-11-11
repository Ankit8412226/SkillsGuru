import axios from "axios";
import { Briefcase } from "lucide-react";
import { useState } from "react";
import Alert from "../assets/components/Alert.jsx";

const New_sesion = () => {
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
          form_name: "internship",
        }
      );

      setSuccessMessage(
        `Thank you ${formData.firstName} ${formData.lastName}, your internship application has been submitted!`
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        agreeToTerms: false,
      });

      setTimeout(() => {
        setShowForm(false);
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting internship application:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Internship Banner as Background Image */}
      <div
  className="relative w-full h-[40vh] md:h-[70vh] flex items-center justify-center bg-contain bg-no-repeat bg-center rounded-xl"
  style={{
    backgroundImage: "url('/Internship_banner (2).png')",
  }}
  on
></div>

      {/* ✅ Internship Application Form Modal */}
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
                  <h2 className="text-2xl font-bold text-[#0E2A46]">
                    Internship Application
                  </h2>
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
                  <Alert
                    variant="success"
                    title="Application Submitted!"
                    message={successMessage}
                  />
                </div>
              )}
              {errorMessage && (
                <div className="mb-4">
                  <Alert
                    variant="error"
                    title="Submission Failed"
                    message={errorMessage}
                  />
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
                    placeholder="Why are you interested in this internship?"
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
                    <a
                      href="/terms"
                      className="text-[#2FC7A1] hover:text-[#28B895]"
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="text-[#2FC7A1] hover:text-[#28B895]"
                    >
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

export default New_sesion;
