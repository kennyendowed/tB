import React from "react";
import "./PermissionDenied.css";


function PermissionDenied(){
return(
<>
<div className="scene">
  <div className="overlay"></div>
  <div className="overlay"></div>
  <div className="overlay"></div>
  <div className="overlay"></div>
  <span className="bg-403">403</span>
  <div className="text">
    <span className="hero-text"></span>
    <span className="msg">can't let <span>you</span> in.</span>
    <span className="support">
      <span>❌Access Denied. You have no access to this portal❌</span>
      <a href="/">contact support</a>
    </span>
  </div>
  <div className="lock"></div>
</div>
</>

);
}

export default PermissionDenied;