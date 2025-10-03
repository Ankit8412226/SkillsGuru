import axios from "axios";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    callbackRequested: false,
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/contact`;

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000,
      });

      // Optionally show a quick console log or toast
      console.log(response.data.message || "Submitted successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        callbackRequested: false,
      });



    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        setErrorMessage(
          error.response?.data?.message ||
          error.response?.data?.errors?.join(", ") ||
          `Server error: ${error.response.status}`
        );
      } else if (error.request) {
        setErrorMessage("No response from server. Please check your connection and API URL.");
      } else {
        setErrorMessage(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 "
        onClick={onClose}
      ></div>


      <div className="relative bg-white rounded-2xl shadow-2xl mx-4 w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto border border-gray-200">

        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>


        <div className="p-6 space-y-4">
          {successMessage && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-700 text-sm">{successMessage}</p>
            </div>
          )}

          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 text-sm">{errorMessage}</p>
            </div>
          )}



          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent outline-none"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent outline-none"
                placeholder="ankit@gmail.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent outline-none"
                placeholder="8529747613"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent resize-none outline-none"
                placeholder="Your message..."
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="callbackRequested"
                checked={formData.callbackRequested}
                onChange={handleChange}
                className="w-4 h-4 text-[#2FC7A1] border-gray-300 rounded focus:ring-[#2FC7A1]"
              />
              <label className="ml-2 text-gray-700 text-sm">
                Request a callback
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-between bg-[#2FC7A1] text-white rounded-full px-6 py-3 hover:bg-[#28B895] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{loading ? "Submitting..." : "Send Message"}</span>
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
