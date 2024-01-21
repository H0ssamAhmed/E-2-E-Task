// "use client";
import React, { useEffect, useState } from "react";
import useSort from "../hooks/useSort";
// import jsonData from "../data.json";
import Range from "./Range";
import Search from "./Search";
import Cart from "./Cart";
import Image from "next/image";
import useFetch from "../hooks/useFetch";
// import updateIsAddedToCart from "./updatData";

const HomePage = () => {
  const url = "http://localhost:8000/data";
  const sort = useSort(url);
  const { fetchedData, handleAddToCart, handllRemoveFromCart } = useFetch(url);

  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setData(fetchedData);
    }, 0);
  }, [fetchedData]);

  const handleByName = () => {
    sort.sortByName(fetchedData);
  };
  const handleByPrice = () => {
    sort.sortByPrice(fetchedData);
  };
  const handleById = () => {
    sort.sortById(fetchedData);
  };
  const addToCart = (id) => {
    handleAddToCart(id);
  };
  const removeFromCart = (id) => {
    handllRemoveFromCart(id);
  };
  return (
    <div>
      <div className="m-4">
        <div className="flex justify-evenly items-center flex-wrap">
          <div className="flex gap-4 my-4 items-center">
            <h1 className="text-center text-xl">Can Sort By:</h1>
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
          <Range setRangeData={setData} data={data} url={url} />

          <Cart />
        </div>
        <Search data={fetchedData} setData={setData} url={url} />
        <div className="flex gap-1 justify-center  flex-wrap">
          {data == null ? (
            <h1>Loading....</h1>
          ) : (
            data?.map((item) => {
              return (
                <div
                  className="card-item w-[300px] p-4 rounded-md bg-[#eee]"
                  key={item.id}
                >
                  <h1 className=" font-semibold">{item.name}</h1>
                  <p className="text-gray-500">{item.description}</p>
                  <p className=" text-end">{item.price}$</p>
                  <button>
                    {!item.isAddedToCart ? (
                      <span
                        className="bg-cyan-400 w-full hover:bg-cyan-600 transition-all text-white p-2 rounded-lg"
                        onClick={() => addToCart(item.id)}
                      >
                        add to cart
                      </span>
                    ) : (
                      <span
                        className="bg-red-400 w-full hover:bg-red-600 transition-all text-white p-2 rounded-lg"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove from cart
                      </span>
                    )}
                  </button>
                </div>
              );
            })
          )}
          {data?.length == 0 && (
            <p className="text-gray-500">Nothing in selected range available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
