import React from "react";
import "./ContactSection.css";

import globe from "../../assets/image.png"; // use your globe image path

const ContactSection = () => {
  return (
    <section className="contactSection">

      {/* LEFT GLOBE */}
      <div className="globeContainer">
        <img src={globe} alt="globe" className="globeImage" />
      </div>


      {/* RIGHT CONTENT */}
      <div className="contactContent">

        <h2 className="contactTitle">
          Get In Touch
        </h2>

        <p className="contactDescription">
          A good design is not only aesthetically pleasing, but
          also functional. It should be able to solve the problem
        </p>


        <form className="contactForm">

          <input
            type="email"
            placeholder="Your Email"
            className="contactInput"
          />

          <input
            type="text"
            placeholder="Name"
            className="contactInput"
          />

          <textarea
            placeholder="Name"
            className="contactTextarea"
          ></textarea>


          <button className="contactButton">
            Get in Touch
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactSection;
