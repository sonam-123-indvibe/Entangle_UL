import React, { useEffect, useState } from 'react';
import "./Herosection.css"

const messages = [
  "We build scalable Full Stack & Android Applications.",
  "Custom solutions tailored for your business.",
  "Frontend, Backend, Database – everything you need!"
];

const HeroSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < messages[currentLine].length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + messages[currentLine][charIndex]);
        setCharIndex((prev) => prev + 1);
      },60); // typing speed
      return () => clearTimeout(timeout);
    } else {
      const lineTimeout = setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % messages.length);
        setTypedText('');
        setCharIndex(0);
      }, 3000); // wait before showing next line
      return () => clearTimeout(lineTimeout);
    }
  }, [charIndex, currentLine]);

  return (
    <div className="bg-img" style={{ position: 'relative' }}>
       {/* <div style={{ position: 'absolute', width: '100px', zIndex: 4 , left:"80%",top: "20px"}}>
      <Lottie animationData={animationData} loop={true} />
    </div>
    <div style={{ position: 'absolute', width: '360px', zIndex: 4 , left:"0%",top: "20px"}}>
      <Lottie animationData={animationData2} loop={true} />
    </div> */}
      <div
        className="overlap"
        style={{
          // backgroundColor: 'rgba(11, 25, 34, 0.12)',
          backdropFilter: 'blur(3px)',
          top: 0,
          left: 0,
          zIndex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        {/* Hero Section */}
        <section className="hero d-flex align-items-center">
          <div className="container text-center pt-5">
            <h3 className='welcome'>Welcome To</h3>
            <h1 className="glow-underline-heading">Entengle IT Solution</h1>
           

            <h3 className=" mt-3" style={{
                color:"greenyellow"
            }}>{typedText}<span className="blinker">|</span></h3>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section py-5 text-center">
          <div className="container">
            <h2 className="mb-3">Have a Project in Mind?</h2>
            <p>Let’s connect and build something great together.</p>
            <a href="#ContactUs" className="btn contact-btn mt-3">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
