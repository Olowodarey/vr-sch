import { IoIosArrowDown } from "react-icons/io";
import F3 from "../assets/F3.png";
import F2 from "../assets/F2.png";
import F1 from "../assets/F1.png";

const Tech = () => {
  return (
    <div className="pb-20">
      <div className="flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Heading */}
        <div className="flex p-4 bg-gray-100">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
            How ClassVR Works
          </h1>
        </div>

        {/* Short Line */}
        <div className="w-16 sm:w-24 md:w-32 border-t-4 border-blue"></div>

        {/* Subheading */}
        <div className="flex flex-col justify-center items-center text-center ">
          <h2 className="font-bold text-base sm:text-2xl md:text-3xl">
            Create and deliver immersive and engaging lessons with ClassVR's
          </h2>
          <h2 className="font-bold text-base sm:text-2xl md:text-3xl">
            classroom-ready VR & AR solution
          </h2>
        </div>
      </div>

      {/* content */}

      <div className="flex flex-col items-center justify-center space-y-5 pt-20 px-4 lg:px-0">
        {/* Dotted line with arrow */}
        <div className="flex justify-between items-center space-x-5 w-full max-w-4xl">
          <div className="w-1/2 border-t-4 border-brown border-dotted"></div>
          <IoIosArrowDown className="h-10 w-10 text-blue" />
          <div className="w-1/2 border-t-4 border-brown border-dotted"></div>
        </div>

        {/* Content section */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 w-full max-w-4xl">
          {/* Image */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img src={F3} alt="Hardware ClassVR" className="w-full max-w-sm" />
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 px-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
                The Hardware: ClassVR
              </h1>
              <h1 className="text-2xl lg:text-3xl font-bold">Headsets</h1>
            </div>

            <p className="mt-4 lg:mt-6 text-sm">
              ClassVR headsets provide a safe and secure way for students to
              explore VR & AR in the classroom with the teacher keeping full
              control over each device. From a comfortable VR experience using
              the adjustable head straps to the intuitive and simple-to-use
              interface and controls, ClassVR headsets have been designed
              specifically for students of all ages.
            </p>

            {/* Button for larger screens */}
            <div className="hidden lg:flex flex-col pt-10">
              <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                <button className="h-9 bg-gray  hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                  Get Started
                </button>
              </div>
            </div>

            {/* Button for smaller screens */}
            <div className="flex lg:hidden flex-col items-center pt-10">
              <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                <button className="h-9 bg-gray hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd */}

      <div className="flex flex-col items-center justify-center space-y-5 pt-20 px-4 lg:px-0">
        {/* Dotted line with arrow */}
        <div className="flex justify-between items-center space-x-5 w-full max-w-4xl">
          <div className="w-1/2 border-t-4 border-brown border-dotted"></div>
          <IoIosArrowDown className="h-10 w-10 text-blue" />
          <div className="w-1/2 border-t-4 border-brown border-dotted"></div>
        </div>

        {/* Content section */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 w-full max-w-4xl">
          {/* Text content */}
          <div className="w-full lg:w-1/2 px-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
                ClassVR Storage and Charging
              </h1>
            </div>

            <p className="mt-4 lg:mt-6 text-sm">
              All ClassVR headsets come in a custom design case with a foam
              interior and strong ABS shell to keep your headsets safe.
              Available in cases of 4, 8 or 30, our cases are compact and light
              so can be easily transported between classrooms. Not only that,
              our storage cases include a built in charging facility where
              headsets can charge even when the case is closed, ensuring they're
              ready for students to use at any time.
            </p>

            {/* Button for larger screens */}
            <div className="hidden lg:flex flex-col pt-10">
              <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                <button className="h-9 bg-gray  hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                  Get Started
                </button>
              </div>
            </div>

            {/* Button for smaller screens */}
            <div className="flex lg:hidden flex-col items-center pt-10">
              <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                <button className="h-9 bg-gray hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img src={F2} alt="Hardware ClassVR" className="w-full max-w-sm" />
          </div>
        </div>
        {/* 
            3rd */}
      </div>

      {/* 3rd */}

      <div className="flex flex-col items-center justify-center space-y-5 pt-20 px-4 lg:px-0">
        {/* Dotted line with arrow */}
        <div className="flex justify-between items-center space-x-5 w-full max-w-4xl">
          <div className="w-1/2 border-t-4 border-brown border-dotted"></div>
          <IoIosArrowDown className="h-10 w-10 text-blue" />
          <div className="w-1/2 border-t-4 border-brown border-dotted"></div>
        </div>

        {/* Content section */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 w-full max-w-4xl">
          {/* Image */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img src={F1} alt="Hardware ClassVR" className="w-full max-w-sm" />
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 px-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
              ClassVR Storage and Charging
              </h1>
              
            </div>

            <p className="mt-4 lg:mt-6 text-sm">
              All ClassVR headsets come in a custom design case with a foam
              interior and strong ABS shell to keep your headsets safe.
              Available in cases of 4, 8 or 30, our cases are compact and light
              so can be easily transported between classrooms. Not only that,
              our storage cases include a built in charging facility where
              headsets can charge even when the case is closed, ensuring they're
              ready for students to use at any time.
            </p>

            {/* Button for larger screens */}
            <div className="hidden lg:flex flex-col pt-10">
              <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                <button className="h-9 bg-gray  hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                  Get Started
                </button>
              </div>
            </div>

            {/* Button for smaller screens */}
            <div className="flex lg:hidden flex-col items-center pt-10">
              <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                <button className="h-9 bg-gray hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
