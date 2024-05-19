import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'

const Navbar = () => {

  let [btnName, setBtnName] = useState("Login")
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
            <li><Link to="/cart">Cart</Link></li>
            <button className="btn btn-warning " onClick={() => btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login")}>{btnName}</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
