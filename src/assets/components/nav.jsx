import { ArrowRight, Menu, Search, X } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home", key: "home" },
  { name: "About", href: "#about", key: "about" },
  { name: "Program", href: "#programs", key: "programs" },
  { name: "Placement", href: "#placement", key: "placement" },
  { name: "Success Stories", href: "#testimonials", key: "testimonials" },
  { name: "Courses", href: "#courses", key: "courses" },
];

const Nav = () => {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleLinkClick = (key) => {
    setActive(key);
    setIsMenuOpen(false); // Close mobile menu when link is clicked
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <div className="bg-white shadow-md py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center fixed top-[36px] sm:top-[44px] left-0 w-full z-40">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="./logo_suh.jpg"
            alt="Suh Tech Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Suh Tech
          </span>
        </div>

        {/* Desktop Nav Links - Hidden on mobile/tablet */}
        <div className="hidden lg:flex space-x-4 xl:space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setActive(link.key)}
              className={`pb-1 transition-all duration-300 text-sm xl:text-base whitespace-nowrap ${
                active === link.key
                  ? "border-b-2 border-[#2FC7A1] text-[#2FC7A1]"
                  : "border-b-2 border-transparent hover:text-[#2FC7A1] hover:border-[#2FC7A1]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side: Search & Contact Button (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-4 lg:space-x-6">
          {/* Search Icon */}
          <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-200">
            <Search
              size={16}
              className="sm:w-5 sm:h-5 md:w-5 md:h-5"
              color="black"
            />
          </span>

          {/* Contact Us Button - Fixed Padding */}
          <button
            onClick={handleContactClick}
            className="hidden md:flex items-center rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 lg:h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
          >
            <span className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium">
              Contact Us
            </span>
            <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#35D7AE] rounded-full ml-1">
              <ArrowRight size={16} className="lg:w-5 lg:h-5" />
            </div>
          </button>

          {/* Compact Contact Button for tablets */}
          <button
            onClick={handleContactClick}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#2FC7A1] text-white shadow-md hover:bg-[#28B895] transition-colors duration-200"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Button & Search */}
        <div className="flex sm:hidden items-center space-x-3">
          {/* Mobile Search Icon */}
          <span className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-200">
            <Search size={16} color="black" />
          </span>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={20} color="black" />
            ) : (
              <Menu size={20} color="black" />
            )}
          </button>
        </div>

        {/* Tablet Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hidden sm:flex lg:hidden items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors duration-200 ml-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={20} color="black" />
          ) : (
            <Menu size={20} color="black" />
          )}
        </button>
      </div>

      {/* Mobile/Tablet Overlay Menu - Right Side Full Screen */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Panel - Full Width/Height from Right */}
          <div className="absolute top-0 right-0 w-full h-full bg-white shadow-lg slide-in-from-right">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b bg-gray-50">
              <div className="flex items-center space-x-2">
                <img
                  src="./logo_suh.jpg"
                  alt="Suh Tech Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <span className="text-lg sm:text-xl font-bold text-gray-800">
                  Suh Tech
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-200 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={20} color="black" />
              </button>
            </div>

            {/* Menu Content - Scrollable */}
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Menu Links */}
              <div className="flex-1 py-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => handleLinkClick(link.key)}
                    className={`block px-6 sm:px-8 py-4 text-lg sm:text-xl font-medium transition-colors duration-200 ${
                      active === link.key
                        ? "text-[#2FC7A1] bg-[#2FC7A1]/10 border-r-4 border-[#2FC7A1]"
                        : "text-gray-700 hover:text-[#2FC7A1] hover:bg-[#2FC7A1]/5"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInRight 0.4s ease-out forwards",
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Contact Button - Fixed at Bottom with Better Padding */}
              <div className="p-6 sm:p-8 border-t bg-gray-50 mt-auto">
                <button
                  onClick={handleContactClick}
                  className="w-full flex items-center rounded-[200px] bg-[#2FC7A1] text-white font-medium h-14 sm:h-16 shadow-lg hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
                >
                  <span className="flex-1 px-6 sm:px-8 text-base sm:text-lg font-medium text-center">
                    Contact Us
                  </span>
                  <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#35D7AE] rounded-full">
                    <ArrowRight size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-opacity-50 backdrop-blur-md"
            onClick={() => setIsContactModalOpen(false)}
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
                onClick={() => setIsContactModalOpen(false)}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-gray-100 transition-colors duration-200 ml-4"
                aria-label="Close modal"
              >
                <X size={20} className="sm:w-6 sm:h-6" color="gray" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {/* Contact Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200"
                      // placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200"
                      // placeholder="Doe"
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
                    // placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2FC7A1] focus:border-transparent transition-all duration-200"
                    // placeholder="+91 8298252909"
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
                  // onClick={handleContactClick}
                  className="hidden w-full md:flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 lg:h-12 shadow-md hover:bg-[#28B895] transition-colors duration-200 overflow-hidden"
                >
                  <span className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium">
                    Send message
                  </span>
                  <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#35D7AE] rounded-full ml-1">
                    <ArrowRight size={16} className="lg:w-5 lg:h-5" />
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
                    <span className="text-sm sm:text-base">
                      info@suhtech.top
                    </span>
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
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-from-right {
          animation: slideInFromRight 0.3s ease-out;
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
