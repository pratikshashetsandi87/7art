import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";
import "../Css/GraphicDesign.css";

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
  show: { transition: { staggerChildren: 0.2 } }
};

const GraphicDesign = () => {
  return (
    <Layout>
      <div className="graphic">

        {/* HERO */}
        <section className="graphic-hero">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Graphic <span>Design</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Visual identities that connect, communicate & convert.
          </motion.p>
        </section>


      {/* CREATIVE LEAD */}
<section className="graphic-team">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Founder & <span>Creative Lead</span>
  </motion.h2>

  <motion.div
    className="team-card-webdev"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {/* AVATAR */}
    <img
      src="https://i.pravatar.cc/150?img=12"
      alt="Narendra Yadav"
      className="team-avatar"
    />

    <h3>Narendra Yadav</h3>
    <span className="team-role">Graphic Designer</span>

   <p>
  <i className="fas fa-envelope"></i>
  the7artnarration@gmail.com
</p>

<p>
  <i className="fas fa-globe"></i>
  the7artnarration.com
</p>

<p>
  <i className="fas fa-phone"></i>
  +91 906 754 0748
</p>

  </motion.div>
</section>

        {/* SERVICES */}
       {/* GRAPHIC DESIGN SERVICES */}
<section className="graphic-services">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Our <span>Design Services</span>
  </motion.h2>

  <motion.div
    className="graphic-grid"
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {[
      {
        title: "Logo Design",
        desc: "Unique, memorable logos crafted to represent your brand identity and values."
      },
      {
        title: "Social Media Templates",
        desc: "Attractive post, story & reel templates designed for engagement and consistency."
      },
      {
        title: "Brand Identity Design",
        desc: "Complete branding including colors, typography and visual guidelines."
      },
      {
        title: "Marketing Creatives",
        desc: "Banners, flyers, posters & promotional designs for digital and print."
      }
    ].map((service, i) => (
      <motion.div key={i} className="graphic-card" variants={fadeUp}>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </motion.div>
    ))}
  </motion.div>
</section>


        {/* PROCESS */}
        <section className="graphic-process">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span>Process</span>
          </motion.h2>

          <div className="process-steps">
            {["Research", "Concept", "Design", "Revise", "Deliver"].map((step, i) => (
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
        <section className="graphic-cta">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Let’s Design Your <span>Brand</span>
            </h2>
            <p>Creative visuals that leave a lasting impression.</p>
            <button className="btn-primary">
              Start Design <i className="fas fa-palette"></i>
            </button>
          </motion.div>
        </section>

      </div>
    </Layout>
  );
};

export default GraphicDesign;
