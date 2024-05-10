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
          <div className="footer-nav-col">
            <div className="footer-nav">
              <ul>
                <li><b>About Us</b></li>
                <li>Home</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Support</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-nav">
              <ul>
                <li><b>Services</b></li>
                <li>Influencers</li>
                <li>Brands</li>
                <li>Partners</li>
                <li>About</li>
                <li>Team</li>
              </ul>
            </div>
            <div className="footer-nav">
              <ul>
                <li><b>Careers</b></li>
                <li>Press</li>
                <li>Events</li>
                <li>Help</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="footer-form">
            <h3>Subscribe</h3>
            <p>Join our mailing list for latest updates.</p>
            <div className="footer-form-inp">
              <input id="footer-form-inpBox" type="email" placeholder="Enter email adress" />
              <button type="submit">Submit</button>
            </div>
            <p>
              By, subscribing you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
        <div className="copyright-sec">
            <hr />
            <div className="copyrightText">
              <span>&copy; 2024 <b>APTA. </b> All rights reserved.</span>
              <p>Privacy Policy</p>
              <p>Terms of Services</p>
              <p>Cookie Settings</p>
            </div>
          </div>
      </footer>
    </div>
  );
}
