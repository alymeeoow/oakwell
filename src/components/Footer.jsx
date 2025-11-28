import { Link } from "react-router-dom";
import "../assets/styles/footer.css";
import OakwellLogo from "../assets/images/logos/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSectionClick = (sectionId) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer-oak">
      <div className="footer-container-oak">
        <div className="footer-main-oak">
          <div className="footer-brand-oak">
            <div className="logo-name-row">
              <Link to="/" className="footer-logo-oak">
                <img src={OakwellLogo} alt="Oakwell Logo" className="logo-icon-oak" />
              </Link>
              <h3 className="footer-company-name">OAKWELL DISTRIBUTION</h3>
            </div>
            <p className="footer-tagline-oak">
              America's trusted partner for farm-grade testing, agricultural supplies, and premium feed inputs. Serving operations nationwide.
            </p>
          </div>

          <div className="footer-links-oak">
            <div className="footer-column-oak">
              <h4 className="footer-title-oak">Quick Links</h4>
              <button className="footer-link-oak" onClick={() => handleSectionClick("about")}>About Us</button>
              <Link to="/shop" className="footer-link-oak">Shop Marketplace</Link>
              <button className="footer-link-oak" onClick={() => handleSectionClick("testing")}>Testing Services</button>
              <button className="footer-link-oak" onClick={() => handleSectionClick("products")}>Products</button>
            </div>

            <div className="footer-column-oak">
              <h4 className="footer-title-oak">Services</h4>
              <Link to="/biosecurity-testing" className="footer-link-oak">Biosecurity Testing</Link>
              <Link to="/lab-supplies" className="footer-link-oak">Lab Supplies</Link>
              <Link to="/feed-nutrition" className="footer-link-oak">Feed & Nutrition</Link>
              <Link to="/shipping" className="footer-link-oak">Nationwide Shipping</Link>
            </div>

            <div className="footer-column-oak">
              <h4 className="footer-title-oak">Contact</h4>
              <a href="mailto:info@oakwelldistribution.com" className="footer-link-oak">info@oakwelldistribution.com</a>
              <a href="tel:+15551234567" className="footer-link-oak">+1 (555) 123-4567</a>
              <span className="footer-link-oak">Nationwide Shipping</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-oak">
          <div className="footer-copy">
            © {currentYear} Oakwell Distribution. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-legal-separator">•</span>
            <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
            <span className="footer-legal-separator">•</span>
            <Link to="/shipping" className="footer-legal-link">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
