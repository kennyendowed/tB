import React from "react";
import "./Authheader.css";
import MainRoutes from '../../../route'
import {useAuthContext} from"../../../core/modules";
import { Header,Topnavbar, Sidebar, Onheader } from "../../../Components";


function Authheader() {
  const { currentUser } = useAuthContext();
  // console.log("user details",currentUser)
  return   (
<>
     {/* {currentUser ?( */}
      <div>
        <div className="wrapper">
  <Sidebar/>
<div className="main">
<Topnavbar />
<main className="content">
				<div className="container-fluid">
        <div className="header">
						<h1 className="header-title">
							Welcome back, {currentUser?.first_name}
						</h1>
						{/* <p className="header-subtitle">You have 24 new messages and 5 new notifications.</p> */}
					</div>
            <MainRoutes />
              
    </div>
    </main>   
  </div>       
    </div>
   
      </div>

            {/* ):(
      "offline................."
        )}  */}
</>
  );
 
}

export default Authheader;
