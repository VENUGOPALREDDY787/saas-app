import React from "react";
import "./OrbitSection.css";

import orbitBg from "../../assets/image.png"; // your orbit circles image

// orbit icons (replace with your real icons)
import icon1 from "../../assets/image2.png";
import icon2 from "../../assets/image2.png";
import icon3 from "../../assets/image2.png";
import icon4 from "../../assets/image2.png";
import icon5 from "../../assets/image2.png";

function OrbitSection() {
  return (
    <section className="orbit-section">

      {/* LEFT ORBIT */}
      <div className="orbit-container">

        {/* orbit circles background */}
        <img src={orbitBg} className="orbit-bg" alt="orbit" />

        {/* center logo */}
        <div className="orbit-center">
          <img src={icon1} alt="center" />
        </div>

        {/* orbit icons */}
        <div className="orbit-item orbit-item-1">
          <img src={icon2} alt="icon" />
        </div>

        <div className="orbit-item orbit-item-2">
          <img src={icon3} alt="icon" />
        </div>

        <div className="orbit-item orbit-item-3">
          <img src={icon4} alt="icon" />
        </div>

        <div className="orbit-item orbit-item-4">
          <img src={icon5} alt="icon" />
        </div>

      </div>


      {/* RIGHT TEXT */}
      <div className="orbit-content">

        <h1>
          We're here to <br />
          guide and help <br />
          you at all times
        </h1>

        <p>
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>

        {/* your button component goes here */}

      </div>

    </section>
  );
}

export default OrbitSection;
