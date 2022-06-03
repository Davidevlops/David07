import React from "react";
import WhatWeDoCard from "./components/WhatWeDoCard";
import aboutStyles from "./styles/about.module.css";
import { ReactComponent as Close } from "./../../../../assets/Group.svg";

function About() {
  return (
    <section className={aboutStyles.aboutSection}>
      <div className={aboutStyles.infoContainer}>
        <h5>WHO WE ARE</h5>
        <div>
          <p>
            The next stage lab is a design and development firm which Augue
            bibendum id lorem quis malesuad nisl, et viverra sodales. Vestibulum
            quam sed The next stage lab is a design and development firm which
            Augue bibendum id lorem quis malesuad nisl, et viverra sodales.
            Vestibulum quam sed The next stage lab is a design and development
            firm which Augue bibendum id lorem quis malesuad nisl, et viverra
            sodales. Vestibulum quam sed The next stage lab is a design and
            development firm which Augue bibendum id lorem quis malesuad nisl,
            et viverra sodales. Vestibulum quam sed The next stage lab is a
            design and development firm which Augue bibendum id lorem quis
            malesuad nisl, et viverra sodales. Vestibulum quam sed The next
            stage lab is a design and development firm which Augue bibendum id
            lorem quis malesuad nisl, et viverra sodales. Vestibulum quam sed
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sodales
            nunc augueulla mi eu nunc lorem. Cras sodales henricies
          </p> */}
        </div>
        <img
          className={aboutStyles.image}
          src={require("../../../../assets/what-we-do.png")}
          alt="img"
        />
      </div>
      <div className={aboutStyles.what_we_do_Section}>
        <h5>WHAT WE DO</h5>
        <div>
          <p>
            The next stage lab is a design and development firm which Augue
            bibendum id lorem quis malesuad nisl, et viverra sodales. Vestibulum
            quam sed
          </p>
        </div>
      </div>
      <div className={aboutStyles.container_of_containers}>
        <WhatWeDoCard>
          <div className={aboutStyles.inside_boxContainer}>
            <div className={aboutStyles.boxContainer_close}>
              <Close />
            </div>
            <h4 className={aboutStyles.boxContainer_UIUX}>UI/UX DESIGN</h4>
            <p className={aboutStyles.boxContainer_description}>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best
            </p>
          </div>
        </WhatWeDoCard>
        <WhatWeDoCard>
          <div className={aboutStyles.inside_boxContainer}>
            <div className={aboutStyles.boxContainer_close}>
              <Close />
            </div>
            <h4 className={aboutStyles.boxContainer_UIUX}>UI/UX DESIGN</h4>
            <p className={aboutStyles.boxContainer_description}>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best
            </p>
          </div>
        </WhatWeDoCard>
        <WhatWeDoCard>
          <div className={aboutStyles.inside_boxContainer}>
            <div className={aboutStyles.boxContainer_close}>
              <Close />
            </div>
            <h4 className={aboutStyles.boxContainer_UIUX}>UI/UX DESIGN</h4>
            <p className={aboutStyles.boxContainer_description}>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best
            </p>
          </div>
        </WhatWeDoCard>
        <WhatWeDoCard>
          <div className={aboutStyles.inside_boxContainer}>
            <div className={aboutStyles.boxContainer_close}>
              <Close />
            </div>
            <h4 className={aboutStyles.boxContainer_UIUX}>UI/UX DESIGN</h4>
            <p className={aboutStyles.boxContainer_description}>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best
            </p>
          </div>
        </WhatWeDoCard>
        <WhatWeDoCard>
          <div className={aboutStyles.inside_boxContainer}>
            <div className={aboutStyles.boxContainer_close}>
              <Close />
            </div>
            <h4 className={aboutStyles.boxContainer_UIUX}>UI/UX DESIGN</h4>
            <p className={aboutStyles.boxContainer_description}>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best
            </p>
          </div>
        </WhatWeDoCard>
        <WhatWeDoCard>
          <div className={aboutStyles.inside_boxContainer}>
            <div className={aboutStyles.boxContainer_close}>
              <Close />
            </div>
            <h4 className={aboutStyles.boxContainer_UIUX}>UI/UX DESIGN</h4>
            <p className={aboutStyles.boxContainer_description}>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best
            </p>
          </div>
        </WhatWeDoCard>
        <WhatWeDoCard>
          <div className={aboutStyles.inside_boxContainer}>
            <div className={aboutStyles.boxContainer_close}>
              <Close />
            </div>
            <h4 className={aboutStyles.boxContainer_UIUX}>UI/UX DESIGN</h4>
            <p className={aboutStyles.boxContainer_description}>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best
            </p>
          </div>
        </WhatWeDoCard>
        <WhatWeDoCard>
          <div className={aboutStyles.inside_boxContainer}>
            <div className={aboutStyles.boxContainer_close}>
              <Close />
            </div>
            <h4 className={aboutStyles.boxContainer_UIUX}>UI/UX DESIGN</h4>
            <p className={aboutStyles.boxContainer_description}>
              We help individuals and businesses build highly responsive user
              interfaces that stands in parity with the best
            </p>
          </div>
        </WhatWeDoCard>
      </div>
    </section>
  );
}

export default About;
