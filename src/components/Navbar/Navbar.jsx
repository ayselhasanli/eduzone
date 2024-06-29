import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`${sticky ? "dark-nav" : ""}`}>
      <div className="container">
        <Link
          to="hero"
          smooth={true}
          offset={0}
          duration={500}
          className="logo"
        >
          <i class="fa-solid fa-book-open"></i> EduZone
        </Link>

        <ul className={`nav-menu ${mobileMenu ? "" : "show-mobile-menu"}`}>
          <li>
            <Link
              className="nav-link"
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="program"
              smooth={true}
              offset={-260}
              duration={500}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="campus"
              smooth={true}
              offset={-260}
              duration={500}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="testimonials"
              smooth={true}
              offset={-260}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
              className="btn"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <button onClick={toggleMenu} className="menu-icon">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
