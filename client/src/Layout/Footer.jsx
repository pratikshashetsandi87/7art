import React from "react";
import { Link } from "react-router-dom";
import "../Css/Footer.css";
import logo from "../assets/images/7art.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col footer-brand fade-up">
          <img src={logo} alt="7 Art Logo" className="footer-logo" />

          {/* <p className="footer-brand-text">
            We craft premium digital experiences through design,
            development and creative storytelling.
          </p> */}

          {/* <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul> */}
        </div>

        {/* CONTACT */}
        <div className="footer-col fade-up delay-1">
          <h3 className="footer-heading">Contact</h3>

          <p><i className="fas fa-envelope"></i> the7artnarration@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 906 754 0748</p>
          <p><i className="fas fa-location-dot"></i> Jaipur, Rajasthan</p>

          <div className="footer-social">
            <a href="https://www.instagram.com/the7artnarration" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/919067540748" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="footer-col footer-image-col fade-up delay-2">
          <div className="footer-image-card">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Creative Team"
            />
            <div className="image-overlay">
              <h4>Let’s Build Something Great</h4>
              <span>Creative • Digital • Premium</span>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom fade-up delay-3">
        © 2026 <span>7 Art Narration</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
