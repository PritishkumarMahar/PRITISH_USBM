// import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
