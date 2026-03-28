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

            <Link to="/services/graphic-design" className="service-link">
              <motion.div className="service-card" variants={fadeUp}>
                <div className="icon-box">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>Graphic Design</h3>
                <p>Branding, logos & marketing visuals</p>
              </motion.div>
            </Link>

            <Link to="/services/web-development" className="service-link">
              <motion.div className="service-card" variants={fadeUp}>
                <div className="icon-box">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Web Development</h3>
                <p>Modern, fast & SEO-friendly sites</p>
              </motion.div>
            </Link>

            <Link to="/services/content-writing" className="service-link">
              <motion.div className="service-card" variants={fadeUp}>
                <div className="icon-box">
                  <i className="fas fa-pen-nib"></i>
                </div>
                <h3>Content Writing</h3>
                <p>SEO blogs & high-converting copy</p>
              </motion.div>
            </Link>

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

            {[
              {
                name: "Narendra Yadav",
                role: "Founder",
                img: "https://i.pravatar.cc/300?img=12",
                text: "Founder with 8+ years of experience in branding & marketing."
              },
              {
                name: "Saurabh Kandhare",
                role: "Co-Founder",
                img: "https://i.pravatar.cc/300?img=47",
                text: "Ensures seamless execution of creative projects."
              },
              {
                name: "Chaitali Vairate",
                role: "Co-Founder",
                img: "https://i.pravatar.cc/300?img=32",
                text: "SEO strategist with strong storytelling expertise."
              },
              // {
              //   name: "Akansha Atole",
              //   role: "Web Designer",
              //   img: "https://i.pravatar.cc/300?img=5",
              //   text: "Crafts stunning, user-focused digital experiences."
              // }
            ].map((member, i) => (
              <motion.div key={i} className="team-card" variants={fadeUp}>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p>{member.text}</p>

                <div className="team-social">
                  <i className="fab fa-linkedin"></i>
                  <i className="fas fa-envelope"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </section>

      </div>
    </Layout>
  );
};

export default Home;
