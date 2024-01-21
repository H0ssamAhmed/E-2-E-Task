"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useFetch from "../hooks/useFetch";
import Link from "next/link";
import CheckoutForm from "../_components/Form";

const Cart = () => {



    const { fetchedData, handllRemoveFromCart } = useFetch()

    let allItems = []
    const items = fetchedData?.filter((item) => {
        if (item.isAddedToCart) {
            allItems.push(item)
        }
    })

    const totalPrice = allItems?.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
    }, 0);
    document.title = `Cart | ${allItems?.length} Items`

    const removeFromCart = (id) => {
        handllRemoveFromCart(id);
    };

    return (
        < >

            <div className="flex items-center justify-center min-h-screen min-w-screen bg-[#eee] ">
                {items == undefined ?
                    <div className="flex items-center justify-center flex-wrap">
                        <h1 className="text-center text-lg my-auto ">loading...</h1>
                    </div>
                    :
                    <div className="flex flex-col md:flex-row items-start justify-between gap-2 min-h-[80vh] w-[90%] bg-white rounded-md p-4">
                        <div className="h-full w-full px-2 pt-2">
                            <div className=" flex flex-col gap-2 rounded-md w-full h-[90%] overflow-x-auto max-h-[700px]  overflow-auto">
                                {allItems?.length === 0 ?
                                    <div className=" flex items-center justify-center flex-col">
                                        <Image
                                            src='/emptyCard.gif'
                                            width={400}
                                            height={400}
                                            alt="cart"
                                        />
                                        <p className="text-center">No items have been added yet go back to shopping</p>
                                        <Link href='/'>
                                            <button className="bg-[#00b1bd] text-white mt-4 py-1 px-2 rounded-lg">

                                                back
                                            </button>
                                        </Link>
                                    </div>
                                    : allItems?.map((item) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className="card-item p-4 rounded-md bg-[#eee]">
                                                <h1 className=" font-semibold">{item.name}</h1>
                                                <p className=" text-gray-500">{item.description}</p>
                                                <p className=" text-end">{item.price}$</p>
                                                <button className=" text-end">{item.isAddedToCart}</button>
                                                <button>


                                                    <span
                                                        className="bg-red-400 w-full hover:bg-red-600 transition-all text-sm text-white p-2 rounded-lg"
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        Remove
                                                    </span>

                                                </button>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            {allItems?.length != 0 &&
                                <div className="p-1">
                                    <h1 className="m-2 text-lg">Total Itmes: {allItems?.length}</h1>
                                    <h1 className="m-2 text-lg">Total Price: {totalPrice} $</h1>
                                </div>
                            }
                        </div>
                        <div className=" h-full w-full bg-white rounded-md p-4">

                            <CheckoutForm />
                        </div>
                        <Link href='/'>
                            <button className="hover:bg-cyan-400   bg-cyan-600 transition-all text-white mt-3 w-20 py-1 px-2 rounded-lg">
                                Back
                            </button>
                        </Link>
                    </div>
                }



            </div>
        </>

    );
};

export default Cart;


