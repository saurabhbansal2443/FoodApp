import React from 'react'
import { useState , useContext } from "react"
import { Link } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useSelector } from 'react-redux';


const Navbar = () => {

  let [btnName, setBtnName] = useState("Login");

  const data = useContext(UserContext);

  let {loggedInUser ,setLoggedInUser} = data

  // Getting data form the store 

  const cartItems = useSelector((store)=>store.cart.items )
 
  return (
    <div>
      <div className="navbar  bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl"> GetFlix </Link>

        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li><Link to="/about">About us </Link></li>
            <li><Link to="/contact">Contact us </Link></li>
            <li><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24" fill="bakck"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg ><sup className='text-lg relative right-2 bottom-8'>{cartItems.length}</sup></Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <button className="btn btn-warning " onClick={() => {setLoggedInUser({name:"yash"})}}>{btnName}</button>
            <button className='mx-3'>{loggedInUser.name}</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
