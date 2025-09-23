import { Clock, Facebook, Linkedin, MapPin, Twitter, User } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-[#2FC7A1] text-black text-sm py-3 px-60 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Left Info */}
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <Clock className="text-red-500 w-4 h-4" />
          <span>Working : Monday - Friday 10:am - 6:30Pm</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="text-red-500 w-4 h-4" />
          <span>suhtech, alpha1, 000000</span>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <User className="text-red-500 w-4 h-4" />
          <span>Login / Register</span>
        </div>
        <span className="h-4 w-px bg-gray-400"></span>
        <div className="flex space-x-3">
          <Facebook className="hover:text-red-600 cursor-pointer w-4 h-4" />
          <Twitter className="hover:text-red-600 cursor-pointer w-4 h-4" />
          <div className="hover:text-red-600 cursor-pointer w-4 h-4 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <Linkedin className="hover:text-red-600 cursor-pointer w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
