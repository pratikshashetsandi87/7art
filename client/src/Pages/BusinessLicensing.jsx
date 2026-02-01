import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";
import "../Css/BusinessLicensing.css";

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
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const BusinessLicensing = () => {
  return (
    <Layout>
      <div className="license">

        {/* ================= HERO ================= */}
        <section className="license-hero">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Business <span>Licensing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Complete compliance & registration solutions for your business.
          </motion.p>
        </section>

        {/* ================= CONTACT CARD ================= */}
        <section className="license-team">
          <motion.div
            className="team-card-webdev"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="Chaitali Vairate"
              className="team-avatar"
            />

            <h3>Saurabh kandhare</h3>
            <span className="team-role">Business Compliance Executive</span>

            <p>
              <i className="fas fa-envelope"></i>
              the7artnarration@gmail.com
            </p>

            <p>
              <i className="fas fa-phone"></i>
              +91 928 425 8539
            </p>

            <p>
              <i className="fas fa-globe"></i>
              the7artnarration.com
            </p>
          </motion.div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="license-services">
          <motion.h2
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Our Business <span>Services</span>
</motion.h2>


          <motion.div
            className="license-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Company & LLP Registration",
                desc: "Private Limited, LLP, Partnership and Proprietorship registration with complete legal documentation."
              },
              {
                title: "GST & Tax Registrations",
                desc: "GST registration, GST filing, PAN, TAN and ongoing tax compliance support."
              },
              {
                title: "Government Licenses",
                desc: "Trade License, FSSAI, Shop Act, MSME (UDYAM) and other statutory licenses."
              },
              {
                title: "Annual Compliance & Filings",
                desc: "ROC filings, returns, renewals and end-to-end business compliance management."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="license-card"
                variants={fadeUp}
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="license-process">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span>Process</span>
          </motion.h2>

          <div className="process-steps">
            {["Consult", "Document", "Apply", "Verify", "Deliver"].map(
              (step, i) => (
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
              )
            )}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default BusinessLicensing;
