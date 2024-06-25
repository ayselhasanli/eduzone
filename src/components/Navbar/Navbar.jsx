import React, { useEffect, useState } from "react";
import "./Navbar.css";
import nav_logo from "../../assets/media/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`${sticky ? "dark-nav" : ""}`}>
      <div className="container">
        <div className="logo">
          <img src={nav_logo} alt="" />
        </div>

        <ul className="nav-menu">
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>
            <button className="btn">Contact us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
