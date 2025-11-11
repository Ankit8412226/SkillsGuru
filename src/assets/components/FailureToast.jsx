import React from "react";

const FailureToast = ({ onClose, message }) => {
  return (
    <div className="relative flex items-start bg-white rounded-2xl shadow-md border border-gray-200 pt-8 pb-8 pl-4 pr-4 max-w-xl">
      {/* Left Section */}
      <div className="flex items-start space-x-3">
        {/* ❌ Error Icon */}
        <div className="flex items-center justify-center bg-red-100 rounded-xl p-2">
          <img
            src="/cross_Icon.png"   // ✅ Use leading slash (no ./)
            alt="Error"
            className="w-10 h-10"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-base font-semibold text-black">
            {message?.title || "Oops! Something Went Wrong"}
          </h2>
          <p className="text-gray-600 text-sm leading-snug">
            {message?.description || message || "We couldn't complete your request. Please try again."}
          </p>
        </div>
      </div>

      {/* ❌ Close Button — fixed to top right */}
      <button
        onClick={onClose}
        className="absolute top-0.5 right-4 p-2 rounded-full hover:bg-gray-100 transition"
      >
        <img src="/Close_Icon.svg" alt="Close" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FailureToast;
