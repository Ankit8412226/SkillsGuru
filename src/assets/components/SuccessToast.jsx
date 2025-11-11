import React from "react";

const SuccessToast = ({ onClose, message }) => {
  return (
    <div className="relative flex items-start bg-white rounded-2xl shadow-md border border-gray-200 pt-8 pb-8 pl-4 pr-4 max-w-xl">
      {/* Left Section */}
      <div className="flex items-start space-x-3">
        {/* ✅ Success Icon */}
        <div className="flex items-center justify-center bg-green-100 rounded-xl p-2">
          <img
            src="/correct_Icon.png"
            alt="Success"
            className="w-10 h-10"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-base font-semibold text-black">
            {message?.title || "Success!"}
          </h2>
          <p className="text-gray-600 text-sm leading-snug">
            {message?.description || message || "Operation completed successfully."}
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

export default SuccessToast;
