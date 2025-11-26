import { useState, useEffect } from "react";
import { FaVial, FaShieldAlt, FaFlask, FaSeedling, FaTools, FaShippingFast } from "react-icons/fa";
import "../assets/styles/specialties.css";
import Tree from "../assets/images/logos/logo1.png";

const Specialties = () => {
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

    const section = document.querySelector(".specialties-section");
    if (section) obs.observe(section);

    return () => obs.disconnect();
  }, []);

  const specialties = [
    {
      icon: <FaVial />,
      title: "Avian Influenza & Poultry PCR Test Kits",
    },
    {
      icon: <FaShieldAlt />,
      title: "Environmental Swabs & Biosecurity Gear",
    },
    {
      icon: <FaFlask />,
      title: "Lab Testing Integration",
    },
    {
      icon: <FaSeedling />,
      title: "Imported Soy Meal & Feed Inputs",
    },
    {
      icon: <FaTools />,
      title: "Farm Tools, PPE & Sanitation Products",
    },
    {
      icon: <FaShippingFast />,
      title: "Nationwide Direct-to-Farm Shipping",
    }
  ];

  return (
    <section className={`specialties-section ${isVisible ? "visible" : ""}`}>
      <div className="specialties-container">
        {/* Mobile & Tablet Layout: Title on top */}
        <div className="specialties-top">
          <h1 className="specialties-title-large">
            OUR <br />
            SPECIAL<span className="t-logo-wrapper">
              <img src={Tree} alt="Tree Logo" className="t-logo" />
            </span>IES
          </h1>
        </div>

        {/* Cards Section */}
        <div className="specialties-cards">
          <div className="box-grid-mobile">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                className={`box-item ${isVisible ? "animate-in" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="box-icon">
                  {specialty.icon}
                </div>
                <div className="box-content">
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (hidden on mobile) */}
        <div className="specialties-grid-desktop">
          <div className="specialties-left">
            <div className="box-grid-left">
              {specialties.slice(0, 4).map((specialty, index) => (
                <div 
                  key={index} 
                  className={`box-item ${isVisible ? "animate-in" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="box-icon">
                    {specialty.icon}
                  </div>
                  <div className="box-content">
                    <h3>{specialty.title}</h3>
                    <p>{specialty.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="specialties-right">
            <div className="specialties-header">
              <h1 className="specialties-title-large">
                OUR <br />
                SPECIAL<span className="t-logo-wrapper">
                  <img src={Tree} alt="Tree Logo" className="t-logo" />
                </span>IES
              </h1>
            </div>

            <div className="box-grid-right">
              {specialties.slice(4, 6).map((specialty, index) => (
                <div 
                  key={index + 4} 
                  className={`box-item ${isVisible ? "animate-in" : ""}`}
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="box-icon">
                    {specialty.icon}
                  </div>
                  <div className="box-content">
                    <h3>{specialty.title}</h3>
                    <p>{specialty.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;