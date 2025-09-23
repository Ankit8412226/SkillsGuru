import React from 'react';

const StatusSection = () => {
  const stats = [
    { label: 'Case study success', percentage: 90, color: 'bg-emerald-400' },
    { label: 'Happy student', percentage: 75, color: 'bg-emerald-400' },
    { label: 'Engaging', percentage: 93, color: 'bg-emerald-400' },
    { label: 'Student Community', percentage: 63, color: 'bg-emerald-400' }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Tag with Cap Icon */}
            <div className="flex items-center space-x-3">
              <img
                src="./topi.png"
                alt="Graduation Cap"
                className="w-8 h-8 object-contain"
              />
              <span className="text-emerald-500 text-sm font-medium uppercase tracking-wider">
                OUR STATUS VALUES
              </span>
            </div>

            {/* Main Heading */}
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight relative z-10">
                Our Classroom Is A Very{' '}
                <span className="text-red-500">Deferent School</span>{' '}
                Than All The Others
              </h2>
              {/* Decorative Dots */}
              <img
                src="./dots.png"
                alt="Decorative Dots"
                className="absolute -top-8 right-0 w-20 opacity-70 hidden md:block"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
            </p>

            {/* Statistics */}
            <div className="space-y-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-800 font-medium">{stat.label}</span>
                    <span className="text-slate-800 font-semibold">{stat.percentage}%</span>
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
          <div className="relative">

        <img src='./abc.png' alt='' />


          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;
