import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";
import "../Css/ContentWriting.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const ContentWriting = () => {
  return (
    <Layout>
      <div className="content">

        {/* HERO */}
        <section className="content-hero">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            Content <span>Writing</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Powerful content that educates, engages & converts.
          </motion.p>
        </section>
          

           {/* CONTACT CARD */}
        <section className="content-team">
          <motion.div className="team-card-webdev" variants={fadeUp} initial="hidden" whileInView="show">
            <img src="https://i.pravatar.cc/300?img=47" alt="Saurabh Kandhare" className="team-avatar" />
            <h3>Chaitali Vairate</h3>
            <span className="team-role">Content Writing</span>

            <p><i className="fas fa-envelope"></i> the7artnarration@gmail.com</p>
            <p><i className="fas fa-phone"></i>+91 955 248 2801</p>
            <p><i className="fas fa-globe"></i> the7artnarration.com</p>
          </motion.div>
        </section>


        {/* SERVICES */}
        <section className="content-services">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Our <span>Content Services</span>
          </motion.h2>

          <motion.div className="content-grid" variants={stagger} initial="hidden" whileInView="show">
            {[
              "Website Content Writing",
              "SEO Blog Writing",
              "Graphic Design Content",
              "Storytelling & Brand Content"
            ].map((item, i) => (
              <motion.div key={i} className="content-card" variants={fadeUp}>
                <h3>{item}</h3>
                <p>
                  High-quality content crafted to improve engagement,
                  brand voice and search visibility.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROCESS */}
        <section className="content-process">
          <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
            Our <span>Process</span>
          </motion.h2>

          <div className="process-steps">
            {["Research", "Plan", "Write", "Optimize", "Deliver"].map((step, i) => (
              <motion.div key={i} className="process-step" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }}>
                <span>{i + 1}</span>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        

      </div>
    </Layout>
  );
};

export default ContentWriting;
