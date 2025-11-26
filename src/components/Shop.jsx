import { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import '../assets/styles/shop.css';

import Header from './Header';
import ProductImage from '../assets/images/bg/chicken-feed.webp';

const ShopProducts = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Poultry Testing Kit",
      description: "Complete diagnostic kit for poultry health monitoring and disease detection.",
      price: 149.99,
      oldPrice: 199.99,
      category: "Testing & Diagnostics",
      rating: 4.8,
      reviews: 124,
      image: ProductImage
    },
    {
      id: 2,
      name: "Farm Biosecurity Set",
      description: "Essential biosecurity equipment for maintaining farm safety standards.",
      price: 299.99,
      category: "Biosecurity",
      rating: 4.9,
      reviews: 89,
      image: ProductImage
    },
    {
      id: 3,
      name: "Feed Supplement Pack",
      description: "Nutritional supplements for optimal poultry growth and health.",
      price: 89.99,
      oldPrice: 119.99,
      category: "Feed & Nutrition",
      rating: 4.7,
      reviews: 156,
      image: ProductImage
    },
    {
      id: 4,
      name: "Laboratory Equipment Set",
      description: "Professional lab equipment for agricultural testing and analysis.",
      price: 499.99,
      category: "Lab Equipment",
      rating: 4.9,
      reviews: 67,
      image: ProductImage
    },
    {
      id: 5,
      name: "Farm Safety Gear",
      description: "Protective equipment for farm workers and animal handlers.",
      price: 199.99,
      category: "Safety Equipment",
      rating: 4.6,
      reviews: 203,
      image: ProductImage
    },
    {
      id: 6,
      name: "Poultry Housing Supplies",
      description: "Essential supplies for modern poultry housing and management.",
      price: 399.99,
      category: "Farm Supplies",
      rating: 4.8,
      reviews: 98,
      image: ProductImage
    },
    {
      id: 7,
      name: "Advanced Incubation System",
      description: "State-of-the-art incubation technology for optimal hatch rates.",
      price: 799.99,
      category: "Lab Equipment",
      rating: 4.9,
      reviews: 45,
      image: ProductImage
    },
    {
      id: 8,
      name: "Organic Feed Formula",
      description: "Premium organic feed blend for healthy poultry growth.",
      price: 129.99,
      category: "Feed & Nutrition",
      rating: 4.7,
      reviews: 178,
      image: ProductImage
    },

     {
      id: 9,
      name:"Natural Grain Mix",
      description: "Wholesome natural grain blend for optimal poultry health and egg production",
      price: 199.99,
      category: "Feed & Nutrition",
      rating: 4.7,
      reviews: 92,
      image: ProductImage
    },



    
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [favorites, setFavorites] = useState({});
  const [sortBy, setSortBy] = useState('featured');
  const [cartCount, setCartCount] = useState(0);
  
  const categories = ['All Products', 'Testing & Diagnostics', 'Biosecurity', 'Feed & Nutrition', 'Lab Equipment', 'Safety Equipment', 'Farm Supplies'];
  const priceRanges = ['All Prices', 'Under $100', '$100 - $300', '$300 - $500', 'Over $500'];

  const filterByPrice = (product) => {
    if (selectedPriceRange === 'All Prices') return true;
    if (selectedPriceRange === 'Under $100') return product.price < 100;
    if (selectedPriceRange === '$100 - $300') return product.price >= 100 && product.price <= 300;
    if (selectedPriceRange === '$300 - $500') return product.price >= 300 && product.price <= 500;
    if (selectedPriceRange === 'Over $500') return product.price > 500;
    return true;
  };

  const filteredProducts = products
    .filter(product => selectedCategory === 'All Products' || product.category === selectedCategory)
    .filter(filterByPrice);

  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="shop-container">

        <Header />
    
      <button className="cart-button">
        <ShoppingCart className="cart-icon" />
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>

      <div className="shop-content">
      
        <div className="page-header">
          <h2 className="page-title">Shop All Products</h2>
          <p className="page-subtitle">Premium agricultural equipment and supplies</p>
        </div>


        <div className="filter-bar">
          <div className="filter-group">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select 
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="filter-select"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div className="sort-group">
            <span className="sort-label">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

    
        <p className="product-count">{filteredProducts.length} products found</p>

 
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
         
              <div className="product-image-wrapper">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                
              
                {product.oldPrice && (
                  <span className="sale-badge">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                )}

             
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`wishlist-button ${favorites[product.id] ? 'active' : ''}`}
                >
                  <Heart className={`heart-icon ${favorites[product.id] ? 'filled' : ''}`} />
                </button>

       
                <button 
                  className="quick-add-button"
                  onClick={addToCart}
                >
                   Add to Cart
                </button>
              </div>

    
              <div className="product-info">
        
                <div className="rating-wrapper">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="review-count">({product.reviews})</span>
                </div>

           
                <div className="product-category-tag">{product.category}</div>

          
                <h3 className="product-title">{product.name}</h3>

           
                <p className="product-desc">{product.description}</p>

           
                <div className="price-row">
                  <div className="price-wrapper">
                    <span className="current-price">${product.price}</span>
                    {product.oldPrice && (
                      <span className="original-price">${product.oldPrice}</span>
                    )}
                  </div>
                  <button 
                    className="add-cart-button"
                    onClick={addToCart}
                  >
                    <ShoppingCart className="cart-icon-small" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

     
        <div className="pagination">
          <button className="page-button">Previous</button>
          <button className="page-button active">1</button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
          <button className="page-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;