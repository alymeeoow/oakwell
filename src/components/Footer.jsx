import { Link } from "react-router-dom";
import "../assets/styles/footer.css";

import OakwellLogo from "../assets/images/logos/logo.png";
import OakwellLogoWord from "../assets/images/logos/nameOnly.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSectionClick = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer-oak">
      <div className="footer-container-oak">
        <div className="footer-main-oak">
          <div className="footer-brand-oak">
            <Link to="/" className="footer-logo-oak">
              <div className="logo-container-oak">
                <img src={OakwellLogo} alt="Oakwell Logo" className="left-side-oak" />
                <img src={OakwellLogoWord} alt="Oakwell Logo" className="right-side-oak" />
              </div>
            </Link>
            <p className="footer-tagline-oak">
              U.S. agricultural distributor providing premium supplies, imported feed inputs, 
              and lab testing solutions for farmers and poultry operations.
            </p>
          </div>

          <div className="footer-links-oak">
            <div className="footer-column-oak">
              <h4 className="footer-title-oak">Company</h4>
              <button 
                className="footer-link-oak"
                onClick={() => handleSectionClick('about')}
              >
                About Us
              </button>
              <button 
                className="footer-link-oak"
                onClick={() => handleSectionClick('products')}
              >
                Products
              </button>
              <button 
                className="footer-link-oak"
                onClick={() => handleSectionClick('testing')}
              >
                Testing
              </button>
              <Link to="/shop" className="footer-link-oak">
                Shop
              </Link>
            </div>

            <div className="footer-column-oak">
              <h4 className="footer-title-oak">Support</h4>
              <Link to="/contact" className="footer-link-oak">
                Contact Us
              </Link>
              <Link to="/shipping" className="footer-link-oak">
                Shipping Info
              </Link>
              <Link to="/returns" className="footer-link-oak">
                Returns
              </Link>
              <Link to="/faq" className="footer-link-oak">
                FAQ
              </Link>
            </div>

            <div className="footer-column-oak">
              <h4 className="footer-title-oak">Legal</h4>
              <Link to="/privacy" className="footer-link-oak">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer-link-oak">
                Terms of Service
              </Link>
              <Link to="/compliance" className="footer-link-oak">
                Compliance
              </Link>
              <Link to="/lab-reports" className="footer-link-oak">
                Lab Reports
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom-oak">
          <div className="footer-copyright-oak">
            © {currentYear} Oakwell Distribution. All rights reserved.
          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;