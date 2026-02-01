import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Css/Whatsapp.css"; // 👈 add this

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />

      {/* WHATSAPP CTA */}
      <a
        href="https://wa.me/918766961135"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Layout;
