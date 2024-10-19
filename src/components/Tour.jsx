import React from "react";
import bbbr from "../assets/bbbr.png";

const Tour = () => {
  return (
    <div className="px-10 pb-20 lg:px-10">
      <div className="bg-gradient-to-tr from-customblue to-customdarkblue">
        <div
          style={{
            backgroundImage: `url(${bbbr})`,
            // backgroundPosition: "right-buttom",
            backgroundRepeat: "no-repeat",
            // backgroundSize: "contain", // Ensures the image fits well
          }}

             className="bg-small md:bg-large"
        >
          <div className="flex justify-start h-full">
            <div className="text-gray font-bold px-4 lg:px-10 pt-10 pb-20">
              <h1 className="text-3xl lg:text-5xl">Get Experience Virtual</h1>
              <h1 className="text-3xl lg:text-5xl">Tours for Science</h1>
              <p className="pt-10 lg:pt-20 text-justify text-sm lg:text-base">
                With VR, they aren't limited to word descriptions or book
              </p>

              <p> illustrations; they can explore the topic and see how</p>
              <p> things are put together.</p>
              <div className="flex flex-col items-start mt-10 lg:mt-20 hidden-sm">
                <div className="bg-black hover:bg-gray border border-black h-12 w-[200px]">
                  <button className="h-12 bg-gray text-black hover:text-gray border font-semibold w-[200px] relative -top-1 -right-1 hover:bg-black px-2">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center mt-10 lg:mt-20 lg:hidden">
                <div className="bg-black hover:bg-gray border border-black h-12 w-[200px]">
                  <button className="h-12 bg-gray text-black hover:text-gray border font-semibold w-[200px] relative -top-1 -right-1 hover:bg-black px-2">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
