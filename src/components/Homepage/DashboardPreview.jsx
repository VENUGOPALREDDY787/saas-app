import React from "react";
import "./DashboardPreview.css";
import logodark from "../../assets/logodark.png";
import blurmessage from "../../assets/blurmessage.png";
import dashboardImg1 from "../../assets/dashboardcard1.png";
import dashboardImg2 from "../../assets/dashboardcard2.png";
import dashboardImgtop from "../../assets/dashboardcard3top.png";
import dashboardImgbottom from "../../assets/dashboardcard3bottom.png";
import dashboardImg4 from "../../assets/dashboardcard4.png";


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

  {/* Column 1 */}
  <div className="column">
    <div className="card card1">
     <div
  style={{
    background: "#1C1D22",
    borderRadius: "16px",
    width: "100%",
    height: "100%",
    padding: "18px 14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box"
    
  }}
>

  {/* Top logo */}
  <img
    src={logodark}
    alt=""
    style={{
      width: "50px",
      height: "38px",
    }}
  />

  {/* Divider line */}
  <hr
    style={{
      width: "100%",
      border: "none",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      marginBottom: "30px",
      marginTop: "20px"
    }}
  />

  {/* Blur messages container */}
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginBottom: "auto"
    }}
  >
    <img src={blurmessage} alt="" style={{ width: "85%" }} />
    <img src={blurmessage} alt="" style={{ width: "90%" }} />
    <img src={blurmessage} alt="" style={{ width: "80%" }} />
    <img src={blurmessage} alt="" style={{ width: "88%" }} />
    <img src={blurmessage} alt="" style={{ width: "82%" }} />
  </div>

  {/* Profile image */}
  <img
    src={dashboardImg1}
    alt=""
    style={{
      width: "100px",
      height: "100px",
    
     
    }}
  />

 

</div>

    </div>
  </div>

  {/* Column 2 */}
  <div className="column column2">
<div
  className="card card2"
  style={{
    background: "#1C1D22",
    borderRadius: "16px",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box"
  }}
>
  <img
    src={dashboardImg2}
    alt=""
    style={{
      width: "200px",
      height: "200px",
      objectFit: "contain"
    }}
  />
</div>
   <div
  className="card card4"
  style={{
    background: "#1C1D22",
    borderRadius: "16px",
    width: "100%",
    height: "100%",
    padding: "18px 16px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }}
>

  {/* Top blurred header */}
  <img
    src={dashboardImgtop}
    alt=""
    style={{
      width: "100%",
      height: "auto",
      marginBottom: "12px",
      opacity: 0.9
    }}
  />

  {/* Chart container */}
  <div
    style={{
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }}
  >
    <img
      src={dashboardImgbottom}
      alt=""
      style={{
        width: "85%",
        height: "auto",
        objectFit: "contain"
      }}
    />
  </div>

</div>

  </div>

  {/* Column 3 */}
  <div className="column column3">
    <div
  className="card card3"
  style={{
    background: "#1C1D22",
    borderRadius: "16px",
    width: "100%",
    height: "100%",
    padding: "18px 16px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
  }}
>

  {/* Top header blur */}
  <img
    src={dashboardImgtop}
    alt=""
    style={{
      width: "100%",
      height: "auto",
      marginBottom: "14px",
      opacity: 0.9
    }}
  />

  {/* Profile list container */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      flex: 1,
      justifyContent: "flex-start"
    }}
  >
    <img
      src={dashboardImg4}
      alt=""
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain"
      }}
    />

    <img
      src={dashboardImg4}
      alt=""
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain"
      }}
    />

    <img
      src={dashboardImg4}
      alt=""
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain"
      }}
    />

    <img
      src={dashboardImg4}
      alt=""
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain"
      }}
    />
  </div>

</div>

    <div className="card card5"></div>
  </div>

</div>


      </div>

    </section>
  );
}
