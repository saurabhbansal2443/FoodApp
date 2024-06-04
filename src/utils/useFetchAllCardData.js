import { useState, useEffect } from "react";

const useFetchAllCardData = (f1 , f2 ) => {

  useEffect(() => {
    getData();
  }, [f1,f2]);

  let getData = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    let obj = await data.json();
    
    f1([...obj]);
    f2([...obj]);

    console.log("API called ")
  };


};

export default useFetchAllCardData;
