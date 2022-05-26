import React from "react";
import numbersStyle from "./styles/numbers.module.css";

function Numbers() {
  return (
    <div>
      <div className={numbersStyle.section}>
        <h4>OUR NUMBERS</h4>

        <div className={numbersStyle.numbersContainer}>
          <div>
            <h5>STUDENTS TRAINED</h5>
            <span>80</span>
          </div>

          <div>
            <h5>PROJECTS</h5>
            <span>100</span>
          </div>

          <div>
            <h5>YEARS</h5>
            <span>2+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
