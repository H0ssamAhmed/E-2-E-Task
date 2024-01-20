import React, { useState } from "react";
import useSort from "../hooks/useSort";

const Range = ({ setRangeData }) => {
  const sort = useSort();
  const [minRange, setMinRange] = useState("");
  const [maxRange, setMaxRange] = useState("");

  const changeMinValue = (e) => {
    setMinRange(e.target.value);
    sort.setMinRange(e.target.value);
  };
  const changeMaxValue = (e) => {
    setMaxRange(e.target.value);
    sort.setMaxRange(e.target.value);
  };
  const submitting = (e) => {
    e.preventDefault();
    setRangeData(sort.sortByRange());
    setMinRange("");
    setMaxRange("");
  };
  return (
    <form
      className="flex items-center justify-center gap-2"
      onSubmit={submitting}
    >
      <input
        required
        className="border bg-gray-300 rounded-md h-10 w-28 pl-4"
        type="number"
        onChange={changeMinValue}
        value={minRange}
        placeholder="Min"
      />
      <input
        required
        className="border bg-gray-300 rounded-md h-10 w-28 pl-4"
        type="number"
        onChange={changeMaxValue}
        value={maxRange}
        placeholder="Max"
      />
      <button
        type="submit"
        className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
      >
        Sort
      </button>
    </form>
  );
};

export default Range;
