import './HodDashboard.css'
import { toast } from 'react-toastify';
import logo from "../../../../assets/img/logos/providus-logo.svg";
import dashboardService from "../../../../core/services/dashboard.service";
import React, {  useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import LoadingSpinner from "../../../../Components/spinner";
import NotFound from "../../../../Components/ErrorScreen/404";
import download from "downloadjs";
import RMScostomerList from "../../../../Components/Pages/RMScostomerList/";
import ReassignRMFileUpload from "../../../../Components/Forms/ReassignRMFileUpload";
import { Modal, Button } from "react-bootstrap";
import "./HodDashboard.css";
import {Buffer} from 'buffer';
import { useRecordStatusContext } from "../../../../core/modules";
//const sample = require("../../../../assets/sampleDocument/RMReassignmentBatchUpload.xlsx");
const utils = require("../../../../core/utils/helpers/utils");

function HodDashboard() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid } } = useForm({ mode: "onChange" });
    const [RMsCustomerdata, setRMsCustomerdata] = useState([])
    const [modaldata, setmodaldata] = useState([]);
    const [show, setShow] = useState(false);
    const [isButtonSubmitted , setisSubmitted] =useState(false);
    const handleClose = () => setShow(false);
    const [openModal, setBulkUploadShow] = useState(false);
    const handleBulkModalClose = () => setBulkUploadShow(false);
    const { isFetchResult,fetchResult} = useRecordStatusContext();


    useEffect(() => {
      const fetchData = async() => {
        
        const record = JSON.parse(localStorage.getItem("record"));
        const {ivKey,secretKey }=  JSON.parse(localStorage.getItem("user"));
       
        if(!record) {
          return
        }
      
        let c = await utils.dencrypt(
          Buffer.from(secretKey, "base64"),
          Buffer.from(ivKey, "base64"),
          record
        );
       const decryptedData = JSON.parse(c);
// console.log(decryptedData)
        setRMsCustomerdata(decryptedData);
      //  await onSubmit(record)
      }
      fetchData();
      fetchResult();
    }, []);

    const onSubmit = async (record) => {
      const {ivKey,secretKey }=  JSON.parse(localStorage.getItem("user"));
     
        setisSubmitted(true);
        try {
          // var arData ={
          //   accountNumber:record
          
          // localStorage.setItem("record", JSON.stringify(record))
          // }
          // return new Promise( (resolve) => {
          //   setTimeout(() => {
          //     resolve();
              dashboardService.GetAccountInfo(record).then(
                (response) => {
                  localStorage.setItem("record",JSON.stringify(response.data))
                  utils.dencrypt(
                    Buffer.from(secretKey, "base64"),
                    Buffer.from(ivKey, "base64"),
                    response.data
                  ).then((result) => {
                    const decryptedData = JSON.parse(result);
                    setRMsCustomerdata(decryptedData);
                  })
                  .catch((error) => {
                    return null;
                  });
                  setisSubmitted(false);
                     },
                (ex) => {
                  
                  setRMsCustomerdata(ex.response.data);
                  if (typeof ex.response.data.data != 'string') {
                    for (let err in ex.response.data.data) {
                   
                      let Msg = () => (
                        <div>
                          <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                          <p> {ex.response.data.data[0].message} </p>
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
                      // this._globals.toastAlert( ex.response.data.error.data[0].message, 'error');
                    }
                  }
                  setisSubmitted(false);
    
                  // console.log(ex.response.data.data[0].message);
                }
              );
          //   }, 2000);
          // });
        } catch (err) {
     
        }
    
      };
    const handleBulkShow =() =>{
      setBulkUploadShow(true);
    }
    
      const handleShow = (record) => {
        // getData(record);
        setShow(true);
    
        setmodaldata(record);
    
      }
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
     //  console.log(RMsCustomerdata[0])        
//  console.log(RMsCustomerdata[0]?.customerInfo?.AccountName)
    return (
        <>

          <div className="col-md-12 mb-lg-0 mb-4">
     
     <div className="card mt-4">
       <div className="card-body p-3">
         <div className="row">
           <div className="col-md-6 mb-md-0 mb-4">
             <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
               <form onSubmit={handleSubmit(onSubmit)}>
                 <div className=" d-flex pt-4 ">
                   {/* <div className="input-group"> */}
                   <div className="mb-0  m-auto ">
                   <input
                     type="text"
                     name="AccountNumber"
                     placeholder="Type account number..."
                     {...register('AccountNumber', { required: "Account Number is required", maxLength: 80, pattern: { value: /^[0-9]+$/, message: "Please Type Account Number" } })}
                     className="form-control search_input pl-0"
                   />
                    <p>{errors.AccountNumber?.message}</p><br />
                   </div>
                  
                   {/* </div> */}
                   {/* <div className="input-group"> */}
                   <div className=" ">

                     {!isButtonSubmitted ? (
                       <button type="submit" className="btn bg-gradient-dark search_button" disabled={!isDirty || !isValid}>Search</button>
                     ) : (
                       <button
                         className="btn bg-gradient-dark search_button mb-0"
                         disabled
                       >
                         <LoadingSpinner />  
                       </button>
                     )
                     }

                     {/* </div> */}

                   </div>
                 </div>
               </form>
             </div>
           </div>
           <div className="col-md-6">
           <div>
         <span className=" ">
           How to process bulk Upload
         </span>
         <ol className="list-decimal">
           <li>
             Click here to download <code>.xlsx</code> file    
               <a className='samplefile' >
                 Download Sample File
             </a>
           </li>
           <li>Fill out all the information required </li>
           <li>
             Upload  for processing
           </li>
         </ol>
    
         {/* <CustomizedButton
           variant="outlined"
           endIcon={<DownloadIcon />}
           onClick={() => download(sample)}
         >RMReassignmentBatchUpload
           Download Sample File
         </CustomizedButton> */}
       </div>
           <div className="text-lg-end ">
                         <a className="btn btn-lg  bg-gradient-info mt-3 mt-lg-1  mb-0" onClick={() => handleBulkShow()}><i className="fa-solid fa-upload me-2"></i>Bulk Upload</a>
                       </div>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="row my-2">

     <div className="col-12 col-xl-4">
       <div className="card h-100">
         <div className="card-header pb-0 p-3">
           <div className="row">
             <div className="col-md-8 d-flex align-items-center">
               <h6 className="mb-0">Customer Information</h6>
             </div>
             <hr className="horizontal dark my-3" />
             {/* <div className="col-md-4 text-end">
               <a >
              
               </a>
             </div> */}
           </div>
         </div>
         <div className="card-body p-3">

           <ul className="list-group">
             {/* {RMsCustomerdata.status !== "FALSE" ? ( */}
               <>
                 <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; {RMsCustomerdata[0]?.customerInfo?.AccountName}</li>
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Customer ID:</strong> &nbsp;  {RMsCustomerdata[0]?.customerInfo?.CustomerID}</li>
                 <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Account Number:</strong> &nbsp;  {RMsCustomerdata[0]?.customerInfo?.AccountNumber}</li>
                 <li value = "" className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Account Balance:</strong>{(RMsCustomerdata[0]?.customerInfo?.AccountBalance) ? formatter.format(RMsCustomerdata[0].customerInfo?.AccountBalance) : ' '}</li>
                 {/* <li  value = ""className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Leadger Balance:</strong> &nbsp;  {(RMsCustomerdata.lien_bal) ? formatter.format(RMsCustomerdata?.lien_bal) : ' '}</li> */}
                 {/* <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Sort Code:</strong> &nbsp;  {RMsCustomerdata?.name}</li>
                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Branch Code:</strong> &nbsp;  {RMsCustomerdata?.name}</li>
                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Bvn:</strong> &nbsp;  {RMsCustomerdata?.name}</li>
                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Account Opening Date:</strong> &nbsp;  {RMsCustomerdata?.name}</li> */}
               </>
             {/* ) : (
               // <Skeleton /> 
               <NotFound message={RMsCustomerdata.data} />
             )} */}


           </ul>
         </div>
       </div>
     </div>

     <div className="col-12 col-xl-8">
       <div className="row ">
         <div className="card h-100">
           <div className="card-header pb-0 p-3">
             <div className="row">
               <div className="col-md-8 d-flex align-items-center">
                 <h6 className="mb-0">Account Officer Information</h6>
               </div>
               <hr className="horizontal dark my-3" />
               {/* <div className="col-md-4 text-end">
                 <a >
                   
                 </a>
               </div> */}
             </div>
           </div>
           <div className="card-body p-3">
             <ul className="list-group">
               {/* {RMsCustomerdata.status !== "FALSE" ? ( */}
                 <>
                   <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                     <div className="d-flex flex-column">


                       <span className="mb-2 text-xs">Officer Name: <span className="text-dark font-weight-bold ms-sm-2">{RMsCustomerdata[0]?.customerAccountOfficerInfo?.FirstName} {RMsCustomerdata[0]?.customerAccountOfficerInfo?.Surname}</span></span>
                       <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">{RMsCustomerdata[0]?.customerAccountOfficerInfo?.EmailAddress} </span></span>
                       <span className="text-xs">Phone Number: <span className="text-dark ms-sm-2 font-weight-bold">{RMsCustomerdata[0]?.customerAccountOfficerInfo?.MobileNumber} </span></span>
                     </div>
                     {( RMsCustomerdata[0]?.RMcode ==="NULL")  ||  ( typeof RMsCustomerdata[0]?.RMcode === "undefined") ? (
                      <></>
                     ) : ( <div className="ms-auto text-end">
                     <a className="btn btn-link text-danger text-gradient px-3 mb-0" onClick={() => handleShow(RMsCustomerdata[0])}><i className="me-2"></i>Change Account Officer</a>
                   </div>)}

                   </li>
                 </>
              {/* //  ) : (
              //    <NotFound message={RMsCustomerdata.data} />
              //  )} */}
             </ul>




           </div>
         </div>
       </div>
       <div className="row my-2">
         <div className="card h-100">
           <div className=" card-header pb-0 p-3 ">
             <div className="row ">
               <div className="col-md-8 d-flex align-items-center">
                 <h6 className="mb-0">Customer Contact</h6>
               </div>
               <hr className="horizontal dark my-3" />
               {/* <div className="col-md-4 text-end">
                 <a >
                 </a>
               </div> */}
             </div>
           </div>
           <div className="card-body p-3">
             <ul className="list-group">
               <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                 <div className="d-flex flex-column">
                   <span className="mb-2 text-xs">Customer Address: <span className="text-dark font-weight-bold ms-sm-2">{RMsCustomerdata[0]?.customerInfo?.Address}</span></span>
                   <span className="mb-2 text-xs">Phone Number: <span className="text-dark ms-sm-2 font-weight-bold">{RMsCustomerdata[0]?.customerInfo?.Phone}</span></span>
                   <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">{RMsCustomerdata[0]?.customerInfo?.EmailAddress}</span></span>
                 </div>

                 {/* <div className="ms-auto text-end">
              
               </div> */}
               </li>

             </ul>




           </div>
         </div>

       </div>

     </div>
   </div>
   <Modal show={show} onHide={handleClose} size="xl">
     <Modal.Header closeButton>
       {/* <Modal.Title>Modal heading</Modal.Title> */}
     </Modal.Header>
     <Modal.Body>
       <RMScostomerList RmsCustomers={modaldata} />
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       {/* <Button variant="primary" onClick={handleClose}>
         Save Changes
       </Button> */}
     </Modal.Footer>
   </Modal>

   <Modal show={openModal} onHide={handleBulkModalClose} size="xl">
     <Modal.Header closeButton>
       {/* <Modal.Title>Modal heading</Modal.Title> */}
     </Modal.Header>
     <Modal.Body>
       <ReassignRMFileUpload />
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleBulkModalClose}>
         Close
       </Button>
       {/* <Button variant="primary" onClick={handleClose}>
         Save Changes
       </Button> */}
     </Modal.Footer>
   </Modal>
        </>
        );

}

export default HodDashboard;