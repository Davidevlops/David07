import React from "react";
import teamStyles from "./styles/team.module.css";

const Team = () => {
  return (
    <div className={teamStyles.servicesSection}>
      <h5 className={teamStyles.aboutStaff}>Meet Our Staff</h5>
      <h6 className={teamStyles}>OUR TEAM</h6>
      <div className={teamStyles.logoContainer}>
        <div className={teamStyles.menu}>
          <img src={require("../../../../assets/firstimg.jpg")} alt="" />
          <h2 className={teamStyles}>DAVID KONNECT</h2>
          <p className={teamStyles}>CANVA</p>
        </div>
        <div className={teamStyles.menu}>
        <img src={require("../../../../assets/second img.jpg")} alt="" />
          <h2 className={teamStyles}>DAVID KONNECT</h2>
          <p className={teamStyles}>CANVA</p>
        </div>
        <div className={teamStyles.menu}>
        <img src={require("../../../../assets/thirdimg.jpg")} alt="" />
          <h2 className={teamStyles}>DAVID KONNECT</h2>
          <p className={teamStyles}>CANVA</p>
        </div>
        <div className={teamStyles.menu}>
        <img src={require("../../../../assets/fourth img.jpg")} alt="" />
          <h2 className={teamStyles}>DAVID KONNECT</h2>
          <p className={teamStyles}>CANVA</p>
        </div>
        
        
        
      </div>
    </div>
  );
};
export default Team;
