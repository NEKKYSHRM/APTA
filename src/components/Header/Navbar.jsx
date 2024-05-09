import React, { useEffect, useState } from "react";
import { NavLink , Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/aptaLogo.png";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <nav className={scrollPosition > 100 ? "nav-trp-bg" : "nav-solid-bg"}>
        <div className="navLeft">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navMenus">
            <ul>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `${isActive ? "nav-active" : "nav-notActive"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "nav-active" : "nav-notActive"}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/influencers"
                  className={({ isActive }) =>
                    `${isActive ? "nav-active" : "nav-notActive"}`
                  }
                >
                  Influencers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/brands"
                  className={({ isActive }) =>
                    `${isActive ? "nav-active" : "nav-notActive"}`
                  }
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="sideButtons">
          <button>Join</button>
          <button>Login</button>
        </div>
      </nav>
      <hr />
    </div>
  );
}
