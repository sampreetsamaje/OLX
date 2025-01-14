import React, { useState } from "react";
import "./LandingPage.css";
import LoginSignupPopup from "./LoginSignupPopup";

function LandingPage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const categories = [
    "Cars",
    "Bikes",
    "Mobiles",
    "Electronics",
    "Furniture",
    "Fashion",
    "Books",
    "Pets",
  ];

  const featuredProducts = [
    {
      id: 1,
      title: "iPhone 14 Pro",
      price: "$999",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      title: "Gaming Laptop",
      price: "$1500",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      title: "Mountain Bike",
      price: "$350",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      title: "Sofa Set",
      price: "$450",
      image: "https://via.placeholder.com/200",
    },
  ];

  const locations = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Multan",
    "Faisalabad",
  ];

  const handleLoginClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlb21KJRogcAvRRwHp41h0Ax3zCFKCFXy7QZ4n3IVjE1g4K4eNyvl3_iHd8kA_AEE7xh0&usqp=CAU"
            alt="OLX logo"
            id="logo"
          />
        </div>

        <select className="location-selector">
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
            className="search-bar"
          />
          <button className="sebtn"></button>
        </div>
        <div className="language-selector">
          <select className="language-dropdown">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>

        <button className="sell-btn">
          <span className="sell-icon"></span>
          Sell
        </button>
      </header>

      {/* Banner Section */}
      <div className="banner">
        <div className="category-dropdown">
          <select id="categories" name="categories" className="category-select">
            <option value="">ALL CATEGORIES</option>
            <option value="cars">Cars</option>
            <option value="motorcycles">Motor Cycles</option>
            <option value="mobile-phones">Mobile Phones</option>
            <option value="scooters">Scooters</option>
            <option value="commercials">Commercials & Other Vehicles</option>
            <option value="for-rent">For Rent: Houses & Apartments</option>
          </select>
        </div>

        <div>
          <ul className="catlist">
            <li>
              <a href="#">Cars</a>
            </li>
            <li>
              <a href="#">Motorcycles</a>
            </li>
            <li>
              <a href="#">Mobile Phones</a>
            </li>
            <li>
              <a href="#">Scooters</a>
            </li>
            <li>
              <a href="#">Commercials & Other Vehicles</a>
            </li>
            <li>
              <a href="#">For Rent: Houses & Apartments</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Listings</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 OLX Clone. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> |{" "}
          <a href="#">Contact Us</a>
        </div>
      </footer>

      {/* Login/Signup Popup */}
      {isPopupVisible && <LoginSignupPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default LandingPage;
