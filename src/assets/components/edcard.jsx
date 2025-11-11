
import { useNavigate } from "react-router-dom";



import { BookOpen, Clock, ShoppingCart, Users } from "lucide-react";

const CourseCard = ({
  _id,
  title,
  description,
  shortDescription,
  instructor,
  category,
  price,
  durationHours,
  level,
  thumbnailUrl,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/Course-DescriptionPage/${_id}`);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 max-w-[400px] border border-gray-100 animate-in fade-in slide-in-from-bottom hover:scale-105">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#2FC7A1] text-white text-sm px-3 py-1 rounded-md capitalize animate-in slide-in-from-top duration-500 animate-pulse">
          {category}
        </div>

        {/* 👁️ View Details Button */}
        <button
          onClick={handleViewDetails}
          className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/40 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:rotate-12 group"
        >
          <img
            src="/arrow-up.svg"
            alt="arrow icon"
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 bg-[#2FC7A1]"
            style={{ fill: "#2FC7A1" }}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-[18px] font-semibold text-[#0E2A46] mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {shortDescription || description}
        </p>

        <div className="flex items-center justify-between text-[#4D5756] text-sm mb-4">
          <div className="flex items-center gap-1 hover:text-[#2FC7A1] transition-colors duration-300 group">
            <Clock className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span>{durationHours}h</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#2FC7A1] transition-colors duration-300 group">
            <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="capitalize">{level}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#2FC7A1] transition-colors duration-300 group">
            <Users className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span>Enrolled: —</span>
          </div>
        </div>

        <hr className="border-dashed border-gray-300 mb-4" />

        <div className="flex items-center gap-3 mb-4 group">
          <div className="w-10 h-10 rounded-full bg-[#28B895] flex items-center justify-center text-white font-bold transition-all duration-300  group-hover:text-white">
            {instructor?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm text-[#28B895] font-medium transition-colors duration-300 group-hover:text-[#2FC7A1]">
              {instructor?.name}
            </p>
            <p className="text-sm text-[#28B895] transition-colors duration-300 group-hover:text-[#28B895]">{instructor?.email}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ₹{price?.toLocaleString("en-IN")}
          </span>
          <button
            onClick={async () => {
              if (!localStorage.getItem("token")) {
                navigate("/login");
                return;
              }
              navigate(`/checkout?courseId=${_id}`);
            }}
            className="flex items-center gap-2 bg-[#2FC7A1] hover:bg-[#28B895] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
