import "../css/Navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-logo">GRDDev</div>
      <ul className={`nav-items ${isOpen && "open"}`}>
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="/bio">BIO</a>
        </li>
        <li>
          <a href="/porfolio">PORFOLIO</a>
        </li>
        <li>
          <a href="/contact">CONTACTO</a>
        </li>
      </ul>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
