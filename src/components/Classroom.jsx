import mvr from "../assets/mvr.png";
import Gro from "../assets/Gro.png";
import Gr from "../assets/Gr.png";
import Gri from "../assets/Gri.png";
import Grr from "../assets/Grr.png";

const Classroom = () => {
  return (
    <div className="bg-goled px-10 pb-20 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* 1st content */}

        <div className="flex flex-col pt-10 lg:pt-20">
          {/* 1st */}
          <div>
            {/* header */}
            <div className="text-2xl lg:text-5xl font-bold ">
              <div className="flex items-center  space-x-3 lg:space-x-5  ">
                <h1>Virtual </h1>

                <div className=" bg-gray border border-black h-6 lg:h-10 w-[65px] lg:w-[90px] rounded-3xl">
                  <button className="h-6 lg:h-10 w-[65px] lg:w-[88px] bg-brown relative -right-[2px] -top-[3px] rounded-full flex items-center justify-center border">
                    <img
                      src={mvr}
                      alt="button image"
                      className="h-[32px] lg:h-[50px] relative -top-1.5 px-2"
                    />
                  </button>
                </div>

                <h1>classroom</h1>
              </div>

              <h1> is now Reality </h1>
            </div>
          </div>

          <div className="pt-10">
            <p className="flex justify-start">
              With VR, they aren't limited to <br /> word descriptions or book{" "}
              <br />
              illustrations; they can explore <br /> the topic and see how
              things are <br />
              put together.
            </p>
          </div>

          {/* last */}

          <div className="flex flex-col  pt-10  lg:pt-20 hidden-sm">
            <div className="bg-blue border border-black h-9 w-[220px]">
              <button className="h-9 bg-gray  border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                Get Started
              </button>
            </div>
          </div>
          {/* 
          mobile */}

          <div className="flex flex-col items-center pt-10  lg:pt-20 hidden-lg">
            <div className="bg-blue border border-black h-9 w-[220px]">
              <button className="h-9 bg-gray  border font-semibold w-[220px] relative -top-1 -right-1 text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* 2nd div */}

        <div className="flex flex-col pt-20  ">
          {/* top div */}
          <div className="flex space-x-2 lg:space-x-20 ">
            <div className="bg-gradient-to-b from-customGreenStart to-customGreenEnd  h-[400px] w-[300px]">
              <div className="flex flex-col justify-center items-center">
                <div className="pt-5">
                  <img src={Gro} alt="" />
                </div>

                <h1 className="flex pt-5 font-bold  text-xs lg:text-lg items-center justify-center">
                  Engaging Classroom
                </h1>
                <p className="px-5  items-center text-xs lg:text-sm  text-black pt-10 ">
                  Student will no longer just hear and see, they will also
                  participate and have pratical experiences.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-b from-customGreenStart to-customGreenEnd  h-[400px] w-[300px]">
              <div className="flex flex-col justify-center items-center">
                <div className="pt-5">
                  <img src={Gr} alt="" />
                </div>

                <h1 className="flex pt-5 font-bold text-xs lg:text-lg items-center justify-center">
                  Virtual Laboratory
                </h1>
                <p className="px-5  items-center text-xs lg:text-sm  text-black pt-10 ">
                  Students will no longer just hear and see, they will also
                  participate and have practical experiences.
                </p>
              </div>
            </div>
          </div>

          {/* below div */}

          <div className="flex space-x-2 lg:space-x-20  mt-2 lg:mt-20">
            <div className="bg-gradient-to-b from-customGreenStart to-customGreenEnd  h-[400px] w-[300px]">
              <div className="flex flex-col justify-center items-center">
                <div className="pt-5">
                  <img src={Grr} alt="" />
                </div>

                <h1 className="flex pt-5 font-bold text-xs lg:text-lg items-center justify-center">
                  Fun with VR
                </h1>
                <p className="px-5  items-center text-xs lg:text-sm text-black pt-10 ">
                  A Imagine taking a trip to Mars, or watching how 8 skeleton
                  takes a human form, it would be so fun!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-b from-customGreenStart to-customGreenEnd  h-[400px] w-[300px]">
              <div className="flex flex-col justify-center items-center">
                <div className="pt-5">
                  <img src={Gri} alt="" />
                </div>

                <h1 className="flex pt-5 font-bold text-xs lg:text-lg items-center justify-center">
                  Interactive Learning
                </h1>
                <p className="px-5  items-center text-xs lg:text-sm  text-black pt-10 ">
                  Complex concepts will be now easier to understand with VR, you
                  won't just read theories you will see them!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Classroom;
