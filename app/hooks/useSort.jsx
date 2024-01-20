import React, { useState, useEffect } from "react";
import jsonData from "../data.json";

const useSort = () => {
  const [typeOfSorting, setTypeOfSorting] = useState("Sorted by Id");
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);

  const sortByName = () => {
    let sortedNames = jsonData.sort(function (a, b) {
      var nameA = a.name;
      var nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setTypeOfSorting("Sorted by Name");
    return sortedNames;
  };
  const sortByPrice = () => {
    let sortedPrices = jsonData.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
    setTypeOfSorting("Sorted by Price");

    return sortedPrices;
  };
  const sortById = () => {
    let sortedId = jsonData.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    setTypeOfSorting("Sorted by Id");
    return sortedId;
  };

  const sortByRange = () => {
    let itemsInRange = jsonData.filter((range) => {
      if (range.price >= minRange && range.price <= maxRange) {
        return range;
      }
    });
    setTypeOfSorting("Sorted by Range");
    return itemsInRange;
  };
  return {
    sortByName,
    sortByPrice,
    sortById,
    sortByRange,
    setMinRange,
    setMaxRange,
    typeOfSorting,
  };
};

export default useSort;
