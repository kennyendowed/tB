import {React,useState} from "react";
import "./Sidebar.css";
import { useNavigate, Link,useLocation } from "react-router-dom";
import logo from "../../../assets/welcome/assets/img/logo.png";
import {useAuthContext,AuthContextProvider} from "../../../core/modules";
import AuthService from "../../../core/services/auth.service";





const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation()
  const { currentUser , logout ,hamburger } = useAuthContext();
  const [toggleMenu, settoggle] = useState(false);
  

  //const role = JSON.parse(sessionStorage.getItem("role"))
  // console.log(currentUser)
  // console.log(currentUser?.rolesss)
  const logOut = () => {
    AuthService.logout();
    logout();
    navigate("/auth");
    // window.location.reload();
  };
  function toogleDropdownbottonState() {
    if (toggleMenu) {
        settoggle(false)
  
     } else {
        settoggle(true)
          }
       }
    return (
      <>
       {currentUser && (
 	<nav id="sidebar" className={!hamburger ?"sidebar" : "sidebar toggled"}>
      <Link to={"/"} className="sidebar-brand" >
                                <img src={logo} alt="logo" />
                                </Link>
			<div className="sidebar-content">
				<div className="sidebar-user">
					<img src="img/avatars/avatar.jpg" className="img-fluid rounded-circle mb-2" alt={currentUser?.first_name + " " + currentUser?.last_name} />
					<div className="fw-bold">{currentUser?.first_name + " " + currentUser?.last_name} </div>
					<small>Front-end Developer</small>
				</div>

				<ul className="sidebar-nav">
    

       {currentUser?.rolesss.includes('CUSTOMER') && ( 
          <><li className={location.pathname === '/dashboard' ? 'sidebar-item  active' : 'sidebar-item'}>
                    <Link to={"/dashboard"} className="sidebar-link"> 	<i className="align-middle me-2 fas fa-fw fa-home"></i> <span className="align-middle">Dashboards</span>      </Link>

                  </li><li className={location.pathname === '/transferFunds' ? 'sidebar-item  active' : 'sidebar-item'}>
                      <Link to={"/transferFunds"} className="sidebar-link"> 	  	<i className="align-middle me-2 fas fa-fw fa-file"></i> <span className="align-middle">Transfer Money</span>  </Link>

                    </li><li className={location.pathname === '/Transactions' ? 'sidebar-item  active' : 'sidebar-item'}>
                      <Link to={"/Transactions"} className="sidebar-link"> 	  		<i className="align-middle me-2 fas fa-fw fa-list"></i> <span className="align-middle">Transactions</span>  </Link>

                    </li><li className="sidebar-item">
                      <a data-bs-toggle="collapse" onClick={() => toogleDropdownbottonState()} className={!toggleMenu ? "sidebar-link" : "sidebar-link collapsed"}>
                        <i className="align-middle me-2 fas fa-fw fa-flask"></i> <span className="align-middle">Settings</span>
                      </a>
                      <ul id="ui" className={!toggleMenu ? "sidebar-dropdown list-unstyled collapse " : "sidebar-dropdown list-unstyled collapse show"} data-bs-parent="#sidebar">
                        {/* <li className="sidebar-item">
                          <Link to={"/settings/update-Profile"} className="sidebar-link">Update Profile </Link>
                        </li> */}
                        <li className="sidebar-item">  <Link to={"/settings/update-Password"} className="sidebar-link">Change Password </Link></li>

                      </ul>
                    </li></>  
       )}      
             
        
        
          
              {currentUser.rolesss.includes('ADMIN') && (  
            <> 
	               <li className={location.pathname === '/addFunds' ? 'sidebar-item  active':'sidebar-item'}>
                 <Link to={"/addFunds"} className="sidebar-link"> 	   <i className="align-middle me-2 fas fa-fw fa-file"></i> <span className="align-middle">Fund || Debit Accounts</span>    </Link>  
                 
					    	</li>
                <li className={location.pathname === '/customerDetails' ? 'sidebar-item  active':'sidebar-item'}>
                 <Link to={"/customerDetails"} className="sidebar-link"> 	   <i className="align-middle me-2 fas fa-fw fa-file"></i> <span className="align-middle">Customers Details</span>    </Link>  
                 
					    	</li>


              </>
              
              )}  
					<li className="sidebar-item">
						<a onClick={logOut} className="sidebar-link collapsed">
							<i className="align-middle me-2 fas fa-fw fa-sign-in-alt"></i> <span className="align-middle">Sign out</span>
						</a>
					
					</li>			
				</ul>
			</div>
		</nav>
    )}
  </>
  )
  }
   
  
  export default Sidebar;
  