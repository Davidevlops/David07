import React from "react";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3 className={styles.log}>TNSL</h3>
        <p className={styles.word}>
          Lorem ipsum dolornefjfvjoksjzmx fvkfvkfknf
        </p>
      </div>
      <div className={styles.head1}>
        <h5 className={styles}>COURSES</h5>
        <ul className={styles}>
          <li className={styles}>UI / UX Design</li>
          <li className={styles}>Data Analytics</li>
          <li className={styles}>Graphics</li>
          <li className={styles}>Digital Marketing</li>
          <li className={styles}>Frontend Development</li>
          <li className={styles}>UI / UX Design</li>
          <li className={styles}>Backend Development</li>
        </ul>
      </div>
      <div className={styles.head1}>
        <h5 className={styles}>DISCOVER</h5>
        <h5 className={styles}>FAQs</h5>
        <h5 className={styles}>Terms and Conditions</h5>
        <div className={styles.sp}>
          <h5 className={styles}>NEWSLETTER</h5>
          <p className={styles}>Get the latest news</p>
          <input type="email" name="email" placeholder="Enter your mail" />
          <button className={styles.sub}>Subscribe</button>
        </div>
      </div>
      <div className={styles.head1}>
        <h5 className={styles}>CONTACT US</h5>
        <p className={styles}>Tnsl@gmail.com</p>
        <p className={styles}>Tnsl@gmail.com</p>
      </div>
    </div>
  );
};
export default Footer;
