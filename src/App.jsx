import "./App.css";
import { Header, Authheader, Footer, Onheader } from "./Components";
import { useLocation } from "react-router-dom";
import { MainContextProvider, useMainContext, AuthContextProvider, useAuthContext } from "./core/modules";
import MainRoutes from './route'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'react-loading-skeleton/dist/skeleton.css'

//RecordStatusContextProvider, useRecordStatusContext,



function App() {
  return (
    <MainContextProvider>
      <AuthContextProvider>
        <MainRender />
      </AuthContextProvider>
    </MainContextProvider>
  );
}

const MainRender = () => {
  const location = useLocation()
  const { className } = useMainContext();
  const { currentUser } = useAuthContext();
  return (
    <div className={className} >
      
<ToastContainer />
      {/* {currentUser ? 
            (

              <Sidebar/>

             )
           : ( 

              <Onheader/> 
              
             )
           } */}
      {(location.pathname === "/auth"  || location.pathname === "/auth/chnangePassword" ||  location.pathname === "/contact" || location.pathname === "/faq" || location.pathname === "/aboutUs" || location.pathname === "/auth/register" || location.pathname === "/welcome" || location.pathname === "/") ?
        (

          <main className="main-content position-relative max-height-vh-100 h-100 mt- border-radius-lg ">
            <Header />
            {/* <ToastContainer /> */}
            <MainRoutes />
            <div className="container-fluid ">
              <Footer />
            </div>
          </main>
        ) : 
        
        
       (
      <Authheader />
       )}
    </div>

  );
};

export default App;
