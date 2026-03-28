import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";
import "../Css/About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" }
  })
};

function About() {
  return (
    <Layout>
      <div className="about-page">

        {/* ================= HERO ================= */}
        <section className="about-hero">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            About <span>The 7 Art Narration</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            One Roof. One Vision. Complete Brand Solution.
          </motion.p>
        </section>

        {/* ================= INTRO ================= */}
        <section className="about-section">
          <motion.div
            className="about-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="about-card" variants={fadeUp}>
              <h3>Who We Are</h3>
              <p>
                <b>The 7 Art Narration</b> is a creative brand studio built to
                eliminate fragmented digital services. We provide complete
                branding, design, development, and content solutions under one roof.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={fadeUp} custom={2}>
              <h3>Our Mission</h3>
              <p>
                To empower brands with strong visual identity, meaningful content,
                and modern digital solutions that create lasting impressions and
                business growth.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={fadeUp} custom={3}>
              <h3>Our Vision</h3>
              <p>
                To build a future where brands communicate with clarity, creativity,
                and consistency across all digital platforms.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="about-services">
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    Our <span>Services</span>
  </motion.h2>

  <div className="services-grid">
    {[
      {
        title: "Brand Identity",
        desc: "Logo design, brand strategy & visual identity",
        icon: "fas fa-pen-nib",
      },
      {
        title: "Graphic Design",
        desc: "Creative visuals, banners & marketing graphics",
        icon: "fas fa-palette",
      },
      {
        title: "Web Development",
        desc: "Modern, fast & SEO-friendly websites",
        icon: "fas fa-laptop-code",
      },
      {
        title: "Social Media",
        desc: "Marketing creatives & growth strategies",
        icon: "fas fa-bullhorn",
      },
      {
        title: "Content Writing",
        desc: "SEO blogs & high-converting copywriting",
        icon: "fas fa-file-alt",
      },
      // {
      //   title: "Business Consulting",
      //   desc: "Licensing, compliance & startup consulting",
      //   icon: "fas fa-briefcase",
      // },
    ].map((service, i) => (
      <motion.div
        className="service-box"
        key={i}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        <i className={`${service.icon} service-icon`}></i>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


        {/* ================= CONTACT INFO ================= */}
        <section className="about-contact">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Get In <span>Touch</span>
          </motion.h2>

          <motion.div
            className="contact-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p><b>Company:</b> The 7 Art Narration</p>
            <p><b>Email:</b> info@7artnarration.com</p>
            <p><b>Phone / WhatsApp:</b> +91 87669 61135</p>
            <p><b>Location:</b> India</p>

            <div className="contact-highlight">
              Let’s build your brand together.
            </div>
          </motion.div>
        </section>

      </div>
    </Layout>
  );
}

export default About;
