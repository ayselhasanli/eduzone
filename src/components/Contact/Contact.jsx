import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2241b65f-a908-418a-b977-0299108964ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message sent successfully! :)");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="contact container">
      <div className="contact-col">
        <h3>
          Send us a message <i class="fa-regular fa-paper-plane"></i>
        </h3>

        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i> contact@edusity.dev
          </li>
          <li>
            <i className="fa-solid fa-phone-volume"></i> +994-99-999-9999
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i> Baku, Azerbaijan
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form className="contact-form" onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <i className="fa-solid fa-caret-right"></i>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
};

export default Contact;
