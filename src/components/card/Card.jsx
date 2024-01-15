import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import productData from "../../api/product";

const Card = ({ id, name, price, image, description, category }) => {
  const [productInfo, setProductData] = useState(productData);
  console.log(productInfo);

  const customBackgroundColor = "rgb(222, 207, 207)";

  return (
    <>
      <div
        key={id}
        className=" w-[250px] h-[350px]  p-4 m-4 rounded-md 
               shadow-md
        "
        style={{ backgroundColor: customBackgroundColor }}
      >
        <img src="../../images/rakhi3.png" alt="" />

        <p> {description} </p>

        <div className=" flex   justify-between p-4">
          <div>
            <h4 className=" font-semibold"> {`${name.slice(0, 30)}....`} </h4>
            <span>₹{price}</span>
          </div>

          <div>
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <span>4.2</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
