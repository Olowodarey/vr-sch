import wob from "../assets/wob.png";
import mvr from "../assets/mvr.png";
import mvrrr from "../assets/mvrrr.png";


const Advart = () => {
  return (
    <div className="bg-gray px-10 ">
      <div className="flex flex-col items-center pt-10  lg:pt-20 hidden-lg">
        <div className="bg-blue border border-black h-9 w-[220px]">
          <button className="h-9 bg-black  border font-semibold w-[220px] relative -top-1 -right-1 text-gray">
            Register
          </button>
        </div>
      </div>

      {/* section */}

      <div className="flex flex-col lg:flex-row justify-between pb-10 lg:pb-20 lg:px-10 pt-20 lg:pt-20 ">
        <div className="h-[300px] lg:h-[500px]">
          <img src={mvrrr} alt="" className="h-[300px] lg:h-[500px]" />
        </div>
        {/* 2nd section */}
        <div className="flex flex-col justify-center  lg:px-20 text-xl lg:text-5xl mx-auto mt-10 lg:mt-0">
          {/* 1st */}
          <div className="flex items-center justify-start space-x-5 lg:space-x-5 font-bold">
            <h1>Wear Headset</h1>
            <div className=" bg-gray border border-black h-6 lg:h-10 w-[65px] lg:w-[90px] rounded-3xl">
              <button className="h-6 lg:h-10 w-[65px] lg:w-[88px] bg-brown relative -right-[2px] -top-[3px] rounded-full flex items-center justify-center border">
                <img
                  src={wob}
                  alt="button image"
                  className="h-[40px] lg:h-[57px] relative -top-2.5 px-2"
                />
              </button>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex items-center space-x-3 lg:space-x-5 font-bold">
            <h1>and take a deep dive </h1>
          </div>
          {/* 3rd */}
          <div className="flex items-center space-x-3 lg:space-x-5 font-bold  ">
            <h1>into the ocean of </h1>
          </div>
          {/* 4th */}
          <div className="flex items-center space-x-3 lg:space-x-5 font-bold ">
            <div className=" bg-gray border border-black h-6 lg:h-10 w-[65px] lg:w-[90px] rounded-3xl">
              <button className="h-6 lg:h-10 w-[65px] lg:w-[88px] bg-brown relative -right-[2px] -top-[3px] rounded-full flex items-center justify-center border">
                <img
                  src={mvr}
                  alt="button image"
                  className="h-[32px] lg:h-[50px] relative -top-1.5 px-2"
                />
              </button>
            </div>
            <h1>Science.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advart;
