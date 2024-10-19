import logo from "../assets/logo.png";


const Navtap = () => {
  return (
    <div className=" bg-goled">
      <div className="flex flex-col sm:flex-row justify-between items-center px-10 pt-8">
        {/* Logo centered on small screens */}
        <div className="sm:order-1 order-2 mb-4 sm:mb-0">
          <img src={logo} alt="" className="h-8 mx-auto sm:mx-0" />
        </div>

        {/* Navigation links */}
        <div className="flex  sm:flex-row  space-x-5 sm:space-x-10 text-black font-semibold order-2 sm:order-2">
          <p className="text-center sm:text-left">Technology</p>
          <p className="text-center sm:text-left">Courses</p>
          <p className="text-center sm:text-left">Pricing</p>
          <p className="text-center sm:text-left">Blog</p>
        </div>

        {/* Button hidden on small screens */}
        <div className="hidden sm:block sm:order-3">
          <div className="bg-gray border border-black h-9 w-[108px]">
            <button className="h-9 bg-black text-gray font-semibold w-[110px] relative -top-1 -right-1">
              Register
            </button>
          </div>
        </div>
      </div>
        {/* hero */}

    
    </div>
  );
};

export default Navtap;
