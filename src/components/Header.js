import { ReactComponent as CartSvg } from "../images/logo/cart.svg";
import { ReactComponent as Search } from "../images/logo/search.svg";
import UdemyLogo from "../images/logo/udemy.svg";
import "./Header.css";

const Header = () => {
  const cartItemNumber = 1;

  return (
    <header className="header">
      <img src={UdemyLogo} alt="logo" className="header__logo" />
      <div className="header__search">
        <p>Categories</p>
        <form className="header__searchbar">
          <input placeholder="Search for anything" />
          <button type="submit">
            <Search />
          </button>
        </form>
        <p>Udemy for Buisness</p>
        <p>Teach on Udemy</p>
      </div>
      <div className="header__right">
        <div className="header__cart">
          <CartSvg className="header__cartLogo" />
          {cartItemNumber > 0 && (
            <span className="header__quantity">{cartItemNumber}</span>
          )}
        </div>
        <button className="header__btn header__login">Log in</button>
        <button className="header__btn header__signup">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
