import React, { useState, useEffect } from "react";
import { 
  FaVial, 
  FaFeather, 
  FaShieldVirus, 
  FaMicroscope,
  FaFlask,
} from "react-icons/fa";
import "../assets/styles/testing.css";

import AvianTestingImage from "../assets/images/testing/swab.jpg";
import NewcastleTestingImage from "../assets/images/testing/electron-micro-graph.png";
import SalmonellaTestingImage from "../assets/images/testing/salmonella.png";
import EnvironmentalTestingImage from "../assets/images/testing/environment.jpg";
import MultiPathogenImage from "../assets/images/testing/screening.jpg";

const testingServices = [
  {
    title: "Avian Influenza PCR",
    description: "Rapid detection and monitoring of avian influenza strains with high-sensitivity PCR testing",
    icon: <FaFeather />,
    image: AvianTestingImage,
    color: "#10b981",
  },
  {
    title: "Newcastle Disease",
    description: "Early identification and prevention of Newcastle disease virus in poultry operations",
    icon: <FaShieldVirus />,
    image: NewcastleTestingImage,
    color: "#059669",
  },
  {
    title: "Salmonella & E. coli Panels",
    description: "Comprehensive food safety and biosecurity testing for bacterial pathogens",
    icon: <FaFlask />,
    image: SalmonellaTestingImage,
    color: "#047857",
  },
  {
    title: "Environmental Testing",
    description: "Facility and equipment monitoring for pathogen contamination and biosecurity compliance",
    icon: <FaMicroscope />,
    image: EnvironmentalTestingImage,
    color: "#065f46",
  },
  {
    title: "Multi-pathogen Poultry PCR Panels",
    description: "Comprehensive disease screening for multiple poultry pathogens in a single test",
    icon: <FaVial />,
    image: MultiPathogenImage,
    color: "#134e4a",
  }
];

const TestingServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".testing-services-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`testing-services-section ${isVisible ? "visible" : ""}`} id="testing">
      <div className="testing-container">
        {/* Centered Header */}
        <div className="testing-header-centered">
          <h2 className="testing-title-main">
          TESTING SERVICES
          
          </h2>
          
        </div>

        {/* Organized 5-Card Grid */}
        <div className="testing-grid-organized">
          {testingServices.map((service, index) => (
            <div 
              className="testing-service-card" 
              key={index}
              style={{ '--accent-color': service.color }}
            >
              <div className="testing-image-container">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="testing-service-image"
                  loading="lazy"
                />
                <div className="testing-icon-badge">
                  {service.icon}
                </div>
              </div>

              <div className="testing-content">
                <h3 className="testing-service-title">{service.title}</h3>
                <p className="testing-service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingServices;