import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    // <div className="spinner-container">
       <div className="">
    <span className="spinner-grow spinner-grow-sm text-secondary" role="status" aria-hidden="true"></span>  <span className="spinner-grow text-primary spinner-grow-sm" role="status" aria-hidden="true"></span>
      {/* <div className="loading-spinner"></div> */}
    </div>
  );
}