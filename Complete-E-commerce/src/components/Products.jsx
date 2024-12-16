// import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 1" />
          <p>Product 1</p>
          <p>Price: ₹1000</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 2" />
          <p>Product 2</p>
          <p>Price: ₹1500</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
