import React from 'react'

const ShimmerUI = () => {
  return (
    <div className='min-h-screen  w-full text-6xl p-3 animate-pulse'>
     <div className="badges my-1 flex flex-row justify-around">
        <button className="btn btn-wide bg-gray-400 border-none text-4xl h-15" > </button>
        <button className="btn btn-wide bg-gray-400 border-none text-4xl h-15" ></button>

      </div>
      <div className="flex flex-wrap justify-around mt-5">
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>

      </div>
    </div>
  )
}

export default ShimmerUI