import React from "react";
import "./Footer.css";

import logo from "../../assets/image1.png";
import twitter from "../../assets/image1.png";
import linkedin from "../../assets/image1.png";
import discord from "../../assets/image1.png";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footerTop">

        <div className="footerInner">

          {/* LEFT */}
          <div className="footerLeft">

            <img src={logo} className="footerLogo" />

            <p className="footerText">
              A good design is not only aesthetically
              pleasing, but also functional. It should be
              able to solve the problem
            </p>

          </div>


          {/* RIGHT */}
          <div className="footerRight">

            <div className="footerColumn">
              <h4>Sections</h4>
              <span>Home</span>
              <span>Section One</span>
              <span>Section Two</span>
              <span>Section Tree</span>
            </div>

            <div className="footerColumn">
              <h4 className="hidden">Sections</h4>
              <span>Home</span>
              <span>Section One</span>
              <span>Section Two</span>
              <span>Section Tree</span>
            </div>

            <div className="footerColumn">
              <h4 className="hidden">Sections</h4>
              <span>Home</span>
              <span>Section One</span>
              <span>Section Two</span>
              <span>Section Tree</span>
            </div>

          </div>

        </div>

      </div>



      {/* BOTTOM SECTION */}
      <div className="footerBottom">

        <div className="footerInner">

          <span className="copyright">
            All Rights Reserved Inkyy.com 2022
          </span>

          <div className="socials">

            <div className="socialCircle">
              <img src={twitter} />
            </div>

            <div className="socialCircle">
              <img src={linkedin} />
            </div>

            <div className="socialCircle">
              <img src={discord} />
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
