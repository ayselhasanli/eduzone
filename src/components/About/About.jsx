import React from "react";
import "./About.css";
import about_img from "../../assets/media/about.png";

const About = ({setPlayState}) => {
  return (
    <section className="about container">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <button className="about-icon" onClick={() => {setPlayState(true)}}>
          <i className="fa-solid fa-circle-play"></i>
        </button>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </section>
  );
};

export default About;
