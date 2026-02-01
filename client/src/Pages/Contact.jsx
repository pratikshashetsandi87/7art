import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../Layout/Layout";
import "../Css/Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* ================= VALIDATION ================= */
  const validateStep1 = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!form.email.includes("@")) {
      toast.error("Please enter a valid email");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (form.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = () => {
    if (!validateStep2()) return;

    setLoading(true);

    const message = `
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}
    `;

    const whatsappURL = `https://wa.me/8766961135?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    toast.success("Opening WhatsApp…");

    setForm({ name: "", email: "", message: "" });
    setStep(1);
    setLoading(false);
  };

  return (
    <Layout>
      <div className="contact-page">
        <ToastContainer theme="dark" />

        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* HEADER */}
          <h2>
            Send a <span>Message</span>
          </h2>
          <p>Let’s discuss your next big idea</p>

          {/* PROGRESS */}
          <div className="progress">
            <span className={step >= 1 ? "active" : ""}>1</span>
            <span className={step >= 2 ? "active" : ""}>2</span>
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -60, opacity: 0 }}
                >
                  <div className="input-group">
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                      placeholder=" "
                    />
                    <label>Your Name</label>
                  </div>

                  <div className="input-group">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                      placeholder=" "
                    />
                    <label>Email Address</label>
                  </div>

                  <button
                    type="button"
                    className="send-btn"
                    onClick={() => validateStep1() && setStep(2)}
                  >
                    Next →
                  </button>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -60, opacity: 0 }}
                >
                  <div className="input-group">
                    <textarea
                      rows="4"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                      placeholder=" "
                    />
                    <label>Your Message</label>
                  </div>

                  <div className="btn-row">
                    <button
                      type="button"
                      className="btn-back"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      className="send-btn whatsapp"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send via WhatsApp"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
