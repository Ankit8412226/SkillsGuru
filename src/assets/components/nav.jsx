import { ArrowRight, Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Contact from "./Contact";

const navLinks = [
  { name: "Home", href: "#home", key: "home", isRoute: false },
  { name: "About", href: "#about", key: "about", isRoute: false },
  { name: "Popular Courses", href: "#Popularcourses", key: "Popularcourses", isRoute: false },

  { name: "Courses", href: '/courses', key: "courses", isRoute: true },
];

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Set active based on current route
  const [active, setActive] = useState(() => {
    if (location.pathname === "/") return "home";
    return "home"; // default
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(3); // Demo cart count

  const handleLinkClick = (link) => {
    setActive(link.key);
    setIsMenuOpen(false); // Close mobile menu when link is clicked

    if (link.isRoute) {
      // Navigate to route
      navigate(link.href);
    } else {
      // Handle hash navigation (scroll to section)
      if (location.pathname !== "/") {
        // If not on home page, go to home first then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleLoginClick = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const handleRegisterClick = () => {
    navigate("/register");
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="bg-[#F0FDF9] shadow-sm py-2 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center fixed top-0 left-0 w-full z-40">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="./Skill Guru Logo Teal.svg"
            alt="Skill Guru Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain scale-165"
          />

        </div>

        {/* Desktop Nav Links - Hidden on mobile/tablet */}
        <div className="hidden lg:flex space-x-4 xl:space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleLinkClick(link)}
              className={`nav-link relative px-2 py-2 transition-all duration-300 text-sm xl:text-base whitespace-nowrap ${
                active === link.key
                  ? "text-[#2FC7A1] active"
                  : "text-gray-700"
              }`}
            >
              {link.name}
              {/* Animated underline */}
              <span className="nav-underline"></span>
            </button>
          ))}
        </div>

        {/* Right side: Auth Buttons, Cart & Contact Button (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-4 lg:space-x-6">
          {/* Cart Button - Udemy Style */}
          <button
            onClick={handleCartClick}
            className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 text-gray-700 hover:text-[#2FC7A1] transition-colors duration-200"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} className="lg:w-6 lg:h-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#2FC7A1] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-[20px] text-[10px] lg:text-xs">
                {cartItemsCount > 99 ? '99+' : cartItemsCount}
              </span>
            )}
          </button>

          {/* Login Button */}
          <button
            onClick={handleLoginClick}
            className="flex items-center space-x-2 px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-[#2FC7A1] transition-colors duration-200 font-medium"
          >
            <User size={16} className="lg:w-5 lg:h-5" />
            <span>Login</span>
          </button>

          {/* Register Button */}
          <button
            onClick={handleRegisterClick}
            className="px-4 lg:px-6 py-2 text-sm lg:text-base bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Register
          </button>

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

        {/* Mobile Menu Button & Auth Buttons */}
        <div className="flex sm:hidden items-center space-x-2">
          {/* Mobile Cart Button */}
          <button
            onClick={handleCartClick}
            className="relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <ShoppingCart size={16} color="black" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#2FC7A1] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center min-w-[16px]">
                {cartItemsCount > 9 ? '9+' : cartItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Login Button */}
          <button
            onClick={handleLoginClick}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <User size={16} color="black" />
          </button>

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
        <div className="lg:hidden fixed inset-0 z-9999">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Panel - Full Width/Height from Right */}
          <div className="absolute top-0 right-0 w-full h-full bg-white shadow-lg slide-in-from-right">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b bg-gray-50">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { navigate('/'); setIsMenuOpen(false); }}>
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
            <div className="flex-1 overflow-y-auto">
              <div className="py-6">
                {/* Menu Links */}
                {navLinks.map((link, index) => (
                  <button
                    key={link.key}
                    onClick={() => handleLinkClick(link)}
                    className={`block w-full text-left px-6 sm:px-8 py-4 text-lg sm:text-xl font-medium transition-colors duration-200 ${
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
                  </button>
                ))}

                {/* Mobile Auth Links & Cart */}
                <div className="px-6 sm:px-8 py-4 space-y-2">
                  <button
                    onClick={handleCartClick}
                    className="flex items-center space-x-3 w-full text-left py-3 text-lg sm:text-xl font-medium text-gray-700 hover:text-[#2FC7A1] transition-colors duration-200"
                  >
                    <div className="relative">
                      <ShoppingCart size={20} />
                      {cartItemsCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#2FC7A1] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-[20px] text-[10px]">
                          {cartItemsCount > 9 ? '9+' : cartItemsCount}
                        </span>
                      )}
                    </div>
                    <span>My Cart</span>
                  </button>
                  <button
                    onClick={handleLoginClick}
                    className="flex items-center space-x-3 w-full text-left py-3 text-lg sm:text-xl font-medium text-gray-700 hover:text-[#2FC7A1] transition-colors duration-200"
                  >
                    <User size={20} />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={handleRegisterClick}
                    className="w-full text-left py-3 px-4 text-lg sm:text-xl font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Contact Button - Fixed at Bottom */}
            <div className="p-6 sm:p-8 border-t bg-gray-50 flex-shrink-0">
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
      )}

      {/* Contact Modal */}
      <Contact
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

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

        /* Navigation Link Styles */
        .nav-link {
          position: relative;
          overflow: hidden;
        }

        /* Underline animation */
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #2FC7A1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-out;
        }

        /* Hover effects */
        .nav-link:hover {
          color: #2FC7A1;
          background-color: rgba(47, 199, 161, 0.05);
          border-radius: 4px;
        }

        .nav-link:hover .nav-underline {
          transform: scaleX(1);
        }

        /* Active state */
        .nav-link.active {
          color: #2FC7A1;
          background-color: rgba(47, 199, 161, 0.08);
          border-radius: 4px;
        }

        .nav-link.active .nav-underline {
          transform: scaleX(1);
        }
      `}</style>
    </>
  );
};

export default Nav;
