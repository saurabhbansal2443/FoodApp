import { useEffect, useState } from "react";

const useGetProduct = (proID) => {
  let [obj, setObj] = useState(null);
  let getData = async () => {
    let data = await fetch(`https://fakestoreapi.com/products/${proID}`);
    let obj = await data.json();

    setObj(obj);
  };

  useEffect(() => {
    getData(proID);
  }, []);

  return obj;
};

export default useGetProduct;
