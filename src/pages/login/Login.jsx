import React, { useRef } from "react";
import "./login.css";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">snapshot</h3>
          <span className="loginDesc">
            connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <form className="loginRight" onSubmit={handleClick}>
          <div className="loginBox">
            <input
              placeholder="Email"
              className="loginInput"
              type="email"
              required
              ref={email}
            />

            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forget Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
