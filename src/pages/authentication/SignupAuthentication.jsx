import React from "react";
import Registration from "./components/Registration";
import authStyles from "./styles/authentication.module.css";

function SignupAuthentication() {
  return (
    <div className={authStyles.authenticationContainer}>
      <Registration />
    </div>
  );
}

export default SignupAuthentication;
