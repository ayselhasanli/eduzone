import React from "react";
import "./Programs.css";
import program_1 from "../../assets/media/program-1.png";
import program_2 from "../../assets/media/program-2.png";
import program_3 from "../../assets/media/program-3.png";

const Programs = () => {
  return (
    <section className="programs container">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="img-overlay">
          <i className="fa-solid fa-user-graduate"></i>
          <p>Gradutaion Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="img-overlay">
          <i className="fa-solid fa-graduation-cap"></i>
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="img-overlay">
          <i className="fa-solid fa-book-open-reader"></i>
          <p>Post Graduation</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
