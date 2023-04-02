import React from "react"
import {useLocation ,Link} from "react-router-dom";
import "./Authentication.css";
import Login from "../../Components/Forms/login";
import Register from "../../Components/Forms/register";
import Password from "../../Components/Forms/UpdatePassword";
import ForgetPassword from "../../Components/Forms/forgetPassword";
import ResetEmailOtpValidate from "../../Components/Forms/resetEmailOtpValidate";



function Authentication(){
    const location = useLocation()
return (
<>
<div className="page-title-area item-Auth jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="container">
                <div className="page-title-content">
                    <h2>  {(location.pathname === "/auth") ? (
						      "Login"
						         ) : (location.pathname === "/auth/chnangePassword") ? ( 
                    "Chnange Password"
                       )  : "Register"}</h2>
                    <p>The Trust Bank story</p>
                </div>
            </div>
        </div>
        {(location.pathname === "/auth") ? (<Login />) :(location.pathname ==="/auth/reset-otp") ?    <ResetEmailOtpValidate /> : (location.pathname ==="/auth/forget-password") ?  <ForgetPassword /> : (location.pathname === "/auth/chnangePassword") ? (<Password />) :   <Register /> }
    
</>
        
);
}

export default Authentication;