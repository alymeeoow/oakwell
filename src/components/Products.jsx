import React, { useState, useEffect } from "react";
import { 
  FaShieldAlt, 
  FaMicroscope, 
  FaSeedling, 
  FaTractor,
} from "react-icons/fa";
import "../assets/styles/products.css";

import PoultryBiosecurityImage from "../assets/images/products/poultry-security.png";
import LabSuppliesImage from "../assets/images/products/laboratory.png";
import FeedIngredientsImage from "../assets/images/products/chick-chick.jpg";
import FarmSuppliesImage from "../assets/images/products/supplies.jpg";

const productCategories = [
  {
    title: "Poultry Biosecurity & Testing Supplies",
    description: "Complete biosecurity solutions for poultry operations of all sizes",
    icon: <FaShieldAlt />,
    image: PoultryBiosecurityImage,
  },
  {
    title: "Laboratory & Diagnostic Supplies",
    description: "Professional-grade lab equipment and testing materials",
    icon: <FaMicroscope />,
    image: LabSuppliesImage,
  },
  {
    title: "Soy Meal & Feed Inputs",
    description: "Direct-import feed ingredients at competitive pricing",
    icon: <FaSeedling />,
    image: FeedIngredientsImage,
  },
  {
    title: "General Farm Supplies",
    description: "Essential tools and equipment for daily farm operations",
    icon: <FaTractor />,
    image: FarmSuppliesImage,
  }
];

const Products = () => {
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

    const section = document.querySelector(".product-category-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`product-category-section ${isVisible ? "visible" : ""}`} id="products">
      <div className="product-category-bg">
        <div className="grain-overlay"></div>
      </div>
      
      <div className="product-category-container">
                <div className="product-category-header-centered">
          <h2 className="product-category-title-main">
            <span>PRODUCT CATEGORIES</span>
          
          </h2>
        </div>

                <div className="product-category-grid-single">
          {productCategories.map((category, index) => (
            <div 
              className="product-category-card" 
              key={index}
            >
              <div className="product-category-image-container">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="product-category-image"
                />
                <div className="category-icon-badge">
                  {category.icon}
                </div>
              </div>

              <div className="product-category-content">
                <h3 className="product-category-title">{category.title}</h3>
                <p className="product-category-description">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 

export default Products;