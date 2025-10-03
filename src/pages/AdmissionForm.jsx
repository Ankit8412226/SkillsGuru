import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms and Policies before submitting.");
      return;
    }

    console.log("Admission Data:", formData);
    alert(`Thank you ${formData.firstName} ${formData.lastName}, your admission request has been submitted!`);
  };

  return (
    <div
      style={{ backgroundImage: `url(./bg.jpg)` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
    >
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Admission Form
          </h2>
          <p className="text-gray-600">
            Please fill in the details below to proceed with admission
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>
          </div>

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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
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

          <button
            type="submit"
            className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 lg:h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
          >
            <span className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium">
              Admission Now
            </span>
            <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#35D7AE] rounded-full ml-1">
              <ArrowRight size={16} className="lg:w-5 lg:h-5" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
