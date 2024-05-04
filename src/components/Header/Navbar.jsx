import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/aptaLogo.png"

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <div className="navLeft">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="navMenus">
            <ul>
                <li>
                    <a href="#">Discover</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">More</a>
                </li>
            </ul>
        </div>
        </div>
        <div className="sideButtons">
            <button>Join</button>
            <button>Login</button>
        </div>
      </nav>
    </div>
  )
}
