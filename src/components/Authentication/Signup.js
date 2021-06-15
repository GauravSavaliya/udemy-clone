import React from "react";
import email from "../../images/logo/email.svg";
import password from "../../images/logo/password.svg";
import user from "../../images/logo/user.svg";
import "./login.css";

function Signup() {
  return (
    <form className="form">
      <div className="form__header">Sign Up and Start Learning!</div>
      <div className="form__content">
        <div className="form__input">
          <img className="form__icon" src={user} alt="user"></img>
          <input
            name="name"
            placeholder="Enter your name"
            type="text"
            required
          />
        </div>
        <div className="form__input">
          <img className="form__icon" src={email} alt="email"></img>
          <input
            name="email"
            placeholder="Example@gmail.com"
            type="Email"
            required
          />
        </div>
        <div className="form__input">
          <img className="form__icon" src={password} alt="password"></img>
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <div className="form__button">
          <button type="submit" name="submit">
            Sign Up
          </button>
          <span>By signing up, you agree to our </span>
          <a>Terms of Use and Privacy Policy.</a>
        </div>
      </div>
      <div className="form__footer">
        <div>Already have an account? Login</div>
      </div>
    </form>
  );
}

export default Signup;
