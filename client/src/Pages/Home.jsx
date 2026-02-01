import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import "../Css/Home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <Layout>
      <div className="home">

        {/* ================= HERO ================= */}
        <section className="hero">
          <motion.div
            className="hero-left"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.span className="badge" variants={fadeUp}>
              Elite Creative Studio
            </motion.span>

            <motion.h1 className="hero-title" variants={fadeUp}>
              Crafting <span>Digital Experiences</span> <br />
              That Grow Your Business
            </motion.h1>

            <motion.p className="hero-text" variants={fadeUp}>
              We design premium websites, branding, and digital solutions
              that elevate your brand and convert visitors into clients.
            </motion.p>

            <motion.div variants={fadeUp}>
              <button className="btn-primary">
                Explore Services <i className="fas fa-arrow-right"></i>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Creative Team"
              className="hero-img floating"
            />
          </motion.div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="services">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span>Premium Services</span>
          </motion.h2>

          <motion.div
            className="services-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Graphic Design */}
           <Link to="/services/graphic-design" className="service-link">
          <motion.div className="service-card" variants={fadeUp}>
         <div className="icon-box">
      <i className="fas fa-palette"></i>
    </div>
    <h3>Graphic Design</h3>
    <p>Branding, logos & marketing visuals</p>
  </motion.div>
</Link>


            {/* Web Development (CLICKABLE) */}
            <Link to="/services/web-development" className="service-link">
              <motion.div className="service-card" variants={fadeUp}>
                <div className="icon-box">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Web Development</h3>
                <p>Modern, fast & SEO-friendly sites</p>
              </motion.div>
            </Link>

            {/* Content Writing */}
             <Link to="/services/content-writing" className="service-link">
            <motion.div className="service-card" variants={fadeUp}>
              <div className="icon-box">
                <i className="fas fa-pen-nib"></i>
              </div>
              <h3>Content Writing</h3>
              <p>SEO blogs & high-converting copy</p>
            </motion.div>
            </Link>

            {/* Business Licensing */}
               <Link to="/services/business-licensing" className="service-link">
            <motion.div className="service-card" variants={fadeUp}>
              <div className="icon-box">
                <i className="fas fa-shield-halved"></i>
              </div>
              <h3>Business Licensing</h3>
              <p>Compliance & legal registrations</p>
          
            </motion.div>
                </Link>
          </motion.div>
          
        </section>

        {/* ================= GROWTH ================= */}
        <section className="growth">
          <motion.div
            className="growth-box"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="growth-text">
              <h2>
                Websites Built <span>For Growth</span>
              </h2>
              <ul>
                <li><i className="fas fa-check"></i> Mobile-First Design</li>
                <li><i className="fas fa-check"></i> High Performance</li>
                <li><i className="fas fa-check"></i> Conversion Optimized</li>
              </ul>
              <button className="btn-secondary">
                Get Started <i className="fas fa-rocket"></i>
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              alt="Business Growth"
              className="growth-img floating"
            />
          </motion.div>
        </section>

        {/* ================= CORE TEAM ================= */}
        <section className="team">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span>Core Team</span>
          </motion.h2>

          <motion.div
            className="team-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="team-card" variants={fadeUp}>
              <img src="https://i.pravatar.cc/300?img=12" alt="Narendra Yadav" />
              <h3>Narendra Yadav</h3>
              <span>Founder</span>
              <p>
                Founder of The 7 Art Narration with 8+ years of experience in
                branding, design & marketing strategy.
              </p>
            </motion.div>


<motion.div className="team-card" variants={fadeUp}>
  <img
    src="https://i.pravatar.cc/300?img=12"
    alt="Saurabh Kandhare"
  />
  <h3>Saurabh Kandhare</h3>
  <span>Co-Founder</span>
  <p>
    Handles business operations and ensures seamless execution of
    creative projects.
  </p>
</motion.div>




            <motion.div className="team-card" variants={fadeUp}>
              <img src="https://i.pravatar.cc/300?img=47" alt="Chaitali Vairate" />
              <h3>Chaitali Vairate</h3>
              <span>Co-Founder</span>
              <p>
                SEO & content strategist with 5+ years of experience in digital
                marketing and storytelling.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= TESTIMONIAL ================= */}
        {/* <section className="testimonial">
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src="https://i.pravatar.cc/100" alt="client" />
            <p>
              “The 7 Art Narration transformed our online presence.
              Stunning design & flawless execution.”
            </p>
            <h4>— Sara M, Marketing Director</h4>
          </motion.div>
        </section> */}

      </div>
    </Layout>
  );
};

export default Home;
