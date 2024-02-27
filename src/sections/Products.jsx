import logos from "../assets/Logos.png";
import products from "../assets/products.png";

const Products = () => {
  return (
    <div className="container my-[100px] flex flex-col gap-14">
      <div className="flex items-center gap-[50px] md:flex-col-reverse md:items-center md:text-center ">
        <div className="w-full md:w-auto">
          <img src={logos} alt="" />
        </div>
        <div className="">
          <h1 className="font-bold text-[36px]">Launch with the best</h1>
          <p className="text-[#8989A2] text-[16px]">
            A centralized platform that integrates zillions of data sources
            using Big Data ELT (Extract, Load & Transform) that leaves no data
            behind
          </p>
        </div>
      </div>
      <div className="flex items-center md:flex-col md:items-center md:text-center">
        <div className="">
          <h1 className="font-bold text-[36px]">Data-driven pipelines</h1>
          <p className="text-[#8989A2] text-[16px]">
            Maintenance-free data pipelines with quick set-up and
            straight-forward deployments that are powered by a modern & scalable
            platform.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <img src={products} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
