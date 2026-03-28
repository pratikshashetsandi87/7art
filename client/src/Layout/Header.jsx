import React from "react";
import "../Css/Header.css";
import { motion } from "framer-motion";
import logo from "../assets/images/7art.png";

function Header() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* LEFT LOGO (IMAGE + TEXT) */}
      <div className="logo-left">
  <img src={logo} alt="7 Art Logo" className="logo-img-left" />
  {/* <span className="logo-text">THE 7 ART</span> */}
</div>


      {/* CENTER NAV */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        {/* <li><a href="/portfolio">Portfolio</a></li> */}
        <li><a href="/contact">Contact</a></li>
      </ul>
    </motion.nav>
  );
}

export default Header;
