import React from "react";
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
    
      <div className="footer-content">
        <div className="footer-col about">
          <p>
            Your go-to OTT platform for movies, TV shows, and trending content.
            Enjoy an endless cinematic experience from the comfort of your home.
          </p>
          <div className="social-links">
            <a href="#"><FaFacebookF className="social-icon icon-bg1" /></a>
            <a href="#"><FaTwitter className="social-icon icon-bg2" /></a>
            <a href="#"><FaInstagram className="social-icon icon-bg3" /></a>
            <a href="#"><FaPinterestP className="social-icon icon-bg4" /></a>
          </div>
        </div>
        <div className="footer-col">
          <h6 className="heading-col">Explore</h6>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>Genres</li>
          </ul>
        </div>

        <div className="footer-col">
          <h6 className="heading-col">Help & Policies</h6>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h6 className="heading-col">Contact Us</h6>
          <p><FaMapMarkerAlt className="me-2" /> 123 OTT Street, CineCity</p>
          <p><FaPhone className="me-2" /> Call: 123-456-7890</p>
          <p><FaEnvelope className="me-2" /> Email: support@cinzey.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Cinzey OTT.  All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
