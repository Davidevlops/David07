import React from "react";
import partnersStyles from "./styles/partners.module.css";

function Testimonial() {
  return (
    <div className={partnersStyles.partnersWrapper}>
      <div className={partnersStyles.partners}>
        <div>
          <h1>Trusted by Entrepreneurs and Hiring Managers globally</h1>
          <p>
            We match employers with trained and vetted candidates that are a
            perfect fit for their companies. That’s why companies love us
          </p>
        </div>
        <div className={partnersStyles.logoContainer}>
          <img src={require("../../../../assets/mastercard.png")} alt="" />
          <img src={require("../../../../assets/pick&pay.png")} alt="" />
          <img src={require("../../../../assets/paypal.png")} alt="" />
          <img src={require("../../../../assets/sage.png")} alt="" />
          <img src={require("../../../../assets/visa.png")} alt="" />
          <img src={require("../../../../assets/standard.png")} alt="" />
          <img src={require("../../../../assets/paypoint.png")} alt="" />
          <img src={require("../../../../assets/postepay.png")} alt="" />
          <img src={require("../../../../assets/moneygram.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
