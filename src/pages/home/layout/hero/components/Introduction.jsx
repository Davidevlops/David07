import React from "react";
import introStyles from "../styles/introduction.module.css";

function Introduction() {
  return (
    <div className={introStyles.introWrapper}>
      <h1>THE NEXT STAGE LAB</h1>
      <p>
        Get the digital skills required in our evergrowing technology and meet
        our class of mentors
      </p>

      <button className={introStyles.introButton}>Get Started</button>
    </div>
  );
}

export default Introduction;
