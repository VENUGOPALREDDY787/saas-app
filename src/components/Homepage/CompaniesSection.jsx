import React from "react";
import "./CompaniesSection.css";
import companies1 from "../../assets/compaines1.png";
import companies2 from "../../assets/compaines2.png";
import companies3 from "../../assets/companies3.png";
import companies4 from "../../assets/companies4.png";
import companies5 from "../../assets/companies5.png";
import companies6 from "../../assets/companies6.png";
import mapImage from "../../assets/map.png";

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
            <img src={companies1} alt="logo1" />
          </div>

          <div className="logoSlot">
            <img src={companies2} alt="logo2" />
          </div>

          <div className="logoSlot">
            <img src={companies3} alt="logo3" />
          </div>

          <div className="logoSlot">
            <img src={companies4} alt="logo4" />
          </div>

          <div className="logoSlot">
            <img src={companies5} alt="logo5" />
          </div>

          <div className="logoSlot">
            <img src={companies6} alt="logo6" />
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
          <img src="../../assets/map.png" alt="world map" />
        </div>

      </div>

    </div>
  );
};

export default CompaniesSection;
