import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/Contact.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const whatsappNumber = "919926651477"; 

    const fullMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="contact-section position-relative">
      <div className="line-pattern"></div>
      <motion.div
        className="contact-card container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h2 className="text-center mb-4 contact-heading">Contact Us</h2>
        <form onSubmit={handleWhatsApp}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control styled-input"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                className="form-control styled-input"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control styled-input"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control styled-input"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="btn submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send on WhatsApp
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
