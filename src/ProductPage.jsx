import React ,{useState} from "react";
import AccordianData from "./utils/AccordianData"
import { useParams } from "react-router-dom";
import useGetProduct from "./utils/useGetProduct";
import Accordian from "./Accordian";

const ProductPage = () => {
  const { proID } = useParams();

  let [ index , setIndex ] = useState(null);

  const obj = useGetProduct(proID);

  // useEffect(() => {
  //   let id = setInterval(() => { 
  //     console.log("setInterval ")
  //   },1000)

  //   return () => {
  //     clearInterval(id)
  //   }
  // },[])

  if (obj == null) {
    return (
      <div>
        <div>
          <div className="card w-64  bg-base-100 shadow-2xl m-7 h-96">
            <figure className="h-1/2 bg-white">
              <img className="h-full mt-1" alt="Shoes" />
            </figure>
            <div className=" card-body p-3 h-1/4 ">
              <h2 className="text-xl h-3/4  overflow-scroll "></h2>

              <div className="card-actions h-1/4 justify-center mt-2">
                <div className="badge badge-outline"> Rs </div>
                <div className="badge badge-outline"></div>
                <div className="badge badge-outline"> ⭐️ </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card w-64  bg-base-100 shadow-2xl m-7 h-96">
          <figure className="h-1/2 bg-white">
            <img className="h-full mt-1" src={obj.image} alt="product" />
          </figure>
          <div className=" card-body p-3 h-1/4 ">
            <h2 className="text-xl h-3/4  overflow-scroll ">{obj.title}</h2>

            <div className="card-actions h-1/4 justify-center mt-2">
              <div className="badge badge-outline">{obj.price} Rs </div>
              <div className="badge badge-outline">{obj.category}</div>
              <div className="badge badge-outline">{obj.rating.rate} ⭐️ </div>
            </div>
          </div>
        </div>
{console.log(AccordianData)}
        {
          
          AccordianData.map((obj , idx )=>{
            return <Accordian key={idx} obj={obj} setIndex={()=>{index!=idx?setIndex(idx):setIndex(null)}} show={idx == index ? true : false }></Accordian>
          })
        }
      </div>
    );
  }
};

export default ProductPage;
