import React from "react";
import { useNavigate } from "react-router-dom";
import registrationStyles from "../styles/registration.module.css";

function Registration() {
  let navigate = useNavigate();
  return (
    <div className={registrationStyles.formContainer}>
      <div className={registrationStyles.formHeader}>
        <h5>SIGN UP</h5>

        <a
          href="https://www.google.com/"
          className={registrationStyles.googleSignUpBtn}
        >
          Continue with Google
        </a>

        <span className={registrationStyles.or}>or</span>

        <span className={registrationStyles.signUpWithDetails}>
          Sign up with Details
        </span>
      </div>

      <form action="/signup" method="post">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <p className={registrationStyles.termsOfService}>
          By sigining up, you confirm that you've read and accepted our{" "}
          <a href="example.com">Terms of Sevice</a> and{" "}
          <a href="example.com">Privacy Policy</a>
        </p>

        <button
          onClick={(event) => {
            event.preventDefault();
            navigate(`/Home`);
          }}
          type="submit"
          className={registrationStyles.signUpBtn}
        >
          Sign Up
        </button>

        <div className={registrationStyles.loginInstead}>
          <a
            onClick={(event) => {
              event.preventDefault();
              navigate(`./Login`);
            }}
          >
            Not your first time? Login instead
          </a>
        </div>
      </form>
    </div>
  );
}

export default Registration;
