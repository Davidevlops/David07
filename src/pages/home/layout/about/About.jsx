import React from "react";
import aboutStyles from "./styles/about.module.css";

function About() {
  return (
    <section className={aboutStyles.aboutSection}>
      <div className={aboutStyles.infoContainer}>
        <h5>WHO WE ARE</h5>
        <div>
          <p>
            The next stage lab is a design and development firm which Augue
            bibendum id lorem quis malesuad nisl, et viverra sodales. Vestibulum
            quam sed
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sodales
            nunc augueulla mi eu nunc lorem. Cras sodales henricies
          </p>
        </div>
      </div>

      <div className={aboutStyles.infoContainer}>
        <h5>WHAT WE DO</h5>
        <div>
          <p>
            Learn real skills with accountability and structure from our
            evergrowing community
          </p>
          <img
            className={aboutStyles.image}
            src={require("../../../../assets/what-we-do.png")}
            alt="img"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
