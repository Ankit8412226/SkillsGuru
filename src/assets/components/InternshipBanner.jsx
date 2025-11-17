import { ArrowRight, Briefcase, GraduationCap, Users, Zap } from "lucide-react";
import { useState } from "react";
import InternshipForm from "../../pages/InternshipForm.jsx";

const InternshipBanner = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>

      {/* Internship Banner */}
      <div id="InternshipBanner"
      className="bg-gradient-to-r from-[#0E2A46] via-[#1a3d5f] to-[#0E2A46] text-white py-16 animate-in slide-in-from-top duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-in slide-in-from-left duration-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2FC7A1] rounded-full flex items-center justify-center animate-pulse">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#2FC7A1] font-semibold text-lg">Internship Opportunities</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Launch Your Career with Our
                <span className="text-[#2FC7A1] block">Internship Program</span>
              </h2>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Gain real-world experience, work on live projects, and build your professional network.
                Our internship program offers hands-on learning opportunities in cutting-edge technologies.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3 group animate-in slide-in-from-bottom duration-500">
                  <div className="w-10 h-10 bg-[#2FC7A1]/20 rounded-lg flex items-center justify-center group-hover:bg-[#2FC7A1] transition-all duration-300">
                    <GraduationCap className="w-5 h-5 text-[#2FC7A1] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mentorship</h3>
                    <p className="text-sm text-gray-300">Expert guidance & Support</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '100ms' }}>
                  <div className="w-10 h-10 bg-[#2FC7A1]/20 rounded-lg flex items-center justify-center group-hover:bg-[#2FC7A1] transition-all duration-300">
                    <Users className="w-5 h-5 text-[#2FC7A1] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Team Work</h3>
                    <p className="text-sm text-gray-300">Collaborative environment</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '200ms' }}>
                  <div className="w-10 h-10 bg-[#2FC7A1]/20 rounded-lg flex items-center justify-center group-hover:bg-[#2FC7A1] transition-all duration-300">
                    <Zap className="w-5 h-5 text-[#2FC7A1] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Projects</h3>
                    <p className="text-sm text-gray-300">Real-world experience</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-3 bg-[#2FC7A1] text-white font-semibold px-8 py-4 rounded-[200px] hover:bg-[#28B895] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Content - Visual */}
            <div className="animate-in slide-in-from-right duration-700">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#2FC7A1]/20 to-[#28B895]/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                      <div className="w-16 h-16 bg-[#2FC7A1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">3-6 Months</h3>
                      <p className="text-sm text-gray-300">Duration</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                      <div className="w-16 h-16 bg-[#2FC7A1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">50+</h3>
                      <p className="text-sm text-gray-300">Positions</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                      <div className="w-16 h-16 bg-[#2FC7A1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Certificate</h3>
                      <p className="text-sm text-gray-300">Completion</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                      <div className="w-16 h-16 bg-[#2FC7A1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Stipend</h3>
                      <p className="text-sm text-gray-300">Available</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2FC7A1] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#28B895] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Application Form Modal */}
      {showForm && <InternshipForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default InternshipBanner;
