import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import mvr from "../assets/mvr.png";
import F1 from "../assets/F1.png";

import F2 from "../assets/F2.png";

import F3 from "../assets/F3.png";
import { FaRegStar } from "react-icons/fa";

export default function Sliderp() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets and small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true, // Centers the slide on small screens
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-10 pt-10 pb-10">
      <div className="text-center text-2xl lg:text-5xl font-bold flex flex-col justify-center items-center">
        <h1>Which Subjects Can</h1>
        <div className="flex items-center space-x-2 md:space-x-5 ">
          <h1>Benefit From</h1>
          <div className="bg-gray border border-black h-6 md:h-10 w-[55px] md:w-[90px] rounded-3xl">
            <button className="h-6 md:h-10 w-[55px] md:w-[88px] bg-brown relative -right-[2px] -top-[3px] rounded-full flex items-center justify-center border">
              <img
                src={mvr}
                alt="button image"
                className="h-[30px] md:h-[50px] relative -top-1.5 px-2"
              />
            </button>
          </div>
          <h1>VR?</h1>
        </div>
      </div>

      <Slider {...settings} className="mt-5">
        {/* 1st Slide */}
        <div className="flex justify-center  ">
          <div className="flex flex-col w-[250px] lg:w-[350px] h-[450px]">
            <img src={F1} alt="" className="w-full h-[200px] object-cover" />
            <h1 className="font-bold text-xl mt-5">Science Education</h1>
            <p className="mt-5 text-sm">
              There are many ways that VR can be used to teach science, but
              biology and chemistry are perfect examples.
            </p>

            <div className="flex  justify-between items-center mt-10 ">
              <div className="flex flex-col   ">
                <div className="bg-blue border border-black h-12 w-[120px] hover:bg-gray">
                  <button className="h-12 bg-gray  border font-semibold w-[120px] relative -top-1 -right-1 text-black hover:bg-blue ">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex items-center  text-xs lg:text-lg">
                <FaRegStar className="text-black" />{" "}
                <span className="flex"> 4.5 (120 Rev)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Slide */}
        <card className="flex justify-center  ">
          <div className="flex flex-col w-[250px] lg:w-[350px] h-[450px]">
            <img src={F2} alt="" className="w-full h-[200px] object-cover" />
            <h1 className="font-bold text-xl mt-5">Learn Virtual Geography</h1>
            <p className="mt-5 text-sm">
              VR provides easy usability, remote access, and also a safe
              environment without compromising on learning.
            </p>

            <div className="flex  justify-between items-center mt-10 ">
              <div className="flex flex-col   ">
                <div className="bg-blue border border-black h-12 w-[120px] hover:bg-gray">
                  <button className="h-12 bg-gray  border font-semibold w-[120px] relative -top-1 -right-1 text-black hover:bg-blue ">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex items-center  text-xs lg:text-lg">
                <FaRegStar className="text-black" />{" "}
                <span className="flex"> 4.5 (120 Rev)</span>
              </div>
            </div>
          </div>
        </card>

        {/* 3rd slide */}

        <div className="flex justify-center  ">
          <div className="flex flex-col w-[250px] lg:w-[350px] h-[450px]">
            <img src={F3} alt="" className="w-full h-[200px] object-cover" />
            <h1 className="font-bold text-xl mt-5">Virtual Gaming</h1>
            <p className="mt-5 text-sm">
              Stay physically active while experiencing all the thrills and
              excitement instead of sitting on a couch with a controller.
            </p>

            <div className="flex  justify-between items-center mt-10 ">
              <div className="flex flex-col   ">
                <div className="bg-blue border border-black h-12 w-[120px] hover:bg-gray">
                  <button className="h-12 bg-gray  border font-semibold w-[120px] relative -top-1 -right-1 text-black hover:bg-blue ">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex items-center  text-xs lg:text-lg">
                <FaRegStar className="text-black" />{" "}
                <span className="flex"> 4.5 (120 Rev)</span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
