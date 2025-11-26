import { useState, useEffect } from "react";
import { 
  FaFlask, 
  FaShieldAlt,
  FaWarehouse,
  FaShoppingCart,
  FaCommentAlt,
  FaStar,
  FaBolt
} from "react-icons/fa";
import "../assets/styles/hero.css";
import ChickenFeed from "../assets/images/bg/chicken-feeds.webp";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="grain-overlay"></div>
      </div>

      <div className={`hero-container ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line-main">America's Source for</span>
            <span className="title-highlight">Farm-Grade Excellence</span>
          </h1>
          
          <p className="subtitle">
            Direct supply chain solutions for poultry farms, homesteads, 
            agricultural processors, and rural operations of all sizes.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaWarehouse className="feature-icon-animated" />
              </div>
              <div className="feature-content">
                <h4>Direct Importer</h4>
                <p>No Middlemen, Better Prices</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaFlask className="feature-icon-animated" />
              </div>
              <div className="feature-content">
                <h4>Lab-Grade Diagnostics</h4>
                <p>Precision Testing Equipment</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaShieldAlt className="feature-icon-animated" />
              </div>
              <div className="feature-content">
                <h4>Biosecurity Testing</h4>
                <p>Comprehensive Protection</p>
              </div>
            </div>
          </div>

          <div className="cta-group">
            <button className="cta-btn-primary">
              <FaShoppingCart className="btn-icon" />
              Shop Products
            </button>
            <button className="cta-btn-secondary">
              <FaCommentAlt className="btn-icon" />
              Request Quote
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <div className="image-glow"></div>
            <img 
              src={ChickenFeed}
              alt="Premium agricultural supplies and testing equipment"
              className="hero-image-main"
            />

            <div className="floating-card card-1">
              <div className="card-icon">
                <FaStar />
              </div>
              <div className="card-content">
                <strong>100% Quality</strong>
                <span>Guaranteed</span>
              </div>
            </div>
            
            <div className="floating-card card-2">
              <div className="card-icon">
                <FaBolt />
              </div>
              <div className="card-content">
                <strong>Fast Delivery</strong>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;