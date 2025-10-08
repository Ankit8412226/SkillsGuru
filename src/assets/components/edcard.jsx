import { BookOpen, Clock, Eye, ShoppingCart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

const CourseCard = ({
  _id,
  title,
  slug,
  description,
  shortDescription,
  instructor,
  category,
  price,
  durationHours,
  level,
  tags,
  thumbnailUrl,
}) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleViewDetails = () => {
    navigate(`/Course-DescriptionPage/${_id}`);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-[400px] border border-gray-100">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-[#2563eb] text-white text-sm px-3 py-1 rounded-md capitalize">
          {category}
        </div>

        {/* 👁️ View Details Button */}
        <button
          onClick={handleViewDetails}
          className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black transition-all duration-300 backdrop-blur-sm"
        >
          <Eye className="w-5 h-5" />
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
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{durationHours}h</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span className="capitalize">{level}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Enrolled: —</span>
          </div>
        </div>

        <hr className="border-dashed border-gray-300 mb-4" />

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#0E2A46] font-bold">
            {instructor?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm text-gray-700 font-medium">
              {instructor?.name}
            </p>
            <p className="text-sm text-[#0E2A46]">{instructor?.email}</p>
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
              await addToCart(_id);
            }}
            className="flex items-center gap-2 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0E2A46] px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
