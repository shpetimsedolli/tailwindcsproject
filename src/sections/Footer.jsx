import React from "react";
import logo from "../assets/Logo.png";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import send from "../assets/send.png";

const Footer = () => {
  return (
    <div className="bg-[#FBFCFF]">
      <div className="flex container justify-center lg:flex-col">
        <div className=" lg:text-center lg:flex lg:items-center lg:flex-col lg:mb-5 lg:w-[50%] lg:m-auto">
          <img src={logo} alt="" />
          <p className="text-[12px] my-[25px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat ut wisi enim ad minim
          </p>
          <div className="flex items-center gap-2">
            <img src={insta} alt="" />
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="flex gap-[50px] pl-20 lg:flex-wrap">
          <ul className=" leading-loose">
            <h3 className="font-bold text-[16px]">Product</h3>
            <p className="text-[12px]">Connections</p>
            <p className="text-[12px]">Protocols</p>
            <p className="text-[12px]">Personas</p>
            <p className="text-[12px]">Integrations</p>
            <p className="text-[12px]">Catalog</p>
            <p className="text-[12px]">Pricing</p>
            <p className="text-[12px]">Security</p>
          </ul>
          <ul className=" leading-loose">
            <h3 className="font-bold text-[16px]">Developers</h3>
            <p className="text-[12px]">Connections</p>
            <p className="text-[12px]">Protocols</p>
            <p className="text-[12px]">Personas</p>
            <p className="text-[12px]">Integrations</p>
          </ul>
          <ul className=" leading-loose">
            <h3 className="font-bold text-[16px]">Company</h3>
            <p className="text-[12px]">Connections</p>
            <p className="text-[12px]"> Protocols</p>
            <p className="text-[12px]">Personas</p>
            <p className="text-[12px]">Integrations</p>
          </ul>
          <ul className=" leading-loose">
            <h3 className="font-bold text-[16px]">Support</h3>
            <p className="text-[12px]">Connections</p>
            <p className="text-[12px]">Protocols</p>
            <p className="text-[12px]">Personas</p>
            <p className="text-[12px]">Integrations</p>
          </ul>
          <ul className=" leading-loose">
            <h3 className="font-bold text-[16px]">Newsletter</h3>
            <p className="text-[12px]">Protocols</p>
            <p className="text-[12px]">Personas</p>
            <p className="text-[12px]">Integrations</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
