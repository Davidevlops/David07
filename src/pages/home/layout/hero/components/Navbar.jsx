import React, { useState } from "react";
import navBarStyles from "../styles/navbar.module.css";

import { ReactComponent as Logo } from "../../../../../assets/logo.svg";
import { ReactComponent as ArrowDown } from "../../../../../assets/chevron-down.svg";
import { ReactComponent as MenuBtn } from "../../../../../assets/menu.svg";

function Navbar() {
  // hides or show menu
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav>
        <div className={navBarStyles.navHeader}>
          <a href="#">
            <Logo className={navBarStyles.logo} />
          </a>
          <MenuBtn className={navBarStyles.menuBtn} onClick={handleClick} />
        </div>

        <div
          className={`${navBarStyles.menuWrapper} ${
            showMenu && navBarStyles.displayMenu
          }`}
        >
          <a href="#">HOME</a>

          <div className={navBarStyles.dropdown}>
            <div className={navBarStyles.dropdownNav}>
              <button className={navBarStyles.dropdownBtn}>CATEGORIES</button>
              <ArrowDown className={navBarStyles.arrowDown} />
            </div>

            <div className={navBarStyles.dropdownMenu}>
              <a href="#">UI/UX</a>
              <a href="#">DIGITAL MARKETING</a>
              <a href="#">PROGRAMMING</a>
            </div>
          </div>

          <div className={navBarStyles.dropdown}>
            <div className={navBarStyles.dropdownNav}>
              <button className={navBarStyles.dropdownBtn}>SERVICES</button>
              <ArrowDown className={navBarStyles.arrowDown} />
            </div>

            <div className={navBarStyles.dropdownMenu}>
              <a href="#">LEARNING</a>
              <a href="#">BUSINESS</a>
            </div>
          </div>

          <a href="#">CONTACT US</a>
          <a href="#">ABOUT</a>

          <div className={navBarStyles.authentication}>
            <a href="#login">LOGIN</a>
            <a href="#login">REGISTER</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
