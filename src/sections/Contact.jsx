import line from "../assets/line.png";
import accenture from "../assets/accenture-4.png";
import react from "../assets/react.png";
import airbnb from "../assets/airbnb.png";
import sky from "../assets/sky-4.png";
import google from "../assets/btn.png";
const Contact = () => {
  return (
    <>
      <div className="container flex">
        <div className="flex flex-col">
          <h1 className="font-bold text-[36px]">
            See why the world’s best companies use Qubly to{" "}
          </h1>
          <div className="flex items-center gap-3">
            <img src={line} alt="" />
            <p>Trusted By</p>
            <img src={line} alt="" />
          </div>
          <div className="flex gap-[100px] mb-[70px] mt-[50px] items-center">
            <img src={accenture} alt="" />
            <img src={react} alt="" />
          </div>
          <div className="flex gap-[100px] items-center">
            <img src={airbnb} alt="" />
            <img src={sky} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[16px] box w-[416px]">
          <h3 className="font-bold text-[21px]">Sign Up</h3>
          <input
            className="border-[#8989A2] border-[1px] py-[15px] pl-4 outline-none w-full"
            type="email"
            placeholder="Your primary email"
          />
          <input
            className="border-[#8989A2] border-[1px] py-[15px] pl-4 outline-none w-full"
            type="password"
            placeholder="Password"
          />
          <input
            className="border-[#8989A2] border-[1px] py-[15px] pl-4 outline-none w-full"
            type="password"
            placeholder="Retype Password"
          />
          <button className="w-full bg-[#722ED1] rounded py-4 text-[#fff]">
            Start your free trial
          </button>
          <p>Or</p>
          <img src={google} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
