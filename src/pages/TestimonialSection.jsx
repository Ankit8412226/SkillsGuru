export default function TestimonialSection() {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20"
      style={{
        backgroundImage: "url('./online_school_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Side - Girl Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <img
          src="./online_schoolgirl.jpg"
          alt="Girl working"
          className="rounded-2xl shadow-lg max-w-md"
        />
      </div>

      {/* Right Side - Testimonial Card */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        {/* Apply shift to the whole card */}
        <div className="relative max-w-xl w-full rounded-2xl overflow-hidden -translate-x-62">
          {/* Card Background */}
          <img
            src="./online_right card.png"
            alt="Card background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay Green Shape */}
          <img
            src="./triangle.png"
            alt="Green shape"
            className="absolute bottom-0 right-0 w-50 h-50 z-[-1]"
          />

          {/* Content */}
          <div className="relative z-10 p-8 text-white">
            <p className="mb-6 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            {/* Profile */}
            <div className="flex items-center space-x-4">
              <img
                src="./AkImg.png"
                alt="Akriti Nanda"
                className="w-[90px] h-[90px] object-cover"
              />
              <div>
                <h4 className="font-semibold">Akriti Nanda</h4>
                <p className="text-gray-300 text-sm">Software Developer</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="relative z-10 flex justify-center mt-6 pb-4 left-60">
            <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full mx-1"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full mx-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
