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
        <div className="relative max-w-xl w-full rounded-2xl overflow-hidden">
          {/* Card Background */}
          <img
            src="./online_right card.png"
            alt="Card background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Triangle positioned at bottom-right corner */}
          <img
            src="./triangle.png"
            alt="Green shape"
            className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 z-[-1]"
          />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 text-white">
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            {/* Profile */}
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6">
              <img
                src="./AkImg.png"
                alt="Akriti Nanda"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] object-cover"
              />
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Akriti Nanda</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Software Developer</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
