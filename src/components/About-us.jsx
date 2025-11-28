import { useState, useEffect } from "react";
import {
  FaLeaf,
  FaFlask,
  FaShieldAlt,
  FaWarehouse,
} from "react-icons/fa";
import "../assets/styles/about.css";

import Silo from "../assets/images/about/silo.png";
import Hen from "../assets/images/about/hens-ai.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".about-section");
    if (section) obs.observe(section);

    return () => obs.disconnect();
  }, []);

  const features = [
    {
      title: "High-Quality Agricultural Supplies",
      description: "Premium tools and equipment for modern farming operations.",
      icon: <FaLeaf />,
    },
    {
      title: "Poultry & Livestock Diagnostics",
      description: "Professional-grade testing and monitoring solutions.",
      icon: <FaFlask />,
    },
    {
      title: "Biosecurity & Environmental Testing",
      description: "Comprehensive protection for agricultural operations.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Direct-Import Feed Ingredients",
      description: "Cost-effective soy meal and essential feed inputs.",
      icon: <FaWarehouse />,
    },
  ];

  return (
    <section className={`about-section ${isVisible ? "visible" : ""}`} id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-left">
            <h1 className="about-title-large">
              ABOUT <br /> OAKWELL
            </h1>

            <p className="about-subtitle-text">
              Oakwell Distribution is a U.S.-based agricultural distribution and diagnostics company
              dedicated to supporting farmers, poultry operations, and rural communities with reliable access
              to premium supplies, imported feed inputs, and lab-grade testing solutions.
            </p>

            <div className="about-image-card">
              <img
                src={Silo}
                alt="Agricultural operations"
                className="about-image"
              />
            </div>
          </div>

          <div className="about-right">
                        <div className="about-features-simple">
              {features.map((item, index) => (
                <div className="about-feature-simple-card" key={index}>
                  <div className="about-feature-simple-icon">{item.icon}</div>
                  <div className="about-feature-simple-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

                        <div className="about-philosophy-card">
              <img
                src={Hen}
                alt="Farm Mission"
                className="about-philosophy-image"
              />
              <div className="about-philosophy-content">
                <h3>Our Mission</h3>
                <p>
                 Oakwell's mission is to strengthen America's agriculture by ensuring farmers have direct, affordable access to essential farm supplies, diagnostic tools, and imported feed inputs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;