import logo1 from "../../../assets/welcome/assets/img/logo.jpg";
import logo2 from "../../../assets/welcome/assets/img/black-logo.png";
import {React,useState} from "react"; // { useState ,useEffect}

import { useNavigate,useLocation ,Link} from "react-router-dom";
import { useAuthContext } from "../../../core/modules";
import AuthService from "../../../core/services/auth.service";
import "./Topnavbar.css";
const Topnavbar = (props) => {
  const [toggleMenu, settoggle] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  const { currentUser ,logout ,ToggleNavbar} = useAuthContext();
  // const { showNavbar, setShowNavbar } = useMainContext();
  // const toggleNavState = () => setShowNavbar(!showNavbar);
  // console.log(showNavbar);
  // Toggle Sidenav
//   const iconSidenav = document.getElementById('iconSidenav');

// const sidenav = document.getElementById('sidenav-main');
  let className = 'g-sidenav-pinned';
  function toggleNavState() {
    if (document.body.classList.contains(className)) {
      document.body.classList.remove(className);  
      // setTimeout(function() {
      //   sidenav.classList.remove('bg-white');
      // }, 100);
      // sidenav.classList.remove('bg-transparent');

     } else {
      document.body.classList.add(className);
      // sidenav.classList.add('bg-white');
      // sidenav.classList.remove('bg-transparent');
      // iconSidenav.classList.remove('d-none');
          }
       }
       const logOut = () => {
        AuthService.logout();
        logout();
        navigate("/auth");
    
      };

	  const NabToggle = () => {
           ToggleNavbar();
	  }
    
      
   
    function toogleNavbottonState() {
      if (toggleMenu) {
          settoggle(false)
    
       } else {
          settoggle(true)
            }
         }
  return (
    <>
    	<nav className="navbar navbar-expand navbar-theme">
				<a onClick={NabToggle} className="sidebar-toggle d-flex me-2">
					<i className="hamburger align-self-center"></i>
				</a>

				{/* <form className="d-none d-sm-inline-block">
					<input className="form-control form-control-lite" type="text" placeholder="Search projects...">
				</form> */}

				{/* <div className="navbar-collapse collapse">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item dropdown active">
							<a className="nav-link dropdown-toggle position-relative" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
								<i className="align-middle fas fa-envelope-open"></i>
							</a>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
								<div className="dropdown-menu-header">
									<div className="position-relative">
										4 New Messages
									</div>
								</div>
								<div className="list-group">
									<a href="#" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Michelle Bilodeau" />
											</div>
											<div className="col-10 ps-2">
												<div className="text-dark">Michelle Bilodeau</div>
												<div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
												<div className="text-muted small mt-1">5m ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Kathie Burton" />
											</div>
											<div className="col-10 ps-2">
												<div className="text-dark">Kathie Burton</div>
												<div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
												<div className="text-muted small mt-1">30m ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="Alexander Groves" />
											</div>
											<div className="col-10 ps-2">
												<div className="text-dark">Alexander Groves</div>
												<div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
												<div className="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Daisy Seger" />
											</div>
											<div className="col-10 ps-2">
												<div className="text-dark">Daisy Seger</div>
												<div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
												<div className="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div className="dropdown-menu-footer">
									<a href="#" className="text-muted">Show all messages</a>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown ms-lg-2">
							<a className="nav-link dropdown-toggle position-relative" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
								<i className="align-middle fas fa-bell"></i>
								<span className="indicator"></span>
							</a>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
								<div className="dropdown-menu-header">
									4 New Notifications
								</div>
								<div className="list-group">
									<a href="#" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<i className="ms-1 text-danger fas fa-fw fa-bell"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">Update completed</div>
												<div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
												<div className="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<i className="ms-1 text-warning fas fa-fw fa-envelope-open"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">Lorem ipsum</div>
												<div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
												<div className="text-muted small mt-1">6h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<i className="ms-1 text-primary fas fa-fw fa-building"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">Login from 192.186.1.1</div>
												<div className="text-muted small mt-1">8h ago</div>
											</div>
										</div>
									</a>
									<a href="#" className="list-group-item">
										<div className="row g-0 align-items-center">
											<div className="col-2">
												<i className="ms-1 text-success fas fa-fw fa-bell-slash"></i>
											</div>
											<div className="col-10">
												<div className="text-dark">New connection</div>
												<div className="text-muted small mt-1">Anna accepted your request.</div>
												<div className="text-muted small mt-1">12h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div className="dropdown-menu-footer">
									<a href="#" className="text-muted">Show all notifications</a>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown ms-lg-2">
							<a className="nav-link dropdown-toggle position-relative" href="#" id="userDropdown" data-bs-toggle="dropdown">
								<i className="align-middle fas fa-cog"></i>
							</a>
							<div className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
								<a className="dropdown-item" href="#"><i className="align-middle me-1 fas fa-fw fa-user"></i> View Profile</a>
								<a className="dropdown-item" href="#"><i className="align-middle me-1 fas fa-fw fa-comments"></i> Contacts</a>
								<a className="dropdown-item" href="#"><i className="align-middle me-1 fas fa-fw fa-chart-pie"></i> Analytics</a>
								<a className="dropdown-item" href="#"><i className="align-middle me-1 fas fa-fw fa-cogs"></i> Settings</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#"><i className="align-middle me-1 fas fa-fw fa-arrow-alt-circle-right"></i> Sign out</a>
							</div>
						</li>
					</ul>
				</div>
			*/}
			</nav> 
    </>
  );
};

export default Topnavbar;
