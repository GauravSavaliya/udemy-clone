import React from "react";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>Total:</p>
      <h1>₹500</h1>
      <button className="checkOutButton">Checkout</button>
    </div>
  );
}

export default Subtotal;
