"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../hooks/useFetch";

const Cart = () => {
  return (
    <div className="relative flex flex-col">
      <Link href="/Cart">
        <div className="relative cursor-pointer">
          <span className="absolute flex justify-center items-center -top-4 right-0 text-white w-6  h-6 p-2 rounded-full"></span>
          <Image src="/shopping.png" width={50} height={50} alt="Cart" />
        </div>
      </Link>
    </div>
  );
};

export default Cart;
