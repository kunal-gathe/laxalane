import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import './footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <h2>LAXELANE</h2>
        <p>
          "Discover, Shop, and Elevate Your Style. Your Ultimate Fashion
          Destination Awaits. Explore Now!"
        </p>
      </div>
      <div className="social-media">
        <h3>Social Media</h3>
        <ul className="socia-icon">
          <p>
            <BsFacebook />
          </p>
          <p>
            <BsInstagram />
          </p>
          <p>
            <BsTwitter />
          </p>
        </ul>
      </div>
      <div className="adress">
        <h3>Address</h3>
        <p>
          Laxelane Headquarters 410 Terry Ave N, Seattle, WA 98109, United States
        </p>
      </div>
    </div>
  );
}

export default Footer;
