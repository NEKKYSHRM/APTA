import React from "react";
import "./footer.css";
import logo from "../../assets/aptaLogo.png";

export default function footer() {
  return (
    <div className="web-footer">
      <footer>
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="footer-logo" />
          </div>
          <div className="footer-nav">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-nav">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-nav">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
