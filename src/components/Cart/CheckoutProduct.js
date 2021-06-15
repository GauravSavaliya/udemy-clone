import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ imageURL, title, author, currPrice }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageURL} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__author">By {author}</p>
      </div>
      <div className="checkoutProduct__right">
        <p>₹{currPrice}</p>
        <button className="remove__button">Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
