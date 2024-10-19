import L1 from "../assets/L1.png";

const Footer = () => {
  return (
    <div className="pb-20 px-4 lg:px-10 pt-10">
      {/* Main Footer Section */}
      <div className="flex flex-wrap justify-between border-b-2 pb-10 space-y-10 lg:space-y-0">
        <div className="w-full lg:w-auto">
          <h1>
            <img src={L1} alt="Logo" className="h-12 lg:h-auto" />
          </h1>
          <p className="mt-4 text-sm">
            Saas Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consequat.
          </p>
        </div>

        {/* Company Sections */}
        <div className="w-full lg:w-auto flex flex-col">
          <h1 className="font-bold">Company</h1>
          <h2 className="pt-4">About us</h2>
          <h2 className="pt-4">Career</h2>
          <h2 className="pt-4">Press Kit</h2>
          <h2 className="pt-4">Contact us</h2>
        </div>

        <div className="w-full lg:w-auto flex flex-col">
          <h1 className="font-bold">Services</h1>
          <h2 className="pt-4">Support</h2>
          <h2 className="pt-4">FAQs</h2>
          <h2 className="pt-4">Pricing</h2>
          <h2 className="pt-4">Blog</h2>
        </div>

        <div className="w-full lg:w-auto flex flex-col">
          <h1 className="font-bold">Resources</h1>
          <h2 className="pt-4">Documentation</h2>
          <h2 className="pt-4">API</h2>
          <h2 className="pt-4">Tutorials</h2>
          <h2 className="pt-4">Guides</h2>
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
