import l1 from "../assets/l1.png";

const Footer = () => {
  return (
    <div className="pb-20 px-4 lg:px-10 pt-10">
      {/* Main Footer Section */}
      <div className="flex flex-wrap justify-between border-b-2 pb-10 space-y-10 lg:space-y-0">
        <div className="flex flex-col w-full lg:w-[40%]">
          <h1 >
            <img src={l1} alt="Logo" className="h-12 lg:h-auto " />
          </h1>
          <p className="mt-4 text-sm flex text-justify ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate
          </p>
        </div>

        {/* Company Sections */}
        <div className="w-full lg:w-auto flex flex-col">
          <h1 className="font-bold">Company</h1>
          <h2 className="pt-2">About us</h2>
          <h2 className="pt-1">Career</h2>
          <h2 className="pt-1">Press Kit</h2>
          <h2 className="pt-1">Contact us</h2>
        </div>

        <div className="w-full lg:w-auto flex flex-col">
          <h1 className="font-bold">Services</h1>
          <h2 className="pt-2">Support</h2>
          <h2 className="pt-1">FAQs</h2>
          <h2 className="pt-1">Pricing</h2>
          <h2 className="pt-1">Blog</h2>
        </div>

        <div className="w-full lg:w-auto flex flex-col">
          <h1 className="font-bold">Resources</h1>
          <h2 className="pt-2">Documentation</h2>
          <h2 className="pt-1">API</h2>
          <h2 className="pt-1">Tutorials</h2>
          <h2 className="pt-1">Guides</h2>
        </div>
      </div>

      {/* End Footer Section */}
      <div className="flex flex-wrap justify-between items-center pt-10 space-y-4 lg:space-y-0">
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h1>Copyright © 2022 Musemind | All rights reserved.</h1>
        </div>

        <div className="w-full lg:w-auto text-center lg:text-right">
          <h1>Terms & Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
