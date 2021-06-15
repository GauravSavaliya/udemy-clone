import "./Cart.css";
import courses from "../../data/courses";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__top">
        <h3>Shopping Cart </h3>
      </div>
      <div className="cart__info">
        <div className="cart__items">
          <p className="cart__itemsnumber">1 Courses in Cart</p>
          {courses.map((item) => (
            <CheckoutProduct
              key={item.id}
              imageURL={item.imageURL}
              title={item.title}
              author={item.author}
              currPrice={item.currPrice}
            />
          ))}
        </div>
        <Subtotal />
      </div>
      <div className="cart__checkout"></div>
    </div>
  );
};

export default Cart;
