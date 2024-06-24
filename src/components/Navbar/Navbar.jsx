import React from 'react'
import "./Navbar.css"
import nav_logo from "../../assets/media/logo.png"

const Navbar = () => {
  return (
    <nav>
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
            <button className='btn'>Contact us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
