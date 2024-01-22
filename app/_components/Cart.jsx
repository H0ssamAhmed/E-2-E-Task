"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../hooks/useFetch";

const Cart = ({ data }) => {
  const itemSum = data?.filter((added) => {
    return added.isAddedToCart == true;
  });

  return (
    <div className="relative flex flex-col">
      <Link href="/Cart">
        <div className="relative cursor-pointer">
          <span className="absolute flex justify-center items-center -top-4 right-0 text-white bg-red-500 w-6  h-6 p-2 rounded-full">
            {itemSum?.length}
          </span>
          <Image src="/shopping.png" width={50} height={50} alt="Cart" />
        </div>
      </Link>
    </div>
  );
};

export default Cart;
