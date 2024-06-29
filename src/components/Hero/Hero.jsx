import React from 'react'
import "./Hero.css"
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <Link
          to="program"
          smooth={true}
          offset={-260}
          duration={500}
          className="btn btn-effect"
        >
          Explore more 
        </Link>
      </div>
    </section>
  );
}

export default Hero
