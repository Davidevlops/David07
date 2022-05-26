import React from "react";
import Login from "./components/Login";
import authStyles from "./styles/authentication.module.css";

function LoginAuthentication() {
  return (
    <div className={authStyles.authenticationContainer}>
      <Login />
    </div>
  );
}

export default LoginAuthentication;
