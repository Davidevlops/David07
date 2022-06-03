import React from "react";
import aboutStyles from "./../styles/about.module.css";
function WhatWeDoCard(props) {
  const classes = `${aboutStyles.boxContainer} ${
    !!props.className ? props.className : ""
  }`;
  return <div className={classes}>{props.children}</div>;
}

export default WhatWeDoCard;
