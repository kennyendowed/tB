import React from "react"
import {useLocation} from "react-router-dom"
import background from "../../assets/img/curved-images/slide2.png";
import logo from "../../assets/img/logos/providus-logo.svg";
import "./Authentication.css";
import Login from "../../Components/Forms/login";
import Register from "../../Components/Forms/register";



function Authentication(){
    const location = useLocation()
return (
<>
<div className="page-title-area item-Auth jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="container">
                <div className="page-title-content">
                    <h2>  {location.pathname == "/auth" ? (
						      "Login"
						         ): ( 
                    "Register"
                       )}</h2>
                    <p>The Trust Bank story</p>
                </div>
            </div>
        </div>
        {location.pathname == "/auth" ? (
						         <Login />
						         ): ( 
                    <Register />
                       )}

</>

   
	
        
);
}

export default Authentication;