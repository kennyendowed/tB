import React, {useState,useEffect}from 'react';
import { useRecordStatusContext } from "../../../core/modules";
import {  Link } from "react-router-dom";
import ActionCard from '../../ActionCard/ActionCard';
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logos/providus-logo.svg";
import dashboardService from "../../../core/services/dashboard.service";
import DetailsReportList from "../../../Components/Pages/DetailsReportList/";
import { Modal, Button } from "react-bootstrap";
import "./Actionbar.css"


function Actionbar() {
  const currentData = JSON.parse(window.localStorage.getItem('user'));
  const { isFetchExisted, fetchResult } = useRecordStatusContext();
    // const [isFetchExisted, setFetchExisted] = useState([]);
    const [RMsCustomerdata, setRMsCustomerdata] = useState([])
    const [currentUser] = useState([currentData]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (record) => {
      setRMsCustomerdata(record);
      setShow(true);  
    } 
 const update = () =>{
    dashboardService.fetchExistedUsers().then(
      (response) => {
        // setFetchExisted(response.data.data);
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
              <p>❌{ex.response.data.data[0].message} ❌</p>
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
              <p>{ex.message}</p>
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

  useEffect(() => {
      const timing = setTimeout(async () => {
     
        await fetchResult()
         //.then(
      //   (response) => {

      //     setFetchExisted(response);
      //   },
      //   (ex) => {
      //     // console.log(ex );
      //     if (ex.code === "ERR_NETWORK") {
      //       let Msg = () => (
      //         <div>
      //           <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
      //           <p> {ex.message} </p>
      //         </div>
      //       )
      //       toast.error(Msg, {
      //         position: "top-right",
      //         autoClose: 10000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //       });
      //     }
        
      //     if(ex.response.data.status ==="FALSE"){
      //       let Msg = () => (
      //         <div>
      //           <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
      //           <p> {ex.message}  </p>
      //           <p>❌ {ex.response.data.data[0].message} ❌</p>
      //         </div>
      //       )
      //       toast.error(Msg, {
      //         position: "top-right",
      //         autoClose: 10000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //       });
      //     }
      //     if (ex.response.data?.error.code === 404) {
      //       let Msg = () => (
      //         <div>
      //           <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
      //           <p> {ex.message}  </p>
      //           <p>❌ {ex.response.data.error.message} ❌</p>
      //         </div>
      //       )
      //       toast.error(Msg, {
      //         position: "top-right",
      //         autoClose: 10000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //       });
      //     }

      //   }
      // );

    }, 1000)
    return () => clearTimeout(timing);

  }, []);
// console.log(isFetchExisted['FinconpendingRequest']?.rows)
  return (
    <div>
         <div className="row ">       
        
          <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4 "> 
          <a  onClick={() => handleShow(currentUser[0].roleaccess.includes('GH' ) ? isFetchExisted['HodPendingRequest']?.rows : currentUser[0].roleaccess.includes('fincon' ) ? isFetchExisted['FinconpendingRequest']?.rows :currentUser[0].roleaccess.includes('ICU' ) ? isFetchExisted['FinconpendingRequest']?.rows :  currentUser[0].roleaccess.includes('HRM' ) ? isFetchExisted['FinconpendingRequest']?.rows: "")}>
        <ActionCard
          title = "Total pending"
          icon="ni ni-paper-diploma"
          value={currentUser[0].roleaccess.includes('GH' ) ? isFetchExisted['HodPendingRequest']?.count : currentUser[0].roleaccess.includes('fincon' ) ? isFetchExisted['FinconpendingRequest']?.count :currentUser[0].roleaccess.includes('ICU' ) ? isFetchExisted['FinconpendingRequest']?.count :  currentUser[0].roleaccess.includes('HRM' ) ? isFetchExisted['FinconpendingRequest']?.count : ""}
         />
             </a>
        </div>
       
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4 ">
        <a  onClick={() => handleShow(currentUser[0].roleaccess.includes('GH' ) ? isFetchExisted['AllHODDecline']?.rows : currentUser[0].roleaccess.includes('fincon' ) ? isFetchExisted['Decline']?.rows : "")}>
        <ActionCard
          title = "Total Rejected"
          icon="ni ni-world"
          value={currentUser[0].roleaccess.includes('GH' ) ? isFetchExisted['AllHODDecline']?.count  : currentUser[0].roleaccess.includes('ICU' ) ? isFetchExisted["Decline"]?.count : currentUser[0].roleaccess.includes('HRM' ) ? isFetchExisted["Decline"]?.count : currentUser[0].roleaccess.includes('fincon' ) ? isFetchExisted["Decline"]?.count : ""}
         />
          </a>
        </div>
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4 ">
        <a  onClick={() => handleShow(currentUser[0].roleaccess.includes('GH' ) ? isFetchExisted['AllHODApprove']?.rows : currentUser[0].roleaccess.includes('ICU' ) ? isFetchExisted['Approve']?.rows :  currentUser[0].roleaccess.includes('HRM' ) ? isFetchExisted['Approve']?.rows :  currentUser[0].roleaccess.includes('fincon' ) ? isFetchExisted['Approve']?.rows : "")}>
        <ActionCard
          title = "Total Approved"
          icon="fas fa-user"
          value={currentUser[0].roleaccess.includes('GH' ) ? isFetchExisted['AllHODApprove']?.count  : currentUser[0].roleaccess.includes('ICU' ) ? isFetchExisted["Approve"]?.count : currentUser[0].roleaccess.includes('HRM' ) ? isFetchExisted["Approve"]?.count : currentUser[0].roleaccess.includes('fincon' ) ? isFetchExisted["Approve"]?.count : ""}
          
         />
               </a>
        </div>
  
      </div>
      

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <DetailsReportList RmsCustomers={RMsCustomerdata} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default Actionbar;

