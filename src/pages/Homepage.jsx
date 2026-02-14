import React from "react";
import Hero from "../components/Homepage/Hero";
import DashboardPreview from "../components/Homepage/DashboardPreview";
import FeatureBoxes from "../components/Homepage/FeatureBoxes";
import OrbitSection from "../components/Homepage/OrbitSection";
import CompaniesSection from "../components/Homepage/CompaniesSection";
import ContactSection from "../components/Homepage/ContactSection";

import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">

      {/* Background ellipses */}
      <div className="ellipse ellipse1"></div>
      <div className="ellipse ellipse2"></div>
      <div className="ellipse ellipse3"></div>
      <div className="ellipse ellipse4"></div>
      <div className="ellipse ellipse5"></div>

      {/* Sections */}
      <Hero />
      <DashboardPreview />
      <FeatureBoxes />
      <OrbitSection />
      <CompaniesSection />
      <ContactSection />

    </div>
  );
}

export default Homepage;
