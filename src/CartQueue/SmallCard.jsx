import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const SmallCard = () => {
  return (
    <>
      <div className=" flex justify-center">
        <div
          className=" bg-white w-[90%] h-[60px] mt-5
        shadow-lg rounded-md 
        "
        >
          <div className="flex justify-between items-center ">
            <img
              src="../../images/pizaa1.jpg"
              alt=" here"
              className=" w-[60px] h-[60px] rounded-md  "
            />

            <div className=" ml-3">
              <h1 className=" text-lg font-semibold">Pizza</h1>
              <h1 className=" text-lg font-semibold">Price: $10</h1>
            </div>
            <div className=" flex justify-self-center items-center gap-3  ">
              <FaPlus className=" cursor-pointer" />
              <FaMinus className="cursor-pointer" />
              <span className=" text-green-400 font-bold">Total</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
