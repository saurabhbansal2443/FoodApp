import React from 'react'



const ResCard = ({obj}) => {
   
    let {image , price ,title ,category , rating} =obj;
    // console.log(obj);
  return (
    <div>
     <div className="card w-64  bg-base-100 shadow-2xl m-7 h-96">
  <figure className="h-1/2 bg-white" ><img className='h-full mt-1' src={image} alt="Shoes" /></figure>
  <div className=" card-body p-3 h-1/4 ">
    <h2 className="text-xl h-3/4  overflow-scroll ">
      {title}
    </h2>
    
    <div className="card-actions h-1/4 justify-center mt-2">
      <div className="badge badge-outline">{price} Rs </div> 
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating.rate} ⭐️ </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ResCard
