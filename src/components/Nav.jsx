import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/Logo.png";

const Menu = () => (
  <ul className="flex gap-12 items-center md:hidden">
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
);

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <div className="container flex justify-between items-center py-8">
        <img src={logo} alt="" />
        <Menu />
        <div className="   ">
          {toggleMenu ? (
            <RiCloseLine
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
          {toggleMenu && <Menu />}
        </div>
      </div>
    </header>
  );
};

export default Nav;
