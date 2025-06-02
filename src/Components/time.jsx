import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/home.css";
import HeroSection from "./Herosection";
import coursebox from '../assets/Animation/course2.json';
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const Home = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourse(res.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  // Motion variants for animated letters
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // delay between letters
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  const headingText = "Our Courses";

  return (
    <>
      <HeroSection />

      <div className="circle-bg">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>


      {/* Animated Background Circles */}
    

      <div className="course-bg content-wrapper">
        <div className="container pt-0 position-relative">
         
         <div className="heading-wrapper d-flex justify-content-center align-items-center flex-wrap text-center position-relative mb-5">
 
  <div className="course-lottie">
    <Lottie animationData={coursebox} loop={true} />
  </div>

 
  <motion.h2
    className="advanced-heading d-flex gap-1 justify-content-center flex-wrap"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
  >
    {headingText.split("").map((char, index) => (
      <motion.span key={index} variants={letterVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.h2>
</div>


          {/* Course Cards */}
          <div className="row g-4">
            {course.map((courses, index) => (
              <div className="col-md-12" key={index}>
                <div className="d-flex align-items-center flex-wrap text-white">
                  <div className="course-img-circle">
                    <img src={`http://localhost:5000/${courses.image}`} alt="" />
                  </div>
                  <h4 className="course-title">{courses.name}</h4>
                </div>

                <div className="row g-2 mt-3 justify-content-center">
                  {courses.subcategories.map((sub, idx) => (
                    <div className="col-md-2 col-sm-6 col-12 mb-4 ms-4 me-4" key={idx}>
                      <div className="animated-border-card">
                        <div className="inner-card text-center">
                          <img
                            src={`http://localhost:5000/${sub.image}`}
                            alt={sub.name}
                            className="card-img-top"
                            style={{ height: "140px", objectFit: "contain", padding: "1rem" }}
                          />
                          <h5 className="card-title pt-2 pb-3">{sub.name}</h5>
                          <button className="view-btn">View Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="circle-bg">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </>
  );
};

export default Home;
