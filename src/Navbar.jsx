import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-neutral text-neutral-content">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"> Fooders </a>
   
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
    <li><a>About us </a></li>
    <li><a>Contact us </a></li>
      <li><a>Cart</a></li>
      
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
