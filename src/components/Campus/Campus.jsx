import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/media/gallery-1.png";
import gallery_2 from "../../assets/media/gallery-2.png";
import gallery_3 from "../../assets/media/gallery-3.png";
import gallery_4 from "../../assets/media/gallery-4.png";

const Campus = () => {
  return (
    <section className="campus container">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button
        className="btn dark-btn btn-effect"
      >
        See more here
      </button>
    </section>
  );
};

export default Campus;
