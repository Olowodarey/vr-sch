import React from "react";
import F4 from "../assets/F4.png";
import mvr from "../assets/mvr.png";
import Checkmark from "../assets/Checkmark.png";

const Future = () => {
  return (
    <div className="px-10 lg:px-10 pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* First div with image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img src={F4} alt="F4" className="w-3/4 lg:w-full max-w-[600px]"/>
        </div>
        
        {/* 2nd div with text */}
        <div className="pt-10 w-full lg:w-1/2">
          <div className="text-xl lg:text-6xl font-bold flex flex-col items-center lg:items-start">
            <h1>Making Students</h1>
            <div className="flex items-center space-x-2 lg:space-x-5 ">
              <h1>Creative</h1>
              <div className="bg-gray border border-black h-6 lg:h-10 w-[65px] lg:w-[90px] rounded-3xl">
                <button className="h-6 lg:h-10 w-[65px] lg:w-[88px] bg-brown relative -right-[2px] -top-[3px] rounded-full flex items-center justify-center border">
                  <img
                    src={mvr}
                    alt="button image"
                    className="h-[32px] lg:h-[50px] relative -top-1.5 px-2"
                  />
                </button>
              </div>
              <h1>Future</h1>
            </div>
          </div>

          <p className="text-justify pt-6 lg:pt-[60px] text-xs lg:text-base block ">
            Give your child an easy way to understand science. fotonVR increases{" "}
            <br className="hidden lg:block" /> interest,addsfun,and has international level. <br className="hidden lg:block" />
            Each parent orders fotonVR kit for their child.
          </p>

          {/* Features */}
          <div className="mt-10 lg:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-20">
              <h3 className="flex items-center space-x-1">
                <img src={Checkmark} alt="" className="h-4" />
                <span className="text-xs lg:text-base">Critical Solution</span>
              </h3>
              <h3 className="flex items-center space-x-1">
                <img src={Checkmark} alt="" className="h-4" />
                <span className="text-xs lg:text-base">Innovative Learning</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-20 pt-10">
              <h3 className="flex items-center space-x-1">
                <img src={Checkmark} alt="" className="h-4" />
                <span className="text-xs lg:text-base">Future Oriented</span>
              </h3>
              <h3 className="flex items-center space-x-1">
                <img src={Checkmark} alt="" className="h-4" />
                <span className="text-xs lg:text-base">Creative  Thinking</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
