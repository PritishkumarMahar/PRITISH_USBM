import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>E-commerce Shopping Cart</h1>
        <Cart />
        <ProductList />
      </div>
    </CartProvider>
  );
};

export default App;
