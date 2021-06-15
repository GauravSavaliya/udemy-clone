import React from "react";
import email from "../../images/logo/email.svg";
import password from "../../images/logo/password.svg";

import "./login.css";

function Login() {
  return (
    <form className="form">
      <div className="form__header">Login To Your Udemy Account!</div>
      <div className="form__content">
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
          <button type="submit">Log In</button>
          <span>or </span>
          <a>Forgot your password?</a>
        </div>
      </div>
      <div className="form__footer">
        <div>Don't have an account? Sign up</div>
        <a className="form__link">Log in with your organization</a>
      </div>
    </form>
  );
}

export default Login;
