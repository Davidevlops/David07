import React from "react";
import { useNavigate } from "react-router-dom";
import loginStyles from "../styles/Login.module.css";

function Login() {
  let navigate = useNavigate();
  return (
    <div className={loginStyles.formContainer}>
      <div className={loginStyles.formHeader}>
        <h5>LOGIN</h5>

        <a
          href="https://www.google.com/"
          className={loginStyles.googleSignUpBtn}
        >
          Continue with Google
        </a>

        <span className={loginStyles.or}>or</span>

        <span className={loginStyles.signUpWithDetails}>
          Login with Details
        </span>
      </div>

      <form action="/signup" method="post">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <a href="#" className={loginStyles.forgotPassword}>
          Forgot Password?
        </a>

        {/* similar class to sign up btn in registration component to reuse the css */}
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate(`/Home`);
          }}
          type="submit"
          className={loginStyles.signUpBtn}
        >
          Login
        </button>

        <div className={loginStyles.loginInstead}>
          <a
            onClick={(event) => {
              event.preventDefault();
              navigate(`/`);
            }}
          >
            Dont't have any account? Sign Up instead
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
