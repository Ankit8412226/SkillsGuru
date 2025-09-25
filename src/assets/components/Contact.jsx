import { ArrowRight, X } from "lucide-react";
import React from "react";

const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0  bg-opacity-50 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl mx-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-gray-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We'd love to hear from you. Send us a message!
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-gray-100 transition-colors duration-200 ml-4"
            aria-label="Close modal"
          >
            <X size={20} className="sm:w-6 sm:h-6" color="gray" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200">
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="courses">Course Information</option>
                <option value="placement">Placement Support</option>
                <option value="technical">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your query or how we can help you..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 lg:h-14 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
            >
              <span className="px-6 lg:px-8 py-2 text-sm lg:text-base font-medium">
                Send message
              </span>
              <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-[#35D7AE] rounded-full ml-1">
                <ArrowRight size={18} className="lg:w-5 lg:h-5" />
              </div>
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Other Ways to Reach Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">+91 8298252909</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">info@suhtech.top</span>
              </div>
              <div className="flex items-start text-gray-600">
                <div className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">
                  Suh Tech, Knowledge Park-3, Greater Noida, 000000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
