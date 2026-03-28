import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";
import "../Css/WebDevelopment.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const WebDevelopment = () => {
  return (
    <Layout>
      <div className="webdev">

        {/* HERO */}
        <section className="webdev-hero">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Web <span>Development</span>
          </motion.h1>

             <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Powerful websites designed to grow your business.
          </motion.p>
          {/* OUR TEAM */}
<section className="webdev-team">


  {/* <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Our <span>Team</span>
  </motion.h2> */}

  <motion.div
    className="team-card-webdev"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {/* AVATAR */}
    <img
      src="https://i.pravatar.cc/150?img=47"
      alt="Akansha Atole"
      className="team-avatar"
    />

    <h3>prstiksha shetsandi</h3>
    <span className="team-role">Web Designer</span>

    <p>
      <i className="fas fa-phone"></i>
      +91 8766961135
    </p>

    <p>
      <i className="fas fa-envelope"></i>
      pratikshashetsandi90@gmail.com
    </p>
  </motion.div>
</section>

         
        </section>

 {/* WHAT WE DO */}
<section className="webdev-services">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="webdev-services-title"
  >
    Our <span>Services</span>
  </motion.h2>

  <motion.div
    className="webdev-grid"
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {[
      // {
      //   title: "Business Website",
      //   desc: "Professional business websites designed to build trust, showcase services, and convert visitors into clients."
      // },
      {
        title: "E-Commerce Website",
        desc: "Secure and scalable online stores with payment gateways, product management, and smooth checkout experience."
      },
      {
        title: "Portfolio Website",
        desc: "Creative and modern portfolio websites to highlight your work, skills, and personal brand."
      },
      {
        title: "Corporate Website",
        desc: "Enterprise-level corporate websites with structured layouts, performance optimization, and brand consistency."
      },
      {
        title: "Custom Web Application",
        desc: "Tailor-made web applications with dashboards, admin panels, and advanced business functionality."
      }
    ].map((service, i) => (
      <motion.div key={i} className="webdev-card" variants={fadeUp}>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </motion.div>
    ))}
  </motion.div>
</section>

        {/* PROCESS */}
        <section className="webdev-process">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span>Process</span>
          </motion.h2>

          <div className="process-steps">
            {["Plan", "Design", "Develop", "Test", "Launch"].map((step, i) => (
              <motion.div
                key={i}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span>{i + 1}</span>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="webdev-cta">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Let’s Build Your <span>Website</span>
            </h2>
            <p>Modern design. Clean code. Real results.</p>
            <button className="btn-primary">
              Start Project <i className="fas fa-rocket"></i>
            </button>
          </motion.div>
        </section>

      </div>
    </Layout>
  );
};

export default WebDevelopment;
