import React from "react";
import "./FeatureBoxes.css";

// replace these with your real images
import icon1 from "../../assets/feature1.png";
import icon2 from "../../assets/feature2.png";
import icon3 from "../../assets/feature3.png";
import icon4 from "../../assets/feature4.png";
import icon5 from "../../assets/feature5.png";
import icon6 from "../../assets/feature6.png";

const features = [
  {
    image: icon1,
    title: "Fully Customizable",
    desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  },
  {
    image: icon2,
    title: "Fully Customizable",
    desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  },
  {
    image: icon3,
    title: "Fully Customizable",
    desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  },
  {
    image: icon4,
    title: "Fully Customizable",
    desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  },
  {
    image: icon5,
    title: "Fully Customizable",
    desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  },
  {
    image: icon6,
    title: "Fully Customizable",
    desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  },
];

function FeatureBoxes() {
  return (
    <section className="feature-section">

      {/* Heading */}
      <div className="feature-header">
        <h1>Feature Boxes</h1>
        <p>
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>
      </div>

      {/* Boxes */}
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            
            <div className="icon-container">
              <img src={feature.image} alt="icon" />
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default FeatureBoxes;
