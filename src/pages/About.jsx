import { ArrowRight } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <div className="absolute -top-16 -left-16">
              <img src="./image.png" alt=""  />
            </div>

            {/* Main image layout */}
            <div className="relative flex gap-4 items-start">
              <img src="./About2.png" alt="" className="block" />
              <div className="flex flex-col gap-4">
                <img src="./About1.png" alt=""  />
                <img src="./About3.png" alt=""  />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="./icon.svg" alt="icon"  />
              <p className="text-[#FE543D] text-sm leading-8">ABOUT US</p>
            </div>

            <p className="text-[45px] leading-tight text-[#0E2A46] font-bold">
              Benefit from our online learning expertise earn <span className="text-[#FE543D]">professional</span>
            </p>

            <p className="text-lg leading-8 font-normal text-[#4D5756]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-lg leading-8 text-[#0E2A46] font-bold">OUR MISSION:</p>
                <p className="text-lg leading-8 font-normal text-[#333931]">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg leading-8 text-[#0E2A46] font-bold">OUR VISSION:</p>
                <p className="text-lg leading-8 font-normal text-[#333931]">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
            </div>

            <div>
              <button className="flex items-center justify-between rounded-[200px] bg-[#2FC7A1] text-white font-medium h-12 pl-6 pr-0 overflow-hidden">
                <span className="text-sm leading-8 font-medium text-white">Admission open</span>
                <span className="flex items-center justify-center h-full aspect-square bg-[#35D7AE] rounded-full">
                  <ArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
