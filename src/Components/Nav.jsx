import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  House,
  BookOpen,
  Image,
  Briefcase,
  Building2,
  Phone,
  Cog ,
} from "lucide-react";
import "../assets/Home.css";


function Nav() {
  const sections = [
    { id: "hero", label: "Home", icon: House },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "service", label: "Services", icon: Cog  },
    { id: "OurStudent", label: "Placement", icon: Briefcase },
    { id: "TieupCompanies", label: "Tie-up", icon: Building2 },
    { id: "ContactUs", label: "Contact Us", icon: Phone },
    // { id: "ContactUs", label: "Contact Us", icon: Phone },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [indicatorLabel, setIndicatorLabel] = useState("Home");
  const navRefs = useRef({});

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          if (
            scrollPos >= element.offsetTop &&
            scrollPos < element.offsetTop + element.offsetHeight
          ) {
            setActiveLink(`#${section.id}`);
            setIndicatorLabel(section.label);
            moveIndicator(section.id);
          }
        }
      });
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

const moveIndicator = (id) => {
  const el = navRefs.current[id];
  const navContainer = document.querySelector(".navbar-nav"); // parent container

  if (el && navContainer) {
    const rect = el.getBoundingClientRect();
    const parentRect = navContainer.getBoundingClientRect();

    setIndicatorStyle({
      left: rect.left - parentRect.left + rect.width / 2, 
      // top: rect.bottom - parentRect.top + 8,              
    });
  }
};


  useEffect(() => {
    moveIndicator("hero");
  }, []);

  const navbarStyle = {
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.25)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.7)" : "none",
    transition: "all 0.5s ease",
  };

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-light ms-3" href="#">
          Entengle
        </a>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end me-5"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex gap-3 position-relative">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <li key={section.id} className="nav-item">
                  <a
                    ref={(el) => (navRefs.current[section.id] = el)}
                    href={`/#${section.id}`}
                    className={`nav-link d-flex flex-column align-items-center ${
                      activeLink === `#${section.id}` ? "active-nav" : ""
                    }`}
                    onMouseEnter={() => {
                      setIndicatorLabel(section.label);
                      moveIndicator(section.id);
                    }}
                    onMouseLeave={() => {
                      const activeId = activeLink.replace("#", "");
                      setIndicatorLabel(
                        sections.find((s) => s.id === activeId)?.label
                      );
                      moveIndicator(activeId);
                    }}
                  >
                    <Icon className="nav-icon" />
                  </a>
                </li>
              );
            })}

       <div
  className="indicator"
style={{
  left: `${indicatorStyle.left || 0}px`,
  top: `12px`,
}}
>
  <div className="bubbles">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div key={indicatorLabel} className="indicator-label">
    {indicatorLabel}
  </div>
</div>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

