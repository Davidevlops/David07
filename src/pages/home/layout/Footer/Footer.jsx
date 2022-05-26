import React from "react";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.servicesSection}>
      <h3 className="jkeds">TNSL</h3>
      <p className="hdsbc ">Lorem ipsum dolornefjfvjo fvkfvkfknfkkkcd,</p>
      <div className="rhfdb">
        <h3 className="jkdsjc">COURSES</h3>
        <ul className="jbsdnck">
          <li className="jdsc">UI / UX Design</li>
          <li className="jdsc">Data Analytics</li>
          <li className="jdsc">Graphics</li>
          <li className="jdsc">Digital Marketing</li>
          <li className="jdsc">Frontend Development</li>
          <li className="jdsc">UI / UX Design</li>
          <li className="jdsc">Backend Development</li>
        </ul>
      </div>
      <div className="kjbdcx">
        <h3 className="jkdsjc">DISCOVER</h3>
        <h3 className="jkdsjc">FAQs</h3>
        <h3 className="jkdsjc">Terms and Conditions</h3>
        <div className="dskjbc">
          <h3 className="jkdsjc">NEWSLETTER</h3>
          <p className="bdsc">Get the latest news</p>
          <input type="email" name="Last Name" placeholder="Enter your mail" />
          <button className="hdsbcx">Subscribe</button>
        </div>
      </div>
      <div className="ersdfiuch">
        <h3 className="jkdsjc">CONTACT US</h3>
        <p className="fdhbj">Tnsl@gmail.com</p>
        <p className="fdhbj">Tnsl@gmail.com</p>
      </div>
    </div>
  );
};
export default Footer;
