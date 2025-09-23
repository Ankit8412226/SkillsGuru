

import { ArrowRight, Search } from "lucide-react";
import React, { useState } from "react";


import logo from "../logo_suh.jpg";




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

  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-[44px] left-0 w-full z-40">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Suh Tech Logo" className="w-16 h-16 object-contain" />
        <span className="text-2xl font-bold text-gray-800">Suh Tech</span>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6 text-gray-700 font-medium">
        {navLinks.map((link) => (
          <a
            key={link.key}
            href={link.href}
            onClick={() => setActive(link.key)}
            className={`pb-1 transition-all duration-300 ${
              active === link.key
                ? "border-b-2 border-[#2FC7A1] text-[#2FC7A1]"
                : "border-b-2 border-transparent hover:text-[#2FC7A1] hover:border-[#2FC7A1]"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right side: Search + Button */}
      <div className="flex items-center space-x-4">
        <Search className="text-gray-600 cursor-pointer mr-6" />

        {/* Contact Us Button */}
        <button className="flex items-center bg-[#2FC7A1] text-white rounded-full shadow-md overflow-hidden">
          <span className="px-5 py-2">Contact Us</span>
          <span className="bg-[#2FC7A1] p-3 flex items-center justify-center">
            <ArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
