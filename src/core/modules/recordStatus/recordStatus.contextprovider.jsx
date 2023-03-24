import { useState ,useEffect} from "react";
import { RecordStatusContext } from "./recordStatus.context";
import { useNavigate,Link } from "react-router-dom";
import dashboardService from "../../../core/services/dashboard.service";
import { toast } from 'react-toastify';
// import logo from "../../../assets/img/logos/providus-logo.svg";
import AuthService from "../../../core/services/auth.service";
import { useAuthContext } from "../../../core/modules";


export const RecordStatusContextProvider = ({ children }) => {
  const [isFetchExisted, setFetchExisted] = useState([]);
  const { currentUser ,logout} = useAuthContext();
	const navigate = useNavigate();
  const fetchResult = () => {
         dashboardService.fetchExistedUsersRecords().then(
          (response) => {

          setFetchExisted(response);
        },
        (ex) => {
          // console.log(ex );
          if (ex.code === "ERR_NETWORK") {
            let Msg = () => (
              <div>
                {/* <img src={logo} className="toaster-brand-img h-100" alt="main_logo" /> */}
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
            if(ex.response.status === 401){
              AuthService.logout();
              logout();
              navigate("/auth");
            }
            let Msg = () => (
              <div>
                {/* <img src={logo} className="toaster-brand-img h-100" alt="main_logo" /> */}
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
                {/* <img src={logo} className="toaster-brand-img h-100" alt="main_logo" /> */}
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
   }

  return (
    <RecordStatusContext.Provider
      value={{
        isFetchExisted,fetchResult
      }}
    >
      {children}
    </RecordStatusContext.Provider>
  );
};
