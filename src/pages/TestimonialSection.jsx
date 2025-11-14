'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "The interview prep program completely changed my confidence level. From mock sessions to real-world questions, I felt ready for every challenge. I landed my first job within weeks.",
    name: "Akriti Nanda",
    position: "Software Developer",
    avatar: "./AkImg.png",
  },
  {
    quote:
      "I was struggling with system design interviews until I joined. The structured approach and real-time feedback helped me crack FAANG-level questions with ease.",
    name: "Rahul Sharma",
    position: "Senior Engineer at Google",
    avatar: "./AkImg.png", 
  },
  {
    quote:
      "Best investment in my career. The mentors are industry veterans and the mock interviews mirror real tech interviews perfectly.",
    name: "Priya Patel",
    position: "Product Manager at Microsoft",
    avatar: "./AkImg.png", 
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('./online_school_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left  */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="./online_schoolgirl.jpg"
          alt="Girl working"
          className="rounded-2xl shadow-lg w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-md h-auto object-cover"
        />
      </div>

      {/* Right  */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative max-w-4xl">
        <button
          onClick={goToPrevious}
          className="absolute left-0 sm:-left-4 lg:-left-6 xl:-left-8 top-1/2 -translate-y-1/2 z-20 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 sm:-right-4 lg:-right-6 xl:-right-8 top-1/2 -translate-y-1/2 z-20 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        </button>

        <div className="relative max-w-xl w-full overflow-hidden mx-8 sm:mx-10 lg:mx-12 xl:mx-16 h-[400px]">
          {/* Card Background */}
          <img
            src="./Reviews_bg.svg"
            alt="Card background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Content */}
          <div className="relative z-10 text-white h-full flex flex-col justify-between" style={{ padding: "48px 40px" }}>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed animate-fadeIn flex-1 line-clamp-6">
              {current.quote}
            </p>

            {/* Profile */}
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 flex-shrink-0">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] object-cover rounded-full border-2 border-white/30 flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-base sm:text-lg truncate">{current.name}</h4>
                <p className="text-gray-300 text-xs sm:text-sm truncate">{current.position}</p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

