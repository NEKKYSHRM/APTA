import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/aptaLogo.png"

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition)
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='navbar'>
      <nav className={scrollPosition > 100? 'nav-trp-bg' : 'nav-solid-bg'}>
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
                    <a href="#">Influencers</a>
                </li>
                <li>
                    <a href="#">Brands</a>
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
