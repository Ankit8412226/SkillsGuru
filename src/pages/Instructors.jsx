import React from "react";

const instructors = [
  { id: 1, name: "Akriti", role: "Teacher", img: "./teacher1.jpg" },
  { id: 2, name: "Akriti", role: "Teacher", img: "./teacher2.jpg" },
  { id: 3, name: "Akriti", role: "Teacher", img: "./teacher3.png" },
  { id: 4, name: "Akriti", role: "Teacher", img: "./teacher4.jpg" },
];

const Instructors = () => {
  return (
    <div
      className="relative bg-cover bg-center py-12 sm:py-16 lg:py-20"
      style={{ backgroundImage: `url("/right_card.jpeg")` }}
    >
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={"./icon.svg"} alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
          <p className="text-[#FE543D] text-xs sm:text-sm leading-6 sm:leading-8 font-medium">
            TEACHER
          </p>
        </div>
        <h2 className="text-white text-xl sm:text-2xl lg:text-[32px] font-bold leading-6 sm:leading-8 lg:leading-10 px-4">
          Meet Our Expert Instructor
        </h2>
      </div>

      {/* Instructor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white shadow-lg rounded-md overflow-hidden relative group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Instructor Image */}
            <div className="relative overflow-hidden">
              <img
                src={instructor.img}
                alt={instructor.name}
                className="w-full h-48 sm:h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Share Icon - positioned better */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FE543D] p-1.5 sm:p-2 cursor-pointer hover:bg-[#e8432e] transition-colors duration-200">
                  <img
                    src="/share.png"
                    alt="share"
                    className="w-full h-full object-contain filter invert"
                  />
                </div>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="bg-[#0E2A46] text-center py-4 sm:py-5 lg:py-6">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                {instructor.name}
              </h3>
              <p className="text-[#FE543D] text-xs sm:text-sm font-medium">
                {instructor.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
