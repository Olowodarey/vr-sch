<div className="flex flex-col items-center justify-center space-y-5 pt-20">
{/* Dotted lines and arrow */}
<div className="flex justify-between space-x-10 items-center w-full max-w-4xl mx-auto">
  <div className="w-1/3 lg:w-[400px] border-t-4 border-brown border-dotted"></div>
  <IoIosArrowDown className="h-10 w-10 text-blue" />
  <div className="w-1/3 lg:w-[400px] border-t-4 border-brown border-dotted"></div>
</div>

{/* Image and text */}
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-5 lg:space-y-0 lg:space-x-10 w-full max-w-4xl mx-auto">
  <div className="flex items-center justify-center px-20 ">
    <img src={F3} alt="ClassVR" className=" w-full max-w-[500px]" />
    
  </div>

  <div className="lg:w-2/3 px-2">
    <h1 className="text-3xl font-bold">
      The Hardware: ClassVR Headsets
    </h1>
    <p className="mt-4 text-lg">
      ClassVR headsets provide a safe and secure way for students to
      explore VR & AR in the classroom with the teacher keeping full
      control over each device. From a comfortable VR experience using
      the adjustable head straps to the intuitive and simple-to-use
      interface and controls, ClassVR headsets have been designed
      specifically for students of all ages.
    </p>

    {/* Button for larger screens */}
    <div className="hidden lg:flex flex-col pt-10">
      <div className="bg-blue border border-black h-9 w-[220px]">
        <button className="h-9 bg-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
          Get Started
        </button>
      </div>
    </div>

    {/* Button for smaller screens */}
    <div className="flex lg:hidden flex-col items-center pt-10">
      <div className="bg-blue border border-black h-9 w-[220px]">
        <button className="h-9 bg-gray border font-semibold w-[220px] relative -top-1 -right-1 text-black">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>
</div>