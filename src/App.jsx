import "./App.css";
import { Header, Sidebar, Footer,Onheader } from "./Components";
import {RecordStatusContextProvider, useRecordStatusContext, MainContextProvider, useMainContext ,AuthContextProvider,useAuthContext} from "./core/modules";
import MainRoutes from './route'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'react-loading-skeleton/dist/skeleton.css'





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
  const { className } = useMainContext();
  const { currentUser } = useAuthContext();
  return (
     <div className={className} >
         {currentUser ? 
            (

              <Sidebar/>

             )
           : ( 

              <Onheader/> 
              
             )
           }
      <main className="main-content position-relative max-height-vh-100 h-100 mt- border-radius-lg ">
        <Header />
        <ToastContainer />
        <MainRoutes/>
        <div className="container-fluid ">
          <Footer/>
          
        </div>
      </main>
    </div>
  
  );
};

export default App;
