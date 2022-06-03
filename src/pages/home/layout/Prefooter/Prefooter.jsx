import React from "react";
import PreStyles from "./styles/Prefooter.module.css";

const Prefooter = () => {
  return (
    <div className={PreStyles.servicesSection}>
      <div className={PreStyles.Container}>
        <h5 className={PreStyles.kisoto}>
          Get the latest updates on our upcoming projects
        </h5>
        <div className={PreStyles.enter}>
          <input className={PreStyles.field} type="text"></input>
          <button className={PreStyles.dodo}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Prefooter;
