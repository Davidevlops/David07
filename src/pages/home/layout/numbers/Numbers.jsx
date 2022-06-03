import React from "react";
import numbersStyle from "./styles/numbers.module.css";
import "./numbersbar.css";

function Numbers() {
  return (
    <div>
      <div className={numbersStyle.section}>
        <h4>OUR NUMBERS</h4>
        <p className={numbersStyle.our_numbers_description}>
          We match employers with trained and vetted candidates that are perfect
          fit for their companies. Thats why companies love us
        </p>

        <div className={numbersStyle.containers_of_circles}>
          <div className={numbersStyle.containers_with_descrfiption}>
            <div className={numbersStyle.numbersContainer}>
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div class="inside-circle"> 100 </div>
                </div>
              </div>
            </div>
            <div className={numbersStyle.circular_description}>
              <h5 className={numbersStyle.description}>PROJECTS</h5>
            </div>
          </div>
          <div className={numbersStyle.containers_with_descrfiption}>
            <div className={numbersStyle.numbersContainer}>
              <div className="circle-wrap_01">
                <div className="circle_01">
                  <div className="mask_01 full_01">
                    <div className="fill_01"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill_01"></div>
                  </div>
                  <div class="inside-circle_01"> 80 </div>
                </div>
              </div>
            </div>
            <div className={numbersStyle.circular_description}>
              <h5 className={numbersStyle.description02}>STUDENTS TRAINED</h5>
            </div>
          </div>
          <div className={numbersStyle.containers_with_descrfiption}>
            <div className={numbersStyle.numbersContainer}>
              <div className="circle-wrap_02">
                <div className="circle_02">
                  <div className="mask_02 full_02">
                    <div className="fill_02"></div>
                  </div>
                  <div className="mask_02 half_02">
                    <div className="fill_02"></div>
                  </div>
                  <div class="inside-circle_02"> 2+ </div>
                </div>
              </div>
            </div>
            <div className={numbersStyle.circular_description}>
              <h5 className={numbersStyle.description}>YEARS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
