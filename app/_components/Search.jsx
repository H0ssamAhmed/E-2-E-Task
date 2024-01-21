import React, { useEffect, useState } from "react";
// import originData from "../data.json";
// import useFetch from "../hooks/useFetch";
const Search = ({ setData, data }) => {
  // const { fetchedData } = useFetch(url);

  const [searchValue, setSearchValue] = useState("");
  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    let filteredData = [];
    if (searchValue != "") {
      data?.map((item) => {
        if (item.name.toLocaleLowerCase().startsWith(searchValue)) {
          filteredData.push(item);
        }
        setData(filteredData);
      });
    } else setData(data);
  }, [searchValue]);

  return (
    <div className="p-4 w-4/5 mx-auto">
      <input
        className="border bg-gray-300 rounded-md h-10 w-full pl-4 focus:outline-none focus:bg-cyan-300"
        type="text"
        onChange={changeSearchValue}
        value={searchValue}
        placeholder="Search by item name"
      />
    </div>
  );
};

export default Search;
