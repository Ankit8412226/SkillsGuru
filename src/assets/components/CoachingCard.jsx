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
  titleColor = "text-[#0E2A46]",
  descriptionColor = "text-[#475569]",
  onClick, // ✅ onClick from parent
}) => {
  return (
    <div
      id="popularcourses"
      className={`${cardBg} rounded-2xl p-8 shadow-lg max-w-sm mx-auto text-center hover:shadow-2xl transition-shadow duration-300`}
    >
      {/* Icon Section */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-24 h-24 border-2 border-dashed border-[#2FC7A1] rounded-full absolute -inset-2 animate-spin-slow"></div>
          <div
            className={`w-20 h-20 ${iconBgColor} rounded-full flex items-center justify-center relative z-10`}
          >
            <IconComponent size={32} className={iconColor} />
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className={`text-2xl font-bold ${titleColor} mb-4`}>{title}</h2>

      {/* Description */}
      <p className={`${descriptionColor} text-base leading-relaxed mb-8`}>{description}</p>

      {/* Button */}
       <button
        type="button"
        onClick={onClick}
        aria-label={buttonText}
        className={`flex items-center justify-center gap-3 ${buttonBgColor} text-white font-semibold px-8 py-4 rounded-[200px] ${buttonHoverColor} transition-all duration-300 hover:scale-105 hover:shadow-xl group w-full`}
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default CoachingCard;
