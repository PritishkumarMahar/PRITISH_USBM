// import React from "react";
import { useCart } from "../context/CartContext";
import "./ProductList.css";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 200 },
  { id: 4, name: "Product 4", price: 250 },
];

const ProductList = () => {
  const { dispatch } = useCart();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
