"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-1000">
        {/* Logo */}
        <div className="relative">
          <div className="w-23 h-23 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-white font-bold text-4xl font-playfair">
              <img
                className="rounded-full w-[90px] h-[90px]"
                src="./logo_suh.jpg"
                alt="SUH TECH LOGO"
              />
            </span>
          </div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-green-400 rounded-full animate-spin"></div>
        </div>

        {/* Company Name */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-black bg-clip-text text-transparent font-playfair">
            SUH TECH PVT LTD
          </h1>
          
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-green-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-pink-500 to-amber-600 animate-[loadingbar_2s_ease_infinite]"></div>
        </div>

        <p className=" font-medium animate-pulse">
          Loading your training and placement program...
        </p>
      </div>

      <style jsx>{`
        @keyframes loadingbar {
          0% {
            transform: translateX(-100%);
            width: 0%;
          }
          50% {
            transform: translateX(0%);
            width: 100%;
          }
          100% {
            transform: translateX(100%);
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
