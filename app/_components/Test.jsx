"use client";
import data from "../data.json";

import React from "react";

const Test = () => {
  // var data = [
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     description: "High-performance laptop with the latest specifications",
  //     price: 999.99,
  //   },
  //   {
  //     id: 2,
  //     name: "Smartphone",
  //     description: "Flagship smartphone with advanced camera features",
  //     price: 799.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Coffee Maker",
  //     description: "Automatic coffee maker with programmable settings",
  //     price: 69.99,
  //   },
  //   {
  //     id: 4,
  //     name: "Headphones",
  //     description: "Wireless noise-canceling headphones for immersive audio",
  //     price: 129.99,
  //   },
  //   {
  //     id: 5,
  //     name: "Fitness Tracker",
  //     description:
  //       "Track your daily activities and monitor health with this fitness tracker",
  //     price: 49.95,
  //   },
  //   // Add more objects as needed
  // ];

  // Sort the data by the "name" field
  const sortByName = () => {
    data.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    console.log(data);
  };

  // Display the sorted data
  for (var i = 0; i < data.length; i++) {
    // return (
    //   <tr>
    //     <td>{data[i].name}</td>
    //     <td>{data[i].description}</td>
    //     <td>{data[i].id}</td>
    //   </tr>
    // );
    // console.log(JSON.stringify(data[i], null, 4));
  }
  return <div>Test</div>;
};

export default Test;
