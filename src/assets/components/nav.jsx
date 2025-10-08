import { ArrowRight, Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Contact from "./Contact";

const navLinks = [
  // { name: "Home", href: "#home", key: "home", isRoute: false },
  { name: "About", href: "#about", key: "about", isRoute: false },
  { name: "Popular Courses", href: "#Popularcourses", key: "Popularcourses", isRoute: false },
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
  const [cartItemsCount, setCartItemsCount] = useState(3);

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
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="./Skill Guru Logo Teal.svg"
            alt="Skill Guru Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain scale-165"
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
              className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 text-gray-700 hover:text-[#2FC7A1] transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} className="lg:w-6 lg:h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2FC7A1] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-[20px] text-[10px] lg:text-xs">
                  {cartItemsCount > 99 ? "99+" : cartItemsCount}
                </span>
              )}
            </button>

            {/* Login Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLoginClick}
                className="flex items-center justify-center h-10 lg:h-12 px-4 lg:px-6 text-sm lg:text-base border-2 border-teal-500 text-teal-500 font-medium rounded-[200px] hover:bg-teal-100 transition-colors duration-200 space-x-2"
              >
                <User size={16} className="lg:w-5 lg:h-5" />
                <span>Login</span>
              </button>

              {/* Register Button */}
              <button
                onClick={handleRegisterClick}
                className="flex items-center justify-center h-10 lg:h-12 px-4 lg:px-6 text-sm lg:text-base border-2 border-teal-500 text-teal-500 font-medium rounded-[200px] hover:bg-teal-100 transition-colors duration-200"
              >
                Register
              </button>
            </div>

            {/* Contact Button */}
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
          </div>
        </div>

        {/* Mobile Section */}
        <div className="flex sm:hidden items-center space-x-2 ml-auto">
          {/* Mobile Cart */}
          <button
            onClick={handleCartClick}
            className="relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <ShoppingCart size={16} color="black" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#2FC7A1] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center min-w-[16px]">
                {cartItemsCount > 9 ? "9+" : cartItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Login */}
          <button
            onClick={handleLoginClick}
            className="flex items-center justify-center w-8 h-8 rounded-[200px] hover:bg-gray-100 transition-colors duration-200"
          >
            <User size={16} color="black" />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

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
