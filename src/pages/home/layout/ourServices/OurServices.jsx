import React from "react";
import ourServicesStyles from "./styles/ourServices.module.css";

function OurServices() {
  return (
    <div className={ourServicesStyles.servicesSection}>
      <h5>WHAT WE DO</h5>
      <h6>OUR SERVICES</h6>

      <div className={ourServicesStyles.container}>
        <div className={ourServicesStyles.card}>
          <div className={ourServicesStyles.image}>
            <img src={require("../../../../assets/UIUX.png")} alt="uiux-img" />
          </div>
          <div>
            <span>UI / UX DESIGN</span>
            <p>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best’
            </p>
          </div>
        </div>

        <div className={ourServicesStyles.card}>
          <div className={ourServicesStyles.image}>
            <img
              src={require("../../../../assets/Frontend.png")}
              alt="uiux-img"
            />
          </div>
          <div>
            <span>FRONTEND DEVELOPMENT</span>
            <p>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best’
            </p>
          </div>
        </div>

        <div className={ourServicesStyles.card}>
          <div className={ourServicesStyles.image}>
            <img
              src={require("../../../../assets/Frontend.png")}
              alt="uiux-img"
            />
          </div>
          <div>
            <span>BACKEND DEVELOPMENT</span>
            <p>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best’
            </p>
          </div>
        </div>

        <div className={ourServicesStyles.card}>
          <div className={ourServicesStyles.image}>
            <img
              src={require("../../../../assets/Marketing.png")}
              alt="uiux-img"
            />
          </div>
          <div>
            <span>DIGITAL MARKETTING</span>
            <p>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best’
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
