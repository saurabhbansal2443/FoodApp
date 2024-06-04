import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './utils/CartSlice';




const ResCard = ({obj}) => {
   
    let {image , price ,title ,category , rating} =obj;

    let dispatch = useDispatch();

    let handleAddbtn = (event) => {
    
        dispatch(addItem(obj))
    }
   
  return (
    <div>
     <div className="card w-64  bg-base-100 shadow-2xl m-7 h-96">
  <figure className="h-1/2 bg-white" ><img className='h-full mt-1' src={image} alt="Shoes" /></figure>
  <div className=" card-body p-3 h-1/4 ">
    <h2 className="text-xl h-3/4  overflow-scroll ">
      {title}
    </h2>
    
    <div className="card-actions h-2/4 justify-center mt-2">
      <div className="badge badge-outline">{price} Rs </div> 
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating.rate} ⭐️ </div>
      <button onClick={handleAddbtn} className=" w-1/3 btn btn-sm  border-2 border-red-600 ">Add</button>
    </div>

   
  </div>
</div>
    </div>
  )
}


export let promotedProduct = (ResCard) => {
  return (props) => {
    return (
      <div className='relative'>
      <div className="absolute left-9 rounded-lg mt-1 p-1 z-10 bg-black text-white "> Latest </div>
      <ResCard {...props}></ResCard>
      </div>
      
    )
  }
}

export default ResCard
