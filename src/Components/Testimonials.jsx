import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/Testimonials.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("https://entangle1-api.onrender.com/testimonial/getTeatimonial");
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const next = () => {
    setStartIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000); // auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  const visibleTestimonials = testimonials.length >= 2
    ? [
        testimonials[startIndex],
        testimonials[(startIndex + 1) % testimonials.length],
      ]
    : testimonials;

    return (
      <div class="blur-border-box">
      <div className="testimonial-bg">
        <section className="testimonial-section" id="testimonials">
          <h2 className="section-title">What Our Students Say!</h2>
    
          {testimonials.length > 0 ? (
            <>
              <div className="testimonial-carousel">
                {visibleTestimonials.map((t, i) => (
                  <div className="testimonial-card" key={t._id || i}>
                    <img
                      src={`https://entangle1-api.onrender.com/${t.image}`}
                      alt={t.name}
                      className="testimonial-image"
                    />
                    <h4>{t.name}</h4>
                    <div className="stars">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                    <p className="review-text text-light">"{t.review}"</p>
                  </div>
                ))}
              </div>
    
              {testimonials.length > 2 && (
                <div className="testimonial-buttons">
                  <button onClick={prev}><FaChevronLeft /></button>
                  <button onClick={next}><FaChevronRight /></button>
                </div>
              )}
            </>
          ) : (
            <p className="loading-message">No testimonials found.</p>
          )}
        </section>
      </div>
      </div>
    );
    
};

export default Testimonials;
