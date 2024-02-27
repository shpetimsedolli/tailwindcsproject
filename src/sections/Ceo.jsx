import back from "../assets/back.png";
import profile from "../assets/Profile.png";
import tonkean from "../assets/Tonkean.png";
import spring from "../assets/BigSpring.png";
import clear from "../assets/Clearbit.png";
import mine from "../assets/Mine.png";
import shake from "../assets/Shake.png";

const Ceo = () => {
  return (
    <div className="container flex flex-col items-center ">
      <p className="text-center text-[21px]">
        "What I love about Qubly is the easy way we can collaborate even if
        there is a lot of people involved in the process"
      </p>
      <img src={profile} className=" my-4" alt="" />
      <h4 className="font-bold text-[16px]">Guillaume Cabane</h4>
      <h4 className="font-bold text-[16px]">CTO @ BigSpring</h4>
      <div className="">
        <div className="flex justify-center items-center gap-[80px] flex-wrap py-14 border-t-2 mt-12">
          <img src={tonkean} alt="" />
          <img src={spring} alt="" />
          <img src={clear} alt="" />
          <img src={mine} alt="" />
          <img src={shake} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ceo;
