import React, { useState } from "react";
import "./Unavbar.css";

function UserNavbarlogout() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="\userhome" className="nav__brand">
       ACP EVENT MANAGEMENT
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="\userhome" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="\about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="\contact" className="nav__link">
          Contact
          </a>
        </li>
    
        <li className="nav__item">
          <a href="\userlogin" className="nav__link">
                  Log Out
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default UserNavbarlogout;