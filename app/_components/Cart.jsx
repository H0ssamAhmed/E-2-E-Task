"use client";

import React, { useState } from "react";
import Image from "next/image";

const Cart = ({ items }) => {
  const [showCart, setShowCart] = useState(false);
  const favItems = items.filter((item) => {
    return item.isAddedToCart;
  });

  return (
    <div className="relative flex flex-col">
      <div
        className="relative cursor-pointer"
        onClick={() => setShowCart(!showCart)}
      >
        <span className="absolute flex justify-center items-center -top-4 right-0 text-white w-6  h-6 p-2 rounded-full">
          {favItems.length}
        </span>
        <Image src="/shopping.png" width={50} height={50} alt="Cart" />
      </div>
      <div
        className={`${
          showCart ? " hidden " : " flex "
        }bg-cyan-400 flex-col items-start
         absolute top-[50px] right-0 gap-2
        `}
      >
        {favItems.map((item) => {
          return (
            <div
              className="card-item w-[300px] p-4 rounded-md bg-cyan-100"
              key={item.id}
            >
              json-server --watch --port 400 ./data/data.json
              <h1 className=" font-semibold">{item.name}</h1>
              <p className=" text-gray-500">{item.description}</p>
              <p className=" text-end">{Number.parseInt(item.price)}$</p>
            </div>
          );
        })}
        {favItems.length == 0 && (
          <p className="text-white text-center">No items Added to Cart yet</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
