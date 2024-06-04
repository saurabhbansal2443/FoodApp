import { useState } from "react"

let Accordian = ({obj , show ,setIndex})=>{
    
    return (
        <>
        <div className="text-white text-2xl flex border-2 m-2 justify-between p-2"> <p > {obj.main }</p> <p onClick={setIndex}> ⬇️ </p> </div>
       { show == true ?  <div className="border-2 mx-9 border-gray-600 p-3">{obj.data}</div> :<></>}
        </>
    )
}

export default Accordian