import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import SmallCard from "./SmallCard";

const Cart = () => {
  const [cart, setCart] = useState(true);
  return (
    <>
      <div>
        {" "}
        <div
          className={`z-10 fixed top-0 right-0 bg-gray-300 w-[60%] lg:w-[20%] h-full
      
      ${
        cart ? "translate-x-0" : "translate-x-full"
      } transition duration-500 ease-in-out `}
        >
          <h1 className=" text-center mt-10 text-2xl "> Your cart</h1>
          <RxCross1
            onClick={() => setCart(!cart)}
            className="text-2xl text-black fixed right-4 top-3 cursor-pointer 
            hover:text-red-400 transition duration-500 ease-in-out
            "
          />

          <SmallCard />
        </div>
        <FaShoppingCart
          onClick={() => setCart(!cart)}
          className={` fixed bottom-10 text-5xl right-20 cursor-pointer bg-gradient-to-br
          from-red-400 to-yellow-500 p-2 rounded-full
          ${
            cart ? "translate-x-0" : "translate-x-full"
          } transition duration-500 ease-in-out `}
        />
      </div>
    </>
  );
};

export default Cart;
