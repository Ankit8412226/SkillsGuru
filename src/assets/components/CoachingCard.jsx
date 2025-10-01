// src/assets/components/CoachingCard.jsx
import { ArrowRight, GraduationCap } from "lucide-react";
import React from "react";

const CoachingCard = ({
  icon: IconComponent = GraduationCap,
  iconBgColor = "bg-[#2FC7A1]",
  iconColor = "text-white",
  title = "Best Coaching",
  description = "Get access to expert-led training programs designed to accelerate your learning and career growth.",
  buttonText = "View Details",
  buttonBgColor = "bg-[#2FC7A1]",
  buttonHoverColor = "hover:bg-[#28B391]",
  buttonIconBg = "bg-[#35D7AE]",
  cardBg = "bg-white",
  titleColor = "text-[#0E2A46]",  // ✅ Darker professional title color
  descriptionColor = "text-[#475569]", // ✅ Softer description color
  onClick,
}) => {
  return (
    <div
      className={`${cardBg} rounded-2xl p-8 shadow-lg max-w-sm mx-auto text-center hover:shadow-2xl transition-shadow duration-300`}
    >
      {/* Icon Section */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          {/* Dashed border circle */}
          <div className="w-24 h-24 border-2 border-dashed border-[#2FC7A1] rounded-full absolute -inset-2 animate-spin-slow"></div>

          {/* Icon circle */}
          <div
            className={`w-20 h-20 ${iconBgColor} rounded-full flex items-center justify-center relative z-10`}
          >
            <IconComponent size={32} className={iconColor} />
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className={`text-2xl font-bold ${titleColor} mb-4`}>
        {title}
      </h2>

      {/* Description */}
      <p className={`${descriptionColor} text-base leading-relaxed mb-8`}>
        {description}
      </p>

      {/* Button */}
      <button
        type="button"
        onClick={onClick}
        aria-label={buttonText}
        className={`cursor-pointer flex items-center justify-between rounded-full ${buttonBgColor} ${buttonHoverColor} text-white font-medium h-12 pl-8 pr-0 overflow-hidden gap-4 transition-colors duration-200 w-full`}
      >
        <span className="text-sm leading-8 font-medium text-white">
          {buttonText}
        </span>
        <span
          className={`flex items-center justify-center h-full aspect-square ${buttonIconBg} rounded-full`}
        >
          <ArrowRight size={20} />
        </span>
      </button>
    </div>
  );
};

export default CoachingCard;
