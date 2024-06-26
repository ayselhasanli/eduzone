import React, { useRef, useState } from "react";
import "./Testimonials.css";
import user_1 from "../../assets/media/user-1.png";
import user_2 from "../../assets/media/user-2.png";
import user_3 from "../../assets/media/user-3.png";
import user_4 from "../../assets/media/user-4.png";

const Testimonials = () => {
  const slider = useRef();

  let [translateX, setTranslateX] = useState(0);

  const slideNext = () => {
    if (translateX > -50) {
      setTranslateX((translateX -= 25));
    }

    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  const slidePrev = () => {
    if (translateX < 0) {
      setTranslateX((translateX += 25));
    }

    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  return (
    <section className="testimonials container">
      <button className="prev-btn" onClick={slidePrev}>
        <i className="fa-solid fa-caret-left"></i>
      </button>
      <button className="next-btn" onClick={slideNext}>
        <i className="fa-solid fa-caret-right"></i>
      </button>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" className="user-img" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" className="user-img" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" className="user-img" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" className="user-img" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
