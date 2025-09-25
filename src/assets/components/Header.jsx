import { Clock, Facebook, Instagram, Linkedin, MapPin, Twitter, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#2FC7A1] text-black text-sm py-2 sm:py-3 px-3 sm:px-6 md:px-12 lg:px-24 xl:px-48 2xl:px-60 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center cursor-pointer sm:hidden">
          <div className="flex items-center space-x-2">
            <User className="text-red-500 w-4 h-4" />
            <span className="text-sm">
              <button onClick={() => navigate("/login")} className="underline mr-1">Login</button> /
              <button onClick={() => navigate("/register")} className="underline ml-1">Register</button>
            </span>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Horizontal */}
        <div className="hidden sm:flex justify-between items-center">
          {/* Left Info */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 flex-1">
            <div className="flex items-center space-x-2">
              <Clock className="text-red-500 w-4 h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm whitespace-nowrap">
                Working: Monday - Friday 10:00AM - 6:30PM
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-red-500 w-4 h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm">
                suhtech, knowledge park-3, greater noida, 000000
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4 ml-4">
            <div className="flex cursor-pointer items-center space-x-1">
              <User className="text-red-500 w-4 h-4" />
              <span className="text-xs md:text-sm whitespace-nowrap">
                <button onClick={() => navigate("/login")} className="underline mr-1">Login</button> /
                <button onClick={() => navigate("/register")} className="underline ml-1">Register</button>
              </span>
            </div>

            <span className="h-4 w-px bg-gray-400 hidden md:block"></span>

            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1733kBs2Le/">
                <Facebook className="hover:text-red-600 cursor-pointer w-4 h-4 transition-colors duration-200" />
              </a>
              <a href="https://x.com/suhtechpvt?t=ts0tMtGlnbzZT4MEBSohsQ&s=08">
                <Twitter className="hover:text-red-600 cursor-pointer w-4 h-4 transition-colors duration-200" />
              </a>
              <a href="https://www.instagram.com/suhtechpvtltd?igsh=M3cwM2Vkb2Y4eDI5">
                <Instagram className="hover:text-red-600 cursor-pointer w-4 h-4 transition-colors duration-200" />
              </a>
              <a href="https://www.linkedin.com/company/suh-tech/">
                <Linkedin className="hover:text-red-600 cursor-pointer w-4 h-4 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
