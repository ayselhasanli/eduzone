import React from "react";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <section className="title">
      <p>{title}</p>
      <h2>{subTitle}</h2>
    </section>
  );
};

export default Title;
