import React from "react";
import logo from "../assets/Logo.png";

const Nav = () => {
  return (
    <header>
      <div className="container flex justify-between items-center py-8">
        <img src={logo} alt="" />
        <ul className="flex gap-12 items-center">
          <a className="aLinks" href="">
            About
          </a>
          <a className="aLinks" href="">
            Pricing
          </a>
          <a className="aLinks" href="">
            Contact Us
          </a>
          <a className="aLinks" href="">
            Login
          </a>
          <button className="text-xs/[14px] py-[5px] border-2 border-[#722ED1] rounded-[16px] pr-[30px] pl-[30px] transition1 hover:bg-black hover:text-white">
            Get Started
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
