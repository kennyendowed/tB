import React, { useState, useEffect } from "react";
import "./TransferFunds.css";
import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import dashboardService from "../../../core/services/dashboard.service";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import logo from "../../../assets/welcome/assets/img/logo.png";

const TransferFunds = (props) => {
  const INITIAL_VALUE = {
    accountNumber: "",
    accountNmae: "",
    amount: "",
    bankNmae: "",
    routingNumber: "",
  };
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState("");
  const [data, setData] = useState(INITIAL_VALUE);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow2(false);
  const handleClose4 = () => setShow2(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showLoader, setisLoader] = useState(false);
  const [tokenLoader , setTokenLoader] = useState(false)
  const requestOtp = () =>{
    Swal.fire({
      title: 'Successful',
      text: "kindly contact the bank for activation code bank@trustbank.com customercare",
      icon: 'success',
      
    })
  }
  const requestOtp1 = () => {
   
    setisLoader(true);
    dashboardService
      .transferPin()
      .then((response) => {
        setisLoader(false);
        console.log(response.data.data.ot);
		console.log(response.data.data[0].ot)
		const Otp =response.data.data[0].ot
		if(Otp){
			toast.success("otp has been sent")
     
		}
      })
      .catch((err) =>{
         setisLoader(false)
         console.log(err)
      
  });
  };
  const verifyToken = () => {
    console.log("true");
    setTokenLoader(true);

    const payload = {
         otp: otp
    }
    console.log(payload)
    dashboardService
      .verifyToken(payload)
      .then((response) => {
        setTokenLoader(false);
        console.log(response);
        console.log(response.message)
        toast.success(response.message)
        if(response.message === 'otp valid'){
          setShow(false)
          setShow1(true)
          setOtp("")
        }
       
	
      })
      .catch((err) =>{
     
        let Msg = () => (
          <div>
            <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
            <p> {err?.response?.data?.message} </p>
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
        setTokenLoader(false);
      });
  };
  const verifyToken2 = () => {
    console.log("true");
    setTokenLoader(true);

    const payload = {
         otp: otp
    }
    console.log(payload)
    dashboardService
      .verifyToken(payload)
      .then((response) => {
        setTokenLoader(false);
        console.log(response);
        toast.success(response.message)
        if(response.message === 'otp valid'){
          setShow1(false)
          setShow2(true)
          setOtp("")
        }
	
      })
      .catch((err) =>{
        let Msg = () => (
          <div>
            <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
            <p> {err?.response?.data?.message} </p>
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
        setTokenLoader(false);
      });
  };
  const verifyToken3 = () => {
    console.log("true");
    setTokenLoader(true);

    const payload = {
         otp: otp
    }
    console.log(payload)
    dashboardService
      .verifyToken(payload)
      .then((response) => {
        setTokenLoader(false);
        console.log(response);
        toast.success(response.message)
        if(response.message === 'otp valid'){
          setShow2(false)
          setShow3(true)
          setOtp("")
        }
	
      })
      .catch((err) =>{
        let Msg = () => (
          <div>
            <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
            <p> {err?.response?.data?.message} </p>
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
        setTokenLoader(false);
      });
  };
  const verifyToken4 = () => {
    console.log("true");
    setTokenLoader(true);

    const payload = {
         otp: otp
    }
    console.log(payload)
    dashboardService
      .verifyToken(payload)
      .then((response) => {
        setTokenLoader(false);
        console.log(response);
        toast.success(response.message)
        if(response.message === 'otp valid'){
          setShow3(false)
          setShow4(true)
          setOtp("")
        }
	
      })
      .catch((err) =>{
        let Msg = () => (
          <div>
            <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
            <p> {err?.response?.data?.message} </p>
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
        setTokenLoader(false);
      });
  };
  const verifyToken5 = () => {
    console.log("true");
    setTokenLoader(true);

    const payload = {
         otp: otp
    }
    const payload2 = {
      accountNumber : data.accountNumber,
      amount : data.amount,
      routingNumber : data.accountNumber,
      bankNmae : data.bankNmae,
      accountNmae : data.accountNmae,
    }
    console.log(payload)
    console.log(payload2)
    dashboardService
      .verifyToken(payload)
      .then((response) => {
        setTokenLoader(false);
      
        toast.success(response.message)
        if(response.message === 'otp valid'){
         return  dashboardService.TransferFunds(payload2)
         .then((response) =>{
           console.log(response.message)
           if(response.message  === "Transaction completed successfully"){
            Swal.fire({
              title: 'Transction Successful',
              text: response.message,
              icon: 'success',
              
            })
            setShow4(false)
            setData(INITIAL_VALUE)
         
           }
         })
         .catch((e) =>{
          console.log("dsgdgsdgsdfgsdsdfsdfsdfsf",e)
          let Msg = () => (
            <div>
              <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
              <p> {e?.response?.data?.message} </p>
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
          setTokenLoader(false);
      
         })
      
         
        }
	
      })
      .catch((err) => {
        let Msg = () => (
            <div>
              <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
              <p> {err?.response?.data?.message} </p>
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
          setTokenLoader(false);
      });
  };
  const handlefirstShow = () => {
    console.log(data);
    setShow(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (
      data.accountNmae === "" ||
      data.accountNumber === "" ||
      data.routingNumber === "" ||
      data.bankNmae === "" ||
      data.amount === ""
    ) {
      console.log(true);
      setIsValid(true);
    } else {
      console.log(false);
      setIsValid(false);
    }
  }, [
    data.accountNmae,
    data.routingNumber,
    data.accountNumber,
    data.bankNmae,
    data.amount,
  ]);
  return (
    <>
      <div className="header">
        <h1 className="header-title">Fund transfer</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h6 className="card-subtitle text-muted">
                Please enter the receivers payment details
              </h6>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label>Enter Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Enter Full Name"
                      value={data.accountNmae}
                      name="accountNmae"
                      onChange={handleInputChange}
                    />
                    <div className="text-danger">
                      {data.accountNmae ? "" : "Account name is required"}
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label>Enter Account Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Enter Account Number"
                      value={data.accountNumber}
                      name="accountNumber"
                      onChange={handleInputChange}
                    />
                    <div className="text-danger">
                      {data.accountNumber ? "" : "Account Number is required"}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label>Enter Routing Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter Routing Number"
                    value={data.routingNumber}
                    name="routingNumber"
                    onChange={handleInputChange}
                  />
                  <div className="text-danger">
                    {data.routingNumber ? "" : "Account Number is required"}
                  </div>
                </div>
                <div className="mb-3">
                  <label>Enter Bank Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Enter Bank Name"
                    value={data.bankNmae}
                    name="bankNmae"
                    onChange={handleInputChange}
                  />
                  <div className="text-danger">
                    {data.bankNmae ? "" : "Account Number is required"}
                  </div>
                </div>
                <div className="mb-3">
                  <label>Enter Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Enter Amount"
                    name="amount"
                    value={data.amount}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger ">
                    {data.amount ? "" : "Account Number is required"}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button
                    type="button"
                    className="btn-lg btn-primary border-0 bg-gradient-info w-100 h-80 mt-4 login_button mb-0"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => setShow(true)}
                    disabled={isValid}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show1}
          onHide={handleClose1}
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>40% to completion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="progress" style = {{ height: "8px"}}>
                 <div 
                 className="progress-bar progress-bar-striped progress-bar-animated" 
                 role="progressbar" 
                 aria-label="Animated striped example" 
                 aria-valuenow="40" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 style={{ width: "40%", border:"1px" }}
                 >
                 
                 
                 </div>
            </div>
            <label>Request Transfer Otp</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Transfer Otp"
              value={otp}
              onChange = {(e) => {setOtp(e.target.value)}}
            />
          </Modal.Body>
          <Modal.Footer>
            <a  onClick={() => requestOtp()}>
            {showLoader ? <PulseLoader color = "#000000"/> : "Request OTP"}
            </a>
            <Button variant="secondary" onClick={() => verifyToken2()}>
            {tokenLoader ? <PulseLoader/> : "Verify OTP"}
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show2}
          onHide={handleClose2}
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>60% to completion </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="progress" style = {{ height: "8px"}}>
                 <div 
                 className="progress-bar progress-bar-striped progress-bar-animated" 
                 role="progressbar" 
                 aria-label="Animated striped example" 
                 aria-valuenow="60" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 style={{ width: "60%", border:"1px" }}
                 >
                 
                 
                 </div>
            </div>
            <label>Request Authourization Code</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Authourization Code"
              value={otp}
              onChange = {(e) => {setOtp(e.target.value)}}
            />
          </Modal.Body>
          <Modal.Footer>
            <a variant="primary" onClick={() => requestOtp()}>
            {showLoader ? <PulseLoader color = "#000000"/> : "Request OTP"}
            </a>
            <Button variant="secondary" onClick={() => verifyToken3()} >
            {tokenLoader ? <PulseLoader/> : "Verify OTP"}
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show3}
          onHide={handleClose3}
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>80% to completion</Modal.Title>
             <div className="progress">
                 <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
            </div>
          </Modal.Header>
          <Modal.Body>
          <div className="progress" style = {{ height: "8px"}}>
                 <div 
                 className="progress-bar progress-bar-striped progress-bar-animated" 
                 role="progressbar" 
                 aria-label="Animated striped example" 
                 aria-valuenow="80" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 style={{ width: "80%", border:"1px" }}
                 >
                 
                 
                 </div>
            </div>
            <label>Clear Funds Code</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Funds Code"
              value={otp}
              onChange = {(e) => {setOtp(e.target.value)}}
            />
          </Modal.Body>
          <Modal.Footer>
            <a variant="primary" onClick={() => requestOtp()}>
            {showLoader ? <PulseLoader color = "#000000"/> : "Request OTP"}
            </a>
            <Button variant="secondary"
            onClick={() => verifyToken4()}
            >
            {tokenLoader ? <PulseLoader/> : "Verify OTP"}
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>
            
              20% to completion
              
            </Modal.Title>
           
           
            
          </Modal.Header>
          <Modal.Body>
                <div className="progress" style = {{ height: "8px"}}>
                 <div 
                 className="progress-bar progress-bar-striped progress-bar-animated" 
                 role="progressbar" 
                 aria-label="Animated striped example" 
                 aria-valuenow="20" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 style={{ width: "20%", border:"1px" }}
                 >
                 
                 
                 </div>
            </div>
            
            <label>Transfer authorization code</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Transfer authorization code"
              value={otp}
			       onChange = {(e)=> setOtp(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <a className=""  onClick={() => requestOtp()}>
            {showLoader ? <PulseLoader color = "#000000"/> : "Request OTP"}
            </a>
            <Button variant="secondary" onClick = {()=>verifyToken()} >
              {tokenLoader ? <PulseLoader/> : "Verify OTP"}
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show4}
          onHide={handleClose4}
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>100% to completion</Modal.Title>
          
          </Modal.Header>
          <Modal.Body>
          <div className="progress" style = {{ height: "8px"}}>
                 <div 
                 className="progress-bar progress-bar-striped progress-bar-animated" 
                 role="progressbar" 
                 aria-label="Animated striped example" 
                 aria-valuenow="100" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 style={{ width: "100%", border:"1px" }}
                 >
                 
                 
                 </div>
            </div>
            <label>Complete Transfer Code</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Enter Otp"
              value={otp}
              onChange = {(e) => {setOtp(e.target.value)}}
            />
          </Modal.Body>
          <Modal.Footer>
            <a  onClick={() => requestOtp()}>
            {showLoader ? <PulseLoader color = "#000000"/> : "Request OTP"}
            </a>
            <Button 
            variant="secondary"
            onClick={() => verifyToken5()}
            >
            {tokenLoader ? <PulseLoader/> : "Verify OTP"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default TransferFunds;
