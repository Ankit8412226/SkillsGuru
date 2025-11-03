import { ArrowRight, Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import Contact from "./Contact";

const navLinks = [
 
  { name: "About", href: "#about", key: "about", isRoute: false },
  { name: "Internship", href: "#Internship-banner", key: "Internship", isRoute: false },
  { name: "Courses", href: "/courses", key: "courses", isRoute: true },
];

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(() => {
    if (location.pathname === "/") return "home";
    return "home";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { count: cartItemsCount } = useCart();

  const handleLinkClick = (link) => {
    setActive(link.key);
    setIsMenuOpen(false);

    if (link.isRoute) {
      navigate(link.href);
    } else {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 200); // Slightly increased delay to ensure DOM is rendered
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };


  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false);
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
    navigate("/cart");
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="bg-[#F0FDF9] shadow-sm py-2 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center fixed top-0 left-0 w-full z-40">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img
            src="./Skill Guru Logo Teal.svg"
            alt="Skill Guru Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain scale-165 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
        </div>


        <div className="hidden lg:flex items-center space-x-8 ml-auto mr-2">
          {/* Nav Links */}
          <div className="flex space-x-4 xl:space-x-6 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleLinkClick(link)}
                className={`group relative px-2 py-2 text-sm xl:text-base transition-all duration-300 whitespace-nowrap
                  ${active === link.key ? "text-[#2FC7A1]" : "text-gray-700"}
                  `}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#2FC7A1] transition-all duration-300
                    ${active === link.key ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                ></span>
              </button>
            ))}
          </div>



          {/* Right side: Cart + Login + Register + Contact */}
          <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6">
            {/* Cart Button */}
            <button
              onClick={handleCartClick}
              className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 text-gray-700 hover:text-[#2FC7A1] transition-all duration-300 hover:scale-110 hover:rotate-3 group"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} className="lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2FC7A1] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-[20px] text-[10px] lg:text-xs animate-pulse">
                  {cartItemsCount > 99 ? "99+" : cartItemsCount}
                </span>
              )}
            </button>

            {/* Login Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLoginClick}
                className="flex items-center justify-center h-10 lg:h-12 px-4 lg:px-6 text-sm lg:text-base border-2 border-teal-500 text-teal-500 font-medium rounded-[200px] hover:bg-teal-100 transition-all duration-300 space-x-2 hover:scale-105 hover:shadow-lg group"
              >
                <User size={16} className="lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Login</span>
              </button>

              {/* Register Button */}
              <button
                onClick={handleRegisterClick}
                className="flex items-center justify-center h-10 lg:h-12 px-4 lg:px-6 text-sm lg:text-base border-2 border-teal-500 text-teal-500 font-medium rounded-[200px] hover:bg-teal-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Register
              </button>
            </div>

            {/* Contact Button */}
            <button
              onClick={handleContactClick}
              className="hidden md:flex items-center rounded-[200px] bg-[#2FC7A1] text-white font-medium h-10 lg:h-12 shadow-md hover:bg-[#28B895] transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-xl group"
            >
              <span className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-medium">
                Contact Us
              </span>
              <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#35D7AE] rounded-full ml-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <ArrowRight size={16} className="lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Section */}
        <div className="flex sm:hidden items-center space-x-2 ml-auto">
          {/* Mobile Cart */}
          <button
            onClick={handleCartClick}
            className="relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 group"
          >
            <ShoppingCart size={16} color="black" className="transition-transform duration-300 group-hover:scale-110" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#2FC7A1] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center min-w-[16px] animate-pulse">
                {cartItemsCount > 9 ? "9+" : cartItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Login */}
          <button
            onClick={handleLoginClick}
            className="flex items-center justify-center w-8 h-8 rounded-[200px] hover:bg-gray-100 transition-all duration-300 hover:scale-110 group"
          >
            <User size={16} color="black" className="transition-transform duration-300 group-hover:scale-110" />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition-all duration-300 hover:scale-110 group"
          >
            {isMenuOpen ? (
              <X size={20} className="transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <Menu size={20} className="transition-transform duration-300 group-hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white animate-in slide-in-from-top duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <img
              src="./Skill Guru Logo Teal.svg"
              alt="Skill Guru Logo"
              className="w-12 h-12 object-contain animate-in fade-in duration-500"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:rotate-90 group"
            >
              <X size={24} className="transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-8">
            <div className="space-y-6">
              {navLinks.map((link, index) => (
                <button
                  key={link.key}
                  onClick={() => handleLinkClick(link)}
                  className={`w-full text-left py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-left duration-500 ${
                    active === link.key
                      ? "bg-[#2FC7A1] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-12 space-y-4">
              <button
                onClick={handleLoginClick}
                className="w-full flex items-center justify-center py-4 px-6 border-2 border-[#2FC7A1] text-[#2FC7A1] font-medium rounded-lg hover:bg-[#2FC7A1] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom duration-700 group"
                style={{ animationDelay: '400ms' }}
              >
                <User size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
                Login
              </button>

              <button
                onClick={handleRegisterClick}
                className="w-full flex items-center justify-center py-4 px-6 bg-[#2FC7A1] text-white font-medium rounded-lg hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: '500ms' }}
              >
                Register
              </button>

              <button
                onClick={handleContactClick}
                className="w-full flex items-center justify-center py-4 px-6 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: '600ms' }}
              >
                Contact Us
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

      {/* Nav animations */}
      <style jsx>{`
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #2fc7a1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-out;
        }
        .nav-link:hover {
          color: #2fc7a1;
          background-color: rgba(47, 199, 161, 0.05);
          border-radius: 4px;
        }
        .nav-link:hover .nav-underline {
          transform: scaleX(1);
        }
        .nav-link.active {
          color: #2fc7a1;
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
