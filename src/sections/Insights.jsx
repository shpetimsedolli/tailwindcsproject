import eye from "../assets/eye.png";
import box1 from "../assets/comp1.png";
import box2 from "../assets/comp2.png";
import box3 from "../assets/comp3.png";
const Insights = () => {
  return (
    <>
      <div className=" mt-[90px] justify-center flex-col flex items-center gap-8">
        <div className="flex rounded-3xl bg-[#F9F0FF] justify-center items-center p-3">
          <img src={eye} alt="" />
          <p>Why Qubly</p>
        </div>
        <h1 className="text-[36px] font-bold md:text-center">
          Get actionable insights
        </h1>
        <p className="text-center max-w-[500px] text-[#8989A2]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div className="flex container items-center justify-center gap-12 mt-10 md:flex-wrap md:flex-col md:justify-center md:items-center">
        <div className="flex flex-col gap-4 md:items-center md:justify-center">
          <div className="">
            <img src={box1} alt="" />
          </div>
          <h4 className="font-bold text-[21px]">Data in real-time</h4>
          <p className="text-[#8989A2] md:text-center md:max-w-[30%]">
            Collect data in real-time from multiple channels and move it into a
            data lake, in its original format.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-center md:justify-center">
          <div className="">
            <img src={box2} alt="" />
          </div>
          <h4 className="font-bold text-[21px]">Powerful Algorithms</h4>
          <p className="text-[#8989A2] md:text-center md:max-w-[30%]">
            Collect data in real-time from multiple channels and move it into a
            data lake, in its original format.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-center md:justify-center">
          <div className="">
            <img src={box3} alt="" />
          </div>
          <h4 className="font-bold text-[21px]">Valuable business insights</h4>
          <p className="text-[#8989A2] md:text-center  md:max-w-[30%]">
            Collect data in real-time from multiple channels and move it into a
            data lake, in its original format.
          </p>
        </div>
      </div>
    </>
  );
};

export default Insights;
