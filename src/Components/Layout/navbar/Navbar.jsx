import logo1 from "../../../assets/welcome/assets/img/logo.png";
import logo2 from "../../../assets/welcome/assets/img/black-logo.png";
import {React,useState} from "react"; // { useState ,useEffect}

import { useNavigate,useLocation ,Link} from "react-router-dom";
import { useAuthContext } from "../../../core/modules";
import AuthService from "../../../core/services/auth.service";
import "./Navbar.css";
const Navbar = (props) => {
  const [toggleMenu, settoggle] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  const { currentUser ,logout} = useAuthContext();
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
      const style = toggleMenu ? {   display: '' } : {   display: 'none' };
      const STYLE = {
        BannerStyle: {
        background:'',color:'',right:0,left:'auto'
      },
      displayNone: {
        display: 'none'
      },
      errorColor: {
          color: 'red'
      },

      meanclose:{
        right: '0px',left: 'auto', textAlign: 'center', textIndent: '0px', fontSize: '18px'
      }
      
    };
    function toogleNavbottonState() {
      if (toggleMenu) {
          settoggle(false)
    
       } else {
          settoggle(true)
            }
         }
  return (
    <>
            <div className="navbar-area is-sticky" >
            <div className="luvion-responsive-nav">
                <div className="container">
                      <div className="luvion-responsive-menu">
                        <div className="logo">
                        <Link to={"/"} >
                                <img src={logo1} alt="logo" />
                                <img src={logo2} alt="logo" />
                                </Link>
                        </div>
                    </div>
                <div className="luvion-responsive-menu mean-container">
                  <div className="mean-bar">
                    <a onClick={() => toogleNavbottonState()} className={ toggleMenu ? "meanmenu-reveal" : "meanmenu-reveal meanclose "} style={STYLE.meanclose}>
                      <span><span><span></span></span></span>
                    </a>
                <nav className="mean-nav">
                            <ul className="navbar-nav"  style={style}  >
                            <li className="nav-item">
                                <Link to={"/"} className={location.pathname === '/welcome' ? 'nav-link active':'nav-link'}>     
                                    Home  </Link>
                                   
                                </li>

                                <li className="nav-item">
                                <Link to={"/aboutUs"} className={location.pathname === '/aboutUs' ? 'nav-link active':'nav-link'}>     
                                About Us  </Link>
                                </li>


                                <li className="nav-item">
                                <Link to={"/contact"} className={location.pathname === '/contact' ? 'nav-link active':'nav-link'}>     
                                Contact Us  </Link> 
                                </li>
                            </ul>

                            <div className="others-options">
                            <Link to={"/auth"} className="login-btn"><i className="flaticon-user"></i> Log In   </Link>
                            </div>
                        </nav></div>
                        {/* <div className="logo">
                        <Link to={"/"} >
                                <img src={logo1} alt="logo" />
                                <img src={logo2} alt="logo" />
                                </Link>
                        </div> */}
                    </div>
                
                </div>
            </div>

            <div className="luvion-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                    <Link to={"/"}  className="navbar-brand">
                        <img src={logo1} alt="logo" />
                                <img src={logo2} alt="logo" />
                                </Link>


                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                

                                <li className="nav-item">
                                <Link to={"/"} className={location.pathname === '/welcome' ? 'nav-link active':'nav-link'}>     
                                    Home  </Link>
                                   
                                </li>

                                <li className="nav-item">
                                <Link to={"/aboutUs"} className={location.pathname === '/aboutUs' ? 'nav-link active':'nav-link'}>     
                                About Us  </Link>
                                </li>

                                <li className="nav-item">
                                <Link to={"/faq"} className={location.pathname === '/faq' ? 'nav-link active':'nav-link'}>     
                                FAQ's   </Link>
                                </li>


                                <li className="nav-item">
                                <Link to={"/contact"} className={location.pathname === '/contact' ? 'nav-link active':'nav-link'}>     
                                Contact Us  </Link> 
                                </li>
                            </ul>

                            <div className="others-options">
                            <Link to={"/auth"} className='login-btn'>     
                            <i className="flaticon-user"></i> Log In </Link> 
                              
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    
    </>
    // <nav
    //   className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
    //   id="navbarBlur"
    //   navbar-scroll="true"
    // >
    //   <div className="container-fluid py-1 px-3">
    //     <nav aria-label="breadcrumb">
    //       <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
    //         <li className="text-sm">
    //           <a className="opacity-5 text-dark">Pages</a>
    //         </li>
    //         <li
    //           className="breadcrumb-item text-sm text-dark active"
    //           aria-current="page"
    //         >
    //           {location.pathname}
    //         </li>
    //       </ol>
    //       <h6 className="font-weight-bolder mb-0">RM REASSIGNMENT PLATFORM</h6>
    //     </nav>
    //     <div
    //       className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
    //       id="navbar"
    //     >
    //       <div className="ms-md-auto pe-md-3 d-flex align-items-center">
    //       </div>
    //       <ul className="navbar-nav  justify-content-end">
            
    //         <li className="nav-item d-flex align-items-center">
    //           <a className="nav-link text-body font-weight-bold px-0" onClick={logOut}>
    //             <i className="fa fa-user me-sm-1"></i>
    //             <span
    //               className="d-sm-inline d-none"
                 
    //               style={{ cursor: "pointer" }}
    //             >
    //               Sign Out
    //             </span>
    //           </a>
    //         </li>
    //         <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
    //           <a className="nav-link text-body p-0" id="iconNavbarSidenav" onClick ={ ()=> toggleNavState()}  >
    //             <div className="sidenav-toggler-inner">
    //               <i className="sidenav-toggler-line"></i>
    //               <i className="sidenav-toggler-line"></i>
    //               <i className="sidenav-toggler-line"></i>
    //             </div>
    //           </a>
    //         </li>
            
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
