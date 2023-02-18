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
    <div className="page-header min-vh-100 ">
            <div className="container w-100">
                <div className="row ">
                   <div className="col-xl-4 col-lg-5 col-md-6  d-flex flex-column" >
                      <div className=" card card-plain ">
                           <div className="card-body pb-0 text-left login_head" style={{backgroundColor:"white" }}>
                           <img src={logo} className="w-30 h-30 " alt="main_logo" />
                           <h4 className="font-weight-bolder text-info text-gradient logText">Welcome back</h4>
                            <p className="mb-0">Enter your username and password to sign in</p>
                      </div>
              <div className="card-body login_body " style = {{backgroundColor :"white"}}>
                  {location.pathname === "/auth" ? (
						         <Login />
						         ): ( 
                    <Register />
                       )}
              </div>
					</div>
			   </div>
			  <div className="col-md-6">
				    <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
				  <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${background})` }}></div>
				    </div>
			  </div>
			</div>
		  </div>
		</div>
	
        
);
}

export default Authentication;