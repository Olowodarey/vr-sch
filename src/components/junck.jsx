import React from "react";
import L1 from "../assets/L1.png";
import L2 from "../assets/L2.png";
import L3 from "../assets/L3.png";
import L4 from "../assets/L4.png";

const Subscribe = () => {
  return (
    <div className="pb-20 px-10 lg:px-10 pt-10 ">
      <div className="flex justify-center ">
        {/* header */}
        <h1 className="font-black text-lg lg:text-xl text-center">
          Over{" "}
          <span className="font-bold underline underline-offset-2">
            17,000+ Users
          </span>{" "}
          all over the world
        </h1>
      </div>

      {/* logos */}
      <div className="border-t border-b grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 justify-items-center px-4 lg:px-10 mt-16 lg:mt-32 h-auto lg:h-[200px] items-center">
        <img src={L1} alt="Logo 1" className="h-12 lg:h-auto" />
        <img src={L2} alt="Logo 2" className="h-12 lg:h-auto" />
        <img src={L3} alt="Logo 3" className="h-12 lg:h-auto" />
        <img src={L4} alt="Logo 4" className="h-12 lg:h-auto" />
      </div>

      {/* subscribe */}
      <div className="bg-gold mt-10 lg:mt-20 h-auto lg:h-[300px] w-full flex flex-col lg:flex-row items-center justify-center py-10 px-4">
        <div className="mb-6 lg:mb-0 lg:mr-10 text-center lg:text-left">
          <h1 className="font-bold text-3xl lg:text-4xl">Subscribe For</h1>
          <h1 className="font-bold text-3xl lg:text-4xl">Offer Updates</h1>
        </div>

        <div className="w-full lg:w-auto flex items-center justify-center bg-gray p-4 lg:p-0">
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:w-64"
              />
              <button className="bg-blue text-white px-4 py-2 border rounded-md hover:bg-blue-600 focus:outline-none w-full lg:w-auto">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
