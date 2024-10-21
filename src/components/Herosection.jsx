import vrwm from "../assets/vrwm.png";
import wob from "../assets/wob.png";
import { FaArrowRight } from "react-icons/fa";

const Herosection = () => {
  return (
    <div className="bg-goled pt-10">
      <div
        style={{
          backgroundImage: `url(${vrwm})`,
          backgroundRepeat: "no-repeat",
        }}
        className="bg-small md:bg-large"
      >
        <div className="h-[80vh] lg:h-[90vh]  px-10 lg:px-10 flex flex-col">
          {/* Text and Button Section */}
          <div className="flex flex-col items-center text-justify font-bold text-3xl lg:text-5xl ">
            {/* Virtual Reality */}
            <div className="flex  items-center space-x-3   lg:space-x-5 ">
              <h1 className=" lg:mb-0">Virtual</h1>
              <div className="bg-gray border border-black h-6 lg:h-10 w-[65px] lg:w-[90px] rounded-3xl">
                <button className="h-6 lg:h-10 w-[65px] lg:w-[88px] bg-brown relative -right-[2px] -top-[3px] rounded-full flex items-center justify-center border">
                  <img
                    src={wob}
                    alt="button image"
                    className="h-[40px] lg:h-[57px] relative -top-2.5 px-2"
                  />
                </button>
              </div>
              <h1 className=" lg:mb-0">Reality</h1>
              <div className="bg-gray border border-black h-10 w-[60px] lg:w-[90px] rounded-full hidden-sm">
                <button className="h-10 w-[58px] lg:w-[88px] bg-red relative -right-[2px] -top-[3px] rounded-full flex items-center justify-center border">
                  <FaArrowRight className="h-[40px] lg:h-[100px] w-[20px] lg:w-[30px] text-gray" />
                </button>
              </div>
              <h1 className="hidden-sm">Augmented</h1>
            </div>

            {/* small screen */}
            <div className="flex hidden-lg space-x-5 text-3xl  items-center">
              <div className="bg-gray border border-black h-6 lg:h-10 w-[65px] lg:w-[90px]  rounded-full  ">
                <button className="h-6 lg:h-10 w-[65px] lg:w-[88px]  bg-red relative -right-[2px] -top-[3px] rounded-full flex items-center justify-center border hover:bg-gray">
                  <FaArrowRight className="h-[40px] lg:h-[100px] w-[20px] lg:w-[30px]  text-gray hover:bg-black" />
                </button>
              </div>

              <h2>Augmented</h2>
            </div>

            <h1>Education.</h1>
          </div>
          {/* 
            paragrah */}

          <div className="flex flex-col mt-10 lg:mt-20 items-center text-justify text-lg lg:text-xl">
            <p>Virtual reality, or VR, is taking off in education with an</p>
            <p>increasing number of schools adopting the technology</p>
          </div>
          <div className="flex flex-col items-center mt-10 lg:mt-20 hidden-sm">
            <div className="bg-blue hover:bg-gray border border-black h-9 w-[108px]">
              <button className="h-9 bg-gray text-black border font-semibold w-[110px] relative -top-1 -right-1 hover:bg-blue ">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
