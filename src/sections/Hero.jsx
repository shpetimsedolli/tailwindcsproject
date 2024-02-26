import React from "react";
import heroimg from "../assets/308-03.png";

const Hero = () => {
  return (
    <div className="container w-full h-full mt-52 lg:mt-20">
      <div className="  flex items-center justify-between lg:flex-col">
        <div className="flex flex-col gap-6 lg:items-center">
          <h1 className="font-bold text-5xl lg:text-center sm:text-3xl">
            Your data with <br /> real-time analytics
          </h1>
          <p className="text-sm text-[#8989A2] lg:text-center">
            Harness the potential of Big Data Analytics & Cloud Services and
            become a data-driven organization with Needle tail
          </p>
          <div className="flex items-center gap-3">
            <button className="transition1 hover:scale-110 font-bold py-4 px-9 rounded-[24px] bg-[#722ED1] text-[#fff] text-sm sm:py-2 sm:px-6">
              Start Free Trial
            </button>
            <button className="transition1 hover:scale-110 font-bold py-4 px-11 rounded-[24px] bg-[#fff] text-[#000] text-sm sm:py-2 sm:px-6 ">
              Learn More
            </button>
          </div>
        </div>
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
