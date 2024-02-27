import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/Logo.png";

const Menu = () => (
  <>
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
    <button className="text-xs/[14px] py-[5px] border-2 border-[#722ED1] rounded-[16px] pr-[30px] pl-[30px] transition1 hover:bg-[#722ED1] hover:text-white">
      Get Started
    </button>
  </>
);

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <div className=" relative container flex justify-between items-center py-8">
        <img src={logo} alt="" />
        <ul className="flex gap-12 items-center md:hidden">
          <Menu />
        </ul>
        <div className="transition1 hidden md:block">
          {toggleMenu ? (
            <RiCloseLine
              className="md:absolute z-50 right-3 top-8"
              color="#000"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={30}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="flex gap-12 items-center md:flex md:flex-col md:absolute md:top-0 md:items-center md:justify-center md:right-0 md:left-0 md:h-screen md:bg-white"
              data-aos="fade-down"
            >
              <Menu />
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
