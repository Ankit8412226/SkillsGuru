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
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url("/right_card.jpeg")` }}
    >
      {/* Heading */}
        <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2">
          <img src={"./icon.svg"} alt="icon" className="w-5 h-5" />
          <p className="text-[#FE543D] text-sm leading-8">TEACHER</p>
        </div>
        <h2 className="text-white text-[32px] font-bold leading-10">
          Meet Our Expert Instructor
        </h2>
      </div>

      {/* Instructor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white shadow-lg rounded-md overflow-hidden relative"
          >
            {/* Instructor Image */}
            <img
              src={instructor.img}
              alt={instructor.name}
              className="w-full h-72 object-cover"
            />

            {/* Share Icon */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <img
                src="/share.png"
                alt="share"
                className="w-10 h-10 rounded-full bg-[#FE543D] p-2"
              />
            </div>

            {/* Instructor Info */}
            <div className="bg-[#0E2A46] text-center py-6">
              <h3 className="text-white font-semibold text-lg">
                {instructor.name}
              </h3>
              <p className="text-[#FE543D] text-sm">{instructor.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
