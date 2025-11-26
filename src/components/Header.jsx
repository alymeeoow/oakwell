import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/header.css";
import GetQuoteModal from "./requestQuoteForm";

import OakwellLogo from "../assets/images/logos/logo.png"
import OakwellLogoWord from "../assets/images/logos/nameOnly.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setMenuOpen(false);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSectionClick = (sectionId) => {
    setMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="header-oak">
        <div className="container-nav-oak">
          <Link to="/" className="logo-oak" onClick={handleNavClick}>
            <div className="logo-container-oak">
              <img src={OakwellLogo} alt="Oakwell Logo" className="left-side-oak" />
              <img src={OakwellLogoWord} alt="Oakwell Logo" className="right-side-oak"></img>
            </div>
          </Link>

          <nav className={`nav-links-oak ${menuOpen ? "open-oak" : ""}`}>
       
            <button 
              className="nav-link-oak"
              onClick={() => handleSectionClick('about')}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                font: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              About
            </button>

            <button 
              className="nav-link-oak"
              onClick={() => handleSectionClick('products')}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                font: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Products
            </button>

            <button 
              className="nav-link-oak"
              onClick={() => handleSectionClick('testing')}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                font: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Testing
            </button>
       
        
            <Link to="/shop" className="nav-link-oak" onClick={handleNavClick}>
              Shop
            </Link>
            
            <div className="nav-spacer-oak"></div>

            <button className="get-quote-btn" onClick={handleOpenQuoteModal}>
              Get Quote
            </button>
          </nav>

          <button className="menu-btn-oak" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="hamburger-oak"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      <GetQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={handleCloseQuoteModal} 
      />
    </>
  );
};

export default Header;