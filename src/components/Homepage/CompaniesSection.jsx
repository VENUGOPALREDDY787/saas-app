import React from "react";
import "./CompaniesSection.css";

const CompaniesSection = () => {
  return (
    <div className="companiesWrapper">

      {/* Ash Rectangle (Rectangle 49) */}
      <div className="ashRectangle">

        <h2 className="companiesHeading">
          Companies we Worked <br />
          With in Since 2015
        </h2>

        <div className="logosContainer">

          <div className="logoSlot">
            <img src="" alt="logo1" />
          </div>

          <div className="logoSlot">
            <img src="" alt="logo2" />
          </div>

          <div className="logoSlot">
            <img src="" alt="logo3" />
          </div>

          <div className="logoSlot">
            <img src="" alt="logo4" />
          </div>

          <div className="logoSlot">
            <img src="" alt="logo5" />
          </div>

          <div className="logoSlot">
            <img src="" alt="logo6" />
          </div>

        </div>

      </div>


      {/* Overlapping Gradient Rectangle (Rectangle 36) */}
      <div className="gradientRectangle">

        <div className="gradientContent">

          <p className="smallText">
            Love our Our Tool?
          </p>

          <h3 className="gradientHeading">
            Fell Free to Join our <br />
            15 Days Free Trial
          </h3>

          <button className="downloadBtn">
            Download Template
          </button>

        </div>

        <div className="gradientImage">
          <img src="" alt="world map" />
        </div>

      </div>

    </div>
  );
};

export default CompaniesSection;
