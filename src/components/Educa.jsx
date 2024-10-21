import { IoIosArrowDown } from "react-icons/io";

import T2 from "../assets/T2.jpg";
import T3 from "../assets/T3.jpg";
import T11 from "../assets/T11.jpg";

const Educa = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Heading */}
        <div className="flex p-4 bg-gray-100">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-center">
            Virtual Reality in Education
          </h1>
        </div>

        {/* Short Line */}
        <div className="w-20 sm:w-24 md:w-32 border-t-4 border-blue"></div>

        {/* Subheading */}
        <div className="flex flex-col justify-center items-center text-center ">
          <h2 className="font-bold text-base  sm:text-2xl md:text-3xl">
            Engaging VR and AR educational   content for students of all ages
          </h2>
       

          <p className="mt-4 lg:mt-6 text-sm w-[80%] lg:w-[30%] text-justify">
            Introducing a whole new concept in educational technology: a
            'standalone' Virtual Reality headset complete with a unique
            student-friendly interface, gesture controls, embedded educational
            resources and simple-to-use teacher controls. ClassVR is a
            groundbreaking new technology designed to help raise engagement and
            increase knowledge retention for students of all ages.
          </p>
        </div>

        {/* for cards */}

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
            <div className="flex flex-col justify-center w-full lg:w-1/2">
              <div className="h-10 bg-brown relative top-5 w-[80%] lg:w-[60%] left-5 flex items-center ">
                <h1 className="px-4 font-bold text-lg text-gray">
                  {" "}
                  Ages 4-7 years{" "}
                </h1>
              </div>
              <img
                src={T11}
                alt="Hardware ClassVR"
                className="w-full max-w-sm"
              />
            </div>

            {/* Text content */}
            <div className="w-full lg:w-1/2 px-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold">
                  Pre-School / Infant / Kindergarten
                </h1>
              </div>

              <p className="mt-4 lg:mt-6 text-sm flex text-justify ">
                Early education is all about learning through experience. Find
                out how your youngest students can benefit from immersive 360
                environments, used to enhance, impact and complement the
                real-world exploration and play that builds a solid foundation
                in the pre-school years.
              </p>

              {/* Button for larger screens */}
              <div className="hidden lg:flex flex-col pt-10">
                <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                  <button className="h-9 bg-gray  hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                    Rgister
                  </button>
                </div>
              </div>

              {/* Button for smaller screens */}
              <div className="flex lg:hidden flex-col items-center pt-10">
                <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                  <button className="h-9 bg-gray hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                    Rgister
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
                  Primary School / Elementary School
                </h1>
              </div>

              <p className="mt-4 lg:mt-6 text-sm flex text-justify ">
                There’s so much potential for bringing the curriculum to life
                using virtual and augmented reality experiences, from visiting
                far-flung corners of the world to holding the human heart in
                your hands. Find out more about how VR and AR can have a
                remarkable impact in all areas of learning.
              </p>

              {/* Button for larger screens */}
              <div className="hidden lg:flex flex-col pt-10">
                <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                  <button className="h-9 bg-gray  hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                    Rgister
                  </button>
                </div>
              </div>

              {/* Button for smaller screens */}
              <div className="flex lg:hidden flex-col items-center pt-10">
                <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                  <button className="h-9 bg-gray hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                    Rgister
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex flex-col justify-center w-full lg:w-1/2">
              <div className="h-10 bg-brown relative top-5 w-[80%] lg:w-[60%] left-5 flex items-center ">
                <h1 className="px-4 font-bold text-lg text-gray">
                  {" "}
                  Ages 7-11 years{" "}
                </h1>
              </div>
              <img
                src={T3}
                alt="Hardware ClassVR"
                className="w-full max-w-sm"
              />
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
            <div className="flex flex-col justify-center w-full lg:w-1/2">
              <div className="h-10 bg-brown relative top-5 w-[80%] lg:w-[60%] left-5 flex items-center ">
                <h1 className="px-4 font-bold  text-base lg:text-lg text-gray">
                  {" "}
                  Ages 14-16 years{" "}
                </h1>
              </div>
              <img
                src={T2}
                alt="Hardware ClassVR"
                className="w-full max-w-sm"
              />
            </div>

            {/* Text content */}
            <div className="w-full lg:w-1/2 px-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold">
                  Secondary School / High School
                </h1>
              </div>

              <p className="mt-4 lg:mt-6 text-sm flex text-justify ">
                Ensuring students are engaged, motivated and challenged
                throughout their school career is a key priority for teachers.
                See how virtual and augmented reality can impact students by
                unlocking potential, providing new ways to experience learning
                and even opportunities to create their own media.
              </p>

              {/* Button for larger screens */}
              <div className="hidden lg:flex flex-col pt-10">
                <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                  <button className="h-9 bg-gray  hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                    Rgister
                  </button>
                </div>
              </div>

              {/* Button for smaller screens */}
              <div className="flex lg:hidden flex-col items-center pt-10">
                <div className="bg-blue hover:bg-gray border border-black h-9 w-[220px]">
                  <button className="h-9 bg-gray hover:bg-blue hover:text-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                    Rgister
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

export default Educa;
