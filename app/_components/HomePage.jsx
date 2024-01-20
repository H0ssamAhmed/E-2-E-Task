"use client";
import React, { useState } from "react";
import useSort from "../hooks/useSort";
import jsonData from "../data.json";
import Range from "./Range";
import Search from "./Search";
import Cart from "./Cart";
import Image from "next/image";

const HomePage = () => {
  const [data, setData] = useState(jsonData);
  const sort = useSort();
  const [isAdded, setIsAdded] = useState(true);
  let added = [];

  const handleByName = () => {
    setData(jsonData);
    sort.sortByName();
  };
  const handleByPrice = () => {
    setData(jsonData);
    sort.sortByPrice();
  };
  const handleById = () => {
    setData(jsonData);
    sort.sortById();
  };
  const addOrRemoveFromCard = (item) => {
    item.isAddedToCart = true;
  };
  return (
    <div>
      <div className="m-4">
        <div className="flex justify-evenly items-center flex-wrap">
          <h1 className="text-center text-xl">Can Sort By:</h1>
          <div className="flex gap-4 my-4 items-center">
            <button
              onClick={handleByName}
              className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
            >
              Name
            </button>
            <button
              onClick={handleByPrice}
              className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
            >
              price
            </button>
            <button
              onClick={handleById}
              className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
            >
              id
            </button>
          </div>
          <Range setRangeData={setData} />

          <Cart items={data} />
        </div>
        <Search data={data} setData={setData} />
        <div className="flex gap-1 justify-center  flex-wrap">
          {data.map((item) => {
            return (
              <div
                className="card-item w-[300px] p-4 rounded-md bg-[#eee]"
                key={item.id}
              >
                <h1 className=" font-semibold">{item.name}</h1>
                <p className="text-gray-500">{item.description}</p>
                <p className=" text-end">{Number.parseInt(item.price)}$</p>
                <button
                  className={`${item.isAddedToCart ? "bg-red-400" : ""}`}
                  onClick={() => addOrRemoveFromCard(item)}
                >
                  <Image
                    // className={`${item.isAddedToCart ? "bg-red-400" : ""}`}
                    width={30}
                    height={30}
                    alt="Favorite"
                    src="/fav.png"
                  />
                </button>
              </div>
            );
          })}
          {data.length == 0 && (
            <p className="text-gray-500">Nothing in selected range available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
