import React, { useEffect, useState,createContext } from "react";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import logo from "../../assets/img/logos/providus-logo.svg";
import "./Dashboard.css";
import dashboardService from "../../core/services/dashboard.service";
import Skeleton from 'react-loading-skeleton';
import HodDashboard from "../../Components/Pages/Dashboard/hod";
import Reports from "../../Components/Pages/Dashboard/Reports";
import FinconDashboard from "../../Components/Pages/Dashboard/fincon";
import ActionCard from "../../Components/ActionCard/ActionCard";
import Treated from "../../Components/Pages/Dashboard/treated";



function Dashboard() {
  const currentData = JSON.parse(window.localStorage.getItem('user'));
  const [isFetchExisted, setFetchExisted] = useState([]);
  const [currentUser, setcurrentUser] = useState([currentData]);
  const location = useLocation();

  useEffect(() => {
      const timing = setTimeout(async () => {
      dashboardService.fetchExistedUsers().then(
        (response) => {
          //  console.log(response.data.data)
          setFetchExisted(response.data.data);
        },
        (ex) => {
          // console.log(ex );
          if (ex.code === "ERR_NETWORK") {
            let Msg = () => (
              <div>
                <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                <p> {ex.message} </p>
              </div>
            )
            toast.error(Msg, {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        
          if(ex.response.data.status ==="FALSE"){
            let Msg = () => (
              <div>
                <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                <p> {ex.message}  </p>
                <p>❌ {ex.response.data.data[0].message} ❌</p>
              </div>
            )
            toast.error(Msg, {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (ex.response.data?.error.code === 404) {
            let Msg = () => (
              <div>
                <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                <p> {ex.message}  </p>
                <p>❌ {ex.response.data.error.message} ❌</p>
              </div>
            )
            toast.error(Msg, {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }

        }
      );

    }, 1000)
    return () => clearTimeout(timing);

  }, []);





  return (
    <div>
    
      {currentUser[0].roleaccess.includes('GH' ) ? <HodDashboard /> : currentUser[0].roleaccess.includes('fincon' ) ? <FinconDashboard /> : currentUser[0].roleaccess.includes('HRM') || currentUser[0].roleaccess.includes('fincon' ) || currentUser[0].roleaccess.includes( 'ICU' )? <Reports/> : " NULL no access yet......"}
    
    </div>

  );
}

export default Dashboard;



