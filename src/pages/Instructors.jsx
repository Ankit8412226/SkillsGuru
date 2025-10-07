import React from "react";

const instructors = [
  { id: 1, name: "Ankit", role: "Teacher", img: "./teacher1.jpg" },
  { id: 2, name: "Soumya", role: "Teacher", img: "./teacher2.jpg" },
  { id: 3, name: "Pulkit", role: "Teacher", img: "./teacher3.png" },
  { id: 4, name: "Akriti", role: "Teacher", img: "./teacher4.jpg" },
];

const Instructors = () => {
  return (
    <div className="w-full">
      {/* Background Section */}
      <div
        className="bg-cover bg-center bg-no-repeat py-8 sm:py-12 md:py-16 lg:py-20"
        style={{ backgroundImage: `url("/right_card.jpeg")` }}
      >
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <img src={"./icon.svg"} alt="icon" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <p className="text-[#FE543D] text-xs sm:text-sm font-medium leading-4 sm:leading-6 md:leading-8">
              TEACHER
            </p>
          </div>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold leading-tight sm:leading-6 md:leading-8 lg:leading-10 px-2 sm:px-4">
            Meet Our Expert Instructor
          </h2>
        </div>
      </div>

      {/* Instructor Cards Section */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Mobile: Simple card layout */}
        <div className="block sm:hidden px-4">
          <div className="space-y-4 max-w-sm mx-auto">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                {/* Instructor Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={instructor.img}
                    alt={instructor.name}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Instructor Info */}
                <div className="bg-[#0E2A46] text-center py-4">
                  <h3 className="text-white font-semibold text-base mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-[#FE543D] text-sm font-medium">
                    {instructor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Overlapping card layout */}
        <div className="hidden sm:block relative">
          {/* Negative margin to create overlap effect */}
          <div className="-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-32 px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl xl:max-w-7xl mx-auto">
              {instructors.map((instructor) => (
                <div
                  key={instructor.id}
                  className="bg-white shadow-lg rounded-md overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Instructor Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={instructor.img}
                      alt={instructor.name}
                      className="w-full h-48 md:h-56 lg:h-64 xl:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Share Icon */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FE543D] p-2 cursor-pointer hover:bg-[#e8432e] transition-colors duration-200">
                        <img
                          src="/share.png"
                          alt="share"
                          className="w-full h-full object-contain filter invert"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="bg-[#0E2A46] text-center py-4 md:py-5 lg:py-6">
                    <h3 className="text-white font-semibold text-base md:text-lg mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-[#FE543D] text-sm font-medium">
                      {instructor.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
