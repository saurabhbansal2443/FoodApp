import React from 'react'

const Body = () => {
    return (
        <div style={{ height: "92.9vh" }} className=' bg-slate-200 box-border border-8 '>
            <div className="searchBar flex justify-center">
                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs mx-3" />
                <button className="btn btn-active">Search</button>
                <div className="cardContainer">

                </div>
            </div>
        </div>
    )
}

export default Body
