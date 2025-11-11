import { Briefcase, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const InternshipForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    about: "",
    agree: false,
  });

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the terms and policies.");
      return;
    }
    alert("Internship application submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      about: "",
      agree: false,
    });
    if (onClose) onClose();
  };

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    if (onClose) {
      onClose();
      // Scroll back to hero section
      setTimeout(() => {
        const heroSection = document.getElementById("home");
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[9999] pb-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button - Top Right Corner */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-200 z-50"
          aria-label="Close form"
          type="button"
        >
          <X size={20} className="text-gray-700" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#2FC7A1] text-white p-3 rounded-full">
            <Briefcase size={24} />
          </div>
          <h2 className="text-2xl font-bold text-[#1E293B]">
            Internship Application
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Akriti"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#2FC7A1]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Nanda"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#2FC7A1]"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="akriti@test.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#2FC7A1]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9060663123"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#2FC7A1]"
              />
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tell us about yourself
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Why are you interested in this internship?"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#2FC7A1]"
            ></textarea>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="mt-1 accent-[#2FC7A1]"
            />
            <p className="text-gray-600">
              I agree to all the{" "}
              <span className="text-[#2FC7A1] cursor-pointer">Terms</span> and{" "}
              <span className="text-[#2FC7A1] cursor-pointer">
                Privacy Policies
              </span>
              .
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2FC7A1] hover:bg-[#28B895] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Briefcase size={20} />
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default InternshipForm;
