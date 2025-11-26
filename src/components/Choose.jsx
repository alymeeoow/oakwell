import React, { useEffect, useRef, useState } from "react";
import { 
  FaShip, 
  FaMicroscope, 
  FaTractor, 
  FaShippingFast,
  FaBalanceScale
} from "react-icons/fa";
import "../assets/styles/choose.css";

import DirectImporterImage from "../assets/images/choose/truck-importer.png";
import LabSpecialtyImage from "../assets/images/choose/diag-lab.png";
import FarmSupportImage from "../assets/images/choose/end-to-end.png";
import FastShippingImage from "../assets/images/choose/fast-delivery.png";
import AllScalesImage from "../assets/images/choose/support.png";

const reasons = [
  {
    title: "Direct Importer",
    description: "We're not a reseller—we import directly, cutting costs and ensuring quality control from source to delivery.",
    icon: <FaShip />,
    image: DirectImporterImage 
  },
  {
    title: "Diagnostic & Lab Specialty",
    description: "Specialized expertise in agricultural diagnostics with lab-grade testing solutions.",
    icon: <FaMicroscope />,
    image: LabSpecialtyImage
  },
  {
    title: "End-to-End Farm Support",
    description: "Everything you need under one platform—from testing to supplies to feed inputs.",
    icon: <FaTractor />,
    image: FarmSupportImage
  },
  {
    title: "Fast Turnaround",
    description: "Quick processing and nationwide shipping to keep your operations running smoothly.",
    icon: <FaShippingFast />,
    image: FastShippingImage
  },
  {
    title: "Built for All Scales",
    description: "Supporting commercial operations like Miller Poultry and small-scale homesteads alike.",
    icon: <FaBalanceScale />,
    image: AllScalesImage
  }
];

const WhyChooseOakwell = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`why-choose-section ${isVisible ? 'visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">
            <span>WHY  CHOOSE  OAKWELL</span>
          
          </h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="reason-image-container">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="reason-image"
                />
                <div className="reason-icon">{reason.icon}</div>
              </div>
              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOakwell;