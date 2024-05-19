import React , {useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
import useGetProduct from './utils/useGetProduct';


const ProductPage = () => {

    // let [obj, setObj] = useState(null)
   

    const {proID} = useParams();

    const obj = useGetProduct(proID)

    // useEffect(() => {
    //     getData();
    // },[])

    // useEffect(() => {
    //   let id = setInterval(() => {
    //     console.log("setInterval ")
    //   },1000)

    //   return () => {
    //     clearInterval(id)
    //   }
    // },[])

    // let getData=async ()=>{
    //     let data = await fetch(`https://fakestoreapi.com/products/${proID}`)
    //     let obj = await data.json();

    //     setObj(obj)
       
    // }

    if (obj == null){

  return (
    <div>
      <div>
     <div className="card w-64  bg-base-100 shadow-2xl m-7 h-96">
  <figure className="h-1/2 bg-white" ><img className='h-full mt-1'  alt="Shoes" /></figure>
  <div className=" card-body p-3 h-1/4 ">
    <h2 className="text-xl h-3/4  overflow-scroll ">
      
    </h2>
    
    <div className="card-actions h-1/4 justify-center mt-2">
      <div className="badge badge-outline"> Rs </div> 
      <div className="badge badge-outline"></div>
      <div className="badge badge-outline"> ⭐️ </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}else{
    return (
        <div>
        <div className="card w-64  bg-base-100 shadow-2xl m-7 h-96">
     <figure className="h-1/2 bg-white" ><img className='h-full mt-1' src={obj.image} alt="product" /></figure>
     <div className=" card-body p-3 h-1/4 ">
       <h2 className="text-xl h-3/4  overflow-scroll ">
         {obj.title}
       </h2>
       
       <div className="card-actions h-1/4 justify-center mt-2">
         <div className="badge badge-outline">{obj.price} Rs </div> 
         <div className="badge badge-outline">{obj.category}</div>
         <div className="badge badge-outline">{obj.rating.rate} ⭐️ </div>
       </div>
     </div>
   </div>
       </div>
    )
}


}

export default ProductPage
