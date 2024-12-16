// import React from "react";
import Carousel from "./Carousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our E-commerce Store</h1>
      <Carousel />
      <div className="dummy-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <p>Product 1</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <p>Product 2</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <p>Product 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
