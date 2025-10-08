export default function TestimonialSection() {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('./online_school_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Side - Girl Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="./online_schoolgirl.jpg"
          alt="Girl working"
          className="rounded-2xl shadow-lg w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-md h-auto object-cover"
        />
      </div>

      {/* Right Side - Testimonial Card */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="relative max-w-xl w-full overflow-hidden">
          {/* Card Background */}
          <img
            src="./Reviews_bg.svg"
            alt="Card background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          

          {/* Content */}
          <div
            className="relative z-10 text-white"
            style={{ padding: "48px 40px" }}
          >
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              The interview prep program completely changed my confidence level.
              From mock sessions to real-world questions, I felt ready for every
              challenge. I landed my first job within weeks.
            </p>

            {/* Profile */}
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6">
              <img
                src="./AkImg.png"
                alt="Akriti Nanda"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] object-cover"
              />
              <div>
                <h4 className="font-semibold text-base sm:text-lg">
                  Akriti Nanda
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Software Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
