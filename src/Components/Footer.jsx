import React from 'react';
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import '../assets/Home.css'; // make sure this file exists and has styles

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Company Info and Main Links */}
          <div className="col-md-4 mb-4">
            <h2 className="text-info">Entengle IT Solution</h2>
            <h5 className="mt-4">Main Links</h5>
            <ul className="list-unstyled">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#courses" className="footer-link">Courses</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h4 className="mb-3">Contact Us</h4>
            <p><FaMapMarkerAlt className="me-2" />
              302 B, 3rd Floor Rajat Complex, 18 Kibey Compound,<br />
              Near Madhumilan Square, Infront of Dawa Bazar, Indore
            </p>
            <p><FaPhoneAlt className="me-2" />
              <a href="tel:9926651477" className="footer-link">9926651477</a>,{' '}
              <a href="tel:9098884202" className="footer-link">9098884202</a>
            </p>
            <p><FaEnvelope className="me-2" />
              <a href="mailto:indvibeinfotech@gmail.com" className="footer-link">
              entengleitsolution@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4">
            <h4 className="mb-3 justify-content-center d-flex">Connect with Us</h4>
            <p>
              <a
                href="https://wa.me/919098884202"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link justify-content-center d-flex align-items-center mb-2"
              >
                <FaWhatsapp className="me-2 fs-4 text-success icon-hover" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/your_institute_username"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link justify-content-center d-flex align-items-center mb-2"
              >
                <FaInstagram className="me-2 fs-4 text-danger icon-hover" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/p/Entengle-It-Solution-100063951406424/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link justify-content-center d-flex align-items-center mb-2"
              >
                <FaFacebook className="me-2 fs-4 text-info icon-hover" />
                Facebook
              </a>
            </p>
          </div>

        </div>

        <hr className="border-secondary" />
        <p className="text-center m-0">
          &copy; 2025 <strong>Entengle IT Solution</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
