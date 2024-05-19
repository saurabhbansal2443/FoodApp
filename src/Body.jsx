import React from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
// import data from "./Data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  let [resData, setResData] = useState([]);
  let [filtertedData , setFiltertedData] = useState([]);
  let [serach, setSearch] = useState("");

  useEffect(() => {
    getData();
  },[]);

  let getData = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    let obj = await data.json();
    // console.log(obj);
    setResData([...obj]);
    setFiltertedData([...obj])
  };

  if (resData.length == 0) {
    return <ShimmerUI></ShimmerUI>;
  }
  return (
    <div
      style={{ minHeight: "92.9vh" }}
      className=" bg-slate-200 box-border border-8 "
    >
      <div className="searchBar flex justify-evenly">
        <div className="searchBar flex justify-center">
          <input
            value={serach}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs mx-3"
          />
          <button
            className="btn btn-active"
            onClick={() => {
              let filteredData = resData.filter((obj) => {
                return obj.title.toLowerCase().includes(serach.toLowerCase());
              });

              setSearch("")

              setFiltertedData([...filteredData]);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              let data = filtertedData.filter((obj) => {
                return obj.rating.rate >= 4;
              });
              setFiltertedData([...data]);
            }}
            className="btn btn-wide"
          >
            Top rated{" "}
          </button>

          <button
            className="btn btn-wide mx-3"
            onClick={() => {
              setFiltertedData([...resData]);
            }}
          >
            {" "}
            All Cards{" "}
          </button>
        </div>
      </div>

      <div className="cardContainer mt-5 flex flex-wrap justify-around">
        {filtertedData.map((obj) => (
         <Link key={obj.id} to={`/product/${obj.id} `}> <ResCard obj={obj} ></ResCard></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
