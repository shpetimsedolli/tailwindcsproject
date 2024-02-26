import React from "react";
import heroimg from "../assets/308-03.png";

const Hero = () => {
  return (
    <div className="container w-full h-full mt-52">
      <div className="  flex items-center justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-5xl">
            Your data with <br /> real-time analytics
          </h1>
          <p className="text-sm text-[#8989A2]">
            Harness the potential of Big Data Analytics & Cloud Services and
            become a data-driven organization with Needle tail
          </p>
          <div className="flex items-center gap-3">
            <button className=" py-4 px-9 rounded-[24px] bg-[#722ED1] text-[#fff] text-sm ">
              Start Free Trial
            </button>
            <button className="py-4 px-9 rounded-[24px] bg-[#fff] text-[#000] text-sm ">
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
