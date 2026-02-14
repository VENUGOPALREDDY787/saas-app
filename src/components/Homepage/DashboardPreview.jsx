import React from "react";
import "./DashboardPreview.css";

export default function DashboardPreview() {
  return (
    <section className="previewSection">

      {/* Gradient band container */}
      <div className="gradientBand">

        {/* These ellipses CUT the gradient */}
        <div className="cut cutTop"></div>
        <div className="cut cutBottom"></div>

      </div>

      {/* Dark rectangle */}
      <div className="dashboardCard">

        <div className="cardGrid">
          <div className="card tall"></div>
          <div className="card"></div>
          <div className="card tall"></div>
          <div className="card"></div>
          <div className="card wide"></div>
        </div>

      </div>

    </section>
  );
}
