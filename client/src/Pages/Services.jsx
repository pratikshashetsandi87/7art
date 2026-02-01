import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import "../Css/Services.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } }
};

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <Layout>
      <div className="services-page">

        {/* HERO */}
        <section className="services-hero">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            Our <span>Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Complete branding & digital solutions crafted to grow your business.
          </motion.p>
        </section>

        {/* SERVICES */}
        <section className="services-section">
          <motion.div
            className="services-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            {/* GRAPHIC DESIGN */}
             <Link to="/services/graphic-design" className="service-link">
            <motion.div className="service-card" variants={fadeUp}>
              <div className="icon-box"><i className="fas fa-palette"></i></div>
              <h3>Graphic Design</h3>
              <ul>
                <li>Logo & Brand Identity</li>
                <li>Marketing Creatives</li>
                <li>Social Media Designs</li>
              </ul>
            </motion.div>
            </Link>

            {/* ✅ WEB DEVELOPMENT (CLICKABLE) */}
            <Link to="/services/web-development" className="service-link">
              <motion.div
                id="web-development"
                className="service-card highlight clickable"
                variants={fadeUp}
              >
                <div className="icon-box">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Web Development</h3>
                <ul>
                  <li>Custom Websites</li>
                  <li>React / MERN Apps</li>
                  {/* <li>SEO Optimization</li> */}
                  <li>E-Commerce Solutions</li>
                </ul>
              </motion.div>
            </Link>

            {/* CONTENT */}
             <Link to="/services/content-writing" className="service-link">
            <motion.div className="service-card" variants={fadeUp}>
              <div className="icon-box"><i className="fas fa-pen-nib"></i></div>
              <h3>Content Writing</h3>
              <ul>
                <li>SEO Blogs</li>
                <li>Website Copy</li>
                <li>Brand Storytelling</li>
              </ul>
            </motion.div>
            </Link>

            {/* LICENSING */}
             <Link to="/services/business-licensing" className="service-link">
            <motion.div className="service-card" variants={fadeUp}>
              <div className="icon-box"><i className="fas fa-shield-halved"></i></div>
              <h3>Business Licensing</h3>
              <ul>
                <li>Company Registration</li>
                <li>GST / MSME</li>
                <li>Trademark</li>
              </ul>
            </motion.div>
             </Link>
          </motion.div>
        </section>

      </div>
    </Layout>
  );
};

export default Services;
