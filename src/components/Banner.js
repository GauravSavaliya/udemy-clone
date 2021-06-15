import { ReactComponent as Search } from "../images/logo/search.svg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__modal">
        <h1>Dream up</h1>
        <p>
          Ambition accepted. Learn the latest skills to reach your professional
          goals.
        </p>
        <form className="banner__form">
          <input placeholder="What do you want to learn?" />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
