import React from 'react';

const StatusSection = () => {
  const stats = [
    { label: 'Case study success', percentage: 90, color: 'bg-emerald-400' },
    { label: 'Happy student', percentage: 75, color: 'bg-emerald-400' },
    { label: 'Engaging', percentage: 93, color: 'bg-emerald-400' },
    { label: 'Student Community', percentage: 63, color: 'bg-emerald-400' }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Section Tag with Cap Icon */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="./topi.png"
                alt="Graduation Cap"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain flex-shrink-0"
              />
              <span className="text-emerald-500 text-xs sm:text-sm font-medium uppercase tracking-wider">
                OUR STATUS VALUES
              </span>
            </div>

            {/* Main Heading */}
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight relative z-10">
                Our Classroom Is A Very{' '}
                <span className="text-red-500">Different School</span>{' '}
                Than All The Others
              </h2>
              {/* Decorative Dots */}
              <img
                src="./dots.png"
                alt="Decorative Dots"
                className="absolute -top-4 sm:-top-6 lg:-top-8 right-0 w-12 sm:w-16 lg:w-20 opacity-70 hidden md:block"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-none lg:max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
            </p>

            {/* Statistics */}
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12 lg:mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-800 font-medium text-sm sm:text-base">
                      {stat.label}
                    </span>
                    <span className="text-slate-800 font-semibold text-sm sm:text-base">
                      {stat.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${stat.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-auto">
              <img
                src='./abc.png'
                alt='Students in classroom'
                className="w-full h-full object-cover object-center rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg"
              />
              {/* Optional overlay for better contrast on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg sm:rounded-xl lg:rounded-2xl lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Subtle gradient background */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-50/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-red-50/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default StatusSection;
