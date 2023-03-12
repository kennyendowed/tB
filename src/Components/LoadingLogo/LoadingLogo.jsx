import React from "react";
import styles from "./loader.module.css";



 function LoadingLogo(props) {
    return (
        <div
        style={{
          width: "100%",
          background: "rgba(0,0,0,.5)",
          position: "fixed",
          zIndex: "9900",
          overflowY: "hidden",
          overflowX: "hidden",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
       <svg viewBox="0 0 50 50" width="80px" className="mx-auto">
  <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke="#F5A623">
    <animate attributeName="stroke-dashoffset" dur="1.5s" from="0" to="125" repeatCount="indefinite" />
    <animate attributeName="stroke-dasharray" dur="1.5s" values="0 50 25; 25 50 0; 0 50 25" repeatCount="indefinite" />
  </circle>
</svg>
{/* <svg viewBox="0 0 80 80" width="80px" className="mx-auto">
  <rect x="0" y="0" width="20" height="80" fill="#F5A623">
    <animate attributeName="height" dur="1.2s" values="0;80;80;0" repeatCount="indefinite" />
    <animate attributeName="y" dur="1.2s" values="40;-5;-5;40" repeatCount="indefinite" />
  </rect>
  <rect x="30" y="0" width="20" height="80" fill="#F5A623">
    <animate attributeName="height" dur="1.2s" values="0;80;80;0" repeatCount="indefinite" begin="0.2s" />
    <animate attributeName="y" dur="1.2s" values="40;-5;-5;40" repeatCount="indefinite" begin="0.2s" />
  </rect>
  <rect x="60" y="0" width="20" height="80" fill="#F5A623">
    <animate attributeName="height" dur="1.2s" values="0;80;80;0" repeatCount="indefinite" begin="0.4s" />
    <animate attributeName="y" dur="1.2s" values="40;-5;-5;40" repeatCount="indefinite" begin="0.4s" />
  </rect>
</svg> */}
          <p className="mx-auto text-white mt-1 font-bold">{props.text}</p>
        </div>
      </div>
    );
  }

  export default LoadingLogo;